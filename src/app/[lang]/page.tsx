import { ArrowRight, Languages, MousePointerClick, Route, Shapes } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/CodeBlock";
import { Reveal } from "@/components/Reveal";
import { PipelineDiagram } from "@/components/diagrams/PipelineDiagram";
import { ALL_LESSONS, CURRICULUM, STATS } from "@/content/curriculum";
import { isLang, pick, t, type Lang } from "@/lib/i18n";

const DEMO_CODE = `class CounterViewModel : ViewModel() {

    private val _state = MutableStateFlow(0)
    val state: StateFlow<Int> = _state.asStateFlow()

    fun increment() {
        viewModelScope.launch {
            delay(150)
            _state.value += 1
        }
    }

    override fun onCleared() {
        super.onCleared()
    }
}`;

const ACCENT_TEXT: Record<string, string> = {
  violet: "text-violet",
  emerald: "text-emerald",
  amber: "text-amber",
  sky: "text-sky",
  rose: "text-rose",
};

/** Written out in full so Tailwind can see every class it must generate. */
const ACCENT_GROUP_HOVER: Record<string, string> = {
  violet: "group-hover:text-violet",
  emerald: "group-hover:text-emerald",
  amber: "group-hover:text-amber",
  sky: "group-hover:text-sky",
  rose: "group-hover:text-rose",
};

