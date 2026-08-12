import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { DEFAULT_LANG, type Lang } from "@/lib/i18n";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "lessons");

export type LessonFrontmatter = {
  /** Localized lesson title. Falls back to the English title in curriculum.ts. */
  title?: string;
  /** One-line framing sentence shown under the title and in search results. */
  description?: string;
  /** ISO date, shown as "Updated". */
  updated?: string;
};

export type LoadedLesson = {
  /** Raw MDX body, frontmatter stripped. */
  body: string;
  frontmatter: LessonFrontmatter;
  /** True when the requested language had no file and English was used. */
  fallback: boolean;
  /** The language actually rendered. */
  resolvedLang: Lang;
};

function filePath(lang: Lang, lessonPath: string): string {
  return path.join(CONTENT_ROOT, lang, `${lessonPath}.mdx`);
}

async function readIfExists(file: string): Promise<string | null> {
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
}

/**
 * Loads a lesson in the requested language, falling back to English so a
 * partially translated course never renders an empty page.
 */
export async function loadLesson(lang: Lang, lessonPath: string): Promise<LoadedLesson | null> {
  let raw = await readIfExists(filePath(lang, lessonPath));
  let resolvedLang = lang;
  let fallback = false;

  if (raw === null && lang !== DEFAULT_LANG) {
    raw = await readIfExists(filePath(DEFAULT_LANG, lessonPath));
    resolvedLang = DEFAULT_LANG;
    fallback = true;
  }

  if (raw === null) return null;

  const parsed = matter(raw);
  return {
    body: parsed.content,
    frontmatter: parsed.data as LessonFrontmatter,
    fallback,
    resolvedLang,
  };
}

/** Plain-text extraction for the search index — strips MDX syntax, keeps prose. */
export function toPlainText(mdx: string): string {
  return mdx
    .replace(/```[\s\S]*?```/g, " ") // fenced code
    .replace(/<[^>]+>/g, " ") // JSX tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links keep their label
    .replace(/[#>*_~`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Every `## heading` in a lesson, for the "on this page" rail and search. */
export function extractHeadings(mdx: string): { id: string; text: string; level: 2 | 3 }[] {
  const withoutCode = mdx.replace(/```[\s\S]*?```/g, "");
  const matches = withoutCode.matchAll(/^(#{2,3})\s+(.+)$/gm);

  return [...matches].map((match) => {
    const text = match[2].replace(/[`*_]/g, "").trim();
    return {
      id: slugify(text),
      text,
      level: match[1].length === 2 ? (2 as const) : (3 as const),
    };
  });
}

/** Must match rehype-slug's behaviour so anchors line up. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

export async function lessonExists(lang: Lang, lessonPath: string): Promise<boolean> {
  return (await readIfExists(filePath(lang, lessonPath))) !== null;
}
