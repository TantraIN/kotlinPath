import {
  AlertTriangle,
  Bug,
  Info,
  Lightbulb,
  MessageCircleQuestion,
  type LucideIcon,
} from "lucide-react";

import { t, type Lang } from "@/lib/i18n";

export type CalloutKind = "note" | "tip" | "warning" | "pitfall" | "interview";

type CalloutStyle = {
  Icon: LucideIcon;
  /** Full treatment: a bordered card. */
  wrap: string;
  /** Bare treatment: a single thick coloured rule on the left. */
  bar: string;
  /** The icon badge. */
  badge: string;
  label: string;
};

const STYLES: Record<CalloutKind, CalloutStyle> = {
  note: {
    Icon: Info,
    wrap: "border-sky/35 bg-sky-soft hover:border-sky/60",
    bar: "border-l-sky bg-sky-soft",
    badge: "border-sky/40 bg-sky/15 text-sky",
    label: "text-sky",
  },
  tip: {
    Icon: Lightbulb,
    wrap: "border-emerald/35 bg-emerald-soft hover:border-emerald/60",
    bar: "border-l-emerald bg-emerald-soft",
    badge: "border-emerald/40 bg-emerald/15 text-emerald",
    label: "text-emerald",
  },
  warning: {
    Icon: AlertTriangle,
    wrap: "border-amber/40 bg-amber-soft hover:border-amber/65",
    bar: "border-l-amber bg-amber-soft",
    badge: "border-amber/45 bg-amber/15 text-amber",
    label: "text-amber",
  },
  pitfall: {
    Icon: Bug,
    wrap: "border-rose/35 bg-rose-soft hover:border-rose/60",
    bar: "border-l-rose bg-rose-soft",
    badge: "border-rose/40 bg-rose/15 text-rose",
    label: "text-rose",
  },
  interview: {
    Icon: MessageCircleQuestion,
    wrap: "border-violet/35 bg-violet-soft hover:border-violet/60",
    bar: "border-l-violet bg-violet-soft",
    badge: "border-violet/40 bg-violet/15 text-violet",
    label: "text-violet",
  },
};

/**
 * Both variants share the same anatomy — an icon badge, a label, and the body —
 * so a callout never reads as an unexplained coloured rectangle. `bare` only
 * changes the frame: a thick left rule instead of a full border, for short
 * asides that sit inside the flow of the argument.
 */
export function Callout({
  kind = "note",
  title,
  bare = false,
  uiLang,
  children,
}: {
  kind?: CalloutKind;
  title?: string;
  bare?: boolean;
  uiLang: Lang;
  children: React.ReactNode;
}) {
  const style = STYLES[kind];
  const heading = title ?? t(uiLang).callout[kind];

  return (
    <aside
      className={[
        "group my-6 flex gap-3 transition-all duration-200",
        bare
          ? `rounded-xl border-l-[5px] py-3.5 pl-4 pr-4 ${style.bar} hover:-translate-y-px hover:shadow-soft`
          : `rounded-[var(--radius-card)] border px-4 py-4 ${style.wrap} hover:-translate-y-px hover:shadow-soft`,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "mt-px flex size-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200",
          style.badge,
          "group-hover:scale-110 group-hover:-rotate-6",
        ].join(" ")}
      >
        <style.Icon size={15} strokeWidth={2.25} />
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${style.label}`}
        >
          {heading}
        </p>
        <div className="callout-body text-[14.5px] leading-relaxed text-body [&>*:last-child]:mb-0 [&>p]:mb-2">
          {children}
        </div>
      </div>
    </aside>
  );
}