const ACCENT_BG: Record<string, string> = {
  violet: "bg-violet",
  emerald: "bg-emerald",
  amber: "bg-amber",
  sky: "bg-sky",
  rose: "bg-rose",
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang);
  const first = ALL_LESSONS[0];

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.55]" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(closest-side, var(--violet), transparent)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-20 text-center sm:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-muted shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald" aria-hidden />
              {copy.home.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-fg sm:text-[3.4rem]">
              <span className="text-gradient">{copy.home.title}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="prose-measure mx-auto mt-5 text-pretty text-[17px] leading-[1.75] text-body">
              {copy.home.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/${lang}/learn/${first.path}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-violet px-5 py-3 text-[14.5px] font-semibold text-white shadow-[var(--glow)] transition-transform hover:-translate-y-0.5"
              >
                {copy.home.ctaStart}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href={`/${lang}/curriculum`}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-[14.5px] font-semibold text-fg transition-colors hover:border-line-strong"
              >
                {copy.home.ctaBrowse}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              <Stat value={STATS.phases} label={copy.home.statsPhases} />
              <Stat value={STATS.lessons} label={copy.home.statsLessons} />
              <Stat value={`${STATS.hours}+`} label={copy.home.statsHours} />
              <Stat value={STATS.projects} label={copy.home.statsProjects} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- How it teaches */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          <Reveal className="min-w-0 lg:col-span-3">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5">
              <Feature
                Icon={MousePointerClick}
                accent="violet"
                title={
                  lang === "hi"
                    ? "हर keyword पर hover कीजिए"
                    : lang === "hi-en"
                      ? "Har keyword par hover karo"
                      : "Hover any keyword"
                }
                body={
                  lang === "hi"
                    ? "कोड में रेखांकित हर token बताता है कि वह क्या है, कहाँ से import होता है, करता क्या है, और आगे किस चीज़ पर असर डालता है।"
                    : lang === "hi-en"
                      ? "Code mein underline har token batata hai ki wo kya hai, kahan se import hota hai, karta kya hai, aur aage kis cheez par asar dalta hai."
                      : "Every underlined token in the code tells you what it is, where it is imported from, what it does, and what it affects downstream."
                }
              />
              <div className="mt-4">
                <CodeBlock
                  code={DEMO_CODE}
                  language="kotlin"
                  title="CounterViewModel.kt"
                  numbered
                  uiLang={lang}
                />
              </div>
            </article>
          </Reveal>

          <div className="flex min-w-0 flex-col gap-5 lg:col-span-2">
            <Reveal delay={0.08}>
              <article className="rounded-2xl border border-line bg-surface p-5">
                <Feature
                  Icon={Shapes}
                  accent="emerald"
                  title={
                    lang === "hi"
                      ? "पहले चित्र, फिर शब्द"
                      : lang === "hi-en"
                        ? "Pehle diagram, phir shabd"
                        : "Diagrams before paragraphs"
                  }
                  body={
                    lang === "hi"
                      ? "Lifecycle, threading और data flow हमेशा एनिमेटेड चित्र से समझाए जाते हैं।"
                      : lang === "hi-en"
                        ? "Lifecycle, threading aur data flow hamesha animated diagram se samjhaye jate hain."
                        : "Lifecycles, threading and data flow are always explained with an animated diagram first."
                  }
                />
                <div className="mt-4 overflow-x-auto">
                  <PipelineDiagram
                    title="How Kotlin becomes a running Android app"
                    description="Kotlin source is compiled to JVM bytecode, packaged into an Android App Bundle, then converted to DEX and executed by the Android Runtime."
                    stages={[
                      { label: ".kt", sub: "source", accent: "violet" },
                      { label: "Bytecode", sub: "kotlinc", accent: "sky" },
                      { label: "DEX", sub: "R8", accent: "amber" },
                      { label: "ART", sub: "device", accent: "emerald" },
                    ]}
                  />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.14}>
              <article className="rounded-2xl border border-line bg-surface p-5">
                <Feature
                  Icon={Languages}
                  accent="sky"
                  title={
                    lang === "hi"
                      ? "तीन भाषाएँ, एक ही कोड"
                      : lang === "hi-en"
                        ? "Teen bhasha, ek hi code"
                        : "Three languages, one codebase"
                  }
                  body={
                    lang === "hi"
                      ? "English, हिन्दी और Hinglish में पढ़िए। तकनीकी शब्द कभी अनुवादित नहीं होते, सिर्फ़ समझाइश बदलती है।"
                      : lang === "hi-en"
                        ? "English, Hindi aur Hinglish mein padho. Technical terms kabhi translate nahi hote, sirf samjhaish badalti hai."
                        : "Read in English, Hindi or Hinglish. Technical terms are never translated — only the explanation around them changes."
                  }
                />
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Roadmap */}
      <section className="border-t border-line bg-bg-subtle">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-violet">
              <Route size={14} />
              {copy.home.roadmapTitle}
            </div>
            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-fg">
              {copy.home.roadmapSubtitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM.map((phase, index) => (
              <Reveal key={phase.slug} delay={Math.min(index * 0.03, 0.3)}>
                <Link
                  href={`/${lang}/learn/${phase.slug}/${phase.lessons[0].slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-1.5 rounded-full ${ACCENT_BG[phase.accent]}`}
                      aria-hidden
                    />
                    <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                      {copy.common.phase} {phase.number}
                    </span>
                    <span className="ml-auto text-[10.5px] tabular-nums text-muted">
                      {phase.weeks}w
                    </span>
                  </div>

                  <h3
                    className={`mt-2 text-[15px] font-semibold leading-snug text-fg transition-colors ${ACCENT_GROUP_HOVER[phase.accent]}`}
                  >
                    {pick(phase.title, lang)}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 flex-1 text-[13px] leading-relaxed text-body">
                    {pick(phase.blurb, lang)}
                  </p>

                  <p className="mt-3 border-t border-line pt-2.5 text-[11.5px] text-muted">
                    {phase.lessons.length} {copy.common.lesson.toLowerCase()}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="bg-surface px-4 py-5">
      <dt className="text-[11px] font-medium uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-[1.7rem] font-semibold tabular-nums tracking-tight text-fg">
        {value}
      </dd>
    </div>
  );
}

function Feature({
  Icon,
  accent,
  title,
  body,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <span
        className={`inline-flex size-9 items-center justify-center rounded-lg border border-line bg-surface-2 ${ACCENT_TEXT[accent]}`}
      >
        <Icon size={17} />
      </span>
      <h3 className="mt-3 text-[16.5px] font-semibold tracking-tight text-fg">{title}</h3>
      <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">{body}</p>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : "en";
  return { title: t(safe).home.title };
}
