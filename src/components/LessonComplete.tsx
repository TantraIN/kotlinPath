"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Circle } from "lucide-react";

import { t, type Lang } from "@/lib/i18n";
import { useIsComplete, useToggleLesson } from "@/lib/progress";

/**
 * The one place a learner records that they finished something.
 *
 * Stored only in this browser — there is no account, so the button never
 * pretends to sync. The sidebar and the curriculum page read the same store,
 * so ticking here updates both immediately.
 */
export function LessonComplete({ path, lang }: { path: string; lang: Lang }) {
  const copy = t(lang).progress;
  const complete = useIsComplete(path);
  const toggle = useToggleLesson();
  const reduced = useReducedMotion();

  return (
    <div className="mt-14 flex flex-wrap items-center gap-3 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3.5">
      <button
        type="button"
        aria-pressed={complete}
        onClick={() => toggle(path)}
        className={[
          "group inline-flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-[14px] font-semibold transition-all",
          complete
            ? "border-emerald/45 bg-emerald-soft text-emerald hover:border-emerald/70"
            : "border-line-strong bg-surface-2 text-fg hover:-translate-y-px hover:border-violet hover:text-violet hover:shadow-soft",
        ].join(" ")}
      >
        <motion.span
          className="flex size-5 items-center justify-center rounded-full border-2"
          style={{ borderColor: complete ? "var(--emerald)" : "var(--border-strong)" }}
          animate={
            reduced
              ? undefined
              : complete
                ? { backgroundColor: "var(--emerald)", scale: [1, 1.25, 1] }
                : { backgroundColor: "rgba(0,0,0,0)", scale: 1 }
          }
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {complete ? (
            <Check size={12} strokeWidth={3.5} className="text-white" />
          ) : (
            <Circle size={0} />
          )}
        </motion.span>
        {complete ? copy.completed : copy.markComplete}
      </button>

      <p className="text-[12px] leading-snug text-muted">{copy.savedLocally}</p>
    </div>
  );
}
