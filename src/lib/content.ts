import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { DEFAULT_LANG, type Lang } from "@/lib/i18n";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "lessons");
const PROJECT_ROOT = path.join(process.cwd(), "src", "content", "projects");

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

function filePath(root: string, lang: Lang, docPath: string): string {
  return path.join(root, lang, `${docPath}.mdx`);
}

async function readIfExists(file: string): Promise<string | null> {
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
}

/**
 * Reads one MDX document in the requested language, falling back to English so
 * a partially translated course never renders an empty page.
 */
async function loadDoc(root: string, lang: Lang, docPath: string): Promise<LoadedLesson | null> {
  let raw = await readIfExists(filePath(root, lang, docPath));
  let resolvedLang = lang;
  let fallback = false;

  if (raw === null && lang !== DEFAULT_LANG) {
    raw = await readIfExists(filePath(root, DEFAULT_LANG, docPath));
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

export function loadLesson(lang: Lang, lessonPath: string): Promise<LoadedLesson | null> {
  return loadDoc(CONTENT_ROOT, lang, lessonPath);
}

/** One step of a guided project, at `<projectSlug>/<stepSlug>`. */
export function loadProjectStep(lang: Lang, stepPath: string): Promise<LoadedLesson | null> {
  return loadDoc(PROJECT_ROOT, lang, stepPath);
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

/**
 * Must match rehype-slug's behaviour so anchors line up.
 *
 * `\p{M}` is not optional. Devanagari vowel signs and the virama — ा ि ी ु े ो ् —
 * are Unicode *marks*, not letters, so dropping that class silently strips every
 * matra: `पुराना-काम` becomes `परन-कम`. rehype-slug keeps them, and the two ids
 * then disagree, which broke every "on this page" link in Hindi while leaving
 * the Latin languages fine.
 *
 * Each space also becomes its own hyphen rather than collapsing a run, because
 * that is what github-slugger does: `super — पुराना` loses the dash and keeps
 * both surrounding spaces, giving `super--पुराना`.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

export async function lessonExists(lang: Lang, lessonPath: string): Promise<boolean> {
  return (await readIfExists(filePath(CONTENT_ROOT, lang, lessonPath))) !== null;
}
