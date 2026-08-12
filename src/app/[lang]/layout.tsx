import { notFound } from "next/navigation";

import { AppShell } from "@/components/AppShell";
import { GlossaryLayer } from "@/components/GlossaryLayer";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { projectGlossary } from "@/lib/glossary";
import { isLang, LANGS } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/search";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  // Both are computed at build time and shipped as plain data — no runtime cost.
  const [searchDocs, glossary] = await Promise.all([
    buildSearchIndex(lang),
    Promise.resolve(projectGlossary(lang)),
  ]);

  return (
    <>
      <HtmlLangSync lang={lang} />
      <AppShell lang={lang} searchDocs={searchDocs}>
        {children}
      </AppShell>
      <GlossaryLayer glossary={glossary} lang={lang} />
    </>
  );
}
