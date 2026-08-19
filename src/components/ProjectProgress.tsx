"use client";

import { Check } from "lucide-react";

import { ProgressRing } from "@/components/ProgressRing";
import { stepProgressKey } from "@/content/projects";
import { t, type Lang } from "@/lib/i18n";
import { useIsComplete, useProjectProgress } from "@/lib/progress";

/**
 * Project progress reads the same local store as the course, under a `project:`
 * prefix, so ticking a step on the step page updates the card and the step list
 * without a refresh — and the course counter stays a count of lessons.
 */
export function ProjectProgressBadge({ slug, lang }: { slug: string; lang: Lang }) {
  const { done, total } = useProjectProgress(slug);
  const copy = t(lang).progress;
  if (done === 0) return null;

  return (
    <span className="flex items-center gap-1.5" title={`${done} / ${total} ${copy.ofDone}`}>
      <ProgressRing done={done} total={total} accent="emerald" size={22} />
      <span className="text-[11px] font-medium tabular-nums text-muted">
        {done} / {total}
      </span>
    </span>
  );
}

export function StepCheck({ path, index }: { path: string; index: number }) {
  const complete = useIsComplete(stepProgressKey(path));

  return (
    <span
      aria-hidden
      className={[
        "flex size-[22px] shrink-0 items-center justify-center rounded-full border text-[10.5px] font-semibold tabular-nums",
        complete ? "border-emerald bg-emerald text-white" : "border-line text-muted",
      ].join(" ")}
    >
      {complete ? <Check size={12} strokeWidth={3} /> : index + 1}
    </span>
  );
}
