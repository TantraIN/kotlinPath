import {
  ArrowLeft,
  ArrowRight,
  CircleCheckBig,
  Clock,
  Construction,
  Languages,
  Layers,
  Package,
  Signal,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LessonComplete } from "@/components/LessonComplete";
import { MdxContent } from "@/components/MdxContent";
import { ProjectProgressBadge, StepCheck } from "@/components/ProjectProgress";
import { Reveal } from "@/components/Reveal";
import { TableOfContents } from "@/components/TableOfContents";
import {
  ALL_STEPS,
  findProject,
  findStep,
  projectMinutes,
  stepNeighbours,
  stepProgressKey,
  type Project,
} from "@/content/projects";
import { extractHeadings, loadProjectStep } from "@/lib/content";
import { isLang, LANGS, pick, t, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => [
    ...ALL_STEPS.map(({ project }) => ({ lang, slug: [project.slug] })),
    ...ALL_STEPS.map(({ path }) => ({ lang, slug: path.split("/") })),
  ]);
}

const DIFFICULTY_STYLE = {
  beginner: "text-emerald border-emerald/40 bg-emerald-soft",
  intermediate: "text-amber border-amber/40 bg-amber-soft",
  advanced: "text-rose border-rose/40 bg-rose-soft",
} as const;

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();

  if (slug.length === 1) {
    const project = findProject(slug[0]);
    if (!project) notFound();
    return <Overview project={project} lang={lang} />;
  }

  if (slug.length === 2) {
    return <Step path={slug.join("/")} lang={lang} />;
  }

  notFound();
}

/* ------------------------------------------------------------------ *
 * Project overview
 * ------------------------------------------------------------------ */

