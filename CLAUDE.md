# KotlinPath — Project Rules

An interactive, trilingual (English / Hindi / Hinglish) learning platform that teaches
Kotlin and Android development from absolute beginner to advanced level.

These rules are binding for every change in this repository. Read them before writing code.

---

## 1. Stack (locked — do not swap without an explicit instruction)

| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 16 (App Router, RSC) | Deploys to Vercel with zero config |
| Language | TypeScript (strict) | No `any` unless justified in a comment |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) | No CSS-in-JS, no styled-components |
| Content | MDX files on disk, compiled with `next-mdx-remote/rsc` | One file per lesson per language |
| Highlighting | Shiki (build-time, RSC) | Never ship a client-side highlighter |
| Animation | `motion` (Framer Motion v12 API) | Client components only |
| Icons | `lucide-react` | SVG only |
| Search | Fuse.js over a generated index | Fully client-side, no backend |
| Theme | `next-themes`, class strategy | Light / dark / system |

Hard constraints:

- **Static-first.** Every lesson route must be statically renderable. No database, no auth,
  no server-only runtime dependency. The whole site must build with `next build` and deploy
  to Vercel's free tier.
- **No external network calls at runtime.** Images and fonts are bundled or self-hosted.
- **Bundle discipline.** Shiki, MDX compilation, and the glossary run on the server. The
  client bundle carries only interactivity (theme, search, tooltips, animations).

---

## 2. Language rules

Three content languages, each a first-class citizen:

| Code | Name | Script | Audience |
| --- | --- | --- | --- |
| `en` | English | Latin | Default; global / interview prep |
| `hi` | हिन्दी | Devanagari | Full Hindi explanation, English technical terms kept as-is |
| `hi-en` | Hinglish | Latin | Hindi grammar in Roman script — the most natural for Indian learners |

Rules:

1. The learner picks a language and it **persists** (localStorage + URL segment `/[lang]/...`).
2. Language lives in the URL: `/en/learn/...`, `/hi/learn/...`, `/hi-en/learn/...`.
   Switching language keeps the learner on the same lesson.
3. **Technical terms are never translated.** `coroutine`, `ViewModel`, `recomposition`,
   `nullable` stay in English inside Hindi and Hinglish prose. Only the explanation changes.
4. **Code is identical across all three languages.** Only code *comments* may be localized.
5. If a translation is missing, fall back to `en` and render a visible "not yet translated"
   notice — never render an empty page.

### Word choice — the rule these three languages are actually judged on

Getting the vocabulary register wrong is what makes a translated page unreadable, and it is a
different mistake in each language:

- **Hinglish is Hindi grammar carrying English words.** If a Hindi speaker discussing code
  would say the English word out loud, write the English word. `queue`, `result`, `order`,
  `behaviour`, `warning`, `detail`, `structure`, `check`, `shared`, `level`, `limit`,
  `possible` — not `qatar`, `natija`, `kram`, `vyavhaar`, `chetavni`, `vivran`, `dhaancha`,
  `jaanch`, `saanjha`, `star`, `seema`, `sambhav`. Hindi vocabulary transliterated into Latin
  reads like a translation, not like speech, which is the single fastest way to make a lesson
  hard to follow.
- **Hindi stays Hindi.** The fix there is *everyday* Hindi in place of textbook Hindi — never
  English. `क्रम`, `नतीजा`, `साझा`, `स्तर`, `सीमा` are ordinary words and must be left alone;
  only genuinely literary ones (`ऋणात्मक`, `विनम्रता`) get replaced.
- **Words that stay English in all three:** every technical term, per rule 3 above.

Hinglish keeps words people genuinely say in Hindi — `dhyan do`, `koshish karo`, `mushkil`,
`madad`, `zaroorat`, `faisla`, `hissa`, `nirbhar karta hai`. The test is not "is this word
Hindi" but "would someone say this out loud".

**Nukta.** Drop the optional nukta on क ख ग ज फ — write `कीमत`, `फर्क`, `खुद`, `गलती`,
`ज्यादा`, `सिर्फ`, not `क़ीमत`, `फ़र्क़`, `ख़ुद`, `ग़लती`, `ज़्यादा`, `सिर्फ़`. This is how
Hindi is written on the web and it reads measurably faster. **Never** drop it on ड़ and ढ़,
where it marks a different sound (`बड़ा`, `पढ़ना`).

**Latin script means Latin script.** A Hinglish file must contain no Devanagari and no
Cyrillic. Check before committing:

```bash
grep -rlP '[\x{0900}-\x{097F}]|[\x{0400}-\x{04FF}]' src/content/lessons/hi-en/
```

---

## 3. UI text rules

