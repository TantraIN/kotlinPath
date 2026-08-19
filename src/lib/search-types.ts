import type { IFuseOptions } from "fuse.js";

import type { Lang } from "@/lib/i18n";

/**
 * Client-safe half of the search module.
 *
 * `search.ts` reads MDX files from disk, so importing anything from it — even a
 * constant — drags `node:fs` into the browser bundle. The shape and the Fuse
 * configuration live here instead, and the browser imports only this file.
 */

export type SearchDoc = {
  id: string;
  kind: "lesson" | "phase" | "glossary" | "heading" | "project";
  title: string;
  /** Where this result lives, shown under the title. */
  context: string;
  /** Matched excerpt / description. */
  body: string;
  href: string;
  /** Extra terms that should match: API names, tags, aliases. */
  keywords: string;
  /** Which language this document's prose is in. */
  lang: Lang;
};

/** Tuned so an exact API name always outranks a loose prose match. */
export const FUSE_OPTIONS: IFuseOptions<SearchDoc> = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.34,
  ignoreLocation: true,
  minMatchCharLength: 2,
  keys: [
    { name: "title", weight: 3 },
    { name: "keywords", weight: 2 },
    { name: "context", weight: 1 },
    { name: "body", weight: 0.8 },
  ],
};
