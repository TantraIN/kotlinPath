import { ArrowLeft, ArrowRight, Clock, Construction, Languages, Signal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LessonComplete } from "@/components/LessonComplete";
import { MdxContent } from "@/components/MdxContent";
import { TableOfContents } from "@/components/TableOfContents";
import { ALL_LESSONS, findLesson, neighbours } from "@/content/curriculum";
import { extractHeadings, loadLesson } from "@/lib/content";
import { isLang, LANGS, pick, t, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    ALL_LESSONS.map(({ path }) => ({ lang, slug: path.split("/") })),
  );
}

const DIFFICULTY_STYLE = {
  beginner: "text-emerald border-emerald/40 bg-emerald-soft",
  intermediate: "text-amber border-amber/40 bg-amber-soft",
  advanced: "text-rose border-rose/40 bg-rose-soft",
} as const;

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();

  const path = slug.join("/");
  const ref = findLesson(path);
  if (!ref) notFound();

  const copy = t(lang);
  const loaded = await loadLesson(lang, path);
  const headings = loaded ? extractHeadings(loaded.body) : [];
  const { prev, next } = neighbours(path);

  const title = loaded?.frontmatter.title ?? ref.lesson.title;
  const description = loaded?.frontmatter.description;

  return (
    <div className="flex gap-8">
      <article className="min-w-0 flex-1 px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px]">
          <Link href={`/${lang}/curriculum`} className="text-muted hover:text-violet">
            {copy.nav.curriculum}
          </Link>
          <span className="text-muted" aria-hidden>
            /
          </span>
          <Link
            href={`/${lang}/curriculum#${ref.phase.slug}`}
            className="font-medium text-violet hover:underline"
          >
            {copy.common.phase} {ref.phase.number} · {pick(ref.phase.title, lang)}
          </Link>
        </nav>

        <header className="mt-3">
          <h1 className="text-balance text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-fg">
            {title}
          </h1>
          {description && (
            <p className="prose-measure mt-3 text-pretty text-[16.5px] leading-relaxed text-body">
              {description}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2 border-y border-line py-2.5 text-[12px]">
            <span className="inline-flex items-center gap-1.5 text-muted">
              <Clock size={13} className="text-muted" />
              {ref.lesson.minutes} {copy.lesson.minutes}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 font-medium ${
                DIFFICULTY_STYLE[ref.lesson.difficulty]
              }`}
            >
              <Signal size={12} />
              {copy.difficulty[ref.lesson.difficulty]}
            </span>
            <span className="ml-auto tabular-nums text-muted">
              {ref.index + 1} {copy.common.of} {ALL_LESSONS.length}
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
            <ComingSoon lang={lang} tags={ref.lesson.tags ?? []} />
          )}
        </div>

        <LessonComplete path={path} lang={lang} />

        {/* Prev / next */}
        <nav className="mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/${lang}/learn/${prev.path}`}
              className="group flex flex-col rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                <ArrowLeft size={12} />
                {copy.lesson.prev}
              </span>
              <span className="mt-1 text-[14px] font-medium text-fg group-hover:text-violet">
                {prev.lesson.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next && (
            <Link
              href={`/${lang}/learn/${next.path}`}
              className="group flex flex-col rounded-xl border border-line bg-surface px-4 py-3 text-right transition-colors hover:border-line-strong sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                {copy.lesson.next}
                <ArrowRight size={12} />
              </span>
              <span className="mt-1 text-[14px] font-medium text-fg group-hover:text-violet">
                {next.lesson.title}
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

function ComingSoon({ lang, tags }: { lang: Lang; tags: string[] }) {
  const body = {
    en: "This lesson is not written yet. Its place in the course, its length and the concepts it covers are already fixed — the content lands in this phase's writing pass.",
    hi: "यह पाठ अभी लिखा नहीं गया है। पाठ्यक्रम में इसकी जगह, लंबाई और इसमें आने वाले concepts तय हो चुके हैं — सामग्री इस phase के लेखन चरण में आएगी।",
    "hi-en":
      "Ye lesson abhi likha nahi gaya hai. Course mein iski jagah, lambai aur ismein aane wale concepts tay ho chuke hain — content is phase ke writing pass mein aayega.",
  }[lang];

  return (
    <div className="rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface px-5 py-8 text-center">
      <Construction size={22} className="mx-auto text-muted" />
      <p className="prose-measure mx-auto mt-3 text-[14.5px] leading-relaxed text-body">{body}</p>
      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11.5px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
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
  const ref = findLesson(slug.join("/"));
  if (!ref) return {};
  const loaded = await loadLesson(safe, ref.path);
  return {
    title: loaded?.frontmatter.title ?? ref.lesson.title,
    description: loaded?.frontmatter.description,
  };
}
