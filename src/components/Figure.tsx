/**
 * Wraps any diagram or wide visual. Guarantees the two things every visual in
 * this course must have: a caption that states what it shows, and its own
 * horizontal scroll container so the page body never scrolls sideways.
 */
export function Figure({
  caption,
  children,
  bleed = false,
}: {
  caption?: string;
  children: React.ReactNode;
  bleed?: boolean;
}) {
  return (
    <figure className="my-7">
      <div
        className={[
          "overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface",
          bleed ? "p-0" : "px-4 py-5",
        ].join(" ")}
      >
        {children}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] leading-relaxed text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
