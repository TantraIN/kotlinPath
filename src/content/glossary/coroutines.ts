import type { Glossary } from "./types";

/** kotlinx.coroutines — the asynchronous half of Kotlin. */
export const COROUTINES_GLOSSARY: Glossary = {
  suspend: {
    term: "suspend",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Marks a function that can pause without blocking the thread it runs on, and resume later.",
      hi: "ऐसे function को चिह्नित करता है जो अपने thread को रोके बिना रुक सकता है और बाद में फिर चल सकता है।",
      "hi-en": "Aise function ko mark karta hai jo apne thread ko roke bina ruk sakta hai aur baad mein phir chal sakta hai.",
    },
    affects: {
      en: "A `suspend` function can only be called from another `suspend` function or from a coroutine builder. The compiler rewrites it into a state machine and adds a hidden `Continuation` parameter — which is why Java cannot call it directly.",
      hi: "`suspend` function को सिर्फ दूसरे `suspend` function या coroutine builder से बुलाया जा सकता है। Compiler इसे state machine में बदल देता है और एक छिपा हुआ `Continuation` parameter जोड़ता है — इसीलिए Java इसे सीधे नहीं बुला सकता।",
      "hi-en": "`suspend` function ko sirf dusre `suspend` function ya coroutine builder se bulaya ja sakta hai. Compiler ise state machine mein badal deta hai aur ek chhipa hua `Continuation` parameter jodta hai — isiliye Java ise seedha nahi bula sakta.",
    },
    docs: "https://kotlinlang.org/docs/coroutines-basics.html",
    related: ["launch", "withContext", "CoroutineScope"],
  },

  launch: {
    term: "launch",
    kind: { en: "Coroutine builder", hi: "Coroutine builder", "hi-en": "Coroutine builder" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.launch",
    does: {
      en: "Starts a new coroutine that runs concurrently and returns a `Job` handle, not a result.",
      hi: "एक नया coroutine शुरू करता है जो साथ-साथ चलता है और result नहीं, `Job` handle लौटाता है।",
      "hi-en": "Ek naya coroutine shuru karta hai jo saath-saath chalta hai aur result nahi, `Job` handle lautata hai.",
    },
    values: {
      en: "A `CoroutineContext` — usually a dispatcher — and `start`, which takes `CoroutineStart.DEFAULT`, `LAZY`, `ATOMIC` or `UNDISPATCHED`.",
      hi: "एक `CoroutineContext` — आम तौर पर कोई dispatcher — और `start`, जिसमें `CoroutineStart.DEFAULT`, `LAZY`, `ATOMIC` या `UNDISPATCHED` आता है।",
      "hi-en": "Ek `CoroutineContext` — aam taur par koi dispatcher — aur `start`, jismein `CoroutineStart.DEFAULT`, `LAZY`, `ATOMIC` ya `UNDISPATCHED` aata hai.",
    },
    affects: {
      en: "It is fire-and-forget. An exception inside `launch` propagates up and cancels the parent scope unless a `SupervisorJob` or `CoroutineExceptionHandler` stops it. Use `async` when you need the value back.",
      hi: "यह fire-and-forget है। `launch` के अंदर exception ऊपर जाकर parent scope को cancel कर देता है, जब तक `SupervisorJob` या `CoroutineExceptionHandler` न रोके। Value चाहिए तो `async` इस्तेमाल कीजिए।",
      "hi-en": "Ye fire-and-forget hai. `launch` ke andar exception upar jaakar parent scope ko cancel kar deta hai, jab tak `SupervisorJob` ya `CoroutineExceptionHandler` na roke. Value chahiye to `async` use karo.",
    },
    docs: "https://kotlinlang.org/docs/coroutines-basics.html",
    related: ["async", "CoroutineScope", "Job"],
  },

  async: {
    term: "async",
    kind: { en: "Coroutine builder", hi: "Coroutine builder", "hi-en": "Coroutine builder" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.async",
    does: {
      en: "Starts a concurrent coroutine that produces a value, returned as a `Deferred<T>`.",
      hi: "एक concurrent coroutine शुरू करता है जो value बनाता है, और उसे `Deferred<T>` की तरह लौटाता है।",
      "hi-en": "Ek concurrent coroutine shuru karta hai jo value banata hai, aur use `Deferred<T>` ki tarah lautata hai.",
    },
    values: {
      en: "The same context and `start` values as `launch`. `CoroutineStart.LAZY` holds the work back until the first `await`.",
      hi: "`launch` जैसे ही context और `start` की values। `CoroutineStart.LAZY` काम को पहले `await` तक रोके रखता है।",
      "hi-en": "`launch` jaise hi context aur `start` ki values. `CoroutineStart.LAZY` kaam ko pehle `await` tak roke rakhta hai.",
    },
    affects: {
      en: "Nothing runs in parallel unless you start both `async` blocks before calling `await` on either. Calling `await` immediately makes it sequential — the single most common coroutine mistake.",
      hi: "जब तक दोनों `async` block पहले शुरू न करें और बाद में `await` न करें, कुछ भी parallel नहीं चलता। तुरंत `await` करने से यह sequential हो जाता है — coroutines की सबसे आम गलती।",
      "hi-en": "Jab tak dono `async` block pehle shuru na karo aur baad mein `await` na karo, kuch bhi parallel nahi chalta. Turant `await` karne se ye sequential ho jata hai — coroutines ki sabse common galti.",
    },
    docs: "https://kotlinlang.org/docs/composing-suspending-functions.html",
    related: ["launch", "await"],
  },

  withContext: {
    term: "withContext",
    kind: { en: "Suspending function", hi: "Suspending function", "hi-en": "Suspending function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.withContext",
    does: {
      en: "Runs a block on a different dispatcher and suspends until it finishes, returning its result.",
      hi: "किसी block को अलग dispatcher पर चलाता है और उसके पूरा होने तक रुका रहता है, फिर result लौटाता है।",
      "hi-en": "Kisi block ko alag dispatcher par chalata hai aur uske poora hone tak ruka rehta hai, phir result lautata hai.",
    },
    values: {
      en: "Any `CoroutineContext`: a dispatcher, a `CoroutineName` for the debugger, or `NonCancellable` for cleanup that must finish.",
      hi: "कोई भी `CoroutineContext`: कोई dispatcher, debugger के लिए `CoroutineName`, या ऐसी सफाई के लिए `NonCancellable` जो पूरी होनी ही चाहिए।",
      "hi-en": "Koi bhi `CoroutineContext`: koi dispatcher, debugger ke liye `CoroutineName`, ya aisi safai ke liye `NonCancellable` jo poori honi hi chahiye.",
    },
    affects: {
      en: "This is how you move blocking work off the main thread. It does not create concurrency — the caller waits. Put it inside the repository, not at the call site, so callers never have to think about threads.",
      hi: "Blocking काम को main thread से हटाने का यही तरीका है। यह concurrency नहीं बनाता — caller इंतजार करता है। इसे repository के अंदर रखिए, call site पर नहीं, ताकि caller को thread की चिंता ही न करनी पड़े।",
      "hi-en": "Blocking kaam ko main thread se hatane ka yahi tarika hai. Ye concurrency nahi banata — caller intezaar karta hai. Ise repository ke andar rakho, call site par nahi, taki caller ko thread ki chinta hi na karni pade.",
    },
    docs: "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html",
    related: ["Dispatchers", "suspend"],
  },

  Dispatchers: {
    term: "Dispatchers",
    kind: { en: "Object", hi: "Object", "hi-en": "Object" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.Dispatchers",
    does: {
      en: "Provides the thread pools a coroutine can run on: `Main`, `IO`, `Default` and `Unconfined`.",
      hi: "वे thread pools देता है जिन पर coroutine चल सकता है: `Main`, `IO`, `Default` और `Unconfined`।",
      "hi-en": "Wo thread pools deta hai jin par coroutine chal sakta hai: `Main`, `IO`, `Default` aur `Unconfined`.",
    },
    values: {
      en: "`Main` for UI, `IO` for waiting work, `Default` for computation, `Main.immediate` to skip a re-dispatch when already on Main, and `Unconfined` which you almost never want.",
      hi: "UI के लिए `Main`, इंतजार वाले काम के लिए `IO`, गिनती के लिए `Default`, पहले से Main पर हों तो दोबारा भेजने से बचने के लिए `Main.immediate`, और `Unconfined` जो लगभग कभी नहीं चाहिए।",
      "hi-en": "UI ke liye `Main`, intezaar wale kaam ke liye `IO`, ginti ke liye `Default`, pehle se Main par ho to dobara bhejne se bachne ke liye `Main.immediate`, aur `Unconfined` jo lagbhag kabhi nahi chahiye.",
    },
    affects: {
      en: "`Main` touches the UI, `IO` is for network and disk (many threads, mostly waiting), `Default` is for CPU work (one thread per core). Choosing wrongly either freezes the UI or starves the CPU pool.",
      hi: "`Main` UI छूता है, `IO` network और disk के लिए है (कई threads, ज्यादातर इंतजार में), `Default` CPU काम के लिए है (हर core पर एक thread)। गलत चुनने पर या तो UI जम जाता है या CPU pool भूखा रह जाता है।",
      "hi-en": "`Main` UI chhuta hai, `IO` network aur disk ke liye hai (kai threads, zyadatar intezaar mein), `Default` CPU kaam ke liye hai (har core par ek thread). Galat chunne par ya to UI jam jata hai ya CPU pool bhookha reh jata hai.",
    },
    docs: "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html",
    related: ["withContext", "CoroutineScope"],
  },

  CoroutineScope: {
    term: "CoroutineScope",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.CoroutineScope",
    does: {
      en: "Defines the lifetime of the coroutines started inside it, so they can all be cancelled together.",
      hi: "अपने अंदर शुरू हुए coroutines की उम्र तय करता है, ताकि सबको एक साथ cancel किया जा सके।",
      "hi-en": "Apne andar shuru huye coroutines ki umar tay karta hai, taki sabko ek saath cancel kiya ja sake.",
    },
    values: {
      en: "Context elements joined with `+`: a `Job` or `SupervisorJob`, a dispatcher, a `CoroutineName`, and a `CoroutineExceptionHandler`.",
      hi: "`+` से जुड़े हुए context के हिस्से: `Job` या `SupervisorJob`, कोई dispatcher, `CoroutineName`, और `CoroutineExceptionHandler`।",
      "hi-en": "`+` se jude hue context ke hisse: `Job` ya `SupervisorJob`, koi dispatcher, `CoroutineName`, aur `CoroutineExceptionHandler`.",
    },
    affects: {
      en: "This is what structured concurrency means: no coroutine outlives its scope. On Android you almost never create one by hand — use `viewModelScope` or `lifecycleScope`, which cancel automatically.",
      hi: "यही structured concurrency है: कोई coroutine अपने scope से ज्यादा नहीं जीता। Android पर इसे हाथ से बनाने की जरूरत लगभग कभी नहीं — `viewModelScope` या `lifecycleScope` इस्तेमाल कीजिए, जो अपने आप cancel हो जाते हैं।",
      "hi-en": "Yahi structured concurrency hai: koi coroutine apne scope se zyada nahi jeeta. Android par ise haath se banane ki zarurat lagbhag kabhi nahi — `viewModelScope` ya `lifecycleScope` use karo, jo apne aap cancel ho jate hain.",
    },
    docs: "https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency",
    related: ["viewModelScope", "launch", "Job"],
  },

  viewModelScope: {
    term: "viewModelScope",
    kind: { en: "Extension property", hi: "Extension property", "hi-en": "Extension property" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.viewModelScope",
    does: {
      en: "A `CoroutineScope` attached to a `ViewModel`, running on `Dispatchers.Main.immediate`.",
      hi: "`ViewModel` से जुड़ा एक `CoroutineScope`, जो `Dispatchers.Main.immediate` पर चलता है।",
      "hi-en": "`ViewModel` se juda ek `CoroutineScope`, jo `Dispatchers.Main.immediate` par chalta hai.",
    },
    affects: {
      en: "Every coroutine in it is cancelled automatically when `onCleared()` runs, so work stops when the screen is truly gone — not on rotation. This is what prevents the classic 'update the UI after the screen died' crash.",
      hi: "`onCleared()` चलते ही इसके सारे coroutines अपने आप cancel हो जाते हैं, इसलिए काम तब रुकता है जब screen सच में जा चुकी हो — rotation पर नहीं। यही 'screen मरने के बाद UI update' वाले क्लासिक crash को रोकता है।",
      "hi-en": "`onCleared()` chalte hi iske saare coroutines apne aap cancel ho jate hain, isliye kaam tab rukta hai jab screen sach mein ja chuki ho — rotation par nahi. Yahi 'screen marne ke baad UI update' wale classic crash ko rokta hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/coroutines",
    related: ["CoroutineScope", "ViewModel"],
  },

  Flow: {
    term: "Flow",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.Flow",
    does: {
      en: "Represents a stream of values produced over time, delivered asynchronously.",
      hi: "समय के साथ बनने वाली values की एक धारा है, जो asynchronously पहुँचती है।",
      "hi-en": "Samay ke saath banne wali values ki ek dhara hai, jo asynchronously pahunchti hai.",
    },
    affects: {
      en: "A `Flow` is cold: nothing runs until something calls `collect`, and each collector triggers a fresh execution. Collecting is a suspending call, so it needs a coroutine and it respects cancellation.",
      hi: "`Flow` cold है: जब तक कोई `collect` न करे कुछ नहीं चलता, और हर collector के लिए दोबारा चलता है। `collect` suspending है, इसलिए coroutine चाहिए और cancellation मानता है।",
      "hi-en": "`Flow` cold hai: jab tak koi `collect` na kare kuch nahi chalta, aur har collector ke liye dobara chalta hai. `collect` suspending hai, isliye coroutine chahiye aur cancellation manta hai.",
    },
    docs: "https://kotlinlang.org/docs/flow.html",
    related: ["StateFlow", "collect", "suspend"],
  },

  StateFlow: {
    term: "StateFlow",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.StateFlow",
    does: {
      en: "A hot `Flow` that always holds exactly one current value and replays it to every new collector.",
      hi: "एक hot `Flow` जो हमेशा एक मौजूदा value रखता है और हर नए collector को वही तुरंत दे देता है।",
      "hi-en": "Ek hot `Flow` jo hamesha ek current value rakhta hai aur har naye collector ko wahi turant de deta hai.",
    },
    values: {
      en: "When built with `stateIn`, the sharing policy is `SharingStarted.Eagerly`, `Lazily`, or `WhileSubscribed(stopTimeoutMillis)` — 5000 being the usual Android choice.",
      hi: "`stateIn` से बनाते वक्त sharing की नीति `SharingStarted.Eagerly`, `Lazily`, या `WhileSubscribed(stopTimeoutMillis)` होती है — Android पर आम चुनाव 5000 है।",
      "hi-en": "`stateIn` se banate waqt sharing ki niti `SharingStarted.Eagerly`, `Lazily`, ya `WhileSubscribed(stopTimeoutMillis)` hoti hai — Android par aam chunav 5000 hai.",
    },
    affects: {
      en: "It conflates and de-duplicates: emitting the same value twice notifies nobody, so your `data class` must implement `equals` correctly or updates will be silently dropped. This is the standard type for UI state.",
      hi: "यह conflate और de-duplicate करता है: एक ही value दो बार भेजने पर किसी को खबर नहीं होती, इसलिए आपकी `data class` का `equals` सही होना चाहिए वरना updates चुपचाप गिर जाएँगे। UI state के लिए यही मानक type है।",
      "hi-en": "Ye conflate aur de-duplicate karta hai: ek hi value do baar bhejne par kisi ko khabar nahi hoti, isliye aapki `data class` ka `equals` sahi hona chahiye warna updates chupchap gir jayenge. UI state ke liye yahi standard type hai.",
    },
    docs: "https://kotlinlang.org/docs/flow.html#stateflow",
    related: ["Flow", "data", "collectAsStateWithLifecycle"],
  },

  collect: {
    term: "collect",
    kind: { en: "Suspending function", hi: "Suspending function", "hi-en": "Suspending function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.collect",
    does: {
      en: "Subscribes to a `Flow` and runs a block for every value it emits.",
      hi: "किसी `Flow` को subscribe करता है और उसकी हर value पर दिया गया block चलाता है।",
      "hi-en": "Kisi `Flow` ko subscribe karta hai aur uski har value par diya gaya block chalata hai.",
    },
    affects: {
      en: "It suspends forever until the flow completes or the coroutine is cancelled — so any code written after it will not run for an infinite flow such as a `StateFlow`.",
      hi: "यह तब तक रुका रहता है जब तक flow खत्म न हो या coroutine cancel न हो — इसलिए `StateFlow` जैसे अनंत flow के बाद लिखा कोई भी code कभी नहीं चलेगा।",
      "hi-en": "Ye tab tak ruka rehta hai jab tak flow khatam na ho ya coroutine cancel na ho — isliye `StateFlow` jaise anant flow ke baad likha koi bhi code kabhi nahi chalega.",
    },
    docs: "https://kotlinlang.org/docs/flow.html",
    related: ["Flow", "StateFlow"],
  },

  MutableStateFlow: {
    term: "MutableStateFlow",
    kind: { en: "Coroutines function", hi: "Coroutines function", "hi-en": "Coroutines function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.MutableStateFlow",
    does: {
      en: "Creates a `StateFlow` you can write to, holding a current value from the moment it is built.",
      hi: "ऐसा `StateFlow` बनाता है जिसमें आप लिख सकते हैं, और जो बनते ही एक मौजूदा value रखता है।",
      "hi-en": "Aisa `StateFlow` banata hai jismein aap likh sakte ho, aur jo bante hi ek maujooda value rakhta hai.",
    },
    affects: {
      en: "Keep the mutable one `private` and expose `asStateFlow()`, or any caller can write your state. It also drops emissions equal to the current value by `equals`, which is why the state it holds should be a `data class`.",
      hi: "Mutable वाले को `private` रखिए और बाहर `asStateFlow()` दीजिए, वरना कोई भी बुलाने वाला आपका state लिख सकता है। यह `equals` से मौजूदा value के बराबर emissions छोड़ भी देता है, इसीलिए जो state यह रखता है वह `data class` होनी चाहिए।",
      "hi-en": "Mutable wale ko `private` rakho aur bahar `asStateFlow()` do, warna koi bhi bulane wala aapka state likh sakta hai. Ye `equals` se maujooda value ke barabar emissions chhod bhi deta hai, isiliye jo state ye rakhta hai wo `data class` honi chahiye.",
    },
    docs: "https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-state-flow.html",
    related: ["StateFlow", "Flow", "collect"],
  },
};
