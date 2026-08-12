import { ANDROID_GLOSSARY } from "./android";
import { COROUTINES_GLOSSARY } from "./coroutines";
import { GRADLE_GLOSSARY } from "./gradle";
import { KOTLIN_GLOSSARY } from "./kotlin";
import type { Glossary, GlossaryEntry } from "./types";

export * from "./types";

/**
 * Every token the code blocks can explain on hover.
 *
 * Grows phase by phase — a term becomes hoverable the moment it lands here,
 * across every code block in the course, with no per-lesson wiring.
 */
export const GLOSSARY: Glossary = {
  ...KOTLIN_GLOSSARY,
  ...COROUTINES_GLOSSARY,
  ...ANDROID_GLOSSARY,
  ...GRADLE_GLOSSARY,
};

export const GLOSSARY_TERMS = Object.keys(GLOSSARY);

/** Fast membership test used by the Shiki transformer on every token. */
const TERM_SET = new Set(GLOSSARY_TERMS);

export function hasTerm(token: string): boolean {
  return TERM_SET.has(token);
}

export function getEntry(token: string): GlossaryEntry | undefined {
  return GLOSSARY[token];
}

export function allEntries(): GlossaryEntry[] {
  return Object.values(GLOSSARY).sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
}
