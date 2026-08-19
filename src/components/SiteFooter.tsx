import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { ALL_LESSONS, STATS } from "@/content/curriculum";
import { GLOSSARY_TERMS } from "@/content/glossary";
import { LANG_META, LANGS, t, type Lang } from "@/lib/i18n";

/**
 * The site footer.
 *
 * Deliberately a plain server component: it is four lists of links and a few
 * numbers, so nothing here needs to reach the browser as JavaScript. Every
 * string comes from the dictionary, and the language column links to the same
 * home page in each language rather than trying to translate the current route,
 * which the header's switcher already does properly.
 */
export function SiteFooter({ lang }: { lang: Lang }) {
  const copy = t(lang);
  const first = ALL_LESSONS[0];

  const learn = [
    { href: `/${lang}/curriculum`, label: copy.nav.curriculum },
    { href: `/${lang}/projects`, label: copy.nav.projects },
    { href: `/${lang}/glossary`, label: copy.nav.glossary },
  ];

  // Deliberately not a project count: `STATS.projects` on the landing page means
  // the app you ship at the end of each phase, which is a different thing from
  // the guided projects linked above, and two numbers under the same word read
  // as a contradiction.
  const numbers = [
    { value: STATS.phases, label: copy.home.statsPhases },
    { value: STATS.lessons, label: copy.home.statsLessons },
    { value: `${STATS.hours}+`, label: copy.home.statsHours },
    { value: GLOSSARY_TERMS.length, label: copy.nav.glossary },
  ];

  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="inline-flex items-center gap-2.5">
              <Logo size={30} />
              <span className="flex flex-col leading-none">
                <span className="text-[16px] font-semibold tracking-tight text-fg">KotlinPath</span>
                <span className="mt-1 text-[11px] text-muted">{copy.brandTagline}</span>
              </span>
            </Link>

            <p className="mt-4 max-w-[34rem] text-[14px] leading-relaxed text-body">
              {copy.footer.tagline}
            </p>

            <Link
              href={`/${lang}/learn/${first.path}`}
              className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-3.5 py-2 text-[13.5px] font-semibold text-fg transition-all hover:-translate-y-px hover:border-violet hover:text-violet hover:shadow-soft"
            >
              {copy.footer.startHere}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Learn */}
          <nav aria-label={copy.footer.learn} className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {copy.footer.learn}
            </h2>
            <ul className="mt-3 space-y-2">
              {learn.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-body transition-colors hover:text-violet"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Languages */}
          <nav aria-label={copy.footer.languages} className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {copy.footer.languages}
            </h2>
            <ul className="mt-3 space-y-2">
              {LANGS.map((code) => (
                <li key={code}>
                  <Link
                    href={`/${code}`}
                    hrefLang={LANG_META[code].htmlLang}
                    aria-current={code === lang ? "true" : undefined}
                    className={
                      code === lang
                        ? "text-[14px] font-medium text-fg"
                        : "text-[14px] text-body transition-colors hover:text-violet"
                    }
                  >
                    {LANG_META[code].label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Numbers */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              {copy.footer.course}
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {numbers.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] text-muted">{stat.label}</dt>
                  <dd className="text-[17px] font-semibold tabular-nums tracking-tight text-fg">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-5">
          <ShieldCheck size={14} className="shrink-0 text-emerald" />
          <p className="text-[12.5px] leading-relaxed text-muted">{copy.footer.privacy}</p>
        </div>
      </div>
    </footer>
  );
}
