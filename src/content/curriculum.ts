import type { Lang, Localized } from "@/lib/i18n";

/**
 * The single source of truth for the whole course.
 *
 * Structure and English technical titles live here. Localized lesson titles and
 * descriptions live in each lesson's MDX frontmatter (see CLAUDE.md section 5),
 * because technical terms are never translated but the framing sentence is.
 */

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Accent = "violet" | "emerald" | "amber" | "sky" | "rose";

export type Lesson = {
  /** Stable, public, kebab-case. Never rename a shipped slug. */
  slug: string;
  /** English technical title — the fallback when a translation is missing. */
  title: string;
  /** Estimated reading + practice time. */
  minutes: number;
  difficulty: Difficulty;
  /** Search keywords and API names covered by this lesson. */
  tags?: string[];
};

export type Phase = {
  /** Display number; Phase 0 is the setup phase. */
  number: number;
  slug: string;
  title: Localized;
  blurb: Localized;
  /** Rough calendar estimate at a part-time pace. */
  weeks: number;
  /** lucide-react icon name. */
  icon: string;
  accent: Accent;
  /** The app the learner ships at the end of the phase. */
  project: Localized;
  lessons: Lesson[];
};

const B: Difficulty = "beginner";
const I: Difficulty = "intermediate";
const A: Difficulty = "advanced";

