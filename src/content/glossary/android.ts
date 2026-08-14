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
};
