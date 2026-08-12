"use client";

import { useEffect, useState } from "react";

import { t, type Lang } from "@/lib/i18n";

export type Heading = { id: string; text: string; level: 2 | 3 };

/**
 * The "on this page" rail. Highlights the section currently in view using an
 * IntersectionObserver rather than scroll maths, so it stays cheap.
 */
export function TableOfContents({ headings, lang }: { headings: Heading[]; lang: Lang }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);
  const copy = t(lang).lesson;

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label={copy.onThisPage} className="text-[13px]">
      <p className="mb-2.5 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
        {copy.onThisPage}
      </p>
      <ul className="space-y-0.5 border-l border-line">
        {headings.map((heading) => {
          const isActive = active === heading.id;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "block border-l-2 py-1 leading-snug transition-colors",
                  heading.level === 3 ? "pl-5 text-[12.5px]" : "pl-3",
                  isActive
                    ? "border-violet font-medium text-violet"
                    : "border-transparent text-muted hover:text-fg",
                ].join(" ")}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
