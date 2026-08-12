"use client";

import { Check } from "lucide-react";

import { ProgressRing } from "@/components/ProgressRing";
import { t, type Lang } from "@/lib/i18n";
import { useIsComplete, usePhaseProgress } from "@/lib/progress";

/**
 * The curriculum table reads the same local progress store as the sidebar, so
 * ticking a lesson anywhere is reflected everywhere without a refresh.
 */
export function PhaseProgressBadge({
  slug,
  accent,
  lang,
}: {
  slug: string;
  accent: string;
  lang: Lang;
}) {
  const { done, total } = usePhaseProgress(slug);
  const copy = t(lang).progress;
  if (done === 0) return null;

  return (
    <span
      className="flex items-center gap-1.5"
      title={`${done} / ${total} ${copy.ofDone}`}
    >
      <ProgressRing done={done} total={total} accent={accent} size={22} />
      <span className="hidden text-[11px] font-medium tabular-nums text-muted sm:inline">
        / {total}
      </span>
    </span>
  );
}

export function LessonCheck({ path, index }: { path: string; index: number }) {
  const complete = useIsComplete(path);

  return (
    <span
      aria-hidden
      className={[
        "flex size-[18px] items-center justify-center rounded-full border text-[9.5px] font-semibold tabular-nums",
        complete ? "border-emerald bg-emerald text-white" : "border-line text-muted",
      ].join(" ")}
    >
      {complete ? <Check size={11} strokeWidth={3} /> : index + 1}
    </span>
  );
}
