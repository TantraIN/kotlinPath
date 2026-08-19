import { ArrowRight, Clock, Hammer, Layers, ListChecks, Signal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectProgressBadge } from "@/components/ProjectProgress";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, projectMinutes, type Project } from "@/content/projects";
import { isLang, LANGS, pick, t, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

/** Written out in full so Tailwind can see every class it must generate. */
const ACCENT_BAND: Record<string, string> = {
  violet: "bg-violet-soft border-violet/40",
  emerald: "bg-emerald-soft border-emerald/40",
  amber: "bg-amber-soft border-amber/40",
  sky: "bg-sky-soft border-sky/40",
  rose: "bg-rose-soft border-rose/40",
};

const ACCENT_TEXT: Record<string, string> = {
  violet: "text-violet",
  emerald: "text-emerald",
  amber: "text-amber",
  sky: "text-sky",
  rose: "text-rose",
};

const DIFFICULTY_STYLE = {
  beginner: "text-emerald border-emerald/40 bg-emerald-soft",
  intermediate: "text-amber border-amber/40 bg-amber-soft",
  advanced: "text-rose border-rose/40 bg-rose-soft",
} as const;

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang);

  return (
    <div className="px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
      <header className="max-w-[52rem]">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${ACCENT_TEXT.emerald}`}>
          {copy.projects.eyebrow}
        </p>
        <h1 className="mt-2 text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-fg">
          {copy.projects.title}
        </h1>
        <p className="prose-measure mt-3 text-pretty text-[16.5px] leading-relaxed text-body">
          {copy.projects.subtitle}
        </p>
      </header>

      <ul className="mt-9 grid gap-5">
        {PROJECTS.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={index * 0.05}>
              <ProjectCard project={project} lang={lang} copy={copy} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={PROJECTS.length * 0.05}>
        <div className="mt-6 rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface px-5 py-7 text-center">
          <Hammer size={20} className="mx-auto text-muted" />
          <p className="mt-3 text-[15px] font-semibold text-fg">{copy.projects.more}</p>
          <p className="prose-measure mx-auto mt-1.5 text-[14px] leading-relaxed text-body">
            {copy.projects.moreBody}
          </p>
        </div>
      </Reveal>
    </div>
  );
}

function ProjectCard({
  project,
  lang,
  copy,
}: {
  project: Project;
  lang: Lang;
  copy: ReturnType<typeof t>;
}) {
  const minutes = projectMinutes(project);
  const hours = Math.round(minutes / 60);

  return (
    <article className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-colors hover:border-line-strong">
      <div
        className={`flex flex-wrap items-center gap-2.5 border-b px-5 py-3 ${ACCENT_BAND[project.accent]}`}
      >
        <ListChecks size={16} className={ACCENT_TEXT[project.accent]} />
        <span className="text-[15px] font-semibold tracking-tight text-fg">{project.name}</span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 text-[11.5px] font-medium ${
            DIFFICULTY_STYLE[project.difficulty]
          }`}
        >
          <Signal size={11} />
          {copy.difficulty[project.difficulty]}
        </span>
        <span className="ml-auto flex items-center gap-3 text-[12px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Layers size={12} />
            {project.steps.length} {copy.projects.steps}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} />
            {hours} {copy.common.hours}
          </span>
        </span>
      </div>

      <div className="px-5 py-5">
        <h2 className="text-[17px] font-semibold leading-snug tracking-tight text-fg">
          {pick(project.title, lang)}
        </h2>
        <p className="prose-measure mt-2 text-[14.5px] leading-relaxed text-body">
          {pick(project.blurb, lang)}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/${lang}/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2 px-4 py-2 text-[13.5px] font-semibold text-fg transition-all hover:-translate-y-px hover:border-violet hover:text-violet hover:shadow-soft"
          >
            {copy.projects.startBuilding}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>

          <span className="rounded-md border border-line bg-surface-inset px-2 py-1 text-[12px] text-muted">
            {copy.projects.afterPhase} {project.afterPhase}
          </span>

          <ProjectProgressBadge slug={project.slug} lang={lang} />
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : "en";
  const copy = t(safe);
  return { title: copy.projects.title, description: copy.projects.subtitle };
}
