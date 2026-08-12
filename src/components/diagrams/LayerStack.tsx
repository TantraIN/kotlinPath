"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Boxes,
  Code2,
  Cpu,
  Database,
  Info,
  Layers,
  Package,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Layer = {
  label: string;
  /** Smaller line under the label — the concrete thing at this level. */
  sub?: string;
  accent?: "violet" | "emerald" | "amber" | "sky" | "rose";
  /** Draws a marker on this layer: "this is the part you write". */
  highlight?: boolean;
  /** Override the icon; otherwise one is picked from the layer's position. */
  icon?: keyof typeof ICONS;
  /**
   * What this layer is and what it is for. When present the row becomes
   * focusable and reveals an explanation on hover, focus or tap.
   */
  detail?: string;
};

const ICONS = {
  cpu: Cpu,
  server: Server,
  boxes: Boxes,
  layers: Layers,
  code: Code2,
  phone: Smartphone,
  package: Package,
  terminal: Terminal,
  wrench: Wrench,
  database: Database,
  shield: Shield,
} satisfies Record<string, LucideIcon>;

/** Bottom-up defaults: metal, system, runtime, framework. */
const FALLBACK: (keyof typeof ICONS)[] = [
  "cpu",
  "server",
  "boxes",
  "layers",
  "package",
];

const ACCENT: Record<
  string,
  { card: string; rule: string; badge: string; chip: string; glow: string }
> = {
  violet: {
    card: "border-violet/35 bg-violet-soft",
    rule: "bg-violet",
    badge: "border-violet/40 bg-violet/15 text-violet",
    chip: "border-violet/40 text-violet",
    glow: "hover:border-violet/70",
  },
  emerald: {
    card: "border-emerald/35 bg-emerald-soft",
    rule: "bg-emerald",
    badge: "border-emerald/40 bg-emerald/15 text-emerald",
    chip: "border-emerald/40 text-emerald",
    glow: "hover:border-emerald/70",
  },
  amber: {
    card: "border-amber/40 bg-amber-soft",
    rule: "bg-amber",
    badge: "border-amber/45 bg-amber/15 text-amber",
    chip: "border-amber/40 text-amber",
    glow: "hover:border-amber/75",
  },
  sky: {
    card: "border-sky/35 bg-sky-soft",
    rule: "bg-sky",
    badge: "border-sky/40 bg-sky/15 text-sky",
    chip: "border-sky/40 text-sky",
    glow: "hover:border-sky/70",
  },
  rose: {
    card: "border-rose/35 bg-rose-soft",
    rule: "bg-rose",
    badge: "border-rose/40 bg-rose/15 text-rose",
    chip: "border-rose/40 text-rose",
    glow: "hover:border-rose/70",
  },
};

/**
 * A stack of platform layers, drawn bottom-up.
 *
 * The order is the lesson: hardware at the bottom, the code you write on top.
 * Higher layers are drawn slightly narrower so the group reads as a receding
 * stack rather than a list of coloured bars, and each one rises into place in
 * turn so the reader watches the platform being assembled.
 *
 * `layers[0]` is the bottom of the stack.
 */
export function LayerStack({
  layers,
  title,
  description,
  topLabel,
  bottomLabel,
  youWriteThis = "you write this",
}: {
  layers: Layer[];
  /** Accessible name for the whole figure. */
  title: string;
  /** Text alternative describing what the diagram shows. */
  description: string;
  topLabel?: string;
  bottomLabel?: string;
  /** Caption on the highlighted layer. */
  youWriteThis?: string;
}) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  // Drawn top-first so the visual order matches the DOM order.
  const topDown = [...layers].reverse();

  return (
    <div role="group" aria-label={title}>
      <p className="sr-only">{description}</p>

      {topLabel && (
        <p className="mb-2 flex items-center justify-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
          <ArrowUp size={12} aria-hidden />
          {topLabel}
        </p>
      )}

      <ol className="space-y-2">
        {topDown.map((layer, index) => {
          const accent = ACCENT[layer.accent ?? "violet"];
          const fromBottom = topDown.length - 1 - index;
          const Icon =
            ICONS[
              layer.icon ?? FALLBACK[Math.min(fromBottom, FALLBACK.length - 1)]
            ];
          // The base is widest and each layer above it narrows, so the group
          // reads as a stack standing on the hardware rather than a flat list.
          const inset = fromBottom * 2.5;

          return (
            <motion.li
              key={layer.label}
              className="relative"
              style={{ marginInline: `${inset}%` }}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: reduced ? 0 : fromBottom * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                {...(layer.detail
                  ? {
                      role: "button" as const,
                      tabIndex: 0,
                      "aria-expanded": open === layer.label,
                      onMouseEnter: () => setOpen(layer.label),
                      onMouseLeave: () =>
                        setOpen((current) =>
                          current === layer.label ? null : current,
                        ),
                      onFocus: () => setOpen(layer.label),
                      onBlur: () =>
                        setOpen((current) =>
                          current === layer.label ? null : current,
                        ),
                      onClick: () =>
                        setOpen((current) =>
                          current === layer.label ? null : layer.label,
                        ),
                    }
                  : {})}
                className={[
                  "group relative flex items-center gap-3 overflow-hidden rounded-xl border py-3 pl-4 pr-3.5 transition-all duration-200",
                  accent.card,
                  accent.glow,
                  "hover:-translate-y-0.5 hover:shadow-soft",
                  layer.detail ? "cursor-help" : "",
                  layer.highlight ? "ring-1 ring-inset" : "",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-1 ${accent.rule} transition-all duration-200 group-hover:w-1.5`}
                />

                <span
                  aria-hidden
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-110 ${accent.badge}`}
                >
                  <Icon size={16} strokeWidth={2.1} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14.5px] font-semibold leading-tight text-fg">
                    {layer.label}
                  </span>
                  {layer.sub && (
                    <span className="mt-0.5 block truncate font-mono text-[11.5px] text-muted">
                      {layer.sub}
                    </span>
                  )}
                </span>

                {layer.highlight && (
                  <span
                    className={`hidden shrink-0 rounded-md border px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider sm:block ${accent.chip}`}
                  >
                    {youWriteThis}
                  </span>
                )}

                {layer.detail && !layer.highlight && (
                  <Info
                    size={14}
                    aria-hidden
                    className={`shrink-0 opacity-45 transition-opacity group-hover:opacity-100 ${accent.chip.split(" ")[1]}`}
                  />
                )}
              </div>

              <AnimatePresence>
                {layer.detail && open === layer.label && (
                  <motion.p
                    initial={reduced ? undefined : { opacity: 0, y: -4 }}
                    animate={reduced ? undefined : { opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-x-0 top-full z-20 mt-1.5 rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 text-[13px] leading-relaxed text-body shadow-float"
                  >
                    {layer.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>

      {bottomLabel && (
        <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
          <ArrowDown size={12} aria-hidden />
          {bottomLabel}
        </p>
      )}
    </div>
  );
}
