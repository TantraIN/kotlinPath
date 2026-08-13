import { ChevronRight } from "lucide-react";

/**
 * Depth that does not cost length.
 *
 * A native <details> element, so it needs no JavaScript, is keyboard accessible
 * and is searchable by the browser. Use it for the "but why" a curious reader
 * wants and everyone else can skip — the page stays short by default.
 */
export function Detail({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group my-5 overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-colors hover:border-line-strong">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-[14px] font-medium text-fg [&::-webkit-details-marker]:hidden">
        <ChevronRight
          size={15}
          className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-90"
        />
        {summary}
      </summary>
      <div className="border-t border-line px-4 py-3.5 text-[14.5px] leading-relaxed text-body [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}
