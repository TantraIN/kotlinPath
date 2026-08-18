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
    values: {
      en: "Primitives, `String` and `CharSequence`, arrays and `ArrayList`s of those, anything `Parcelable` or `Serializable`, and nested `Bundle`s. Nothing else, and nothing large.",
      hi: "Primitives, `String` और `CharSequence`, इनके arrays और `ArrayList`, कोई भी `Parcelable` या `Serializable`, और अंदर एक और `Bundle`। इसके अलावा कुछ नहीं, और बड़ा कुछ नहीं।",
      "hi-en": "Primitives, `String` aur `CharSequence`, inke arrays aur `ArrayList`, koi bhi `Parcelable` ya `Serializable`, aur andar ek aur `Bundle`. Iske alawa kuch nahi, aur bada kuch nahi.",
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
    values: {
      en: "Zero or more keys — `remember(userId) { }`. With no key the value survives every recomposition; when a key changes, the block runs again.",
      hi: "शून्य या ज्यादा keys — `remember(userId) { }`। बिना key के value हर recomposition झेल जाती है; key बदलते ही block दोबारा चलता है।",
      "hi-en": "Zero ya zyada keys — `remember(userId) { }`. Bina key ke value har recomposition jhel jati hai; key badalte hi block dobara chalta hai.",
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
    values: {
      en: "An optional equality policy: `structuralEqualityPolicy()` (the default, uses `equals`), `referentialEqualityPolicy()`, or `neverEqualPolicy()` to recompose on every write.",
      hi: "चाहें तो एक equality policy: `structuralEqualityPolicy()` (default, `equals` इस्तेमाल करती है), `referentialEqualityPolicy()`, या `neverEqualPolicy()` ताकि हर लिखाई पर recompose हो।",
      "hi-en": "Chaho to ek equality policy: `structuralEqualityPolicy()` (default, `equals` use karti hai), `referentialEqualityPolicy()`, ya `neverEqualPolicy()` taaki har likhai par recompose ho.",
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
    values: {
      en: "One or more keys. `Unit` or `true` means run once for as long as the composable is there; passing a changing value restarts the effect each time it changes.",
      hi: "एक या ज्यादा keys। `Unit` या `true` का मतलब है composable के रहते एक ही बार चलना; बदलती हुई value देने पर हर बदलाव पर effect दोबारा शुरू होता है।",
      "hi-en": "Ek ya zyada keys. `Unit` ya `true` ka matlab hai composable ke rehte ek hi baar chalna; badalti hui value dene par har badlav par effect dobara shuru hota hai.",
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
    values: {
      en: "`verticalArrangement` takes `Arrangement.Top`, `Center`, `Bottom`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly` or `spacedBy(8.dp)`; `horizontalAlignment` takes `Alignment.Start`, `CenterHorizontally` or `End`.",
      hi: "`verticalArrangement` में `Arrangement.Top`, `Center`, `Bottom`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly` या `spacedBy(8.dp)` आता है; `horizontalAlignment` में `Alignment.Start`, `CenterHorizontally` या `End`।",
      "hi-en": "`verticalArrangement` mein `Arrangement.Top`, `Center`, `Bottom`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly` ya `spacedBy(8.dp)` aata hai; `horizontalAlignment` mein `Alignment.Start`, `CenterHorizontally` ya `End`.",
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
    values: {
      en: "Inside the block: `item { }`, `items(list) { }`, `itemsIndexed(list) { }` and `stickyHeader { }`. Each takes a `key` and an optional `contentType`.",
      hi: "Block के अंदर: `item { }`, `items(list) { }`, `itemsIndexed(list) { }` और `stickyHeader { }`। हर एक `key` लेता है, और चाहें तो `contentType` भी।",
      "hi-en": "Block ke andar: `item { }`, `items(list) { }`, `itemsIndexed(list) { }` aur `stickyHeader { }`. Har ek `key` leta hai, aur chaho to `contentType` bhi.",
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

  View: {
    term: "View",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.view.View",
    does: {
      en: "The base class for everything drawable on screen — one rectangle that measures, lays out and draws itself.",
      hi: "screen पर दिखने वाली हर चीज की base class — एक आयत जो खुद को measure करती है, जगह देती है और बनाती है।",
      "hi-en": "Screen par dikhne wali har cheez ki base class — ek aayat jo khud ko measure karti hai, jagah deti hai aur banati hai.",
    },
    affects: {
      en: "Every widget you use inherits its measure, layout and draw contract from here, so `onMeasure` and `onDraw` behave the same in a `TextView` and in your own class.",
      hi: "आप जो भी widget इस्तेमाल करते हैं उसका measure, layout और draw का करार यहीं से आता है, इसलिए `onMeasure` और `onDraw` `TextView` में और आपकी अपनी class में एक जैसे बरतते हैं।",
      "hi-en": "Aap jo bhi widget istemal karte hain uska measure, layout aur draw ka karaar yahin se aata hai, isliye `onMeasure` aur `onDraw` `TextView` mein aur aapki apni class mein ek jaise bartte hain.",
    },
    docs: "https://developer.android.com/reference/android/view/View",
    related: ["ViewGroup", "onMeasure", "onDraw"],
  },

  ViewGroup: {
    term: "ViewGroup",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.view.ViewGroup",
    does: {
      en: "A `View` that holds other views and decides where each of them goes.",
      hi: "ऐसी `View` जो दूसरी views रखती है और तय करती है कि हर एक कहाँ जाएगी।",
      "hi-en": "Aisi `View` jo doosri views rakhti hai aur tay karti hai ki har ek kahan jayegi.",
    },
    affects: {
      en: "Only a `ViewGroup` implements `onLayout`, and only its children may use `layout_` attributes — a `layout_weight` on a child of something that is not a `LinearLayout` is silently ignored.",
      hi: "`onLayout` सिर्फ `ViewGroup` लिखता है, और `layout_` वाले attributes सिर्फ उसके बच्चे इस्तेमाल कर सकते हैं — जो `LinearLayout` नहीं है उसके बच्चे पर लगा `layout_weight` चुपचाप अनदेखा हो जाता है।",
      "hi-en": "`onLayout` sirf `ViewGroup` likhta hai, aur `layout_` wale attributes sirf uske bachche istemal kar sakte hain — jo `LinearLayout` nahi hai uske bachche par laga `layout_weight` chupchap andekha ho jata hai.",
    },
    docs: "https://developer.android.com/reference/android/view/ViewGroup",
    related: ["View", "LayoutInflater", "RecyclerView"],
  },

  findViewById: {
    term: "findViewById",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "android",
    importLine: null,
    does: {
      en: "Walks the inflated view tree looking for a matching id and returns the view, cast to whatever you asked for.",
      hi: "inflate हुए view के पेड़ में मिलती-जुलती id ढूँढ़ता है और वह view लौटाता है, आपने जो type माँगा उसमें cast करके।",
      "hi-en": "Inflate hue view ke ped mein milti-julti id dhundhta hai aur wo view lautata hai, aapne jo type maanga usmein cast karke.",
    },
    affects: {
      en: "The cast is unchecked and the id is not verified against this layout, so a wrong type gives `ClassCastException` and a missing id gives `null` — both at run time. `ViewBinding` turns the same two mistakes into compile errors.",
      hi: "cast की जाँच नहीं होती और id इसी layout में है या नहीं यह भी नहीं देखा जाता, इसलिए गलत type पर `ClassCastException` और न मिलने पर `null` मिलता है — दोनों चलते वक्त। `ViewBinding` इन्हीं दो गलतियों को compile error बना देता है।",
      "hi-en": "Cast ki jaanch nahi hoti aur id isi layout mein hai ya nahi ye bhi nahi dekha jata, isliye galat type par `ClassCastException` aur na milne par `null` milta hai — dono chalte waqt. `ViewBinding` inhin do galtiyon ko compile error bana deta hai.",
    },
    docs: "https://developer.android.com/reference/android/view/View#findViewById(int)",
    related: ["View", "LayoutInflater"],
  },

  LayoutInflater: {
    term: "LayoutInflater",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.view.LayoutInflater",
    does: {
      en: "Reads a layout XML file and builds the real `View` objects it describes.",
      hi: "layout की XML file पढ़कर उसमें बताई गई असली `View` चीजें बनाता है।",
      "hi-en": "Layout ki XML file padhkar usmein batai gayi asli `View` cheezein banata hai.",
    },
    affects: {
      en: "The third parameter decides attachment: passing `true` adds the new view to the parent immediately, which is wrong inside a `RecyclerView` adapter because the list attaches it itself and you get `IllegalStateException` or a doubled row.",
      hi: "तीसरा parameter जुड़ाव तय करता है: `true` देने पर नई view तुरंत parent में जुड़ जाती है, जो `RecyclerView` के adapter में गलत है क्योंकि list उसे खुद जोड़ती है और आपको `IllegalStateException` या दोहरी row मिलती है।",
      "hi-en": "Teesra parameter judaav tay karta hai: `true` dene par nai view turant parent mein jud jati hai, jo `RecyclerView` ke adapter mein galat hai kyunki list use khud jodti hai aur aapko `IllegalStateException` ya dohri row milti hai.",
    },
    docs: "https://developer.android.com/reference/android/view/LayoutInflater",
    related: ["ViewGroup", "onCreateViewHolder", "View"],
  },

  MeasureSpec: {
    term: "MeasureSpec",
    kind: { en: "Nested class", hi: "Nested class", "hi-en": "Nested class" },
    source: "android",
    importLine: null,
    does: {
      en: "Packs a size and a mode — `EXACTLY`, `AT_MOST` or `UNSPECIFIED` — into the single int a parent passes down when it measures a child.",
      hi: "एक size और एक mode — `EXACTLY`, `AT_MOST` या `UNSPECIFIED` — को उस एक int में भरता है जो parent बच्चे को measure करते वक्त नीचे भेजता है।",
      "hi-en": "Ek size aur ek mode — `EXACTLY`, `AT_MOST` ya `UNSPECIFIED` — ko us ek int mein bharta hai jo parent bachche ko measure karte waqt neeche bhejta hai.",
    },
    values: {
      en: "`EXACTLY` — the parent has decided (`match_parent` or a fixed dp). `AT_MOST` — take what you need up to this (`wrap_content`). `UNSPECIFIED` — no limit, used by scrolling parents.",
      hi: "`EXACTLY` — parent तय कर चुका है (`match_parent` या पक्का dp)। `AT_MOST` — इससे ज्यादा नहीं, जितना चाहिए ले लो (`wrap_content`)। `UNSPECIFIED` — कोई हद नहीं, scroll करने वाले parents इसे भेजते हैं।",
      "hi-en": "`EXACTLY` — parent tay kar chuka hai (`match_parent` ya pakka dp). `AT_MOST` — isse zyada nahi, jitna chahiye le lo (`wrap_content`). `UNSPECIFIED` — koi had nahi, scroll karne wale parents ise bhejte hain.",
    },
    affects: {
      en: "A custom view that ignores the mode turns `wrap_content` into `match_parent`, because the default implementation simply accepts the size it was offered.",
      hi: "जो custom view mode अनदेखा करती है वह `wrap_content` को `match_parent` बना देती है, क्योंकि default तरीका उसे दिया गया size जस का तस मान लेता है।",
      "hi-en": "Jo custom view mode andekha karti hai wo `wrap_content` ko `match_parent` bana deti hai, kyunki default tarika use diya gaya size jas ka tas maan leta hai.",
    },
    docs: "https://developer.android.com/reference/android/view/View.MeasureSpec",
    related: ["onMeasure", "resolveSize", "setMeasuredDimension"],
  },

  onMeasure: {
    term: "onMeasure",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "android",
    importLine: null,
    does: {
      en: "Asks a view how big it wants to be, given the constraints its parent passed down.",
      hi: "parent ने जो हद भेजी है, उसे देखते हुए view से पूछता है कि वह कितनी बड़ी होना चाहती है।",
      "hi-en": "Parent ne jo had bheji hai, use dekhte hue view se puchta hai ki wo kitni badi hona chahti hai.",
    },
    affects: {
      en: "It must end in `setMeasuredDimension`, or the framework throws `IllegalStateException`. It can run more than once per layout pass, so anything expensive inside it is paid repeatedly.",
      hi: "इसका अंत `setMeasuredDimension` पर होना चाहिए, वरना framework `IllegalStateException` फेंकता है। एक layout pass में यह एक से ज्यादा बार चल सकता है, इसलिए इसके अंदर रखा भारी काम बार-बार भुगतना पड़ता है।",
      "hi-en": "Iska ant `setMeasuredDimension` par hona chahiye, warna framework `IllegalStateException` phenkta hai. Ek layout pass mein ye ek se zyada baar chal sakta hai, isliye iske andar rakha bhaari kaam baar-baar bhugatna padta hai.",
    },
    docs: "https://developer.android.com/guide/topics/ui/how-android-draws",
    related: ["MeasureSpec", "setMeasuredDimension", "resolveSize"],
  },

  setMeasuredDimension: {
    term: "setMeasuredDimension",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "android",
    importLine: null,
    does: {
      en: "Records the size a view has settled on, ending its `onMeasure`.",
      hi: "view ने जो size तय किया है उसे दर्ज करता है, और उसकी `onMeasure` वहीं खत्म करता है।",
      "hi-en": "View ne jo size tay kiya hai use darj karta hai, aur uski `onMeasure` wahin khatam karta hai.",
    },
    affects: {
      en: "Until it is called the view has no measured size, so `IllegalStateException: onMeasure() did not set the measured dimension` is a missing call, never a wrong number.",
      hi: "जब तक यह न बुलाया जाए view का कोई measured size होता ही नहीं, इसलिए `IllegalStateException: onMeasure() did not set the measured dimension` का मतलब है यह छूट गया, गलत आँकड़ा कभी नहीं।",
      "hi-en": "Jab tak ye na bulaya jaye view ka koi measured size hota hi nahi, isliye `IllegalStateException: onMeasure() did not set the measured dimension` ka matlab hai ye chhoot gaya, galat aankda kabhi nahi.",
    },
    related: ["onMeasure", "resolveSize", "MeasureSpec"],
  },

  resolveSize: {
    term: "resolveSize",
    kind: { en: "Static method", hi: "Static method", "hi-en": "Static method" },
    source: "android",
    importLine: null,
    does: {
      en: "Takes the size a view would like plus the parent's `MeasureSpec`, and returns the size it is actually allowed.",
      hi: "view जो size चाहती है और parent का `MeasureSpec` लेकर वह size लौटाता है जिसकी असल में इजाजत है।",
      "hi-en": "View jo size chahti hai aur parent ka `MeasureSpec` lekar wo size lautata hai jiski asal mein ijazat hai.",
    },
    affects: {
      en: "It is the whole reason a correct `onMeasure` is four lines: it handles all three modes, so `wrap_content` and `match_parent` both behave without a `when` block of your own.",
      hi: "सही `onMeasure` चार line का इसीलिए होता है: यह तीनों modes सँभाल लेता है, तो `wrap_content` और `match_parent` दोनों आपके अपने `when` block के बिना ठीक बरतते हैं।",
      "hi-en": "Sahi `onMeasure` chaar line ka isiliye hota hai: ye teenon modes sambhal leta hai, to `wrap_content` aur `match_parent` dono aapke apne `when` block ke bina theek bartte hain.",
    },
    related: ["onMeasure", "MeasureSpec", "setMeasuredDimension"],
  },

  onSizeChanged: {
    term: "onSizeChanged",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "android",
    importLine: null,
    does: {
      en: "Fires once the view's size is settled, before the first draw and again after any resize.",
      hi: "view का size तय हो जाने पर चलता है, पहली draw से पहले और size बदलने पर दोबारा।",
      "hi-en": "View ka size tay ho jane par chalta hai, pehli draw se pehle aur size badalne par dobara.",
    },
    affects: {
      en: "It is the correct home for geometry that depends only on the size — rectangles, paths, gradients. Computing those in `onDraw` repeats the work on every frame.",
      hi: "जो ज्यामिति सिर्फ size पर टिकी है — आयत, path, gradient — उसकी सही जगह यही है। उन्हें `onDraw` में निकालना हर frame पर वही काम दोहराता है।",
      "hi-en": "Jo geometry sirf size par tiki hai — aayat, path, gradient — uski sahi jagah yahi hai. Unhe `onDraw` mein nikalna har frame par wahi kaam doharata hai.",
    },
    related: ["onDraw", "onMeasure", "RectF"],
  },

  onDraw: {
    term: "onDraw",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "android",
    importLine: null,
    does: {
      en: "Records the drawing commands for a view onto the `Canvas` it is given.",
      hi: "view के बनने की सारी बातें उस `Canvas` पर दर्ज करता है जो उसे मिलता है।",
      "hi-en": "View ke banne ki saari baatein us `Canvas` par darj karta hai jo use milta hai.",
    },
    affects: {
      en: "It runs on every frame while anything animates, so allocating a `Paint`, `RectF` or string here causes garbage collection in the middle of an animation. Allocate in the constructor instead.",
      hi: "जब तक कुछ भी हिल रहा है यह हर frame पर चलता है, इसलिए यहाँ `Paint`, `RectF` या string बनाना animation के बीचोंबीच garbage collection ले आता है। उन्हें constructor में बनाइए।",
      "hi-en": "Jab tak kuch bhi hil raha hai ye har frame par chalta hai, isliye yahan `Paint`, `RectF` ya string banana animation ke beechonbeech garbage collection le aata hai. Unhe constructor mein banaiye.",
    },
    docs: "https://developer.android.com/guide/topics/ui/custom-components",
    related: ["Canvas", "Paint", "invalidate"],
  },

  invalidate: {
    term: "invalidate",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "android",
    importLine: null,
    does: {
      en: "Marks a view as needing to be drawn again within the bounds it already has.",
      hi: "view पर निशान लगाता है कि उसे उन्हीं bounds के अंदर दोबारा बनाना है जो उसके पास पहले से हैं।",
      "hi-en": "View par nishan lagata hai ki use unhin bounds ke andar dobara banana hai jo uske paas pehle se hain.",
    },
    affects: {
      en: "It never re-runs `onMeasure`, so a view that now needs more room keeps its old size and clips. When the size can change, call `requestLayout` instead.",
      hi: "यह `onMeasure` कभी दोबारा नहीं चलाता, इसलिए जिस view को अब ज्यादा जगह चाहिए वह पुराना size लिए रहती है और कट जाती है। size बदल सकता हो तो `requestLayout` बुलाइए।",
      "hi-en": "Ye `onMeasure` kabhi dobara nahi chalata, isliye jis view ko ab zyada jagah chahiye wo purana size liye rehti hai aur kat jati hai. Size badal sakta ho to `requestLayout` bulaiye.",
    },
    related: ["requestLayout", "onDraw"],
  },

  requestLayout: {
    term: "requestLayout",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "android",
    importLine: null,
    does: {
      en: "Schedules a fresh measure and layout pass for the view and its ancestors, with a draw afterwards.",
      hi: "उस view और उसके ऊपर वालों के लिए नया measure और layout pass तय करता है, और उसके बाद draw भी।",
      "hi-en": "Us view aur uske upar walon ke liye naya measure aur layout pass tay karta hai, aur uske baad draw bhi.",
    },
    affects: {
      en: "It walks the whole parent chain, so calling it for a pure colour change makes scrolling stutter. Same size means `invalidate`; new size means this.",
      hi: "यह ऊपर की पूरी कड़ी चलता है, इसलिए सिर्फ रंग बदलने पर इसे बुलाने से scrolling अटकने लगती है। size वही हो तो `invalidate`, नया हो तो यह।",
      "hi-en": "Ye upar ki poori kadi chalta hai, isliye sirf rang badalne par ise bulane se scrolling atakne lagti hai. Size wahi ho to `invalidate`, naya ho to ye.",
    },
    related: ["invalidate", "onMeasure"],
  },

  Canvas: {
    term: "Canvas",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.graphics.Canvas",
    does: {
      en: "The surface you issue drawing commands to — lines, arcs, text, bitmaps — each with a `Paint`.",
      hi: "वह सतह जिस पर आप बनाने की बातें भेजते हैं — लकीरें, arcs, text, bitmaps — हर एक किसी `Paint` के साथ।",
      "hi-en": "Wo satah jis par aap banane ki baatein bhejte hain — lakeerein, arcs, text, bitmaps — har ek kisi `Paint` ke saath.",
    },
    affects: {
      en: "With hardware acceleration your calls are recorded into a display list and replayed on the GPU, so redrawing an unchanged view is nearly free while rebuilding its display list is not.",
      hi: "hardware acceleration के साथ आपकी बातें एक display list में दर्ज होकर GPU पर दोबारा चलती हैं, इसलिए बिना बदली view को दोबारा बनाना लगभग मुफ्त है पर उसकी display list दोबारा बनाना नहीं।",
      "hi-en": "Hardware acceleration ke saath aapki baatein ek display list mein darj hokar GPU par dobara chalti hain, isliye bina badli view ko dobara banana lagbhag muft hai par uski display list dobara banana nahi.",
    },
    docs: "https://developer.android.com/reference/android/graphics/Canvas",
    related: ["onDraw", "Paint", "RectF"],
  },

  Paint: {
    term: "Paint",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.graphics.Paint",
    does: {
      en: "Holds how something is drawn: colour, stroke width, fill or stroke, cap, anti-aliasing, text size.",
      hi: "रखता है कि कोई चीज कैसे बनेगी: रंग, stroke की मोटाई, भरना या लकीर, cap, anti-aliasing, text का size।",
      "hi-en": "Rakhta hai ki koi cheez kaise banegi: rang, stroke ki motai, bharna ya lakeer, cap, anti-aliasing, text ka size.",
    },
    affects: {
      en: "A stroke is centred on the path, so half of its width falls outside your bounds and is clipped unless you inset by `strokeWidth / 2`. Creating one in `onDraw` is the classic jank bug.",
      hi: "stroke लकीर के बीचोंबीच खिंचता है, तो उसकी आधी मोटाई आपके bounds के बाहर पड़कर कट जाती है, जब तक आप `strokeWidth / 2` जितना अंदर न करें। इसे `onDraw` में बनाना अटकन वाला सबसे जाना-पहचाना bug है।",
      "hi-en": "Stroke lakeer ke beechonbeech khinchta hai, to uski aadhi motai aapke bounds ke bahar padkar kat jati hai, jab tak aap `strokeWidth / 2` jitna andar na karein. Ise `onDraw` mein banana atkan wala sabse jana-pehchana bug hai.",
    },
    docs: "https://developer.android.com/reference/android/graphics/Paint",
    related: ["Canvas", "onDraw", "RectF"],
  },

  RectF: {
    term: "RectF",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.graphics.RectF",
    does: {
      en: "A rectangle with float edges, used to give `Canvas` the area to draw an arc, oval or rounded shape in.",
      hi: "float किनारों वाला एक आयत, जिससे `Canvas` को वह जगह बताई जाती है जहाँ arc, अंडाकार या गोल कोनों वाली shape बननी है।",
      "hi-en": "Float kinaron wala ek aayat, jisse `Canvas` ko wo jagah batai jati hai jahan arc, andakar ya gol kono wali shape banni hai.",
    },
    affects: {
      en: "It is mutable on purpose — keep one field and call `set` in `onSizeChanged` rather than building a new one on every frame.",
      hi: "यह जानबूझकर बदला जा सकने वाला है — एक ही field रखिए और `onSizeChanged` में `set` बुलाइए, हर frame पर नया बनाने के बजाय।",
      "hi-en": "Ye jaanbujhkar badla ja sakne wala hai — ek hi field rakhiye aur `onSizeChanged` mein `set` bulaiye, har frame par naya banane ke bajaye.",
    },
    related: ["Canvas", "onSizeChanged", "Paint"],
  },

  AttributeSet: {
    term: "AttributeSet",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "android",
    importLine: "import android.util.AttributeSet",
    does: {
      en: "Carries the raw attributes written on a view's XML tag into its constructor.",
      hi: "view के XML tag पर लिखे कच्चे attributes उसके constructor तक पहुँचाता है।",
      "hi-en": "View ke XML tag par likhe kachche attributes uske constructor tak pahunchata hai.",
    },
    affects: {
      en: "It is `null` when the view is created from code, which is why the parameter is nullable and why the constructor is usually written with `@JvmOverloads`.",
      hi: "जब view code से बनती है तो यह `null` होता है, इसीलिए parameter nullable है और इसीलिए constructor आमतौर पर `@JvmOverloads` के साथ लिखा जाता है।",
      "hi-en": "Jab view code se banti hai to ye `null` hota hai, isiliye parameter nullable hai aur isiliye constructor aam taur par `@JvmOverloads` ke saath likha jata hai.",
    },
    related: ["withStyledAttributes", "View"],
  },

  withStyledAttributes: {
    term: "withStyledAttributes",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "jetpack",
    importLine: "import androidx.core.content.withStyledAttributes",
    does: {
      en: "Reads your `declare-styleable` attributes out of an `AttributeSet` and recycles the `TypedArray` afterwards.",
      hi: "आपके `declare-styleable` वाले attributes `AttributeSet` से पढ़ता है और बाद में `TypedArray` recycle कर देता है।",
      "hi-en": "Aapke `declare-styleable` wale attributes `AttributeSet` se padhta hai aur baad mein `TypedArray` recycle kar deta hai.",
    },
    affects: {
      en: "Doing the same by hand and forgetting `recycle()` leaks a shared buffer, which is why the `core-ktx` wrapper exists at all.",
      hi: "यही काम हाथ से करके `recycle()` भूल जाना एक साझा buffer leak कर देता है — `core-ktx` का यह लपेटा इसीलिए है।",
      "hi-en": "Yahi kaam haath se karke `recycle()` bhool jana ek shared buffer leak kar deta hai — `core-ktx` ka ye lapeta isiliye hai.",
    },
    related: ["AttributeSet", "View"],
  },

  onRestoreInstanceState: {
    term: "onRestoreInstanceState",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "android",
    importLine: null,
    does: {
      en: "Hands back the `Parcelable` a view or activity saved earlier, so it can put its state back.",
      hi: "पहले सँभाला गया `Parcelable` वापस देता है, ताकि view या activity अपना state दोबारा रख सके।",
      "hi-en": "Pehle sambhala gaya `Parcelable` wapas deta hai, taki view ya activity apna state dobara rakh sake.",
    },
    affects: {
      en: "For a custom view it only runs when the view has an `android:id` in the layout, so a missing id silently loses state on every rotation.",
      hi: "custom view के लिए यह तभी चलता है जब layout में उस view की `android:id` हो, तो id न होने पर हर rotation पर state चुपचाप खो जाता है।",
      "hi-en": "Custom view ke liye ye tabhi chalta hai jab layout mein us view ki `android:id` ho, to id na hone par har rotation par state chupchap kho jata hai.",
    },
    related: ["onSaveInstanceState", "Bundle"],
  },

  RecyclerView: {
    term: "RecyclerView",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.recyclerview.widget.RecyclerView",
    does: {
      en: "Shows a long list using only as many row views as fit on screen, reusing each one as it scrolls off.",
      hi: "लंबी list सिर्फ उतनी row views से दिखाता है जितनी screen पर आती हैं, और हर एक को बाहर निकलते ही दोबारा इस्तेमाल कर लेता है।",
      "hi-en": "Lambi list sirf utni row views se dikhata hai jitni screen par aati hain, aur har ek ko bahar nikalte hi dobara istemal kar leta hai.",
    },
    affects: {
      en: "Because views are reused, `onBindViewHolder` must set every field it can ever set. Any property set only inside an `if` keeps its value from the previous row and shows up on the wrong item.",
      hi: "views दोबारा इस्तेमाल होती हैं, इसलिए `onBindViewHolder` को हर वह field तय करनी है जिसे वह कभी भी तय कर सकता है। जो चीज सिर्फ किसी `if` के अंदर तय होती है वह पिछली row वाली value लिए रहती है और गलत item पर दिख जाती है।",
      "hi-en": "Views dobara istemal hoti hain, isliye `onBindViewHolder` ko har wo field tay karni hai jise wo kabhi bhi tay kar sakta hai. Jo cheez sirf kisi `if` ke andar tay hoti hai wo pichhli row wali value liye rehti hai aur galat item par dikh jati hai.",
    },
    docs: "https://developer.android.com/develop/ui/views/layout/recyclerview",
    related: ["ViewHolder", "ListAdapter", "onBindViewHolder"],
  },

  ViewHolder: {
    term: "ViewHolder",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.recyclerview.widget.RecyclerView",
    does: {
      en: "Holds one row's inflated views so the list can rebind them instead of finding them again.",
      hi: "एक row की inflate हुई views रखता है, ताकि list उन्हें दोबारा ढूँढ़ने के बजाय दोबारा bind कर सके।",
      "hi-en": "Ek row ki inflate hui views rakhta hai, taki list unhe dobara dhundhne ke bajaye dobara bind kar sake.",
    },
    affects: {
      en: "It is the same object across many different items, so anything you store in it is per-slot, not per-item — a coroutine or listener started here must be cancelled when the holder is rebound.",
      hi: "यही एक चीज कई अलग items के लिए चलती है, इसलिए इसमें रखा कुछ भी हर slot का है, हर item का नहीं — यहाँ शुरू किया गया coroutine या listener holder के दोबारा bind होते ही रोकना पड़ता है।",
      "hi-en": "Yahi ek cheez kai alag items ke liye chalti hai, isliye ismein rakha kuch bhi har slot ka hai, har item ka nahi — yahan shuru kiya gaya coroutine ya listener holder ke dobara bind hote hi rokna padta hai.",
    },
    related: ["RecyclerView", "onCreateViewHolder", "onBindViewHolder"],
  },

  onCreateViewHolder: {
    term: "onCreateViewHolder",
    kind: { en: "Adapter callback", hi: "Adapter callback", "hi-en": "Adapter callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Inflates one row layout and wraps it in a `ViewHolder`. Called only when the pool has no spare holder.",
      hi: "एक row का layout inflate करके उसे `ViewHolder` में लपेटता है। तभी बुलाया जाता है जब pool में कोई खाली holder न हो।",
      "hi-en": "Ek row ka layout inflate karke use `ViewHolder` mein lapetta hai. Tabhi bulaya jata hai jab pool mein koi khaali holder na ho.",
    },
    affects: {
      en: "It runs a handful of times for a list of thousands, so this is where one-time setup belongs — including click listeners, which cost nothing here and cost every scroll in `onBindViewHolder`.",
      hi: "हजारों की list के लिए यह गिनी-चुनी बार चलता है, इसलिए एक-बार वाला काम यहीं का है — click listeners समेत, जो यहाँ मुफ्त हैं और `onBindViewHolder` में हर scroll पर कीमत माँगते हैं।",
      "hi-en": "Hazaron ki list ke liye ye gini-chuni baar chalta hai, isliye ek-baar wala kaam yahin ka hai — click listeners samet, jo yahan muft hain aur `onBindViewHolder` mein har scroll par keemat maangte hain.",
    },
    related: ["ViewHolder", "LayoutInflater", "onBindViewHolder"],
  },

  onBindViewHolder: {
    term: "onBindViewHolder",
    kind: { en: "Adapter callback", hi: "Adapter callback", "hi-en": "Adapter callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Puts the data for one position into an existing `ViewHolder`.",
      hi: "किसी एक position का data पहले से मौजूद `ViewHolder` में भरता है।",
      "hi-en": "Kisi ek position ka data pehle se maujood `ViewHolder` mein bharta hai.",
    },
    affects: {
      en: "It runs on every scroll, for every visible row, so it must stay allocation-free and must set every field unconditionally — no `if` without an `else`.",
      hi: "यह हर scroll पर, हर दिखती row के लिए चलता है, इसलिए इसमें कुछ नया बनना नहीं चाहिए और हर field बिना शर्त तय होनी चाहिए — कोई `if` बिना `else` के नहीं।",
      "hi-en": "Ye har scroll par, har dikhti row ke liye chalta hai, isliye ismein kuch naya banna nahi chahiye aur har field bina shart tay honi chahiye — koi `if` bina `else` ke nahi.",
    },
    related: ["RecyclerView", "ViewHolder", "onCreateViewHolder"],
  },

  ListAdapter: {
    term: "ListAdapter",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.recyclerview.widget.ListAdapter",
    does: {
      en: "A `RecyclerView` adapter that takes whole lists through `submitList` and works out the changes itself.",
      hi: "ऐसा `RecyclerView` adapter जो `submitList` से पूरी list लेता है और बदलाव खुद निकाल लेता है।",
      "hi-en": "Aisa `RecyclerView` adapter jo `submitList` se poori list leta hai aur badlaav khud nikal leta hai.",
    },
    affects: {
      en: "It runs the diff on a background thread and animates only the rows that changed, which replaces `notifyDataSetChanged` and the whole family of manual `notifyItem*` calls.",
      hi: "यह diff background thread पर चलाता है और सिर्फ बदली हुई rows को animate करता है, जिससे `notifyDataSetChanged` और हाथ से लिखे सारे `notifyItem*` की जरूरत ही नहीं रहती।",
      "hi-en": "Ye diff background thread par chalata hai aur sirf badli hui rows ko animate karta hai, jisse `notifyDataSetChanged` aur haath se likhe saare `notifyItem*` ki zarurat hi nahi rehti.",
    },
    docs: "https://developer.android.com/reference/androidx/recyclerview/widget/ListAdapter",
    related: ["DiffUtil", "submitList", "RecyclerView"],
  },

  DiffUtil: {
    term: "DiffUtil",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.recyclerview.widget.DiffUtil",
    does: {
      en: "Compares an old list with a new one and reports the minimal set of inserts, removals and changes.",
      hi: "पुरानी list की नई से तुलना करके सबसे कम insert, remove और change बताता है।",
      "hi-en": "Purani list ko nai se compare karke sabse kam insert, remove aur change batata hai.",
    },
    values: {
      en: "`areItemsTheSame` asks about identity — usually the id. `areContentsTheSame` asks about the visible content — usually `==` on a data class.",
      hi: "`areItemsTheSame` पहचान पूछता है — आमतौर पर id। `areContentsTheSame` दिखने वाला content पूछता है — आमतौर पर किसी data class पर `==`।",
      "hi-en": "`areItemsTheSame` pehchan puchta hai — aam taur par id. `areContentsTheSame` dikhne wala content puchta hai — aam taur par kisi data class par `==`.",
    },
    affects: {
      en: "Getting the two callbacks the wrong way round is why lists animate strangely: identity by content makes every edit look like a delete plus an insert.",
      hi: "इन दो callbacks को आपस में उलट देना ही वजह है कि lists अजीब तरह से animate करती हैं: पहचान content से करेंगे तो हर बदलाव एक delete और एक insert जैसा दिखेगा।",
      "hi-en": "In do callbacks ko aapas mein ulat dena hi wajah hai ki lists ajeeb tarah se animate karti hain: pehchan content se karenge to har badlaav ek delete aur ek insert jaisa dikhega.",
    },
    docs: "https://developer.android.com/reference/androidx/recyclerview/widget/DiffUtil",
    related: ["ListAdapter", "submitList"],
  },

  submitList: {
    term: "submitList",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Hands a new list to a `ListAdapter`, which diffs it against the current one and updates the rows.",
      hi: "`ListAdapter` को नई list देता है, जो उसकी मौजूदा से diff निकालकर rows बदल देता है।",
      "hi-en": "`ListAdapter` ko nai list deta hai, jo uski maujooda se diff nikalkar rows badal deta hai.",
    },
    affects: {
      en: "It must be a different list instance. Mutating the list you already submitted and calling it again does nothing, because the adapter compares references first and sees the same object.",
      hi: "list का instance अलग होना चाहिए। जो list आप पहले दे चुके हैं उसी को बदलकर दोबारा देने से कुछ नहीं होता, क्योंकि adapter पहले reference मिलाता है और वही चीज देखता है।",
      "hi-en": "List ka instance alag hona chahiye. Jo list aap pehle de chuke hain usi ko badalkar dobara dene se kuch nahi hota, kyunki adapter pehle reference milata hai aur wahi cheez dekhta hai.",
    },
    related: ["ListAdapter", "DiffUtil"],
  },

  notifyDataSetChanged: {
    term: "notifyDataSetChanged",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Tells a `RecyclerView` that everything may have changed, so it rebinds every visible row.",
      hi: "`RecyclerView` से कहता है कि सब कुछ बदला हो सकता है, तो वह हर दिखती row दोबारा bind करता है।",
      "hi-en": "`RecyclerView` se kehta hai ki sab kuch badla ho sakta hai, to wo har dikhti row dobara bind karta hai.",
    },
    affects: {
      en: "It throws away every item animation and rebinds rows that did not change, which shows up as a flicker on every update. `ListAdapter` with `DiffUtil` is the replacement.",
      hi: "यह हर item animation फेंक देता है और उन rows को भी दोबारा bind करता है जो बदली ही नहीं, जो हर update पर झिलमिलाहट बनकर दिखता है। इसकी जगह `DiffUtil` वाला `ListAdapter` है।",
      "hi-en": "Ye har item animation phenk deta hai aur un rows ko bhi dobara bind karta hai jo badli hi nahi, jo har update par jhilmilahat bankar dikhta hai. Iski jagah `DiffUtil` wala `ListAdapter` hai.",
    },
    related: ["ListAdapter", "DiffUtil", "submitList"],
  },

  LinearLayoutManager: {
    term: "LinearLayoutManager",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.recyclerview.widget.LinearLayoutManager",
    does: {
      en: "Tells a `RecyclerView` to arrange its rows in one straight line, vertically or horizontally.",
      hi: "`RecyclerView` से कहता है कि rows को एक सीधी लकीर में लगाए, खड़े या आड़े।",
      "hi-en": "`RecyclerView` se kehta hai ki rows ko ek seedhi lakeer mein lagaye, khade ya aade.",
    },
    affects: {
      en: "Without a layout manager a `RecyclerView` renders nothing at all and logs `No layout manager attached` — it is not an optional detail.",
      hi: "layout manager के बिना `RecyclerView` कुछ भी नहीं दिखाता और `No layout manager attached` log करता है — यह कोई वैकल्पिक बात नहीं है।",
      "hi-en": "Layout manager ke bina `RecyclerView` kuch bhi nahi dikhata aur `No layout manager attached` log karta hai — ye koi optional baat nahi hai.",
    },
    related: ["RecyclerView", "ListAdapter"],
  },

  Dialog: {
    term: "Dialog",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.app.Dialog",
    does: {
      en: "A small window drawn above the current screen, attached to the token of the activity that showed it.",
      hi: "मौजूदा screen के ऊपर बनी एक छोटी window, जो उसे दिखाने वाली activity के token से जुड़ी होती है।",
      "hi-en": "Maujooda screen ke upar bani ek chhoti window, jo use dikhane wali activity ke token se judi hoti hai.",
    },
    affects: {
      en: "Because it is a window, showing one from a destroyed activity throws `WindowManager$BadTokenException`, and it survives no configuration change on its own. `DialogFragment` exists to own that lifetime for you.",
      hi: "यह एक window है, इसलिए खत्म हो चुकी activity से दिखाने पर `WindowManager$BadTokenException` आता है, और अपने बल पर यह कोई configuration बदलाव नहीं झेलता। उम्र का यही जिम्मा उठाने के लिए `DialogFragment` है।",
      "hi-en": "Ye ek window hai, isliye khatam ho chuki activity se dikhane par `WindowManager$BadTokenException` aata hai, aur apne bal par ye koi configuration badlaav nahi jhelta. Umar ka yahi zimma uthane ke liye `DialogFragment` hai.",
    },
    docs: "https://developer.android.com/develop/ui/views/components/dialogs",
    related: ["DialogFragment", "MaterialAlertDialogBuilder", "Activity"],
  },

  DialogFragment: {
    term: "DialogFragment",
    kind: { en: "AndroidX class", hi: "AndroidX class", "hi-en": "AndroidX class" },
    source: "jetpack",
    importLine: "import androidx.fragment.app.DialogFragment",
    does: {
      en: "A `Fragment` whose container is a dialog window, so the fragment manager owns when it appears and disappears.",
      hi: "ऐसा `Fragment` जिसका डिब्बा एक dialog window है, तो वह कब दिखेगा और कब जाएगा यह fragment manager तय करता है।",
      "hi-en": "Aisa `Fragment` jiska dibba ek dialog window hai, to wo kab dikhega aur kab jayega ye fragment manager tay karta hai.",
    },
    affects: {
      en: "It is recreated against the new activity after a rotation, so a dialog no longer vanishes and a late callback no longer crashes. Send answers back with a fragment result, not a captured listener.",
      hi: "rotation के बाद इसे नई activity के साथ दोबारा बना दिया जाता है, तो न dialog गायब होता है और न देर से आया callback crash करता है। जवाब fragment result से लौटाइए, पकड़े हुए listener से नहीं।",
      "hi-en": "Rotation ke baad ise nai activity ke saath dobara bana diya jata hai, to na dialog gayab hota hai aur na der se aaya callback crash karta hai. Jawab fragment result se lautaiye, pakde hue listener se nahi.",
    },
    docs: "https://developer.android.com/develop/ui/views/components/dialogs#DialogFragment",
    related: ["Dialog", "onCreateDialog", "setFragmentResult"],
  },

  onCreateDialog: {
    term: "onCreateDialog",
    kind: { en: "Lifecycle callback", hi: "Lifecycle callback", "hi-en": "Lifecycle callback" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Builds the `Dialog` a `DialogFragment` shows, and is called again after every configuration change.",
      hi: "`DialogFragment` जो `Dialog` दिखाता है वह यहाँ बनता है, और हर configuration बदलाव के बाद यह दोबारा बुलाया जाता है।",
      "hi-en": "`DialogFragment` jo `Dialog` dikhata hai wo yahan banta hai, aur har configuration badlaav ke baad ye dobara bulaya jata hai.",
    },
    affects: {
      en: "Anything captured in a button lambda here is captured again on recreation, so state must come from arguments or a `ViewModel`, never from a field set before `show`.",
      hi: "यहाँ किसी button वाले lambda में पकड़ी गई चीज दोबारा बनने पर फिर से पकड़ी जाती है, इसलिए state arguments या `ViewModel` से आना चाहिए, `show` से पहले भरी गई किसी field से कभी नहीं।",
      "hi-en": "Yahan kisi button wale lambda mein pakdi gayi cheez dobara banne par phir se pakdi jati hai, isliye state arguments ya `ViewModel` se aana chahiye, `show` se pehle bhari gayi kisi field se kabhi nahi.",
    },
    related: ["DialogFragment", "MaterialAlertDialogBuilder"],
  },

  MaterialAlertDialogBuilder: {
    term: "MaterialAlertDialogBuilder",
    kind: { en: "Library class", hi: "Library class", "hi-en": "Library class" },
    source: "library",
    importLine: "import com.google.android.material.dialog.MaterialAlertDialogBuilder",
    does: {
      en: "Builds an alert dialog with Material 3 shape, colour and typography taken from your theme.",
      hi: "आपकी theme से shape, रंग और typography लेकर Material 3 वाला alert dialog बनाता है।",
      "hi-en": "Aapki theme se shape, rang aur typography lekar Material 3 wala alert dialog banata hai.",
    },
    affects: {
      en: "It needs a themed context, so pass `requireContext()` rather than `applicationContext` — the application context has no theme and the dialog comes out unstyled or throws.",
      hi: "इसे theme वाला context चाहिए, इसलिए `applicationContext` के बजाय `requireContext()` दीजिए — application context के पास theme होती ही नहीं और dialog बेढंगा निकलता है या फेंक देता है।",
      "hi-en": "Ise theme wala context chahiye, isliye `applicationContext` ke bajaye `requireContext()` dijiye — application context ke paas theme hoti hi nahi aur dialog bedhanga nikalta hai ya phenk deta hai.",
    },
    related: ["Dialog", "onCreateDialog", "Context"],
  },

  BottomSheetDialogFragment: {
    term: "BottomSheetDialogFragment",
    kind: { en: "Library class", hi: "Library class", "hi-en": "Library class" },
    source: "library",
    importLine: "import com.google.android.material.bottomsheet.BottomSheetDialogFragment",
    does: {
      en: "A `DialogFragment` whose window holds a draggable sheet that slides up from the bottom.",
      hi: "ऐसा `DialogFragment` जिसकी window में नीचे से ऊपर सरकने वाली, खींची जा सकने वाली sheet होती है।",
      "hi-en": "Aisa `DialogFragment` jiski window mein neeche se upar sarakne wali, kheenchi ja sakne wali sheet hoti hai.",
    },
    affects: {
      en: "The dragging, the collapsed and expanded states and the peek height all come from `BottomSheetBehavior`, so those are configured on the behaviour and not on your layout.",
      hi: "खींचना, सिकुड़ी और फैली हालतें और peek height सब `BottomSheetBehavior` से आते हैं, तो वे behaviour पर तय होते हैं, आपके layout पर नहीं।",
      "hi-en": "Kheenchna, sikudi aur phaili haalatein aur peek height sab `BottomSheetBehavior` se aate hain, to wo behaviour par tay hote hain, aapke layout par nahi.",
    },
    related: ["DialogFragment", "Dialog"],
  },

  Snackbar: {
    term: "Snackbar",
    kind: { en: "Library class", hi: "Library class", "hi-en": "Library class" },
    source: "library",
    importLine: "import com.google.android.material.snackbar.Snackbar",
    does: {
      en: "Shows a brief message at the bottom of your own layout, optionally with one action such as Undo.",
      hi: "आपके अपने layout में नीचे एक छोटा संदेश दिखाता है, चाहें तो एक काम के साथ, जैसे Undo।",
      "hi-en": "Aapke apne layout mein neeche ek chhota message dikhata hai, chahein to ek action ke saath, jaise Undo.",
    },
    affects: {
      en: "It needs a view from the current hierarchy to anchor into, which is also what lets a `FloatingActionButton` move aside for it. Give it a destroyed fragment's view and it never appears.",
      hi: "इसे टिकने के लिए अभी की hierarchy की कोई view चाहिए, और इसी वजह से `FloatingActionButton` इसके लिए खिसक जाता है। खत्म हो चुके fragment की view देंगे तो यह दिखेगा ही नहीं।",
      "hi-en": "Ise tikne ke liye abhi ki hierarchy ki koi view chahiye, aur isi wajah se `FloatingActionButton` iske liye khisak jata hai. Khatam ho chuke fragment ki view denge to ye dikhega hi nahi.",
    },
    docs: "https://developer.android.com/develop/ui/views/notifications/snackbar",
    related: ["Toast", "View"],
  },

  Toast: {
    term: "Toast",
    kind: { en: "Android class", hi: "Android class", "hi-en": "Android class" },
    source: "android",
    importLine: "import android.widget.Toast",
    does: {
      en: "Shows a short system message that floats above every app and fades away on its own.",
      hi: "एक छोटा system संदेश दिखाता है जो हर app के ऊपर तैरता है और अपने आप मिट जाता है।",
      "hi-en": "Ek chhota system message dikhata hai jo har app ke upar tairta hai aur apne aap mit jata hai.",
    },
    affects: {
      en: "It carries no action, cannot be dismissed, and from Android 12 is heavily restricted from the background. Inside your own app a `Snackbar` is almost always the right choice.",
      hi: "इसमें कोई काम नहीं रखा जा सकता, इसे हटाया नहीं जा सकता, और Android 12 से background से इस पर कड़ी रोक है। अपनी app के अंदर लगभग हमेशा `Snackbar` ही सही चुनाव है।",
      "hi-en": "Ismein koi action nahi rakha ja sakta, ise hataya nahi ja sakta, aur Android 12 se background se is par kadi rok hai. Apni app ke andar lagbhag hamesha `Snackbar` hi sahi choice hai.",
    },
    related: ["Snackbar"],
  },

  setFragmentResult: {
    term: "setFragmentResult",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "jetpack",
    importLine: "import androidx.fragment.app.setFragmentResult",
    does: {
      en: "Posts a `Bundle` under a key to the fragment manager, for another fragment to pick up.",
      hi: "किसी key के नीचे एक `Bundle` fragment manager को देता है, ताकि दूसरा fragment उसे उठा सके।",
      "hi-en": "Kisi key ke neeche ek `Bundle` fragment manager ko deta hai, taki doosra fragment use utha sake.",
    },
    affects: {
      en: "The answer goes to whichever instance is alive when it is delivered, which is why this survives a rotation and a listener you handed over does not.",
      hi: "जवाब उस instance तक जाता है जो पहुँचाने के वक्त जिंदा है, इसीलिए यह rotation झेल जाता है और आपका थमाया हुआ listener नहीं।",
      "hi-en": "Jawab us instance tak jata hai jo pahunchane ke waqt zinda hai, isiliye ye rotation jhel jata hai aur aapka thamaya hua listener nahi.",
    },
    docs: "https://developer.android.com/guide/fragments/communicate",
    related: ["setFragmentResultListener", "DialogFragment", "bundleOf"],
  },

  setFragmentResultListener: {
    term: "setFragmentResultListener",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "jetpack",
    importLine: "import androidx.fragment.app.setFragmentResultListener",
    does: {
      en: "Registers for results posted under a key, and delivers them while the fragment is at least `STARTED`.",
      hi: "किसी key के नीचे भेजे गए results के लिए दर्ज करता है, और उन्हें तब पहुँचाता है जब fragment कम से कम `STARTED` हो।",
      "hi-en": "Kisi key ke neeche bheje gaye results ke liye darj karta hai, aur unhe tab pahunchata hai jab fragment kam se kam `STARTED` ho.",
    },
    affects: {
      en: "A result sent while the listener's fragment is stopped is held and delivered when it starts again, so nothing is lost across a rotation and nothing arrives at a dead view.",
      hi: "जिस वक्त listener वाला fragment रुका हुआ है उस वक्त भेजा गया result रोक लिया जाता है और उसके दोबारा शुरू होने पर पहुँचाया जाता है, तो rotation में कुछ खोता भी नहीं और मरी हुई view तक कुछ पहुँचता भी नहीं।",
      "hi-en": "Jis waqt listener wala fragment ruka hua hai us waqt bheja gaya result rok liya jata hai aur uske dobara shuru hone par pahunchaya jata hai, to rotation mein kuch khota bhi nahi aur mari hui view tak kuch pahunchta bhi nahi.",
    },
    related: ["setFragmentResult", "Fragment", "viewLifecycleOwner"],
  },

  childFragmentManager: {
    term: "childFragmentManager",
    kind: { en: "Property", hi: "Property", "hi-en": "Property" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "The fragment manager that owns fragments nested inside this fragment.",
      hi: "वह fragment manager जो इस fragment के अंदर वाले fragments सँभालता है।",
      "hi-en": "Wo fragment manager jo is fragment ke andar wale fragments sambhalta hai.",
    },
    affects: {
      en: "Its fragments are destroyed with this fragment's view, while `parentFragmentManager` outlives it. Using the wrong one is why a nested dialog sometimes reappears on a screen that has moved on.",
      hi: "इसके fragments इस fragment की view के साथ खत्म होते हैं, जबकि `parentFragmentManager` उससे ज्यादा जीता है। गलत वाला इस्तेमाल करना ही वजह है कि अंदर वाला dialog कभी-कभी आगे बढ़ चुकी screen पर दोबारा आ जाता है।",
      "hi-en": "Iske fragments is fragment ki view ke saath khatam hote hain, jabki `parentFragmentManager` usse zyada jeeta hai. Galat wala istemal karna hi wajah hai ki andar wala dialog kabhi-kabhi aage badh chuki screen par dobara aa jata hai.",
    },
    related: ["supportFragmentManager", "Fragment", "DialogFragment"],
  },

  MenuProvider: {
    term: "MenuProvider",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "jetpack",
    importLine: "import androidx.core.view.MenuProvider",
    does: {
      en: "Supplies the menu items for a screen and handles taps on them.",
      hi: "किसी screen के menu items देता है और उन पर tap सँभालता है।",
      "hi-en": "Kisi screen ke menu items deta hai aur un par tap sambhalta hai.",
    },
    affects: {
      en: "It replaces the deprecated `onCreateOptionsMenu` on `Activity` and `Fragment`, because attaching the menu to a lifecycle owner makes it impossible for a hidden screen's items to stay in the toolbar.",
      hi: "यह `Activity` और `Fragment` वाले deprecated `onCreateOptionsMenu` की जगह लेता है, क्योंकि menu को lifecycle owner से जोड़ देने पर छिपी हुई screen के items toolbar में रह ही नहीं सकते।",
      "hi-en": "Ye `Activity` aur `Fragment` wale deprecated `onCreateOptionsMenu` ki jagah leta hai, kyunki menu ko lifecycle owner se jod dene par chhipi hui screen ke items toolbar mein reh hi nahi sakte.",
    },
    docs: "https://developer.android.com/reference/androidx/core/view/MenuProvider",
    related: ["addMenuProvider", "viewLifecycleOwner"],
  },

  addMenuProvider: {
    term: "addMenuProvider",
    kind: { en: "Method", hi: "Method", "hi-en": "Method" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Attaches a `MenuProvider`, optionally tied to a lifecycle owner and a minimum state.",
      hi: "एक `MenuProvider` जोड़ता है, चाहें तो किसी lifecycle owner और कम से कम किसी हालत से बाँधकर।",
      "hi-en": "Ek `MenuProvider` jodta hai, chahein to kisi lifecycle owner aur kam se kam kisi haalat se bandhkar.",
    },
    affects: {
      en: "Passing `viewLifecycleOwner` removes the provider automatically when the view is destroyed. Leaving it out means the menu items linger over the next screen until you remove them yourself.",
      hi: "`viewLifecycleOwner` देने पर view खत्म होते ही provider अपने आप हट जाता है। न देने पर menu items अगली screen पर तब तक मँडराते रहते हैं जब तक आप उन्हें खुद न हटाएँ।",
      "hi-en": "`viewLifecycleOwner` dene par view khatam hote hi provider apne aap hat jata hai. Na dene par menu items agli screen par tab tak mandrate rehte hain jab tak aap unhe khud na hataayein.",
    },
    related: ["MenuProvider", "viewLifecycleOwner"],
  },
};
