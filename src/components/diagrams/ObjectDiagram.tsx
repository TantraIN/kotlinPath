"use client";

import { motion, useReducedMotion } from "motion/react";

import { withInlineCode } from "@/components/InlineCode";

export type ObjectInstance = {
  /** The variable the object is held in, e.g. `asha`. */
  name: string;
  /** One line per property, already formatted: `age = 30`. */
  values: string[];
  /** Draw this one as the odd man out — used to show shared state. */
  muted?: boolean;
};

/**
 * The single most useful picture in object-oriented programming: one class,
 * several objects.
 *
 * Beginners reliably believe a class *holds* data. Drawing the class with
 * property names and no values, and the objects with the same names filled in,
 * is faster than any paragraph at fixing that. The connector is labelled with
 * the actual constructor call so the picture and the code line up.
 *
 * The stamp pulse runs once, on scroll into view: it travels from the blueprint
 * to the objects, which is the direction the learner should read.
 */
export function ObjectDiagram({
  typeName,
  properties,
  instances,
  createLabel,
  blueprintLabel = "class (blueprint)",
  instanceLabel = "objects (in memory)",
  caption,
}: {
  /** The class name, e.g. `User`. */
  typeName: string;
  /** Declared properties, names and types only — never values. */
  properties: string[];
  /** The objects stamped out of it. Two or three read best. */
  instances: ObjectInstance[];
  /** Connector label; defaults to a constructor call built from `typeName`. */
  createLabel?: string;
  blueprintLabel?: string;
  instanceLabel?: string;
  caption?: string;
}) {
  const reduced = useReducedMotion();
  const call = createLabel ?? `${typeName}( … )`;

  const description = `The class ${typeName} declares ${properties.join(", ")}. ${instances
    .map((i) => `The object ${i.name} holds ${i.values.join(", ")}.`)
    .join(" ")}`;

  return (
    <figure className="my-7">
      <div className="rounded-[var(--radius-card)] border border-line bg-surface px-4 py-5">
        <span className="sr-only">{description}</span>

        <div className="flex flex-col items-center" aria-hidden>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
            {blueprintLabel}
          </p>

          {/* The blueprint: dashed, because nothing here exists yet. */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[15rem] overflow-hidden rounded-xl border border-dashed border-violet/55 bg-violet-soft"
          >
            <div className="flex items-center gap-2 border-b border-dashed border-violet/35 px-3 py-2">
              <span className="font-mono text-[13.5px] font-semibold text-fg">
                {typeName}
              </span>
              <span className="ml-auto rounded bg-violet px-1.5 py-px text-[9.5px] font-semibold uppercase tracking-wider text-white">
                class
              </span>
            </div>
            <ul className="px-3 py-1.5">
              {properties.map((property) => (
                <li
                  key={property}
                  className="py-px font-mono text-[11.5px] text-body"
                >
                  {property}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connector, carrying the constructor call and a one-shot pulse. */}
          <div className="relative my-1 flex h-14 w-px flex-col items-center">
            <span className="absolute inset-0 w-px bg-line-strong" />
            {!reduced && (
              <motion.span
                className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-violet"
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 56, opacity: [0, 1, 1, 0] }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              />
            )}
            <span className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-violet/40 bg-violet-soft px-2 py-0.5 font-mono text-[10.5px] font-medium text-fg">
              {call}
            </span>
          </div>

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
            {instanceLabel}
          </p>

          {/* The objects: solid, and each with its own values. */}
          <div className="flex w-full flex-wrap justify-center gap-3">
            {instances.map((instance, index) => (
              <motion.div
                key={instance.name}
                initial={reduced ? undefined : { opacity: 0, scale: 0.94, y: 8 }}
                whileInView={
                  reduced ? undefined : { opacity: 1, scale: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: reduced ? 0 : 0.75 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "min-w-[8.5rem] flex-1 overflow-hidden rounded-xl border shadow-sm",
                  instance.muted
                    ? "border-line bg-surface-2"
                    : "border-emerald/45 bg-emerald-soft",
                ].join(" ")}
              >
                <div className="flex items-center gap-2 border-b border-current/15 px-3 py-2">
                  <span className="font-mono text-[12.5px] font-semibold text-fg">
                    {instance.name}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-muted">
                    {typeName}
                  </span>
                </div>
                <ul className="px-3 py-1.5">
                  {instance.values.map((value) => (
                    <li
                      key={value}
                      className="py-px font-mono text-[11.5px] text-body"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
