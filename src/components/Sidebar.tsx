"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PhaseIcon } from "@/components/PhaseIcon";
import { ProgressRing } from "@/components/ProgressRing";
import { CURRICULUM } from "@/content/curriculum";
import { pick, t, type Lang } from "@/lib/i18n";
import { useCourseProgress, useProgress, useResetProgress } from "@/lib/progress";

const ACCENT_BADGE: Record<string, string> = {
  violet: "border-violet/40 bg-violet/12 text-violet",
  emerald: "border-emerald/40 bg-emerald/12 text-emerald",
  amber: "border-amber/45 bg-amber/12 text-amber",
  sky: "border-sky/40 bg-sky/12 text-sky",
  rose: "border-rose/40 bg-rose/12 text-rose",
};

const ACCENT_BAR: Record<string, string> = {
  violet: "bg-violet",
  emerald: "bg-emerald",
  amber: "bg-amber",
  sky: "bg-sky",
  rose: "bg-rose",
};

export function Sidebar({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  const pathname = usePathname();
  const copy = t(lang);
  const progress = useProgress();
  const course = useCourseProgress();
  const resetProgress = useResetProgress();

  const currentPhase = CURRICULUM.find((phase) =>
    pathname.startsWith(`/${lang}/learn/${phase.slug}/`),
  )?.slug;

  // Only manual toggles are stored. Whether a phase starts open is derived from
  // the route, so navigating to a lesson expands its phase without an effect.
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const defaultOpen = currentPhase ?? CURRICULUM[0].slug;

  return (
    <nav aria-label={copy.nav.curriculum} className="pb-16 pt-4">
      {/* ---------------------------------------------- course progress */}
      <section className="mb-3 rounded-xl border border-line bg-surface px-3 py-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted">
            {copy.progress.label}
          </p>
          <p className="text-[11.5px] font-semibold tabular-nums text-fg">
            {course.done}
            <span className="text-muted"> / {course.total}</span>
          </p>
        </div>

        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2"
          role="progressbar"
          aria-valuenow={course.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={copy.progress.label}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet to-emerald"
            initial={false}
            animate={{ width: `${course.percent}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between gap-2">
          <p className="text-[10px] leading-tight text-muted">{copy.progress.savedLocally}</p>
          {course.done > 0 && (
            <button
              type="button"
              title={copy.progress.reset}
              aria-label={copy.progress.reset}
              onClick={() => {
                if (window.confirm(copy.progress.resetConfirm)) resetProgress();
              }}
              className="shrink-0 rounded-md p-1 text-muted transition-colors hover:bg-surface-2 hover:text-rose"
            >
              <RotateCcw size={12} />
            </button>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- the phases */}
      <ul className="space-y-1">
        {CURRICULUM.map((phase) => {
          const expanded = toggled[phase.slug] ?? phase.slug === defaultOpen;
          const isCurrent = currentPhase === phase.slug;
          const done = phase.lessons.filter(
            (lesson) => progress[`${phase.slug}/${lesson.slug}`],
          ).length;
          const finished = done === phase.lessons.length;

          return (
            <li key={phase.slug}>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setToggled((state) => ({ ...state, [phase.slug]: !expanded }))}
                className={[
                  "group flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-all",
                  isCurrent
                    ? "border-line-strong bg-surface shadow-sm"
                    : "border-transparent hover:border-line hover:bg-surface",
                ].join(" ")}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105 ${
                    ACCENT_BADGE[phase.accent]
                  }`}
                >
                  <PhaseIcon name={phase.icon} size={14} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.09em] text-muted">
                      {copy.common.phase} {phase.number}
                    </span>
                    {finished && (
                      <Check
                        size={11}
                        className="text-emerald"
                        aria-label={copy.progress.phaseDone}
                      />
                    )}
                  </span>
                  <span
                    className={`mt-0.5 block truncate text-[13.5px] font-medium leading-tight ${
                      isCurrent ? "text-fg" : "text-body group-hover:text-fg"
                    }`}
                  >
                    {pick(phase.title, lang)}
                  </span>
                </span>

                <ProgressRing done={done} total={phase.lessons.length} accent={phase.accent} />

                <ChevronRight
                  size={13}
                  className={`shrink-0 text-muted transition-transform duration-200 ${
                    expanded ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="ml-[1.55rem] mt-1 border-l border-line pl-1">
                      {phase.lessons.map((lesson, index) => {
                        const path = `${phase.slug}/${lesson.slug}`;
                        const href = `/${lang}/learn/${path}`;
                        const active = pathname === href;
                        const complete = Boolean(progress[path]);

                        return (
                          <li key={lesson.slug}>
                            <Link
                              href={href}
                              onClick={onNavigate}
                              aria-current={active ? "page" : undefined}
                              className={[
                                "group/lesson relative flex items-center gap-2 rounded-lg py-1.5 pl-2.5 pr-2 text-[13px] transition-colors",
                                active
                                  ? "bg-violet-soft font-medium text-violet"
                                  : "text-body hover:bg-surface-2 hover:text-fg",
                              ].join(" ")}
                            >
                              {active && (
                                <span
                                  className={`absolute -left-[5px] top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full ${
                                    ACCENT_BAR[phase.accent]
                                  }`}
                                  aria-hidden
                                />
                              )}

                              <span
                                aria-hidden
                                className={[
                                  "flex size-4 shrink-0 items-center justify-center rounded-full border text-[9px] font-semibold tabular-nums transition-colors",
                                  complete
                                    ? "border-emerald bg-emerald text-white"
                                    : "border-line text-muted group-hover/lesson:border-line-strong",
                                ].join(" ")}
                              >
                                {complete ? <Check size={10} strokeWidth={3} /> : index + 1}
                              </span>

                              <span
                                className={`min-w-0 flex-1 leading-snug ${
                                  complete && !active
                                    ? "text-muted line-through decoration-line"
                                    : ""
                                }`}
                              >
                                {lesson.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
