# KotlinPath

An interactive, trilingual learning platform for Kotlin and Android development —
absolute beginner to production.

Read [CLAUDE.md](./CLAUDE.md) before making any change. It is the binding rulebook for
stack, design tokens, content structure, and the definition of done.

## Run it

```bash
npm run dev
```

```bash
npm run build
```

The whole site is statically prerendered. `npm run build` must pass with zero type errors
before anything ships.

## What is where

| Path | What lives there |
| --- | --- |
| `src/content/curriculum.ts` | The single source of truth: 16 phases, every lesson, timings |
| `src/content/lessons/<lang>/<phase>/<lesson>.mdx` | Lesson content, one file per language |
| `src/content/glossary/` | Hover-tooltip data for code keywords, in all three languages |
| `src/lib/i18n.ts` | Languages and the full UI dictionary — no hardcoded UI strings |
| `src/lib/highlight.ts` | Build-time Shiki, plus the transformer that marks glossary tokens |
| `src/components/` | Shell, code block, tooltips, search, timeline, diagrams |
| `src/lib/progress.ts` | Lesson completion, stored only in the learner's browser |
| `src/app/globals.css` | Every design token; nothing else defines a colour |

## Authoring a lesson

Create `src/content/lessons/en/<phase-slug>/<lesson-slug>.mdx` with frontmatter:

```markdown
---
title: How a program actually runs
description: One sentence that frames why this lesson exists.
updated: 2026-08-12
---
```

The slug must already exist in `src/content/curriculum.ts`. A lesson with no file renders a
"not written yet" placeholder; a language with no file falls back to English with a visible
notice, so the site is never broken mid-translation.

### Components available in MDX

`Note` · `Tip` · `Warning` · `Pitfall` · `Interview` · `Figure` · `Timeline` /
`TimelineItem` · `Reveal`

Structure: `KeyIdea` (the opening one-liner, required) · `Detail` (collapsible depth) ·
`Tabs` / `Tab` (alternatives side by side) · `Quiz` (inline check-yourself, required)

Diagrams: `ClassDiagram` (a base type and its subtypes) · `MemoryDiagram` (stack slots and
heap objects, linked by colour) · `PipelineDiagram` (left-to-right flow) · `LayerStack` (platform layers, each row
can carry a `detail` string that appears on hover) · `FileTree` (annotated project tree) ·
`GitGraph` (two-lane commit graph) · `Compare` (two panels, points prefixed `+` `-` `~`)

Callouts take an optional `bare` prop. It drops the icon and the label row, leaving a thick
coloured rule and a tint — use it for a short aside that reads as one sentence, where a
"Tip" heading above the text would just repeat itself:

```markdown
<Tip bare>
Hover any underlined token above to see where it comes from.
</Tip>
```

### Code fences


```kotlin
title="MainActivity.kt" numbered runnable
```


| Flag | Effect |
| --- | --- |
| `title="…"` | Filename shown in the block header |
| `numbered` | Line numbers in the gutter |
| `runnable` | Adds a "Run in Kotlin Playground" link |
| `no-glossary` | Disables keyword tooltips (use for console output) |

Inside the code, `// [!code highlight]`, `// [!code focus]`, `// [!code ++]` and
`// [!code --]` mark lines.

Any token present in the glossary becomes hoverable automatically — no per-lesson wiring.
To make a new keyword explainable everywhere at once, add it to
`src/content/glossary/`.

## Deploy

Push to a Git remote and import the repository on Vercel. No environment variables, no
database, no configuration — the framework preset handles it.
