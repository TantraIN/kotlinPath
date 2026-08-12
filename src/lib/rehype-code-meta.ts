import type { Element, Root, RootContent } from "hast";

/**
 * Fenced code blocks can carry a meta string:
 *
 *     ```kotlin title="MainActivity.kt" numbered runnable
 *
 * Markdown parsers keep that string on `node.data.meta`, which never reaches
 * React props. This plugin copies it onto the element so `<pre>` overrides can
 * read it.
 */
export function rehypeCodeMeta() {
  return (tree: Root) => {
    walk(tree);
  };
}

function walk(node: Root | RootContent): void {
  if (node.type === "element") {
    const element = node as Element;
    if (element.tagName === "code") {
      const meta = (element.data as { meta?: string } | undefined)?.meta;
      if (meta) {
        element.properties = { ...element.properties, meta };
      }
    }
  }

  const children = (node as Root | Element).children;
  if (Array.isArray(children)) {
    for (const child of children) walk(child);
  }
}

export type CodeMeta = {
  title?: string;
  numbered: boolean;
  runnable: boolean;
  noGlossary: boolean;
};

export function parseCodeMeta(meta: string | undefined): CodeMeta {
  const value = meta ?? "";
  const title = /title="([^"]+)"/.exec(value)?.[1];
  return {
    title,
    numbered: /\bnumbered\b/.test(value),
    runnable: /\brunnable\b/.test(value),
    noGlossary: /\bno-glossary\b/.test(value),
  };
}
