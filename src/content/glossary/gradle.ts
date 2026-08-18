import type { Glossary } from "./types";

/**
 * The Gradle Kotlin DSL and the Android plugin's configuration block.
 *
 * These are not Kotlin keywords — they are functions and properties contributed
 * by plugins, which is exactly the thing that confuses beginners reading a build
 * file for the first time.
 */
export const GRADLE_GLOSSARY: Glossary = {
  implementation: {
    term: "implementation",
    kind: {
      en: "Gradle dependency configuration",
      hi: "Gradle dependency configuration",
      "hi-en": "Gradle dependency configuration",
    },
    source: "library",
    importLine: null,
    does: {
      en: "Adds a library to this module, and keeps it private to this module.",
      hi: "इस module में एक library जोड़ता है, और उसे सिर्फ इसी module तक सीमित रखता है।",
      "hi-en": "Is module mein ek library jodta hai, aur use sirf isi module tak seemit rakhta hai.",
    },
    affects: {
      en: "Modules that depend on yours cannot see it. Changing that library therefore recompiles only this module — the single biggest lever on build times in a multi-module project. Its counterpart is `api(...)`, which does expose the library to every dependent module and so widens the recompile; reach for it only when your module's public API genuinely returns that library's types.",
      hi: "आप पर निर्भर modules उसे नहीं देख पाते। इसलिए उस library को बदलने पर सिर्फ यही module दोबारा compile होता है — multi-module project में build time घटाने का सबसे बड़ा तरीका यही है। इसका जोड़ीदार `api(...)` है, जो उस library को हर निर्भर module को दिखा देता है और इसलिए दोबारा compile होने का दायरा चौड़ा कर देता है; उसे तभी उठाइए जब आपके module का public API सच में उसी library के types लौटाता हो।",
      "hi-en": "Aap par nirbhar modules use nahi dekh pate. Isliye us library ko badalne par sirf yahi module dobara compile hota hai — multi-module project mein build time ghatane ka sabse bada tarika yahi hai. Iska jodidar `api(...)` hai, jo us library ko har nirbhar module ko dikha deta hai aur isliye dobara compile hone ka daayra chauda kar deta hai; use tabhi uthaiye jab aapke module ka public API sach mein usi library ke types lautata ho.",
    },
    docs: "https://docs.gradle.org/current/userguide/java_library_plugin.html",
    related: ["dependencies"],
  },


  dependencies: {
    term: "dependencies",
    kind: { en: "Gradle block", hi: "Gradle block", "hi-en": "Gradle block" },
    source: "library",
    importLine: null,
    does: {
      en: "Declares every outside library this module needs in order to compile and run.",
      hi: "उन सभी बाहरी libraries की घोषणा करता है जो इस module को compile और run होने के लिए चाहिए।",
      "hi-en": "Un sabhi bahari libraries ki ghoshna karta hai jo is module ko compile aur run hone ke liye chahiye.",
    },
    values: {
      en: "One configuration per line: `implementation`, `api`, `compileOnly`, `runtimeOnly`, `testImplementation`, `androidTestImplementation`, `debugImplementation`, and the processors `ksp` or `kapt`.",
      hi: "हर line पर एक configuration: `implementation`, `api`, `compileOnly`, `runtimeOnly`, `testImplementation`, `androidTestImplementation`, `debugImplementation`, और processors `ksp` या `kapt`।",
      "hi-en": "Har line par ek configuration: `implementation`, `api`, `compileOnly`, `runtimeOnly`, `testImplementation`, `androidTestImplementation`, `debugImplementation`, aur processors `ksp` ya `kapt`.",
    },
    affects: {
      en: "This block belongs in the **module's** build file, not the project root one. Putting it in the root file is the single most common Gradle mistake, and the error message never says so.",
      hi: "यह block **module** की build file में होता है, project की root वाली में नहीं। इसे root file में डालना Gradle की सबसे आम गलती है, और error message यह कभी नहीं बताता।",
      "hi-en": "Ye block **module** ki build file mein hota hai, project ki root wali mein nahi. Ise root file mein daalna Gradle ki sabse common galti hai, aur error message ye kabhi nahi batata.",
    },
    docs: "https://developer.android.com/build/dependencies",
    related: ["implementation", "plugins"],
  },

  plugins: {
    term: "plugins",
    kind: { en: "Gradle block", hi: "Gradle block", "hi-en": "Gradle block" },
    source: "library",
    importLine: null,
    does: {
      en: "Declares what kind of thing this module is — an Android app, an Android library, a plain Kotlin module.",
      hi: "बताता है कि यह module है क्या — Android app, Android library, या सादा Kotlin module।",
      "hi-en": "Batata hai ki ye module hai kya — Android app, Android library, ya saada Kotlin module.",
    },
    values: {
      en: "Three forms: `alias(libs.plugins.kotlin.android)` from the version catalogue, `id(\"com.android.application\") version \"8.7.0\"`, or the shorthand `kotlin(\"android\")`.",
      hi: "तीन रूप: version catalogue से `alias(libs.plugins.kotlin.android)`, या `id(\"com.android.application\") version \"8.7.0\"`, या छोटा रूप `kotlin(\"android\")`।",
      "hi-en": "Teen roop: version catalogue se `alias(libs.plugins.kotlin.android)`, ya `id(\"com.android.application\") version \"8.7.0\"`, ya chhota roop `kotlin(\"android\")`.",
    },
    affects: {
      en: "Applying a plugin is what creates the tasks and configuration blocks you then use. Without the Android plugin there is no `android { }` block and no `assembleDebug` task to run.",
      hi: "Plugin लगाने से ही वे tasks और configuration blocks बनते हैं जिन्हें आप आगे इस्तेमाल करते हैं। Android plugin के बिना न `android { }` block होता है, न चलाने के लिए `assembleDebug` task।",
      "hi-en": "Plugin lagane se hi wo tasks aur configuration blocks bante hain jinhe aap aage use karte ho. Android plugin ke bina na `android { }` block hota hai, na chalane ke liye `assembleDebug` task.",
    },
    docs: "https://developer.android.com/build",
    related: ["dependencies"],
  },

  compileSdk: {
    term: "compileSdk",
    kind: { en: "Android build property", hi: "Android build property", "hi-en": "Android build property" },
    source: "library",
    importLine: null,
    does: {
      en: "Sets which version of the Android API your code is compiled against.",
      hi: "तय करता है कि आपका code Android API के किस version के against compile होगा।",
      "hi-en": "Tay karta hai ki aapka code Android API ke kis version ke against compile hoga.",
    },
    values: {
      en: "An API level as an integer, such as `35`. A preview platform is written as a string instead — `compileSdkPreview = \"VanillaIceCream\"`. Keep it on the latest stable.",
      hi: "Integer में API level, जैसे `35`। Preview platform के लिए इसकी जगह string आती है — `compileSdkPreview = \"VanillaIceCream\"`। इसे latest stable पर रखिए।",
      "hi-en": "Integer mein API level, jaise `35`. Preview platform ke liye iski jagah string aati hai — `compileSdkPreview = \"VanillaIceCream\"`. Ise latest stable par rakho.",
    },
    affects: {
      en: "It decides what you are allowed to *call*, not what will exist on the device. Compiling against level 35 does not put those classes on a level 24 phone — that gap is what `minSdk` and runtime version checks are for. Keep it on the latest stable.",
      hi: "यह तय करता है कि आप क्या *call* कर सकते हैं, यह नहीं कि device पर क्या मौजूद होगा। Level 35 के against compile करने से वे classes level 24 वाले phone पर नहीं आ जातीं — उसी खाई के लिए `minSdk` और runtime version checks होते हैं। इसे latest stable पर रखिए।",
      "hi-en": "Ye tay karta hai ki aap kya *call* kar sakte ho, ye nahi ki device par kya maujood hoga. Level 35 ke against compile karne se wo classes level 24 wale phone par nahi aa jatin — usi khaai ke liye `minSdk` aur runtime version checks hote hain. Ise latest stable par rakho.",
    },
    docs: "https://developer.android.com/build/configure-app-module",
    related: ["minSdk", "targetSdk"],
  },

  minSdk: {
    term: "minSdk",
    kind: { en: "Android build property", hi: "Android build property", "hi-en": "Android build property" },
    source: "library",
    importLine: null,
    does: {
      en: "Sets the oldest Android API level on which your app can be installed.",
      hi: "तय करता है कि आपकी app सबसे पुराने किस Android API level पर install हो सकती है।",
      "hi-en": "Tay karta hai ki aapki app sabse purane kis Android API level par install ho sakti hai.",
    },
    values: {
      en: "An API level as an integer. Android Studio shows the share of devices each level reaches — 24 and above covers the overwhelming majority today.",
      hi: "Integer में API level। Android Studio बताता है कि हर level कितने devices तक पहुँचता है — आज 24 और उससे ऊपर लगभग सब कुछ ढक लेता है।",
      "hi-en": "Integer mein API level. Android Studio batata hai ki har level kitne devices tak pahunchta hai — aaj 24 aur usse upar lagbhag sab kuch dhak leta hai.",
    },
    affects: {
      en: "Google Play hides your app from any device below it. Lowering it widens your audience but forces you to guard every newer API with a runtime version check; raising it removes those guards and those users at the same time.",
      hi: "इससे नीचे के हर device से Google Play आपकी app छुपा देता है। इसे घटाने पर audience बढ़ती है, पर हर नए API को runtime version check से घेरना पड़ता है; बढ़ाने पर वे checks और वे users दोनों हट जाते हैं।",
      "hi-en": "Isse neeche ke har device se Google Play aapki app chhupa deta hai. Ise ghatane par audience badhti hai, par har naye API ko runtime version check se gherna padta hai; badhane par wo checks aur wo users dono hat jate hain.",
    },
    docs: "https://developer.android.com/build/configure-app-module",
    related: ["compileSdk", "targetSdk"],
  },

  targetSdk: {
    term: "targetSdk",
    kind: { en: "Android build property", hi: "Android build property", "hi-en": "Android build property" },
    source: "library",
    importLine: null,
    does: {
      en: "Declares which Android version's behaviour your app has been tested against.",
      hi: "घोषित करता है कि आपकी app किस Android version के behaviour के against test की गई है।",
      "hi-en": "Ghoshit karta hai ki aapki app kis Android version ke behaviour ke against test ki gayi hai.",
    },
    values: {
      en: "An API level as an integer, normally the same as `compileSdk`. Google Play requires it to stay within about a year of the newest release.",
      hi: "Integer में API level, आम तौर पर `compileSdk` जितना ही। Google Play चाहता है कि यह सबसे नए release से लगभग एक साल के अंदर रहे।",
      "hi-en": "Integer mein API level, aam taur par `compileSdk` jitna hi. Google Play chahta hai ki ye sabse naye release se lagbhag ek saal ke andar rahe.",
    },
    affects: {
      en: "The system reads it and decides how strictly to treat your app. Raising it silently changes behaviour you never wrote — background limits, permission prompts, storage access — so raise it deliberately and then actually test. Google Play requires it to stay recent.",
      hi: "System इसे पढ़कर तय करता है कि आपकी app के साथ कितनी सख्ती करनी है। इसे बढ़ाने पर वह behaviour चुपचाप बदल जाता है जो आपने लिखा ही नहीं — background limits, permission prompts, storage access — इसलिए सोच-समझकर बढ़ाइए और फिर सच में test कीजिए। Google Play इसे recent रखना जरूरी करता है।",
      "hi-en": "System ise padhkar tay karta hai ki aapki app ke saath kitni sakhti karni hai. Ise badhane par wo behaviour chupchap badal jata hai jo aapne likha hi nahi — background limits, permission prompts, storage access — isliye soch-samajh kar badhao aur phir sach mein test karo. Google Play ise recent rakhna zaruri karta hai.",
    },
    docs: "https://developer.android.com/google/play/requirements/target-sdk",
    related: ["compileSdk", "minSdk"],
  },

  namespace: {
    term: "namespace",
    kind: { en: "Android build property", hi: "Android build property", "hi-en": "Android build property" },
    source: "library",
    importLine: null,
    does: {
      en: "Sets the Kotlin/Java package that this module's generated `R` and `BuildConfig` classes land in.",
      hi: "वह Kotlin/Java package तय करता है जिसमें इस module की generated `R` और `BuildConfig` classes बनती हैं।",
      "hi-en": "Wo Kotlin/Java package tay karta hai jismein is module ki generated `R` aur `BuildConfig` classes banti hain.",
    },
    values: {
      en: "A valid Kotlin package name — `com.example.myapp`. It is usually the same as `applicationId`, but the two are free to differ.",
      hi: "कोई सही Kotlin package name — `com.example.myapp`। यह आम तौर पर `applicationId` जैसा ही होता है, पर दोनों अलग भी हो सकते हैं।",
      "hi-en": "Koi sahi Kotlin package name — `com.example.myapp`. Ye aam taur par `applicationId` jaisa hi hota hai, par dono alag bhi ho sakte hain.",
    },
    affects: {
      en: "It is a compile-time detail only. It looks identical to `applicationId` in most projects, but changing it is harmless while changing `applicationId` is not.",
      hi: "यह सिर्फ compile-time की बात है। ज्यादातर projects में यह `applicationId` जैसा ही दिखता है, पर इसे बदलना नुकसानदेह नहीं है जबकि `applicationId` बदलना है।",
      "hi-en": "Ye sirf compile-time ki baat hai. Zyadatar projects mein ye `applicationId` jaisa hi dikhta hai, par ise badalna nuksaandeh nahi hai jabki `applicationId` badalna hai.",
    },
    docs: "https://developer.android.com/build/configure-app-module",
    related: ["applicationId"],
  },

  applicationId: {
    term: "applicationId",
    kind: { en: "Android build property", hi: "Android build property", "hi-en": "Android build property" },
    source: "library",
    importLine: null,
    does: {
      en: "Sets your app's permanent identity on the device and on Google Play.",
      hi: "device पर और Google Play पर आपकी app की स्थायी पहचान तय करता है।",
      "hi-en": "Device par aur Google Play par aapki app ki sthayi pehchaan tay karta hai.",
    },
    values: {
      en: "A reverse-DNS string: lowercase, at least two dot-separated segments, each starting with a letter — `com.example.myapp`. It can never change after the first release.",
      hi: "Reverse-DNS वाली string: lowercase, कम से कम दो हिस्से dot से अलग, और हर हिस्सा अक्षर से शुरू — `com.example.myapp`। पहली release के बाद यह कभी बदल नहीं सकती।",
      "hi-en": "Reverse-DNS wali string: lowercase, kam se kam do hisse dot se alag, aur har hissa akshar se shuru — `com.example.myapp`. Pehli release ke baad ye kabhi badal nahi sakti.",
    },
    affects: {
      en: "It can never change after your first public release. Changing it creates a different app: existing users get no update, ratings and installs do not carry over, and the old listing stays behind.",
      hi: "पहली सार्वजनिक release के बाद इसे कभी बदला नहीं जा सकता। इसे बदलना एक अलग app बना देता है: मौजूदा users को update नहीं मिलता, ratings और installs साथ नहीं आते, और पुरानी listing पीछे रह जाती है।",
      "hi-en": "Pehli public release ke baad ise kabhi badla nahi ja sakta. Ise badalna ek alag app bana deta hai: maujooda users ko update nahi milta, ratings aur installs saath nahi aate, aur purani listing peechhe reh jati hai.",
    },
    docs: "https://developer.android.com/build/configure-app-module",
    related: ["namespace"],
  },
};
