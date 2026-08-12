"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children, isValidElement } from "react";

/**
 * A vertical timeline whose spine draws itself as the reader scrolls to it.
 * Used for lifecycles, build pipelines, and any ordered sequence where the
 * order is the lesson.
 */
export function Timeline({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div className="relative my-7 pl-7">
      <motion.span
        aria-hidden="true"
        className="absolute left-[9px] top-1.5 w-[2px] origin-top rounded-full bg-gradient-to-b from-violet via-violet/40 to-transparent"
        style={{ bottom: "0.5rem" }}
        initial={reduced ? undefined : { scaleY: 0 }}
        whileInView={reduced ? undefined : { scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      <ol className="space-y-5">
        {items.map((child, index) => (
          <motion.li
            key={index}
            className="relative"
            initial={reduced ? undefined : { opacity: 0, x: -8 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[1.75rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-violet bg-bg text-[10px] font-semibold tabular-nums text-violet"
            >
              {index + 1}
            </span>
            {child}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function TimelineItem({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="text-[14.5px] font-semibold text-fg">{title}</span>
        {meta && (
          <span className="rounded-md border border-violet/30 bg-violet-soft px-2 py-0.5 font-mono text-[11px] font-medium text-violet">
            {meta}
          </span>
        )}
      </p>
      {children && (
        <div className="mt-1 text-[14.5px] leading-relaxed text-body [&>*:last-child]:mb-0">
          {children}
        </div>
      )}
    </div>
  );
}
