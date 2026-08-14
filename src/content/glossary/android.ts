import type { Glossary } from "./types";

/** The Android framework, Jetpack and Compose. */
export const ANDROID_GLOSSARY: Glossary = {
  Activity: {
    term: "Activity",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.app.Activity",
    does: {
      en: "One screen of an app, and the entry point the system uses to start it.",
      hi: "ऐप की एक screen, और वह entry point जिससे system ऐप शुरू करता है।",
      "hi-en": "App ki ek screen, aur wo entry point jisse system app shuru karta hai.",
    },
    affects: {
      en: "The system owns its lifetime, not you. It is destroyed and recreated on rotation, low memory, and language change — so any state kept only in its fields is lost. That is precisely the problem `ViewModel` solves.",
      hi: "इसकी उम्र system तय करता है, आप नहीं। rotation, कम memory और भाषा बदलने पर यह destroy होकर दोबारा बनती है — इसलिए सिर्फ इसके fields में रखा state खो जाता है। यही समस्या `ViewModel` हल करता है।",
      "hi-en": "Iski umar system tay karta hai, aap nahi. Rotation, kam memory aur bhasha badalne par ye destroy hokar dobara banti hai — isliye sirf iske fields mein rakha state kho jata hai. Yahi problem `ViewModel` solve karta hai.",
    },
    docs: "https://developer.android.com/guide/components/activities/intro-activities",
    related: ["ComponentActivity", "onCreate", "ViewModel"],
  },

  ComponentActivity: {
    term: "ComponentActivity",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.activity.ComponentActivity",
    does: {
      en: "The AndroidX `Activity` base class that adds lifecycle, `ViewModel`, saved state and result APIs.",
      hi: "AndroidX की `Activity` base class, जो lifecycle, `ViewModel`, saved state और result APIs जोड़ती है।",
      "hi-en": "AndroidX ki `Activity` base class, jo lifecycle, `ViewModel`, saved state aur result APIs jodti hai.",
    },
    affects: {
      en: "It is required for `setContent`, `by viewModels()` and `registerForActivityResult`. Extending plain `Activity` instead means none of those work.",
      hi: "`setContent`, `by viewModels()` और `registerForActivityResult` के लिए यह जरूरी है। सादी `Activity` extend करेंगे तो इनमें से कुछ नहीं चलेगा।",
      "hi-en": "`setContent`, `by viewModels()` aur `registerForActivityResult` ke liye ye zaruri hai. Saadi `Activity` extend karoge to inmein se kuch nahi chalega.",
    },
    docs: "https://developer.android.com/reference/androidx/activity/ComponentActivity",
    related: ["Activity", "setContent", "onCreate"],
  },

  onCreate: {
    term: "onCreate",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "android",
    importLine: null,
    does: {
      en: "The first lifecycle callback, where the screen sets up its content and one-time state.",
      hi: "पहला lifecycle callback, जहाँ screen अपना content और एक-बार वाला state तैयार करती है।",
      "hi-en": "Pehla lifecycle callback, jahan screen apna content aur ek-baar wala state tayar karti hai.",
    },
    affects: {
      en: "It runs again on every recreation, so anything expensive placed here runs on every rotation. The `savedInstanceState` parameter is non-null only when the system is restoring a previously killed screen.",
      hi: "हर बार recreate होने पर यह फिर चलता है, इसलिए यहाँ रखा भारी काम हर rotation पर दोहराता है। `savedInstanceState` parameter तभी non-null होता है जब system पहले मारी गई screen को वापस ला रहा हो।",
      "hi-en": "Har baar recreate hone par ye phir chalta hai, isliye yahan rakha bhaari kaam har rotation par doharata hai. `savedInstanceState` parameter tabhi non-null hota hai jab system pehle maari gayi screen ko wapas la raha ho.",
    },
    docs: "https://developer.android.com/guide/components/activities/activity-lifecycle",
    related: ["Activity", "override", "Bundle"],
  },

  Bundle: {
    term: "Bundle",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.os.Bundle",
    does: {
      en: "A key-value container the system uses to carry small pieces of state across process boundaries.",
      hi: "एक key-value container, जिससे system छोटा-मोटा state process की सीमाओं के पार ले जाता है।",
      "hi-en": "Ek key-value container, jisse system chhota-mota state process ki seemaon ke paar le jata hai.",
    },
    affects: {
      en: "It is serialized by the system and has a hard size limit of roughly 1 MB per transaction. Putting a bitmap or a large list in it throws `TransactionTooLargeException`.",
      hi: "इसे system serialize करता है और हर transaction की सीमा लगभग 1 MB है। इसमें bitmap या बड़ी list डालने पर `TransactionTooLargeException` आता है।",
      "hi-en": "Ise system serialize karta hai aur har transaction ki limit lagbhag 1 MB hai. Ismein bitmap ya badi list dalne par `TransactionTooLargeException` aata hai.",
    },
    docs: "https://developer.android.com/reference/android/os/Bundle",
    related: ["onCreate", "SavedStateHandle"],
  },

  ViewModel: {
    term: "ViewModel",
    kind: { en: "Jetpack class", hi: "Jetpack class", "hi-en": "Jetpack class" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.ViewModel",
    does: {
      en: "Holds screen state and business logic in an object that survives configuration changes.",
      hi: "screen का state और business logic ऐसे object में रखता है जो configuration change में बचा रहता है।",
      "hi-en": "Screen ka state aur business logic aise object mein rakhta hai jo configuration change mein bacha rehta hai.",
    },
    affects: {
      en: "It outlives the `Activity`, so it must never hold a reference to a `View`, an `Activity` or any `Context` other than the application one — doing so leaks the whole screen. It does not survive process death; that is what `SavedStateHandle` is for.",
      hi: "यह `Activity` से ज्यादा जीता है, इसलिए इसमें `View`, `Activity` या application के अलावा कोई `Context` कभी नहीं रखना चाहिए — वरना पूरी screen leak हो जाती है। यह process death नहीं झेलता; उसके लिए `SavedStateHandle` है।",
      "hi-en": "Ye `Activity` se zyada jeeta hai, isliye ismein `View`, `Activity` ya application ke alawa koi `Context` kabhi nahi rakhna chahiye — warna poori screen leak ho jati hai. Ye process death nahi jhelta; uske liye `SavedStateHandle` hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/viewmodel",
    related: ["viewModelScope", "StateFlow", "Activity"],
  },

  setContent: {
    term: "setContent",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "compose",
    importLine: "import androidx.activity.compose.setContent",
    does: {
      en: "Attaches a Compose UI tree to an `Activity`, replacing the XML `setContentView`.",
      hi: "किसी `Activity` से Compose UI tree जोड़ता है, XML वाले `setContentView` की जगह।",
      "hi-en": "Kisi `Activity` se Compose UI tree jodta hai, XML wale `setContentView` ki jagah.",
    },
    affects: {
      en: "Everything inside its lambda is a composable scope, so `remember` and state work there. It creates a `ComposeView` under the hood, which is why View and Compose can coexist in one app.",
      hi: "इसके lambda के अंदर सब कुछ composable scope है, इसलिए वहाँ `remember` और state चलते हैं। अंदर से यह `ComposeView` बनाता है — इसीलिए एक ही ऐप में View और Compose साथ रह सकते हैं।",
      "hi-en": "Iske lambda ke andar sab kuch composable scope hai, isliye wahan `remember` aur state chalte hain. Andar se ye `ComposeView` banata hai — isiliye ek hi app mein View aur Compose saath reh sakte hain.",
    },
    docs: "https://developer.android.com/develop/ui/compose/setup",
    related: ["ComponentActivity", "Composable"],
  },

  Composable: {
    term: "Composable",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "compose",
    importLine: "import androidx.compose.runtime.Composable",
    does: {
      en: "Marks a function that describes a piece of UI, rather than returning a value.",
      hi: "ऐसे function को चिह्नित करता है जो UI का एक हिस्सा बताता है, value नहीं लौटाता।",
      "hi-en": "Aise function ko mark karta hai jo UI ka ek hissa batata hai, value nahi lautata.",
    },
    affects: {
      en: "The Compose compiler rewrites it to take a hidden `Composer`, so it can only be called from another composable. It may run many times per frame, in any order, and can be skipped entirely — so it must have no side effects and must not do slow work.",
      hi: "Compose compiler इसमें एक छिपा हुआ `Composer` जोड़ देता है, इसलिए इसे सिर्फ किसी दूसरे composable से बुलाया जा सकता है। यह एक frame में कई बार, किसी भी क्रम में चल सकता है और पूरी तरह skip भी हो सकता है — इसलिए इसमें side effect या धीमा काम नहीं होना चाहिए।",
      "hi-en": "Compose compiler ismein ek chhipa hua `Composer` jod deta hai, isliye ise sirf kisi dusre composable se bulaya ja sakta hai. Ye ek frame mein kai baar, kisi bhi order mein chal sakta hai aur poori tarah skip bhi ho sakta hai — isliye ismein side effect ya dheema kaam nahi hona chahiye.",
    },
    docs: "https://developer.android.com/develop/ui/compose/mental-model",
    related: ["remember", "Modifier", "LaunchedEffect"],
  },

  remember: {
    term: "remember",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.remember",
    does: {
      en: "Stores a value in the composition so it survives recomposition instead of being recreated.",
      hi: "किसी value को composition में रख देता है ताकि recomposition पर वह दोबारा न बने।",
      "hi-en": "Kisi value ko composition mein rakh deta hai taki recomposition par wo dobara na bane.",
    },
    affects: {
      en: "It is forgotten when the composable leaves the composition, and it does not survive configuration change or process death — use `rememberSaveable` for that. Without `remember`, state resets on every recomposition and the UI appears frozen.",
      hi: "composable के composition से हटते ही यह भूल जाता है, और configuration change या process death नहीं झेलता — उसके लिए `rememberSaveable` है। `remember` के बिना हर recomposition पर state रीसेट हो जाता है और UI जमा हुआ लगता है।",
      "hi-en": "Composable ke composition se hatte hi ye bhool jata hai, aur configuration change ya process death nahi jhelta — uske liye `rememberSaveable` hai. `remember` ke bina har recomposition par state reset ho jata hai aur UI jama hua lagta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/state",
    related: ["mutableStateOf", "rememberSaveable", "by"],
  },

  mutableStateOf: {
    term: "mutableStateOf",
    kind: { en: "Compose function", hi: "Compose function", "hi-en": "Compose function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.mutableStateOf",
    does: {
      en: "Creates an observable state holder that tells Compose to recompose when its value changes.",
      hi: "एक observable state holder बनाता है, जो value बदलने पर Compose को recompose करने को कहता है।",
      "hi-en": "Ek observable state holder banata hai, jo value badalne par Compose ko recompose karne ko kehta hai.",
    },
    affects: {
      en: "Only the composables that actually read the value are recomposed — not the whole screen. Wrap it in `remember`, otherwise a new state object is created on every recomposition and the value never appears to change.",
      hi: "सिर्फ वही composables दोबारा चलते हैं जो value पढ़ते हैं — पूरी screen नहीं। इसे `remember` में लपेटिए, वरना हर recomposition पर नया state object बनेगा और value कभी बदली हुई नहीं दिखेगी।",
      "hi-en": "Sirf wahi composables dobara chalte hain jo value padhte hain — poori screen nahi. Ise `remember` mein lapeto, warna har recomposition par naya state object banega aur value kabhi badli hui nahi dikhegi.",
    },
    docs: "https://developer.android.com/develop/ui/compose/state",
    related: ["remember", "by", "Composable"],
  },

  Modifier: {
    term: "Modifier",
    kind: { en: "Compose interface", hi: "Compose interface", "hi-en": "Compose interface" },
    source: "compose",
    importLine: "import androidx.compose.ui.Modifier",
    does: {
      en: "An ordered chain of decorations and behaviours applied to a composable — size, padding, background, clicks.",
      hi: "किसी composable पर एक के बाद एक लगने वाली सजावट और व्यवहार — size, padding, background, clicks।",
      "hi-en": "Kisi composable par ek ke baad ek lagne wali sajawat aur behaviour — size, padding, background, clicks.",
    },
    affects: {
      en: "Order is not cosmetic, it is the semantics. `padding().background()` paints behind the content only; `background().padding()` paints behind the padding too. The same applies to `clickable` — whatever comes before it is outside the touch area.",
      hi: "क्रम सजावट नहीं, अर्थ है। `padding().background()` सिर्फ content के पीछे रंग भरता है; `background().padding()` padding के पीछे भी। यही `clickable` पर लागू होता है — उससे पहले जो है वह touch area के बाहर रहता है।",
      "hi-en": "Order sajawat nahi, matlab hai. `padding().background()` sirf content ke peechhe rang bharta hai; `background().padding()` padding ke peechhe bhi. Yahi `clickable` par lagu hota hai — usse pehle jo hai wo touch area ke bahar rehta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/modifiers",
    related: ["Composable", "Column"],
  },

  LaunchedEffect: {
    term: "LaunchedEffect",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.LaunchedEffect",
    does: {
      en: "Runs a `suspend` block in a coroutine tied to the composition, restarting it when its keys change.",
      hi: "composition से जुड़े coroutine में एक `suspend` block चलाता है, और keys बदलने पर उसे दोबारा शुरू करता है।",
      "hi-en": "Composition se jude coroutine mein ek `suspend` block chalata hai, aur keys badalne par use dobara shuru karta hai.",
    },
    affects: {
      en: "The coroutine is cancelled automatically when the composable leaves. Passing `Unit` as the key runs it once; passing a changing value restarts it every time that value changes — a common source of accidental infinite loops.",
      hi: "composable के हटते ही coroutine अपने आप cancel हो जाता है। key में `Unit` देने पर यह एक बार चलता है; बदलती value देने पर हर बदलाव पर दोबारा चलता है — यहीं से अनजाने infinite loop बनते हैं।",
      "hi-en": "Composable ke hatte hi coroutine apne aap cancel ho jata hai. Key mein `Unit` dene par ye ek baar chalta hai; badalti value dene par har badlaav par dobara chalta hai — yahin se anjaane infinite loop bante hain.",
    },
    docs: "https://developer.android.com/develop/ui/compose/side-effects",
    related: ["Composable", "suspend", "remember"],
  },

  Column: {
    term: "Column",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.foundation.layout.Column",
    does: {
      en: "Lays its children out vertically, one after another.",
      hi: "अपने children को एक के बाद एक, लंबवत सजाता है।",
      "hi-en": "Apne children ko ek ke baad ek, vertically sajata hai.",
    },
    affects: {
      en: "It renders every child immediately, so it must not be used for long lists — use `LazyColumn`, which only composes what is on screen. A `Column` also cannot scroll unless you add `Modifier.verticalScroll`.",
      hi: "यह हर child तुरंत बनाता है, इसलिए लंबी list के लिए इसका इस्तेमाल न करें — `LazyColumn` लीजिए, जो सिर्फ screen पर दिख रहे items बनाता है। `Column` तब तक scroll भी नहीं होता जब तक `Modifier.verticalScroll` न जोड़ें।",
      "hi-en": "Ye har child turant banata hai, isliye lambi list ke liye iska use na karo — `LazyColumn` lo, jo sirf screen par dikh rahe items banata hai. `Column` tab tak scroll bhi nahi hota jab tak `Modifier.verticalScroll` na jodo.",
    },
    docs: "https://developer.android.com/develop/ui/compose/layouts/basics",
    related: ["Modifier", "LazyColumn"],
  },

  LazyColumn: {
    term: "LazyColumn",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.foundation.lazy.LazyColumn",
    does: {
      en: "A vertically scrolling list that only composes the items currently visible.",
      hi: "लंबवत scroll होने वाली list, जो सिर्फ अभी दिख रहे items बनाती है।",
      "hi-en": "Vertically scroll hone wali list, jo sirf abhi dikh rahe items banati hai.",
    },
    affects: {
      en: "It is the Compose equivalent of `RecyclerView`. Always pass a stable `key` for each item — without one, reordering or deleting causes the wrong item state to be reused, exactly like a missing `DiffUtil` id.",
      hi: "यह Compose में `RecyclerView` जैसा है। हर item के लिए स्थिर `key` जरूर दीजिए — बिना key के reorder या delete पर गलत item का state दोबारा इस्तेमाल हो जाता है, ठीक वैसे जैसे `DiffUtil` की id न होने पर।",
      "hi-en": "Ye Compose mein `RecyclerView` jaisa hai. Har item ke liye stable `key` zarur do — bina key ke reorder ya delete par galat item ka state dobara use ho jata hai, theek waise jaise `DiffUtil` ki id na hone par.",
    },
    docs: "https://developer.android.com/develop/ui/compose/lists",
    related: ["Column", "Modifier"],
  },

  Context: {
    term: "Context",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.content.Context",
    does: {
      en: "A handle to your app as the system sees it: resources, preferences, and the right to start components.",
      hi: "आपकी app तक वह पकड़ जैसी उसे system देखता है: resources, preferences, और components शुरू करने का हक।",
      "hi-en": "Aapki app tak wo pakad jaisi use system dekhta hai: resources, preferences, aur components shuru karne ka haq.",
    },
    affects: {
      en: "Every kind gives the same abilities but lives for a different length of time. Storing an `Activity` context in anything longer-lived retains its entire view tree — the most common memory leak on Android.",
      hi: "हर रूप एक जैसी ताकत देता है पर उम्र सबकी अलग है। `Activity` वाला context किसी ज्यादा जीने वाली चीज में रख दिया तो उसका पूरा view tree रुका रह जाता है — Android का सबसे आम memory leak यही है।",
      "hi-en": "Har roop ek jaisi taakat deta hai par umar sabki alag hai. `Activity` wala context kisi zyada jeene wali cheez mein rakh diya to uska poora view tree ruka reh jata hai — Android ka sabse aam memory leak yahi hai.",
    },
    docs: "https://developer.android.com/reference/android/content/Context",
    related: ["applicationContext", "Activity"],
  },

  applicationContext: {
    term: "applicationContext",
    kind: { en: "Context property", hi: "Context property", "hi-en": "Context property" },
    source: "android",
    importLine: null,
    does: {
      en: "The process-wide `Context`, which lives as long as the app itself.",
      hi: "पूरे process वाला `Context`, जो app जितना ही जीता है।",
      "hi-en": "Poore process wala `Context`, jo app jitna hi jeeta hai.",
    },
    affects: {
      en: "Safe to store in a singleton or repository, which an `Activity` context never is. It carries no theme, so inflating a layout or showing a `Dialog` with it either loses your styling or throws.",
      hi: "Singleton या repository में रखना safe है, जो `Activity` वाले context के साथ कभी नहीं। इसके पास theme नहीं होती, इसलिए इससे layout inflate करने या `Dialog` दिखाने पर या तो styling चली जाती है या यह फेंक देता है।",
      "hi-en": "Singleton ya repository mein rakhna safe hai, jo `Activity` wale context ke saath kabhi nahi. Iske paas theme nahi hoti, isliye isse layout inflate karne ya `Dialog` dikhane par ya to styling chali jati hai ya ye fenk deta hai.",
    },
    docs: "https://developer.android.com/reference/android/content/Context#getApplicationContext()",
    related: ["Context", "Activity"],
  },

  Intent: {
    term: "Intent",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.content.Intent",
    does: {
      en: "A message describing something that should happen — either naming the component to start, or describing the action and letting the system find one.",
      hi: "एक संदेश जो बताता है कि क्या होना चाहिए — या तो शुरू करने वाले component का नाम लेकर, या काम बताकर, ताकि system खुद ढूँढ़ ले।",
      "hi-en": "Ek message jo batata hai ki kya hona chahiye — ya to shuru karne wale component ka naam lekar, ya kaam batakar, taaki system khud dhundh le.",
    },
    affects: {
      en: "Because it is a message and not a call, nothing is type-checked: extras are an untyped `Bundle`, and an implicit intent may resolve to nothing. Never send an implicit intent to your own component — another app can declare the same filter and receive it instead.",
      hi: "यह call नहीं संदेश है, इसलिए कुछ भी type-checked नहीं होता: extras एक बिना type वाला `Bundle` हैं, और implicit intent को कोई सँभालने वाला मिले ही न, यह भी हो सकता है। अपने ही component को implicit intent कभी मत भेजिए — कोई दूसरी app वही filter लिखकर उसे ले सकती है।",
      "hi-en": "Ye call nahi message hai, isliye kuch bhi type-checked nahi hota: extras ek bina type wala `Bundle` hain, aur implicit intent ko koi sambhalne wala mile hi na, ye bhi ho sakta hai. Apne hi component ko implicit intent kabhi mat bhejo — koi dusri app wahi filter likhkar use le sakti hai.",
    },
    docs: "https://developer.android.com/reference/android/content/Intent",
    related: ["startActivity", "putExtra", "ActivityNotFoundException"],
  },

  startActivity: {
    term: "startActivity",
    kind: { en: "Context method", hi: "Context method", "hi-en": "Context method" },
    source: "android",
    importLine: null,
    does: {
      en: "Hands an `Intent` to the system, which resolves it and starts the matching component.",
      hi: "`Intent` को system को सौंपता है, जो उसे हल करके मेल खाता component शुरू कर देता है।",
      "hi-en": "`Intent` ko system ko saunpta hai, jo use hal karke mel khata component shuru kar deta hai.",
    },
    affects: {
      en: "It returns immediately — the new screen is not running yet when the next line executes. With an implicit intent it throws `ActivityNotFoundException` when nothing can handle it, so wrap those in `try`/`catch`.",
      hi: "यह तुरंत लौट आता है — अगली line चलते वक्त नई screen अभी चल भी नहीं रही होती। Implicit intent के साथ, जब कोई सँभालने वाला न हो तो यह `ActivityNotFoundException` फेंकता है, इसलिए उन्हें `try`/`catch` में लपेटिए।",
      "hi-en": "Ye turant laut aata hai — agli line chalte waqt nayi screen abhi chal bhi nahi rahi hoti. Implicit intent ke saath, jab koi sambhalne wala na ho to ye `ActivityNotFoundException` fenkta hai, isliye unhe `try`/`catch` mein lapeto.",
    },
    docs: "https://developer.android.com/reference/android/content/Context#startActivity(android.content.Intent)",
    related: ["Intent", "ActivityNotFoundException"],
  },

  putExtra: {
    term: "putExtra",
    kind: { en: "Intent method", hi: "Intent method", "hi-en": "Intent method" },
    source: "android",
    importLine: null,
    does: {
      en: "Attaches a key-value pair to an `Intent` for the receiving component to read.",
      hi: "`Intent` के साथ एक key-value जोड़ता है, जिसे लेने वाला component पढ़ सके।",
      "hi-en": "`Intent` ke saath ek key-value jodta hai, jise lene wala component padh sake.",
    },
    affects: {
      en: "Neither the key nor the type is checked, so a typo returns `null` at run time instead of failing to compile. Extras also cross a Binder transaction limited to about 1 MB — send an id and re-read the object on the other side, never a bitmap or a long list.",
      hi: "न key जाँची जाती है न type, इसलिए typo compile होने के बजाय run time पर `null` लौटाता है। Extras एक Binder transaction से भी गुजरते हैं जिसकी हद लगभग 1 MB है — id भेजिए और दूसरी तरफ object दोबारा पढ़िए, bitmap या लंबी list कभी नहीं।",
      "hi-en": "Na key jaanchi jati hai na type, isliye typo compile hone ke bajaye run time par `null` lautata hai. Extras ek Binder transaction se bhi guzarte hain jiski had lagbhag 1 MB hai — id bhejo aur dusri taraf object dobara padho, bitmap ya lambi list kabhi nahi.",
    },
    docs: "https://developer.android.com/reference/android/content/Intent#putExtra(java.lang.String,%20java.lang.String)",
    related: ["Intent", "getStringExtra", "Bundle"],
  },

  getStringExtra: {
    term: "getStringExtra",
    kind: { en: "Intent method", hi: "Intent method", "hi-en": "Intent method" },
    source: "android",
    importLine: null,
    does: {
      en: "Reads a `String` extra by key, returning `null` when the key is absent.",
      hi: "Key से `String` extra पढ़ता है, और key न हो तो `null` लौटाता है।",
      "hi-en": "Key se `String` extra padhta hai, aur key na ho to `null` lautata hai.",
    },
    affects: {
      en: "The `null` return is the only signal you get — a misspelled key and a genuinely missing value look identical. Keep the keys in a `companion object` beside a `newIntent(...)` factory so callers cannot get them wrong.",
      hi: "`null` लौटना ही इकलौता इशारा है — गलत लिखी key और सच में गायब value, दोनों एक जैसी दिखती हैं। Keys को `newIntent(...)` factory के साथ `companion object` में रखिए ताकि बुलाने वाला गलती कर ही न सके।",
      "hi-en": "`null` lautna hi iklauta ishara hai — galat likhi key aur sach mein gayab value, dono ek jaisi dikhti hain. Keys ko `newIntent(...)` factory ke saath `companion object` mein rakho taaki bulane wala galti kar hi na sake.",
    },
    docs: "https://developer.android.com/reference/android/content/Intent#getStringExtra(java.lang.String)",
    related: ["putExtra", "Intent"],
  },

  ActivityNotFoundException: {
    term: "ActivityNotFoundException",
    kind: { en: "Android exception", hi: "Android exception", "hi-en": "Android exception" },
    source: "android",
    importLine: "import android.content.ActivityNotFoundException",
    does: {
      en: "Thrown by `startActivity` when no installed component can handle the intent.",
      hi: "`startActivity` तब फेंकता है जब installed components में से कोई उस intent को सँभाल न सके।",
      "hi-en": "`startActivity` tab fenkta hai jab installed components mein se koi us intent ko sambhal na sake.",
    },
    affects: {
      en: "This is the normal outcome on a real device, not an edge case — no dialer, no email client, a locked-down work profile. Checking with `resolveActivity` first stopped being reliable at API 30, where package visibility hides other apps, so catch this instead.",
      hi: "असली device पर यह आम नतीजा है, कोई किनारे का मामला नहीं — कोई dialer नहीं, कोई email client नहीं, या बँधा हुआ work profile। पहले `resolveActivity` से जाँचना API 30 से भरोसेमंद नहीं रहा, जहाँ package visibility दूसरी apps छुपा देती है, इसलिए इसे पकड़िए।",
      "hi-en": "Asli device par ye aam result hai, koi kinare ka maamla nahi — koi dialer nahi, koi email client nahi, ya bandha hua work profile. Pehle `resolveActivity` se jaanchna API 30 se bharosemand nahi raha, jahan package visibility dusri apps chhupa deti hai, isliye ise pakdo.",
    },
    docs: "https://developer.android.com/reference/android/content/ActivityNotFoundException",
    related: ["startActivity", "Intent"],
  },

  Uri: {
    term: "Uri",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.net.Uri",
    does: {
      en: "An immutable, parsed reference to something — a web page, a file, a content provider row.",
      hi: "किसी चीज तक एक immutable, parse किया हुआ पता — कोई web page, कोई file, किसी content provider की row।",
      "hi-en": "Kisi cheez tak ek immutable, parse kiya hua pata — koi web page, koi file, kisi content provider ki row.",
    },
    affects: {
      en: "Its scheme is what implicit intent filters match on, so `https:`, `tel:` and `content:` reach completely different apps. A `content:` Uri also carries a temporary permission grant, which is why it stops working once the granting component is gone.",
      hi: "Implicit intent filters उसके scheme से ही मेल खाते हैं, इसलिए `https:`, `tel:` और `content:` बिलकुल अलग apps तक पहुँचते हैं। `content:` वाला Uri एक अस्थायी permission भी साथ लाता है, इसीलिए देने वाला component जाते ही वह काम करना बंद कर देता है।",
      "hi-en": "Implicit intent filters uske scheme se hi mel khate hain, isliye `https:`, `tel:` aur `content:` bilkul alag apps tak pahunchte hain. `content:` wala Uri ek temporary permission bhi saath laata hai, isiliye dene wala component jaate hi wo kaam karna band kar deta hai.",
    },
    docs: "https://developer.android.com/reference/android/net/Uri",
    related: ["Intent", "startActivity"],
  },

  registerForActivityResult: {
    term: "registerForActivityResult",
    kind: { en: "AndroidX function", hi: "AndroidX function", "hi-en": "AndroidX function" },
    source: "jetpack",
    importLine: "import androidx.activity.result.contract.ActivityResultContracts",
    does: {
      en: "Registers a callback for a result from another activity, and returns a launcher you call later.",
      hi: "दूसरी activity से आने वाले नतीजे के लिए callback register करता है, और एक launcher देता है जिसे आप बाद में बुलाते हैं।",
      "hi-en": "Dusri activity se aane wale result ke liye callback register karta hai, aur ek launcher deta hai jise aap baad mein bulate ho.",
    },
    affects: {
      en: "It must be called before the component reaches `STARTED` — as a field or in `onCreate`, unconditionally. A result can be delivered while the activity is still being recreated after process death, and the callback has to already exist. Registering inside a click listener throws.",
      hi: "इसे component के `STARTED` तक पहुँचने से पहले बुलाना ही पड़ता है — field की तरह या `onCreate` में, बिना किसी शर्त के। नतीजा तब भी आ सकता है जब activity process death के बाद दोबारा बन ही रही हो, और तब तक callback मौजूद होना चाहिए। Click listener के अंदर register करने पर यह फेंकता है।",
      "hi-en": "Ise component ke `STARTED` tak pahunchne se pehle bulana hi padta hai — field ki tarah ya `onCreate` mein, bina kisi shart ke. Result tab bhi aa sakta hai jab activity process death ke baad dobara ban hi rahi ho, aur tab tak callback maujood hona chahiye. Click listener ke andar register karne par ye fenkta hai.",
    },
    docs: "https://developer.android.com/training/basics/intents/result",
    related: ["ActivityResultContracts", "ComponentActivity"],
  },

  ActivityResultContracts: {
    term: "ActivityResultContracts",
    kind: { en: "AndroidX object", hi: "AndroidX object", "hi-en": "AndroidX object" },
    source: "jetpack",
    importLine: "import androidx.activity.result.contract.ActivityResultContracts",
    does: {
      en: "Ready-made contracts that turn a raw activity result into a real type — `GetContent`, `TakePicture`, `RequestPermission`.",
      hi: "पहले से बने contracts, जो कच्चे activity result को असली type में बदल देते हैं — `GetContent`, `TakePicture`, `RequestPermission`।",
      "hi-en": "Pehle se bane contracts, jo kachhe activity result ko asli type mein badal dete hain — `GetContent`, `TakePicture`, `RequestPermission`.",
    },
    affects: {
      en: "The contract does the intent building and result parsing, so your callback receives a `Uri?` or a `Boolean` instead of an `Intent` and a result code. Use `StartActivityForResult()` only when no ready-made contract fits.",
      hi: "Contract खुद intent बनाता है और नतीजा पढ़ता है, इसलिए आपके callback को `Intent` और result code की जगह सीधे `Uri?` या `Boolean` मिलता है। `StartActivityForResult()` तभी उठाइए जब कोई बना-बनाया contract बैठे ही नहीं।",
      "hi-en": "Contract khud intent banata hai aur result padhta hai, isliye aapke callback ko `Intent` aur result code ki jagah seedhe `Uri?` ya `Boolean` milta hai. `StartActivityForResult()` tabhi uthao jab koi bana-banaya contract baithe hi nahi.",
    },
    docs: "https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts",
    related: ["registerForActivityResult", "Uri"],
  },

  Fragment: {
    term: "Fragment",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.fragment.app.Fragment",
    does: {
      en: "A reusable piece of screen with its own lifecycle, hosted inside an activity.",
      hi: "Screen का एक दोबारा इस्तेमाल होने वाला हिस्सा, अपने lifecycle के साथ, जो किसी activity के अंदर रहता है।",
      "hi-en": "Screen ka ek dobara use hone wala hissa, apne lifecycle ke saath, jo kisi activity ke andar rehta hai.",
    },
    affects: {
      en: "It has **two** lifecycles — its own and its view's — and they do not line up: on the back stack the view is destroyed while the fragment object survives. That is why view-related work must use `viewLifecycleOwner`, and why a constructor parameter never survives recreation.",
      hi: "इसके **दो** lifecycle होते हैं — अपना और अपनी view का — और दोनों एक साथ नहीं चलते: back stack पर view खत्म हो जाती है जबकि fragment object बचा रहता है। इसीलिए view से जुड़ा काम `viewLifecycleOwner` से बँधना चाहिए, और इसीलिए constructor parameter दोबारा बनने पर कभी नहीं बचता।",
      "hi-en": "Iske **do** lifecycle hote hain — apna aur apni view ka — aur dono ek saath nahi chalte: back stack par view khatam ho jati hai jabki fragment object bacha rehta hai. Isiliye view se juda kaam `viewLifecycleOwner` se bandhna chahiye, aur isiliye constructor parameter dobara banne par kabhi nahi bachta.",
    },
    docs: "https://developer.android.com/guide/fragments",
    related: ["viewLifecycleOwner", "onViewCreated", "onDestroyView"],
  },

  viewLifecycleOwner: {
    term: "viewLifecycleOwner",
    kind: { en: "Fragment property", hi: "Fragment property", "hi-en": "Fragment property" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "The lifecycle owner of a fragment's **view**, which ends at `onDestroyView` rather than at `onDestroy`.",
      hi: "Fragment की **view** का lifecycle owner, जो `onDestroy` पर नहीं, `onDestroyView` पर खत्म होता है।",
      "hi-en": "Fragment ki **view** ka lifecycle owner, jo `onDestroy` par nahi, `onDestroyView` par khatam hota hai.",
    },
    affects: {
      en: "Scoping to `this` instead leaves observers running after the view is gone, so returning from the back stack starts a second one while the first still writes to a destroyed view — a duplicated update and a leak of the whole old view tree.",
      hi: "इसकी जगह `this` से बाँधने पर view जाने के बाद भी observers चलते रहते हैं, तो back stack से लौटने पर दूसरा शुरू हो जाता है जबकि पहला अब भी खत्म हो चुकी view में लिखता है — update दो बार, और पूरा पुराना view tree leak।",
      "hi-en": "Iski jagah `this` se baandhne par view jaane ke baad bhi observers chalte rehte hain, to back stack se lautne par dusra shuru ho jata hai jabki pehla ab bhi khatam ho chuki view mein likhta hai — update do baar, aur poora purana view tree leak.",
    },
    docs: "https://developer.android.com/guide/fragments/lifecycle",
    related: ["Fragment", "onDestroyView", "repeatOnLifecycle"],
  },

  onViewCreated: {
    term: "onViewCreated",
    kind: { en: "Fragment callback", hi: "Fragment callback", "hi-en": "Fragment callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Called once the fragment's view exists — the place to bind views and start observing.",
      hi: "Fragment की view बन जाने पर बुलाया जाता है — views बाँधने और observe शुरू करने की जगह यही है।",
      "hi-en": "Fragment ki view ban jaane par bulaya jata hai — views baandhne aur observe shuru karne ki jagah yahi hai.",
    },
    affects: {
      en: "It runs again every time the fragment returns from the back stack, so anything started here must be scoped to `viewLifecycleOwner` or you accumulate one more of it per visit.",
      hi: "Fragment जब भी back stack से लौटता है यह दोबारा चलता है, इसलिए यहाँ शुरू की गई हर चीज `viewLifecycleOwner` से बँधी होनी चाहिए, वरना हर बार एक और जुड़ती जाएगी।",
      "hi-en": "Fragment jab bhi back stack se lautta hai ye dobara chalta hai, isliye yahan shuru ki gayi har cheez `viewLifecycleOwner` se bandhi honi chahiye, warna har baar ek aur judti jayegi.",
    },
    docs: "https://developer.android.com/guide/fragments/lifecycle",
    related: ["Fragment", "onDestroyView", "viewLifecycleOwner"],
  },

  onDestroyView: {
    term: "onDestroyView",
    kind: { en: "Fragment callback", hi: "Fragment callback", "hi-en": "Fragment callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Called when the fragment's view is torn down, while the fragment object itself stays alive.",
      hi: "जब fragment की view हटाई जाती है तब बुलाया जाता है, जबकि fragment object खुद जिंदा रहता है।",
      "hi-en": "Jab fragment ki view hatai jati hai tab bulaya jata hai, jabki fragment object khud zinda rehta hai.",
    },
    affects: {
      en: "This is where a `ViewBinding` must be set to `null`. Skipping it keeps the entire destroyed view hierarchy alive for as long as the fragment sits on the back stack.",
      hi: "`ViewBinding` को `null` यहीं करना होता है। छोड़ दिया तो fragment जब तक back stack पर है, पूरा खत्म हो चुका view hierarchy जिंदा रहता है।",
      "hi-en": "`ViewBinding` ko `null` yahin karna hota hai. Chhod diya to fragment jab tak back stack par hai, poora khatam ho chuka view hierarchy zinda rehta hai.",
    },
    docs: "https://developer.android.com/guide/fragments/lifecycle",
    related: ["Fragment", "onViewCreated", "viewLifecycleOwner"],
  },

  addToBackStack: {
    term: "addToBackStack",
    kind: { en: "Transaction method", hi: "Transaction method", "hi-en": "Transaction method" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Records a fragment transaction so the Back gesture reverses it.",
      hi: "Fragment transaction को दर्ज कर देता है ताकि Back दबाने पर वह उलट जाए।",
      "hi-en": "Fragment transaction ko darj kar deta hai taaki Back dabane par wo ulat jaye.",
    },
    affects: {
      en: "Combined with `replace`, this is the case that separates the two fragment lifecycles: the old fragment object is kept in memory while its view is destroyed and rebuilt on return.",
      hi: "`replace` के साथ मिलकर यही वह मामला है जो fragment के दोनों lifecycle अलग कर देता है: पुराना fragment object memory में रहता है जबकि उसकी view खत्म होकर लौटने पर दोबारा बनती है।",
      "hi-en": "`replace` ke saath milkar yahi wo maamla hai jo fragment ke dono lifecycle alag kar deta hai: purana fragment object memory mein rehta hai jabki uski view khatam hokar lautne par dobara banti hai.",
    },
    docs: "https://developer.android.com/guide/fragments/transactions",
    related: ["Fragment", "supportFragmentManager"],
  },

  supportFragmentManager: {
    term: "supportFragmentManager",
    kind: { en: "Activity property", hi: "Activity property", "hi-en": "Activity property" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "The activity's fragment manager — it runs transactions and restores fragments after recreation.",
      hi: "Activity का fragment manager — यही transactions चलाता है और दोबारा बनने पर fragments वापस लाता है।",
      "hi-en": "Activity ka fragment manager — yahi transactions chalata hai aur dobara banne par fragments wapas laata hai.",
    },
    affects: {
      en: "It restores each fragment by calling its **no-argument constructor**, which is exactly why constructor parameters are lost after rotation and why data must travel in `arguments`.",
      hi: "यह हर fragment को उसके **बिना-argument वाले constructor** से दोबारा बनाता है, और ठीक इसीलिए rotation के बाद constructor parameters खो जाते हैं और data को `arguments` से जाना पड़ता है।",
      "hi-en": "Ye har fragment ko uske **bina-argument wale constructor** se dobara banata hai, aur theek isiliye rotation ke baad constructor parameters kho jate hain aur data ko `arguments` se jana padta hai.",
    },
    docs: "https://developer.android.com/guide/fragments/fragmentmanager",
    related: ["Fragment", "addToBackStack", "bundleOf"],
  },

  bundleOf: {
    term: "bundleOf",
    kind: { en: "AndroidX function", hi: "AndroidX function", "hi-en": "AndroidX function" },
    source: "jetpack",
    importLine: "import androidx.core.os.bundleOf",
    does: {
      en: "Builds a `Bundle` from key-value pairs in one expression.",
      hi: "Key-value जोड़ों से एक ही expression में `Bundle` बना देता है।",
      "hi-en": "Key-value jodon se ek hi expression mein `Bundle` bana deta hai.",
    },
    affects: {
      en: "This is how fragment `arguments` are set, and a `Bundle` is what the system saves and restores — so anything passed this way survives recreation, unlike a constructor parameter.",
      hi: "Fragment के `arguments` ऐसे ही रखे जाते हैं, और `Bundle` वही है जिसे system save करके वापस लाता है — तो इस रास्ते से भेजी हर चीज दोबारा बनने पर बच जाती है, constructor parameter के उलट।",
      "hi-en": "Fragment ke `arguments` aise hi rakhe jate hain, aur `Bundle` wahi hai jise system save karke wapas laata hai — to is raste se bheji har cheez dobara banne par bach jati hai, constructor parameter ke ulat.",
    },
    docs: "https://developer.android.com/reference/kotlin/androidx/core/os/package-summary#bundleof",
    related: ["Bundle", "Fragment", "supportFragmentManager"],
  },

  SavedStateHandle: {
    term: "SavedStateHandle",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.SavedStateHandle",
    does: {
      en: "A key-value store inside a `ViewModel` that is backed by saved instance state.",
      hi: "`ViewModel` के अंदर एक key-value store, जो saved instance state पर टिका है।",
      "hi-en": "`ViewModel` ke andar ek key-value store, jo saved instance state par tika hai.",
    },
    affects: {
      en: "It is the only part of a `ViewModel` that survives process death, because it goes through the same `Bundle`. That also means it inherits the roughly 1 MB Binder limit — save the user's query or a selected id, never the results.",
      hi: "`ViewModel` का यही इकलौता हिस्सा है जो process death झेलता है, क्योंकि यह उसी `Bundle` से जाता है। इसका मतलब यह भी है कि लगभग 1 MB वाली Binder की हद इस पर भी लगती है — user की query या चुनी हुई id save कीजिए, नतीजे कभी नहीं।",
      "hi-en": "`ViewModel` ka yahi iklauta hissa hai jo process death jhelta hai, kyunki ye usi `Bundle` se jata hai. Iska matlab ye bhi hai ki lagbhag 1 MB wali Binder ki had is par bhi lagti hai — user ki query ya chuni hui id save karo, results kabhi nahi.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/viewmodel/viewmodel-savedstate",
    related: ["ViewModel", "onSaveInstanceState", "Bundle"],
  },

  onSaveInstanceState: {
    term: "onSaveInstanceState",
    kind: { en: "Activity callback", hi: "Activity callback", "hi-en": "Activity callback" },
    source: "android",
    importLine: null,
    does: {
      en: "Called on the way down, before `onStop`, to write small values into a `Bundle` the system keeps.",
      hi: "नीचे उतरते वक्त, `onStop` से पहले बुलाया जाता है, ताकि छोटी values उस `Bundle` में लिखी जा सकें जिसे system रखता है।",
      "hi-en": "Neeche utarte waqt, `onStop` se pehle bulaya jata hai, taaki chhoti values us `Bundle` mein likhi ja sakein jise system rakhta hai.",
    },
    affects: {
      en: "This is the only state that survives process death, since no callback at all runs when the process is killed. The `Bundle` crosses a Binder transaction capped near 1 MB, so a large list or bitmap here becomes `TransactionTooLargeException` on a user's phone.",
      hi: "Process death को यही इकलौता state झेलता है, क्योंकि process मारे जाने पर एक भी callback नहीं चलता। `Bundle` एक Binder transaction से जाता है जिसकी हद लगभग 1 MB है, तो यहाँ बड़ी list या bitmap रखने का नतीजा किसी user के phone पर `TransactionTooLargeException` है।",
      "hi-en": "Process death ko yahi iklauta state jhelta hai, kyunki process maare jaane par ek bhi callback nahi chalta. `Bundle` ek Binder transaction se jata hai jiski had lagbhag 1 MB hai, to yahan badi list ya bitmap rakhne ka result kisi user ke phone par `TransactionTooLargeException` hai.",
    },
    docs: "https://developer.android.com/guide/components/activities/activity-lifecycle#saras",
    related: ["Bundle", "SavedStateHandle", "ViewModel"],
  },

  lifecycleScope: {
    term: "lifecycleScope",
    kind: { en: "AndroidX property", hi: "AndroidX property", "hi-en": "AndroidX property" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.lifecycleScope",
    does: {
      en: "A `CoroutineScope` tied to a lifecycle, cancelled automatically when that lifecycle is destroyed.",
      hi: "किसी lifecycle से बँधा `CoroutineScope`, जो उस lifecycle के खत्म होते ही अपने आप cancel हो जाता है।",
      "hi-en": "Kisi lifecycle se bandha `CoroutineScope`, jo us lifecycle ke khatam hote hi apne aap cancel ho jata hai.",
    },
    affects: {
      en: "In a fragment, `viewLifecycleOwner.lifecycleScope` is almost always the one you want — the plain fragment scope outlives the view and keeps collectors running against a destroyed view tree.",
      hi: "Fragment में लगभग हमेशा `viewLifecycleOwner.lifecycleScope` ही चाहिए होता है — सादा fragment वाला scope view से ज्यादा जीता है और collectors को खत्म हो चुके view tree पर चलाता रहता है।",
      "hi-en": "Fragment mein lagbhag hamesha `viewLifecycleOwner.lifecycleScope` hi chahiye hota hai — saada fragment wala scope view se zyada jeeta hai aur collectors ko khatam ho chuke view tree par chalata rehta hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/coroutines",
    related: ["viewLifecycleOwner", "repeatOnLifecycle", "CoroutineScope"],
  },

  repeatOnLifecycle: {
    term: "repeatOnLifecycle",
    kind: { en: "AndroidX function", hi: "AndroidX function", "hi-en": "AndroidX function" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.repeatOnLifecycle",
    does: {
      en: "Runs a block whenever the lifecycle reaches a state, and cancels it when the lifecycle drops below that state.",
      hi: "Lifecycle जब भी किसी state तक पहुँचता है तब block चलाता है, और उससे नीचे गिरते ही cancel कर देता है।",
      "hi-en": "Lifecycle jab bhi kisi state tak pahunchta hai tab block chalata hai, aur usse neeche girte hi cancel kar deta hai.",
    },
    affects: {
      en: "Without it, a collector started in `onViewCreated` keeps running while the app is in the background, updating views nobody can see and holding work open. `STARTED` is the state to use for anything that touches the UI.",
      hi: "इसके बिना, `onViewCreated` में शुरू हुआ collector app के background में रहते हुए भी चलता रहता है, ऐसी views update करता है जो किसी को दिख ही नहीं रहीं, और काम खुला रखता है। UI छूने वाली हर चीज के लिए `STARTED` वाली state इस्तेमाल कीजिए।",
      "hi-en": "Iske bina, `onViewCreated` mein shuru hua collector app ke background mein rehte hue bhi chalta rehta hai, aisi views update karta hai jo kisi ko dikh hi nahi rahin, aur kaam khula rakhta hai. UI chhoone wali har cheez ke liye `STARTED` wali state use karo.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/coroutines#restart",
    related: ["lifecycleScope", "viewLifecycleOwner", "StateFlow"],
  },

  Log: {
    term: "Log",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.util.Log",
    does: {
      en: "Writes a tagged, levelled message to Logcat.",
      hi: "Logcat में tag और level वाला message लिखता है।",
      "hi-en": "Logcat mein tag aur level wala message likhta hai.",
    },
    affects: {
      en: "Always pass the `Throwable` as the third argument rather than logging `e.message` — the message alone loses the stack, which is the part that says where it happened. Never log names, emails, tokens or record contents: log ids instead.",
      hi: "`e.message` log करने के बजाय तीसरे argument में हमेशा `Throwable` भेजिए — अकेला message stack खो देता है, और वही बताती है कि हुआ कहाँ। नाम, email, tokens या record का सामान कभी log मत कीजिए; उनकी जगह ids।",
      "hi-en": "`e.message` log karne ke bajaye teesre argument mein hamesha `Throwable` bhejo — akela message stack kho deta hai, aur wahi batati hai ki hua kahan. Naam, email, tokens ya record ka saamaan kabhi log mat karo; unki jagah ids.",
    },
    docs: "https://developer.android.com/reference/android/util/Log",
    related: ["Context"],
  },

  getString: {
    term: "getString",
    kind: { en: "Context method", hi: "Context method", "hi-en": "Context method" },
    source: "android",
    importLine: null,
    does: {
      en: "Looks up a string resource for the current configuration, substituting any format arguments.",
      hi: "मौजूदा configuration के हिसाब से string resource ढूँढ़ता है, और format arguments भर देता है।",
      "hi-en": "Maujooda configuration ke hisaab se string resource dhundhta hai, aur format arguments bhar deta hai.",
    },
    affects: {
      en: "Passing arguments here instead of joining strings is what lets a translator move the placeholder, because word order differs between languages. With two or more, use positional forms — `%1$s`, `%2$s`.",
      hi: "Strings जोड़ने के बजाय arguments यहीं भेजना ही translator को placeholder हिलाने देता है, क्योंकि भाषाओं में शब्दों का क्रम अलग होता है। दो या ज्यादा हों तो जगह वाला रूप लीजिए — `%1$s`, `%2$s`।",
      "hi-en": "Strings jodne ke bajaye arguments yahin bhejna hi translator ko placeholder hilane deta hai, kyunki bhashaon mein shabdon ka order alag hota hai. Do ya zyada hon to jagah wala roop lo — `%1$s`, `%2$s`.",
    },
    docs: "https://developer.android.com/reference/android/content/Context#getString(int)",
    related: ["getQuantityString", "Context"],
  },

  getQuantityString: {
    term: "getQuantityString",
    kind: { en: "Resources method", hi: "Resources method", "hi-en": "Resources method" },
    source: "android",
    importLine: null,
    does: {
      en: "Picks the right plural form for a count and formats it.",
      hi: "Count के हिसाब से सही plural रूप चुनता है और उसे format कर देता है।",
      "hi-en": "Count ke hisaab se sahi plural roop chunta hai aur use format kar deta hai.",
    },
    affects: {
      en: "The count is passed twice — once to choose the form, once to substitute into it — and forgetting the second gives a label with no number in it. Plural rules differ by language, which is exactly why this is not an `if (count == 1)`.",
      hi: "Count दो बार जाता है — एक बार रूप चुनने को, एक बार उसमें भरने को — और दूसरा भूल जाने पर ऐसा label मिलता है जिसमें number ही नहीं। Plural के नियम हर भाषा में अलग हैं, और ठीक इसीलिए यह `if (count == 1)` नहीं है।",
      "hi-en": "Count do baar jata hai — ek baar roop chunne ko, ek baar usmein bharne ko — aur dusra bhool jaane par aisa label milta hai jismein number hi nahi. Plural ke niyam har bhasha mein alag hain, aur theek isiliye ye `if (count == 1)` nahi hai.",
    },
    docs: "https://developer.android.com/guide/topics/resources/string-resource#Plurals",
    related: ["getString"],
  },
};
