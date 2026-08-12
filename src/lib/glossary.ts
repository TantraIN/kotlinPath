import { GLOSSARY, SOURCE_META, type GlossarySource } from "@/content/glossary";
import { pick, type Lang } from "@/lib/i18n";

/**
 * The flat, single-language shape the browser needs for tooltips.
 * Projecting on the server keeps roughly two thirds of the glossary out of the
 * client bundle, since only one language is ever displayed at a time.
 */
export type FlatEntry = {
  term: string;
  kind: string;
  source: GlossarySource;
  sourceLabel: string;
  accent: string;
  importLine: string | null;
  does: string;
  affects: string;
  docs?: string;
  related?: string[];
};

export type FlatGlossary = Record<string, FlatEntry>;

export function projectGlossary(lang: Lang): FlatGlossary {
  const out: FlatGlossary = {};
  for (const [key, entry] of Object.entries(GLOSSARY)) {
    const meta = SOURCE_META[entry.source];
    out[key] = {
      term: entry.term,
      kind: pick(entry.kind, lang),
      source: entry.source,
      sourceLabel: pick(meta.label, lang),
      accent: meta.accent,
      importLine: entry.importLine,
      does: pick(entry.does, lang),
      affects: pick(entry.affects, lang),
      docs: entry.docs,
      related: entry.related,
    };
  }
  return out;
}