export const CURRICULUM: Phase[] = [
  {
    number: 0,
    slug: "foundation",
    title: {
      en: "Foundation & Setup",
      hi: "नींव और सेटअप",
      "hi-en": "Foundation aur Setup",
    },
    blurb: {
      en: "Understand what you are actually building on, then get a working machine.",
      hi: "पहले समझिए कि आप बना किस चीज़ पर रहे हैं, फिर मशीन तैयार कीजिए।",
      "hi-en": "Pehle samjho ki aap bana kis cheez par rahe ho, phir machine ready karo.",
    },
    weeks: 1,
    icon: "Compass",
    accent: "sky",
    project: {
      en: "Hello World running on a real device, pushed to GitHub",
      hi: "असली डिवाइस पर Hello World, और GitHub पर पुश",
      "hi-en": "Real device par Hello World, aur GitHub par push",
    },
    lessons: [
      { slug: "how-programs-run", title: "How a program actually runs", minutes: 12, difficulty: B, tags: ["memory", "compiler", "cpu"] },
      { slug: "jvm-and-why-kotlin", title: "The JVM, and why Kotlin exists", minutes: 14, difficulty: B, tags: ["jvm", "bytecode", "java interop"] },
      { slug: "android-ecosystem", title: "The Android ecosystem, top to bottom", minutes: 15, difficulty: B, tags: ["ART", "linux kernel", "apk", "aab"] },
      { slug: "tooling-setup", title: "Android Studio, SDK and emulator setup", minutes: 20, difficulty: B, tags: ["sdk manager", "avd", "adb"] },
      { slug: "gradle-basics", title: "Gradle without the fear", minutes: 18, difficulty: B, tags: ["build.gradle.kts", "version catalog", "dependency"] },
      { slug: "git-essentials", title: "Git essentials for this course", minutes: 16, difficulty: B, tags: ["commit", "branch", "pull request"] },
    ],
  },

  {
    number: 1,
    slug: "kotlin-fundamentals",
    title: {
      en: "Kotlin Fundamentals",
      hi: "Kotlin की बुनियाद",
      "hi-en": "Kotlin ki Buniyaad",
    },
    blurb: {
      en: "The core language: values, control flow, null safety, functions and collections.",
      hi: "भाषा की जड़: values, control flow, null safety, functions और collections।",
      "hi-en": "Language ki jad: values, control flow, null safety, functions aur collections.",
    },
    weeks: 3,
    icon: "Blocks",
    accent: "violet",
    project: {
      en: "Console apps: calculator, todo manager, bank account simulator",
      hi: "कंसोल ऐप: calculator, todo manager, bank account simulator",
      "hi-en": "Console apps: calculator, todo manager, bank account simulator",
    },
    lessons: [
      { slug: "val-var-and-types", title: "val, var and Kotlin's type system", minutes: 16, difficulty: B, tags: ["val", "var", "Int", "Double", "type inference"] },
      { slug: "strings-and-templates", title: "Strings, templates and raw strings", minutes: 12, difficulty: B, tags: ["String", "trimIndent", "interpolation"] },
      { slug: "operators-and-casting", title: "Operators, smart casts, is and as", minutes: 14, difficulty: B, tags: ["is", "as", "smart cast", "toInt"] },
      { slug: "if-and-when", title: "if as an expression, and the power of when", minutes: 16, difficulty: B, tags: ["if", "when", "expression"] },
      { slug: "loops-and-ranges", title: "Loops, ranges and labels", minutes: 15, difficulty: B, tags: ["for", "while", "until", "downTo", "step", "break"] },
      { slug: "null-safety", title: "Null safety: the billion dollar fix", minutes: 22, difficulty: B, tags: ["?.", "?:", "!!", "let", "NullPointerException"] },
      { slug: "functions", title: "Functions, default and named arguments", minutes: 18, difficulty: B, tags: ["fun", "default argument", "named argument", "Unit"] },
      { slug: "vararg-and-infix", title: "vararg, infix and local functions", minutes: 13, difficulty: I, tags: ["vararg", "infix", "spread operator"] },
      { slug: "collections", title: "List, Set, Map and their mutable twins", minutes: 20, difficulty: B, tags: ["listOf", "mutableListOf", "mapOf", "setOf"] },
      { slug: "collection-operations", title: "map, filter, groupBy and friends", minutes: 24, difficulty: I, tags: ["map", "filter", "flatMap", "groupBy", "fold", "sumOf"] },
      { slug: "lambdas", title: "Lambdas and higher-order functions", minutes: 22, difficulty: I, tags: ["lambda", "it", "higher-order", "function type"] },
      { slug: "scope-functions", title: "let, run, with, apply, also — and when to use which", minutes: 20, difficulty: I, tags: ["let", "run", "with", "apply", "also"] },
      { slug: "exceptions", title: "Exceptions, try/catch and the Result type", minutes: 16, difficulty: I, tags: ["try", "catch", "finally", "Result", "runCatching"] },
      { slug: "packages-and-visibility", title: "Packages, imports and visibility modifiers", minutes: 12, difficulty: B, tags: ["package", "import", "private", "internal", "public"] },
    ],
  },

  {
    number: 2,
    slug: "kotlin-oop",
    title: {
      en: "Object-Oriented Kotlin",
      hi: "Object-Oriented Kotlin",
      "hi-en": "Object-Oriented Kotlin",
    },
    blurb: {
      en: "Model the real world: classes, interfaces, sealed hierarchies, generics and delegation.",
      hi: "असली दुनिया को मॉडल कीजिए: classes, interfaces, sealed hierarchies, generics और delegation।",
      "hi-en": "Real duniya ko model karo: classes, interfaces, sealed hierarchies, generics aur delegation.",
    },
    weeks: 3,
    icon: "Boxes",
    accent: "violet",
    project: {
      en: "Library management system, designed properly with interfaces and sealed state",
      hi: "Library management system, interfaces और sealed state के साथ",
      "hi-en": "Library management system, interfaces aur sealed state ke saath",
    },
    lessons: [
      { slug: "classes-and-constructors", title: "Classes, constructors and init blocks", minutes: 20, difficulty: B, tags: ["class", "constructor", "init", "this"] },
      { slug: "properties", title: "Properties, custom accessors, lateinit and lazy", minutes: 18, difficulty: I, tags: ["get", "set", "lateinit", "lazy", "field"] },
      { slug: "inheritance", title: "Inheritance: open, override and super", minutes: 20, difficulty: I, tags: ["open", "override", "super", "abstract", "final"] },
      { slug: "interfaces", title: "Interfaces and default implementations", minutes: 18, difficulty: I, tags: ["interface", "override", "default implementation"] },
      { slug: "data-classes", title: "Data classes, equals, copy and destructuring", minutes: 18, difficulty: B, tags: ["data class", "copy", "equals", "hashCode", "componentN"] },
      { slug: "objects-and-companions", title: "object, companion object and singletons", minutes: 16, difficulty: I, tags: ["object", "companion object", "singleton", "const"] },
      { slug: "sealed-classes", title: "Sealed classes: modelling state without mistakes", minutes: 22, difficulty: I, tags: ["sealed class", "sealed interface", "when", "exhaustive"] },
      { slug: "enums", title: "Enum classes and when to prefer sealed", minutes: 12, difficulty: B, tags: ["enum class", "entries", "valueOf"] },
      { slug: "extension-functions", title: "Extension functions and properties", minutes: 18, difficulty: I, tags: ["extension function", "receiver", "this"] },
      { slug: "delegation", title: "Delegation with by, and delegated properties", minutes: 20, difficulty: A, tags: ["by", "Delegates.observable", "ReadWriteProperty"] },
      { slug: "generics", title: "Generics, variance, in, out and reified", minutes: 26, difficulty: A, tags: ["generics", "in", "out", "reified", "inline", "where"] },
      { slug: "operator-overloading", title: "Operator overloading and inline functions", minutes: 18, difficulty: A, tags: ["operator", "inline", "noinline", "crossinline"] },
    ],
  },

  {
    number: 3,
    slug: "coroutines-and-flow",
    title: {
      en: "Coroutines & Flow",
      hi: "Coroutines और Flow",
      "hi-en": "Coroutines aur Flow",
    },
    blurb: {
      en: "Asynchronous Kotlin done right — the single most important skill for Android.",
      hi: "Asynchronous Kotlin सही तरीके से — Android के लिए सबसे ज़रूरी कौशल।",
      "hi-en": "Asynchronous Kotlin sahi tarike se — Android ke liye sabse zaruri skill.",
    },
    weeks: 3,
    icon: "Waves",
    accent: "emerald",
    project: {
      en: "Concurrent downloader with cancellation, retries and progress reporting",
      hi: "Concurrent downloader — cancellation, retry और progress के साथ",
      "hi-en": "Concurrent downloader — cancellation, retry aur progress ke saath",
    },
    lessons: [
      { slug: "threads-and-blocking", title: "Threads, blocking and why callbacks hurt", minutes: 18, difficulty: I, tags: ["Thread", "blocking", "callback hell", "main thread"] },
      { slug: "coroutine-basics", title: "suspend, launch and async", minutes: 24, difficulty: I, tags: ["suspend", "launch", "async", "await", "runBlocking"] },
      { slug: "scope-and-context", title: "CoroutineScope, Job and CoroutineContext", minutes: 22, difficulty: I, tags: ["CoroutineScope", "Job", "SupervisorJob", "CoroutineContext"] },
      { slug: "dispatchers", title: "Dispatchers: Main, IO, Default", minutes: 18, difficulty: I, tags: ["Dispatchers.Main", "Dispatchers.IO", "Dispatchers.Default", "withContext"] },
      { slug: "structured-concurrency", title: "Structured concurrency and cancellation", minutes: 24, difficulty: A, tags: ["coroutineScope", "cancel", "isActive", "ensureActive", "withTimeout"] },
      { slug: "coroutine-exceptions", title: "Exception handling in coroutines", minutes: 20, difficulty: A, tags: ["CoroutineExceptionHandler", "supervisorScope", "try catch"] },
      { slug: "flow-basics", title: "Flow: cold streams and operators", minutes: 24, difficulty: I, tags: ["Flow", "flow", "collect", "map", "filter", "debounce"] },
      { slug: "stateflow-sharedflow", title: "StateFlow and SharedFlow", minutes: 22, difficulty: I, tags: ["StateFlow", "MutableStateFlow", "SharedFlow", "hot stream"] },
      { slug: "flow-advanced", title: "flatMapLatest, combine, flowOn and buffering", minutes: 22, difficulty: A, tags: ["flatMapLatest", "combine", "zip", "flowOn", "buffer", "conflate"] },
      { slug: "channels", title: "Channels and when you actually need them", minutes: 16, difficulty: A, tags: ["Channel", "produce", "send", "receive"] },
    ],
  },

  {
    number: 4,
    slug: "android-fundamentals",
    title: {
      en: "Android Fundamentals",
      hi: "Android की बुनियाद",
      "hi-en": "Android ki Buniyaad",
    },
    blurb: {
      en: "Components, lifecycles, resources and the mental model of an Android process.",
      hi: "Components, lifecycles, resources और Android process का मानसिक मॉडल।",
      "hi-en": "Components, lifecycles, resources aur Android process ka mental model.",
    },
    weeks: 3,
    icon: "Smartphone",
    accent: "emerald",
    project: {
      en: "Multi-screen app that survives rotation and process death",
      hi: "Multi-screen ऐप जो rotation और process death झेल जाए",
      "hi-en": "Multi-screen app jo rotation aur process death jhel jaye",
    },
    lessons: [
      { slug: "project-structure", title: "Project structure and source sets", minutes: 14, difficulty: B, tags: ["res", "assets", "sourceSets", "build variants"] },
      { slug: "manifest", title: "AndroidManifest: declaring your app to the system", minutes: 18, difficulty: B, tags: ["AndroidManifest.xml", "intent-filter", "uses-permission", "exported"] },
      { slug: "activity-lifecycle", title: "The Activity lifecycle, in depth", minutes: 26, difficulty: B, tags: ["onCreate", "onStart", "onResume", "onPause", "onStop", "onDestroy"] },
      { slug: "fragments", title: "Fragments and their separate lifecycle", minutes: 22, difficulty: I, tags: ["Fragment", "viewLifecycleOwner", "FragmentManager"] },
      { slug: "intents", title: "Intents, extras and Activity results", minutes: 20, difficulty: B, tags: ["Intent", "putExtra", "ActivityResultContracts", "registerForActivityResult"] },
      { slug: "config-changes", title: "Configuration changes, process death and SavedStateHandle", minutes: 24, difficulty: I, tags: ["onSaveInstanceState", "SavedStateHandle", "process death"] },
      { slug: "resources", title: "Resources, localization and dark theme", minutes: 20, difficulty: B, tags: ["strings.xml", "values-hi", "night", "R class"] },
      { slug: "density-and-units", title: "Density buckets: dp, sp and px", minutes: 14, difficulty: B, tags: ["dp", "sp", "px", "mdpi", "xxxhdpi"] },
      { slug: "context", title: "Context, and the leaks it causes", minutes: 20, difficulty: I, tags: ["Context", "applicationContext", "memory leak"] },
      { slug: "debugging", title: "Logcat, breakpoints and reading a stack trace", minutes: 18, difficulty: B, tags: ["Log", "Logcat", "breakpoint", "stack trace"] },
    ],
  },

  {
    number: 5,
    slug: "view-system",
    title: {
      en: "The XML View System",
      hi: "XML View System",
      "hi-en": "XML View System",
    },
    blurb: {
      en: "Still running most production code in the world. Required for real jobs and maintenance.",
      hi: "दुनिया का ज़्यादातर production code अब भी इसी पर है। नौकरी और maintenance के लिए ज़रूरी।",
      "hi-en": "Duniya ka zyadatar production code abhi bhi isi par hai. Job aur maintenance ke liye zaruri.",
    },
    weeks: 2,
    icon: "LayoutTemplate",
    accent: "amber",
    project: {
      en: "News listing app with RecyclerView, DiffUtil and a detail screen",
      hi: "News listing ऐप — RecyclerView, DiffUtil और detail screen के साथ",
      "hi-en": "News listing app — RecyclerView, DiffUtil aur detail screen ke saath",
    },
    lessons: [
      { slug: "layout-basics", title: "LinearLayout, FrameLayout and the measure pass", minutes: 18, difficulty: B, tags: ["LinearLayout", "FrameLayout", "onMeasure", "layout_weight"] },
      { slug: "constraint-layout", title: "ConstraintLayout: chains, guidelines and barriers", minutes: 26, difficulty: I, tags: ["ConstraintLayout", "chain", "Guideline", "Barrier", "dimensionRatio"] },
      { slug: "core-views", title: "TextView, EditText, ImageView and input controls", minutes: 20, difficulty: B, tags: ["TextView", "EditText", "ImageView", "Spinner", "Switch"] },
      { slug: "recyclerview", title: "RecyclerView, ViewHolder and DiffUtil", minutes: 30, difficulty: I, tags: ["RecyclerView", "Adapter", "ViewHolder", "DiffUtil", "ListAdapter"] },
      { slug: "view-binding", title: "ViewBinding, and why findViewById is gone", minutes: 12, difficulty: B, tags: ["ViewBinding", "findViewById", "binding"] },
      { slug: "styles-and-material", title: "Styles, themes and Material 3 components", minutes: 20, difficulty: I, tags: ["style", "theme", "MaterialButton", "TextInputLayout"] },
      { slug: "custom-views", title: "Custom views: onDraw, Canvas and Paint", minutes: 26, difficulty: A, tags: ["View", "onDraw", "Canvas", "Paint", "onMeasure"] },
      { slug: "dialogs-and-navigation", title: "Dialogs, bottom sheets, toolbars and menus", minutes: 20, difficulty: I, tags: ["AlertDialog", "BottomSheetDialogFragment", "Toolbar", "Snackbar"] },
    ],
  },

  {
    number: 6,
    slug: "jetpack-compose",
    title: {
      en: "Jetpack Compose",
      hi: "Jetpack Compose",
      "hi-en": "Jetpack Compose",
    },
    blurb: {
      en: "The primary UI toolkit. Spend the most time here — this is how Android is built today.",
      hi: "मुख्य UI toolkit। सबसे ज़्यादा समय यहीं दीजिए — आज Android ऐसे ही बनता है।",
      "hi-en": "Main UI toolkit. Sabse zyada time yahin do — aaj Android aise hi banta hai.",
    },
    weeks: 4,
    icon: "Layers",
    accent: "violet",
    project: {
      en: "Complete e-commerce UI in Compose with navigation and animations",
      hi: "पूरा e-commerce UI — Compose, navigation और animations के साथ",
      "hi-en": "Poora e-commerce UI — Compose, navigation aur animations ke saath",
    },
    lessons: [
      { slug: "declarative-mindset", title: "The declarative mindset", minutes: 18, difficulty: B, tags: ["declarative", "imperative", "composition"] },
      { slug: "composable-functions", title: "@Composable functions and recomposition", minutes: 24, difficulty: B, tags: ["@Composable", "recomposition", "Composer"] },
      { slug: "state-in-compose", title: "State: remember, mutableStateOf, rememberSaveable", minutes: 26, difficulty: B, tags: ["remember", "mutableStateOf", "rememberSaveable", "by"] },
      { slug: "state-hoisting", title: "State hoisting and unidirectional data flow", minutes: 22, difficulty: I, tags: ["state hoisting", "stateless", "UDF"] },
      { slug: "layouts", title: "Column, Row, Box and arrangement", minutes: 20, difficulty: B, tags: ["Column", "Row", "Box", "Arrangement", "Alignment"] },
      { slug: "modifiers", title: "Modifiers, and why order matters", minutes: 24, difficulty: B, tags: ["Modifier", "padding", "background", "clickable", "fillMaxWidth"] },
      { slug: "core-components", title: "Text, Button, TextField, Card and Scaffold", minutes: 22, difficulty: B, tags: ["Text", "Button", "TextField", "Card", "Scaffold"] },
      { slug: "lazy-lists", title: "LazyColumn, LazyRow, grids and keys", minutes: 24, difficulty: I, tags: ["LazyColumn", "LazyRow", "items", "key", "LazyVerticalGrid"] },
      { slug: "theming", title: "Material 3 theming and dynamic color", minutes: 22, difficulty: I, tags: ["MaterialTheme", "ColorScheme", "Typography", "dynamicColor"] },
      { slug: "side-effects", title: "Side effects: LaunchedEffect, DisposableEffect and friends", minutes: 28, difficulty: A, tags: ["LaunchedEffect", "DisposableEffect", "SideEffect", "produceState", "derivedStateOf"] },
      { slug: "compose-performance", title: "Stability, skipping and debugging recomposition", minutes: 26, difficulty: A, tags: ["@Stable", "@Immutable", "recomposition count", "strong skipping"] },
      { slug: "navigation-compose", title: "Navigation in Compose, type-safe routes", minutes: 26, difficulty: I, tags: ["NavHost", "NavController", "composable", "arguments"] },
      { slug: "animations", title: "Animations: animate*AsState, transitions, Animatable", minutes: 26, difficulty: I, tags: ["animateFloatAsState", "AnimatedVisibility", "updateTransition", "Animatable"] },
      { slug: "gestures", title: "Gestures and pointer input", minutes: 20, difficulty: A, tags: ["clickable", "draggable", "pointerInput", "detectTapGestures"] },
      { slug: "custom-layouts", title: "Custom layouts and Canvas in Compose", minutes: 24, difficulty: A, tags: ["Layout", "Measurable", "Canvas", "drawScope"] },
      { slug: "adaptive-and-interop", title: "Adaptive layouts and View interop", minutes: 20, difficulty: A, tags: ["WindowSizeClass", "AndroidView", "ComposeView"] },
    ],
  },

  {
    number: 7,
    slug: "architecture",
    title: {
      en: "Architecture",
      hi: "Architecture",
      "hi-en": "Architecture",
    },
    blurb: {
      en: "Stop writing code that only you can change. Layers, boundaries and testable design.",
      hi: "ऐसा कोड लिखना बंद कीजिए जिसे सिर्फ़ आप बदल सकें। Layers, boundaries और testable design।",
      "hi-en": "Aisa code likhna band karo jise sirf aap badal sako. Layers, boundaries aur testable design.",
    },
    weeks: 2,
    icon: "Network",
    accent: "sky",
    project: {
      en: "Refactor the previous app into Clean Architecture with modules",
      hi: "पिछले ऐप को Clean Architecture और modules में refactor कीजिए",
      "hi-en": "Pichhle app ko Clean Architecture aur modules mein refactor karo",
    },
    lessons: [
      { slug: "why-architecture", title: "Why architecture — the spaghetti problem", minutes: 16, difficulty: I, tags: ["separation of concerns", "coupling", "cohesion"] },
      { slug: "mvvm", title: "MVVM and the ViewModel", minutes: 24, difficulty: I, tags: ["ViewModel", "viewModelScope", "MVVM"] },
      { slug: "livedata-vs-stateflow", title: "LiveData vs StateFlow", minutes: 18, difficulty: I, tags: ["LiveData", "StateFlow", "collectAsStateWithLifecycle"] },
      { slug: "repository-pattern", title: "The repository pattern and single source of truth", minutes: 22, difficulty: I, tags: ["Repository", "single source of truth"] },
      { slug: "clean-architecture", title: "Clean Architecture: data, domain, presentation", minutes: 28, difficulty: A, tags: ["UseCase", "domain layer", "dependency rule"] },
      { slug: "ui-state-modelling", title: "Modelling UI state with sealed classes", minutes: 20, difficulty: I, tags: ["sealed class", "UiState", "Loading", "Error"] },
      { slug: "mvi", title: "MVI and unidirectional state machines", minutes: 22, difficulty: A, tags: ["MVI", "Intent", "Reducer", "side effect"] },
      { slug: "multi-module", title: "Multi-module projects and build times", minutes: 24, difficulty: A, tags: ["module", "api", "implementation", "convention plugin"] },
    ],
  },

  {
    number: 8,
    slug: "data-layer",
    title: {
      en: "The Data Layer",
      hi: "Data Layer",
      "hi-en": "Data Layer",
    },
    blurb: {
      en: "Network, database, cache and files — built offline-first so the app never feels broken.",
      hi: "Network, database, cache और files — offline-first, ताकि ऐप कभी टूटा न लगे।",
      "hi-en": "Network, database, cache aur files — offline-first, taki app kabhi toota na lage.",
    },
    weeks: 3,
    icon: "Database",
    accent: "emerald",
    project: {
      en: "Offline-first app: API plus Room cache plus pagination",
      hi: "Offline-first ऐप: API + Room cache + pagination",
      "hi-en": "Offline-first app: API + Room cache + pagination",
    },
    lessons: [
      { slug: "http-and-rest", title: "HTTP and REST, from the client's side", minutes: 18, difficulty: B, tags: ["HTTP", "REST", "status code", "header"] },
      { slug: "retrofit", title: "Retrofit: turning an API into an interface", minutes: 26, difficulty: I, tags: ["Retrofit", "@GET", "@POST", "@Query", "@Path", "@Body"] },
      { slug: "okhttp", title: "OkHttp interceptors, auth and timeouts", minutes: 22, difficulty: I, tags: ["OkHttp", "Interceptor", "Authenticator", "timeout"] },
      { slug: "serialization", title: "JSON with kotlinx.serialization and Moshi", minutes: 20, difficulty: I, tags: ["@Serializable", "Moshi", "Gson", "@SerialName"] },
      { slug: "network-errors", title: "Error handling and the Resource wrapper", minutes: 20, difficulty: I, tags: ["sealed class", "Resource", "IOException", "HttpException"] },
      { slug: "room-basics", title: "Room: Entity, DAO and Database", minutes: 28, difficulty: I, tags: ["@Entity", "@Dao", "@Query", "RoomDatabase", "@PrimaryKey"] },
      { slug: "room-advanced", title: "Relations, type converters and migrations", minutes: 26, difficulty: A, tags: ["@Relation", "@Embedded", "@TypeConverter", "Migration"] },
      { slug: "datastore", title: "DataStore, the replacement for SharedPreferences", minutes: 18, difficulty: I, tags: ["DataStore", "Preferences", "Proto DataStore"] },
      { slug: "files-and-storage", title: "Files, scoped storage and MediaStore", minutes: 24, difficulty: A, tags: ["MediaStore", "scoped storage", "SAF", "FileProvider"] },
      { slug: "paging", title: "Paging 3 and endless lists", minutes: 26, difficulty: A, tags: ["PagingSource", "Pager", "RemoteMediator", "LazyPagingItems"] },
      { slug: "offline-first", title: "Offline-first: cache, sync and conflict", minutes: 26, difficulty: A, tags: ["NetworkBoundResource", "sync", "stale data"] },
      { slug: "image-loading", title: "Image loading with Coil", minutes: 16, difficulty: I, tags: ["Coil", "AsyncImage", "placeholder", "memory cache"] },
    ],
  },

  {
    number: 9,
    slug: "dependency-injection",
    title: {
      en: "Dependency Injection",
      hi: "Dependency Injection",
      "hi-en": "Dependency Injection",
    },
    blurb: {
      en: "Stop constructing objects by hand. Wire the app once, swap anything for tests.",
      hi: "हाथ से object बनाना बंद कीजिए। ऐप एक बार wire कीजिए, test में कुछ भी बदल दीजिए।",
      "hi-en": "Haath se object banana band karo. App ek baar wire karo, test mein kuch bhi badal do.",
    },
    weeks: 1,
    icon: "Plug",
    accent: "sky",
    project: {
      en: "Convert the app's manual wiring to Hilt with test doubles",
      hi: "ऐप की manual wiring को Hilt में बदलिए, test doubles के साथ",
      "hi-en": "App ki manual wiring ko Hilt mein badlo, test doubles ke saath",
    },
    lessons: [
      { slug: "why-di", title: "Why DI — the pain of manual wiring", minutes: 16, difficulty: I, tags: ["dependency injection", "inversion of control"] },
      { slug: "hilt-basics", title: "Hilt: @HiltAndroidApp, @Inject, @Module", minutes: 26, difficulty: I, tags: ["@HiltAndroidApp", "@AndroidEntryPoint", "@Inject", "@Module", "@Provides", "@Binds"] },
      { slug: "hilt-scopes", title: "Scopes, qualifiers and component hierarchy", minutes: 22, difficulty: A, tags: ["@Singleton", "@ViewModelScoped", "@Qualifier", "@InstallIn"] },
      { slug: "di-alternatives", title: "Koin, manual DI and the KMP question", minutes: 14, difficulty: A, tags: ["Koin", "service locator", "KMP"] },
    ],
  },

  {
    number: 10,
    slug: "platform-capabilities",
    title: {
      en: "Platform Capabilities",
      hi: "Platform की क्षमताएँ",
      "hi-en": "Platform ki Capabilities",
    },
    blurb: {
      en: "Permissions, background work, notifications, camera, location and the hardware.",
      hi: "Permissions, background work, notifications, camera, location और hardware।",
      "hi-en": "Permissions, background work, notifications, camera, location aur hardware.",
    },
    weeks: 3,
    icon: "Cpu",
    accent: "amber",
    project: {
      en: "Habit tracker with scheduled reminders, widgets and background sync",
      hi: "Habit tracker — scheduled reminders, widgets और background sync के साथ",
      "hi-en": "Habit tracker — scheduled reminders, widgets aur background sync ke saath",
    },
    lessons: [
      { slug: "permissions", title: "Runtime permissions and rationale", minutes: 22, difficulty: I, tags: ["requestPermissions", "shouldShowRequestPermissionRationale", "POST_NOTIFICATIONS"] },
      { slug: "workmanager", title: "WorkManager: constraints, chaining and periodic work", minutes: 28, difficulty: I, tags: ["WorkManager", "CoroutineWorker", "Constraints", "PeriodicWorkRequest"] },
      { slug: "services", title: "Foreground services and their rules", minutes: 24, difficulty: A, tags: ["Service", "startForeground", "foregroundServiceType"] },
      { slug: "notifications", title: "Notifications: channels, styles and deep links", minutes: 24, difficulty: I, tags: ["NotificationChannel", "NotificationCompat", "PendingIntent"] },
      { slug: "broadcasts", title: "BroadcastReceiver and system events", minutes: 18, difficulty: I, tags: ["BroadcastReceiver", "registerReceiver", "BOOT_COMPLETED"] },
      { slug: "alarms-and-doze", title: "AlarmManager, Doze and background limits", minutes: 22, difficulty: A, tags: ["AlarmManager", "setExactAndAllowWhileIdle", "Doze", "App Standby"] },
      { slug: "deep-links", title: "Deep links and App Links", minutes: 20, difficulty: I, tags: ["intent-filter", "App Links", "assetlinks.json"] },
      { slug: "widgets-glance", title: "Home screen widgets with Glance", minutes: 22, difficulty: A, tags: ["Glance", "GlanceAppWidget", "AppWidgetProvider"] },
      { slug: "camerax", title: "CameraX: preview, capture and analysis", minutes: 26, difficulty: A, tags: ["CameraX", "Preview", "ImageCapture", "ImageAnalysis"] },
      { slug: "location", title: "Location and the FusedLocationProvider", minutes: 22, difficulty: A, tags: ["FusedLocationProviderClient", "ACCESS_FINE_LOCATION", "Geofence"] },
      { slug: "sensors-and-bluetooth", title: "Sensors, Bluetooth and BLE basics", minutes: 20, difficulty: A, tags: ["SensorManager", "BluetoothAdapter", "BLE", "GATT"] },
      { slug: "biometrics", title: "Biometric authentication", minutes: 16, difficulty: A, tags: ["BiometricPrompt", "CryptoObject", "Keystore"] },
    ],
  },

  {
    number: 11,
    slug: "testing",
    title: {
      en: "Testing",
      hi: "Testing",
      "hi-en": "Testing",
    },
    blurb: {
      en: "Prove your app works without opening it. Unit, integration and UI tests.",
      hi: "बिना ऐप खोले साबित कीजिए कि वह चलता है। Unit, integration और UI tests।",
      "hi-en": "Bina app khole sabit karo ki wo chalta hai. Unit, integration aur UI tests.",
    },
    weeks: 2,
    icon: "FlaskConical",
    accent: "rose",
    project: {
      en: "Full test suite for the offline-first app, running in CI",
      hi: "Offline-first ऐप के लिए पूरा test suite, CI में चलता हुआ",
      "hi-en": "Offline-first app ke liye poora test suite, CI mein chalta hua",
    },
    lessons: [
      { slug: "testing-pyramid", title: "The testing pyramid and what to test", minutes: 16, difficulty: I, tags: ["unit test", "integration test", "UI test"] },
      { slug: "junit", title: "JUnit: structure, assertions and parameterized tests", minutes: 20, difficulty: I, tags: ["JUnit", "@Test", "assertEquals", "@Before"] },
      { slug: "mockk", title: "MockK: mocks, stubs and verification", minutes: 22, difficulty: I, tags: ["mockk", "every", "verify", "coEvery", "relaxed"] },
      { slug: "testing-coroutines", title: "Testing coroutines and Flow with Turbine", minutes: 26, difficulty: A, tags: ["runTest", "TestDispatcher", "Turbine", "advanceUntilIdle"] },
      { slug: "testing-viewmodels", title: "Testing ViewModels and repositories", minutes: 22, difficulty: I, tags: ["ViewModel", "fake", "MainDispatcherRule"] },
      { slug: "testing-data", title: "Room in-memory tests and MockWebServer", minutes: 22, difficulty: A, tags: ["inMemoryDatabaseBuilder", "MockWebServer", "enqueue"] },
      { slug: "compose-testing", title: "Compose UI testing with semantics", minutes: 24, difficulty: A, tags: ["createComposeRule", "onNodeWithText", "testTag", "semantics"] },
      { slug: "espresso", title: "Espresso for the View system", minutes: 18, difficulty: A, tags: ["Espresso", "onView", "withId", "IdlingResource"] },
    ],
  },

  {
    number: 12,
    slug: "quality-and-security",
    title: {
      en: "Performance, Quality & Security",
      hi: "Performance, गुणवत्ता और सुरक्षा",
      "hi-en": "Performance, Quality aur Security",
    },
    blurb: {
      en: "Make it fast, make it small, make it safe, make it usable by everyone.",
      hi: "तेज़ बनाइए, छोटा बनाइए, सुरक्षित बनाइए, और सबके लिए उपयोगी बनाइए।",
      "hi-en": "Tez banao, chhota banao, safe banao, aur sabke liye usable banao.",
    },
    weeks: 2,
    icon: "Gauge",
    accent: "rose",
    project: {
      en: "Profile and optimize a slow app: startup, memory, size and accessibility",
      hi: "एक धीमे ऐप को profile और optimize कीजिए: startup, memory, size, accessibility",
      "hi-en": "Ek slow app ko profile aur optimize karo: startup, memory, size, accessibility",
    },
    lessons: [
      { slug: "memory-leaks", title: "Memory leaks and LeakCanary", minutes: 22, difficulty: A, tags: ["LeakCanary", "memory leak", "GC root", "WeakReference"] },
      { slug: "profiling", title: "Profiling CPU, memory and network", minutes: 22, difficulty: A, tags: ["Android Profiler", "systrace", "Perfetto"] },
      { slug: "startup-performance", title: "Startup time and Baseline Profiles", minutes: 22, difficulty: A, tags: ["Baseline Profile", "App Startup", "cold start", "Macrobenchmark"] },
      { slug: "app-size", title: "Shrinking the app: R8, ProGuard and resources", minutes: 22, difficulty: A, tags: ["R8", "ProGuard", "shrinkResources", "minifyEnabled"] },
      { slug: "jank-and-anr", title: "Jank, ANRs and StrictMode", minutes: 20, difficulty: A, tags: ["ANR", "StrictMode", "frame drop", "16ms"] },
      { slug: "secrets-and-storage", title: "API keys, Keystore and encrypted storage", minutes: 24, difficulty: A, tags: ["Keystore", "EncryptedSharedPreferences", "BuildConfig", "NDK"] },
      { slug: "network-security", title: "HTTPS, certificate pinning and network config", minutes: 22, difficulty: A, tags: ["network_security_config", "CertificatePinner", "TLS"] },
      { slug: "accessibility", title: "Accessibility: TalkBack, contrast and touch targets", minutes: 22, difficulty: I, tags: ["TalkBack", "contentDescription", "semantics", "WCAG"] },
      { slug: "static-analysis", title: "Lint, Detekt and ktlint in the build", minutes: 16, difficulty: I, tags: ["Lint", "Detekt", "ktlint", "baseline"] },
    ],
  },

  {
    number: 13,
    slug: "backend-integration",
    title: {
      en: "Backend & Firebase",
      hi: "Backend और Firebase",
      "hi-en": "Backend aur Firebase",
    },
    blurb: {
      en: "Auth, realtime data, push notifications and crash reporting — without running a server.",
      hi: "Auth, realtime data, push notifications और crash reporting — बिना सर्वर चलाए।",
      "hi-en": "Auth, realtime data, push notifications aur crash reporting — bina server chalaye.",
    },
    weeks: 2,
    icon: "Cloud",
    accent: "sky",
    project: {
      en: "Realtime chat app with authentication and push notifications",
      hi: "Realtime chat ऐप — authentication और push notifications के साथ",
      "hi-en": "Realtime chat app — authentication aur push notifications ke saath",
    },
    lessons: [
      { slug: "firebase-setup", title: "Firebase setup and the BoM", minutes: 16, difficulty: I, tags: ["Firebase", "google-services.json", "BoM"] },
      { slug: "firebase-auth", title: "Authentication: email, Google and phone OTP", minutes: 26, difficulty: I, tags: ["FirebaseAuth", "GoogleSignIn", "Credential Manager", "OTP"] },
      { slug: "firestore", title: "Firestore: documents, queries and listeners", minutes: 26, difficulty: I, tags: ["Firestore", "snapshotListener", "security rules"] },
      { slug: "fcm", title: "Push notifications with FCM", minutes: 24, difficulty: A, tags: ["FirebaseMessagingService", "FCM token", "data message"] },
      { slug: "firebase-extras", title: "Storage, Crashlytics, Analytics and Remote Config", minutes: 20, difficulty: I, tags: ["Firebase Storage", "Crashlytics", "Analytics", "Remote Config"] },
      { slug: "oauth-and-tokens", title: "OAuth 2.0, token refresh and secure sessions", minutes: 24, difficulty: A, tags: ["OAuth", "refresh token", "Authenticator", "PKCE"] },
      { slug: "realtime-sockets", title: "WebSockets and realtime without Firebase", minutes: 20, difficulty: A, tags: ["WebSocket", "OkHttp", "Ktor", "Supabase"] },
    ],
  },

  {
    number: 14,
    slug: "release",
    title: {
      en: "Release & Professional Workflow",
      hi: "Release और प्रोफेशनल वर्कफ़्लो",
      "hi-en": "Release aur Professional Workflow",
    },
    blurb: {
      en: "Signing, the Play Console, staged rollout, CI/CD and monetization.",
      hi: "Signing, Play Console, staged rollout, CI/CD और monetization।",
      "hi-en": "Signing, Play Console, staged rollout, CI/CD aur monetization.",
    },
    weeks: 1,
    icon: "Rocket",
    accent: "emerald",
    project: {
      en: "Ship an app to the Play Store internal testing track through GitHub Actions",
      hi: "GitHub Actions से ऐप को Play Store के internal testing track पर भेजिए",
      "hi-en": "GitHub Actions se app ko Play Store ke internal testing track par bhejo",
    },
    lessons: [
      { slug: "build-variants", title: "Build types, flavors and variants", minutes: 20, difficulty: I, tags: ["buildTypes", "productFlavors", "sourceSets"] },
      { slug: "signing", title: "Keystores, signing and Play App Signing", minutes: 20, difficulty: I, tags: ["keystore", "signingConfig", "Play App Signing"] },
      { slug: "play-console", title: "Play Console, AAB and store listing", minutes: 22, difficulty: I, tags: ["AAB", "bundletool", "store listing", "Data safety"] },
      { slug: "release-tracks", title: "Testing tracks and staged rollout", minutes: 18, difficulty: I, tags: ["internal testing", "closed testing", "staged rollout"] },
      { slug: "play-policies", title: "Play policies, target API and data safety", minutes: 20, difficulty: I, tags: ["target API level", "privacy policy", "policy violation"] },
      { slug: "ci-cd", title: "CI/CD with GitHub Actions", minutes: 24, difficulty: A, tags: ["GitHub Actions", "workflow", "secrets", "fastlane"] },
      { slug: "monetization", title: "AdMob, in-app purchases and subscriptions", minutes: 22, difficulty: A, tags: ["AdMob", "Billing Library", "subscription", "purchase verification"] },
    ],
  },

  {
    number: 15,
    slug: "specialization",
    title: {
      en: "Specialization",
      hi: "विशेषज्ञता",
      "hi-en": "Specialization",
    },
    blurb: {
      en: "Optional tracks that make you rare: multiplatform, native, media and on-device ML.",
      hi: "वैकल्पिक ट्रैक जो आपको अलग बनाते हैं: multiplatform, native, media और on-device ML।",
      "hi-en": "Optional tracks jo aapko alag banate hain: multiplatform, native, media aur on-device ML.",
    },
    weeks: 4,
    icon: "Sparkles",
    accent: "violet",
    project: {
      en: "Pick one track and ship a portfolio-grade app in it",
      hi: "एक ट्रैक चुनिए और उसमें portfolio-स्तर का ऐप बनाइए",
      "hi-en": "Ek track chuno aur usmein portfolio-level app banao",
    },
    lessons: [
      { slug: "kmp", title: "Kotlin Multiplatform and Compose Multiplatform", minutes: 30, difficulty: A, tags: ["KMP", "expect", "actual", "commonMain", "Compose Multiplatform"] },
      { slug: "gradle-advanced", title: "Convention plugins and build performance", minutes: 26, difficulty: A, tags: ["convention plugin", "buildSrc", "configuration cache"] },
      { slug: "ksp", title: "KSP and code generation", minutes: 24, difficulty: A, tags: ["KSP", "annotation processing", "SymbolProcessor"] },
      { slug: "ndk", title: "NDK and JNI for native code", minutes: 24, difficulty: A, tags: ["NDK", "JNI", "CMake", "external fun"] },
      { slug: "media3", title: "Media3 and ExoPlayer", minutes: 26, difficulty: A, tags: ["Media3", "ExoPlayer", "MediaSession", "HLS", "DASH"] },
      { slug: "on-device-ml", title: "On-device ML: ML Kit and TensorFlow Lite", minutes: 24, difficulty: A, tags: ["ML Kit", "TensorFlow Lite", "Gemini Nano", "text recognition"] },
      { slug: "design-patterns", title: "Design patterns that actually appear in Android", minutes: 22, difficulty: A, tags: ["Observer", "Factory", "Strategy", "Builder", "Adapter"] },
      { slug: "interview-prep", title: "Interview preparation and system design", minutes: 30, difficulty: A, tags: ["interview", "system design", "DSA", "behavioural"] },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Derived helpers
 * ------------------------------------------------------------------ */

export type LessonRef = {
  phase: Phase;
  lesson: Lesson;
  /** `<phaseSlug>/<lessonSlug>` — the canonical lesson path. */
  path: string;
  index: number;
};

export const ALL_LESSONS: LessonRef[] = CURRICULUM.flatMap((phase) =>
  phase.lessons.map((lesson) => ({
    phase,
    lesson,
    path: `${phase.slug}/${lesson.slug}`,
    index: 0,
  })),
).map((ref, index) => ({ ...ref, index }));

export function findLesson(path: string): LessonRef | undefined {
  return ALL_LESSONS.find((ref) => ref.path === path);
}

export function findPhase(slug: string): Phase | undefined {
  return CURRICULUM.find((phase) => phase.slug === slug);
}

export function neighbours(path: string): { prev?: LessonRef; next?: LessonRef } {
  const current = findLesson(path);
  if (!current) return {};
  return {
    prev: ALL_LESSONS[current.index - 1],
    next: ALL_LESSONS[current.index + 1],
  };
}

export const STATS = {
  phases: CURRICULUM.length,
  lessons: ALL_LESSONS.length,
  minutes: ALL_LESSONS.reduce((sum, ref) => sum + ref.lesson.minutes, 0),
  get hours() {
    return Math.round(this.minutes / 60);
  },
  projects: CURRICULUM.length,
  weeks: CURRICULUM.reduce((sum, phase) => sum + phase.weeks, 0),
};

export function lessonHref(lang: Lang, path: string): string {
  return `/${lang}/learn/${path}`;
}

export function phaseHref(lang: Lang, slug: string): string {
  return `/${lang}/curriculum#${slug}`;
}
