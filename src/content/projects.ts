import type { Accent, Difficulty } from "@/content/curriculum";
import type { Lang, Localized } from "@/lib/i18n";

/**
 * Guided build-alongs: one app per project, taken from an empty Android Studio
 * window to a signed APK you can send someone.
 *
 * A project is deliberately *not* a phase of the course. The curriculum teaches
 * one idea at a time in isolation; a project is where those ideas have to work
 * together, and where the questions that only appear in real code get answered —
 * why this dependency, where did this file come from, what happens on back press.
 *
 * Structure lives here. Every word the learner reads lives in the step's MDX,
 * one file per language, exactly like a lesson.
 */

export type ProjectStep = {
  /** Stable, public, kebab-case. Never rename a shipped slug. */
  slug: string;
  /** English technical title — the fallback when a translation is missing. */
  title: string;
  minutes: number;
  /** What the learner can do after this step that they could not before. */
  outcome: Localized;
};

export type StackItem = {
  /** Library or tool name, never translated. */
  name: string;
  /** The one job it does in this app. */
  role: Localized;
};

export type Project = {
  /** Stable, public, kebab-case. */
  slug: string;
  /** The app's own name. A proper noun, so it is not translated. */
  name: string;
  /** What the app is, in one phrase. */
  title: Localized;
  /** One sentence for the project card. */
  blurb: Localized;
  /** Two or three sentences on the overview page: why build this one. */
  intro: Localized;
  difficulty: Difficulty;
  accent: Accent;
  /** lucide-react icon name. */
  icon: string;
  /** The phase the learner should have finished before starting. */
  afterPhase: number;
  /** What they are holding at the end. */
  ships: Localized[];
  stack: StackItem[];
  steps: ProjectStep[];
};

const I: Difficulty = "intermediate";