async function Overview({ project, lang }: { project: Project; lang: Lang }) {
  const copy = t(lang);
  const hours = Math.round(projectMinutes(project) / 60);

  return (
    <div className="px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px]">
        <Link href={`/${lang}/projects`} className="text-muted hover:text-emerald">
          {copy.projects.title}
        </Link>
        <span className="text-muted" aria-hidden>
          /
        </span>
        <span className="font-medium text-emerald">{project.name}</span>
      </nav>

      <header className="mt-3">
        <h1 className="text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-fg">
          {project.name}
        </h1>
        <p className="prose-measure mt-2 text-pretty text-[17px] font-medium leading-snug text-body">
          {pick(project.title, lang)}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-y border-line py-2.5 text-[12px]">
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Layers size={13} />
            {project.steps.length} {copy.projects.steps}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Clock size={13} />
            {hours} {copy.common.hours}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 font-medium ${
              DIFFICULTY_STYLE[project.difficulty]
            }`}
          >
            <Signal size={12} />
            {copy.difficulty[project.difficulty]}
          </span>
          <span className="rounded-md border border-line bg-surface-inset px-1.5 py-0.5 text-muted">
            {copy.projects.afterPhase} {project.afterPhase}
          </span>
          <span className="ml-auto">
            <ProjectProgressBadge slug={project.slug} lang={lang} />
          </span>
        </div>
      </header>

      <p className="prose-measure mt-6 text-pretty text-[15.5px] leading-relaxed text-body">
        {pick(project.intro, lang)}
      </p>

      {/* What you end up with */}
      <Reveal>
        <section className="mt-8 rounded-[var(--radius-card)] border border-emerald/40 bg-emerald-soft px-5 py-4">
          <h2 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-emerald">
            <Package size={14} />
            {copy.projects.youBuild}
          </h2>
          <ul className="mt-3 grid gap-2">
            {project.ships.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <CircleCheckBig size={14} className="mt-1 shrink-0 text-emerald" />
                <span className="text-[14.5px] leading-relaxed text-fg">{pick(item, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Stack */}
      <Reveal delay={0.05}>
        <section className="mt-8">
          <h2 className="text-[17px] font-semibold tracking-tight text-fg">
            {copy.projects.stack}
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-left">
              <tbody>
                {project.stack.map((item) => (
                  <tr key={item.name} className="border-b border-line last:border-0">
                    <th
                      scope="row"
                      className="w-[11rem] whitespace-nowrap py-2.5 pr-4 align-top font-mono text-[13px] font-medium text-fg"
                    >
                      {item.name}
                    </th>
                    <td className="py-2.5 text-[14px] leading-relaxed text-body">
                      {pick(item.role, lang)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      {/* Steps */}
      <Reveal delay={0.1}>
        <section className="mt-9">
          <h2 className="text-[17px] font-semibold tracking-tight text-fg">
            {copy.projects.steps.charAt(0).toUpperCase() + copy.projects.steps.slice(1)}
          </h2>
          <ol className="mt-3 grid gap-2">
            {project.steps.map((step, index) => (
              <li key={step.slug}>
                <Link
                  href={`/${lang}/projects/${project.slug}/${step.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-emerald/50 hover:bg-surface-2"
                >
                  <StepCheck path={`${project.slug}/${step.slug}`} index={index} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14.5px] font-medium leading-snug text-fg group-hover:text-emerald">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-muted">
                      {pick(step.outcome, lang)}
                    </span>
                  </span>
                  <span className="shrink-0 whitespace-nowrap pt-0.5 text-[11.5px] tabular-nums text-muted">
                    {step.minutes} {copy.lesson.minutes}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Link
        href={`/${lang}/projects/${project.slug}/${project.steps[0].slug}`}
        className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2 px-4 py-2.5 text-[14px] font-semibold text-fg transition-all hover:-translate-y-px hover:border-emerald hover:text-emerald hover:shadow-soft"
      >
        {copy.projects.startBuilding}
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * One step
 * ------------------------------------------------------------------ */

async function Step({ path, lang }: { path: string; lang: Lang }) {
  const ref = findStep(path);
  if (!ref) notFound();

  const copy = t(lang);
  const loaded = await loadProjectStep(lang, path);
  const headings = loaded ? extractHeadings(loaded.body) : [];
  const { prev, next } = stepNeighbours(path);

  const title = loaded?.frontmatter.title ?? ref.step.title;
  const description = loaded?.frontmatter.description;

  return (
    <div className="flex gap-8">
      <article className="min-w-0 flex-1 px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px]">
          <Link href={`/${lang}/projects`} className="text-muted hover:text-emerald">
            {copy.projects.title}
          </Link>
          <span className="text-muted" aria-hidden>
            /
          </span>
          <Link
            href={`/${lang}/projects/${ref.project.slug}`}
            className="font-medium text-emerald hover:underline"
          >
            {ref.project.name}
          </Link>
        </nav>

        <header className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald">
            {copy.projects.step} {ref.index + 1} {copy.common.of} {ref.project.steps.length}
          </p>
          <h1 className="mt-1.5 text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-fg">
            {title}
          </h1>
          {description && (
            <p className="prose-measure mt-3 text-pretty text-[16.5px] leading-relaxed text-body">
              {description}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2 border-y border-line py-2.5 text-[12px]">
            <span className="inline-flex items-center gap-1.5 text-muted">
              <Clock size={13} />
              {ref.step.minutes} {copy.lesson.minutes}
            </span>
            <span className="inline-flex min-w-0 items-center gap-1.5 text-muted">
              <CircleCheckBig size={13} className="shrink-0 text-emerald" />
              <span className="truncate">{pick(ref.step.outcome, lang)}</span>
            </span>
          </div>
        </header>

        {loaded?.fallback && (
          <aside className="mt-6 flex items-start gap-2.5 rounded-[var(--radius-card)] border border-amber/40 bg-amber-soft px-4 py-3">
            <Languages size={15} className="mt-0.5 shrink-0 text-amber" />
            <p className="text-[13.5px] leading-relaxed text-fg">
              <span className="font-semibold text-amber">{copy.lesson.notTranslated}. </span>
              {copy.lesson.notTranslatedBody}
            </p>
          </aside>
        )}

        <div className="mt-8">
          {loaded ? (
            <MdxContent source={loaded.body} lang={lang} />
          ) : (
            <div className="rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface px-5 py-8 text-center">
              <Construction size={22} className="mx-auto text-muted" />
              <p className="mt-3 text-[15px] font-semibold text-fg">{copy.projects.notWritten}</p>
              <p className="prose-measure mx-auto mt-1.5 text-[14.5px] leading-relaxed text-body">
                {copy.projects.notWrittenBody}
              </p>
            </div>
          )}
        </div>

        <LessonComplete path={stepProgressKey(path)} lang={lang} />

        <nav className="mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/${lang}/projects/${prev.path}`}
              className="group flex flex-col rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                <ArrowLeft size={12} />
                {copy.projects.prevStep}
              </span>
              <span className="mt-1 text-[14px] font-medium text-fg group-hover:text-emerald">
                {prev.step.title}
              </span>
            </Link>
          ) : (
            <Link
              href={`/${lang}/projects/${ref.project.slug}`}
              className="group flex flex-col rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                <ArrowLeft size={12} />
                {copy.projects.backToProject}
              </span>
              <span className="mt-1 text-[14px] font-medium text-fg group-hover:text-emerald">
                {copy.projects.overview}
              </span>
            </Link>
          )}

          {next && (
            <Link
              href={`/${lang}/projects/${next.path}`}
              className="group flex flex-col rounded-xl border border-line bg-surface px-4 py-3 text-right transition-colors hover:border-line-strong sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                {copy.projects.nextStep}
                <ArrowRight size={12} />
              </span>
              <span className="mt-1 text-[14px] font-medium text-fg group-hover:text-emerald">
                {next.step.title}
              </span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 xl:block">
        <TableOfContents headings={headings} lang={lang} />
      </aside>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  const safe: Lang = isLang(lang) ? lang : "en";

  if (slug.length === 1) {
    const project = findProject(slug[0]);
    if (!project) return {};
    return { title: project.name, description: pick(project.blurb, safe) };
  }

  const ref = findStep(slug.join("/"));
  if (!ref) return {};
  const loaded = await loadProjectStep(safe, ref.path);
  return {
    title: `${loaded?.frontmatter.title ?? ref.step.title} · ${ref.project.name}`,
    description: loaded?.frontmatter.description ?? pick(ref.step.outcome, safe),
  };
}
