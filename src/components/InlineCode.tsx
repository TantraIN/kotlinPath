import { Fragment, type ReactNode } from "react";

/**
 * Renders `backticked` spans inside a plain-text prop as inline code.
 *
 * Props like a Quiz question or a diagram caption are strings, not MDX, so
 * markdown never runs on them — authors who write `asha.age` out of habit would
 * otherwise ship literal backticks to the page. Supporting just this one piece
 * of markdown keeps authoring natural without pulling a parser into the bundle.
 */
export function withInlineCode(text: string): ReactNode {
  if (!text.includes("`")) return text;

  return text.split("`").map((segment, index) =>
    index % 2 === 1 ? (
      <code
        key={index}
        className="rounded border border-line bg-surface-inset px-1 py-px font-mono text-[0.9em] text-fg"
      >
        {segment}
      </code>
    ) : (
      <Fragment key={index}>{segment}</Fragment>
    ),
  );
}
