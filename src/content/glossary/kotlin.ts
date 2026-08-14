import type { Glossary } from "./types";

/** Core Kotlin language keywords and stdlib members. */
export const KOTLIN_GLOSSARY: Glossary = {
  val: {
    term: "val",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a read-only reference: it can be assigned exactly once.",
      hi: "एक read-only reference बनाता है — इसे सिर्फ एक बार assign किया जा सकता है।",
      "hi-en": "Ek read-only reference banata hai — ise sirf ek baar assign kiya ja sakta hai.",
    },
    affects: {
      en: "The compiler rejects any later reassignment. It does not freeze the object itself — a `val` list can still have items added to it.",
      hi: "बाद में दोबारा assign करने पर compiler रोक देगा। लेकिन object खुद freeze नहीं होता — `val` list में items फिर भी जोड़े जा सकते हैं।",
      "hi-en": "Baad mein dobara assign karne par compiler rok dega. Lekin object khud freeze nahi hota — `val` list mein items phir bhi jode ja sakte hain.",
    },
    docs: "https://kotlinlang.org/docs/basic-syntax.html#variables",
    related: ["var", "const"],
  },

  var: {
    term: "var",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a mutable reference that can be reassigned any number of times.",
      hi: "एक mutable reference बनाता है जिसे कितनी भी बार बदला जा सकता है।",
      "hi-en": "Ek mutable reference banata hai jise kitni bhi baar badla ja sakta hai.",
    },
    affects: {
      en: "Mutable state is harder to reason about and is not thread-safe. Prefer `val` and only reach for `var` when the value genuinely changes.",
      hi: "Mutable state समझना मुश्किल होता है और thread-safe नहीं होता। `val` को प्राथमिकता दीजिए, `var` तभी जब value सच में बदलती हो।",
      "hi-en": "Mutable state samajhna mushkil hota hai aur thread-safe nahi hota. `val` ko priority do, `var` tabhi jab value sach mein badalti ho.",
    },
    docs: "https://kotlinlang.org/docs/basic-syntax.html#variables",
    related: ["val"],
  },

  fun: {
    term: "fun",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a function. Everything after the parameter list and colon is the return type.",
      hi: "एक function बनाता है। parameter list और colon के बाद जो है वह return type है।",
      "hi-en": "Ek function banata hai. Parameter list aur colon ke baad jo hai wo return type hai.",
    },
    affects: {
      en: "If you omit the return type, Kotlin infers it — but only for single-expression functions. Block bodies default to `Unit`.",
      hi: "return type न लिखें तो Kotlin खुद पता लगा लेता है — लेकिन सिर्फ single-expression functions के लिए। Block body का default `Unit` होता है।",
      "hi-en": "Return type na likho to Kotlin khud pata laga leta hai — lekin sirf single-expression functions ke liye. Block body ka default `Unit` hota hai.",
    },
    docs: "https://kotlinlang.org/docs/functions.html",
    related: ["Unit", "suspend", "inline"],
  },

  Unit: {
    term: "Unit",
    kind: { en: "Kotlin type", hi: "Kotlin type", "hi-en": "Kotlin type" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "The type of a function that returns nothing useful. It is Kotlin's equivalent of `void`, but it is a real object.",
      hi: "उस function का type जो कुछ उपयोगी return नहीं करता। यह Kotlin का `void` जैसा है, पर असली object है।",
      "hi-en": "Us function ka type jo kuch useful return nahi karta. Ye Kotlin ka `void` jaisa hai, par asli object hai.",
    },
    affects: {
      en: "Because it is a real type, `Unit` can be used as a generic argument — which is why `suspend () -> Unit` works where Java would need a special interface.",
      hi: "असली type होने की वजह से `Unit` को generic argument की तरह इस्तेमाल किया जा सकता है — इसीलिए `suspend () -> Unit` काम करता है, जबकि Java में अलग interface चाहिए होता।",
      "hi-en": "Asli type hone ki wajah se `Unit` ko generic argument ki tarah use kiya ja sakta hai — isiliye `suspend () -> Unit` kaam karta hai, jabki Java mein alag interface chahiye hota.",
    },
    docs: "https://kotlinlang.org/docs/functions.html#unit-returning-functions",
  },

  when: {
    term: "when",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Branches on a value or on arbitrary conditions, and can be used as an expression that returns a value.",
      hi: "किसी value या शर्तों के आधार पर branch करता है, और expression की तरह value भी लौटा सकता है।",
      "hi-en": "Kisi value ya conditions ke basis par branch karta hai, aur expression ki tarah value bhi return kar sakta hai.",
    },
    affects: {
      en: "When used as an expression over a `sealed` type, the compiler forces you to handle every case — add a new subclass later and every `when` that missed it fails to compile.",
      hi: "`sealed` type पर expression की तरह इस्तेमाल करने पर compiler हर case handle करवाता है — बाद में नया subclass जोड़ें तो हर छूटा हुआ `when` compile fail कर देगा।",
      "hi-en": "`sealed` type par expression ki tarah use karne par compiler har case handle karwata hai — baad mein naya subclass jodo to har chhuta hua `when` compile fail kar dega.",
    },
    docs: "https://kotlinlang.org/docs/control-flow.html#when-expressions-and-statements",
    related: ["sealed", "is"],
  },

  is: {
    term: "is",
    kind: { en: "Kotlin operator", hi: "Kotlin operator", "hi-en": "Kotlin operator" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Checks whether a value is of a given type at runtime.",
      hi: "जाँचता है कि कोई value runtime पर दिए गए type की है या नहीं।",
      "hi-en": "Check karta hai ki koi value runtime par diye gaye type ki hai ya nahi.",
    },
    affects: {
      en: "Triggers a smart cast: inside the branch the compiler already treats the value as that type, so no manual cast is needed.",
      hi: "Smart cast चालू कर देता है: branch के अंदर compiler उस value को उसी type का मान लेता है, इसलिए manual cast की जरूरत नहीं।",
      "hi-en": "Smart cast chalu kar deta hai: branch ke andar compiler us value ko usi type ka maan leta hai, isliye manual cast ki zarurat nahi.",
    },
    docs: "https://kotlinlang.org/docs/typecasts.html",
    related: ["as", "when"],
  },

  as: {
    term: "as",
    kind: { en: "Kotlin operator", hi: "Kotlin operator", "hi-en": "Kotlin operator" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Casts a value to a type, throwing `ClassCastException` if it does not match.",
      hi: "किसी value को दिए गए type में cast करता है; मेल न खाए तो `ClassCastException` फेंकता है।",
      "hi-en": "Kisi value ko diye gaye type mein cast karta hai; match na ho to `ClassCastException` fenkta hai.",
    },
    affects: {
      en: "Use `as?` instead — it returns `null` on failure rather than crashing, and pairs naturally with the `?:` operator.",
      hi: "इसके बजाय `as?` इस्तेमाल कीजिए — यह fail होने पर crash नहीं करता, `null` लौटाता है और `?:` के साथ अच्छा चलता है।",
      "hi-en": "Iske bajaye `as?` use karo — ye fail hone par crash nahi karta, `null` return karta hai aur `?:` ke saath achha chalta hai.",
    },
    docs: "https://kotlinlang.org/docs/typecasts.html#unsafe-cast-operator",
    related: ["is"],
  },

  data: {
    term: "data",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Tells the compiler to generate `equals`, `hashCode`, `toString`, `copy` and `componentN` from the primary constructor.",
      hi: "Compiler से कहता है कि primary constructor से `equals`, `hashCode`, `toString`, `copy` और `componentN` खुद बना दे।",
      "hi-en": "Compiler se kehta hai ki primary constructor se `equals`, `hashCode`, `toString`, `copy` aur `componentN` khud bana de.",
    },
    affects: {
      en: "Value equality changes behaviour everywhere: `DiffUtil`, `distinctUntilChanged`, `Set` membership and Compose recomposition all start comparing contents instead of references.",
      hi: "Value equality हर जगह असर डालती है: `DiffUtil`, `distinctUntilChanged`, `Set` membership और Compose recomposition सब reference के बजाय content की तुलना करने लगते हैं।",
      "hi-en": "Value equality har jagah asar dalti hai: `DiffUtil`, `distinctUntilChanged`, `Set` membership aur Compose recomposition sab reference ke bajaye content compare karne lagte hain.",
    },
    docs: "https://kotlinlang.org/docs/data-classes.html",
    related: ["class", "sealed"],
  },

  sealed: {
    term: "sealed",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Restricts a class or interface so that all its direct subtypes are known at compile time.",
      hi: "किसी class या interface को इस तरह सीमित करता है कि उसके सारे direct subtypes compile time पर पता हों।",
      "hi-en": "Kisi class ya interface ko is tarah limit karta hai ki uske saare direct subtypes compile time par pata hon.",
    },
    affects: {
      en: "This is what makes `when` exhaustive. It is the standard way to model UI state — `Loading`, `Success`, `Error` — so an unhandled state becomes a compile error, not a bug.",
      hi: "यही `when` को exhaustive बनाता है। UI state — `Loading`, `Success`, `Error` — को model करने का यही मानक तरीका है, जिससे छूटा हुआ state bug नहीं, compile error बनता है।",
      "hi-en": "Yahi `when` ko exhaustive banata hai. UI state — `Loading`, `Success`, `Error` — model karne ka yahi standard tarika hai, jisse chhuta hua state bug nahi, compile error banta hai.",
    },
    docs: "https://kotlinlang.org/docs/sealed-classes.html",
    related: ["when", "data", "enum"],
  },

  override: {
    term: "override",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Replaces a member inherited from a superclass or interface with a new implementation.",
      hi: "superclass या interface से मिले किसी member को नए implementation से बदल देता है।",
      "hi-en": "Superclass ya interface se mile kisi member ko naye implementation se badal deta hai.",
    },
    affects: {
      en: "It is mandatory in Kotlin, not optional as in Java. The compiler verifies a matching member actually exists, so a renamed framework method breaks the build instead of silently never running. An overriding member stays open for further overrides unless marked `final`.",
      hi: "Kotlin में यह अनिवार्य है, Java की तरह वैकल्पिक नहीं। Compiler जाँचता है कि ऐसा member सच में मौजूद है — इसलिए framework का नाम बदलने पर build टूटता है, चुपचाप method चलना बंद नहीं होता। override किया member आगे भी override हो सकता है जब तक `final` न लिखा हो।",
      "hi-en": "Kotlin mein ye mandatory hai, Java ki tarah optional nahi. Compiler check karta hai ki aisa member sach mein hai — isliye framework ka naam badalne par build tootta hai, chupchap method chalna band nahi hota. Override kiya member aage bhi override ho sakta hai jab tak `final` na likha ho.",
    },
    docs: "https://kotlinlang.org/docs/inheritance.html#overriding-methods",
    related: ["open", "abstract", "super"],
  },

  open: {
    term: "open",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Allows a class to be subclassed, or a member to be overridden.",
      hi: "किसी class को subclass करने, या किसी member को override करने की अनुमति देता है।",
      "hi-en": "Kisi class ko subclass karne, ya kisi member ko override karne ki permission deta hai.",
    },
    affects: {
      en: "Kotlin classes are `final` by default — the opposite of Java. Without `open`, inheritance simply will not compile, and mocking libraries that subclass your type will fail at runtime.",
      hi: "Kotlin में classes default रूप से `final` होती हैं — Java के उलट। `open` के बिना inheritance compile ही नहीं होगी, और subclass बनाने वाली mocking libraries runtime पर fail हो जाएँगी।",
      "hi-en": "Kotlin mein classes default se `final` hoti hain — Java ke ulta. `open` ke bina inheritance compile hi nahi hogi, aur subclass banane wali mocking libraries runtime par fail ho jayengi.",
    },
    docs: "https://kotlinlang.org/docs/inheritance.html",
    related: ["override", "abstract", "final"],
  },

  abstract: {
    term: "abstract",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a class that cannot be instantiated, or a member that has no body and must be implemented.",
      hi: "ऐसी class बनाता है जिसका object नहीं बन सकता, या ऐसा member जिसका body नहीं है और जिसे implement करना जरूरी है।",
      "hi-en": "Aisi class banata hai jiska object nahi ban sakta, ya aisa member jiska body nahi hai aur jise implement karna zaruri hai.",
    },
    affects: {
      en: "`abstract` members are `open` automatically. Every concrete subclass must implement them or itself be declared `abstract`.",
      hi: "`abstract` members अपने आप `open` होते हैं। हर concrete subclass को उन्हें implement करना होगा, वरना उसे भी `abstract` घोषित करना पड़ेगा।",
      "hi-en": "`abstract` members apne aap `open` hote hain. Har concrete subclass ko unhe implement karna hoga, warna use bhi `abstract` declare karna padega.",
    },
    docs: "https://kotlinlang.org/docs/classes.html#abstract-classes",
    related: ["open", "override", "interface"],
  },

  lateinit: {
    term: "lateinit",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Lets a non-null `var` be declared without an initial value, promising to assign it before first use.",
      hi: "किसी non-null `var` को बिना शुरुआती value के declare करने देता है, इस वादे पर कि पहले इस्तेमाल से पहले assign कर दिया जाएगा।",
      "hi-en": "Kisi non-null `var` ko bina initial value ke declare karne deta hai, is wade par ki pehle use se pehle assign kar diya jayega.",
    },
    affects: {
      en: "The compiler stops checking null for you. Reading it too early throws `UninitializedPropertyAccessException` — a common crash when a Fragment's view is accessed after `onDestroyView`.",
      hi: "Compiler आपके लिए null जाँचना बंद कर देता है। जल्दी पढ़ने पर `UninitializedPropertyAccessException` आता है — Fragment की view को `onDestroyView` के बाद छूने पर यह आम crash है।",
      "hi-en": "Compiler aapke liye null check karna band kar deta hai. Jaldi padhne par `UninitializedPropertyAccessException` aata hai — Fragment ki view ko `onDestroyView` ke baad chhune par ye common crash hai.",
    },
    docs: "https://kotlinlang.org/docs/properties.html#late-initialized-properties-and-variables",
    related: ["lazy", "val", "var"],
  },

  lazy: {
    term: "lazy",
    kind: { en: "Kotlin stdlib function", hi: "Kotlin stdlib function", "hi-en": "Kotlin stdlib function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Delays creating a value until the first time it is read, then caches it forever.",
      hi: "किसी value को पहली बार पढ़े जाने तक बनाता नहीं, और फिर उसे हमेशा के लिए cache कर लेता है।",
      "hi-en": "Kisi value ko pehli baar padhe jane tak banata nahi, aur phir use hamesha ke liye cache kar leta hai.",
    },
    affects: {
      en: "Moves expensive work out of the constructor, which directly improves startup time. It is thread-safe by default; pass `LazyThreadSafetyMode.NONE` when you know only one thread touches it.",
      hi: "भारी काम constructor से बाहर ले जाता है, जिससे startup time सीधे बेहतर होता है। Default रूप से thread-safe है; अगर सिर्फ एक thread छूता है तो `LazyThreadSafetyMode.NONE` दीजिए।",
      "hi-en": "Bhaari kaam constructor se bahar le jata hai, jisse startup time seedha behtar hota hai. Default se thread-safe hai; agar sirf ek thread chhuta hai to `LazyThreadSafetyMode.NONE` do.",
    },
    docs: "https://kotlinlang.org/docs/delegated-properties.html#lazy-properties",
    related: ["lateinit", "by"],
  },

  by: {
    term: "by",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Delegates a property's `get`/`set`, or an interface's implementation, to another object.",
      hi: "किसी property के `get`/`set`, या किसी interface के implementation को दूसरे object को सौंप देता है।",
      "hi-en": "Kisi property ke `get`/`set`, ya kisi interface ke implementation ko dusre object ko saunp deta hai.",
    },
    affects: {
      en: "It is how `by lazy`, `by viewModels()` and `by remember { mutableStateOf(...) }` all work. With `by`, reading the property gives you the value directly instead of a wrapper — no `.value` needed.",
      hi: "`by lazy`, `by viewModels()` और `by remember { mutableStateOf(...) }` सब इसी से चलते हैं। `by` के साथ property पढ़ने पर wrapper नहीं, सीधे value मिलती है — `.value` लिखने की जरूरत नहीं।",
      "hi-en": "`by lazy`, `by viewModels()` aur `by remember { mutableStateOf(...) }` sab isi se chalte hain. `by` ke saath property padhne par wrapper nahi, seedha value milti hai — `.value` likhne ki zarurat nahi.",
    },
    docs: "https://kotlinlang.org/docs/delegated-properties.html",
    related: ["lazy", "remember"],
  },

  companion: {
    term: "companion",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a single object tied to a class, so its members can be called on the class name itself.",
      hi: "class से जुड़ा एक object बनाता है, ताकि उसके members class के नाम से ही बुलाए जा सकें।",
      "hi-en": "Class se juda ek object banata hai, taki uske members class ke naam se hi bulaye ja saken.",
    },
    affects: {
      en: "This is Kotlin's replacement for `static`. Note that it is a real object living in memory — heavy state in a companion stays alive for the whole process.",
      hi: "यह Kotlin में `static` की जगह है। ध्यान रखिए यह असली object है जो memory में रहता है — companion में भारी state पूरे process तक जिंदा रहता है।",
      "hi-en": "Ye Kotlin mein `static` ki jagah hai. Dhyan rakho ye asli object hai jo memory mein rehta hai — companion mein bhaari state poore process tak zinda rehta hai.",
    },
    docs: "https://kotlinlang.org/docs/object-declarations.html#companion-objects",
    related: ["object", "const"],
  },

  object: {
    term: "object",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a singleton — a class and its one and only instance, in a single step.",
      hi: "एक singleton बनाता है — class और उसका इकलौता instance, एक ही स्टेप में।",
      "hi-en": "Ek singleton banata hai — class aur uska iklauta instance, ek hi step mein.",
    },
    affects: {
      en: "It is created lazily and thread-safely on first access, and never freed. Holding a `Context` in an `object` is a classic memory leak.",
      hi: "पहली बार छूने पर lazily और thread-safe तरीके से बनता है, और कभी free नहीं होता। `object` में `Context` रखना क्लासिक memory leak है।",
      "hi-en": "Pehli baar chhune par lazily aur thread-safe tarike se banta hai, aur kabhi free nahi hota. `object` mein `Context` rakhna classic memory leak hai.",
    },
    docs: "https://kotlinlang.org/docs/object-declarations.html",
    related: ["companion", "class"],
  },

  let: {
    term: "let",
    kind: { en: "Scope function", hi: "Scope function", "hi-en": "Scope function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Runs a block with the receiver available as `it`, and returns whatever the block returns.",
      hi: "एक block चलाता है जिसमें receiver `it` के रूप में मिलता है, और block का return लौटाता है।",
      "hi-en": "Ek block chalata hai jisme receiver `it` ke roop mein milta hai, aur block ka return lautata hai.",
    },
    affects: {
      en: "Combined with `?.`, it is the idiomatic way to run code only when a value is non-null. Careful: `?.let { }` returns `null` when the receiver is null, so chaining after it still needs a null check.",
      hi: "`?.` के साथ मिलकर यह non-null होने पर ही code चलाने का idiomatic तरीका है। सावधानी: receiver null हो तो `?.let { }` खुद `null` लौटाता है, इसलिए आगे chain करने पर फिर null check चाहिए।",
      "hi-en": "`?.` ke saath milkar ye non-null hone par hi code chalane ka idiomatic tarika hai. Savdhani: receiver null ho to `?.let { }` khud `null` lautata hai, isliye aage chain karne par phir null check chahiye.",
    },
    docs: "https://kotlinlang.org/docs/scope-functions.html#let",
    related: ["apply", "also", "run"],
  },

  apply: {
    term: "apply",
    kind: { en: "Scope function", hi: "Scope function", "hi-en": "Scope function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Runs a block with the receiver available as `this`, then returns the receiver itself.",
      hi: "एक block चलाता है जिसमें receiver `this` होता है, और फिर वही receiver लौटा देता है।",
      "hi-en": "Ek block chalata hai jisme receiver `this` hota hai, aur phir wahi receiver lauta deta hai.",
    },
    affects: {
      en: "Because it returns the receiver, it chains — the standard way to configure an object right where it is created, such as building an `Intent` or a `Paint`.",
      hi: "Receiver लौटाने की वजह से यह chain होता है — object को वहीं configure करने का मानक तरीका जहाँ वह बना है, जैसे `Intent` या `Paint` बनाते समय।",
      "hi-en": "Receiver lautane ki wajah se ye chain hota hai — object ko wahin configure karne ka standard tarika jahan wo bana hai, jaise `Intent` ya `Paint` banate samay.",
    },
    docs: "https://kotlinlang.org/docs/scope-functions.html#apply",
    related: ["let", "also", "run"],
  },

  also: {
    term: "also",
    kind: { en: "Scope function", hi: "Scope function", "hi-en": "Scope function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Runs a block with the receiver as `it`, then returns the receiver unchanged.",
      hi: "एक block चलाता है जिसमें receiver `it` होता है, और फिर receiver ज्यों का त्यों लौटा देता है।",
      "hi-en": "Ek block chalata hai jisme receiver `it` hota hai, aur phir receiver jyon ka tyon lauta deta hai.",
    },
    affects: {
      en: "Ideal for side effects that must not change the value being passed along — logging, validation, or caching in the middle of a chain.",
      hi: "उन side effects के लिए सही जो value बदलें नहीं — chain के बीच में logging, validation या caching।",
      "hi-en": "Un side effects ke liye sahi jo value badlein nahi — chain ke beech mein logging, validation ya caching.",
    },
    docs: "https://kotlinlang.org/docs/scope-functions.html#also",
    related: ["apply", "let"],
  },

  inline: {
    term: "inline",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Tells the compiler to copy the function's body into every call site instead of making a real call.",
      hi: "Compiler से कहता है कि असली call करने के बजाय function का body हर call site पर copy कर दे।",
      "hi-en": "Compiler se kehta hai ki asli call karne ke bajaye function ka body har call site par copy kar de.",
    },
    affects: {
      en: "Removes the lambda object allocation, allows non-local `return`, and enables `reified` type parameters. Inlining a large function bloats the bytecode, so it only pays off for small functions taking lambdas.",
      hi: "Lambda object की allocation हटाता है, non-local `return` की अनुमति देता है, और `reified` type parameters संभव बनाता है। बड़ी function को inline करने से bytecode फूल जाता है, इसलिए यह सिर्फ छोटे lambda-लेने वाले functions पर फायदेमंद है।",
      "hi-en": "Lambda object ki allocation hatata hai, non-local `return` ki permission deta hai, aur `reified` type parameters possible banata hai. Badi function ko inline karne se bytecode phool jata hai, isliye ye sirf chhote lambda-lene wale functions par faydemand hai.",
    },
    docs: "https://kotlinlang.org/docs/inline-functions.html",
    related: ["reified", "fun"],
  },

  reified: {
    term: "reified",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Keeps a generic type parameter available at runtime inside an `inline` function.",
      hi: "किसी `inline` function के अंदर generic type parameter को runtime पर भी उपलब्ध रखता है।",
      "hi-en": "Kisi `inline` function ke andar generic type parameter ko runtime par bhi available rakhta hai.",
    },
    affects: {
      en: "Works around JVM type erasure, so you can write `T::class` or `value is T`. It only works on `inline` functions, because the type is substituted at each call site.",
      hi: "JVM के type erasure को चकमा देता है, जिससे `T::class` या `value is T` लिखा जा सके। यह सिर्फ `inline` functions पर चलता है, क्योंकि type हर call site पर बदल दिया जाता है।",
      "hi-en": "JVM ke type erasure ko chakma deta hai, jisse `T::class` ya `value is T` likha ja sake. Ye sirf `inline` functions par chalta hai, kyunki type har call site par badal diya jata hai.",
    },
    docs: "https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters",
    related: ["inline"],
  },

  println: {
    term: "println",
    kind: { en: "Kotlin stdlib function", hi: "Kotlin stdlib function", "hi-en": "Kotlin stdlib function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Writes a line to standard output.",
      hi: "standard output पर एक line लिख देता है।",
      "hi-en": "Standard output par ek line likh deta hai.",
    },
    affects: {
      en: "On Android there is no console, so this goes nowhere useful — use `Log.d` instead, which Logcat can filter. Leaving `println` in shipped code is a small but real performance and privacy leak.",
      hi: "Android पर console होता ही नहीं, इसलिए यह कहीं काम की जगह नहीं जाता — `Log.d` इस्तेमाल कीजिए, जिसे Logcat filter कर सकता है। Shipped code में `println` छोड़ना छोटी पर असली performance और privacy की चूक है।",
      "hi-en": "Android par console hota hi nahi, isliye ye kahin kaam ki jagah nahi jata — `Log.d` use karo, jise Logcat filter kar sakta hai. Shipped code mein `println` chhodna chhoti par asli performance aur privacy ki chook hai.",
    },
    docs: "https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.io/println.html",
    related: ["fun"],
  },

  class: {
    term: "class",
    kind: { en: "Kotlin keyword", hi: "Kotlin keyword", "hi-en": "Kotlin keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a new type: a blueprint for objects with their own state and behaviour.",
      hi: "एक नया type बनाता है: ऐसे objects का खाका जिनका अपना state और व्यवहार हो।",
      "hi-en": "Ek naya type banata hai: aise objects ka khaka jinka apna state aur behaviour ho.",
    },
    affects: {
      en: "Kotlin classes are `final` and `public` by default — the opposite of Java. Without `open` nothing can extend it, which surprises people the first time a mocking library fails at run time.",
      hi: "Kotlin में classes default रूप से `final` और `public` होती हैं — Java के उलट। `open` के बिना कोई इसे extend नहीं कर सकता, और यही बात पहली बार तब चौंकाती है जब कोई mocking library runtime पर fail होती है।",
      "hi-en": "Kotlin mein classes default se `final` aur `public` hoti hain — Java ke ulta. `open` ke bina koi ise extend nahi kar sakta, aur yahi baat pehli baar tab chaunkati hai jab koi mocking library runtime par fail hoti hai.",
    },
    docs: "https://kotlinlang.org/docs/classes.html",
    related: ["open", "data", "object"],
  },

  const: {
    term: "const",
    kind: { en: "Kotlin modifier", hi: "Kotlin modifier", "hi-en": "Kotlin modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Marks a `val` as a compile-time constant whose value is inlined wherever it is used.",
      hi: "किसी `val` को compile-time constant बनाता है, जिसकी value हर इस्तेमाल की जगह पर inline हो जाती है।",
      "hi-en": "Kisi `val` ko compile-time constant banata hai, jiski value har use ki jagah par inline ho jati hai.",
    },
    affects: {
      en: "No getter is generated, so there is zero runtime cost. It only works for primitives and `String` declared at the top level or inside an `object`.",
      hi: "कोई getter नहीं बनता, इसलिए runtime cost शून्य है। यह सिर्फ primitives और `String` पर चलता है, वह भी top level या `object` के अंदर।",
      "hi-en": "Koi getter nahi banta, isliye runtime cost zero hai. Ye sirf primitives aur `String` par chalta hai, wo bhi top level ya `object` ke andar.",
    },
    docs: "https://kotlinlang.org/docs/properties.html#compile-time-constants",
    related: ["val", "companion"],
  },
};
