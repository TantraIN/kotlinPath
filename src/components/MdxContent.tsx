import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { Callout, type CalloutKind } from "@/components/Callout";
import { Detail } from "@/components/Detail";
import { KeyIdea } from "@/components/KeyIdea";
import { Quiz } from "@/components/Quiz";
import { Tab, Tabs } from "@/components/Tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { ClassDiagram } from "@/components/diagrams/ClassDiagram";
import { Compare } from "@/components/diagrams/Compare";
import { MemoryDiagram } from "@/components/diagrams/MemoryDiagram";
import { FileTree } from "@/components/diagrams/FileTree";
import { GitGraph } from "@/components/diagrams/GitGraph";
import { LayerStack } from "@/components/diagrams/LayerStack";
import { PipelineDiagram } from "@/components/diagrams/PipelineDiagram";
import { parseCodeMeta, rehypeCodeMeta } from "@/lib/rehype-code-meta";
import type { Lang } from "@/lib/i18n";

type PreChild = {
  props?: { className?: string; children?: string; meta?: string };
};

/** `bare` drops the icon and label row — see the Callout component. */
type CalloutProps = {
  title?: string;
  bare?: boolean;
  children: React.ReactNode;
};

/**
 * The MDX component map. Lesson authors write plain Markdown plus these
 * components; everything else — highlighting, tooltips, animation, responsive
 * scroll containers — is handled here so content files stay readable.
 */
function components(lang: Lang) {
  return {
    h2: (props: React.ComponentProps<"h2">) => (
      <h2
        {...props}
        className="group mt-12 scroll-mt-24 text-[1.55rem] font-semibold leading-tight tracking-tight text-fg first:mt-0"
      />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
      <h3
        {...props}
        className="mt-8 scroll-mt-24 text-[1.2rem] font-semibold leading-snug tracking-tight text-fg"
      />
    ),
    h4: (props: React.ComponentProps<"h4">) => (
      <h4 {...props} className="mt-6 text-[1.02rem] font-semibold text-fg" />
    ),
    p: (props: React.ComponentProps<"p">) => (
      <p {...props} className="my-4 text-[16px] leading-[1.8] text-body" />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
      <ul
        {...props}
        className="my-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.75] text-body marker:text-muted"
      />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
      <ol
        {...props}
        className="my-4 list-decimal space-y-2 pl-5 text-[16px] leading-[1.75] text-body marker:text-muted"
      />
    ),
    li: (props: React.ComponentProps<"li">) => (
      <li {...props} className="pl-1" />
    ),
    strong: (props: React.ComponentProps<"strong">) => (
      <strong {...props} className="font-semibold text-fg" />
    ),
    hr: () => <hr className="my-10 border-line" />,

    blockquote: (props: React.ComponentProps<"blockquote">) => (
      <blockquote
        {...props}
        className="my-6 border-l-[3px] border-violet/50 bg-violet-soft/40 py-2 pl-4 pr-3 text-[15px] italic leading-relaxed text-body"
      />
    ),

    a: ({ href = "", ...props }: React.ComponentProps<"a">) => {
      const external = /^https?:\/\//.test(href);
      if (external) {
        return (
          <a
            {...props}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-violet underline decoration-violet/35 underline-offset-[3px] transition-colors hover:decoration-violet"
          />
        );
      }
      return (
        <Link
          {...props}
          href={href}
          className="font-medium text-violet underline decoration-violet/35 underline-offset-[3px] transition-colors hover:decoration-violet"
        />
      );
    },

    // Inline code. Fenced blocks are intercepted by `pre` below.
    code: (props: React.ComponentProps<"code">) => (
      <code
        {...props}
        className="rounded-[5px] border border-line bg-surface-inset px-[5px] py-[2px] font-mono text-[0.86em] font-medium text-fg"
      />
    ),

    pre: ({ children }: React.ComponentProps<"pre">) => {
      const child = children as PreChild | undefined;
      const className = child?.props?.className ?? "";
      const language = className.replace(/^language-/, "") || "text";
      const code = String(child?.props?.children ?? "");
      const meta = parseCodeMeta(child?.props?.meta);

      return (
        <CodeBlock
          code={code}
          language={language}
          title={meta.title}
          numbered={meta.numbered}
          runnable={meta.runnable}
          noGlossary={meta.noGlossary}
          uiLang={lang}
        />
      );
    },

    table: (props: React.ComponentProps<"table">) => (
      <div className="my-6 overflow-x-auto rounded-[var(--radius-card)] border border-line">
        <table {...props} className="w-full border-collapse text-[14px]" />
      </div>
    ),
    thead: (props: React.ComponentProps<"thead">) => (
      <thead {...props} className="bg-surface-2" />
    ),
    th: (props: React.ComponentProps<"th">) => (
      <th
        {...props}
        className="border-b border-line px-3.5 py-2.5 text-left text-[12px] font-semibold uppercase tracking-wide text-fg"
      />
    ),
    td: (props: React.ComponentProps<"td">) => (
      <td
        {...props}
        className="border-b border-line px-3.5 py-2.5 align-top leading-relaxed text-body last:border-0"
      />
    ),
    tr: (props: React.ComponentProps<"tr">) => (
      <tr
        {...props}
        className="transition-colors last:[&>td]:border-b-0 hover:bg-surface-2/60"
      />
    ),

    img: ({ alt = "", src, ...props }: React.ComponentProps<"img">) => (
      <figure className="my-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...props}
          src={typeof src === "string" ? src : ""}
          alt={alt}
          loading="lazy"
          className="w-full rounded-[var(--radius-card)] border border-line bg-surface"
        />
        {alt && (
          <figcaption className="mt-2.5 text-center text-[12.5px] text-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    ),

    // Authoring components available inside every lesson.
    Note: (props: CalloutProps) => (
      <Callout kind="note" uiLang={lang} {...props} />
    ),
    Tip: (props: CalloutProps) => (
      <Callout kind="tip" uiLang={lang} {...props} />
    ),
    Warning: (props: CalloutProps) => (
      <Callout kind="warning" uiLang={lang} {...props} />
    ),
    Pitfall: (props: CalloutProps) => (
      <Callout kind="pitfall" uiLang={lang} {...props} />
    ),
    Interview: (props: CalloutProps) => (
      <Callout kind="interview" uiLang={lang} {...props} />
    ),
    Callout: (props: CalloutProps & { kind?: CalloutKind }) => (
      <Callout uiLang={lang} {...props} />
    ),
    Figure,
    Reveal,
    Timeline,
    TimelineItem,
    PipelineDiagram,
    LayerStack,
    FileTree,
    GitGraph,
    Compare,
    ClassDiagram,
    MemoryDiagram,
    KeyIdea,
    Detail,
    Tabs,
    Tab,
    Quiz: (props: {
      question: string;
      options: string[];
      answer: number;
      explanation: string;
    }) => <Quiz uiLang={lang} {...props} />,
  };
}

export function MdxContent({ source, lang }: { source: string; lang: Lang }) {
  return (
    <MDXRemote
      source={source}
      components={components(lang)}
      options={{
        // Lesson MDX is authored in this repo, not submitted by users, so JSX
        // expression props (diagram data, table rows) are allowed. The separate
        // dangerous-call guard stays on.
        blockJS: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeCodeMeta, rehypeSlug],
        },
      }}
    />
  );
}