- Application chrome (nav, buttons, labels, tooltips, errors) is **localized** through the
  dictionary in `src/lib/i18n.ts`. Never hardcode a user-visible string in a component.
- **No emoji anywhere in the product UI or in lesson content.** Use `lucide-react` icons or
  inline SVG instead. This applies to headings, callouts, buttons, and MDX content.
- Sentence case for buttons and labels. No ALL CAPS except short tags/badges.

---

## 4. Design system

### Colour

- All colours are defined **once** as CSS custom properties in `src/app/globals.css` and
  exposed to Tailwind via `@theme inline`. Never write a raw hex or `rgb()` in a component.
- Colour space is **OKLCH** so light and dark stay perceptually matched.
- The palette is deliberately **low-fatigue**: no pure `#fff` background, no pure `#000`
  background. Light mode is a warm off-white; dark mode is a deep desaturated indigo-slate.
- There are **four** text weights, and each has one job. Using the wrong one is the fastest
  way to make the page look washed out:

  | Token | Utility | Use for |
  | --- | --- | --- |
  | `--text` | `text-fg` | Headings, table headers, emphasised words |
  | `--text-body` | `text-body` | **All long-form prose** — paragraphs, list items, table cells |
  | `--text-muted` | `text-muted` | Labels, captions, metadata, secondary nav |
  | `--text-faint` | `text-muted` sparingly | Purely decorative only, e.g. code line numbers |

- Anything that answers a question the reader asked — an import line, a value chip, a
  keyword badge — gets `bg-surface-inset` or an accent-soft background **and a border**.
  A bare `bg-surface-code` chip disappears against the card behind it.
- Accent system: **violet** (primary, Kotlin), **emerald** (secondary, Android),
  **amber** (highlight / warnings), **rose** (errors / pitfalls).
- Contrast: body text must meet **WCAG AA (4.5:1)**; large text and UI borders meet 3:1.
  Verify both themes before shipping a colour change.

### Typography

- Headings and brand: **Space Grotesk** (`font-display`, applied automatically to
  `h1`–`h4`). Its technical shapes give the course a voice.
- Body and UI: **Plus Jakarta Sans** (`font-sans`) — warmer and rounder than Inter, which
  makes long explanations easier to sit with.
- Devanagari: **Hind**, in the same stack. Drawn for on-screen reading and visually larger
  than Noto Sans Devanagari at the same pixel size. Hindi headings deliberately fall back to
  the body face, because Space Grotesk has no Devanagari coverage.
- Devanagari still reads smaller than Latin at the same size, so `globals.css` steps Hindi
  prose up by `1.08em` on `p`, `li`, `td`, `th`, `dd`, `blockquote` and `figcaption`.
  Never hardcode a Hindi-only size in a component — extend that rule instead.
- Code: **JetBrains Mono**.
- Prose measure is capped at `72ch`. Line height 1.75 for body, 1.3 for headings.
- Devanagari needs more vertical room — Hindi pages get a slightly larger line height.

### Motion

- Motion **explains**, it does not decorate. Every animation must communicate structure,
  sequence, or state change.
- Durations: micro-interaction 150ms, element entrance 300ms, diagram sequence 400–800ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `ease-out` for exits.
- Diagrams animate **on scroll into view, once**. They must never loop infinitely in the
  learner's peripheral vision.
- **Always honour `prefers-reduced-motion`.** Reduced motion renders the diagram's final
  state instantly, never a blank box.

### Layout

