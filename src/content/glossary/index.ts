import { ANDROID_GLOSSARY } from "./android";
import { ARCHITECTURE_GLOSSARY } from "./architecture";
import { FIREBASE_GLOSSARY } from "./firebase";
import { HILT_GLOSSARY } from "./hilt";
import { NETWORK_GLOSSARY } from "./network";
import { PLATFORM_GLOSSARY } from "./platform";
import { RELEASE_GLOSSARY } from "./release";
import { SECURITY_GLOSSARY } from "./security";
import { SPECIALIZATION_GLOSSARY } from "./specialization";
import { PERSISTENCE_GLOSSARY } from "./persistence";
import { TESTING_GLOSSARY } from "./testing";
import { COMPOSE_GLOSSARY } from "./compose";
import { COROUTINES_GLOSSARY } from "./coroutines";
import { GRADLE_GLOSSARY } from "./gradle";
import { KOTLIN_GLOSSARY } from "./kotlin";
import { LAYOUT_GLOSSARY } from "./layout";
import { MANIFEST_GLOSSARY } from "./manifest";
import type { Glossary, GlossaryEntry } from "./types";

export * from "./types";

/**
 * Every token the code blocks can explain on hover.
 *
 * Grows phase by phase — a term becomes hoverable the moment it lands here,
 * across every code block in the course, with no per-lesson wiring.
 *
 * The manifest entries are keyed `xml:*` and looked up only inside XML blocks,
 * because their tokens are not unique: `data` is a Kotlin keyword too, and
 * `name` or `label` are far too common to claim everywhere.
 */
export const GLOSSARY: Glossary = {
  ...KOTLIN_GLOSSARY,
  ...COROUTINES_GLOSSARY,
  ...ANDROID_GLOSSARY,
  ...COMPOSE_GLOSSARY,
  ...ARCHITECTURE_GLOSSARY,
  ...NETWORK_GLOSSARY,
  ...PERSISTENCE_GLOSSARY,
  ...HILT_GLOSSARY,
  ...PLATFORM_GLOSSARY,
  ...TESTING_GLOSSARY,
  ...SECURITY_GLOSSARY,
  ...FIREBASE_GLOSSARY,
  ...RELEASE_GLOSSARY,
  ...SPECIALIZATION_GLOSSARY,
  ...GRADLE_GLOSSARY,
  ...MANIFEST_GLOSSARY,
  ...LAYOUT_GLOSSARY,
};

export const GLOSSARY_TERMS = Object.keys(GLOSSARY);

/** Which set of terms a code block may resolve against. */
export type GlossaryScope = "code" | "xml";

const CODE_TERMS = new Set(
  Object.keys({
    ...KOTLIN_GLOSSARY,
    ...COROUTINES_GLOSSARY,
    ...ANDROID_GLOSSARY,
    ...COMPOSE_GLOSSARY,
    ...ARCHITECTURE_GLOSSARY,
    ...NETWORK_GLOSSARY,
    ...PERSISTENCE_GLOSSARY,
    ...HILT_GLOSSARY,
    ...PLATFORM_GLOSSARY,
    ...TESTING_GLOSSARY,
    ...SECURITY_GLOSSARY,
    ...FIREBASE_GLOSSARY,
    ...RELEASE_GLOSSARY,
    ...SPECIALIZATION_GLOSSARY,
    ...GRADLE_GLOSSARY,
  }),
);
const XML_TERMS = new Set(Object.keys({ ...MANIFEST_GLOSSARY, ...LAYOUT_GLOSSARY }));

/**
 * Fast membership test used by the Shiki transformer on every token.
 *
 * In an XML block the raw token is tried as `xml:<token>`; the key it resolves
 * to is what gets written into `data-kw`, so the client lookup stays a plain
 * map read with no scope of its own.
 */
export function resolveTerm(token: string, scope: GlossaryScope): string | null {
  if (scope === "xml") {
    const key = `xml:${token}`;
    return XML_TERMS.has(key) ? key : null;
  }
  return CODE_TERMS.has(token) ? token : null;
}

export function getEntry(token: string): GlossaryEntry | undefined {
  return GLOSSARY[token];
}

export function allEntries(): GlossaryEntry[] {
  return Object.values(GLOSSARY).sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
}
