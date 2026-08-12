"use client";

import { motion, useReducedMotion } from "motion/react";

const ACCENT_STROKE: Record<string, string> = {
  violet: "var(--violet)",
  emerald: "var(--emerald)",
  amber: "var(--amber)",
  sky: "var(--sky)",
  rose: "var(--rose)",
};

/**
 * A compact "x of y" dial.
 *
 * Small enough to sit in a sidebar row, and it animates only when the value
 * actually changes — so ticking one lesson does not redraw the whole rail.
 */
export function ProgressRing({
  done,
  total,
  accent = "violet",
  size = 26,
}: {
  done: number;
  total: number;
  accent?: string;
  size?: number;
}) {
  const reduced = useReducedMotion();
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const fraction = total === 0 ? 0 : done / total;
  const colour = ACCENT_STROKE[accent] ?? ACCENT_STROKE.violet;
  const complete = total > 0 && done === total;

  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colour}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={false}
          animate={{ strokeDashoffset: circumference * (1 - fraction) }}
          transition={reduced ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-[9px] font-semibold tabular-nums"
        style={{ color: complete ? colour : "var(--text-muted)" }}
      >
        {done}
      </span>
    </span>
  );
}
