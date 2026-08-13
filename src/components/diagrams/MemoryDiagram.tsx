"use client";

import { motion, useReducedMotion } from "motion/react";

import { withInlineCode } from "@/components/InlineCode";
import { ArrowRight } from "lucide-react";

export type Slot = {
  /** The variable name as written in the code. */
  name: string;
  /** A primitive held directly in the slot. Mutually exclusive with `ref`. */
  value?: string;
  /** The id of a heap object this slot points at. */
  ref?: string;
};

export type HeapObject = {
  /** Matches a slot's `ref`. Also used as the visible tag. */
  id: string;
  /** The type, e.g. "User" or "String". */
  type: string;
  /** Field lines inside the box. */
  fields?: string[];
  /** Nothing points at this any more — eligible for collection. */
  unreachable?: boolean;
};

const TAG_ACCENT = ["violet", "emerald", "amber", "sky", "rose"] as const;

const TAG_CLASS: Record<string, string> = {
  violet: "border-violet/45 bg-violet-soft text-violet",
  emerald: "border-emerald/45 bg-emerald-soft text-emerald",
  amber: "border-amber/50 bg-amber-soft text-amber",
  sky: "border-sky/45 bg-sky-soft text-sky",
  rose: "border-rose/45 bg-rose-soft text-rose",
};

/**
 * Stack slots on the left, heap objects on the right.
 *
 * References are shown by matching coloured tags rather than drawn arrows —
 * arrows across two scrolling columns break on narrow screens, and the tag makes
 * the same point: this name and that object are the same colour, so they are the
 * same object.
 */
export function MemoryDiagram({
  stack,
  heap,
  stackLabel = "Stack",
  heapLabel = "Heap",
  caption,
}: {
  stack: Slot[];
  heap: HeapObject[];
  stackLabel?: string;
  heapLabel?: string;
  caption?: string;
}) {
  const reduced = useReducedMotion();
  const colourOf = (id: string) =>
    TAG_ACCENT[
      Math.max(
        0,
        heap.findIndex((object) => object.id === id),
      ) % TAG_ACCENT.length
    ];

  return (
    <figure className="my-7">
      <div className="grid gap-3 sm:grid-cols-2">
        {/* ------------------------------------------------------ stack */}
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
          <p className="border-b border-line bg-surface-2 px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted">
            {stackLabel}
          </p>
          <ul className="divide-y divide-line">
            {stack.map((slot, index) => (
              <motion.li
                key={slot.name}
                initial={reduced ? undefined : { opacity: 0, x: -8 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.34,
                  delay: reduced ? 0 : index * 0.07,
                }}
                className="flex items-center gap-2 px-3.5 py-2.5"
              >
                <span className="font-mono text-[13px] font-medium text-fg">
                  {slot.name}
                </span>
                <ArrowRight
                  size={13}
                  className="shrink-0 text-muted"
                  aria-hidden
                />
                {slot.ref ? (
                  <span
                    className={`rounded-md border px-1.5 py-0.5 font-mono text-[11.5px] font-medium ${
                      TAG_CLASS[colourOf(slot.ref)]
                    }`}
                  >
                    {slot.ref}
                  </span>
                ) : (
                  <span className="font-mono text-[12.5px] text-body">
                    {slot.value}
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------------- heap */}
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
          <p className="border-b border-line bg-surface-2 px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted">
            {heapLabel}
          </p>
          <ul className="space-y-2 p-2.5">
            {heap.map((object, index) => (
              <motion.li
                key={object.id}
                initial={reduced ? undefined : { opacity: 0, x: 8 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.34,
                  delay: reduced ? 0 : index * 0.07,
                }}
                className={[
                  "rounded-lg border px-3 py-2 transition-opacity",
                  object.unreachable
                    ? "border-dashed border-line-strong opacity-55"
                    : "border-line bg-surface-2",
                ].join(" ")}
              >
                <p className="flex items-center gap-2">
                  <span
                    className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] font-medium ${
                      TAG_CLASS[colourOf(object.id)]
                    }`}
                  >
                    {object.id}
                  </span>
                  <span className="font-mono text-[13px] font-semibold text-fg">
                    {object.type}
                  </span>
                </p>
                {object.fields && object.fields.length > 0 && (
                  <ul className="mt-1.5 space-y-px border-t border-line pt-1.5">
                    {object.fields.map((field) => (
                      <li
                        key={field}
                        className="font-mono text-[11.5px] text-body"
                      >
                        {field}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] leading-relaxed text-muted">
          {withInlineCode(caption)}
        </figcaption>
      )}
    </figure>
  );
}
