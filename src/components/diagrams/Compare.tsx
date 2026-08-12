"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Minus, X } from "lucide-react";

export type ComparePanel = {
  title: string;
  /** One-line framing under the title. */
  subtitle?: string;
  accent?: "violet" | "emerald" | "amber" | "sky" | "rose";
  /** `+` good, `-` bad, `~` neutral — prefixed in the MDX string. */
  points: string[];
};

const ACCENT: Record<string, { ring: string; text: string; tint: string }> = {
  violet: { ring: "border-violet/35", text: "text-violet", tint: "bg-violet-soft" },
  emerald: { ring: "border-emerald/35", text: "text-emerald", tint: "bg-emerald-soft" },
  amber: { ring: "border-amber/40", text: "text-amber", tint: "bg-amber-soft" },
  sky: { ring: "border-sky/35", text: "text-sky", tint: "bg-sky-soft" },
  rose: { ring: "border-rose/35", text: "text-rose", tint: "bg-rose-soft" },
};

/** A leading `+`, `-` or `~` in a point picks its marker. */
function marker(point: string) {
  if (point.startsWith("+ ")) return { Icon: Check, className: "text-emerald", text: point.slice(2) };
  if (point.startsWith("- ")) return { Icon: X, className: "text-rose", text: point.slice(2) };
  if (point.startsWith("~ ")) return { Icon: Minus, className: "text-muted", text: point.slice(2) };
  return { Icon: Minus, className: "text-muted", text: point };
}

/**
 * Two options, side by side.
 *
 * The panels slide in from opposite edges so the reader reads them as a pair
 * being weighed, not as two unrelated lists. On narrow screens they stack, and
 * the direction of travel collapses to a simple lift.
 */
export function Compare({ left, right }: { left: ComparePanel; right: ComparePanel }) {
  const reduced = useReducedMotion();

  const panels = [
    { panel: left, from: -18 },
    { panel: right, from: 18 },
  ];

  return (
    <div className="my-7 grid gap-3 sm:grid-cols-2">
      {panels.map(({ panel, from }, index) => {
        const accent = ACCENT[panel.accent ?? "violet"];
        return (
          <motion.article
            key={panel.title}
            initial={reduced ? undefined : { opacity: 0, x: from }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-[var(--radius-card)] border ${accent.ring} ${accent.tint} p-4`}
          >
            <h4 className={`text-[15px] font-semibold ${accent.text}`}>{panel.title}</h4>
            {panel.subtitle && (
              <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted">{panel.subtitle}</p>
            )}

            <ul className="mt-3 space-y-2">
              {panel.points.map((point) => {
                const { Icon, className, text } = marker(point);
                return (
                  <li key={point} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-body">
                    <Icon size={14} className={`mt-[3px] shrink-0 ${className}`} aria-hidden />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
}
