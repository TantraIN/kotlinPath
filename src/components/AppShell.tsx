"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LangSwitcher } from "@/components/LangSwitcher";
import { Logo } from "@/components/Logo";
import { SearchDialog } from "@/components/SearchDialog";
import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { t, type Lang } from "@/lib/i18n";
import type { SearchDoc } from "@/lib/search-types";

/** The three top-level destinations, shared by the header and the mobile drawer. */
const NAV_LINKS = [
  { href: "curriculum", label: (copy: ReturnType<typeof t>) => copy.nav.curriculum },
  { href: "projects", label: (copy: ReturnType<typeof t>) => copy.nav.projects },
  { href: "glossary", label: (copy: ReturnType<typeof t>) => copy.nav.glossary },
] as const;

export function AppShell({
  lang,
  searchDocs,
  children,
}: {
  lang: Lang;
  searchDocs: SearchDoc[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const copy = t(lang);
  const [drawer, setDrawer] = useState(false);

  // The landing page gets the full width; everything else gets the lesson rail.
  const isLanding = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-3 sm:px-5">
          {!isLanding && (
            <button
              type="button"
              aria-label={copy.nav.menu}
              onClick={() => setDrawer(true)}
              className="-ml-1 rounded-lg p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
            >
              <Menu size={18} />
            </button>
          )}

          <Link
            href={`/${lang}`}
            className="flex shrink-0 items-center gap-2.5 rounded-lg transition-opacity hover:opacity-85"
          >
            <Logo size={28} />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[15px] font-semibold tracking-tight text-fg">KotlinPath</span>
              <span className="mt-0.5 text-[10.5px] text-muted">{copy.brandTagline}</span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <SearchDialog docs={searchDocs} lang={lang} />
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={`/${lang}/${href}`}
                className="hidden rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg md:block"
              >
                {label(copy)}
              </Link>
            ))}
            <LangSwitcher lang={lang} />
            <ThemeToggle lang={lang} />
          </div>
        </div>
      </header>

      {isLanding ? (
        <main>{children}</main>
      ) : (
        <div className="mx-auto flex max-w-[1600px] gap-0 px-0 sm:px-5">
          <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[17.5rem] shrink-0 overflow-y-auto overscroll-contain pr-3 lg:block">
            <Sidebar lang={lang} />
          </aside>

          <main className="min-w-0 flex-1 border-line lg:border-l lg:pl-8">{children}</main>
        </div>
      )}

      <AnimatePresence>
        {drawer && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label={copy.nav.close}
              onClick={() => setDrawer(false)}
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-[19rem] max-w-[85vw] flex-col bg-surface shadow-float"
            >
              <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-line px-4">
                <Logo size={24} />
                <span className="text-[14.5px] font-semibold text-fg">KotlinPath</span>
                <button
                  type="button"
                  aria-label={copy.nav.close}
                  onClick={() => setDrawer(false)}
                  className="ml-auto rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-fg"
                >
                  <X size={18} />
                </button>
              </div>
              {/* The header links are hidden below md, so the drawer carries them. */}
              <div className="flex shrink-0 gap-1.5 border-b border-line px-3 py-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={`/${lang}/${href}`}
                    onClick={() => setDrawer(false)}
                    className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[12.5px] font-medium text-body transition-colors hover:border-violet hover:text-violet"
                  >
                    {label(copy)}
                  </Link>
                ))}
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto px-2">
                <Sidebar lang={lang} onNavigate={() => setDrawer(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
