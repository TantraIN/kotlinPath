import { Play } from "lucide-react";

import { CopyButton } from "@/components/CopyButton";
import { highlight, playgroundUrl, type CodeLang } from "@/lib/highlight";
import { t, type Lang } from "@/lib/i18n";

export type CodeBlockProps = {
  code: string;
  language?: CodeLang;
  /** Usually the filename — shown in the header bar. */
  title?: string;
  numbered?: boolean;
  /** Turn off keyword tooltips, for console output or log samples. */
  noGlossary?: boolean;
  /** Show a "Run in Kotlin Playground" link. Only for self-contained snippets. */
  runnable?: boolean;
  uiLang: Lang;
};

const LANG_LABEL: Record<string, string> = {
  kotlin: "Kotlin",
  java: "Java",
  xml: "XML",
  groovy: "Gradle",
  gradle: "Gradle",
  kts: "Gradle KTS",
  bash: "Shell",
  shell: "Shell",
  json: "JSON",
  yaml: "YAML",
  toml: "TOML",
  properties: "Properties",
  sql: "SQL",
  text: "Output",
};

/**
 * The core teaching surface. Highlighting, line numbers, diff and focus
 * notations, the copy button and glossary hover targets all live here so a
 * lesson author only writes the code.
 */
export async function CodeBlock({
  code,
  language = "kotlin",
  title,
  numbered,
  noGlossary,
  runnable,
  uiLang,
}: CodeBlockProps) {
  const source = code.replace(/\n+$/, "");
  const html = await highlight(source, language, { numbered, noGlossary });
  const copy = t(uiLang).lesson;
  const lineCount = source.split("\n").length;
  const showHeader = Boolean(title) || lineCount > 3;

  return (
    // min-w-0 matters when the figure is a grid or flex child: without it the
    // item's automatic minimum size is the code's full width, and the page —
    // not the code block — is what ends up scrolling sideways.
    <figure className="group my-6 min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-code shadow-sm">
      {showHeader && (
        <figcaption className="flex items-center gap-2 border-b border-line bg-surface-2 py-1.5 pl-3.5 pr-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rose/45" />
            <span className="size-2.5 rounded-full bg-amber/45" />
            <span className="size-2.5 rounded-full bg-emerald/45" />
          </span>

          {title && (
            <span className="truncate font-mono text-[12.5px] text-muted" title={title}>
              {title}
            </span>
          )}

          <span className="ml-auto flex items-center gap-1">
            <span className="rounded border border-line px-1.5 py-0.5 text-[10.5px] font-medium uppercase tracking-wide text-muted">
              {LANG_LABEL[language] ?? language}
            </span>

            {runnable && (
              <a
                href={playgroundUrl(source)}
                target="_blank"
                rel="noreferrer noopener"
                title={copy.runInPlayground}
                aria-label={copy.runInPlayground}
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface hover:text-emerald"
              >
                <Play size={14} />
              </a>
            )}

            <CopyButton value={source} labelCopy={copy.copy} labelCopied={copy.copied} />
          </span>
        </figcaption>
      )}

      <div
        className={`overflow-x-auto py-3 ${numbered ? "code-numbered" : ""}`}
        // Highlighted at build time by Shiki — no runtime highlighter is shipped.
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  );
}