- Mobile-first. Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280`.
- Below `lg`: sidebar becomes a slide-over drawer, the on-this-page rail is hidden.
- Touch targets are at least 44×44px.
- Nothing may overflow horizontally. Wide tables, code blocks, and diagrams scroll inside
  their own container.

---

## 5. Content rules (the teaching contract)

Every lesson must follow this shape:

1. **Why this matters** — the real problem this concept solves, before any syntax.
2. **The concept** — plain-language explanation with a visual (SVG diagram or table).
3. **Code** — minimal runnable example, then a realistic one.
4. **Under the hood** — what actually happens (memory, lifecycle, compiler, threads).
5. **Common mistakes** — at least two real pitfalls with the wrong code and the fix.
6. **Practice** — 2–4 exercises, hardest last.
7. **Recap** — a compact table or checklist.

### Pacing — the rule that keeps a lesson from becoming a wall of text

A lesson is read on a phone, in the evening, by someone who is tired. Every rule below
exists to make the page look *finishable*.

- **Open with `<KeyIdea>`.** One sentence, before anything else. Someone who reads only that
  should still have learned something true.
- **Three lines per paragraph, maximum.** If a paragraph runs longer, it is two paragraphs,
  or it is a table.
- **Never more than about 120 words of unbroken prose.** Something visual — a diagram, a
  table, a code block, a callout, a quiz — must break it up.
- **At least one `<Quiz>` per lesson**, placed right after the hardest idea, not at the end.
  Reading is passive; one question is not.
- **Push depth into `<Detail>`.** The "but why does that work" paragraph belongs in a
  collapsible, so the page stays short for everyone who does not want it.
- **Use `<Tabs>` for alternatives.** Two approaches stacked read as "a lot to get through";
  the same two behind tabs read as "pick one".
- **Prefer a table to a list of paragraphs**, and a diagram to a table, whenever the content
  allows it.

Additional rules:

- **Show, then name.** Introduce a problem, let the reader feel it, *then* give the term.
- **No unexplained forward references.** If a lesson uses a concept from a later phase,
  it must inline a one-line explanation and link forward.
- Every code block declares its language and, where relevant, a `title` (the filename).
- Prefer **one diagram over three paragraphs**. Lifecycles, data flow, threading, and
  recomposition must always be visual.
- Reading time is estimated and shown on every lesson.

---

## 6. Code block rules

The `<CodeBlock>` component is the core teaching surface. Requirements:

- Syntax highlighting is **build-time Shiki**, dual-theme (light + dark) via CSS variables.
- **Keyword hover explanations are mandatory.** Any token present in the glossary
  (`src/content/glossary/`) renders an underline affordance and, on hover/focus, a card
  answering four questions:
  1. **What** is it (keyword / class / function / annotation)?
  2. **Where** does it come from — Kotlin stdlib, Android framework, Jetpack, or a library
     — and the exact import statement if one is needed?
  3. **What** does it do, in one sentence?
  4. **What does it affect** — the downstream consequence on other code?
- Tooltips must be **keyboard accessible** (focusable, `Escape` to close) and must not
  trap or obscure the code on mobile — on touch, tap opens a bottom sheet instead.
- Supported code block features: `title`, line numbers, line highlighting, added/removed
  diff lines, `// [!code focus]`, copy button, and an optional "Run in Kotlin Playground" link.
- **Every glossary entry must be filled in for all three languages** before the token is
  allowed to render a tooltip. A partially translated entry falls back to `en`.

---

## 7. Progress rules

- Progress lives **only in the learner's browser**, in `localStorage` under
  `kotlinpath-progress`. No account, no server, nothing leaves the device. Never add a
  backend for it.
- All reads go through `src/lib/progress.ts`, which uses `useSyncExternalStore` so the
  sidebar, the curriculum table and the lesson toggle stay in step without prop drilling
  and without a state-setting effect.
- Progress is keyed by **lesson path**, not by language. Finishing a lesson in Hinglish
  marks it complete in all three.
- Storage can always fail (private browsing, quota). Every access is wrapped — a broken
  store degrades to "no progress recorded", never to a broken page.
- The UI must say where the data lives (`progress.savedLocally`) and always offer a reset.

---

## 8. Search rules

- Search must find a lesson by title, heading, body text, API name, and glossary term.
- Typo tolerant, works across all three languages, and searches the **currently selected
  language** first while still surfacing cross-language hits.
- Opens with `Cmd/Ctrl + K`, navigable entirely by keyboard, and shows matched context.

---

## 9. Accessibility

- Semantic HTML first; ARIA only where semantics fall short.
- Every interactive element is reachable and operable by keyboard, with a visible focus ring.
- Every SVG diagram carries a `<title>` and a text alternative describing what it shows.
- Never encode meaning in colour alone.

---

## 10. File and naming conventions

```
src/
  app/[lang]/...           routes; `lang` is one of en | hi | hi-en
  components/              PascalCase files, one component per file
  components/diagrams/     animated SVG teaching diagrams
  content/curriculum.ts    the single source of truth for phases + lessons
  content/glossary/        keyword tooltip data, grouped by area
  content/lessons/<lang>/  MDX, path mirrors the lesson slug exactly
  lib/                     pure helpers, no JSX
```

- Lesson slugs are kebab-case and **stable** — they are public URLs. Never rename a shipped
  slug; add a redirect if it truly must change.
- Never use `niletech` or `lalit` in any identifier, package name, or string.
- Client components carry `"use client"` and stay as small as possible; push state down.

---

## 11. Definition of done

A change is not complete until:

1. `npm run build` passes with no type errors and no new lint warnings.
2. It renders correctly in **both light and dark** mode.
3. It is verified at **375px, 768px, and 1440px** widths.
4. Keyboard navigation works and focus is visible.
5. Content exists in all three languages, or the fallback notice appears correctly.
6. Animations respect `prefers-reduced-motion`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
