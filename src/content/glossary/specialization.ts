import type { Glossary } from "./types";

/** Kotlin Multiplatform, convention plugins, KSP, the NDK, Media3 and on-device ML. */
export const SPECIALIZATION_GLOSSARY: Glossary = {
  expect: {
    term: "expect",
    kind: { en: "Keyword", hi: "Keyword", "hi-en": "Keyword" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares an API in common code that each platform must supply with `actual`.",
      hi: "साझी code में ऐसी API बताता है जिसे हर platform को `actual` से देना पड़ता है।",
      "hi-en": "Saajhi code mein aisi API bataata hai jise har platform ko `actual` se dena padta hai.",
    },
    affects: {
      en: "It is a compile-time contract, not a runtime lookup: every target must provide a matching `actual` or the build fails, so a platform can never be quietly forgotten. Reach for it sparingly — an interface in common code with a per-platform implementation injected is usually clearer, and `expect`/`actual` earns its place mainly for things a constructor cannot express, like a platform type or a static factory.",
      hi: "यह चलते वक्त की खोज नहीं, compile वक्त का करार है: हर target को मेल खाता `actual` देना ही पड़ेगा वरना build गिरता है, तो कोई platform चुपचाप भूला नहीं जा सकता। इसे कम ही उठाइए — साझी code में कोई interface और हर platform का अपना रूप भीतर भेज देना आमतौर पर ज्यादा साफ है, और `expect`/`actual` की जगह मुख्यतः वहाँ बनती है जो कोई constructor कह ही नहीं सकता, जैसे platform का कोई किस्म या कोई static factory।",
      "hi-en": "Yeh chalte waqt ki khoj nahi, compile waqt ka karaar hai: har target ko mel khaata `actual` dena hi padega warna build girta hai, to koi platform chupchaap bhoola nahi ja sakta. Ise kam hi uthaiye — saajhi code mein koi interface aur har platform ka apna roop bheetar bhej dena aamtaur par zyada saaf hai, aur `expect`/`actual` ki jagah mukhyatah wahan banti hai jo koi constructor keh hi nahi sakta, jaise platform ka koi kism ya koi static factory.",
    },
    related: ["commonMain", "androidTarget"],
  },

  commonMain: {
    term: "commonMain",
    kind: { en: "Source set", hi: "Source का सेट", "hi-en": "Source ka set" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "The source set compiled for every target, where shared code and `expect` declarations live.",
      hi: "वह source का सेट जो हर target के लिए compile होता है, जहाँ साझी code और `expect` वाली घोषणाएँ रहती हैं।",
      "hi-en": "Wo source ka set jo har target ke liye compile hota hai, jahan saajhi code aur `expect` wali ghoshnaayein rehti hain.",
    },
    affects: {
      en: "Only multiplatform dependencies can go here, which is the constraint that shapes a KMP project: Ktor and kotlinx-serialization belong in `commonMain`, OkHttp only in `androidMain`. What is realistically shared is the layer below the UI — models, validation, networking, storage — so treating KMP as a way to share screens is where most disappointment comes from.",
      hi: "यहाँ सिर्फ multiplatform निर्भरताएँ आ सकती हैं, और यही बंदिश किसी KMP project की शक्ल तय करती है: Ktor और kotlinx-serialization `commonMain` की चीज हैं, OkHttp सिर्फ `androidMain` की। सच में साझा होने लायक हिस्सा UI के नीचे वाली परत है — models, परख, नेट, भंडारण — तो KMP को screens साझा करने का रास्ता मानना ही ज्यादातर निराशा की जड़ है।",
      "hi-en": "Yahan sirf multiplatform nirbhartaayein aa sakti hain, aur yahi bandish kisi KMP project ki shakl tay karti hai: Ktor aur kotlinx-serialization `commonMain` ki cheez hain, OkHttp sirf `androidMain` ki. Sach mein saajha hone layak hissa UI ke neeche wali parat hai — models, parakh, net, bhandaaran — to KMP ko screens saajha karne ka raasta maanna hi zyadatar niraasha ki jad hai.",
    },
    related: ["expect", "androidTarget"],
  },

  androidTarget: {
    term: "androidTarget",
    kind: { en: "DSL function", hi: "DSL का function", "hi-en": "DSL ka function" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Adds Android as a compilation target of a Kotlin Multiplatform module.",
      hi: "किसी Kotlin Multiplatform module में Android को compile होने वाले target की तरह जोड़ता है।",
      "hi-en": "Kisi Kotlin Multiplatform module mein Android ko compile hone wale target ki tarah jodta hai.",
    },
    affects: {
      en: "Each target you declare is another full compilation, so build time grows with the list and the iOS targets in particular are slow. Declaring a target also creates its source set, so `androidMain` exists only because this line does — which is why removing a target silently orphans code that used to compile.",
      hi: "हर बताया गया target एक और पूरा compile है, तो build का समय सूची के साथ बढ़ता है और खासकर iOS वाले targets धीमे हैं। Target बताना उसका source का सेट भी बना देता है, तो `androidMain` सिर्फ इसी लाइन के कारण मौजूद है — और इसीलिए किसी target को हटाना उस code को चुपचाप अनाथ कर देता है जो पहले compile होता था।",
      "hi-en": "Har bataya gaya target ek aur poora compile hai, to build ka samay soochi ke saath badhta hai aur khaaskar iOS wale targets dheeme hain. Target batana uska source ka set bhi bana deta hai, to `androidMain` sirf isi line ke kaaran maujood hai — aur isiliye kisi target ko hataana us code ko chupchaap anaath kar deta hai jo pehle compile hota tha.",
    },
    related: ["commonMain", "expect"],
  },

  pluginManager: {
    term: "pluginManager",
    kind: { en: "Gradle API", hi: "Gradle का API", "hi-en": "Gradle ka API" },
    source: "library",
    importLine: null,
    does: {
      en: "Applies plugins to a project from inside another plugin.",
      hi: "किसी दूसरे plugin के भीतर से किसी project पर plugins लगाता है।",
      "hi-en": "Kisi doosre plugin ke bheetar se kisi project par plugins lagata hai.",
    },
    affects: {
      en: "This is what makes a convention plugin possible: one plugin that applies the Android and Kotlin plugins and then configures them, so forty modules each declare one id instead of forty copies of the same block. The rule that keeps it maintainable is that a convention plugin sets defaults and never encodes one module's exception — the moment it grows an `if (project.name == ...)`, it has become the duplication it replaced.",
      hi: "यही किसी convention वाले plugin को मुमकिन बनाता है: एक plugin जो Android और Kotlin वाले plugins लगाकर फिर उन्हें सजाता है, तो चालीस modules एक-एक पहचान लिखते हैं, उसी हिस्से की चालीस नकलें नहीं। जो नियम उसे सँभालने लायक रखता है वह यह है कि convention वाला plugin तयशुदा बातें रखे और किसी एक module का अपवाद कभी न लिखे — जिस घड़ी उसमें `if (project.name == ...)` उगा, वह वही दोहराव बन गया जिसकी उसने जगह ली थी।",
      "hi-en": "Yahi kisi convention wale plugin ko mumkin banata hai: ek plugin jo Android aur Kotlin wale plugins lagakar phir unhein sajata hai, to chaalis modules ek-ek pehchaan likhte hain, usi hisse ki chaalis naklein nahi. Jo niyam use sambhaalne layak rakhta hai wo yeh hai ki convention wala plugin tayshuda baatein rakhe aur kisi ek module ka apvaad kabhi na likhe — jis ghadi usmein `if (project.name == ...)` uga, wo wahi dohraav ban gaya jiski usne jagah li thi.",
    },
    related: ["expect"],
  },

  SymbolProcessor: {
    term: "SymbolProcessor",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import com.google.devtools.ksp.processing.SymbolProcessor",
    does: {
      en: "The interface a KSP processor implements to inspect symbols and generate code.",
      hi: "वह interface जिसे KSP का processor लागू करता है ताकि प्रतीक देखे और code बनाए।",
      "hi-en": "Wo interface jise KSP ka processor laagu karta hai taki prateek dekhe aur code banaye.",
    },
    affects: {
      en: "KSP reads Kotlin directly rather than through a Java view, which is why it is roughly twice as fast as kapt and why nullability, default arguments and suspend functions are visible to it at all. `process` can be called several times in one build, and returning the symbols that were not yet resolvable is how you ask to be given them again — throwing instead is the mistake that turns a solvable ordering problem into a failed build.",
      hi: "KSP Kotlin को किसी Java की खिड़की से नहीं, सीधे पढ़ता है, और इसीलिए वह kapt से करीब दोगुना तेज है और इसीलिए null हो सकना, तयशुदा arguments और suspend वाले functions उसे दिखते ही हैं। `process` एक ही build में कई बार बुलाया जा सकता है, और जो प्रतीक अभी सुलझे नहीं उन्हें लौटाना ही उन्हें दोबारा पाने की माँग है — उसकी जगह exception फेंकना वह गलती है जो सुलझ सकते क्रम के मसले को गिरे हुए build में बदल देती है।",
      "hi-en": "KSP Kotlin ko kisi Java ki khidki se nahi, seedhe padhta hai, aur isiliye wo kapt se kareeb doguna tez hai aur isiliye null ho sakna, tayshuda arguments aur suspend wale functions use dikhte hi hain. `process` ek hi build mein kai baar bulaya ja sakta hai, aur jo prateek abhi suljhe nahi unhein lautana hi unhein dobara paane ki maang hai — uski jagah exception phenkna wo galti hai jo sulajh sakte kram ke masle ko gire hue build mein badal deti hai.",
    },
    docs: "https://kotlinlang.org/docs/ksp-overview.html",
    related: ["Resolver", "KSClassDeclaration", "CodeGenerator"],
  },

  Resolver: {
    term: "Resolver",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import com.google.devtools.ksp.processing.Resolver",
    does: {
      en: "The handle to everything KSP knows about the code being compiled.",
      hi: "Compile हो रहे code के बारे में KSP जो कुछ जानता है, उस तक पहुँचने का हत्था।",
      "hi-en": "Compile ho rahe code ke baare mein KSP jo kuchh jaanta hai, us tak pahunchne ka hattha.",
    },
    affects: {
      en: "It is valid only for the round it was handed to you in, so caching it across calls to `process` gives you a stale view of a codebase that has since had generated files added. Resolution is also the expensive part — `type.resolve()` does real work — so a processor that resolves inside a nested loop is the usual reason a build got slower after someone added code generation.",
      hi: "यह सिर्फ उसी दौर के लिए सही है जिसमें आपको थमाया गया, तो `process` की calls के आर-पार उसे जमा रखना आपको ऐसे codebase की बासी तस्वीर देता है जिसमें उसके बाद बनी हुई files जुड़ चुकी हैं। सुलझाना महँगा हिस्सा भी है — `type.resolve()` सच में काम करता है — तो जो processor किसी भीतरी चक्कर के अंदर सुलझाता है वही आम वजह है कि किसी के code बनाना जोड़ने के बाद build धीमा हो गया।",
      "hi-en": "Yeh sirf usi daur ke liye sahi hai jismein aapko thamaya gaya, to `process` ki calls ke aar-paar use jama rakhna aapko aise codebase ki baasi tasveer deta hai jismein uske baad bani hui files jud chuki hain. Suljhana mehnga hissa bhi hai — `type.resolve()` sach mein kaam karta hai — to jo processor kisi bheetari chakkar ke andar suljhata hai wahi aam wajah hai ki kisi ke code banana jodne ke baad build dheema ho gaya.",
    },
    related: ["SymbolProcessor", "getSymbolsWithAnnotation", "KSClassDeclaration"],
  },

  getSymbolsWithAnnotation: {
    term: "getSymbolsWithAnnotation",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Returns every declaration carrying a given annotation, by fully qualified name.",
      hi: "पूरे नाम से बताए गए किसी annotation वाली हर घोषणा लौटाता है।",
      "hi-en": "Poore naam se bataye gaye kisi annotation wali har ghoshna lautata hai.",
    },
    affects: {
      en: "The name must be fully qualified, and a typo returns an empty sequence rather than an error — which is why \"my processor generates nothing\" is nearly always this line. It returns declarations of every kind, so filtering with `filterIsInstance<KSClassDeclaration>` and reporting anything unexpected through the logger is what turns a crash in the compiler into a readable message at the annotation site.",
      hi: "वह नाम पूरा होना चाहिए, और कोई अक्षर गलत हो तो error नहीं, खाली कतार लौटती है — और इसीलिए \"मेरा processor कुछ बनाता ही नहीं\" लगभग हमेशा यही लाइन होती है। यह हर किस्म की घोषणाएँ लौटाता है, तो `filterIsInstance<KSClassDeclaration>` से छाँटना और अनचाही चीजों को logger से बताना ही compiler में गिरने को उस annotation की जगह पर पढ़े जा सकने वाले संदेश में बदलता है।",
      "hi-en": "Wo naam poora hona chahiye, aur koi akshar galat ho to error nahi, khaali kataar lautti hai — aur isiliye \"mera processor kuchh banata hi nahi\" lagbhag hamesha yahi line hoti hai. Yeh har kism ki ghoshnaayein lautata hai, to `filterIsInstance<KSClassDeclaration>` se chhaantna aur anchaahi cheezon ko logger se batana hi compiler mein girne ko us annotation ki jagah par padhe ja sakne wale sandesh mein badalta hai.",
    },
    related: ["Resolver", "KSClassDeclaration"],
  },

  KSClassDeclaration: {
    term: "KSClassDeclaration",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import com.google.devtools.ksp.symbol.KSClassDeclaration",
    does: {
      en: "KSP's view of one class: its name, constructors, functions, properties and annotations.",
      hi: "KSP की नजर से एक class: उसका नाम, constructors, functions, खूबियाँ और annotations।",
      "hi-en": "KSP ki nazar se ek class: uska naam, constructors, functions, khoobiyan aur annotations.",
    },
    affects: {
      en: "It carries Kotlin's own information, including whether a type is nullable and whether a function suspends, neither of which survived kapt's Java view — that is the practical reason generated code can now be null-safe. `classKind` also lets a processor refuse politely: an annotation meant for classes landing on an object should produce a logged error at that symbol, not a generated file that fails to compile later.",
      hi: "यह Kotlin की अपनी खबर लिए है, यह भी कि कोई किस्म null हो सकता है या नहीं और कोई function रुकता है या नहीं, और इनमें से कुछ भी kapt की Java वाली खिड़की से नहीं बचता था — बनाया गया code अब null से सुरक्षित क्यों हो सकता है, कामकाजी वजह यही है। `classKind` से processor शालीनता से मना भी कर सकता है: classes के लिए बना annotation किसी object पर पड़े तो उसी प्रतीक पर दर्ज की गई error बननी चाहिए, कोई ऐसी बनी हुई file नहीं जो आगे compile ही न हो।",
      "hi-en": "Yeh Kotlin ki apni khabar liye hai, yeh bhi ki koi kism null ho sakta hai ya nahi aur koi function rukta hai ya nahi, aur inmein se kuchh bhi kapt ki Java wali khidki se nahi bachta tha — banaya gaya code ab null se surakshit kyon ho sakta hai, kaamkaaji wajah yahi hai. `classKind` se processor shaalinta se mana bhi kar sakta hai: classes ke liye bana annotation kisi object par pade to usi prateek par darj ki gayi error banni chahiye, koi aisi bani hui file nahi jo aage compile hi na ho.",
    },
    related: ["Resolver", "getSymbolsWithAnnotation", "SymbolProcessor"],
  },

  CodeGenerator: {
    term: "CodeGenerator",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import com.google.devtools.ksp.processing.CodeGenerator",
    does: {
      en: "Writes the files a processor generates, recording which sources they depend on.",
      hi: "Processor की बनाई files लिखता है, और यह दर्ज करता है कि वे किन sources पर टिकी हैं।",
      "hi-en": "Processor ki banai files likhta hai, aur yeh darj karta hai ki wo kin sources par tiki hain.",
    },
    affects: {
      en: "The dependency list is the part that matters and the part people get wrong: declare too few and a stale generated file survives a source change, producing a build that is correct only after a clean; declare all sources and every edit regenerates everything, which throws away incremental compilation. Naming the exact files a generated one was derived from is what makes KSP fast on the second build.",
      hi: "निर्भरता की सूची ही मायने रखती है और वही लोग गलत करते हैं: बहुत कम बताइए तो source बदलने पर भी पुरानी बनी हुई file बची रह जाती है, और वह build सिर्फ साफ करने के बाद सही होता है; सारे sources बताइए तो हर बदलाव सब कुछ दोबारा बनवाता है, जो बढ़ता हुआ compile होना फेंक देता है। ठीक वही files बताना जिनसे कोई बनी हुई file निकली, यही KSP को दूसरे build पर तेज बनाता है।",
      "hi-en": "Nirbharta ki soochi hi maayne rakhti hai aur wahi log galat karte hain: bahut kam bataiye to source badalne par bhi purani bani hui file bachi reh jaati hai, aur wo build sirf saaf karne ke baad sahi hota hai; saare sources bataiye to har badlaav sab kuchh dobara banwata hai, jo badhta hua compile hona phenk deta hai. Theek wahi files batana jinse koi bani hui file nikli, yahi KSP ko doosre build par tez banata hai.",
    },
    related: ["SymbolProcessor", "Resolver"],
  },

  external: {
    term: "external",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Declares a function whose body is implemented in native code and bound at run time.",
      hi: "ऐसा function बताता है जिसका शरीर native code में है और जो चलते वक्त जुड़ता है।",
      "hi-en": "Aisa function bataata hai jiska shareer native code mein hai aur jo chalte waqt judta hai.",
    },
    affects: {
      en: "The binding is by mangled symbol name — package, class and method encoded into one C identifier — so renaming or moving the Kotlin class breaks the link with an `UnsatisfiedLinkError` at run time rather than a compile error. Every call also crosses the JNI boundary, which costs enough that the rule is to move the loop into native code and not the operation.",
      hi: "जुड़ाव उलझे हुए प्रतीक के नाम से होता है — package, class और method एक ही C की पहचान में गुँथे हुए — तो Kotlin की उस class का नाम बदलना या उसे हटाना उस जोड़ को compile की error से नहीं, चलते वक्त `UnsatisfiedLinkError` से तोड़ता है। हर call JNI की सरहद भी पार करती है, जिसकी कीमत इतनी है कि नियम यही है कि native code में काम नहीं, loop ले जाइए।",
      "hi-en": "Judaav uljhe hue prateek ke naam se hota hai — package, class aur method ek hi C ki pehchaan mein gunthe hue — to Kotlin ki us class ka naam badalna ya use hataana us jod ko compile ki error se nahi, chalte waqt `UnsatisfiedLinkError` se todta hai. Har call JNI ki sarhad bhi paar karti hai, jiski keemat itni hai ki niyam yahi hai ki native code mein kaam nahi, loop le jaaiye.",
    },
    related: ["loadLibrary", "externalNativeBuild", "abiFilters"],
  },

  loadLibrary: {
    term: "loadLibrary",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "kotlin-stdlib",
    importLine: null,
    does: {
      en: "Loads the packaged `.so` for the device's ABI so `external` functions can bind.",
      hi: "उपकरण के ABI के लिए भेजी गई `.so` लादता है ताकि `external` वाले functions जुड़ सकें।",
      "hi-en": "Upkaran ke ABI ke liye bheji gayi `.so` laadta hai taki `external` wale functions jud sakein.",
    },
    affects: {
      en: "It belongs in a `companion object`'s `init`, so the library is loaded once when the class is first touched and never on a call path. It throws when no `.so` matches the device's ABI, which is exactly what an over-trimmed `abiFilters` list produces — a crash that appears only on the architectures you dropped, and therefore never on your test device.",
      hi: "यह किसी `companion object` के `init` की चीज है, तो वह library class को पहली बार छूने पर एक बार लदती है, किसी call के रास्ते पर कभी नहीं। जब उपकरण के ABI से कोई `.so` मेल नहीं खाती तो यह गिरता है, और ठीक वही होता है जब `abiFilters` की सूची जरूरत से ज्यादा काट दी गई हो — ऐसी crash जो सिर्फ उन्हीं बनावटों पर दिखती है जो आपने छोड़ दीं, और इसलिए आपके परखने वाले उपकरण पर कभी नहीं।",
      "hi-en": "Yeh kisi `companion object` ke `init` ki cheez hai, to wo library class ko pehli baar chhoone par ek baar ladti hai, kisi call ke raaste par kabhi nahi. Jab upkaran ke ABI se koi `.so` mel nahi khaati to yeh girta hai, aur theek wahi hota hai jab `abiFilters` ki soochi zaroorat se zyada kaat di gayi ho — aisi crash jo sirf unhi banaavaton par dikhti hai jo aapne chhod deen, aur isliye aapke parakhne wale upkaran par kabhi nahi.",
    },
    related: ["external", "abiFilters", "externalNativeBuild"],
  },

  externalNativeBuild: {
    term: "externalNativeBuild",
    kind: { en: "AGP DSL block", hi: "AGP DSL का हिस्सा", "hi-en": "AGP DSL ka hissa" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Points the Android build at a CMake or ndk-build script that compiles your native code.",
      hi: "Android के build को उस CMake या ndk-build की script पर लगाता है जो आपका native code compile करती है।",
      "hi-en": "Android ke build ko us CMake ya ndk-build ki script par lagata hai jo aapka native code compile karti hai.",
    },
    affects: {
      en: "It makes the native build part of every Gradle build, which is where much of the added build time comes from — one `.so` per ABI per variant. Debug symbols are produced here too, and keeping the unstripped output is the only way a native crash can ever be symbolicated later, so the path it writes to belongs in your CI artifacts.",
      hi: "यह native वाले build को हर Gradle build का हिस्सा बना देता है, और बढ़े हुए build के समय का बड़ा हिस्सा वहीं से आता है — हर रूप के हर ABI की एक `.so`। Debug के प्रतीक भी यहीं बनते हैं, और बिना कटा नतीजा रखना ही अकेला रास्ता है जिससे किसी native crash के नाम आगे कभी खुल सकें, तो जिस रास्ते पर यह लिखता है वह आपके CI के सामान में होना चाहिए।",
      "hi-en": "Yeh native wale build ko har Gradle build ka hissa bana deta hai, aur badhe hue build ke samay ka bada hissa wahin se aata hai — har roop ke har ABI ki ek `.so`. Debug ke prateek bhi yahin bante hain, aur bina kata nateeja rakhna hi akela raasta hai jisse kisi native crash ke naam aage kabhi khul sakein, to jis raaste par yeh likhta hai wo aapke CI ke saamaan mein hona chahiye.",
    },
    related: ["abiFilters", "external", "loadLibrary"],
  },

  abiFilters: {
    term: "abiFilters",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Restricts which CPU architectures native libraries are built and packaged for.",
      hi: "यह सीमित करता है कि native libraries किन CPU की बनावटों के लिए बनें और भेजी जाएँ।",
      "hi-en": "Yeh seemit karta hai ki native libraries kin CPU ki banaavaton ke liye banein aur bheji jaayein.",
    },
    affects: {
      en: "Each ABI is a full copy of your native code in the artifact, so the list is a direct download-size lever — and with an App Bundle Play already delivers only the matching one, which makes trimming it mostly a build-time saving rather than a size one. Dropping `x86` breaks most emulators, and dropping `armeabi-v7a` quietly excludes older and cheaper phones.",
      hi: "हर ABI उस सामान में आपके native code की एक पूरी नकल है, तो यह सूची सीधे download के नाप का लीवर है — और App Bundle के साथ Play पहले से सिर्फ मेल खाती वाली भेजता है, जिससे उसे छाँटना नाप की नहीं, ज्यादातर build के समय की बचत रह जाती है। `x86` हटाना ज्यादातर emulators तोड़ देता है, और `armeabi-v7a` हटाना चुपचाप पुराने और सस्ते फोन बाहर कर देता है।",
      "hi-en": "Har ABI us saamaan mein aapke native code ki ek poori nakal hai, to yeh soochi seedhe download ke naap ka lever hai — aur App Bundle ke saath Play pehle se sirf mel khaati wali bhejta hai, jisse use chhaantna naap ki nahi, zyadatar build ke samay ki bachat reh jaati hai. `x86` hataana zyadatar emulators tod deta hai, aur `armeabi-v7a` hataana chupchaap purane aur saste phone bahar kar deta hai.",
    },
    related: ["externalNativeBuild", "loadLibrary", "external"],
  },

  ExoPlayer: {
    term: "ExoPlayer",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.exoplayer.ExoPlayer",
    does: {
      en: "Media3's implementation of the `Player` interface.",
      hi: "Media3 का बनाया हुआ `Player` वाली interface का रूप।",
      "hi-en": "Media3 ka banaya hua `Player` wali interface ka roop.",
    },
    affects: {
      en: "Creating one acquires a hardware video decoder, and a device exposes only a handful of those for the entire system, so `release()` is not a memory optimisation — every leaked player permanently subtracts from that pool until the process dies. Because devices differ in how many they allow, the resulting failure appears on the fourth screen visit on one phone and the second on another, which is why it survives testing on a single device.",
      hi: "एक बनाना hardware का video वाला decoder ले लेता है, और कोई उपकरण पूरे तंत्र के लिए उनमें से मुट्ठी भर ही देता है, तो `release()` memory की बचत नहीं है — हर छूटा हुआ player उस पूँजी में से हमेशा के लिए घटा देता है जब तक process न मरे। चूँकि उपकरण इसमें अलग-अलग हैं कि कितने चलने देते हैं, वह नाकामी किसी फोन पर चौथी बार screen पर जाने पर दिखती है और किसी पर दूसरी बार, और इसीलिए वह एक ही उपकरण पर की गई परख से बच निकलती है।",
      "hi-en": "Ek banana hardware ka video wala decoder le leta hai, aur koi upkaran poore tantra ke liye unmein se mutthi bhar hi deta hai, to `release()` memory ki bachat nahi hai — har chhoota hua player us poonji mein se hamesha ke liye ghata deta hai jab tak process na mare. Chunki upkaran ismein alag-alag hain ki kitne chalne dete hain, wo naakami kisi phone par chauthi baar screen par jaane par dikhti hai aur kisi par doosri baar, aur isiliye wo ek hi upkaran par ki gayi parakh se bach nikalti hai.",
    },
    docs: "https://developer.android.com/media/media3/exoplayer",
    related: ["MediaItem", "MediaSessionService", "PlayerView", "DefaultLoadControl"],
  },

  MediaItem: {
    term: "MediaItem",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.common.MediaItem",
    does: {
      en: "One thing to play: a URI, plus optional metadata, DRM and clipping settings.",
      hi: "चलाने की एक चीज: कोई URI, और चाहें तो जानकारी, DRM और काटने की सजावट।",
      "hi-en": "Chalane ki ek cheez: koi URI, aur chahein to jaankari, DRM aur kaatne ki sajaavat.",
    },
    affects: {
      en: "The source type is detected from the URI, so the same two lines play a progressive MP4, an HLS manifest or a DASH manifest once the matching artifact is on the classpath — and a stream that plays in the browser but not in the app is usually that missing artifact rather than a bad URL. Metadata set here is what a `MediaSession` publishes to the lock screen, so filling it is what makes the notification look finished.",
      hi: "Source का किस्म URI से पहचाना जाता है, तो मिलती हुई artifact classpath पर आते ही वही दो लाइनें सादा MP4, कोई HLS का manifest या कोई DASH का manifest, सब चला देती हैं — और जो stream browser में चलती है पर ऐप में नहीं, वह आमतौर पर वही छूटी हुई artifact है, गलत URL नहीं। यहाँ रखी जानकारी वही है जो कोई `MediaSession` lock screen तक पहुँचाता है, तो उसे भरना ही उस notification को पूरा दिखाता है।",
      "hi-en": "Source ka kism URI se pehchana jaata hai, to milti hui artifact classpath par aate hi wahi do lainein saada MP4, koi HLS ka manifest ya koi DASH ka manifest, sab chala deti hain — aur jo stream browser mein chalti hai par app mein nahi, wo aamtaur par wahi chhooti hui artifact hai, galat URL nahi. Yahan rakhi jaankari wahi hai jo koi `MediaSession` lock screen tak pahunchata hai, to use bharna hi us notification ko poora dikhata hai.",
    },
    related: ["ExoPlayer", "MediaSession"],
  },

  MediaSession: {
    term: "MediaSession",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.session.MediaSession",
    does: {
      en: "Publishes the current track and playback state to the whole system.",
      hi: "अभी चल रही चीज और playback की हालत को पूरे तंत्र के सामने रख देता है।",
      "hi-en": "Abhi chal rahi cheez aur playback ki haalat ko poore tantra ke saamne rakh deta hai.",
    },
    affects: {
      en: "Everything outside your app talks to this rather than to your player: the media notification, lock screen controls, Bluetooth headset buttons, Android Auto, Wear and the Assistant. That is the real argument for it over a plain foreground service — a service can play audio, but only a session gets all of those without a line of code each.",
      hi: "आपके ऐप के बाहर की हर चीज आपके player से नहीं, इसी से बात करती है: media की notification, lock screen के बटन, Bluetooth के headset वाले बटन, Android Auto, Wear और Assistant। सादी foreground service के मुकाबले इसकी असली दलील यही है — service आवाज चला सकती है, पर वे सब बिना हर एक के लिए एक भी लाइन लिखे सिर्फ session को मिलते हैं।",
      "hi-en": "Aapke app ke bahar ki har cheez aapke player se nahi, isi se baat karti hai: media ki notification, lock screen ke button, Bluetooth ke headset wale button, Android Auto, Wear aur Assistant. Saadi foreground service ke muqable iski asli daleel yahi hai — service aawaz chala sakti hai, par wo sab bina har ek ke liye ek bhi line likhe sirf session ko milte hain.",
    },
    related: ["MediaSessionService", "MediaController", "ExoPlayer"],
  },

  MediaSessionService: {
    term: "MediaSessionService",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.session.MediaSessionService",
    does: {
      en: "A service that owns a player and its session, keeping playback alive without any Activity.",
      hi: "ऐसी service जो player और उसका session रखती है, और बिना किसी Activity के playback जिंदा रखती है।",
      "hi-en": "Aisi service jo player aur uska session rakhti hai, aur bina kisi Activity ke playback zinda rakhti hai.",
    },
    affects: {
      en: "This is the answer for music, podcasts and audiobooks, and the ownership rule that comes with it is strict: exactly one component creates and releases the player, and for background audio that is the service — a screen must never release something it does not own. Screens playing inline video are the opposite case, where the player belongs to the screen and is released in `onStop`.",
      hi: "संगीत, podcast और audiobook का जवाब यही है, और उसके साथ आने वाला मालिकाना नियम सख्त है: ठीक एक ही हिस्सा player बनाता और छोड़ता है, और पीछे चलती आवाज के लिए वह यही service है — किसी screen को वह चीज कभी नहीं छोड़नी चाहिए जिसकी वह मालिक नहीं। भीतर video चलाने वाली screens उलटा मामला हैं, जहाँ player screen का है और `onStop` में छूटता है।",
      "hi-en": "Sangeet, podcast aur audiobook ka jawaab yahi hai, aur uske saath aane wala maalikaana niyam sakht hai: theek ek hi hissa player banata aur chhodta hai, aur peechhe chalti aawaz ke liye wo yahi service hai — kisi screen ko wo cheez kabhi nahi chhodni chahiye jiski wo maalik nahi. Bheetar video chalane wali screens ulta maamla hain, jahan player screen ka hai aur `onStop` mein chhootta hai.",
    },
    related: ["MediaSession", "MediaController", "ExoPlayer"],
  },

  MediaController: {
    term: "MediaController",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.session.MediaController",
    does: {
      en: "A `Player` that forwards every call to a session, wherever that session lives.",
      hi: "ऐसा `Player` जो हर call किसी session तक पहुँचा देता है, वह session चाहे कहीं भी हो।",
      "hi-en": "Aisa `Player` jo har call kisi session tak pahuncha deta hai, wo session chahe kahin bhi ho.",
    },
    affects: {
      en: "Because it implements `Player`, a screen binds to it exactly as it would to a local player — which means the UI never learns whether playback is running in-process or inside a service, and moving playback into a service later changes no UI code. It connects asynchronously, so the small honest detail is that the controller is not usable the instant you ask for it.",
      hi: "चूँकि यह `Player` को लागू करता है, कोई screen इससे ठीक वैसे ही जुड़ती है जैसे अपने ही किसी player से — यानी UI को कभी पता नहीं चलता कि playback इसी process में चल रहा है या किसी service में, और playback को बाद में service में ले जाना UI का कोई code नहीं बदलता। यह अपने आप चलते हुए जुड़ता है, तो छोटी ईमानदार बात यह है कि माँगते ही वह controller इस्तेमाल के लायक नहीं होता।",
      "hi-en": "Chunki yeh `Player` ko laagu karta hai, koi screen isse theek waise hi judti hai jaise apne hi kisi player se — yaani UI ko kabhi pata nahi chalta ki playback isi process mein chal raha hai ya kisi service mein, aur playback ko baad mein service mein le jaana UI ka koi code nahi badalta. Yeh apne aap chalte hue judta hai, to chhoti imaandaar baat yeh hai ki maangte hi wo controller istemaal ke layak nahi hota.",
    },
    related: ["MediaSession", "MediaSessionService"],
  },

  PlayerView: {
    term: "PlayerView",
    kind: { en: "View", hi: "View", "hi-en": "View" },
    source: "jetpack",
    importLine: "import androidx.media3.ui.PlayerView",
    does: {
      en: "The surface and standard controls for a `Player`.",
      hi: "किसी `Player` के लिए सतह और आम बटन।",
      "hi-en": "Kisi `Player` ke liye satah aur aam button.",
    },
    affects: {
      en: "In Compose it is used through `AndroidView`, and the player must be released from the same place that created it rather than by the view — a view being disposed does not release a decoder. It draws into a `SurfaceView` by default, which costs less power than a `TextureView` and is required for secure DRM playback, so switching to a texture for the sake of an animation is a decision with real cost.",
      hi: "Compose में इसे `AndroidView` से इस्तेमाल किया जाता है, और player को वहीं से छोड़ना चाहिए जहाँ वह बना, view से नहीं — view के हटने से कोई decoder नहीं छूटता। यह तयशुदा तौर पर `SurfaceView` में बनाता है, जो `TextureView` से कम बिजली लेता है और सुरक्षित DRM वाले playback के लिए जरूरी है, तो किसी animation के लिए texture पर जाना असली कीमत वाला फैसला है।",
      "hi-en": "Compose mein ise `AndroidView` se istemaal kiya jaata hai, aur player ko wahin se chhodna chahiye jahan wo bana, view se nahi — view ke hatne se koi decoder nahi chhootta. Yeh tayshuda taur par `SurfaceView` mein banata hai, jo `TextureView` se kam bijli leta hai aur surakshit DRM wale playback ke liye zaroori hai, to kisi animation ke liye texture par jaana asli keemat wala faisla hai.",
    },
    related: ["ExoPlayer", "MediaItem"],
  },

  DefaultLoadControl: {
    term: "DefaultLoadControl",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.media3.exoplayer.DefaultLoadControl",
    does: {
      en: "Decides how much media is buffered before playback starts and how far ahead it reads.",
      hi: "तय करता है कि playback शुरू होने से पहले कितना जमा हो और वह कितना आगे तक पढ़े।",
      "hi-en": "Tay karta hai ki playback shuru hone se pehle kitna jama ho aur wo kitna aage tak padhe.",
    },
    affects: {
      en: "Its numbers trade directly against each other. Lowering `bufferForPlaybackMs` makes video start faster and stall sooner; raising `maxBufferMs` prevents stalls but downloads data the user may never watch, which is expensive on a metered connection and wasted when people skip. Judge a change by rebuffer ratio — the share of watch time spent stalled — rather than by how it feels on office wifi.",
      hi: "इसके अंक सीधे आपस में सौदा करते हैं। `bufferForPlaybackMs` घटाना video को जल्दी शुरू कराता है और जल्दी अटकाता भी है; `maxBufferMs` बढ़ाना अटकना रोकता है पर वह data उतार लेता है जो शायद कोई देखे ही नहीं, जो नाप कर पैसे लेने वाले connection पर महँगा है और लोग आगे कूद जाएँ तो बेकार। किसी बदलाव को दफ्तर के wifi पर कैसा लगा उससे नहीं, rebuffer ratio से आँकिए — देखे गए समय में से अटके रहने का हिस्सा।",
      "hi-en": "Iske ank seedhe aapas mein sauda karte hain. `bufferForPlaybackMs` ghatana video ko jaldi shuru karata hai aur jaldi atkaata bhi hai; `maxBufferMs` badhana atakna rokta hai par wo data utaar leta hai jo shayad koi dekhe hi nahi, jo naap kar paise lene wale connection par mehnga hai aur log aage kood jaayein to bekaar. Kisi badlaav ko daftar ke wifi par kaisa laga usse nahi, rebuffer ratio se aankiye — dekhe gaye samay mein se atke rehne ka hissa.",
    },
    related: ["ExoPlayer", "MediaItem"],
  },

  InputImage: {
    term: "InputImage",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.mlkit.vision.common.InputImage",
    does: {
      en: "Wraps a bitmap, buffer or camera frame in the form ML Kit's detectors accept.",
      hi: "किसी bitmap, buffer या camera के frame को उस शक्ल में लपेटता है जो ML Kit के पहचानने वाले लेते हैं।",
      "hi-en": "Kisi bitmap, buffer ya camera ke frame ko us shakl mein lapetta hai jo ML Kit ke pehchanne wale lete hain.",
    },
    affects: {
      en: "`fromMediaImage` takes a rotation argument for a reason, and dropping it is the single most common on-device ML bug: the model is handed sideways input and returns empty results rather than an error. Gallery images do not show the problem because decoding already applied their EXIF orientation, which is exactly why testing on still images misses it.",
      hi: "`fromMediaImage` घुमाव का argument बिना वजह नहीं लेता, और उसे छोड़ देना उपकरण पर ML की सबसे आम अकेली गड़बड़ी है: model को टेढ़ा input थमा दिया जाता है और वह error नहीं, खाली नतीजे लौटाता है। Gallery की तस्वीरें यह दिक्कत नहीं दिखातीं क्योंकि खोलते वक्त उनकी EXIF वाली दिशा पहले ही लग चुकी होती है, और ठीक इसीलिए ठहरी तस्वीरों पर की गई परख इसे चूक जाती है।",
      "hi-en": "`fromMediaImage` ghumaav ka argument bina wajah nahi leta, aur use chhod dena upkaran par ML ki sabse aam akeli gadbadi hai: model ko tedha input thama diya jaata hai aur wo error nahi, khaali nateeje lautata hai. Gallery ki tasveerein yeh dikkat nahi dikhatin kyonki kholte waqt unki EXIF wali disha pehle hi lag chuki hoti hai, aur theek isiliye thehri tasveeron par ki gayi parakh ise chook jaati hai.",
    },
    related: ["rotationDegrees", "TextRecognition"],
  },

  rotationDegrees: {
    term: "rotationDegrees",
    kind: { en: "Property", hi: "खूबी", "hi-en": "Khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "How far a camera frame must be rotated to appear upright.",
      hi: "Camera के किसी frame को सीधा दिखने के लिए कितना घुमाना पड़ेगा।",
      "hi-en": "Camera ke kisi frame ko seedha dikhne ke liye kitna ghumana padega.",
    },
    affects: {
      en: "Camera sensors are mounted in a fixed orientation and always emit buffers in it, so a portrait phone still produces a landscape frame — `ImageProxy` reports the correction you owe rather than applying it. Anything that consumes the frame needs this value passed along, and because it is a missing argument rather than a device quirk, the resulting failure reproduces identically on every phone.",
      hi: "Camera के sensor एक तय दिशा में जड़े होते हैं और हमेशा उसी में buffer देते हैं, तो सीधा पकड़ा फोन भी आड़ा frame बनाता है — `ImageProxy` वह सुधार खुद लगाता नहीं, आप पर बकाया बताता है। उस frame को लेने वाली हर चीज को यह मान आगे भेजना पड़ता है, और चूँकि यह उपकरण की सनक नहीं, छूटा हुआ argument है, वह नाकामी हर फोन पर एक जैसी दोहराती है।",
      "hi-en": "Camera ke sensor ek tay disha mein jade hote hain aur hamesha usi mein buffer dete hain, to seedha pakda phone bhi aada frame banata hai — `ImageProxy` wo sudhaar khud lagata nahi, aap par bakaya bataata hai. Us frame ko lene wali har cheez ko yeh maan aage bhejna padta hai, aur chunki yeh upkaran ki sanak nahi, chhoota hua argument hai, wo naakami har phone par ek jaisi dohraati hai.",
    },
    related: ["InputImage", "TextRecognition"],
  },

  TextRecognition: {
    term: "TextRecognition",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.mlkit.vision.text.TextRecognition",
    does: {
      en: "Creates an ML Kit recogniser that reads text out of an image.",
      hi: "ML Kit का ऐसा पहचानने वाला बनाता है जो तस्वीर में से text पढ़ता है।",
      "hi-en": "ML Kit ka aisa pehchanne wala banata hai jo tasveer mein se text padhta hai.",
    },
    affects: {
      en: "Whether the model ships inside your app or arrives from Google Play services is a product decision, not a build detail: the unbundled path keeps the app small but leaves one state your UI must actually handle — the model is not downloaded yet, which is the first thing a user on a poor connection sees. Whatever you feed it, close the `ImageProxy` in the completion listener or the camera stops delivering frames after a few.",
      hi: "वह model आपके ऐप के भीतर जाए या Google Play services से आए, यह build का ब्योरा नहीं, उत्पाद का फैसला है: अलग वाला रास्ता ऐप छोटा रखता है पर एक ऐसी हालत छोड़ जाता है जिसे आपकी UI को सच में सँभालना है — model अभी उतरा नहीं है, और कमजोर connection वाला उपयोगकर्ता सबसे पहले यही देखता है। आप जो भी खिलाएँ, पूरा होने वाले listener में `ImageProxy` बंद कीजिए वरना कुछ frames बाद camera देना ही बंद कर देता है।",
      "hi-en": "Wo model aapke app ke bheetar jaaye ya Google Play services se aaye, yeh build ka byora nahi, utpaad ka faisla hai: alag wala raasta app chhota rakhta hai par ek aisi haalat chhod jaata hai jise aapki UI ko sach mein sambhalna hai — model abhi utra nahi hai, aur kamzor connection wala upyogkarta sabse pehle yahi dekhta hai. Aap jo bhi khilaayein, poora hone wale listener mein `ImageProxy` band kijiye warna kuchh frames baad camera dena hi band kar deta hai.",
    },
    docs: "https://developers.google.com/ml-kit/vision/text-recognition/v2/android",
    related: ["InputImage", "rotationDegrees"],
  },
};
