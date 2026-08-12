import { CalendarDays, Clock, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PhaseProgressBadge, LessonCheck } from "@/components/CurriculumProgress";
import { Reveal } from "@/components/Reveal";
import { CURRICULUM, STATS } from "@/content/curriculum";
import { isLang, pick, t, type Lang } from "@/lib/i18n";

const ACCENT_TEXT: Record<string, string> = {
  violet: "text-violet",
  emerald: "text-emerald",
  amber: "text-amber",
  sky: "text-sky",
  rose: "text-rose",
};

/** Written out in full so Tailwind can see every class it must generate. */
const ACCENT_HOVER: Record<string, string> = {
  violet: "hover:text-violet",
  emerald: "hover:text-emerald",
  amber: "hover:text-amber",
  sky: "hover:text-sky",
  rose: "hover:text-rose",
};

/** The phase banner: a filled strip, not just a hairline on the left. */
const ACCENT_BAND: Record<string, string> = {
  violet: "bg-violet-soft border-l-violet",
  emerald: "bg-emerald-soft border-l-emerald",
  amber: "bg-amber-soft border-l-amber",
  sky: "bg-sky-soft border-l-sky",
  rose: "bg-rose-soft border-l-rose",
};

const ACCENT_CHIP: Record<string, string> = {
  violet: "bg-violet text-white",
  emerald: "bg-emerald text-white",
  amber: "bg-amber text-white",
  sky: "bg-sky text-white",
  rose: "bg-rose text-white",
};

const DIFFICULTY_DOT = {
  beginner: "bg-emerald",
  intermediate: "bg-amber",
  advanced: "bg-rose",
} as const;

export default async function CurriculumPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang);

  // Calendar position of each phase, computed once rather than accumulated
  // during render.
  const weekStarts = CURRICULUM.reduce<number[]>((acc, phase, index) => {
    acc.push(index === 0 ? 1 : acc[index - 1] + CURRICULUM[index - 1].weeks);
    return acc;
  }, []);

  return (
    <div className="px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
      <header>
        <h1 className="text-[2.1rem] font-semibold tracking-tight text-fg">
          {copy.home.roadmapTitle}
        </h1>
        <p className="prose-measure mt-2.5 text-[16px] leading-relaxed text-body">
          {copy.home.roadmapSubtitle}
        </p>

        <dl className="mt-6 flex flex-wrap gap-2">
          <Meta
            Icon={CalendarDays}
            accent="sky"
            label={`${STATS.weeks} weeks`}
          />
          <Meta
            Icon={Clock}
            accent="amber"
            label={`${STATS.hours}+ ${copy.common.hours}`}
          />
          <Meta
            Icon={Target}
            accent="violet"
            label={`${STATS.lessons} ${copy.home.statsLessons.toLowerCase()}`}
          />
        </dl>
      </header>

      <div className="mt-10 space-y-12">
        {CURRICULUM.map((phase, phaseIndex) => {
          const start = weekStarts[phaseIndex];

          return (
            <Reveal key={phase.slug}>
              <section id={phase.slug} className="scroll-mt-24">
                <div
                  className={`rounded-t-[var(--radius-card)] border border-b-0 border-line border-l-4 px-4 py-3.5 ${
                    ACCENT_BAND[phase.accent]
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        ACCENT_CHIP[phase.accent]
                      }`}
                    >
                      {copy.common.phase} {phase.number}
                    </span>
                    <h2 className="text-[1.4rem] font-semibold tracking-tight text-fg">
                      {pick(phase.title, lang)}
                    </h2>
                    <span className="ml-auto flex items-center gap-2">
                      <PhaseProgressBadge slug={phase.slug} accent={phase.accent} lang={lang} />
                      <span className="whitespace-nowrap rounded-md border border-line-strong bg-surface px-2 py-0.5 font-mono text-[11px] text-body">
                        week {start}
                        {phase.weeks > 1 ? `–${start + phase.weeks - 1}` : ""}
                      </span>
                    </span>
                  </div>

                  <p className="mt-2 text-[14.5px] leading-relaxed text-body">
                    {pick(phase.blurb, lang)}
                  </p>
                </div>

                <div className="overflow-x-auto rounded-b-[var(--radius-card)] border border-line">
                  <table className="w-full border-collapse text-[13.5px]">
                    <thead className="bg-surface-2">
                      <tr>
                        <th className="w-10 border-b border-line px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-muted">
                          #
                        </th>
                        <th className="border-b border-line px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-muted">
                          {copy.common.lesson}
                        </th>
                        <th className="hidden border-b border-line px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-muted sm:table-cell">
                          {copy.lesson.difficulty}
                        </th>
                        <th className="w-16 border-b border-line px-3 py-2 text-right text-[11px] font-semibold uppercase tracking-wide text-muted">
                          {copy.lesson.minutes}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase.lessons.map((lesson, index) => (
                        <tr
                          key={lesson.slug}
                          className="transition-colors hover:bg-surface-2/60"
                        >
                          <td className="border-b border-line px-3 py-2">
                            <LessonCheck path={`${phase.slug}/${lesson.slug}`} index={index} />
                          </td>
                          <td className="border-b border-line px-3 py-2">
                            <Link
                              href={`/${lang}/learn/${phase.slug}/${lesson.slug}`}
                              className={`font-medium text-fg transition-colors ${ACCENT_HOVER[phase.accent]}`}
                            >
                              {lesson.title}
                            </Link>
                          </td>
                          <td className="hidden border-b border-line px-3 py-2 sm:table-cell">
                            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-body">
                              <span
                                className={`size-1.5 rounded-full ${DIFFICULTY_DOT[lesson.difficulty]}`}
                                aria-hidden
                              />
                              {copy.difficulty[lesson.difficulty]}
                            </span>
                          </td>
                          <td className="border-b border-line px-3 py-2 text-right tabular-nums text-body">
                            {lesson.minutes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3 flex items-start gap-2 rounded-lg border border-line bg-surface-2 px-3.5 py-2.5 text-[13px] leading-relaxed text-body">
                  <Target
                    size={14}
                    className={`mt-0.5 shrink-0 ${ACCENT_TEXT[phase.accent]}`}
                  />
                  <span>
                    <span className="font-semibold text-fg">
                      {copy.common.project}:{" "}
                    </span>
                    {pick(phase.project, lang)}
                  </span>
                </p>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/** Each headline number gets its own accent so the row reads at a glance. */
const META_ACCENT: Record<string, string> = {
  sky: "border-sky/35 bg-sky-soft text-sky",
  amber: "border-amber/40 bg-amber-soft text-amber",
  violet: "border-violet/35 bg-violet-soft text-violet",
};

function Meta({
  Icon,
  label,
  accent,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  accent: keyof typeof META_ACCENT;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[13px] font-semibold ${META_ACCENT[accent]}`}
    >
      <Icon size={14} className="shrink-0" />
      {label}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : "en";
  return { title: t(safe).nav.curriculum };
}
