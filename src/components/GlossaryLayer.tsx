"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, PackageOpen, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { FlatEntry, FlatGlossary } from "@/lib/glossary";
import { t, type Lang } from "@/lib/i18n";
import { useMounted } from "@/lib/use-mounted";

/**
 * A single delegated listener powers keyword tooltips for every code block on
 * the page. Nothing is attached per token, so a lesson with 400 highlighted
 * identifiers still costs one listener.
 *
 * Desktop: hover or keyboard focus opens a floating card.
 * Touch:   tap opens a bottom sheet, because a hover card is unusable there.
 */

const OPEN_DELAY = 110;
const CLOSE_DELAY = 180;
const CARD_WIDTH = 380;
const GUTTER = 12;

type Placement = { top: number; left: number; side: "above" | "below" };

export function GlossaryLayer({ glossary, lang }: { glossary: FlatGlossary; lang: Lang }) {
  const copy = t(lang).glossaryCard;

  const [entry, setEntry] = useState<FlatEntry | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  const [sheet, setSheet] = useState(false);
  const mounted = useMounted();

  const anchorRef = useRef<HTMLElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const overCard = useRef(false);

  const clearTimers = useCallback(() => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }, []);

  const close = useCallback(() => {
    clearTimers();
    anchorRef.current?.removeAttribute("data-open");
    anchorRef.current = null;
    setEntry(null);
    setPlacement(null);
    setSheet(false);
  }, [clearTimers]);

  const position = useCallback((anchor: HTMLElement): Placement => {
    const rect = anchor.getBoundingClientRect();
    const width = Math.min(CARD_WIDTH, window.innerWidth - GUTTER * 2);
    const spaceAbove = rect.top;
    const side: Placement["side"] = spaceAbove > 300 ? "above" : "below";

    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(GUTTER, Math.min(left, window.innerWidth - width - GUTTER));

    return {
      left,
      top: side === "above" ? rect.top - 10 : rect.bottom + 10,
      side,
    };
  }, []);

  const open = useCallback(
    (anchor: HTMLElement, asSheet: boolean) => {
      const term = anchor.dataset.kw;
      if (!term) return;
      const found = glossary[term];
      if (!found) return;

      anchorRef.current?.removeAttribute("data-open");
      anchorRef.current = anchor;
      anchor.setAttribute("data-open", "true");

      setEntry(found);
      setSheet(asSheet);
      setPlacement(asSheet ? null : position(anchor));
    },
    [glossary, position],
  );

  /** Jump to another term from the "related" chips without leaving the card. */
  const showRelated = useCallback(
    (term: string) => {
      const found = glossary[term];
      if (found) setEntry(found);
    },
    [glossary],
  );

  useEffect(() => {
    if (!mounted) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const anchorFrom = (target: EventTarget | null): HTMLElement | null => {
      if (!(target instanceof globalThis.Element)) return null;
      return target.closest<HTMLElement>("[data-kw]");
    };

    const onPointerOver = (event: PointerEvent) => {
      if (!canHover || event.pointerType === "touch") return;
      const anchor = anchorFrom(event.target);
      if (!anchor) return;
      clearTimers();
      openTimer.current = window.setTimeout(() => open(anchor, false), OPEN_DELAY);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!canHover) return;
      if (!anchorFrom(event.target)) return;
      clearTimers();
      closeTimer.current = window.setTimeout(() => {
        if (!overCard.current) close();
      }, CLOSE_DELAY);
    };

    const onClick = (event: MouseEvent) => {
      const anchor = anchorFrom(event.target);
      if (!anchor) return;
      event.preventDefault();
      open(anchor, !canHover);
    };

    const onFocusIn = (event: FocusEvent) => {
      const anchor = anchorFrom(event.target);
      if (anchor) open(anchor, false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const onScroll = () => {
      if (anchorRef.current && !sheet) setPlacement(position(anchorRef.current));
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("click", onClick);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", close);

    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("click", onClick);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", close);
      clearTimers();
    };
  }, [mounted, open, close, clearTimers, position, sheet]);

  if (!mounted) return null;

  const card = entry && (
    <GlossaryCard entry={entry} copy={copy} onRelated={showRelated} onClose={close} sheet={sheet} />
  );

  return createPortal(
    <AnimatePresence>
      {entry && sheet && (
        <motion.div
          key="sheet"
          className="fixed inset-0 z-[80] flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label={copy.dismiss}
            onClick={close}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          />
          <motion.div
            className="relative w-full"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {card}
          </motion.div>
        </motion.div>
      )}

      {entry && !sheet && placement && (
        <motion.div
          key="card"
          role="dialog"
          className="fixed z-[80]"
          style={{
            left: placement.left,
            top: placement.side === "above" ? undefined : placement.top,
            bottom: placement.side === "above" ? window.innerHeight - placement.top : undefined,
            width: Math.min(CARD_WIDTH, window.innerWidth - GUTTER * 2),
          }}
          initial={{ opacity: 0, y: placement.side === "above" ? 6 : -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.12 } }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          onPointerEnter={() => {
            overCard.current = true;
            clearTimers();
          }}
          onPointerLeave={() => {
            overCard.current = false;
            closeTimer.current = window.setTimeout(close, CLOSE_DELAY);
          }}
        >
          {card}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* ------------------------------------------------------------------ */

const ACCENT_CLASS: Record<string, string> = {
  violet: "text-violet bg-violet-soft",
  emerald: "text-emerald bg-emerald-soft",
  amber: "text-amber bg-amber-soft",
  sky: "text-sky bg-sky-soft",
  rose: "text-rose bg-rose-soft",
};

function GlossaryCard({
  entry,
  copy,
  onRelated,
  onClose,
  sheet,
}: {
  entry: FlatEntry;
  copy: ReturnType<typeof t>["glossaryCard"];
  onRelated: (term: string) => void;
  onClose: () => void;
  sheet: boolean;
}) {
  return (
    <div
      className={[
        "overflow-hidden border border-line-strong bg-surface shadow-float",
        sheet ? "rounded-t-2xl max-h-[80vh] overflow-y-auto" : "rounded-xl",
      ].join(" ")}
    >
      <header className="flex items-start gap-3 border-b border-line bg-surface-2 px-4 py-3">
        <code className="font-mono text-[15px] font-semibold text-fg">{entry.term}</code>
        <span className="mt-0.5 rounded-md border border-line bg-surface-inset px-1.5 py-0.5 text-[11px] font-medium text-body">
          {entry.kind}
        </span>
        <span
          className={`mt-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-medium ${
            ACCENT_CLASS[entry.accent] ?? ACCENT_CLASS.violet
          }`}
        >
          {entry.sourceLabel}
        </span>
        {sheet && (
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.dismiss}
            className="ml-auto rounded-md p-1 text-muted hover:bg-surface hover:text-fg"
          >
            <X size={16} />
          </button>
        )}
      </header>

      <div className="space-y-3 px-4 py-3.5 text-[13.5px] leading-relaxed">
        <Field label={copy.where}>
          {entry.importLine ? (
            <code className="mt-1.5 block overflow-x-auto rounded-md border border-violet/30 bg-violet-soft px-2.5 py-2 font-mono text-[12.5px] font-medium text-fg">
              {entry.importLine}
            </code>
          ) : (
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-inset px-2.5 py-1.5 text-[12.5px] text-body">
              <PackageOpen size={13} className="shrink-0 text-muted" />
              {copy.noImport}
            </span>
          )}
        </Field>

        <Field label={copy.does}>
          <RichText value={entry.does} />
        </Field>

        <Field label={copy.affects}>
          <RichText value={entry.affects} />
        </Field>
      </div>

      {(entry.related?.length || entry.docs) && (
        <footer className="flex flex-wrap items-center gap-1.5 border-t border-line bg-surface-2 px-4 py-2.5">
          {entry.related?.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => onRelated(term)}
              className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[11.5px] text-body transition-colors hover:border-violet hover:bg-violet-soft hover:text-violet"
            >
              {term}
            </button>
          ))}
          {entry.docs && (
            <a
              href={entry.docs}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-auto inline-flex items-center gap-1 text-[11.5px] font-medium text-violet hover:underline"
            >
              {copy.docs}
              <ArrowUpRight size={12} />
            </a>
          )}
        </footer>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">{label}</p>
      <div className="mt-1 text-body">{children}</div>
    </div>
  );
}

/** Renders `backtick` spans in glossary prose as inline code. */
function RichText({ value }: { value: string }) {
  const parts = value.split(/(`[^`]+`)/g);
  return (
    <p>
      {parts.map((part, index) =>
        part.startsWith("`") && part.endsWith("`") && part.length > 2 ? (
          <code
            key={index}
            className="rounded border border-violet/25 bg-violet-soft px-1 py-px font-mono text-[12.5px] font-medium text-violet"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
}
