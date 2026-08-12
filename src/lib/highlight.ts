import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import type { Element, ElementContent } from "hast";
import { createHighlighter, type Highlighter, type ShikiTransformer } from "shiki";

import { hasTerm } from "@/content/glossary";

/**
 * Build-time syntax highlighting.
 *
 * One highlighter instance is reused across the whole build. Both themes are
 * rendered into CSS variables in a single pass, so switching light/dark at
 * runtime costs nothing and ships no highlighter to the browser.
 */

export const CODE_LANGS = [
  "kotlin",
  "java",
  "xml",
  "groovy",
  "gradle",
  "bash",
  "shell",
  "json",
  "yaml",
  "toml",
  "properties",
  "sql",
  "diff",
  "text",
] as const;

export type CodeLang = (typeof CODE_LANGS)[number] | (string & {});

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({
    // Catppuccin reads well on both our warm paper and deep indigo surfaces.
    themes: ["catppuccin-latte", "catppuccin-mocha"],
    langs: [
      "kotlin",
      "java",
      "xml",
      "groovy",
      "bash",
      "json",
      "yaml",
      "toml",
      "ini",
      "sql",
      "diff",
      "typescript",
    ],
  });
  return highlighterPromise;
}

/** Languages Shiki does not know by that exact name. */
const LANG_ALIASES: Record<string, string> = {
  gradle: "groovy",
  kts: "kotlin",
  "gradle.kts": "kotlin",
  shell: "bash",
  sh: "bash",
  properties: "ini",
  manifest: "xml",
  txt: "text",
  plaintext: "text",
};

/**
 * Marks every token that exists in the glossary so the client tooltip layer can
 * find it. Runs on the server, adds no runtime cost beyond a data attribute.
 */
function glossaryTransformer(): ShikiTransformer {
  return {
    name: "kotlinpath:glossary",
    span(node: Element) {
      const child = node.children?.[0];
      if (!child || child.type !== "text") return;

      const raw = child.value;
      const term = raw.trim();
      if (!term || !hasTerm(term)) return;

      // The token is exactly the term — annotate the existing span.
      if (raw === term) {
        node.properties = {
          ...node.properties,
          class: [node.properties?.class, "kw-anchor"].filter(Boolean).join(" "),
          "data-kw": term,
          tabIndex: 0,
          role: "button",
          "aria-haspopup": "dialog",
        };
        return;
      }

      // The token carries surrounding whitespace — wrap only the term itself so
      // the underline never extends into the indentation.
      const start = raw.indexOf(term);
      const inner: Element = {
        type: "element",
        tagName: "span",
        properties: {
          class: "kw-anchor",
          "data-kw": term,
          tabIndex: 0,
          role: "button",
          "aria-haspopup": "dialog",
        },
        children: [{ type: "text", value: term }],
      };

      const next: ElementContent[] = [];
      if (start > 0) next.push({ type: "text", value: raw.slice(0, start) });
      next.push(inner);
      const tail = raw.slice(start + term.length);
      if (tail) next.push({ type: "text", value: tail });

      node.children = next;
    },
  };
}

export type HighlightOptions = {
  /** Render `1 2 3 …` in the gutter. */
  numbered?: boolean;
  /** Disable glossary tooltips for this block (useful for output/log samples). */
  noGlossary?: boolean;
};

export async function highlight(
  code: string,
  lang: CodeLang = "kotlin",
  options: HighlightOptions = {},
): Promise<string> {
  const highlighter = await getHighlighter();
  const resolved = LANG_ALIASES[lang] ?? lang;
  const loaded = highlighter.getLoadedLanguages();
  const safeLang = loaded.includes(resolved) ? resolved : "text";

  return highlighter.codeToHtml(code.trimEnd(), {
    lang: safeLang,
    themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" },
    defaultColor: false,
    cssVariablePrefix: "--shiki-",
    transformers: [
      transformerNotationHighlight({ matchAlgorithm: "v3" }),
      transformerNotationDiff({ matchAlgorithm: "v3" }),
      transformerNotationFocus({ matchAlgorithm: "v3" }),
      ...(options.noGlossary ? [] : [glossaryTransformer()]),
    ],
  });
}

/** A Kotlin Playground link for runnable, dependency-free snippets. */
export function playgroundUrl(code: string): string {
  return `https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS45LjIwIn0=&code=${encodeURIComponent(code)}`;
}
