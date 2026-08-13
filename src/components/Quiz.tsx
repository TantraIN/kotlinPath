"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, HelpCircle, RotateCcw, X } from "lucide-react";
import { useState } from "react";

import { t, type Lang } from "@/lib/i18n";

/**
 * A single check-yourself question, answered inline.
 *
 * Reading a lesson is passive; answering one question about it is not. The
 * explanation is shown after the attempt either way — being right for the wrong
 * reason is the failure mode this is meant to catch.
 */
export function Quiz({
  question,
  options,
  answer,
  explanation,
  uiLang,
}: {
  question: string;
  options: string[];
  /** Zero-based index of the correct option. */
  answer: number;
  /** Shown after answering, whether right or wrong. */
  explanation: string;
  uiLang: Lang;
}) {
  const copy = t(uiLang).quiz;
  const reduced = useReducedMotion();
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === answer;

  return (
    <section className="my-7 overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
      <header className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
        <HelpCircle size={15} className="shrink-0 text-violet" aria-hidden />
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.09em] text-violet">
          {copy.label}
        </p>
        {answered && (
          <button
            type="button"
            onClick={() => setPicked(null)}
            className="ml-auto flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11.5px] text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <RotateCcw size={11} />
            {copy.tryAgain}
          </button>
        )}
      </header>

      <div className="px-4 py-3.5">
        <p className="text-[15px] font-medium leading-relaxed text-fg">
          {question}
        </p>

        <ul className="mt-3 space-y-1.5">
          {options.map((option, index) => {
            const isAnswer = index === answer;
            const isPicked = index === picked;

            // After answering, always mark the right one; mark a wrong pick too.
            const state = !answered
              ? "idle"
              : isAnswer
                ? "right"
                : isPicked
                  ? "wrong"
                  : "dimmed";

            return (
              <li key={option}>
                <button
                  type="button"
                  disabled={answered}
                  onClick={() => setPicked(index)}
                  className={[
                    "flex w-full items-start gap-2.5 rounded-lg border px-3 py-2.5 text-left text-[14px] leading-relaxed transition-all",
                    state === "idle" &&
                      "border-line bg-surface-2 text-body hover:-translate-y-px hover:border-violet hover:text-fg",
                    state === "right" &&
                      "border-emerald/50 bg-emerald-soft text-fg",
                    state === "wrong" && "border-rose/50 bg-rose-soft text-fg",
                    state === "dimmed" &&
                      "border-line bg-surface-2 text-muted opacity-60",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span
                    aria-hidden
                    className={[
                      "mt-px flex size-5 shrink-0 items-center justify-center rounded-full border text-[10.5px] font-semibold",
                      state === "right" &&
                        "border-emerald bg-emerald text-white",
                      state === "wrong" && "border-rose bg-rose text-white",
                      (state === "idle" || state === "dimmed") &&
                        "border-line-strong text-muted",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {state === "right" ? (
                      <Check size={12} strokeWidth={3} />
                    ) : state === "wrong" ? (
                      <X size={12} strokeWidth={3} />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span>{option}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {answered && (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: -6 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={[
              "mt-3 rounded-lg border-l-[4px] px-3.5 py-2.5 text-[14px] leading-relaxed text-body",
              correct
                ? "border-l-emerald bg-emerald-soft"
                : "border-l-amber bg-amber-soft",
            ].join(" ")}
          >
            <p
              className={`mb-1 text-[11px] font-semibold uppercase tracking-wider ${
                correct ? "text-emerald" : "text-amber"
              }`}
            >
              {correct ? copy.correct : copy.notQuite}
            </p>
            {explanation}
          </motion.div>
        )}
      </div>
    </section>
  );
}