export const PROJECTS: Project[] = [
  {
    slug: "saathi",
    name: "Saathi",
    title: {
      en: "A shared list two people can use at the same time",
      hi: "ऐसी साझा सूची जिसे दो लोग एक ही वक्त इस्तेमाल कर सकें",
      "hi-en": "Aisi shared list jise do log ek hi waqt istemaal kar sakein",
    },
    blurb: {
      en: "Build a real offline-first app end to end, then send the APK to someone and watch their edits arrive on your screen.",
      hi: "बिना नेट पहले चलने वाला असली ऐप शुरू से आखिर तक बनाइए, फिर किसी को APK भेजिए और उसके बदलाव अपनी screen पर आते देखिए।",
      "hi-en":
        "Bina net pehle chalne wala asli app shuru se aakhir tak banaiye, phir kisi ko APK bhejiye aur uske badlaav apni screen par aate dekhiye.",
    },
    intro: {
      en: "A household list is the smallest app that genuinely needs everything the course teaches. It has to work in a shop with no signal, so the database is the source of truth. Two people edit it at once, so sync and conflicts are real. And the moment you send the APK to someone in your house, every shortcut you took becomes visible.",
      hi: "घर की सूची वह सबसे छोटा ऐप है जिसे सच में वह सब चाहिए जो यह course सिखाता है। उसे बिना signal वाली दुकान में चलना है, तो database ही सच का स्रोत है। दो लोग उसे एक साथ बदलते हैं, तो sync और टकराव असली हैं। और जिस पल आप घर के किसी को APK भेजते हैं, आपका हर छोटा रास्ता दिखने लगता है।",
      "hi-en":
        "Ghar ki list wo sabse chhota app hai jise sach mein wo sab chahiye jo yeh course sikhata hai. Use bina signal wali dukaan mein chalna hai, to database hi sach ka srot hai. Do log use ek saath badalte hain, to sync aur takraav asli hain. Aur jis pal aap ghar ke kisi ko APK bhejte hain, aapka har chhota raasta dikhne lagta hai.",
    },
    difficulty: I,
    accent: "emerald",
    icon: "ListChecks",
    afterPhase: 13,
    ships: [
      {
        en: "A signed APK you can send over WhatsApp and someone can install",
        hi: "हस्ताक्षरित APK जिसे आप WhatsApp पर भेज सकें और कोई उसे लगा सके",
        "hi-en": "Hastaksharit APK jise aap WhatsApp par bhej sakein aur koi use laga sake",
      },
      {
        en: "A list that keeps working with the phone in aeroplane mode",
        hi: "ऐसी सूची जो फोन के aeroplane mode में भी चलती रहे",
        "hi-en": "Aisi list jo phone ke aeroplane mode mein bhi chalti rahe",
      },
      {
        en: "Two phones editing the same list, each seeing the other within a second",
        hi: "दो फोन वही सूची बदलते हुए, हर एक दूसरे को एक सेकंड के भीतर देखता हुआ",
        "hi-en": "Do phone wahi list badalte hue, har ek doosre ko ek second ke bheetar dekhta hua",
      },
      {
        en: "Back, predictive back and screen transitions that behave like a real app",
        hi: "Back, predictive back और screens के बीच बदलाव, असली ऐप जैसे",
        "hi-en": "Back, predictive back aur screens ke beech badlaav, asli app jaise",
      },
    ],
    stack: [
      {
        name: "Jetpack Compose",
        role: {
          en: "The whole UI, with state that survives rotation",
          hi: "पूरी UI, ऐसी हालत के साथ जो घुमाने पर बची रहे",
          "hi-en": "Poori UI, aisi haalat ke saath jo ghumane par bachi rahe",
        },
      },
      {
        name: "Room",
        role: {
          en: "The source of truth, so the app opens instantly and works offline",
          hi: "सच का स्रोत, ताकि ऐप तुरंत खुले और बिना नेट चले",
          "hi-en": "Sach ka srot, taki app turant khule aur bina net chale",
        },
      },
      {
        name: "Firebase Auth",
        role: {
          en: "Who you are, so a list can belong to more than one person",
          hi: "आप कौन हैं, ताकि कोई सूची एक से ज्यादा लोगों की हो सके",
          "hi-en": "Aap kaun hain, taki koi list ek se zyada logon ki ho sake",
        },
      },
      {
        name: "Cloud Firestore",
        role: {
          en: "The shared copy, and the live stream of the other person's edits",
          hi: "साझा नकल, और दूसरे के बदलावों की चलती हुई धारा",
          "hi-en": "Saajha nakal, aur doosre ke badlaavon ki chalti hui dhaara",
        },
      },
      {
        name: "Hilt",
        role: {
          en: "One place that decides what is built and how long it lives",
          hi: "एक जगह जो तय करे कि क्या बनेगा और कितनी देर जिएगा",
          "hi-en": "Ek jagah jo tay kare ki kya banega aur kitni der jiyega",
        },
      },
      {
        name: "Navigation Compose",
        role: {
          en: "Routes, arguments and the back stack",
          hi: "Routes, arguments और back का ढेर",
          "hi-en": "Routes, arguments aur back ka dher",
        },
      },
      {
        name: "WorkManager",
        role: {
          en: "Pushing local edits that must survive the app being killed",
          hi: "वे स्थानीय बदलाव भेजना जिन्हें ऐप के मारे जाने पर भी बचना है",
          "hi-en": "Wo sthaaniya badlaav bhejna jinhein app ke maare jaane par bhi bachna hai",
        },
      },
      {
        name: "R8",
        role: {
          en: "Shrinking the release build, and the rules that keep it working",
          hi: "Release वाले build की छँटाई, और वे नियम जो उसे चलता रखते हैं",
          "hi-en": "Release wale build ki chhantai, aur wo niyam jo use chalta rakhte hain",
        },
      },
    ],
    steps: [
      {
        slug: "setup",
        title: "The empty project, and every file in it",
        minutes: 22,
        outcome: {
          en: "Read every file Android Studio generated and know why it exists.",
          hi: "Android Studio की बनाई हर file पढ़ लेना और जानना कि वह क्यों है।",
          "hi-en": "Android Studio ki banai har file padh lena aur jaanna ki wo kyon hai.",
        },
      },
      {
        slug: "firebase",
        title: "Connecting Firebase, and what google-services.json really does",
        minutes: 20,
        outcome: {
          en: "A project that talks to Firebase, with no secret you had to hide.",
          hi: "ऐसा project जो Firebase से बात करे, बिना किसी ऐसे राज के जिसे छिपाना पड़े।",
          "hi-en": "Aisa project jo Firebase se baat kare, bina kisi aise raaz ke jise chhupana pade.",
        },
      },
      {
        slug: "auth",
        title: "Sign-in that survives a restart",
        minutes: 26,
        outcome: {
          en: "A signed-in user, observed as state rather than checked once.",
          hi: "Signed in उपयोगकर्ता, एक बार जाँचा हुआ नहीं, हालत की तरह देखा हुआ।",
          "hi-en": "Signed in upyogkarta, ek baar parkha hua nahi, haalat ki tarah dekha hua.",
        },
      },
      {
        slug: "data-model",
        title: "The shapes: domain, entity and DTO",
        minutes: 24,
        outcome: {
          en: "Three types instead of one, and a clear reason for each.",
          hi: "एक के बजाय तीन किस्म, और हर एक की साफ वजह।",
          "hi-en": "Ek ke bajay teen kism, aur har ek ki saaf wajah.",
        },
      },
      {
        slug: "offline-first",
        title: "Room as the source of truth",
        minutes: 26,
        outcome: {
          en: "A list that renders instantly in aeroplane mode.",
          hi: "ऐसी सूची जो aeroplane mode में भी तुरंत दिखे।",
          "hi-en": "Aisi list jo aeroplane mode mein bhi turant dikhe.",
        },
      },
      {
        slug: "sync",
        title: "Firestore, security rules and the sync loop",
        minutes: 30,
        outcome: {
          en: "Edits that reach the other phone, and rules that stop everyone else.",
          hi: "ऐसे बदलाव जो दूसरे फोन तक पहुँचें, और ऐसे नियम जो बाकी सबको रोकें।",
          "hi-en": "Aise badlaav jo doosre phone tak pahunchein, aur aise niyam jo baaki sabko rokein.",
        },
      },
      {
        slug: "hilt",
        title: "Wiring it together with Hilt",
        minutes: 22,
        outcome: {
          en: "One graph deciding what is built, once, and how long it lives.",
          hi: "एक graph जो तय करे कि क्या बनेगा, एक बार, और कितनी देर जिएगा।",
          "hi-en": "Ek graph jo tay kare ki kya banega, ek baar, aur kitni der jiyega.",
        },
      },
      {
        slug: "list-screen",
        title: "The list screen, and state that survives rotation",
        minutes: 28,
        outcome: {
          en: "A screen driven by one immutable state object.",
          hi: "ऐसी screen जो एक ही न बदलने वाली हालत से चले।",
          "hi-en": "Aisi screen jo ek hi na badalne wali haalat se chale.",
        },
      },
      {
        slug: "navigation",
        title: "Navigation: routes, arguments and the back stack",
        minutes: 26,
        outcome: {
          en: "Three screens, type-safe routes, and no lost state.",
          hi: "तीन screens, किस्म से सुरक्षित routes, और कोई खोई हुई हालत नहीं।",
          "hi-en": "Teen screens, kism se surakshit routes, aur koi khoyi hui haalat nahi.",
        },
      },
      {
        slug: "back-and-transitions",
        title: "Back press, predictive back and screen transitions",
        minutes: 28,
        outcome: {
          en: "Back that does the right thing, including the gesture preview.",
          hi: "ऐसा back जो सही काम करे, उस झलक वाले इशारे समेत।",
          "hi-en": "Aisa back jo sahi kaam kare, us jhalak wale ishaare samet.",
        },
      },
      {
        slug: "sharing",
        title: "Inviting the other person: share sheet and deep links",
        minutes: 24,
        outcome: {
          en: "A link that opens your app on their phone and joins them to the list.",
          hi: "ऐसा link जो उनके फोन पर आपका ऐप खोले और उन्हें सूची में जोड़ दे।",
          "hi-en": "Aisa link jo unke phone par aapka app khole aur unhein list mein jod de.",
        },
      },
      {
        slug: "release",
        title: "Signing, R8, and an APK you can actually send",
        minutes: 30,
        outcome: {
          en: "A signed release APK on your desk, and a crash report you can read.",
          hi: "आपकी मेज पर हस्ताक्षरित release APK, और पढ़ी जा सकने वाली crash की रिपोर्ट।",
          "hi-en": "Aapki mez par hastaksharit release APK, aur padhi ja sakne wali crash ki report.",
        },
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Derived helpers
 * ------------------------------------------------------------------ */

export type StepRef = {
  project: Project;
  step: ProjectStep;
  /** `<projectSlug>/<stepSlug>` — the canonical step path. */
  path: string;
  /** Position within its own project, zero-based. */
  index: number;
};

export const ALL_STEPS: StepRef[] = PROJECTS.flatMap((project) =>
  project.steps.map((step, index) => ({
    project,
    step,
    path: `${project.slug}/${step.slug}`,
    index,
  })),
);

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function findStep(path: string): StepRef | undefined {
  return ALL_STEPS.find((ref) => ref.path === path);
}

/** Previous and next step, never crossing into another project. */
export function stepNeighbours(path: string): { prev?: StepRef; next?: StepRef } {
  const current = findStep(path);
  if (!current) return {};
  const siblings = ALL_STEPS.filter((ref) => ref.project.slug === current.project.slug);
  return {
    prev: siblings[current.index - 1],
    next: siblings[current.index + 1],
  };
}

export function projectMinutes(project: Project): number {
  return project.steps.reduce((sum, step) => sum + step.minutes, 0);
}

export function projectHref(lang: Lang, slug: string): string {
  return `/${lang}/projects/${slug}`;
}

export function stepHref(lang: Lang, path: string): string {
  return `/${lang}/projects/${path}`;
}

/** The progress key for a step, namespaced so it never collides with a lesson. */
export function stepProgressKey(path: string): string {
  return `project:${path}`;
}
