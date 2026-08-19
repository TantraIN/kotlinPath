import { allEntries } from "@/content/glossary";
import { ALL_LESSONS, CURRICULUM } from "@/content/curriculum";
import { ALL_STEPS, PROJECTS } from "@/content/projects";
import { extractHeadings, loadLesson, loadProjectStep, toPlainText } from "@/lib/content";
import { pick, type Lang } from "@/lib/i18n";
import type { SearchDoc } from "@/lib/search-types";

/**
 * The search index is generated at build time and shipped as JSON, so search is
 * instant and needs no backend. Fuse.js does the fuzzy matching in the browser.
 */

export type { SearchDoc } from "@/lib/search-types";
export { FUSE_OPTIONS } from "@/lib/search-types";

export async function buildSearchIndex(lang: Lang): Promise<SearchDoc[]> {
  const docs: SearchDoc[] = [];

  for (const phase of CURRICULUM) {
    docs.push({
      id: `phase:${phase.slug}`,
      kind: "phase",
      title: `${pick(phase.title, lang)}`,
      context: `Phase ${phase.number}`,
      body: pick(phase.blurb, lang),
      href: `/${lang}/curriculum#${phase.slug}`,
      keywords: phase.slug,
      lang,
    });
  }

  for (const { phase, lesson, path } of ALL_LESSONS) {
    const loaded = await loadLesson(lang, path);
    const title = loaded?.frontmatter.title ?? lesson.title;
    const description = loaded?.frontmatter.description ?? "";
    const prose = loaded ? toPlainText(loaded.body).slice(0, 1400) : "";

    docs.push({
      id: `lesson:${path}`,
      kind: "lesson",
      title,
      context: `${pick(phase.title, lang)}`,
      body: description || prose.slice(0, 180),
      href: `/${lang}/learn/${path}`,
      keywords: [lesson.title, lesson.slug, ...(lesson.tags ?? []), prose].join(" "),
      lang,
    });

    if (loaded) {
      for (const heading of extractHeadings(loaded.body)) {
        if (heading.level !== 2) continue;
        docs.push({
          id: `heading:${path}#${heading.id}`,
          kind: "heading",
          title: heading.text,
          context: title,
          body: "",
          href: `/${lang}/learn/${path}#${heading.id}`,
          keywords: heading.text,
          lang,
        });
      }
    }
  }

  for (const project of PROJECTS) {
    docs.push({
      id: `project:${project.slug}`,
      kind: "project",
      title: project.name,
      context: pick(project.title, lang),
      body: pick(project.blurb, lang),
      href: `/${lang}/projects/${project.slug}`,
      keywords: [project.slug, ...project.stack.map((item) => item.name)].join(" "),
      lang,
    });
  }

  for (const { project, step, path } of ALL_STEPS) {
    const loaded = await loadProjectStep(lang, path);
    const title = loaded?.frontmatter.title ?? step.title;
    const prose = loaded ? toPlainText(loaded.body).slice(0, 1400) : "";

    docs.push({
      id: `step:${path}`,
      kind: "project",
      title,
      context: project.name,
      body: loaded?.frontmatter.description ?? pick(step.outcome, lang),
      href: `/${lang}/projects/${path}`,
      keywords: [step.title, step.slug, prose].join(" "),
      lang,
    });
  }

  for (const entry of allEntries()) {
    docs.push({
      id: `glossary:${entry.term}`,
      kind: "glossary",
      title: entry.term,
      context: pick(entry.kind, lang),
      body: pick(entry.does, lang),
      href: `/${lang}/glossary#${entry.term.toLowerCase()}`,
      keywords: [entry.term, entry.importLine ?? "", ...(entry.related ?? [])].join(" "),
      lang,
    });
  }

  return docs;
}

