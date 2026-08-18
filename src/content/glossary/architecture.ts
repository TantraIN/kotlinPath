import type { Glossary } from "./types";

/**
 * Architecture: the state holders, flow builders and result types that make up
 * the presentation and data layers.
 *
 * Most of these answer the same pair of questions — who owns this value, and
 * when does it stop — which is why they sit together rather than in the
 * coroutines or Android sets.
 */
export const ARCHITECTURE_GLOSSARY: Glossary = {
  asStateFlow: {
    term: "asStateFlow",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.asStateFlow",
    does: {
      en: "Exposes a `MutableStateFlow` as a read-only `StateFlow`.",
      hi: "किसी `MutableStateFlow` को सिर्फ पढ़े जा सकने वाले `StateFlow` की तरह बाहर देता है।",
      "hi-en": "Kisi `MutableStateFlow` ko sirf padhe ja sakne wale `StateFlow` ki tarah bahar deta hai.",
    },
    affects: {
      en: "Without it, anything holding the reference can write to your screen state, and a bug becomes a search through every file that touched it. Keep the mutable one private and expose this, and change it with `update { it.copy(...) }` rather than reading `.value` and assigning back, which two coroutines can interleave and lose.",
      hi: "इसके बिना जिसके पास वह reference है वह आपकी screen की state में लिख सकता है, और कोई bug उन सारी files में खोज बन जाता है जिन्होंने उसे छुआ। बदली जा सकने वाली को private रखिए और यह बाहर दीजिए, और उसे `.value` पढ़कर वापस रखने के बजाय `update { it.copy(...) }` से बदलिए — पहला तरीका दो coroutines बीच में घुसकर खो सकते हैं।",
      "hi-en": "Iske bina jiske paas wo reference hai wo aapki screen ki state mein likh sakta hai, aur koi bug un saari files mein khoj ban jata hai jinhone use chhua. Badli ja sakne wali ko private rakhiye aur ye bahar dijiye, aur use `.value` padhkar wapas rakhne ke bajaye `update { it.copy(...) }` se badliye — pehla tarika do coroutines beech mein ghuskar kho sakte hain.",
    },
    related: ["StateFlow", "MutableStateFlow"],
  },

  SharedFlow: {
    term: "SharedFlow",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.SharedFlow",
    does: {
      en: "A hot flow that broadcasts to every collector, with no current value of its own.",
      hi: "एक गर्म flow, जो हर collector तक पहुँचता है और जिसकी अपनी कोई मौजूदा value नहीं होती।",
      "hi-en": "Ek garm flow, jo har collector tak pahunchta hai aur jiski apni koi maujooda value nahi hoti.",
    },
    values: {
      en: "`replay` decides how many past emissions a new collector receives — `0` for events that must not repeat.",
      hi: "`replay` तय करता है कि नए collector को पिछली कितनी चीजें मिलें — जिन घटनाओं को दोहराना नहीं है उनके लिए `0`।",
      "hi-en": "`replay` tay karta hai ki naye collector ko pichhli kitni cheezein milein — jin ghatnaon ko doharana nahi hai unke liye `0`.",
    },
    affects: {
      en: "This is where one-off things belong. `StateFlow` conflates equal values, so two identical errors sent through it deliver once, and its current value is replayed to the next screen after a rotation.",
      hi: "एक बार होने वाली चीजें यहीं की हैं। `StateFlow` एक जैसी values दबा देता है, तो उससे भेजी गई दो एक जैसी errors एक ही बार पहुँचती हैं, और rotation के बाद उसकी मौजूदा value नई screen को दोबारा मिल जाती है।",
      "hi-en": "Ek baar hone wali cheezein yahin ki hain. `StateFlow` ek jaisi values daba deta hai, to usse bheji gayi do ek jaisi errors ek hi baar pahunchti hain, aur rotation ke baad uski maujooda value nai screen ko dobara mil jati hai.",
    },
    related: ["StateFlow", "Channel", "Flow"],
  },

  Channel: {
    term: "Channel",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.channels.Channel",
    does: {
      en: "A queue between coroutines, where each item is delivered to exactly one receiver.",
      hi: "Coroutines के बीच एक कतार, जिसमें हर चीज ठीक एक ही लेने वाले तक पहुँचती है।",
      "hi-en": "Coroutines ke beech ek line, jismein har cheez theek ek hi lene wale tak pahunchti hai.",
    },
    values: {
      en: "`Channel.BUFFERED`, `RENDEZVOUS`, `CONFLATED` and `UNLIMITED` decide what happens when nobody is receiving yet.",
      hi: "`Channel.BUFFERED`, `RENDEZVOUS`, `CONFLATED` और `UNLIMITED` तय करते हैं कि जब कोई ले ही नहीं रहा तब क्या होगा।",
      "hi-en": "`Channel.BUFFERED`, `RENDEZVOUS`, `CONFLATED` aur `UNLIMITED` tay karte hain ki jab koi le hi nahi raha tab kya hoga.",
    },
    affects: {
      en: "Exactly-once delivery is what makes it right for navigation and one-off effects — but it also means an event sent while no screen is collecting is either buffered or dropped, so check the capacity you chose.",
      hi: "ठीक एक बार पहुँचना ही इसे navigation और एक बार होने वाले effects के लिए सही बनाता है — पर इसका मतलब यह भी है कि जिस वक्त कोई screen collect नहीं कर रही उस वक्त भेजी गई घटना या तो रुकी रहती है या गिर जाती है, तो अपनी चुनी हुई क्षमता देख लीजिए।",
      "hi-en": "Theek ek baar pahunchna hi ise navigation aur ek baar hone wale effects ke liye sahi banata hai — par iska matlab ye bhi hai ki jis waqt koi screen collect nahi kar rahi us waqt bheji gayi ghatna ya to ruki rehti hai ya gir jati hai, to apni chuni hui kshamta dekh lijiye.",
    },
    related: ["SharedFlow", "Flow", "viewModelScope"],
  },

  stateIn: {
    term: "stateIn",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.stateIn",
    does: {
      en: "Runs a cold flow once in a scope and shares its latest value as a `StateFlow`.",
      hi: "किसी ठंडे flow को एक scope में एक बार चलाता है और उसकी ताजा value `StateFlow` की तरह सबमें बाँटता है।",
      "hi-en": "Kisi thande flow ko ek scope mein ek baar chalata hai aur uski taza value `StateFlow` ki tarah sabmein baantta hai.",
    },
    affects: {
      en: "Without it, two collectors run the upstream twice — two database queries for one screen. It needs an initial value, because a `StateFlow` always has one.",
      hi: "इसके बिना दो collectors ऊपर वाले flow को दो बार चलाते हैं — एक screen के लिए दो database queries। इसे शुरुआती value चाहिए, क्योंकि `StateFlow` के पास हमेशा एक होती है।",
      "hi-en": "Iske bina do collectors upar wale flow ko do baar chalate hain — ek screen ke liye do database queries. Ise shuruati value chahiye, kyunki `StateFlow` ke paas hamesha ek hoti hai.",
    },
    related: ["SharingStarted", "StateFlow", "viewModelScope"],
  },

  SharingStarted: {
    term: "SharingStarted",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.flow.SharingStarted",
    does: {
      en: "Decides when a shared flow starts and stops running its upstream.",
      hi: "तय करता है कि साझा किया गया flow अपने ऊपर वाले को कब चलाना शुरू और कब बंद करे।",
      "hi-en": "Tay karta hai ki share kiya gaya flow apne upar wale ko kab chalana shuru aur kab band kare.",
    },
    values: {
      en: "`Eagerly` starts at once and never stops. `Lazily` starts on the first collector and never stops. `WhileSubscribed(ms)` stops that many milliseconds after the last collector leaves.",
      hi: "`Eagerly` तुरंत शुरू होता है और कभी नहीं रुकता। `Lazily` पहले collector पर शुरू होता है और कभी नहीं रुकता। `WhileSubscribed(ms)` आखिरी collector के जाने के उतने milliseconds बाद रुक जाता है।",
      "hi-en": "`Eagerly` turant shuru hota hai aur kabhi nahi rukta. `Lazily` pehle collector par shuru hota hai aur kabhi nahi rukta. `WhileSubscribed(ms)` aakhri collector ke jane ke utne milliseconds baad ruk jata hai.",
    },
    affects: {
      en: "`WhileSubscribed(5_000)` is the usual choice, and the number is not magic: five seconds is comfortably longer than a configuration change and comfortably shorter than a user's attention elsewhere. `WhileSubscribed(0)` restarts the query on every rotation.",
      hi: "आम चुनाव `WhileSubscribed(5_000)` है, और यह आँकड़ा जादुई नहीं: पाँच सेकंड configuration बदलने से आराम से लंबे हैं और user के कहीं और ध्यान लगाने से आराम से छोटे। `WhileSubscribed(0)` हर rotation पर query दोबारा शुरू कर देता है।",
      "hi-en": "Aam chunaav `WhileSubscribed(5_000)` hai, aur ye aankda jaadui nahi: paanch second configuration badalne se aaram se lambe hain aur user ke kahin aur dhyan lagane se aaram se chhote. `WhileSubscribed(0)` har rotation par query dobara shuru kar deta hai.",
    },
    related: ["stateIn", "StateFlow"],
  },

  LiveData: {
    term: "LiveData",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.LiveData",
    does: {
      en: "An observable value holder that is lifecycle-aware by construction.",
      hi: "नजर रखी जा सकने वाली एक value, जो बनावट से ही lifecycle समझती है।",
      "hi-en": "Nazar rakhi ja sakne wali ek value, jo banawat se hi lifecycle samajhti hai.",
    },
    affects: {
      en: "Delivery stops below `STARTED` without any helper, which is what `StateFlow` leaves to the collector. It is Android-only and untestable without instrumentation, so new code uses `StateFlow` — but every codebase older than a couple of years still has it.",
      hi: "`STARTED` से नीचे बिना किसी helper के देना रुक जाता है — वही चीज `StateFlow` collector पर छोड़ देता है। यह सिर्फ Android का है और बिना instrumentation के test नहीं होता, इसलिए नया code `StateFlow` लेता है — पर दो-तीन साल से पुराने हर codebase में यह अब भी है।",
      "hi-en": "`STARTED` se neeche bina kisi helper ke dena ruk jata hai — wahi cheez `StateFlow` collector par chhod deta hai. Ye sirf Android ka hai aur bina instrumentation ke test nahi hota, isliye naya code `StateFlow` leta hai — par do-teen saal se purane har codebase mein ye ab bhi hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/livedata",
    related: ["StateFlow", "MutableLiveData", "viewLifecycleOwner"],
  },

  MutableLiveData: {
    term: "MutableLiveData",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.MutableLiveData",
    does: {
      en: "A `LiveData` you can write to, with `setValue` on the main thread or `postValue` from another.",
      hi: "ऐसा `LiveData` जिसमें लिखा जा सकता है — main thread पर `setValue` से, किसी और thread से `postValue` से।",
      "hi-en": "Aisa `LiveData` jismein likha ja sakta hai — main thread par `setValue` se, kisi aur thread se `postValue` se.",
    },
    affects: {
      en: "`postValue` only delivers the last value if several arrive before the main thread runs, so a rapid sequence can silently lose the ones in between. Expose the read-only `LiveData` and keep this private, for the same reason as `asStateFlow`.",
      hi: "Main thread के चलने से पहले कई values आ जाएँ तो `postValue` सिर्फ आखिरी पहुँचाता है, तो तेजी से आया सिलसिला बीच वाली values चुपचाप खो सकता है। सिर्फ पढ़े जा सकने वाला `LiveData` बाहर दीजिए और इसे private रखिए — वही वजह जो `asStateFlow` की है।",
      "hi-en": "Main thread ke chalne se pehle kai values aa jayein to `postValue` sirf aakhri pahunchata hai, to tezi se aaya silsila beech wali values chupchap kho sakta hai. Sirf padhe ja sakne wala `LiveData` bahar dijiye aur ise private rakhiye — wahi wajah jo `asStateFlow` ki hai.",
    },
    related: ["LiveData", "asLiveData"],
  },

  asLiveData: {
    term: "asLiveData",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.asLiveData",
    does: {
      en: "Converts a `Flow` into a `LiveData`.",
      hi: "किसी `Flow` को `LiveData` में बदल देता है।",
      "hi-en": "Kisi `Flow` ko `LiveData` mein badal deta hai.",
    },
    affects: {
      en: "It is the bridge for a gradual migration: a repository can expose flows while a screen still observes `LiveData`, so both halves can move independently. `asFlow()` goes the other way.",
      hi: "धीरे-धीरे बदलने के लिए यही पुल है: repository flows दे सकता है जबकि screen अब भी `LiveData` देखती है, तो दोनों हिस्से अलग-अलग बदल सकते हैं। दूसरी तरफ `asFlow()` जाता है।",
      "hi-en": "Dheere-dheere badalne ke liye yahi pul hai: repository flows de sakta hai jabki screen ab bhi `LiveData` dekhti hai, to dono hisse alag-alag badal sakte hain. Doosri taraf `asFlow()` jata hai.",
    },
    related: ["LiveData", "Flow", "StateFlow"],
  },

  Result: {
    term: "Result",
    kind: { en: "Kotlin class", hi: "Kotlin class", "hi-en": "Kotlin class" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Holds either a value or the failure that stopped it being one.",
      hi: "या तो कोई value रखता है, या वह नाकामी जिसकी वजह से वह value बनी ही नहीं।",
      "hi-en": "Ya to koi value rakhta hai, ya wo nakami jiski wajah se wo value bani hi nahi.",
    },
    values: {
      en: "`getOrNull`, `getOrElse`, `onSuccess`, `onFailure` and `fold` read it without a `try` block.",
      hi: "`getOrNull`, `getOrElse`, `onSuccess`, `onFailure` और `fold` इसे बिना किसी `try` block के पढ़ लेते हैं।",
      "hi-en": "`getOrNull`, `getOrElse`, `onSuccess`, `onFailure` aur `fold` ise bina kisi `try` block ke padh lete hain.",
    },
    affects: {
      en: "Returning it from a repository puts failure in the signature, so a caller cannot forget the unhappy path the way an exception lets them. Translate library exceptions into your own error type before wrapping, or the layer above ends up depending on Retrofit after all.",
      hi: "Repository से इसे लौटाना नाकामी को signature में ले आता है, तो बुलाने वाला वह बुरा रास्ता उस तरह नहीं भूल सकता जैसे exception उसे भूलने देता है। लपेटने से पहले library की exceptions को अपनी error वाली type में बदलिए, वरना ऊपर वाली परत आखिर Retrofit पर ही टिक जाती है।",
      "hi-en": "Repository se ise lautana nakami ko signature mein le aata hai, to bulane wala wo bura raasta us tarah nahi bhool sakta jaise exception use bhoolne deta hai. Lapetne se pehle library ki exceptions ko apni error wali type mein badliye, warna upar wali parat aakhir Retrofit par hi tik jati hai.",
    },
    related: ["runCatching", "sealed", "when"],
  },

  runCatching: {
    term: "runCatching",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Runs a block and wraps its outcome — value or exception — in a `Result`.",
      hi: "एक block चलाता है और उसका जो भी नतीजा हो — value या exception — उसे `Result` में लपेट देता है।",
      "hi-en": "Ek block chalata hai aur uska jo bhi anjaam ho — value ya exception — use `Result` mein lapet deta hai.",
    },
    affects: {
      en: "It catches `Throwable`, which includes `CancellationException` — so inside a coroutine it will swallow cancellation and keep a scope alive that should have stopped. In coroutine code, catch the specific exceptions you mean instead.",
      hi: "यह `Throwable` पकड़ता है, जिसमें `CancellationException` भी आता है — तो किसी coroutine के अंदर यह रुकने का संकेत निगल जाएगा और उस scope को जिंदा रखेगा जिसे रुक जाना चाहिए था। Coroutine वाले code में उन्हीं exceptions को पकड़िए जिनका मतलब है।",
      "hi-en": "Ye `Throwable` pakadta hai, jismein `CancellationException` bhi aata hai — to kisi coroutine ke andar ye rukne ka sanket nigal jayega aur us scope ko zinda rakhega jise ruk jana chahiye tha. Coroutine wale code mein unhin exceptions ko pakadiye jinka matlab hai.",
    },
    related: ["Result", "suspend"],
  },

  onCleared: {
    term: "onCleared",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Runs when a `ViewModel` is finally discarded, so it can release what it holds.",
      hi: "जब `ViewModel` आखिरकार हटाया जाता है तब चलता है, ताकि वह अपनी पकड़ी हुई चीजें छोड़ सके।",
      "hi-en": "Jab `ViewModel` aakhirkar hataya jata hai tab chalta hai, taki wo apni pakdi hui cheezein chhod sake.",
    },
    affects: {
      en: "It runs when the owner finishes for good, not when it is merely recreated — so it does not run on rotation, and clearing a leaked `Context` here is far too late to have prevented anything. `viewModelScope` is cancelled at the same moment.",
      hi: "यह तब चलता है जब owner हमेशा के लिए खत्म होता है, सिर्फ दोबारा बनने पर नहीं — तो rotation पर यह चलता ही नहीं, और leak हुआ `Context` यहाँ साफ करना कुछ भी रोकने के लिहाज से बहुत देर है। `viewModelScope` भी उसी पल रुकता है।",
      "hi-en": "Ye tab chalta hai jab owner hamesha ke liye khatam hota hai, sirf dobara banne par nahi — to rotation par ye chalta hi nahi, aur leak hua `Context` yahan saaf karna kuch bhi rokne ke lihaz se bahut der hai. `viewModelScope` bhi usi pal rukta hai.",
    },
    related: ["ViewModel", "viewModelScope"],
  },

  Serializable: {
    term: "@Serializable",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import kotlinx.serialization.Serializable",
    does: {
      en: "Generates the code to turn a class into JSON, or into navigation arguments, and back.",
      hi: "किसी class को JSON में, या navigation के arguments में, और वापस बदलने का code बनाता है।",
      "hi-en": "Kisi class ko JSON mein, ya navigation ke arguments mein, aur wapas badalne ka code banata hai.",
    },
    affects: {
      en: "In Navigation it is what makes a route a Kotlin type, so a wrong argument is a compile error instead of a malformed string. The arguments still end up in saved state, so the `Bundle` size limit applies just the same.",
      hi: "Navigation में यही किसी route को Kotlin का type बनाता है, तो गलत argument बिगड़ी हुई string नहीं बल्कि compile error है। Arguments फिर भी saved state में जाते हैं, तो `Bundle` की नाप वाली हद वैसी ही लागू रहती है।",
      "hi-en": "Navigation mein yahi kisi route ko Kotlin ka type banata hai, to galat argument bigdi hui string nahi balki compile error hai. Arguments phir bhi saved state mein jate hain, to `Bundle` ki naap wali had waisi hi lagu rehti hai.",
    },
    related: ["NavHost", "toRoute", "data"],
  },
};
