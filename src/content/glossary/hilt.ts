import type { Glossary } from "./types";

/**
 * Hilt. Almost every entry answers one of two questions: who is allowed to
 * build this, and how long does the result live.
 */
export const HILT_GLOSSARY: Glossary = {
  HiltAndroidApp: {
    term: "@HiltAndroidApp",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import dagger.hilt.android.HiltAndroidApp",
    does: {
      en: "Generates the application-level component — the root of the dependency graph.",
      hi: "Application के स्तर वाला component बनाता है — dependency के पेड़ की जड़।",
      "hi-en": "Application ke level wala component banata hai — dependency ke ped ki jad.",
    },
    affects: {
      en: "It replaces the container you would otherwise write by hand. The classic first failure is forgetting `android:name` on `<application>` in the manifest: the annotation compiles, the class is never instantiated, and every injection fails at run time on a class that looks correctly annotated.",
      hi: "यह उस container की जगह लेता है जो आप वरना हाथ से लिखते। पहली जानी-पहचानी नाकामी manifest में `<application>` पर `android:name` भूलना है: annotation compile हो जाता है, वह class कभी बनती ही नहीं, और हर injection चलते वक्त ऐसी class पर नाकाम होता है जो देखने में ठीक-ठाक annotate की हुई लगती है।",
      "hi-en": "Ye us container ki jagah leta hai jo aap warna haath se likhte. Pehli jani-pehchani nakami manifest mein `<application>` par `android:name` bhoolna hai: annotation compile ho jata hai, wo class kabhi banti hi nahi, aur har injection chalte waqt aisi class par nakaam hota hai jo dekhne mein theek-thaak annotate ki hui lagti hai.",
    },
    docs: "https://developer.android.com/training/dependency-injection/hilt-android",
    related: ["AndroidEntryPoint", "InstallIn", "Singleton"],
  },

  Inject: {
    term: "@Inject",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import javax.inject.Inject",
    does: {
      en: "On a constructor, tells Hilt it may build this class and what it needs.",
      hi: "किसी constructor पर, Hilt को बताता है कि वह इस class को बना सकता है और उसे क्या चाहिए।",
      "hi-en": "Kisi constructor par, Hilt ko batata hai ki wo is class ko bana sakta hai aur use kya chahiye.",
    },
    affects: {
      en: "The constructor's parameters *are* the declaration — Hilt reads them and works out the build order, so you never write \"build the client first\". That is also why it cannot be used on a class Android constructs: an `Activity` has no constructor you control, which is what `@AndroidEntryPoint` exists for.",
      hi: "Constructor के parameters *ही* घोषणा हैं — Hilt उन्हें पढ़कर बनाने का क्रम निकाल लेता है, तो आपको कभी \"पहले client बनाओ\" नहीं लिखना पड़ता। इसीलिए यह उस class पर नहीं लग सकता जिसे Android बनाता है: किसी `Activity` का कोई constructor आपके हाथ में नहीं है, और `@AndroidEntryPoint` इसी के लिए है।",
      "hi-en": "Constructor ke parameters *hi* ghoshna hain — Hilt unhe padhkar banane ka order nikal leta hai, to aapko kabhi \"pehle client banao\" nahi likhna padta. Isiliye ye us class par nahi lag sakta jise Android banata hai: kisi `Activity` ka koi constructor aapke haath mein nahi hai, aur `@AndroidEntryPoint` isi ke liye hai.",
    },
    related: ["AndroidEntryPoint", "Provides", "Binds"],
  },

  AndroidEntryPoint: {
    term: "@AndroidEntryPoint",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import dagger.hilt.android.AndroidEntryPoint",
    does: {
      en: "Marks an Android class — activity, fragment, service, receiver — for field injection after the system creates it.",
      hi: "किसी Android class पर लगता है — activity, fragment, service, receiver — ताकि system के बनाने के बाद उसमें fields भरी जा सकें।",
      "hi-en": "Kisi Android class par lagta hai — activity, fragment, service, receiver — taki system ke banane ke baad usmein fields bhari ja sakein.",
    },
    affects: {
      en: "It does not cascade: a fragment inside an annotated activity needs its own annotation. And a `@HiltViewModel` can only be retrieved from an annotated owner, which is the error people hit when they annotate the `ViewModel` and forget the activity. Hilt rewrites the class to extend a generated `Hilt_`-prefixed superclass, which is why a half-failed build can leave confusing errors that a clean build resolves.",
      hi: "यह नीचे तक नहीं उतरता: annotate की हुई activity के अंदर fragment को अपना annotation चाहिए। और कोई `@HiltViewModel` सिर्फ annotate किए हुए मालिक से मिल सकता है, और यही वह error है जो `ViewModel` पर annotation लगाकर activity भूल जाने पर मिलती है। Hilt उस class को दोबारा लिखकर `Hilt_` से शुरू होती बनी हुई superclass extend कराता है, इसीलिए आधा नाकाम हुआ build उलझाने वाली errors छोड़ सकता है जिन्हें साफ build हटा देता है।",
      "hi-en": "Ye neeche tak nahi utarta: annotate ki hui activity ke andar fragment ko apna annotation chahiye. Aur koi `@HiltViewModel` sirf annotate kiye hue maalik se mil sakta hai, aur yahi wo error hai jo `ViewModel` par annotation lagakar activity bhool jane par milti hai. Hilt us class ko dobara likhkar `Hilt_` se shuru hoti bani hui superclass extend karata hai, isiliye aadha nakaam hua build uljhane wali errors chhod sakta hai jinhe saaf build hata deta hai.",
    },
    related: ["HiltAndroidApp", "HiltViewModel", "Inject"],
  },

  HiltViewModel: {
    term: "@HiltViewModel",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import dagger.hilt.android.lifecycle.HiltViewModel",
    does: {
      en: "Lets Hilt construct a `ViewModel` with constructor arguments.",
      hi: "Hilt को arguments वाला `ViewModel` बनाने देता है।",
      "hi-en": "Hilt ko arguments wala `ViewModel` banane deta hai.",
    },
    affects: {
      en: "This is the annotation that removes real work: a `ViewModel` with constructor arguments otherwise needs a factory written per class, and this deletes all of them. In Compose, `hiltViewModel()` then supplies it — from an `@AndroidEntryPoint` owner, without which retrieval fails.",
      hi: "यही वह annotation है जो सच में काम घटाता है: arguments वाले `ViewModel` को वरना हर class के लिए अलग factory चाहिए, और यह उन सबको मिटा देता है। Compose में फिर `hiltViewModel()` उसे देता है — किसी `@AndroidEntryPoint` मालिक से, जिसके बिना वह मिलता ही नहीं।",
      "hi-en": "Yahi wo annotation hai jo sach mein kaam ghatata hai: arguments wale `ViewModel` ko warna har class ke liye alag factory chahiye, aur ye un sabko mita deta hai. Compose mein phir `hiltViewModel()` use deta hai — kisi `@AndroidEntryPoint` maalik se, jiske bina wo milta hi nahi.",
    },
    related: ["AndroidEntryPoint", "ViewModel", "Inject"],
  },

  Module: {
    term: "@Module",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import dagger.Module",
    does: {
      en: "Marks a class that holds recipes for building things Hilt cannot construct itself.",
      hi: "ऐसी class पर लगता है जिसमें उन चीजों के नुस्खे हैं जिन्हें Hilt खुद नहीं बना सकता।",
      "hi-en": "Aisi class par lagta hai jismein un cheezon ke nuskhe hain jinhe Hilt khud nahi bana sakta.",
    },
    affects: {
      en: "An `object` module holds `@Provides` functions; an `abstract class` module holds `@Binds`. Because Hilt's processor aggregates, editing a module can invalidate a large part of an incremental build — which is where most of the \"annotation processing is slow\" complaint actually comes from. Keeping modules narrow reduces it.",
      hi: "`object` वाला module `@Provides` functions रखता है; `abstract class` वाला `@Binds`. Hilt का processor सब कुछ इकट्ठा करता है, तो किसी module को बदलना incremental build के बड़े हिस्से को अमान्य कर सकता है — और \"annotation processing धीमी है\" वाली शिकायत ज्यादातर वहीं से आती है। Modules छोटे रखने से यह घटता है।",
      "hi-en": "`object` wala module `@Provides` functions rakhta hai; `abstract class` wala `@Binds`. Hilt ka processor sab kuch ikattha karta hai, to kisi module ko badalna incremental build ke bade hisse ko amanya kar sakta hai — aur \"annotation processing dheemi hai\" wali shikayat zyadatar wahin se aati hai. Modules chhote rakhne se ye ghatta hai.",
    },
    related: ["InstallIn", "Provides", "Binds"],
  },

  InstallIn: {
    term: "@InstallIn",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import dagger.hilt.InstallIn",
    does: {
      en: "Says which component a module belongs to, and therefore how long its results live.",
      hi: "बताता है कि कोई module किस component का है, और इसलिए उसके नतीजे कितना जीएँगे।",
      "hi-en": "Batata hai ki koi module kis component ka hai, aur isliye uske result kitna jiyenge.",
    },
    values: {
      en: "`SingletonComponent`, `ActivityRetainedComponent`, `ViewModelComponent`, `ActivityComponent`, `FragmentComponent`, `ServiceComponent`.",
      hi: "`SingletonComponent`, `ActivityRetainedComponent`, `ViewModelComponent`, `ActivityComponent`, `FragmentComponent`, `ServiceComponent`।",
      "hi-en": "`SingletonComponent`, `ActivityRetainedComponent`, `ViewModelComponent`, `ActivityComponent`, `FragmentComponent`, `ServiceComponent`.",
    },
    affects: {
      en: "It also decides visibility, and the rule is that a binding may depend on anything in a longer-lived component and nothing in a shorter-lived one. So a `SingletonComponent` binding asking for an `@ActivityContext` does not compile — the lifetime mismatch that would have leaked an `Activity` is a build error instead.",
      hi: "यह दिखने की हद भी तय करता है, और नियम यह है कि कोई binding लंबी उम्र वाले component की किसी भी चीज पर टिक सकती है और छोटी उम्र वाले की किसी पर नहीं। तो `@ActivityContext` माँगती कोई `SingletonComponent` वाली binding compile नहीं होती — उम्र का वह बेमेल, जो किसी `Activity` को leak करता, build की error बन जाता है।",
      "hi-en": "Ye dikhne ki had bhi tay karta hai, aur niyam ye hai ki koi binding lambi umar wale component ki kisi bhi cheez par tik sakti hai aur chhoti umar wale ki kisi par nahi. To `@ActivityContext` maangti koi `SingletonComponent` wali binding compile nahi hoti — umar ka wo bemel, jo kisi `Activity` ko leak karta, build ki error ban jata hai.",
    },
    related: ["Module", "Singleton", "Provides"],
  },

  Provides: {
    term: "@Provides",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import dagger.Provides",
    does: {
      en: "A function whose body constructs a type Hilt cannot build on its own.",
      hi: "ऐसा function जिसकी body वह type बनाती है जिसे Hilt खुद नहीं बना सकता।",
      "hi-en": "Aisa function jiski body wo type banati hai jise Hilt khud nahi bana sakta.",
    },
    affects: {
      en: "Read it as a recipe: the return type is what it makes, the parameters are what it needs, and Hilt works out the order from those signatures. This is what you use for third-party types built with builders — `Retrofit`, `RoomDatabase`, `OkHttpClient` — and for a Retrofit API interface, which looks like a `@Binds` case but has no constructor at all, only a runtime proxy.",
      hi: "इसे नुस्खे की तरह पढ़िए: return type वह है जो वह बनाता है, parameters वह हैं जो उसे चाहिए, और Hilt उन्हीं signatures से क्रम निकाल लेता है। यह उन बाहरी types के लिए है जो builders से बनते हैं — `Retrofit`, `RoomDatabase`, `OkHttpClient` — और Retrofit वाले API interface के लिए, जो `@Binds` का मामला लगता है पर जिसका कोई constructor है ही नहीं, सिर्फ चलते वक्त बना एक proxy।",
      "hi-en": "Ise nuskhe ki tarah padhiye: return type wo hai jo wo banata hai, parameters wo hain jo use chahiye, aur Hilt unhin signatures se order nikal leta hai. Ye un bahari types ke liye hai jo builders se bante hain — `Retrofit`, `RoomDatabase`, `OkHttpClient` — aur Retrofit wale API interface ke liye, jo `@Binds` ka maamla lagta hai par jiska koi constructor hai hi nahi, sirf chalte waqt bana ek proxy.",
    },
    related: ["Binds", "Module", "InstallIn"],
  },

  Binds: {
    term: "@Binds",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import dagger.Binds",
    does: {
      en: "Tells Hilt that a request for an interface is satisfied by a particular implementation.",
      hi: "Hilt को बताता है कि किसी interface की माँग कोई खास implementation पूरी करता है।",
      "hi-en": "Hilt ko batata hai ki kisi interface ki maang koi khaas implementation poori karta hai.",
    },
    affects: {
      en: "It is abstract with no body, because there is nothing to run — Hilt already knows how to build the implementation from its `@Inject constructor`. It generates less code than `@Provides`, so prefer it where it applies. Crucially the scope belongs on the `@Binds` function, not the implementation class: a `@Singleton` on the class is ignored for requests through the interface, so every injection is a fresh instance with no error at all.",
      hi: "यह बिना body वाला abstract है, क्योंकि चलाने को कुछ है ही नहीं — Hilt पहले से उस implementation को उसके `@Inject constructor` से बनाना जानता है। यह `@Provides` से कम code बनाता है, तो जहाँ चल जाए वहाँ इसे लीजिए। सबसे अहम, scope `@Binds` वाले function पर लगता है, implementation class पर नहीं: class पर लगा `@Singleton` interface से आती माँगों के लिए अनदेखा रह जाता है, तो हर injection नई चीज होती है, बिना किसी error के।",
      "hi-en": "Ye bina body wala abstract hai, kyunki chalane ko kuch hai hi nahi — Hilt pehle se us implementation ko uske `@Inject constructor` se banana janta hai. Ye `@Provides` se kam code banata hai, to jahan chal jaye wahan ise lijiye. Sabse ahem, scope `@Binds` wale function par lagta hai, implementation class par nahi: class par laga `@Singleton` interface se aati maangon ke liye andekha reh jata hai, to har injection nai cheez hoti hai, bina kisi error ke.",
    },
    related: ["Provides", "Singleton", "interface"],
  },

  Singleton: {
    term: "@Singleton",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import javax.inject.Singleton",
    does: {
      en: "One instance per application, for the life of the process.",
      hi: "Application भर में एक चीज, process की पूरी उम्र के लिए।",
      "hi-en": "Application bhar mein ek cheez, process ki poori umar ke liye.",
    },
    affects: {
      en: "Unscoped is the default and usually right — scope only what has state to share or is expensive to build. Scoping everything here means objects that should die with a screen live for the process, which is a leak by another name. The other scopes are `@ActivityRetainedScoped` (survives rotation, like a `ViewModel`), `@ViewModelScoped`, `@ActivityScoped` (does not survive rotation) and `@FragmentScoped`.",
      hi: "बिना scope वाला ही डिफॉल्ट है और आमतौर पर सही — scope सिर्फ उसे दीजिए जिसके पास साझा करने लायक state हो या जिसे बनाना महँगा हो। हर चीज को यहाँ रखने का मतलब है कि जिन चीजों को screen के साथ मरना था वे process भर जीती हैं, और वह leak ही है, बस दूसरे नाम से। बाकी scopes हैं `@ActivityRetainedScoped` (rotation पर बचता है, `ViewModel` की तरह), `@ViewModelScoped`, `@ActivityScoped` (rotation पर नहीं बचता) और `@FragmentScoped`।",
      "hi-en": "Bina scope wala hi default hai aur aam taur par sahi — scope sirf use dijiye jiske paas share karne layak state ho ya jise banana mehnga ho. Har cheez ko yahan rakhne ka matlab hai ki jin cheezon ko screen ke saath marna tha wo process bhar jeeti hain, aur wo leak hi hai, bas doosre naam se. Baaki scopes hain `@ActivityRetainedScoped` (rotation par bachta hai, `ViewModel` ki tarah), `@ViewModelScoped`, `@ActivityScoped` (rotation par nahi bachta) aur `@FragmentScoped`.",
    },
    related: ["InstallIn", "Binds", "Qualifier"],
  },

  Qualifier: {
    term: "@Qualifier",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import javax.inject.Qualifier",
    does: {
      en: "Marks an annotation that distinguishes two bindings of the same type.",
      hi: "ऐसे annotation पर लगता है जो एक ही type की दो bindings को अलग करता है।",
      "hi-en": "Aise annotation par lagta hai jo ek hi type ki do bindings ko alag karta hai.",
    },
    affects: {
      en: "The graph is keyed by type, so two `OkHttpClient`s or two `String`s are ambiguous and Hilt reports a duplicate binding — which is the right outcome, because the request genuinely is ambiguous. Hilt predefines `@ApplicationContext` and `@ActivityContext` for exactly this reason. The most valuable custom one is a dispatcher qualifier: injecting `CoroutineDispatcher` rather than hardcoding `Dispatchers.IO` is what lets a test drive the clock instead of sleeping.",
      hi: "Graph की चाबी type है, तो दो `OkHttpClient` या दो `String` दुविधा हैं और Hilt दोहरी binding बताता है — और यही सही नतीजा है, क्योंकि वह माँग सच में दुविधा है। Hilt ठीक इसी वजह से `@ApplicationContext` और `@ActivityContext` पहले से देता है। सबसे कीमती अपना qualifier dispatcher वाला है: `Dispatchers.IO` जड़ने के बजाय `CoroutineDispatcher` inject करना ही test को सोने के बजाय घड़ी चलाने देता है।",
      "hi-en": "Graph ki chabi type hai, to do `OkHttpClient` ya do `String` duvidha hain aur Hilt dohri binding batata hai — aur yahi sahi anjaam hai, kyunki wo maang sach mein duvidha hai. Hilt theek isi wajah se `@ApplicationContext` aur `@ActivityContext` pehle se deta hai. Sabse keemti apna qualifier dispatcher wala hai: `Dispatchers.IO` jadne ke bajaye `CoroutineDispatcher` inject karna hi test ko sone ke bajaye ghadi chalane deta hai.",
    },
    related: ["Singleton", "Provides", "Dispatchers"],
  },
};
