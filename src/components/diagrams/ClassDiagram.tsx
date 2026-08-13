"use client";

import { motion, useReducedMotion } from "motion/react";

export type ClassNode = {
  name: string;
  /** Shown as a small badge: class, interface, sealed, object, data class. */
  kind?: string;
  /** Members listed inside the box. */
  members?: string[];
  accent?: "violet" | "emerald" | "amber" | "sky" | "rose";
  /** The one the lesson is about. */
  highlight?: boolean;
};

const ACCENT: Record<string, { box: string; badge: string; rule: string }> = {
  violet: {
    box: "border-violet/40 bg-violet-soft",
    badge: "bg-violet text-white",
    rule: "bg-violet",
  },
  emerald: {
    box: "border-emerald/40 bg-emerald-soft",
    badge: "bg-emerald text-white",
    rule: "bg-emerald",
  },
  amber: {
    box: "border-amber/45 bg-amber-soft",
    badge: "bg-amber text-white",
    rule: "bg-amber",
  },
  sky: {
    box: "border-sky/40 bg-sky-soft",
    badge: "bg-sky text-white",
    rule: "bg-sky",
  },
  rose: {
    box: "border-rose/40 bg-rose-soft",
    badge: "bg-rose text-white",
    rule: "bg-rose",
  },
};

function Box({
  node,
  delay,
  reduced,
}: {
  node: ClassNode;
  delay: number;
  reduced: boolean | null;
}) {
  const accent = ACCENT[node.accent ?? "violet"];
  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "min-w-[9.5rem] overflow-hidden rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft",
        accent.box,
        node.highlight ? "ring-2 ring-inset ring-current/25" : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="font-mono text-[13.5px] font-semibold text-fg">
          {node.name}
        </span>
        {node.kind && (
          <span
            className={`ml-auto rounded px-1.5 py-px text-[9.5px] font-semibold uppercase tracking-wider ${accent.badge}`}
          >
            {node.kind}
          </span>
        )}
      </div>
      {node.members && node.members.length > 0 && (
        <ul className="border-t border-current/15 px-3 py-1.5">
          {node.members.map((member) => (
            <li
              key={member}
              className="py-px font-mono text-[11.5px] text-body"
            >
              {member}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

/**
 * A one-level type hierarchy: a base type, and the types under it.
 *
 * Deliberately not a full UML tool. Almost every OOP idea a learner meets is
 * "this type, and these types below it" — drawing exactly that, and nothing
 * more, keeps the picture readable.
 */
export function ClassDiagram({
  base,
  children,
  relation = "extends",
  caption,
}: {
  base: ClassNode;
  /** The subtypes, drawn in a row beneath the base. */
  children: ClassNode[];
  /** Label on the connector, e.g. "extends", "implements", "is a". */
  relation?: string;
  caption?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <figure className="my-7">
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface px-4 py-5">
        <div className="flex min-w-max flex-col items-center">
          <Box node={base} delay={0} reduced={reduced} />

          {/* Connector: a stem, a label, then a bar across the children. */}
          <div className="flex flex-col items-center">
            <span className="h-4 w-px bg-line-strong" aria-hidden />
            <span className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
              {relation}
            </span>
            <span className="h-4 w-px bg-line-strong" aria-hidden />
          </div>

          <div className="relative flex items-start gap-4">
            {children.length > 1 && (
              <span
                aria-hidden
                className="absolute left-[4.75rem] right-[4.75rem] top-0 h-px bg-line-strong"
              />
            )}
            {children.map((node, index) => (
              <div key={node.name} className="flex flex-col items-center">
                <span className="h-4 w-px bg-line-strong" aria-hidden />
                <Box
                  node={node}
                  delay={reduced ? 0 : 0.12 + index * 0.09}
                  reduced={reduced}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] leading-relaxed text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
