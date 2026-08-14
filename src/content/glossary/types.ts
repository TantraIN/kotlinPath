import type { Localized } from "@/lib/i18n";

/**
 * Where a token comes from. This is the single most useful thing a learner can
 * know when reading unfamiliar code: is this the language, the standard library,
 * the Android framework, or a third-party dependency?
 */
export type GlossarySource =
  | "kotlin-lang" // built into the language, no import
  | "kotlin-stdlib" // kotlin.* — auto-imported
  | "coroutines" // kotlinx.coroutines — a separate dependency
  | "android" // the Android framework itself
  | "jetpack" // AndroidX / Jetpack libraries
  | "compose" // Jetpack Compose
  | "library"; // third-party (Retrofit, Room, Hilt, Coil, ...)

export const SOURCE_META: Record<
  GlossarySource,
  { label: Localized; accent: "violet" | "emerald" | "amber" | "sky" | "rose" }
> = {
  "kotlin-lang": {
    label: {
      en: "Kotlin language",
      hi: "Kotlin भाषा",
      "hi-en": "Kotlin language",
    },
    accent: "violet",
  },
  "kotlin-stdlib": {
    label: {
      en: "Kotlin standard library",
      hi: "Kotlin standard library",
      "hi-en": "Kotlin standard library",
    },
    accent: "violet",
  },
  coroutines: {
    label: {
      en: "kotlinx.coroutines",
      hi: "kotlinx.coroutines",
      "hi-en": "kotlinx.coroutines",
    },
    accent: "emerald",
  },
  android: {
    label: {
      en: "Android framework",
      hi: "Android framework",
      "hi-en": "Android framework",
    },
    accent: "emerald",
  },
  jetpack: {
    label: { en: "AndroidX / Jetpack", hi: "AndroidX / Jetpack", "hi-en": "AndroidX / Jetpack" },
    accent: "sky",
  },
  compose: {
    label: { en: "Jetpack Compose", hi: "Jetpack Compose", "hi-en": "Jetpack Compose" },
    accent: "sky",
  },
  library: {
    label: { en: "Third-party library", hi: "थर्ड-पार्टी लाइब्रेरी", "hi-en": "Third-party library" },
    accent: "amber",
  },
};

export type GlossaryEntry = {
  /** The exact token as it appears in code. Matching is case-sensitive. */
  term: string;
  /** What kind of thing it is — keyword, class, function, annotation... */
  kind: Localized;
  source: GlossarySource;
  /**
   * The exact import line, or `null` when the token needs no import.
   * This answers "kahan se import hua hai" directly.
   */
  importLine: string | null;
  /** One sentence: what it does. */
  does: Localized;
  /**
   * What may legally go here, when that is a closed or nearly-closed set.
   * Manifest attributes need this far more than Kotlin keywords do — knowing
   * `android:exported` takes only `true` or `false` is half the answer.
   */
  values?: Localized;
  /** The downstream consequence — what other code this changes. */
  affects: Localized;
  /** Official documentation URL. */
  docs?: string;
  /** Other glossary terms worth reading next. */
  related?: string[];
};

export type Glossary = Record<string, GlossaryEntry>;
