"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Children,
  isValidElement,
  useId,
  useState,
  type ReactElement,
} from "react";

type TabProps = { label: string; children: React.ReactNode };

/**
 * Alternatives side by side instead of stacked.
 *
 * Two approaches to the same problem stacked vertically read as "here is a lot
 * to get through". The same two behind tabs read as "pick one" — same content,
 * a third of the scroll.
 */
export function Tabs({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const groupId = useId();
  const panels = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement<TabProps>[];
  const [active, setActive] = useState(0);

  if (panels.length === 0) return null;

  return (
    <div className="my-7 overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
      <div
        role="tablist"
        className="flex gap-1 border-b border-line bg-surface-2 px-1.5 pt-1.5"
      >
        {panels.map((panel, index) => {
          const selected = index === active;
          return (
            <button
              key={panel.props.label}
              role="tab"
              id={`${groupId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${groupId}-panel-${index}`}
              onClick={() => setActive(index)}
              className={[
                "relative rounded-t-lg px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                selected ? "text-violet" : "text-muted hover:text-fg",
              ].join(" ")}
            >
              {panel.props.label}
              {selected && (
                <motion.span
                  layoutId={`${groupId}-underline`}
                  className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-violet"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
                  }
                />
              )}
            </button>
          );
        })}
      </div>

      {panels.map((panel, index) => (
        <div
          key={panel.props.label}
          role="tabpanel"
          id={`${groupId}-panel-${index}`}
          aria-labelledby={`${groupId}-tab-${index}`}
          hidden={index !== active}
          className="px-4 py-3 [&>figure:first-child]:mt-0 [&>figure:last-child]:mb-0 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0"
        >
          {panel.props.children}
        </div>
      ))}
    </div>
  );
}

/** One pane of a `<Tabs>` group. Only ever used as a direct child of it. */
export function Tab({ children }: TabProps) {
  return <>{children}</>;
}
