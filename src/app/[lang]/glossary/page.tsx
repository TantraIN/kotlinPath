import { ArrowUpRight, PackageOpen } from "lucide-react";
import { notFound } from "next/navigation";

import { allEntries, SOURCE_META } from "@/content/glossary";
import { isLang, pick, t, type Lang } from "@/lib/i18n";

const ACCENT_CHIP: Record<string, string> = {
  violet: "text-violet bg-violet-soft",
  emerald: "text-emerald bg-emerald-soft",
  amber: "text-amber bg-amber-soft",
  sky: "text-sky bg-sky-soft",
  rose: "text-rose bg-rose-soft",
};

export default async function GlossaryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang);
  const entries = allEntries();

  return (
    <div className="px-5 pb-24 pt-8 lg:px-0 lg:pr-8">
      <header>
        <h1 className="text-[2.1rem] font-semibold tracking-tight text-fg">{copy.nav.glossary}</h1>
        <p className="prose-measure mt-2.5 text-[16px] leading-relaxed text-body">
          {lang === "hi"
            ? "हर वह token जिसे कोड में hover करने पर समझाया जाता है — एक ही जगह पर।"
            : lang === "hi-en"
              ? "Har wo token jise code mein hover karne par samjhaya jata hai — ek hi jagah par."
              : "Every token the code blocks explain on hover, collected in one place."}
        </p>
        <p className="mt-2 text-[12.5px] tabular-nums text-muted">{entries.length}</p>
      </header>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {entries.map((entry) => {
          const meta = SOURCE_META[entry.source];
          return (
            <article
              key={entry.term}
              id={entry.term.toLowerCase()}
              className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-surface p-4"
            >
              <header className="flex flex-wrap items-center gap-2">
                <code className="font-mono text-[15px] font-semibold text-fg">{entry.term}</code>
                <span className="rounded-md border border-line bg-surface-inset px-1.5 py-0.5 text-[11px] font-medium text-body">
                  {pick(entry.kind, lang)}
                </span>
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${
                    ACCENT_CHIP[meta.accent]
                  }`}
                >
                  {pick(meta.label, lang)}
                </span>
              </header>

              {entry.importLine ? (
                <code className="mt-2.5 block overflow-x-auto rounded-md border border-violet/30 bg-violet-soft px-2.5 py-2 font-mono text-[12px] font-medium text-fg">
                  {entry.importLine}
                </code>
              ) : (
                <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-inset px-2.5 py-1.5 text-[12.5px] text-body">
                  <PackageOpen size={13} className="text-muted" />
                  {copy.glossaryCard.noImport}
                </p>
              )}

              <dl className="mt-3 space-y-2 text-[13.5px] leading-relaxed">
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                    {copy.glossaryCard.does}
                  </dt>
                  <dd className="mt-0.5 text-fg">{pick(entry.does, lang)}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                    {copy.glossaryCard.affects}
                  </dt>
                  <dd className="mt-0.5 text-body">{pick(entry.affects, lang)}</dd>
                </div>
              </dl>

              {entry.docs && (
                <a
                  href={entry.docs}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-violet hover:underline"
                >
                  {copy.glossaryCard.docs}
                  <ArrowUpRight size={12} />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : "en";
  return { title: t(safe).nav.glossary };
}
