"use client";

import { useEffect } from "react";

import { LANG_META, type Lang } from "@/lib/i18n";

/**
 * Keeps `<html lang>` in step with the route.
 *
 * The inline script applies it before first paint (so the Devanagari line-height
 * rule is correct immediately); the effect keeps it correct across client-side
 * navigation, where no document is re-created.
 */
export function HtmlLangSync({ lang }: { lang: Lang }) {
  const htmlLang = LANG_META[lang].htmlLang;

  useEffect(() => {
    document.documentElement.lang = htmlLang;
  }, [htmlLang]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(htmlLang)}`,
      }}
    />
  );
}
