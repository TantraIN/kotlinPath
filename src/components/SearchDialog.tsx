"use client";

import Fuse from "fuse.js";
import { motion } from "motion/react";
import {
  BookOpen,
  CornerDownLeft,
  Hammer,
  Hash,
  Layers,
  Search,
  Tag,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { t, type Lang } from "@/lib/i18n";
import { FUSE_OPTIONS, type SearchDoc } from "@/lib/search-types";
import { useMounted } from "@/lib/use-mounted";

const KIND_ICON = {
  lesson: BookOpen,
  phase: Layers,
  heading: Hash,
  glossary: Tag,
  project: Hammer,
} as const;

const KIND_ACCENT = {
  lesson: "text-violet",
  phase: "text-emerald",
  heading: "text-muted",
  glossary: "text-amber",
  project: "text-emerald",
} as const;

export function SearchDialog({
  docs,
  lang,
}: {
  docs: SearchDoc[];
  lang: Lang;
}) {
  const router = useRouter();
  const copy = t(lang);
  const mounted = useMounted();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const fuse = useMemo(() => new Fuse(docs, FUSE_OPTIONS), [docs]);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    return fuse.search(trimmed, { limit: 24 }).map((hit) => hit.item);
  }, [fuse, query]);

  const openDialog = useCallback(() => {
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        setQuery("");
        setActive(0);
      }
      if (event.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeDialog]);

  // Lock background scroll while the palette is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = useCallback(
    (doc: SearchDoc) => {
      closeDialog();
      router.push(doc.href);
    },
    [closeDialog, router],
  );

  const onListKey = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      go(results[active]);
    }
  };

  /**
   * The overlay is portalled to <body> deliberately.
   *
   * The header carries `backdrop-blur`, and a backdrop-filter establishes a
   * containing block for fixed-position descendants. Rendered in place, the
   * dialog would be anchored to the header rather than the viewport and the
   * click-catching backdrop would be clipped inside it — which is exactly why
   * clicking outside failed to close it.
   *
   * Closing is deliberately instant, with no exit animation. A command palette
   * should get out of the way immediately, and presence that depends on an
   * animation finishing can leave the overlay mounted — and blocking the page —
   * whenever the tab is backgrounded and rAF stops firing mid-close.
   */
  const overlay = open ? (
    <div className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[8vh]">
      <button
        type="button"
        aria-label={copy.nav.close}
        onClick={closeDialog}
        className="absolute inset-0 bg-black/55 backdrop-blur-[3px]"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={copy.nav.search}
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[72vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-float"
        onKeyDown={onListKey}
      >
        {/*
          The field carries no focus ring of its own. It is autofocused the
          moment the palette opens, so the ring adds nothing — and the global
          `:focus-visible` outline has a 2px offset that the dialog's
          `overflow-hidden` clips along the top edge, which reads as the input
          being stuck to the card.
        */}
        <div className="flex items-center gap-3 border-b border-line px-5 py-1.5">
          <Search size={17} className="shrink-0 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            placeholder={copy.nav.searchPlaceholder}
            aria-label={copy.nav.search}
            className="w-full bg-transparent py-3.5 text-[15px] text-fg outline-none focus:outline-none focus-visible:outline-none placeholder:text-muted"
          />
          <kbd className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10.5px] text-muted">
            esc
          </kbd>
        </div>

        <ul ref={listRef} className="min-h-0 flex-1 overflow-y-auto p-2.5">
          {!query.trim() && (
            <li className="px-3 py-10 text-center text-[13.5px] text-muted">
              {copy.search.empty}
            </li>
          )}

          {query.trim() && results.length === 0 && (
            <li className="px-3 py-10 text-center text-[13.5px] text-muted">
              {copy.search.noResults}
            </li>
          )}

          {results.map((doc, index) => {
            const Icon = KIND_ICON[doc.kind];
            const selected = index === active;
            return (
              <li key={doc.id}>
                <button
                  type="button"
                  data-index={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => go(doc)}
                  className={[
                    "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    selected ? "bg-violet-soft" : "hover:bg-surface-2",
                  ].join(" ")}
                >
                  <Icon
                    size={15}
                    className={`mt-0.5 shrink-0 ${KIND_ACCENT[doc.kind]}`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium text-fg">
                      {doc.title}
                    </span>
                    {(doc.body || doc.context) && (
                      <span className="mt-0.5 block truncate text-[12px] text-muted">
                        {doc.body || `${copy.search.inLesson} ${doc.context}`}
                      </span>
                    )}
                  </span>
                  {selected && (
                    <CornerDownLeft
                      size={13}
                      className="mt-1 shrink-0 text-violet"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <footer className="flex items-center gap-4 border-t border-line bg-surface-2 px-5 py-2.5 text-[11.5px] text-muted">
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-line bg-surface px-1 font-mono">
              ↑↓
            </kbd>
            {copy.search.hintNavigate}
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-line bg-surface px-1 font-mono">
              ↵
            </kbd>
            {copy.search.hintOpen}
          </span>
          <span className="ml-auto tabular-nums">{docs.length}</span>
        </footer>
      </motion.div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-label={copy.nav.search}
        className="flex min-w-0 shrink items-center gap-2 rounded-lg border border-line bg-surface-2 py-1.5 pl-2.5 pr-2 text-[13px] text-muted transition-colors hover:border-line-strong hover:text-fg sm:w-52 lg:w-64"
      >
        <Search size={15} className="shrink-0" />
        <span className="hidden truncate sm:inline">
          {copy.nav.searchPlaceholder}
        </span>
        <kbd className="ml-auto hidden shrink-0 rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10.5px] sm:inline">
          ⌘K
        </kbd>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
