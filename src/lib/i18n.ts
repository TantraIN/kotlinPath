/**
 * Trilingual support: English, Hindi (Devanagari) and Hinglish (Roman script).
 *
 * Rule: technical terms are never translated. Only the surrounding explanation
 * changes. See CLAUDE.md section 2.
 */

export const LANGS = ["en", "hi", "hi-en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

export type LangMeta = {
  code: Lang;
  /** Name shown in the switcher, written in that language. */
  label: string;
  /** Short code shown in the compact switcher. */
  short: string;
  /** One-line description of who this variant is for. */
  hint: string;
  /** `lang` attribute for the document — drives font + line-height rules. */
  htmlLang: string;
};

export const LANG_META: Record<Lang, LangMeta> = {
  en: {
    code: "en",
    label: "English",
    short: "EN",
    hint: "Full English — best for interviews and documentation",
    htmlLang: "en",
  },
  hi: {
    code: "hi",
    label: "हिन्दी",
    short: "HI",
    hint: "पूरी व्याख्या हिन्दी में, तकनीकी शब्द अंग्रेजी में",
    htmlLang: "hi",
  },
  "hi-en": {
    code: "hi-en",
    label: "Hinglish",
    short: "HIN",
    hint: "Hindi samjhaish, Roman script — sabse natural",
    htmlLang: "en-IN",
  },
};

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/** Swap the language segment of a pathname, keeping the learner in place. */
export function swapLangInPath(pathname: string, next: Lang): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${next}`;
  if (isLang(parts[0])) {
    parts[0] = next;
    return `/${parts.join("/")}`;
  }
  return `/${next}/${parts.join("/")}`;
}

/* ------------------------------------------------------------------ *
 * UI dictionary — no user-visible string may be hardcoded in a component
 * ------------------------------------------------------------------ */

type Dict = {
  brandTagline: string;
  nav: {
    curriculum: string;
    glossary: string;
    playground: string;
    search: string;
    searchPlaceholder: string;
    menu: string;
    close: string;
  };
  theme: { light: string; dark: string; system: string; toggle: string };
  language: { label: string; switch: string };
  lesson: {
    onThisPage: string;
    readingTime: string;
    minutes: string;
    prev: string;
    next: string;
    updated: string;
    difficulty: string;
    notTranslated: string;
    notTranslatedBody: string;
    copy: string;
    copied: string;
    runInPlayground: string;
    lines: string;
  };
  glossaryCard: {
    what: string;
    where: string;
    does: string;
    values: string;
    affects: string;
    noImport: string;
    docs: string;
    dismiss: string;
  };
  callout: {
    note: string;
    tip: string;
    warning: string;
    pitfall: string;
    interview: string;
  };
  search: {
    empty: string;
    noResults: string;
    inLesson: string;
    hintNavigate: string;
    hintOpen: string;
    hintClose: string;
    otherLanguages: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaStart: string;
    ctaBrowse: string;
    statsPhases: string;
    statsLessons: string;
    statsHours: string;
    statsProjects: string;
    roadmapTitle: string;
    roadmapSubtitle: string;
  };
  quiz: {
    label: string;
    correct: string;
    notQuite: string;
    tryAgain: string;
  };
  progress: {
    label: string;
    markComplete: string;
    completed: string;
    ofDone: string;
    reset: string;
    resetConfirm: string;
    savedLocally: string;
    phaseDone: string;
  };
  difficulty: { beginner: string; intermediate: string; advanced: string };
  common: {
    phase: string;
    lesson: string;
    hours: string;
    project: string;
    of: string;
  };
};

export const DICT: Record<Lang, Dict> = {
  en: {
    brandTagline: "Kotlin & Android, from zero to production",
    nav: {
      curriculum: "Curriculum",
      glossary: "Glossary",
      playground: "Playground",
      search: "Search",
      searchPlaceholder: "Search lessons, APIs, keywords…",
      menu: "Menu",
      close: "Close",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
      toggle: "Change theme",
    },
    language: { label: "Language", switch: "Change language" },
    lesson: {
      onThisPage: "On this page",
      readingTime: "Reading time",
      minutes: "min",
      prev: "Previous",
      next: "Next",
      updated: "Updated",
      difficulty: "Level",
      notTranslated: "Not translated yet",
      notTranslatedBody:
        "This lesson has not been written in your language yet, so you are reading the English version.",
      copy: "Copy code",
      copied: "Copied",
      runInPlayground: "Run in Kotlin Playground",
      lines: "lines",
    },
    glossaryCard: {
      what: "What it is",
      where: "Where it comes from",
      does: "What it does",
      values: "What can go here",
      affects: "What it affects",
      noImport: "Built into the language — no import needed",
      docs: "Official docs",
      dismiss: "Close",
    },
    callout: {
      note: "Note",
      tip: "Tip",
      warning: "Careful",
      pitfall: "Common mistake",
      interview: "Interview question",
    },
    search: {
      empty: "Start typing to search across every lesson.",
      noResults: "No results found.",
      inLesson: "in",
      hintNavigate: "navigate",
      hintOpen: "open",
      hintClose: "close",
      otherLanguages: "Results in other languages",
    },
    home: {
      eyebrow: "Beginner to advanced",
      title: "Learn Kotlin and Android the way it is actually built",
      subtitle:
        "A complete, visual, trilingual course. Every concept explained with diagrams, every keyword explained on hover, every phase ending in a real app.",
      ctaStart: "Start with Phase 0",
      ctaBrowse: "Browse the curriculum",
      statsPhases: "Phases",
      statsLessons: "Lessons",
      statsHours: "Hours",
      statsProjects: "Projects",
      roadmapTitle: "The full roadmap",
      roadmapSubtitle:
        "Sixteen phases, ordered so nothing is ever used before it is taught.",
    },
    quiz: {
      label: "Check yourself",
      correct: "Correct",
      notQuite: "Not quite",
      tryAgain: "Try again",
    },
    progress: {
      label: "Progress",
      markComplete: "Mark as complete",
      completed: "Completed",
      ofDone: "done",
      reset: "Reset progress",
      resetConfirm: "Clear all progress on this device?",
      savedLocally: "Saved in this browser only",
      phaseDone: "Phase complete",
    },
    difficulty: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    common: {
      phase: "Phase",
      lesson: "Lesson",
      hours: "hours",
      project: "Project",
      of: "of",
    },
  },

  hi: {
    brandTagline: "Kotlin और Android — शुरुआत से production तक",
    nav: {
      curriculum: "पाठ्यक्रम",
      glossary: "शब्दकोश",
      playground: "प्लेग्राउंड",
      search: "खोजें",
      searchPlaceholder: "पाठ, API, keyword खोजें…",
      menu: "मेन्यू",
      close: "बंद करें",
    },
    theme: {
      light: "लाइट",
      dark: "डार्क",
      system: "सिस्टम",
      toggle: "थीम बदलें",
    },
    language: { label: "भाषा", switch: "भाषा बदलें" },
    lesson: {
      onThisPage: "इस पाठ में",
      readingTime: "पढ़ने का समय",
      minutes: "मिनट",
      prev: "पिछला",
      next: "अगला",
      updated: "अपडेट",
      difficulty: "स्तर",
      notTranslated: "अभी अनुवाद नहीं हुआ",
      notTranslatedBody:
        "यह पाठ अभी आपकी भाषा में नहीं लिखा गया है, इसलिए आप अंग्रेजी संस्करण पढ़ रहे हैं।",
      copy: "कोड कॉपी करें",
      copied: "कॉपी हो गया",
      runInPlayground: "Kotlin Playground में चलाएँ",
      lines: "पंक्तियाँ",
    },
    glossaryCard: {
      what: "यह क्या है",
      where: "कहाँ से आता है",
      does: "यह करता क्या है",
      values: "इसमें क्या आ सकता है",
      affects: "इसका असर क्या पड़ता है",
      noImport: "भाषा में ही बना हुआ है — import की जरूरत नहीं",
      docs: "आधिकारिक दस्तावेज",
      dismiss: "बंद करें",
    },
    callout: {
      note: "ध्यान दें",
      tip: "सुझाव",
      warning: "सावधान",
      pitfall: "आम गलती",
      interview: "इंटरव्यू प्रश्न",
    },
    search: {
      empty: "खोजने के लिए टाइप करना शुरू करें।",
      noResults: "कुछ नहीं मिला।",
      inLesson: "में",
      hintNavigate: "चुनें",
      hintOpen: "खोलें",
      hintClose: "बंद करें",
      otherLanguages: "अन्य भाषाओं के परिणाम",
    },
    home: {
      eyebrow: "शुरुआत से एडवांस तक",
      title: "Kotlin और Android वैसे सीखिए जैसे असल में बनाया जाता है",
      subtitle:
        "पूरा, चित्रों के साथ, तीन भाषाओं में। हर concept diagram से समझाया गया, हर keyword hover पर समझाया गया, और हर phase के अंत में एक असली app।",
      ctaStart: "Phase 0 से शुरू करें",
      ctaBrowse: "पूरा पाठ्यक्रम देखें",
      statsPhases: "चरण",
      statsLessons: "पाठ",
      statsHours: "घंटे",
      statsProjects: "प्रोजेक्ट",
      roadmapTitle: "पूरा रोडमैप",
      roadmapSubtitle:
        "सोलह चरण, ऐसे क्रम में कि कोई चीज पढ़ाने से पहले इस्तेमाल न हो।",
    },
    quiz: {
      label: "खुद जाँचिए",
      correct: "सही",
      notQuite: "बिलकुल नहीं",
      tryAgain: "फिर कोशिश कीजिए",
    },
    progress: {
      label: "प्रगति",
      markComplete: "पूरा हुआ चिह्नित करें",
      completed: "पूरा हुआ",
      ofDone: "पूरे",
      reset: "प्रगति रीसेट करें",
      resetConfirm: "इस डिवाइस की सारी प्रगति मिटा दें?",
      savedLocally: "सिर्फ इसी browser में सहेजा गया",
      phaseDone: "चरण पूरा",
    },
    difficulty: {
      beginner: "शुरुआती",
      intermediate: "मध्यम",
      advanced: "एडवांस",
    },
    common: {
      phase: "चरण",
      lesson: "पाठ",
      hours: "घंटे",
      project: "प्रोजेक्ट",
      of: "में से",
    },
  },

  "hi-en": {
    brandTagline: "Kotlin aur Android — zero se production tak",
    nav: {
      curriculum: "Curriculum",
      glossary: "Glossary",
      playground: "Playground",
      search: "Search",
      searchPlaceholder: "Lesson, API, keyword search karein…",
      menu: "Menu",
      close: "Band karein",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
      toggle: "Theme badlein",
    },
    language: { label: "Bhasha", switch: "Language badlein" },
    lesson: {
      onThisPage: "Is page par",
      readingTime: "Padhne ka time",
      minutes: "min",
      prev: "Pichhla",
      next: "Agla",
      updated: "Updated",
      difficulty: "Level",
      notTranslated: "Abhi translate nahi hua",
      notTranslatedBody:
        "Ye lesson abhi aapki language mein nahi likha gaya, isliye aap English version padh rahe hain.",
      copy: "Code copy karein",
      copied: "Copy ho gaya",
      runInPlayground: "Kotlin Playground mein chalayein",
      lines: "lines",
    },
    glossaryCard: {
      what: "Ye kya hai",
      where: "Kahan se aata hai",
      does: "Ye karta kya hai",
      values: "Ismein kya aa sakta hai",
      affects: "Iska asar kya padta hai",
      noImport: "Language mein hi built-in hai — import ki zarurat nahi",
      docs: "Official docs",
      dismiss: "Band karein",
    },
    callout: {
      note: "Note",
      tip: "Tip",
      warning: "Dhyan dein",
      pitfall: "Common galti",
      interview: "Interview question",
    },
    search: {
      empty: "Search karne ke liye type karna shuru karein.",
      noResults: "Kuch nahi mila.",
      inLesson: "mein",
      hintNavigate: "navigate",
      hintOpen: "kholein",
      hintClose: "band karein",
      otherLanguages: "Dusri languages ke results",
    },
    home: {
      eyebrow: "Beginner se advanced tak",
      title:
        "Kotlin aur Android waise seekhein jaise asli mein banaya jata hai",
      subtitle:
        "Poora, visual, teen bhasha wala course. Har concept diagram se samjhaya gaya, har keyword hover par samjhaya gaya, aur har phase ke end mein ek real app.",
      ctaStart: "Phase 0 se shuru karein",
      ctaBrowse: "Poora curriculum dekhein",
      statsPhases: "Phases",
      statsLessons: "Lessons",
      statsHours: "Ghante",
      statsProjects: "Projects",
      roadmapTitle: "Poora roadmap",
      roadmapSubtitle:
        "Solah phases, aise order mein ki koi cheez padhaye bina use na ho.",
    },
    quiz: {
      label: "Khud jaancho",
      correct: "Sahi",
      notQuite: "Bilkul nahi",
      tryAgain: "Phir koshish karo",
    },
    progress: {
      label: "Progress",
      markComplete: "Poora hua mark karo",
      completed: "Poora hua",
      ofDone: "poore",
      reset: "Progress reset karo",
      resetConfirm: "Is device ki saari progress mita dein?",
      savedLocally: "Sirf isi browser mein save hua",
      phaseDone: "Phase poora",
    },
    difficulty: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    common: {
      phase: "Phase",
      lesson: "Lesson",
      hours: "ghante",
      project: "Project",
      of: "of",
    },
  },
};

export function t(lang: Lang): Dict {
  return DICT[lang] ?? DICT[DEFAULT_LANG];
}

/** Pick the right string out of a `{ en, hi, "hi-en" }` bundle, falling back to English. */
export type Localized = Partial<Record<Lang, string>> & { en: string };

export function pick(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en;
}
