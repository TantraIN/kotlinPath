"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { LANGS, LANG_META, swapLangInPath, t, type Lang } from "@/lib/i18n";

const STORAGE_KEY = "kotlinpath-lang";

export function LangSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const copy = t(lang).language;

  // Remember the choice so a bare "/" lands on the right language next time.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Private browsing can block storage — the URL segment still works.
    }
  }, [lang]);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Lang) => {
    setOpen(false);
    if (next === lang) return;
    router.push(swapLangInPath(pathname, next));
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={copy.switch}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-fg"
      >
        <Languages size={15} />
        <span>{LANG_META[lang].short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={copy.label}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-float"
          >
            {LANGS.map((code) => {
              const meta = LANG_META[code];
              const active = code === lang;
              return (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => choose(code)}
                    className={[
                      "flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
                      active ? "bg-violet-soft" : "hover:bg-surface-2",
                    ].join(" ")}
                  >
                    <span className="mt-0.5 w-4 shrink-0">
                      {active && <Check size={14} className="text-violet" />}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-[13.5px] font-medium ${active ? "text-violet" : "text-fg"}`}
                        lang={meta.htmlLang}
                      >
                        {meta.label}
                      </span>
                      <span
                        className="mt-0.5 block text-[11.5px] leading-snug text-muted"
                        lang={meta.htmlLang}
                      >
                        {meta.hint}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
