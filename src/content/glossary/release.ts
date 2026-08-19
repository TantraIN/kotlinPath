import type { Glossary } from "./types";

/** The Android Gradle Plugin's build DSL, signing, and Play Billing. */
export const RELEASE_GLOSSARY: Glossary = {
  buildTypes: {
    term: "buildTypes",
    kind: { en: "AGP DSL block", hi: "AGP DSL का हिस्सा", "hi-en": "AGP DSL ka hissa" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Defines how the same source is compiled differently — debug, release, and any you add.",
      hi: "बताता है कि वही source अलग-अलग कैसे compile हो — debug, release, और जो आप जोड़ें।",
      "hi-en": "Bataata hai ki wahi source alag-alag kaise compile ho — debug, release, aur jo aap jodein.",
    },
    affects: {
      en: "A build type changes shrinking, signing, debuggability and `BuildConfig` constants, but never the code, so anything conditional lives behind a constant rather than in a separate source set. The trap is testing a benchmark or a QA build in `debug`: debuggable builds disable several JIT optimisations, so every number you measure there is wrong in your favour.",
      hi: "Build type छँटाई, हस्ताक्षर, debug हो पाना और `BuildConfig` की तयशुदा चीजें बदलता है, code कभी नहीं, तो शर्त वाली हर चीज किसी अलग source में नहीं, किसी तयशुदा चीज के पीछे रहती है। जाल यह है कि benchmark या QA वाला build `debug` में परखा जाए: debug हो सकने वाले builds में JIT की कई बेहतरियाँ बंद रहती हैं, तो वहाँ नापा हर अंक आपके ही हक में गलत होता है।",
      "hi-en": "Build type chhantai, hastakshar, debug ho paana aur `BuildConfig` ki tayshuda cheezein badalta hai, code kabhi nahi, to shart wali har cheez kisi alag source mein nahi, kisi tayshuda cheez ke peechhe rehti hai. Jaal yeh hai ki benchmark ya QA wala build `debug` mein parkha jaaye: debug ho sakne wale builds mein JIT ki kai behtariyan band rehti hain, to wahan naapa har ank aapke hi haq mein galat hota hai.",
    },
    related: ["productFlavors", "isMinifyEnabled", "isDebuggable", "buildConfigField"],
  },

  productFlavors: {
    term: "productFlavors",
    kind: { en: "AGP DSL block", hi: "AGP DSL का हिस्सा", "hi-en": "AGP DSL ka hissa" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Defines variants of the app itself — free and paid, dev and prod, per-brand builds.",
      hi: "खुद ऐप के रूप बताता है — मुफ्त और सशुल्क, dev और prod, हर brand का build।",
      "hi-en": "Khud app ke roop bataata hai — muft aur sashulk, dev aur prod, har brand ka build.",
    },
    affects: {
      en: "Flavours multiply with build types, so three flavours and two build types is six variants, each of which CI can be asked to build — the count is the thing that quietly turns a two-minute build into a twelve-minute one. Unlike a build type, a flavour can have its own source set and its own resources, which is what makes per-brand apps possible without a fork.",
      hi: "Flavours build types से गुणा होते हैं, तो तीन flavours और दो build types छह रूप हैं, और CI से हर एक बनवाया जा सकता है — यही गिनती चुपचाप दो मिनट के build को बारह मिनट का बना देती है। Build type के उलट, किसी flavour का अपना source और अपने संसाधन हो सकते हैं, और यही बिना अलग शाखा बनाए हर brand के ऐप मुमकिन करता है।",
      "hi-en": "Flavours build types se guna hote hain, to teen flavours aur do build types chhah roop hain, aur CI se har ek banwaya ja sakta hai — yahi ginti chupchaap do minute ke build ko baarah minute ka bana deti hai. Build type ke ulat, kisi flavour ka apna source aur apne sansaadhan ho sakte hain, aur yahi bina alag shaakha banaaye har brand ke app mumkin karta hai.",
    },
    related: ["buildTypes", "flavorDimensions", "applicationIdSuffix", "androidComponents"],
  },

  flavorDimensions: {
    term: "flavorDimensions",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Groups flavours into independent axes, one flavour chosen from each.",
      hi: "Flavours को अलग-अलग धुरियों में बाँटता है, हर एक से एक flavour चुना जाता है।",
      "hi-en": "Flavours ko alag-alag dhuriyon mein baantta hai, har ek se ek flavour chuna jaata hai.",
    },
    affects: {
      en: "Two dimensions — say environment and tier — produce every combination, so `devFree`, `devPaid`, `prodFree`, `prodPaid` all exist without being written out. Declaring a dimension is mandatory the moment you have any flavour, and forgetting it is the error most people meet first; the fix is one line, not a restructure.",
      hi: "दो धुरियाँ — मान लीजिए माहौल और दर्जा — हर जोड़ बना देती हैं, तो `devFree`, `devPaid`, `prodFree`, `prodPaid`, सब बिना लिखे मौजूद हैं। कोई भी flavour होते ही धुरी बताना जरूरी है, और उसे भूलना वही error है जो ज्यादातर लोगों को पहले मिलती है; उसका हल एक लाइन है, कोई फेरबदल नहीं।",
      "hi-en": "Do dhuriyan — maan lijiye maahaul aur darja — har jod bana deti hain, to `devFree`, `devPaid`, `prodFree`, `prodPaid`, sab bina likhe maujood hain. Koi bhi flavour hote hi dhuri batana zaroori hai, aur use bhoolna wahi error hai jo zyadatar logon ko pehle milti hai; uska hal ek line hai, koi pherbadal nahi.",
    },
    related: ["productFlavors", "androidComponents"],
  },

  applicationIdSuffix: {
    term: "applicationIdSuffix",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Appends to the package id so a variant installs alongside the others.",
      hi: "Package की पहचान के आगे जोड़ता है ताकि वह रूप बाकियों के साथ-साथ लग सके।",
      "hi-en": "Package ki pehchaan ke aage jodta hai taki wo roop baakiyon ke saath-saath lag sake.",
    },
    affects: {
      en: "Without it a debug build replaces the release build on the tester's phone, and the two cannot be compared side by side. What it does not change is the package name in code, so anything built from `BuildConfig.APPLICATION_ID` — a `FileProvider` authority, a deep link host, an OAuth redirect — must be derived rather than hardcoded, or the debug variant breaks in ways that look unrelated.",
      hi: "उसके बिना debug वाला build परखने वाले के फोन पर release वाले की जगह ले लेता है, और दोनों साथ-साथ मिलाए ही नहीं जा सकते। जो वह नहीं बदलता वह है code में package का नाम, तो `BuildConfig.APPLICATION_ID` से बनी हर चीज — कोई `FileProvider` का अधिकार, कोई deep link का घर, कोई OAuth का मोड़ — गढ़ी जानी चाहिए, सीधे लिखी नहीं, वरना debug वाला रूप ऐसे टूटता है जो बेमतलब दिखता है।",
      "hi-en": "Uske bina debug wala build parakhne wale ke phone par release wale ki jagah le leta hai, aur donon saath-saath milaaye hi nahi ja sakte. Jo wo nahi badalta wo hai code mein package ka naam, to `BuildConfig.APPLICATION_ID` se bani har cheez — koi `FileProvider` ka adhikaar, koi deep link ka ghar, koi OAuth ka mod — gadhi jaani chahiye, seedhe likhi nahi, warna debug wala roop aise toot-ta hai jo bematlab dikhta hai.",
    },
    related: ["buildTypes", "productFlavors", "BuildConfig"],
  },

  isMinifyEnabled: {
    term: "isMinifyEnabled",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Turns on R8 — dead code removal, inlining and obfuscation.",
      hi: "R8 चालू करता है — मरे हुए code का हटना, inline होना और नाम उलझाना।",
      "hi-en": "R8 chaalu karta hai — mare hue code ka hatna, inline hona aur naam uljhana.",
    },
    affects: {
      en: "It typically removes a third to a half of the code, and it is also the single most common source of a bug that exists only in release: anything reached by reflection — a `Gson` model, a `Class.forName`, a name from a string — is invisible to R8 and gets deleted or renamed. Every stack trace from a minified build needs the matching `mapping.txt`, which is generated per build and worthless if you lose it.",
      hi: "यह आमतौर पर एक-तिहाई से आधा code हटा देता है, और सिर्फ release में दिखने वाली गड़बड़ी की सबसे आम वजह भी यही है: reflection से पहुँची हर चीज — कोई `Gson` का model, कोई `Class.forName`, string से आया कोई नाम — R8 को दिखती ही नहीं और मिटा या बदल दी जाती है। छँटे हुए build की हर stack trace को उसी की `mapping.txt` चाहिए, जो हर build पर बनती है और खो जाए तो बेकार है।",
      "hi-en": "Yeh aamtaur par ek-tihaai se aadha code hata deta hai, aur sirf release mein dikhne wali gadbadi ki sabse aam wajah bhi yahi hai: reflection se pahunchi har cheez — koi `Gson` ka model, koi `Class.forName`, string se aaya koi naam — R8 ko dikhti hi nahi aur mita ya badal di jaati hai. Chhante hue build ki har stack trace ko usi ki `mapping.txt` chahiye, jo har build par banti hai aur kho jaaye to bekaar hai.",
    },
    related: ["isShrinkResources", "proguardFiles", "buildTypes"],
  },

  isShrinkResources: {
    term: "isShrinkResources",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Removes drawables, layouts and strings that no surviving code references.",
      hi: "वे drawables, layouts और strings हटाता है जिन्हें बचा हुआ code नहीं छूता।",
      "hi-en": "Wo drawables, layouts aur strings hataata hai jinhein bacha hua code nahi chhoota.",
    },
    affects: {
      en: "It only works with `isMinifyEnabled`, because it decides what is unused from the shrunk code graph. The one thing it cannot see through is `getIdentifier` — a resource looked up by a name assembled at run time has no reference anywhere, so it is deleted and the lookup returns zero. That is why dynamic resource names need a `keep.xml`, or better, a `when` over real ids.",
      hi: "यह सिर्फ `isMinifyEnabled` के साथ चलता है, क्योंकि यह छँटे हुए code के जाल से तय करता है कि क्या बेकार है। जिस एक चीज के आर-पार यह नहीं देख सकता वह है `getIdentifier` — चलते वक्त जोड़े गए नाम से ढूँढ़े गए संसाधन का कहीं कोई हवाला नहीं होता, तो वह मिट जाता है और वह खोज शून्य लौटाती है। इसीलिए बदलते संसाधनों के नामों को `keep.xml` चाहिए, या उससे बेहतर, असली ids पर कोई `when`।",
      "hi-en": "Yeh sirf `isMinifyEnabled` ke saath chalta hai, kyonki yeh chhante hue code ke jaal se tay karta hai ki kya bekaar hai. Jis ek cheez ke aar-paar yeh nahi dekh sakta wo hai `getIdentifier` — chalte waqt jode gaye naam se dhoondhe gaye sansaadhan ka kahin koi hawala nahi hota, to wo mit jaata hai aur wo khoj shoonya lautati hai. Isiliye badalte sansaadhanon ke naamon ko `keep.xml` chahiye, ya usse behtar, asli ids par koi `when`.",
    },
    related: ["isMinifyEnabled", "proguardFiles"],
  },

  isDebuggable: {
    term: "isDebuggable",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Marks the build as attachable by a debugger.",
      hi: "उस build को debugger से जुड़ सकने वाला बताता है।",
      "hi-en": "Us build ko debugger se jud sakne wala bataata hai.",
    },
    affects: {
      en: "A debuggable build runs measurably slower — the JIT holds back optimisations so breakpoints stay meaningful — so it is the wrong place to measure anything, and a benchmark build type exists precisely to be release-like but signed with debug keys. It also loosens what other apps on the device may inspect, which is why Play rejects a debuggable release.",
      hi: "Debug हो सकने वाला build नापने लायक धीमा चलता है — JIT बेहतरियाँ रोक लेता है ताकि breakpoints मतलब वाले बने रहें — तो कुछ भी नापने के लिए वह गलत जगह है, और benchmark वाला build type ठीक इसीलिए है कि वह release जैसा हो पर debug की चाबियों से हस्ताक्षरित। यह उपकरण के दूसरे ऐप्स के देख पाने को भी ढीला कर देता है, और इसीलिए Play debug हो सकने वाला release ठुकरा देता है।",
      "hi-en": "Debug ho sakne wala build naapne layak dheema chalta hai — JIT behtariyan rok leta hai taki breakpoints matlab wale bane rahein — to kuchh bhi naapne ke liye wo galat jagah hai, aur benchmark wala build type theek isiliye hai ki wo release jaisa ho par debug ki chaabiyon se hastaksharit. Yeh upkaran ke doosre apps ke dekh paane ko bhi dheela kar deta hai, aur isiliye Play debug ho sakne wala release thukra deta hai.",
    },
    related: ["buildTypes", "signingConfig", "CompilationMode"],
  },

  proguardFiles: {
    term: "proguardFiles",
    kind: { en: "AGP DSL function", hi: "AGP DSL का function", "hi-en": "AGP DSL ka function" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Lists the rule files that tell R8 what it must not remove or rename.",
      hi: "वे नियमों वाली files गिनाता है जो R8 को बताती हैं कि क्या हटाना या बदलना नहीं है।",
      "hi-en": "Wo niyamon wali files ginaata hai jo R8 ko bataati hain ki kya hataana ya badalna nahi hai.",
    },
    affects: {
      en: "Most libraries ship their own rules, so your file should be short and every line in it should name the reflection that made it necessary — a `-keep class **` added to make a crash go away silently disables shrinking for a whole package. Rules are additive across all listed files and the library ones, so removing your line does not necessarily change the output.",
      hi: "ज्यादातर libraries अपने नियम खुद भेजती हैं, तो आपकी file छोटी होनी चाहिए और उसकी हर लाइन उस reflection का नाम ले जिसने उसे जरूरी बनाया — किसी crash को चुप कराने को जोड़ा गया `-keep class **` पूरे package की छँटाई चुपचाप बंद कर देता है। नियम गिनाई गई सब files और libraries वाली, सबमें जुड़ते जाते हैं, तो आपकी लाइन हटाने से नतीजा जरूरी नहीं बदले।",
      "hi-en": "Zyadatar libraries apne niyam khud bhejti hain, to aapki file chhoti honi chahiye aur uski har line us reflection ka naam le jisne use zaroori banaya — kisi crash ko chup karane ko joda gaya `-keep class **` poore package ki chhantai chupchaap band kar deta hai. Niyam ginaai gayi sab files aur libraries wali, sabmein judte jaate hain, to aapki line hataane se nateeja zaroori nahi badle.",
    },
    related: ["isMinifyEnabled", "isShrinkResources"],
  },

  buildConfigField: {
    term: "buildConfigField",
    kind: { en: "AGP DSL function", hi: "AGP DSL का function", "hi-en": "AGP DSL ka function" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Adds a constant to the generated `BuildConfig` class, per build type or flavour.",
      hi: "बने हुए `BuildConfig` class में हर build type या flavour की एक तयशुदा चीज जोड़ता है।",
      "hi-en": "Bane hue `BuildConfig` class mein har build type ya flavour ki ek tayshuda cheez jodta hai.",
    },
    affects: {
      en: "The third argument is Kotlin source, not a value, which is why a string needs escaped quotes inside it and why forgetting them fails at compile time in a generated file you did not write. Being a compile-time constant is the useful part — R8 can fold it and delete the dead branch — and the dangerous part, since a key placed here ships in plain sight inside the APK.",
      hi: "तीसरा argument कोई मान नहीं, Kotlin का source है, और इसीलिए किसी string को भीतर बचाए हुए उद्धरण चाहिए और इसीलिए उन्हें भूलना उस बनी हुई file में compile वक्त टूटता है जो आपने लिखी ही नहीं। Compile वक्त की तयशुदा चीज होना ही काम की बात है — R8 उसे मोड़कर मरी शाखा हटा सकता है — और खतरनाक बात भी, क्योंकि यहाँ रखी चाबी APK के भीतर सबके सामने चली जाती है।",
      "hi-en": "Teesra argument koi maan nahi, Kotlin ka source hai, aur isiliye kisi string ko bheetar bachaaye hue uddharan chahiye aur isiliye unhein bhoolna us bani hui file mein compile waqt toot-ta hai jo aapne likhi hi nahi. Compile waqt ki tayshuda cheez hona hi kaam ki baat hai — R8 use modkar mari shaakha hata sakta hai — aur khatarnaak baat bhi, kyonki yahan rakhi chaabi APK ke bheetar sabke saamne chali jaati hai.",
    },
    related: ["BuildConfig", "resValue", "manifestPlaceholders"],
  },

  resValue: {
    term: "resValue",
    kind: { en: "AGP DSL function", hi: "AGP DSL का function", "hi-en": "AGP DSL ka function" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Generates a resource — usually a string — that differs per build type or flavour.",
      hi: "ऐसा संसाधन बनाता है — आमतौर पर कोई string — जो हर build type या flavour पर अलग हो।",
      "hi-en": "Aisa sansaadhan banata hai — aamtaur par koi string — jo har build type ya flavour par alag ho.",
    },
    affects: {
      en: "This is how the debug build gets a different launcher name, which sounds cosmetic until a tester files a bug against the wrong install. Unlike `buildConfigField` it produces a real resource, so it can be referenced from the manifest and from XML, not only from Kotlin — and it collides loudly if a resource of the same name also exists in `res/values`.",
      hi: "यही तरीका है जिससे debug वाले build का launcher पर नाम अलग होता है, जो ऊपरी लगता है जब तक कोई परखने वाला गलत install के खिलाफ शिकायत न लिख दे। `buildConfigField` के उलट यह असली संसाधन बनाता है, तो उसे manifest और XML से भी छुआ जा सकता है, सिर्फ Kotlin से नहीं — और अगर उसी नाम का संसाधन `res/values` में भी हो तो वह जोर से टकराता है।",
      "hi-en": "Yahi tareeka hai jisse debug wale build ka launcher par naam alag hota hai, jo oopri lagta hai jab tak koi parakhne wala galat install ke khilaaf shikaayat na likh de. `buildConfigField` ke ulat yeh asli sansaadhan banata hai, to use manifest aur XML se bhi chhua ja sakta hai, sirf Kotlin se nahi — aur agar usi naam ka sansaadhan `res/values` mein bhi ho to wo zor se takraata hai.",
    },
    related: ["buildConfigField", "manifestPlaceholders"],
  },

  manifestPlaceholders: {
    term: "manifestPlaceholders",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Substitutes `${name}` markers in the manifest with a per-variant value.",
      hi: "Manifest में `${name}` वाले निशानों की जगह हर रूप का अपना मान रखता है।",
      "hi-en": "Manifest mein `${name}` wale nishaanon ki jagah har roop ka apna maan rakhta hai.",
    },
    affects: {
      en: "It is the only way to vary something the manifest needs before your code runs — a maps API key, a deep-link host, an SDK id — because `BuildConfig` does not exist yet at manifest-merge time. A missing placeholder fails the merge with an error naming the marker, which is one of the more readable build failures you will meet.",
      hi: "आपका code चलने से पहले manifest को जो चाहिए उसे बदलने का यही अकेला रास्ता है — कोई maps की API की चाबी, कोई deep link का घर, कोई SDK की पहचान — क्योंकि manifest के जुड़ने के वक्त `BuildConfig` होता ही नहीं। कोई छूटा हुआ placeholder उस जुड़ाव को उस निशान का नाम लेती error से गिरा देता है, जो build की ज्यादा पढ़ी जा सकने वाली नाकामियों में से है।",
      "hi-en": "Aapka code chalne se pehle manifest ko jo chahiye use badalne ka yahi akela raasta hai — koi maps ki API ki chaabi, koi deep link ka ghar, koi SDK ki pehchaan — kyonki manifest ke judne ke waqt `BuildConfig` hota hi nahi. Koi chhoota hua placeholder us judaav ko us nishaan ka naam leti error se gira deta hai, jo build ki zyada padhi ja sakne wali naakamiyon mein se hai.",
    },
    related: ["buildConfigField", "resValue"],
  },

  signingConfigs: {
    term: "signingConfigs",
    kind: { en: "AGP DSL block", hi: "AGP DSL का हिस्सा", "hi-en": "AGP DSL ka hissa" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Declares the keystores available to sign builds with.",
      hi: "उन keystores को बताता है जिनसे builds पर हस्ताक्षर हो सकते हैं।",
      "hi-en": "Un keystores ko bataata hai jinse builds par hastakshar ho sakte hain.",
    },
    affects: {
      en: "The signature is the app's identity to Android: an update signed with a different key is not an update, it is a different app that cannot be installed over the old one. There is no recovery from losing the key beyond Play App Signing, where Google holds it, which is the main argument for enrolling.",
      hi: "Android के लिए हस्ताक्षर ही ऐप की पहचान है: किसी दूसरी चाबी से हस्ताक्षरित update, update है ही नहीं, वह एक अलग ऐप है जो पुराने के ऊपर लग ही नहीं सकता। चाबी खो जाने से लौटने का कोई रास्ता नहीं, सिवाय Play App Signing के, जहाँ वह Google के पास रहती है, और उसमें शामिल होने की मुख्य दलील यही है।",
      "hi-en": "Android ke liye hastakshar hi app ki pehchaan hai: kisi doosri chaabi se hastaksharit update, update hai hi nahi, wo ek alag app hai jo purane ke oopar lag hi nahi sakta. Chaabi kho jaane se lautne ka koi raasta nahi, siwaay Play App Signing ke, jahan wo Google ke paas rehti hai, aur usmein shaamil hone ki mukhya daleel yahi hai.",
    },
    related: ["signingConfig", "storeFile", "storePassword"],
  },

  signingConfig: {
    term: "signingConfig",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Picks which declared keystore a build type signs with.",
      hi: "चुनता है कि कोई build type किस बताए हुए keystore से हस्ताक्षर करे।",
      "hi-en": "Chunta hai ki koi build type kis bataye hue keystore se hastakshar kare.",
    },
    affects: {
      en: "Leaving it unset on `release` produces an unsigned build that Play silently refuses, usually discovered at the end of a release day. Pointing a benchmark build type at the debug config is the deliberate exception: it makes the build installable locally while staying release-like in every way that affects measurement.",
      hi: "`release` पर इसे न रखना बिना हस्ताक्षर वाला build बनाता है जिसे Play चुपचाप ठुकरा देता है, और पता आमतौर पर release वाले दिन के आखिर में चलता है। किसी benchmark वाले build type को debug की सजावट पर लगाना जानबूझकर रखा अपवाद है: इससे वह build यहाँ लग जाता है और नाप पर असर डालने वाली हर बात में release जैसा बना रहता है।",
      "hi-en": "`release` par ise na rakhna bina hastakshar wala build banata hai jise Play chupchaap thukra deta hai, aur pata aamtaur par release wale din ke aakhir mein chalta hai. Kisi benchmark wale build type ko debug ki sajaavat par lagana jaanboojhkar rakha apvaad hai: isse wo build yahan lag jaata hai aur naap par asar daalne wali har baat mein release jaisa bana rehta hai.",
    },
    related: ["signingConfigs", "buildTypes", "isDebuggable"],
  },

  storeFile: {
    term: "storeFile",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Path to the `.jks` keystore holding the signing key.",
      hi: "हस्ताक्षर की चाबी रखने वाली `.jks` keystore का रास्ता।",
      "hi-en": "Hastakshar ki chaabi rakhne wali `.jks` keystore ka raasta.",
    },
    affects: {
      en: "The keystore must never be in the repository, and neither must the path be hardcoded to one machine — read it from a properties file that is gitignored or from a CI secret, so the same build file works for a laptop and a runner. In CI the usual shape is a base64 secret decoded into a temporary file that the job deletes afterwards.",
      hi: "वह keystore कभी repository में नहीं होनी चाहिए, और न ही रास्ता किसी एक मशीन का सीधे लिखा हो — उसे gitignore की गई किसी properties वाली file से या CI के किसी राज से पढ़िए, ताकि वही build की file laptop और runner, दोनों पर चले। CI में आम शक्ल है base64 का कोई राज जो किसी अस्थायी file में खोला जाता है और काम के बाद मिटा दिया जाता है।",
      "hi-en": "Wo keystore kabhi repository mein nahi honi chahiye, aur na hi raasta kisi ek machine ka seedhe likha ho — use gitignore ki gayi kisi properties wali file se ya CI ke kisi raaz se padhiye, taki wahi build ki file laptop aur runner, donon par chale. CI mein aam shakl hai base64 ka koi raaz jo kisi asthaayi file mein khola jaata hai aur kaam ke baad mita diya jaata hai.",
    },
    related: ["storePassword", "signingConfigs"],
  },

  storePassword: {
    term: "storePassword",
    kind: { en: "AGP DSL property", hi: "AGP DSL की खूबी", "hi-en": "AGP DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "The password that opens the keystore file.",
      hi: "वह password जो keystore की file खोलता है।",
      "hi-en": "Wo password jo keystore ki file kholta hai.",
    },
    affects: {
      en: "It belongs beside `keyAlias` and `keyPassword` in a `keystore.properties` that git ignores, or in CI secrets — never in `build.gradle.kts`, because a build file is the most-read, most-copied file in the repository. A password committed once stays in history even after the line is deleted, so the recovery is rotating the key, not editing the file.",
      hi: "वह `keyAlias` और `keyPassword` के साथ किसी ऐसी `keystore.properties` में रहता है जिसे git नहीं देखता, या CI के राजों में — कभी `build.gradle.kts` में नहीं, क्योंकि build की file repository की सबसे ज्यादा पढ़ी और नकल की गई file है। एक बार commit हुआ password उस लाइन के मिटने के बाद भी इतिहास में रहता है, तो हल file सुधारना नहीं, चाबी बदलना है।",
      "hi-en": "Wo `keyAlias` aur `keyPassword` ke saath kisi aisi `keystore.properties` mein rehta hai jise git nahi dekhta, ya CI ke raazon mein — kabhi `build.gradle.kts` mein nahi, kyonki build ki file repository ki sabse zyada padhi aur nakal ki gayi file hai. Ek baar commit hua password us line ke mitne ke baad bhi itihaas mein rehta hai, to hal file sudhaarna nahi, chaabi badalna hai.",
    },
    related: ["storeFile", "signingConfigs"],
  },

  androidComponents: {
    term: "androidComponents",
    kind: { en: "AGP DSL block", hi: "AGP DSL का हिस्सा", "hi-en": "AGP DSL ka hissa" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "The modern variant API, used to inspect and disable variants before they are configured.",
      hi: "आजका variant वाला API, जिससे रूपों को सजने से पहले देखा और बंद किया जाता है।",
      "hi-en": "Aaj ka variant wala API, jisse roopon ko sajne se pehle dekha aur band kiya jaata hai.",
    },
    affects: {
      en: "`beforeVariants` is where combinations that should not exist get switched off — a mock flavour crossed with release, a paid flavour for a market you do not ship to. Each disabled variant is configuration and tasks that never get created, which is why this is a build-speed lever as much as a correctness one. It replaces the old `variantFilter`, which mutated variants after they were built and no longer works.",
      hi: "`beforeVariants` वहीं है जहाँ न होने लायक जोड़ बंद किए जाते हैं — कोई नकली flavour release के साथ, किसी ऐसे बाजार के लिए सशुल्क flavour जहाँ आप भेजते ही नहीं। हर बंद किया गया रूप ऐसी सजावट और tasks हैं जो बनते ही नहीं, और इसीलिए यह सहीपन जितना ही build की रफ्तार का लीवर है। यह पुराने `variantFilter` की जगह लेता है, जो रूपों को बनने के बाद बदलता था और अब चलता नहीं।",
      "hi-en": "`beforeVariants` wahin hai jahan na hone layak jod band kiye jaate hain — koi nakli flavour release ke saath, kisi aise baazaar ke liye sashulk flavour jahan aap bhejte hi nahi. Har band kiya gaya roop aisi sajaavat aur tasks hain jo bante hi nahi, aur isiliye yeh sahipan jitna hi build ki raftaar ka lever hai. Yeh purane `variantFilter` ki jagah leta hai, jo roopon ko banne ke baad badalta tha aur ab chalta nahi.",
    },
    related: ["productFlavors", "flavorDimensions", "buildTypes"],
  },

  BillingClient: {
    term: "BillingClient",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.android.billingclient.api.BillingClient",
    does: {
      en: "The connection to Google Play through which purchases are launched and queried.",
      hi: "Google Play से वह जुड़ाव जिससे खरीद शुरू होती है और पूछी जाती है।",
      "hi-en": "Google Play se wo judaav jisse khareed shuru hoti hai aur poochhi jaati hai.",
    },
    affects: {
      en: "It disconnects — that is not an edge case but ordinary behaviour, so `onBillingServiceDisconnected` must reconnect with backoff or purchases silently stop working. Nothing about it is synchronous either: `launchBillingFlow` returns immediately and the actual result arrives in the listener, so a `when` on the return value is a bug that looks like working code.",
      hi: "यह टूटता है — यह किनारे का मामला नहीं, आम बर्ताव है, तो `onBillingServiceDisconnected` को ठहराव के साथ फिर जुड़ना चाहिए वरना खरीद चुपचाप काम करना बंद कर देती है। इसमें कुछ भी एक-के-बाद-एक नहीं है: `launchBillingFlow` तुरंत लौट आता है और असली नतीजा listener में आता है, तो लौटे हुए मान पर कोई `when` ऐसी गड़बड़ी है जो चलता हुआ code दिखती है।",
      "hi-en": "Yeh toot-ta hai — yeh kinaare ka maamla nahi, aam bartaav hai, to `onBillingServiceDisconnected` ko thehraav ke saath phir judna chahiye warna khareed chupchaap kaam karna band kar deti hai. Ismein kuchh bhi ek-ke-baad-ek nahi hai: `launchBillingFlow` turant laut aata hai aur asli nateeja listener mein aata hai, to laute hue maan par koi `when` aisi gadbadi hai jo chalta hua code dikhti hai.",
    },
    docs: "https://developer.android.com/google/play/billing/integrate",
    related: ["Purchase", "BillingResult"],
  },

  BillingResult: {
    term: "BillingResult",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.android.billingclient.api.BillingResult",
    does: {
      en: "Carries the response code of a billing call.",
      hi: "किसी billing की call के जवाब का code लिए चलता है।",
      "hi-en": "Kisi billing ki call ke jawaab ka code liye chalta hai.",
    },
    affects: {
      en: "Two codes decide whether the integration is correct. `USER_CANCELED` is not an error and must not show one — the user simply changed their mind. `ITEM_ALREADY_OWNED` means restore, not fail: it is what a reinstalling customer hits, and treating it as an error is the fastest route to a one-star review from someone who already paid.",
      hi: "दो codes तय करते हैं कि जुड़ाव सही है या नहीं। `USER_CANCELED` कोई error नहीं है और उसे दिखानी भी नहीं चाहिए — उपयोगकर्ता ने बस मन बदल लिया। `ITEM_ALREADY_OWNED` का मतलब लौटाना है, नाकाम होना नहीं: दोबारा install करता ग्राहक उसी से टकराता है, और उसे error मानना उस आदमी से एक-star वाली राय पाने का सबसे तेज रास्ता है जो पैसे दे चुका है।",
      "hi-en": "Do codes tay karte hain ki judaav sahi hai ya nahi. `USER_CANCELED` koi error nahi hai aur use dikhani bhi nahi chahiye — upyogkarta ne bas man badal liya. `ITEM_ALREADY_OWNED` ka matlab lautana hai, naakaam hona nahi: dobara install karta graahak usi se takraata hai, aur use error maanna us aadmi se ek-star wali raay paane ka sabse tez raasta hai jo paise de chuka hai.",
    },
    related: ["BillingClient", "Purchase"],
  },

  Purchase: {
    term: "Purchase",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.android.billingclient.api.Purchase",
    does: {
      en: "One completed transaction, carrying the token your server verifies.",
      hi: "एक पूरी हुई खरीद, जो वह token लिए है जिसे आपका server परखता है।",
      "hi-en": "Ek poori hui khareed, jo wo token liye hai jise aapka server parakhta hai.",
    },
    affects: {
      en: "Two rules make it safe. Verify `purchaseToken` on your server against the Play Developer API, because anything the client decides can be faked by a patched client. Then acknowledge within three days — an unacknowledged purchase is refunded automatically, so a bug in that path shows up as revenue quietly disappearing rather than as a crash.",
      hi: "दो नियम इसे सुरक्षित बनाते हैं। `purchaseToken` को अपने server पर Play के Developer API से परखिए, क्योंकि client जो भी तय करता है उसे बदला हुआ client नकली बना सकता है। फिर तीन दिन के भीतर मंजूरी दीजिए — बिना मंजूरी वाली खरीद अपने आप लौटा दी जाती है, तो उस रास्ते की गड़बड़ी crash की तरह नहीं, कमाई के चुपचाप गायब होने की तरह दिखती है।",
      "hi-en": "Do niyam ise surakshit banate hain. `purchaseToken` ko apne server par Play ke Developer API se parkhiye, kyonki client jo bhi tay karta hai use badla hua client nakli bana sakta hai. Phir teen din ke bheetar manzoori dijiye — bina manzoori wali khareed apne aap lauta di jaati hai, to us raaste ki gadbadi crash ki tarah nahi, kamaai ke chupchaap gaayab hone ki tarah dikhti hai.",
    },
    related: ["BillingClient", "BillingResult"],
  },
};
