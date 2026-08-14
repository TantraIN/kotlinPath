"use client";

import { motion, useReducedMotion } from "motion/react";

import { withInlineCode } from "@/components/InlineCode";

export type SegmentKind = "work" | "blocked" | "free" | "waiting";

export type Segment = {
  label: string;
  /** Relative width. A segment of weight 2 is twice as wide as one of weight 1. */
  weight: number;
  kind: SegmentKind;
};

export type Lane = {
  /** Usually a thread name: "main", "Dispatchers.IO worker 1". */
  name: string;
  segments: Segment[];
};

const KIND: Record<SegmentKind, { bar: string; text: string; legend: string }> = {
  // Doing useful work.
  work: {
    bar: "bg-emerald-soft border-emerald/50",
    text: "text-fg",
    legend: "Running your code",
  },
  // Held by a call that is waiting — the thread cannot do anything else.
  blocked: {
    bar: "bg-rose-soft border-rose/55",
    text: "text-fg",
    legend: "Blocked — thread held, doing nothing",
  },
  // Available for other work.
  free: {
    bar: "bg-surface-inset border-line",
    text: "text-muted",
    legend: "Free for other work",
  },
  // The coroutine is waiting, but it is not sitting on a thread.
  waiting: {
    bar: "bg-violet-soft border-violet/50 border-dashed",
    text: "text-fg",
    legend: "Suspended — waiting, holding no thread",
  },
};

/**
 * Threads as horizontal lanes over time.
 *
 * The single hardest idea in coroutines is that suspending and blocking both
 * "wait", and only one of them costs a thread. Prose has to assert that;
 * two lanes side by side show it — the blocked lane is solid red for the whole
 * wait, the suspending lane goes free and picks up other work.
 *
 * Widths are relative, not real milliseconds. The point is the shape.
 */
export function ThreadTimeline({
  lanes,
  caption,
  showLegend = true,
  timeLabel = "time",
  labels,
}: {
  lanes: Lane[];
  caption?: string;
  showLegend?: boolean;
  timeLabel?: string;
  /**
   * Legend wording, per kind. Hindi and Hinglish lessons pass their own —
   * the defaults here are English and must never reach a translated page.
   */
  labels?: Partial<Record<SegmentKind, string>>;
}) {
  const reduced = useReducedMotion();

  const legendFor = (kind: SegmentKind) => labels?.[kind] ?? KIND[kind].legend;

  const usedKinds = Array.from(
    new Set(lanes.flatMap((lane) => lane.segments.map((s) => s.kind))),
  );

  const description = lanes
    .map(
      (lane) =>
        `${lane.name}: ${lane.segments
          .map((s) => `${s.label} (${legendFor(s.kind)})`)
          .join(", then ")}.`,
    )
    .join(" ");

  return (
    <figure className="my-7">
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface px-4 py-5">
        <span className="sr-only">{description}</span>

        <div className="min-w-[22rem] space-y-3" aria-hidden>
          {lanes.map((lane, laneIndex) => {
            return (
              <div key={lane.name}>
                <p className="mb-1 font-mono text-[11px] font-medium text-muted">
                  {lane.name}
                </p>
                <div className="flex gap-1">
                  {lane.segments.map((segment, index) => {
                    const kind = KIND[segment.kind];
                    return (
                      <motion.div
                        key={`${segment.label}-${index}`}
                        style={{ flexGrow: segment.weight, flexBasis: 0 }}
                        initial={
                          reduced ? undefined : { opacity: 0, scaleX: 0.4 }
                        }
                        whileInView={
                          reduced ? undefined : { opacity: 1, scaleX: 1 }
                        }
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.35,
                          // Lanes fill left to right, so the eye reads them as
                          // elapsing time rather than as a stack of bars.
                          delay: reduced
                            ? 0
                            : laneIndex * 0.12 + index * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`origin-left overflow-hidden whitespace-nowrap rounded-md border px-2 py-1.5 text-center font-mono text-[10.5px] ${kind.bar} ${kind.text}`}
                      >
                        {segment.label}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="h-px flex-1 bg-line-strong" />
            <span className="text-[10px] uppercase tracking-wider text-muted">
              {timeLabel}
            </span>
            <span className="text-muted">→</span>
          </div>
        </div>

        {showLegend && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5" aria-hidden>
            {usedKinds.map((kind) => (
              <li key={kind} className="flex items-center gap-1.5">
                <span
                  className={`size-2.5 rounded-sm border ${KIND[kind].bar}`}
                />
                <span className="text-[11px] text-muted">
                  {legendFor(kind)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] leading-relaxed text-muted">
          {withInlineCode(caption)}
        </figcaption>
      )}
    </figure>
  );
}
