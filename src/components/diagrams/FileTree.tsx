"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  FileCode2,
  FileCog,
  FileText,
  FolderClosed,
  FolderOpen,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";

export type TreeEntry = {
  name: string;
  /** Indentation level; 0 is the project root. */
  depth?: number;
  kind?: "folder" | "kotlin" | "gradle" | "xml" | "asset" | "text";
  /** Right-hand annotation explaining what the file is for. */
  note?: string;
  /** Draw attention to this row — the one the lesson is about. */
  highlight?: boolean;
};

const ICON: Record<string, { Icon: LucideIcon; className: string }> = {
  folder: { Icon: FolderClosed, className: "text-sky" },
  kotlin: { Icon: FileCode2, className: "text-violet" },
  gradle: { Icon: FileCog, className: "text-emerald" },
  xml: { Icon: FileText, className: "text-amber" },
  asset: { Icon: ImageIcon, className: "text-rose" },
  text: { Icon: FileText, className: "text-muted" },
};

/**
 * An annotated project tree.
 *
 * Rows fade in top-down so the reader's eye follows the hierarchy rather than
 * landing on a wall of filenames. The icon encodes the file's role — Kotlin,
 * Gradle, XML, asset — which is the thing beginners actually need to learn.
 */
export function FileTree({ entries, caption }: { entries: TreeEntry[]; caption?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className="my-7">
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface-code px-3 py-3">
        <ul className="min-w-max font-mono text-[13px]">
          {entries.map((entry, index) => {
            const kind = entry.kind ?? "text";
            const { Icon, className } = ICON[kind] ?? ICON.text;
            const isFolder = kind === "folder";
            const FolderIcon = isFolder && index === 0 ? FolderOpen : Icon;

            return (
              <motion.li
                key={`${entry.name}-${index}`}
                initial={reduced ? undefined : { opacity: 0, x: -6 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.05 }}
                className={[
                  "flex items-center gap-2 rounded-md py-[3px] pr-2",
                  entry.highlight ? "bg-violet-soft" : "",
                ].join(" ")}
                style={{ paddingLeft: `${0.25 + (entry.depth ?? 0) * 1.1}rem` }}
              >
                <FolderIcon size={14} className={`shrink-0 ${className}`} aria-hidden />
                <span
                  className={
                    entry.highlight ? "font-medium text-violet" : isFolder ? "text-fg" : "text-body"
                  }
                >
                  {entry.name}
                </span>
                {entry.note && (
                  <span className="ml-auto pl-6 font-sans text-[11.5px] text-muted">
                    {entry.note}
                  </span>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
      {caption && (
        <p className="mt-2.5 text-center text-[12.5px] leading-relaxed text-muted">{caption}</p>
      )}
    </div>
  );
}
