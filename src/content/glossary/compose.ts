import type { Glossary } from "./types";

/**
 * Jetpack Compose.
 *
 * Kept apart from `android.ts` because the surface is large enough to stand on
 * its own, and because almost every entry here answers the same question in a
 * different place: when does this run, and what happens if it runs again?
 *
 * A few Compose names collide with framework ones — `Canvas` is both
 * `android.graphics.Canvas` and a composable. Where that happens the framework
 * entry stays and the Compose meaning is explained in a neighbouring term.
 */
export const COMPOSE_GLOSSARY: Glossary = {
  rememberSaveable: {
    term: "rememberSaveable",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.saveable.rememberSaveable",
    does: {
      en: "Remembers a value across recompositions and also across configuration changes and process death.",
      hi: "किसी value को recompositions के आर-पार याद रखता है, और configuration बदलने तथा process मरने पर भी।",
      "hi-en": "Kisi value ko recompositions ke aar-paar yaad rakhta hai, aur configuration badalne tatha process marne par bhi.",
    },
    affects: {
      en: "It writes into the same size-limited `Bundle` as `onSaveInstanceState`, so it is for ids, field text, flags and scroll positions. Anything larger belongs in a `ViewModel` with a `SavedStateHandle`.",
      hi: "यह उसी नाप की हद वाले `Bundle` में लिखता है जिसमें `onSaveInstanceState`, इसलिए यह ids, field के text, झंडों और scroll की जगह के लिए है। उससे बड़ी चीज `SavedStateHandle` वाले `ViewModel` की है।",
      "hi-en": "Ye usi naap ki had wale `Bundle` mein likhta hai jismein `onSaveInstanceState`, isliye ye ids, field ke text, flags aur scroll ki jagah ke liye hai. Usse badi cheez `SavedStateHandle` wale `ViewModel` ki hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/state#restore-ui-state",
    related: ["remember", "mutableStateOf", "SavedStateHandle"],
  },

  mutableStateListOf: {
    term: "mutableStateListOf",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.mutableStateListOf",
    does: {
      en: "Creates a list whose additions, removals and replacements are observable by the composition.",
      hi: "ऐसी list बनाता है जिसमें जोड़ना, हटाना और बदलना composition को दिखता है।",
      "hi-en": "Aisi list banata hai jismein jodna, hatana aur badalna composition ko dikhta hai.",
    },
    affects: {
      en: "Mutating a plain `mutableListOf` inside `remember` recomposes nothing, because no `State` was written. This is the fix, and replacing the whole value with a new list is the other one.",
      hi: "`remember` के अंदर सादी `mutableListOf` बदलने से कुछ recompose नहीं होता, क्योंकि किसी `State` में लिखा ही नहीं गया। यह उसका इलाज है, और पूरी value की जगह नई list रख देना दूसरा।",
      "hi-en": "`remember` ke andar saadi `mutableListOf` badalne se kuch recompose nahi hota, kyunki kisi `State` mein likha hi nahi gaya. Ye uska ilaaj hai, aur poori value ki jagah nai list rakh dena doosra.",
    },
    related: ["remember", "mutableStateOf"],
  },

  derivedStateOf: {
    term: "derivedStateOf",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.derivedStateOf",
    does: {
      en: "Computes a value from other state, and notifies its readers only when the computed result changes.",
      hi: "दूसरी state से एक value निकालता है, और पढ़ने वालों को सिर्फ तब खबर करता है जब निकला हुआ जवाब बदले।",
      "hi-en": "Doosri state se ek value nikalta hai, aur padhne walon ko sirf tab khabar karta hai jab nikla hua jawab badle.",
    },
    affects: {
      en: "It must sit inside a `remember`, or a fresh derived state is created every recomposition with nothing to compare against — all of the cost and none of the benefit. It is for inputs that change far more often than the result, such as a scroll position driving a boolean.",
      hi: "यह किसी `remember` के अंदर होना चाहिए, वरना हर recomposition पर नया derived state बनता है जिसके पास मिलाने को कुछ नहीं होता — कीमत पूरी, फायदा कुछ नहीं। यह उन inputs के लिए है जो जवाब से कहीं ज्यादा बार बदलते हैं, जैसे scroll की जगह से चलता कोई boolean।",
      "hi-en": "Ye kisi `remember` ke andar hona chahiye, warna har recomposition par naya derived state banta hai jiske paas milane ko kuch nahi hota — keemat poori, faayda kuch nahi. Ye un inputs ke liye hai jo jawab se kahin zyada baar badalte hain, jaise scroll ki jagah se chalta koi boolean.",
    },
    docs: "https://developer.android.com/develop/ui/compose/side-effects#derivedstateof",
    related: ["remember", "rememberLazyListState", "snapshotFlow"],
  },

  DisposableEffect: {
    term: "DisposableEffect",
    kind: { en: "Effect API", hi: "Effect API", "hi-en": "Effect API" },
    source: "compose",
    importLine: "import androidx.compose.runtime.DisposableEffect",
    does: {
      en: "Runs setup when a composable enters the composition or a key changes, and mandatory cleanup when it leaves.",
      hi: "Composable के composition में आने पर या key बदलने पर तैयारी चलाता है, और उसके जाने पर जरूरी सफाई।",
      "hi-en": "Composable ke composition mein aane par ya key badalne par taiyari chalata hai, aur uske jane par zaruri safai.",
    },
    affects: {
      en: "The block must end in `onDispose`, and the compiler enforces it — which is the API making a listener leak impossible rather than merely discouraged. Use it where `LaunchedEffect` cannot, because the thing is not a coroutine.",
      hi: "उस block का अंत `onDispose` पर होना ही चाहिए, और compiler इसे मनवाता है — यानी API listener के leak को हतोत्साहित नहीं, नामुमकिन बनाती है। इसे वहाँ लीजिए जहाँ `LaunchedEffect` काम नहीं आता, क्योंकि वह चीज coroutine नहीं है।",
      "hi-en": "Us block ka ant `onDispose` par hona hi chahiye, aur compiler ise manwata hai — yani API listener ke leak ko hatotsahit nahi, namumkin banati hai. Ise wahan lijiye jahan `LaunchedEffect` kaam nahi aata, kyunki wo cheez coroutine nahi hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/side-effects#disposableeffect",
    related: ["LaunchedEffect", "SideEffect"],
  },

  SideEffect: {
    term: "SideEffect",
    kind: { en: "Effect API", hi: "Effect API", "hi-en": "Effect API" },
    source: "compose",
    importLine: "import androidx.compose.runtime.SideEffect",
    does: {
      en: "Runs after every successful composition, for publishing Compose state out to something that is not Compose.",
      hi: "हर सफल composition के बाद चलता है, ताकि Compose की state ऐसी किसी चीज तक पहुँचाई जा सके जो Compose नहीं है।",
      "hi-en": "Har safal composition ke baad chalta hai, taki Compose ki state aisi kisi cheez tak pahunchai ja sake jo Compose nahi hai.",
    },
    affects: {
      en: "It has no key and no cleanup, so it is not for starting work — it is for handing a current value to an analytics object or a legacy controller that has to be told rather than asked.",
      hi: "इसकी न कोई key है न सफाई, इसलिए यह काम शुरू करने के लिए नहीं है — यह मौजूदा value किसी analytics वाली चीज या पुराने controller को थमाने के लिए है, जिसे पूछने के बजाय बताना पड़ता है।",
      "hi-en": "Iski na koi key hai na safai, isliye ye kaam shuru karne ke liye nahi hai — ye maujooda value kisi analytics wali cheez ya purane controller ko thamane ke liye hai, jise puchne ke bajaye batana padta hai.",
    },
    related: ["LaunchedEffect", "DisposableEffect"],
  },

  rememberCoroutineScope: {
    term: "rememberCoroutineScope",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.rememberCoroutineScope",
    does: {
      en: "Returns a scope tied to this point in the composition, for launching work from an event such as a click.",
      hi: "Composition की इसी जगह से बँधा एक scope लौटाता है, ताकि click जैसी किसी घटना से काम शुरू किया जा सके।",
      "hi-en": "Composition ki isi jagah se bandha ek scope lautata hai, taki click jaisi kisi ghatna se kaam shuru kiya ja sake.",
    },
    affects: {
      en: "It is the counterpart to `LaunchedEffect`, not an alternative: this one runs because the user did something, that one because the composable is on screen. Calling `scope.launch` directly in a composable body starts a coroutine on every recomposition.",
      hi: "यह `LaunchedEffect` का जोड़ीदार है, विकल्प नहीं: यह इसलिए चलता है कि user ने कुछ किया, वह इसलिए कि composable screen पर है। Composable की body में सीधे `scope.launch` लिखना हर recomposition पर एक coroutine शुरू कर देता है।",
      "hi-en": "Ye `LaunchedEffect` ka jodidar hai, vikalp nahi: ye isliye chalta hai ki user ne kuch kiya, wo isliye ki composable screen par hai. Composable ki body mein seedhe `scope.launch` likhna har recomposition par ek coroutine shuru kar deta hai.",
    },
    related: ["LaunchedEffect", "launch", "CoroutineScope"],
  },

  produceState: {
    term: "produceState",
    kind: { en: "Effect API", hi: "Effect API", "hi-en": "Effect API" },
    source: "compose",
    importLine: "import androidx.compose.runtime.produceState",
    does: {
      en: "Turns a callback API or a suspending source into Compose `State`, with an initial value.",
      hi: "किसी callback वाली API या suspend करने वाले स्रोत को शुरुआती value के साथ Compose `State` में बदल देता है।",
      "hi-en": "Kisi callback wali API ya suspend karne wale srot ko shuruati value ke saath Compose `State` mein badal deta hai.",
    },
    affects: {
      en: "It is `LaunchedEffect` and a `MutableState` in one call, and `awaitDispose` inside it unregisters the callback when the composable leaves — so an adapter written with it cannot leak the listener.",
      hi: "यह एक ही call में `LaunchedEffect` और एक `MutableState` है, और उसके अंदर `awaitDispose` composable के जाते ही callback हटा देता है — तो इससे लिखा गया कोई adapter listener leak नहीं कर सकता।",
      "hi-en": "Ye ek hi call mein `LaunchedEffect` aur ek `MutableState` hai, aur uske andar `awaitDispose` composable ke jate hi callback hata deta hai — to isse likha gaya koi adapter listener leak nahi kar sakta.",
    },
    related: ["LaunchedEffect", "snapshotFlow", "mutableStateOf"],
  },

  snapshotFlow: {
    term: "snapshotFlow",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.snapshotFlow",
    does: {
      en: "Turns Compose `State` reads into a cold `Flow` that emits when any of them changes.",
      hi: "Compose की `State` पढ़ने को ऐसे ठंडे `Flow` में बदलता है जो उनमें से कुछ भी बदलने पर emit करता है।",
      "hi-en": "Compose ki `State` padhne ko aise thande `Flow` mein badalta hai jo unmein se kuch bhi badalne par emit karta hai.",
    },
    affects: {
      en: "It is the bridge out of Compose, so scroll position or selection can be fed into `distinctUntilChanged`, `debounce` and the rest of the flow vocabulary before reaching analytics or a repository.",
      hi: "यह Compose से बाहर निकलने का पुल है, तो scroll की जगह या चुनाव को analytics या किसी repository तक पहुँचने से पहले `distinctUntilChanged`, `debounce` और बाकी flow वाली शब्दावली से गुजारा जा सकता है।",
      "hi-en": "Ye Compose se bahar nikalne ka pul hai, to scroll ki jagah ya chunaav ko analytics ya kisi repository tak pahunchne se pehle `distinctUntilChanged`, `debounce` aur baaki flow wali shabdawali se guzara ja sakta hai.",
    },
    related: ["Flow", "derivedStateOf", "LaunchedEffect"],
  },

  rememberUpdatedState: {
    term: "rememberUpdatedState",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.rememberUpdatedState",
    does: {
      en: "Keeps a reference that always points at the newest value, without that value being a key.",
      hi: "ऐसा reference रखता है जो हमेशा सबसे नई value की तरफ इशारा करता है, बिना उस value के key बने।",
      "hi-en": "Aisa reference rakhta hai jo hamesha sabse nai value ki taraf ishara karta hai, bina us value ke key bane.",
    },
    affects: {
      en: "It is the answer when a long-running effect must not restart but the lambda it will eventually call may have changed — a timeout that keeps counting while the callback underneath it is replaced.",
      hi: "जब कोई लंबा चलने वाला effect दोबारा शुरू नहीं होना चाहिए पर जो lambda वह आखिर में बुलाएगा वह बदल सकती है, तो जवाब यही है — कोई timeout जो गिनता रहता है जबकि उसके नीचे का callback बदल जाता है।",
      "hi-en": "Jab koi lamba chalne wala effect dobara shuru nahi hona chahiye par jo lambda wo aakhir mein bulayega wo badal sakti hai, to jawab yahi hai — koi timeout jo ginta rehta hai jabki uske neeche ka callback badal jata hai.",
    },
    related: ["LaunchedEffect", "remember"],
  },

  collectAsStateWithLifecycle: {
    term: "collectAsStateWithLifecycle",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "jetpack",
    importLine: "import androidx.lifecycle.compose.collectAsStateWithLifecycle",
    does: {
      en: "Collects a `Flow` into Compose `State`, and stops collecting while the screen is in the background.",
      hi: "किसी `Flow` को Compose `State` में collect करता है, और screen के पीछे रहते हुए collect करना रोक देता है।",
      "hi-en": "Kisi `Flow` ko Compose `State` mein collect karta hai, aur screen ke peeche rehte hue collect karna rok deta hai.",
    },
    affects: {
      en: "Plain `collectAsState` keeps collecting behind a locked screen, so network calls and database queries continue for a screen nobody can see. This is the lifecycle awareness that `LiveData` had built in and `StateFlow` leaves to the collector.",
      hi: "सादा `collectAsState` बंद screen के पीछे भी collect करता रहता है, तो जिस screen को कोई देख नहीं सकता उसके लिए network calls और database की queries चलती रहती हैं। यही वह lifecycle की समझ है जो `LiveData` में बनी-बनाई थी और `StateFlow` collector पर छोड़ देता है।",
      "hi-en": "Saada `collectAsState` band screen ke peeche bhi collect karta rehta hai, to jis screen ko koi dekh nahi sakta uske liye network calls aur database ki queries chalti rehti hain. Yahi wo lifecycle ki samajh hai jo `LiveData` mein bani-banai thi aur `StateFlow` collector par chhod deta hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/coroutines#collectasstatewithlifecycle",
    related: ["StateFlow", "repeatOnLifecycle", "Flow"],
  },

  Stable: {
    term: "@Stable",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "compose",
    importLine: "import androidx.compose.runtime.Stable",
    does: {
      en: "Promises the compiler that a type may change, but that every change is observable by Compose.",
      hi: "Compiler से वादा करता है कि यह type बदल सकता है, पर उसका हर बदलाव Compose को दिखता है।",
      "hi-en": "Compiler se wada karta hai ki ye type badal sakta hai, par uska har badlaav Compose ko dikhta hai.",
    },
    affects: {
      en: "It is a promise, not a request. Annotate a type and then mutate it invisibly and Compose will skip a recomposition that was genuinely needed, leaving stale data on screen with no crash and no stack trace.",
      hi: "यह वादा है, गुजारिश नहीं। किसी type पर लगाकर उसे चुपचाप बदलेंगे तो Compose वह recomposition छोड़ देगा जो सच में जरूरी थी, और screen पर बासी data रह जाएगा — न crash, न कोई stack trace।",
      "hi-en": "Ye wada hai, guzarish nahi. Kisi type par lagakar use chupchap badlenge to Compose wo recomposition chhod dega jo sach mein zaruri thi, aur screen par baasi data reh jayega — na crash, na koi stack trace.",
    },
    related: ["Immutable", "mutableStateOf"],
  },

  Immutable: {
    term: "@Immutable",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "compose",
    importLine: "import androidx.compose.runtime.Immutable",
    does: {
      en: "Promises the compiler that nothing inside a type will ever change after construction.",
      hi: "Compiler से वादा करता है कि बनने के बाद इस type के अंदर कुछ कभी नहीं बदलेगा।",
      "hi-en": "Compiler se wada karta hai ki banne ke baad is type ke andar kuch kabhi nahi badlega.",
    },
    affects: {
      en: "It is a last resort, not a fix for a stability warning. Making the type genuinely immutable is the fix; the annotation only tells the compiler to stop checking, and breaking that promise shows the user stale data.",
      hi: "यह आखिरी उपाय है, stability की चेतावनी का इलाज नहीं। इलाज है type को सच में न बदलने वाला बना देना; यह annotation सिर्फ compiler से जाँचना बंद करवाता है, और वादा टूटने पर user को बासी data दिखता है।",
      "hi-en": "Ye aakhri upay hai, stability ki warning ka ilaaj nahi. Ilaaj hai type ko sach mein na badalne wala bana dena; ye annotation sirf compiler se jaanchna band karwata hai, aur wada tootne par user ko baasi data dikhta hai.",
    },
    related: ["Stable", "data"],
  },

  Preview: {
    term: "@Preview",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "compose",
    importLine: "import androidx.compose.ui.tooling.preview.Preview",
    does: {
      en: "Renders a composable in the IDE without running the app.",
      hi: "App चलाए बिना किसी composable को IDE में दिखाता है।",
      "hi-en": "App chalaye bina kisi composable ko IDE mein dikhata hai.",
    },
    values: {
      en: "`showBackground`, `widthDp`, `heightDp`, `uiMode` for dark mode, `fontScale`, `device`, and `group` to organise many previews.",
      hi: "`showBackground`, `widthDp`, `heightDp`, dark mode के लिए `uiMode`, `fontScale`, `device`, और बहुत सारे previews सँभालने के लिए `group`।",
      "hi-en": "`showBackground`, `widthDp`, `heightDp`, dark mode ke liye `uiMode`, `fontScale`, `device`, aur bahut saare previews sambhalne ke liye `group`.",
    },
    affects: {
      en: "A composable you can preview with plain values is one whose state is hoisted properly. If a preview needs a whole dependency graph to render a button, that is the design telling you the state is in the wrong place.",
      hi: "जिस composable का preview सादी values से बन जाता है उसकी state ठीक से ऊपर ले जाई गई है। अगर एक button दिखाने के लिए preview को पूरा dependency का जाल चाहिए, तो वह design का आपको बताना है कि state गलत जगह है।",
      "hi-en": "Jis composable ka preview saadi values se ban jata hai uski state theek se upar le jai gayi hai. Agar ek button dikhane ke liye preview ko poora dependency ka jaal chahiye, to wo design ka aapko batana hai ki state galat jagah hai.",
    },
    related: ["Composable", "MaterialTheme"],
  },

  Row: {
    term: "Row",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.foundation.layout.Row",
    does: {
      en: "Places its children side by side, left to right.",
      hi: "अपने बच्चों को अगल-बगल रखता है, बाएँ से दाएँ।",
      "hi-en": "Apne bachchon ko agal-bagal rakhta hai, baayein se daayein.",
    },
    affects: {
      en: "Its main axis is horizontal, so `horizontalArrangement` distributes the space between children and `verticalAlignment` places each one across it. Swapping those two is the most common layout confusion in Compose.",
      hi: "इसकी मुख्य दिशा आड़ी है, तो बच्चों के बीच की जगह `horizontalArrangement` बाँटता है और हर एक को उसके आर-पार `verticalAlignment` रखता है। इन दोनों का बदल जाना Compose की सबसे आम layout उलझन है।",
      "hi-en": "Iski mukhya disha aadi hai, to bachchon ke beech ki jagah `horizontalArrangement` baantta hai aur har ek ko uske aar-paar `verticalAlignment` rakhta hai. In dono ka badal jana Compose ki sabse aam layout uljhan hai.",
    },
    related: ["Column", "Box", "Arrangement"],
  },

  Box: {
    term: "Box",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.foundation.layout.Box",
    does: {
      en: "Stacks its children on top of one another, in the order they are written.",
      hi: "अपने बच्चों को एक के ऊपर एक रखता है, जिस क्रम में वे लिखे हैं उसी में।",
      "hi-en": "Apne bachchon ko ek ke upar ek rakhta hai, jis order mein wo likhe hain usi mein.",
    },
    affects: {
      en: "It has no main axis, so children are placed with `contentAlignment` or a per-child `Modifier.align`. An overlay inside it wants `matchParentSize`, not `fillMaxSize` — the second one makes the overlay decide the `Box`'s size.",
      hi: "इसकी कोई मुख्य दिशा नहीं, तो बच्चे `contentAlignment` से या हर बच्चे पर `Modifier.align` से रखे जाते हैं। इसके अंदर के overlay को `matchParentSize` चाहिए, `fillMaxSize` नहीं — दूसरे से overlay ही `Box` का नाप तय करने लगता है।",
      "hi-en": "Iski koi mukhya disha nahi, to bachche `contentAlignment` se ya har bachche par `Modifier.align` se rakhe jate hain. Iske andar ke overlay ko `matchParentSize` chahiye, `fillMaxSize` nahi — doosre se overlay hi `Box` ka naap tay karne lagta hai.",
    },
    related: ["Column", "Row", "Alignment"],
  },

  Text: {
    term: "Text",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Text",
    does: {
      en: "Displays a string, styled from the theme unless you say otherwise.",
      hi: "कोई string दिखाता है, और जब तक आप कुछ और न कहें theme से सजी हुई।",
      "hi-en": "Koi string dikhata hai, aur jab tak aap kuch aur na kahein theme se saji hui.",
    },
    affects: {
      en: "Passing `color` explicitly overrides the contrast a `Surface` was already providing, which is how dark mode breaks one widget at a time. `maxLines` on its own cuts mid-word; it needs `overflow` to end in an ellipsis.",
      hi: "`color` अलग से भेजना उस contrast को काट देता है जो `Surface` पहले ही दे रहा था, और dark mode एक-एक widget करके इसी तरह टूटता है। अकेला `maxLines` शब्द के बीच से काटता है; `…` पर खत्म होने के लिए उसे `overflow` चाहिए।",
      "hi-en": "`color` alag se bhejna us contrast ko kaat deta hai jo `Surface` pehle hi de raha tha, aur dark mode ek-ek widget karke isi tarah tootta hai. Akela `maxLines` shabd ke beech se kaatta hai; `…` par khatam hone ke liye use `overflow` chahiye.",
    },
    related: ["MaterialTheme", "Surface"],
  },

  Button: {
    term: "Button",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Button",
    does: {
      en: "The filled Material 3 button — the highest-emphasis action on a screen.",
      hi: "Material 3 का भरा हुआ button — screen पर सबसे ज्यादा जोर वाला काम।",
      "hi-en": "Material 3 ka bhara hua button — screen par sabse zyada zor wala kaam.",
    },
    values: {
      en: "The other emphases are separate functions: `FilledTonalButton`, `OutlinedButton`, `TextButton`, and `ElevatedButton`.",
      hi: "बाकी जोर अलग functions हैं: `FilledTonalButton`, `OutlinedButton`, `TextButton`, और `ElevatedButton`।",
      "hi-en": "Baaki zor alag functions hain: `FilledTonalButton`, `OutlinedButton`, `TextButton`, aur `ElevatedButton`.",
    },
    affects: {
      en: "Its content is a lambda rather than a `text` parameter, so an icon plus a label is two calls inside it. Choosing the emphasis is a function name here instead of a style attribute, which makes a wrong one visible at a glance.",
      hi: "अंदर की चीज `text` parameter नहीं बल्कि एक lambda है, तो icon और label उसके अंदर दो calls हैं। जोर चुनना यहाँ style attribute नहीं बल्कि function का नाम है, जिससे गलत वाला एक नजर में दिख जाता है।",
      "hi-en": "Andar ki cheez `text` parameter nahi balki ek lambda hai, to icon aur label uske andar do calls hain. Zor chunna yahan style attribute nahi balki function ka naam hai, jisse galat wala ek nazar mein dikh jata hai.",
    },
    related: ["Text", "MaterialTheme"],
  },

  TextField: {
    term: "TextField",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.TextField",
    does: {
      en: "A field the user types into, showing exactly the `value` it is given.",
      hi: "वह field जिसमें user लिखता है, और जो ठीक वही `value` दिखाती है जो उसे दी जाती है।",
      "hi-en": "Wo field jismein user likhta hai, aur jo theek wahi `value` dikhati hai jo use di jati hai.",
    },
    values: {
      en: "`label`, `supportingText`, `isError`, `keyboardOptions` and `singleLine` cover most needs. `OutlinedTextField` is the same API with a boxed outline.",
      hi: "`label`, `supportingText`, `isError`, `keyboardOptions` और `singleLine` ज्यादातर जरूरतें सँभाल लेते हैं। `OutlinedTextField` वही API है, बस चारों तरफ लकीर वाली।",
      "hi-en": "`label`, `supportingText`, `isError`, `keyboardOptions` aur `singleLine` zyadatar zarooratein sambhal lete hain. `OutlinedTextField` wahi API hai, bas charon taraf lakeer wali.",
    },
    affects: {
      en: "It stores nothing itself. An `onValueChange` that does not write to state leaves the field showing the same string forever, which looks like a frozen keyboard — the same controlled-component contract as `Switch`, `Slider` and `Checkbox`.",
      hi: "यह खुद कुछ नहीं रखती। जो `onValueChange` किसी state में नहीं लिखता उसके साथ field हमेशा वही string दिखाती रहती है, जो जमे हुए keyboard जैसा लगता है — वही बाहर से चलाए जाने का करार जो `Switch`, `Slider` और `Checkbox` पर है।",
      "hi-en": "Ye khud kuch nahi rakhti. Jo `onValueChange` kisi state mein nahi likhta uske saath field hamesha wahi string dikhati rehti hai, jo jame hue keyboard jaisa lagta hai — wahi bahar se chalaye jane ka karaar jo `Switch`, `Slider` aur `Checkbox` par hai.",
    },
    related: ["mutableStateOf", "rememberSaveable"],
  },

  Card: {
    term: "Card",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Card",
    does: {
      en: "A `Surface` with card defaults, for content that belongs together.",
      hi: "Card वाले defaults के साथ एक `Surface`, उन चीजों के लिए जो साथ की हैं।",
      "hi-en": "Card wale defaults ke saath ek `Surface`, un cheezon ke liye jo saath ki hain.",
    },
    values: {
      en: "`ElevatedCard` adds a shadow, `OutlinedCard` a border instead of elevation.",
      hi: "`ElevatedCard` छाया जोड़ता है, `OutlinedCard` elevation की जगह एक लकीर।",
      "hi-en": "`ElevatedCard` chhaya jodta hai, `OutlinedCard` elevation ki jagah ek lakeer.",
    },
    affects: {
      en: "It has no padding of its own, deliberately — an image should reach its edges, so padding belongs on the content inside.",
      hi: "इसका अपना कोई padding नहीं है, जानबूझकर — कोई तस्वीर इसके किनारों तक जानी चाहिए, तो padding अंदर वाले content पर लगता है।",
      "hi-en": "Iska apna koi padding nahi hai, jaanbujhkar — koi tasveer iske kinaron tak jani chahiye, to padding andar wale content par lagta hai.",
    },
    related: ["Surface", "MaterialTheme"],
  },

  Surface: {
    term: "Surface",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Surface",
    does: {
      en: "A background with a shape, an optional border and tonal elevation, which also sets the content colour beneath it.",
      hi: "Shape, चाहें तो एक लकीर और tonal elevation वाला एक background, जो अपने नीचे के content का रंग भी तय करता है।",
      "hi-en": "Shape, chahein to ek lakeer aur tonal elevation wala ek background, jo apne neeche ke content ka rang bhi tay karta hai.",
    },
    affects: {
      en: "Because it provides `LocalContentColor`, text and icons inside it get the right contrast without a single `color` parameter — which is exactly what an explicit colour throws away.",
      hi: "यह `LocalContentColor` देता है, इसलिए इसके अंदर के text और icons को बिना एक भी `color` parameter के सही contrast मिल जाता है — और अलग से रंग देना ठीक यही चीज फेंक देता है।",
      "hi-en": "Ye `LocalContentColor` deta hai, isliye iske andar ke text aur icons ko bina ek bhi `color` parameter ke sahi contrast mil jata hai — aur alag se rang dena theek yahi cheez phenk deta hai.",
    },
    related: ["Card", "MaterialTheme", "Text"],
  },

  Scaffold: {
    term: "Scaffold",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Scaffold",
    does: {
      en: "Lays out a screen's app bars, floating action button and snackbar host around its content.",
      hi: "Screen के app bars, floating action button और snackbar host को उसके content के इर्द-गिर्द लगाता है।",
      "hi-en": "Screen ke app bars, floating action button aur snackbar host ko uske content ke ird-gird lagata hai.",
    },
    affects: {
      en: "Its content lambda receives `PaddingValues` describing how much room the bars and system insets took. Ignoring it puts the first list item underneath the top app bar — the most common Compose layout bug, and one that looks fine in a preview with no bars.",
      hi: "उसका content वाला lambda `PaddingValues` पाता है, जो बताता है कि bars और system के insets ने कितनी जगह ली। उसे अनदेखा करने पर list का पहला item top app bar के नीचे चला जाता है — Compose का सबसे आम layout bug, और वह जो बिना bars वाले preview में ठीक दिखता है।",
      "hi-en": "Uska content wala lambda `PaddingValues` pata hai, jo batata hai ki bars aur system ke insets ne kitni jagah li. Use andekha karne par list ka pehla item top app bar ke neeche chala jata hai — Compose ka sabse aam layout bug, aur wo jo bina bars wale preview mein theek dikhta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/components/scaffold",
    related: ["TopAppBar", "SnackbarHostState", "Modifier"],
  },

  TopAppBar: {
    term: "TopAppBar",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.TopAppBar",
    does: {
      en: "The bar at the top of a screen, holding a title, a navigation icon and actions.",
      hi: "Screen के सबसे ऊपर की पट्टी, जिसमें title, navigation का icon और काम रहते हैं।",
      "hi-en": "Screen ke sabse upar ki patti, jismein title, navigation ka icon aur actions rehte hain.",
    },
    values: {
      en: "`CenterAlignedTopAppBar`, `MediumTopAppBar` and `LargeTopAppBar` are the other sizes; the last two collapse as the content scrolls.",
      hi: "बाकी नाप `CenterAlignedTopAppBar`, `MediumTopAppBar` और `LargeTopAppBar` हैं; आखिरी दो content के scroll होते ही सिकुड़ते हैं।",
      "hi-en": "Baaki naap `CenterAlignedTopAppBar`, `MediumTopAppBar` aur `LargeTopAppBar` hain; aakhri do content ke scroll hote hi sikudte hain.",
    },
    affects: {
      en: "Every slot is composable content, so a row of chips as a title is an ordinary thing to write rather than a custom view.",
      hi: "हर खाना composable content है, तो title की जगह chips की एक row रखना कोई custom view नहीं, आम बात है।",
      "hi-en": "Har khana composable content hai, to title ki jagah chips ki ek row rakhna koi custom view nahi, aam baat hai.",
    },
    related: ["Scaffold", "Icon"],
  },

  SnackbarHostState: {
    term: "SnackbarHostState",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "compose",
    importLine: "import androidx.compose.material3.SnackbarHostState",
    does: {
      en: "Holds the snackbar a screen is currently showing, and queues the next one.",
      hi: "Screen अभी जो snackbar दिखा रही है वह रखता है, और अगले को कतार में लगाता है।",
      "hi-en": "Screen abhi jo snackbar dikha rahi hai wo rakhta hai, aur agle ko line mein lagata hai.",
    },
    affects: {
      en: "`showSnackbar` suspends until the snackbar goes away and returns whether the action was tapped, so handling Undo reads top to bottom instead of arriving in a callback. It needs a scope, which is what `rememberCoroutineScope` is for.",
      hi: "`showSnackbar` snackbar के हटने तक रुका रहता है और लौटाता है कि उसके action पर tap हुआ या नहीं, तो Undo सँभालना callback में आने के बजाय ऊपर से नीचे पढ़ा जाता है। उसे एक scope चाहिए, और `rememberCoroutineScope` उसी के लिए है।",
      "hi-en": "`showSnackbar` snackbar ke hatne tak ruka rehta hai aur lautata hai ki uske action par tap hua ya nahi, to Undo sambhalna callback mein aane ke bajaye upar se neeche padha jata hai. Use ek scope chahiye, aur `rememberCoroutineScope` usi ke liye hai.",
    },
    related: ["Scaffold", "rememberCoroutineScope", "Snackbar"],
  },

  Icon: {
    term: "Icon",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.Icon",
    does: {
      en: "Draws a small vector, tinted with the current content colour.",
      hi: "कोई छोटा vector बनाता है, मौजूदा content के रंग से रंगा हुआ।",
      "hi-en": "Koi chhota vector banata hai, maujooda content ke rang se ranga hua.",
    },
    affects: {
      en: "`contentDescription` is not optional in spirit: pass a label for a meaningful icon and `null` for a purely decorative one, because a screen reader cannot tell the difference by looking.",
      hi: "`contentDescription` मन से वैकल्पिक नहीं है: मतलब रखने वाले icon पर label दीजिए और सिर्फ सजावटी पर `null`, क्योंकि screen reader देखकर फर्क नहीं बता सकता।",
      "hi-en": "`contentDescription` mann se optional nahi hai: matlab rakhne wale icon par label dijiye aur sirf sajawati par `null`, kyunki screen reader dekhkar farak nahi bata sakta.",
    },
    related: ["Text", "MaterialTheme"],
  },

  Spacer: {
    term: "Spacer",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.foundation.layout.Spacer",
    does: {
      en: "An empty composable that occupies whatever size its modifier gives it.",
      hi: "एक खाली composable, जो उतनी जगह लेता है जितनी उसका modifier देता है।",
      "hi-en": "Ek khaali composable, jo utni jagah leta hai jitni uska modifier deta hai.",
    },
    affects: {
      en: "A `Spacer` between every pair of children is usually `Arrangement.spacedBy` written the long way. It earns its place for a `weight(1f)` gap that pushes the next child to the end.",
      hi: "हर जोड़ी बच्चों के बीच `Spacer` आमतौर पर `Arrangement.spacedBy` को लंबे रास्ते से लिखना है। वह उस `weight(1f)` वाली खाली जगह के लिए सही है जो अगले बच्चे को सिरे तक धकेल देती है।",
      "hi-en": "Har jodi bachchon ke beech `Spacer` aam taur par `Arrangement.spacedBy` ko lambe raaste se likhna hai. Wo us `weight(1f)` wali khaali jagah ke liye sahi hai jo agle bachche ko sire tak dhakel deti hai.",
    },
    related: ["Arrangement", "Modifier"],
  },

  Arrangement: {
    term: "Arrangement",
    kind: { en: "Object", hi: "Object", "hi-en": "Object" },
    source: "compose",
    importLine: "import androidx.compose.foundation.layout.Arrangement",
    does: {
      en: "Distributes the free space along a `Row` or `Column`'s main axis.",
      hi: "`Row` या `Column` की मुख्य दिशा की खाली जगह बाँटता है।",
      "hi-en": "`Row` ya `Column` ki mukhya disha ki khaali jagah baantta hai.",
    },
    values: {
      en: "`Start`, `End`, `Center`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly`, and `spacedBy(dp)` for a fixed gap.",
      hi: "`Start`, `End`, `Center`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly`, और तय दूरी के लिए `spacedBy(dp)`।",
      "hi-en": "`Start`, `End`, `Center`, `SpaceBetween`, `SpaceAround`, `SpaceEvenly`, aur tay doori ke liye `spacedBy(dp)`.",
    },
    affects: {
      en: "Only the main axis has leftover space to distribute, which is why the cross axis has `Alignment` and no vocabulary of its own. Reaching for arrangement when you meant alignment moves nothing, and is the usual cause of a layout that will not centre.",
      hi: "बाँटने लायक खाली जगह सिर्फ मुख्य दिशा में होती है, इसीलिए आर-पार वाली दिशा के पास `Alignment` है और अपनी कोई शब्दावली नहीं। Alignment की जगह arrangement उठाने से कुछ नहीं हिलता, और जो layout बीच में नहीं आता उसकी आम वजह यही होती है।",
      "hi-en": "Baantne layak khaali jagah sirf mukhya disha mein hoti hai, isiliye aar-paar wali disha ke paas `Alignment` hai aur apni koi shabdawali nahi. Alignment ki jagah arrangement uthane se kuch nahi hilta, aur jo layout beech mein nahi aata uski aam wajah yahi hoti hai.",
    },
    related: ["Alignment", "Row", "Column"],
  },

  Alignment: {
    term: "Alignment",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "compose",
    importLine: "import androidx.compose.ui.Alignment",
    does: {
      en: "Places a child across the axis a layout does not distribute.",
      hi: "बच्चे को उस दिशा के आर-पार रखता है जिसे layout बाँटता नहीं।",
      "hi-en": "Bachche ko us disha ke aar-paar rakhta hai jise layout baantta nahi.",
    },
    values: {
      en: "`Alignment.CenterHorizontally` and `CenterVertically` for the one-axis cases inside a `Column` or `Row`; two-dimensional values such as `TopEnd` and `Center` inside a `Box`.",
      hi: "`Column` या `Row` के अंदर एक दिशा वाले मामलों के लिए `Alignment.CenterHorizontally` और `CenterVertically`; `Box` के अंदर दो दिशाओं वाली values जैसे `TopEnd` और `Center`।",
      "hi-en": "`Column` ya `Row` ke andar ek disha wale mamlon ke liye `Alignment.CenterHorizontally` aur `CenterVertically`; `Box` ke andar do dishaon wali values jaise `TopEnd` aur `Center`.",
    },
    affects: {
      en: "The type differs by layout, which is why `Alignment.Center` does not compile where a `Column` wants a horizontal alignment. That is the compiler catching the arrangement-versus-alignment mix-up for you.",
      hi: "Type हर layout में अलग है, इसीलिए जहाँ `Column` को आड़ा alignment चाहिए वहाँ `Alignment.Center` compile नहीं होता। यही compiler का arrangement और alignment की उलझन आपके लिए पकड़ लेना है।",
      "hi-en": "Type har layout mein alag hai, isiliye jahan `Column` ko aada alignment chahiye wahan `Alignment.Center` compile nahi hota. Yahi compiler ka arrangement aur alignment ki uljhan aapke liye pakad lena hai.",
    },
    related: ["Arrangement", "Box", "Column"],
  },

  dp: {
    term: "dp",
    kind: { en: "Extension property", hi: "Extension property", "hi-en": "Extension property" },
    source: "compose",
    importLine: "import androidx.compose.ui.unit.dp",
    does: {
      en: "Turns a number into a density-independent length, so `16.dp` is the same physical size on every screen.",
      hi: "किसी संख्या को density से आजाद लंबाई बनाता है, तो `16.dp` हर screen पर एक ही असली नाप का होता है।",
      "hi-en": "Kisi number ko density se azad lambai banata hai, to `16.dp` har screen par ek hi asli naap ka hota hai.",
    },
    affects: {
      en: "Sizes, padding and offsets take `Dp`, so a raw `Int` will not compile — the type system removes the pixel-versus-dp mistake that the view system left to you.",
      hi: "नाप, padding और offsets `Dp` लेते हैं, तो सादा `Int` compile ही नहीं होगा — type system वह pixel-बनाम-dp वाली गलती हटा देता है जो view system आप पर छोड़ देता था।",
      "hi-en": "Naap, padding aur offsets `Dp` lete hain, to saada `Int` compile hi nahi hoga — type system wo pixel-banam-dp wali galti hata deta hai jo view system aap par chhod deta tha.",
    },
    related: ["sp", "Modifier"],
  },

  sp: {
    term: "sp",
    kind: { en: "Extension property", hi: "Extension property", "hi-en": "Extension property" },
    source: "compose",
    importLine: "import androidx.compose.ui.unit.sp",
    does: {
      en: "The text-size unit, which scales with the user's font size setting as well as the screen density.",
      hi: "Text के नाप की इकाई, जो screen की density के साथ-साथ user की font size वाली setting से भी बदलती है।",
      "hi-en": "Text ke naap ki ikai, jo screen ki density ke saath-saath user ki font size wali setting se bhi badalti hai.",
    },
    affects: {
      en: "Using `dp` for text ignores that setting, so anyone who enlarged their font sees no change — a real accessibility failure that no device you own will show you.",
      hi: "Text के लिए `dp` लेना उस setting को अनदेखा कर देता है, तो जिसने अपना font बड़ा किया है उसे कोई फर्क नहीं दिखता — असली accessibility की नाकामी, जो आपके अपने किसी device पर दिखेगी नहीं।",
      "hi-en": "Text ke liye `dp` lena us setting ko andekha kar deta hai, to jisne apna font bada kiya hai use koi farak nahi dikhta — asli accessibility ki nakami, jo aapke apne kisi device par dikhegi nahi.",
    },
    related: ["dp", "MaterialTheme"],
  },

  clickable: {
    term: "clickable",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.foundation.clickable",
    does: {
      en: "Makes a composable respond to a tap, with a ripple, semantics, focus and keyboard activation.",
      hi: "Composable को tap पर जवाब देने लायक बनाता है, साथ में ripple, semantics, focus और keyboard से चलना।",
      "hi-en": "Composable ko tap par jawab dene layak banata hai, saath mein ripple, semantics, focus aur keyboard se chalna.",
    },
    affects: {
      en: "Replacing it with `pointerInput` and `detectTapGestures` loses all four, so the screen looks and works identically to you and is unusable with a screen reader. Its position in the chain decides the touch target: `clickable` before `padding` makes the padding tappable.",
      hi: "इसकी जगह `pointerInput` और `detectTapGestures` रखने से चारों चले जाते हैं, तो screen आपको बिलकुल वैसी ही दिखती और चलती है और screen reader के साथ बेकार होती है। कड़ी में इसकी जगह छूने का इलाका तय करती है: `padding` से पहले `clickable` रखने पर padding भी tap होता है।",
      "hi-en": "Iski jagah `pointerInput` aur `detectTapGestures` rakhne se charon chale jate hain, to screen aapko bilkul waisi hi dikhti aur chalti hai aur screen reader ke saath bekar hoti hai. Kadi mein iski jagah chhoone ka ilaka tay karti hai: `padding` se pehle `clickable` rakhne par padding bhi tap hota hai.",
    },
    related: ["combinedClickable", "pointerInput", "Modifier"],
  },

  combinedClickable: {
    term: "combinedClickable",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.foundation.combinedClickable",
    does: {
      en: "Adds long press and double tap to `clickable`, keeping the ripple, semantics and focus.",
      hi: "`clickable` में long press और double tap जोड़ता है, और ripple, semantics तथा focus बनाए रखता है।",
      "hi-en": "`clickable` mein long press aur double tap jodta hai, aur ripple, semantics tatha focus banaye rakhta hai.",
    },
    affects: {
      en: "It exists precisely for the case that tempts people down to `pointerInput` — needing a long press — so reaching for the lower layer there gives up accessibility for nothing.",
      hi: "यह ठीक उसी मामले के लिए है जो लोगों को `pointerInput` तक नीचे खींचता है — long press की जरूरत — तो वहाँ नीचे वाली परत उठाना accessibility बिना वजह छोड़ देना है।",
      "hi-en": "Ye theek usi mamle ke liye hai jo logon ko `pointerInput` tak neeche kheenchta hai — long press ki zarurat — to wahan neeche wali parat uthana accessibility bina wajah chhod dena hai.",
    },
    related: ["clickable", "pointerInput"],
  },

  pointerInput: {
    term: "pointerInput",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.ui.input.pointer.pointerInput",
    does: {
      en: "Runs a coroutine that waits for raw pointer events, for gestures no modifier expresses.",
      hi: "एक coroutine चलाता है जो कच्चे pointer events का इंतजार करता है, उन इशारों के लिए जिन्हें कोई modifier कह नहीं पाता।",
      "hi-en": "Ek coroutine chalata hai jo kachche pointer events ka intezar karta hai, un isharon ke liye jinhe koi modifier keh nahi pata.",
    },
    affects: {
      en: "Its keys work exactly like an effect's: `pointerInput(Unit)` captures its values once and keeps acting on them, so a changing id or lambda is ignored forever. It also provides no ripple, semantics or focus — add them back yourself.",
      hi: "इसकी keys ठीक किसी effect जैसी चलती हैं: `pointerInput(Unit)` अपनी values एक बार पकड़ता है और उन्हीं पर काम करता रहता है, तो बदलती id या lambda हमेशा के लिए अनदेखी रह जाती है। यह ripple, semantics या focus भी नहीं देता — वे खुद वापस जोड़िए।",
      "hi-en": "Iski keys theek kisi effect jaisi chalti hain: `pointerInput(Unit)` apni values ek baar pakadta hai aur unhin par kaam karta rehta hai, to badalti id ya lambda hamesha ke liye andekhi reh jati hai. Ye ripple, semantics ya focus bhi nahi deta — wo khud wapas jodiye.",
    },
    related: ["clickable", "draggable", "rememberUpdatedState"],
  },

  draggable: {
    term: "draggable",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.foundation.gestures.draggable",
    does: {
      en: "Reports drag movement along one axis through a state object.",
      hi: "एक दिशा में खिंचाव को किसी state वाली चीज के जरिए बताता है।",
      "hi-en": "Ek disha mein khinchav ko kisi state wali cheez ke zariye batata hai.",
    },
    affects: {
      en: "It reports the movement but does not move anything — you apply the value yourself, usually through the lambda form of `offset` so the drag does not recompose on every frame.",
      hi: "यह हिलना बताता है, हिलाता कुछ नहीं — value आप खुद लगाते हैं, आमतौर पर `offset` के lambda वाले रूप से, ताकि खिंचाव हर frame पर recompose न कराए।",
      "hi-en": "Ye hilna batata hai, hilata kuch nahi — value aap khud lagate hain, aam taur par `offset` ke lambda wale roop se, taki khinchav har frame par recompose na karaye.",
    },
    related: ["pointerInput", "Animatable", "graphicsLayer"],
  },

  graphicsLayer: {
    term: "graphicsLayer",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.ui.graphics.graphicsLayer",
    does: {
      en: "Applies alpha, scale, rotation, translation and clipping to a composable in its own render layer.",
      hi: "किसी composable पर alpha, scale, घुमाव, खिसकाव और काट-छाँट उसकी अपनी render परत में लगाता है।",
      "hi-en": "Kisi composable par alpha, scale, ghumav, khiskav aur kaat-chhaant uski apni render parat mein lagata hai.",
    },
    affects: {
      en: "Its lambda form reads state during the draw phase, so an animated alpha or scale changes no composition and no layout — the single most effective way to stop an animation recomposing sixty times a second.",
      hi: "इसका lambda वाला रूप state को draw वाले चरण में पढ़ता है, तो animate होता alpha या scale न composition बदलता है न layout — किसी animation को सेकंड में साठ बार recompose होने से रोकने का सबसे असरदार तरीका।",
      "hi-en": "Iska lambda wala roop state ko draw wale charan mein padhta hai, to animate hota alpha ya scale na composition badalta hai na layout — kisi animation ko ek second mein 60 baar recompose hone se rokne ka sabse asardar tarika.",
    },
    related: ["drawBehind", "Modifier", "animateFloatAsState"],
  },

  drawBehind: {
    term: "drawBehind",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.ui.draw.drawBehind",
    does: {
      en: "Draws into a `DrawScope` behind a composable's own content.",
      hi: "किसी composable के अपने content के पीछे एक `DrawScope` में बनाता है।",
      "hi-en": "Kisi composable ke apne content ke peeche ek `DrawScope` mein banata hai.",
    },
    affects: {
      en: "The whole block runs on every draw, so a `Path` or a `Brush` built inside it is rebuilt on every frame of an animation. `drawWithCache` exists for exactly that.",
      hi: "पूरा block हर draw पर चलता है, तो उसके अंदर बना कोई `Path` या `Brush` animation के हर frame पर दोबारा बनता है। `drawWithCache` ठीक इसी के लिए है।",
      "hi-en": "Poora block har draw par chalta hai, to uske andar bana koi `Path` ya `Brush` animation ke har frame par dobara banta hai. `drawWithCache` theek isi ke liye hai.",
    },
    related: ["drawWithCache", "DrawScope", "graphicsLayer"],
  },

  drawWithCache: {
    term: "drawWithCache",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.ui.draw.drawWithCache",
    does: {
      en: "Prepares expensive drawing objects once, and redraws with them every frame.",
      hi: "बनाने की महँगी चीजें एक बार तैयार करता है, और हर frame पर उन्हीं से दोबारा बनाता है।",
      "hi-en": "Banane ki mehngi cheezein ek baar taiyar karta hai, aur har frame par unhin se dobara banata hai.",
    },
    affects: {
      en: "The outer block re-runs only when the size or a captured state changes; `onDrawBehind` runs every frame. It is the same discipline as allocating a `Paint` in a custom view's constructor rather than in `onDraw`.",
      hi: "बाहर वाला block तभी दोबारा चलता है जब नाप या पकड़ी हुई कोई state बदले; `onDrawBehind` हर frame पर चलता है। यह वही अनुशासन है जो custom view में `Paint` को `onDraw` के बजाय constructor में बनाने का था।",
      "hi-en": "Bahar wala block tabhi dobara chalta hai jab naap ya pakdi hui koi state badle; `onDrawBehind` har frame par chalta hai. Ye wahi anushasan hai jo custom view mein `Paint` ko `onDraw` ke bajaye constructor mein banane ka tha.",
    },
    related: ["drawBehind", "DrawScope", "Paint"],
  },

  DrawScope: {
    term: "DrawScope",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "compose",
    importLine: "import androidx.compose.ui.graphics.drawscope.DrawScope",
    does: {
      en: "The drawing surface inside Compose, giving you `size`, `center` and commands such as `drawCircle` and `drawPath`.",
      hi: "Compose के अंदर बनाने की सतह, जो आपको `size`, `center` और `drawCircle`, `drawPath` जैसी बातें देती है।",
      "hi-en": "Compose ke andar banane ki satah, jo aapko `size`, `center` aur `drawCircle`, `drawPath` jaisi baatein deti hai.",
    },
    affects: {
      en: "There is no `Paint` object to allocate — colour, stroke and style are parameters — so the classic allocate-in-`onDraw` mistake from custom views simply cannot be written the same way. The `Canvas` composable is a `Spacer` with one of these attached.",
      hi: "यहाँ बनाने को कोई `Paint` नहीं है — रंग, stroke और style parameters हैं — तो custom views वाली `onDraw` में नई चीज बनाने की पुरानी गलती उसी तरह लिखी ही नहीं जा सकती। `Canvas` composable एक `Spacer` है जिस पर यही लगा होता है।",
      "hi-en": "Yahan banane ko koi `Paint` nahi hai — rang, stroke aur style parameters hain — to custom views wali `onDraw` mein nai cheez banane ki purani galti usi tarah likhi hi nahi ja sakti. `Canvas` composable ek `Spacer` hai jis par yahi laga hota hai.",
    },
    related: ["drawBehind", "drawWithCache", "Canvas"],
  },

  Layout: {
    term: "Layout",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.ui.layout.Layout",
    does: {
      en: "Measures children, declares your own size, and places them — a custom layout in one function.",
      hi: "बच्चों को measure करता है, अपना नाप बताता है, और उन्हें जगह देता है — एक ही function में custom layout।",
      "hi-en": "Bachchon ko measure karta hai, apna naap batata hai, aur unhe jagah deta hai — ek hi function mein custom layout.",
    },
    affects: {
      en: "Each child may be measured exactly once per pass, and measuring twice throws. That rule is what keeps a tree of N nodes to N measurements, so deep nesting does not carry the cost it did with nested weighted `LinearLayout`s.",
      hi: "हर बच्चा हर pass में ठीक एक बार measure हो सकता है, और दो बार करने पर फेंक देता है। इसी नियम से N nodes के पेड़ पर N measurements लगती हैं, तो गहरी nesting पर वह कीमत नहीं पड़ती जो एक के अंदर एक weight वाले `LinearLayout` पर पड़ती थी।",
      "hi-en": "Har bachcha har pass mein theek ek baar measure ho sakta hai, aur do baar karne par phenk deta hai. Isi niyam se N nodes ke ped par N measurements lagti hain, to gehri nesting par wo keemat nahi padti jo ek ke andar ek weight wale `LinearLayout` par padti thi.",
    },
    docs: "https://developer.android.com/develop/ui/compose/layouts/custom",
    related: ["Constraints", "Modifier", "Box"],
  },

  Constraints: {
    term: "Constraints",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "compose",
    importLine: "import androidx.compose.ui.unit.Constraints",
    does: {
      en: "Carries the minimum and maximum width and height a parent will allow a child.",
      hi: "Parent किसी बच्चे को कम से कम और ज्यादा से ज्यादा कितनी चौड़ाई-ऊँचाई देगा, यह लेकर चलता है।",
      "hi-en": "Parent kisi bachche ko kam se kam aur zyada se zyada kitni width-height dega, ye lekar chalta hai.",
    },
    values: {
      en: "`copy(minWidth = 0)` relaxes a minimum, `Constraints.fixed(w, h)` forces a size, and `Constraints.Infinity` removes a limit — which is what a scrolling parent passes.",
      hi: "`copy(minWidth = 0)` कम से कम वाली हद ढीली करता है, `Constraints.fixed(w, h)` नाप जबरन तय करता है, और `Constraints.Infinity` हद हटा देता है — scroll करने वाला parent यही भेजता है।",
      "hi-en": "`copy(minWidth = 0)` kam se kam wali had dheeli karta hai, `Constraints.fixed(w, h)` naap jabran tay karta hai, aur `Constraints.Infinity` had hata deta hai — scroll karne wala parent yahi bhejta hai.",
    },
    affects: {
      en: "Passing your own constraints straight down forces every child to be at least as big as your minimum, which is rarely what was meant and is most bugs at this level.",
      hi: "अपनी constraints सीधे नीचे भेज देना हर बच्चे को कम से कम अपने जितना बड़ा होने पर मजबूर कर देता है, जो शायद ही कभी मतलब होता है और इस स्तर के ज्यादातर bugs यही हैं।",
      "hi-en": "Apni constraints seedhe neeche bhej dena har bachche ko kam se kam apne jitna bada hone par majboor kar deta hai, jo shayad hi kabhi matlab hota hai aur is level ke zyadatar bugs yahi hain.",
    },
    related: ["Layout", "MeasureSpec"],
  },

  LazyRow: {
    term: "LazyRow",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.foundation.lazy.LazyRow",
    does: {
      en: "A horizontally scrolling list that composes only the items currently on screen.",
      hi: "आड़े में scroll होने वाली list, जो सिर्फ अभी screen पर दिखते items बनाती है।",
      "hi-en": "Aade mein scroll hone wali list, jo sirf abhi screen par dikhte items banati hai.",
    },
    affects: {
      en: "Same rules as `LazyColumn`, including that `key` is what makes remembered state follow an item rather than its position. Nesting one inside a `Row` that also scrolls horizontally throws, for the same unbounded-axis reason.",
      hi: "`LazyColumn` वाले ही नियम, इसमें भी `key` ही याद रखी हुई state को जगह के बजाय item के पीछे चलाता है। इसे आड़े scroll होते किसी `Row` के अंदर रखने पर वही बिना हद वाली दिशा की वजह से फेंकता है।",
      "hi-en": "`LazyColumn` wale hi niyam, ismein bhi `key` hi yaad rakhi hui state ko jagah ke bajaye item ke peeche chalata hai. Ise aade scroll hote kisi `Row` ke andar rakhne par wahi bina had wali disha ki wajah se phenkta hai.",
    },
    related: ["LazyColumn", "LazyVerticalGrid", "rememberLazyListState"],
  },

  LazyVerticalGrid: {
    term: "LazyVerticalGrid",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.foundation.lazy.grid.LazyVerticalGrid",
    does: {
      en: "A grid that composes only the visible cells, with a column strategy you choose.",
      hi: "ऐसा grid जो सिर्फ दिखते खाने बनाता है, और columns का तरीका आप चुनते हैं।",
      "hi-en": "Aisa grid jo sirf dikhte khane banata hai, aur columns ka tarika aap chunte hain.",
    },
    values: {
      en: "`GridCells.Fixed(n)` for a set number of columns, `GridCells.Adaptive(minSize)` for as many as fit, `GridCells.FixedSize(size)` for a fixed cell.",
      hi: "तय संख्या के columns के लिए `GridCells.Fixed(n)`, जितने समाएँ उतने के लिए `GridCells.Adaptive(minSize)`, और पक्के खाने के लिए `GridCells.FixedSize(size)`।",
      "hi-en": "Tay sankhya ke columns ke liye `GridCells.Fixed(n)`, jitne samayein utne ke liye `GridCells.Adaptive(minSize)`, aur pakke khane ke liye `GridCells.FixedSize(size)`.",
    },
    affects: {
      en: "`Adaptive` is what lets one grid work on a phone and a tablet without a second layout, which is the same job window size classes do for a whole screen.",
      hi: "`Adaptive` से ही एक grid बिना दूसरी layout के phone और tablet दोनों पर चलती है — वही काम जो पूरी screen के लिए window size classes करती हैं।",
      "hi-en": "`Adaptive` se hi ek grid bina doosri layout ke phone aur tablet dono par chalti hai — wahi kaam jo poori screen ke liye window size classes karti hain.",
    },
    related: ["LazyColumn", "LazyRow", "currentWindowAdaptiveInfo"],
  },

  rememberLazyListState: {
    term: "rememberLazyListState",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.foundation.lazy.rememberLazyListState",
    does: {
      en: "Holds a lazy list's scroll position and exposes it, surviving recomposition.",
      hi: "किसी lazy list के scroll की जगह रखता है और बताता है, और recomposition झेल जाता है।",
      "hi-en": "Kisi lazy list ke scroll ki jagah rakhta hai aur batata hai, aur recomposition jhel jata hai.",
    },
    affects: {
      en: "`firstVisibleItemIndex` changes on every frame of a scroll, so reading it directly in a composable recomposes sixty times a second. Read it through `derivedStateOf` when you only care about a threshold.",
      hi: "Scroll के हर frame पर `firstVisibleItemIndex` बदलता है, तो उसे सीधे किसी composable में पढ़ना सेकंड में साठ recompositions कराता है। जब सिर्फ किसी हद से मतलब हो तो उसे `derivedStateOf` से पढ़िए।",
      "hi-en": "Scroll ke har frame par `firstVisibleItemIndex` badalta hai, to use seedhe kisi composable mein padhna ek second mein 60 recompositions karata hai. Jab sirf kisi had se matlab ho to use `derivedStateOf` se padhiye.",
    },
    related: ["LazyColumn", "derivedStateOf", "snapshotFlow"],
  },

  MaterialTheme: {
    term: "MaterialTheme",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.material3.MaterialTheme",
    does: {
      en: "Provides a `ColorScheme`, a `Typography` and a `Shapes` to everything beneath it.",
      hi: "अपने नीचे की हर चीज को एक `ColorScheme`, एक `Typography` और एक `Shapes` देता है।",
      "hi-en": "Apne neeche ki har cheez ko ek `ColorScheme`, ek `Typography` aur ek `Shapes` deta hai.",
    },
    values: {
      en: "Read from it as `MaterialTheme.colorScheme.onSurface`, `MaterialTheme.typography.titleLarge`, `MaterialTheme.shapes.medium`.",
      hi: "इससे इस तरह पढ़िए: `MaterialTheme.colorScheme.onSurface`, `MaterialTheme.typography.titleLarge`, `MaterialTheme.shapes.medium`।",
      "hi-en": "Isse is tarah padhiye: `MaterialTheme.colorScheme.onSurface`, `MaterialTheme.typography.titleLarge`, `MaterialTheme.shapes.medium`.",
    },
    affects: {
      en: "Reading it subscribes that composable, so switching the scheme flips the whole app. A colour literal written anywhere cannot follow, which is why one hardcoded `Color(0xFF...)` breaks dark mode for exactly one widget.",
      hi: "इसे पढ़ना उस composable को जोड़ देता है, तो scheme बदलते ही पूरी app पलट जाती है। कहीं भी सीधे लिखा रंग साथ नहीं चल सकता, इसीलिए एक जगह लिखा `Color(0xFF...)` ठीक एक widget का dark mode तोड़ देता है।",
      "hi-en": "Ise padhna us composable ko jod deta hai, to scheme badalte hi poori app palat jati hai. Kahin bhi seedhe likha rang saath nahi chal sakta, isiliye ek jagah likha `Color(0xFF...)` theek ek widget ka dark mode tod deta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/designsystems/material3",
    related: ["Surface", "isSystemInDarkTheme", "CompositionLocalProvider"],
  },

  isSystemInDarkTheme: {
    term: "isSystemInDarkTheme",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.foundation.isSystemInDarkTheme",
    does: {
      en: "Reports whether the system is currently in dark mode.",
      hi: "बताता है कि system अभी dark mode में है या नहीं।",
      "hi-en": "Batata hai ki system abhi dark mode mein hai ya nahi.",
    },
    affects: {
      en: "It is the usual default for a theme's `darkTheme` parameter, and because it is state, changing the system setting recomposes the theme and the whole app follows without a restart.",
      hi: "यह theme के `darkTheme` parameter का आम default है, और चूँकि यह state है, system की setting बदलते ही theme recompose होती है और पूरी app बिना restart के साथ बदल जाती है।",
      "hi-en": "Ye theme ke `darkTheme` parameter ka aam default hai, aur chunki ye state hai, system ki setting badalte hi theme recompose hoti hai aur poori app bina restart ke saath badal jati hai.",
    },
    related: ["MaterialTheme"],
  },

  CompositionLocalProvider: {
    term: "CompositionLocalProvider",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.runtime.CompositionLocalProvider",
    does: {
      en: "Supplies values for one or more composition locals to everything inside it.",
      hi: "अपने अंदर की हर चीज को एक या कई composition locals की values देता है।",
      "hi-en": "Apne andar ki har cheez ko ek ya kai composition locals ki values deta hai.",
    },
    affects: {
      en: "It is how a value reaches deep composables without being threaded through every function in between — and how a subtree overrides one, which is what a dark card inside a light screen is.",
      hi: "इसी से कोई value बीच के हर function से गुजरे बिना गहरे composables तक पहुँचती है — और इसी से कोई हिस्सा उसे बदल भी सकता है, जो light screen के अंदर dark card होना है।",
      "hi-en": "Isi se koi value beech ke har function se guzre bina gehre composables tak pahunchti hai — aur isi se koi hissa use badal bhi sakta hai, jo light screen ke andar dark card hona hai.",
    },
    related: ["staticCompositionLocalOf", "MaterialTheme"],
  },

  staticCompositionLocalOf: {
    term: "staticCompositionLocalOf",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.runtime.staticCompositionLocalOf",
    does: {
      en: "Creates a composition local for a value that essentially never changes.",
      hi: "ऐसी value के लिए composition local बनाता है जो लगभग कभी बदलती नहीं।",
      "hi-en": "Aisi value ke liye composition local banata hai jo lagbhag kabhi badalti nahi.",
    },
    affects: {
      en: "Reading it does not subscribe, so it is cheaper — but changing it recomposes the entire subtree rather than just the readers. Use `compositionLocalOf` for anything that genuinely changes at run time.",
      hi: "इसे पढ़ना जोड़ता नहीं, तो यह सस्ता है — पर इसे बदलने पर सिर्फ पढ़ने वाले नहीं, नीचे का पूरा हिस्सा recompose होता है। जो चीज सच में चलते वक्त बदलती है उसके लिए `compositionLocalOf` लीजिए।",
      "hi-en": "Ise padhna jodta nahi, to ye sasta hai — par ise badalne par sirf padhne wale nahi, neeche ka poora hissa recompose hota hai. Jo cheez sach mein chalte waqt badalti hai uske liye `compositionLocalOf` lijiye.",
    },
    related: ["CompositionLocalProvider", "MaterialTheme"],
  },

  NavHost: {
    term: "NavHost",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "jetpack",
    importLine: "import androidx.navigation.compose.NavHost",
    does: {
      en: "Maps each destination in a navigation graph to the composable that renders it.",
      hi: "Navigation graph की हर destination को उस composable से जोड़ता है जो उसे दिखाता है।",
      "hi-en": "Navigation graph ki har destination ko us composable se jodta hai jo use dikhata hai.",
    },
    affects: {
      en: "It is the one place that knows every route, which is why screens should take lambdas rather than a `NavController` — then a screen is previewable and reusable, and the whole map of what can reach what stays in one file.",
      hi: "यही इकलौती जगह है जिसे हर route पता है, इसीलिए screens को `NavController` के बजाय lambdas लेने चाहिए — तब screen preview और दोबारा इस्तेमाल होने लायक रहती है, और कौन कहाँ तक पहुँच सकता है इसका पूरा नक्शा एक ही file में रहता है।",
      "hi-en": "Yahi iklauti jagah hai jise har route pata hai, isiliye screens ko `NavController` ke bajaye lambdas lene chahiye — tab screen preview aur dobara istemal hone layak rehti hai, aur kaun kahan tak pahunch sakta hai iska poora naksha ek hi file mein rehta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/navigation",
    related: ["NavController", "rememberNavController", "toRoute"],
  },

  NavController: {
    term: "NavController",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.navigation.NavController",
    does: {
      en: "Owns the back stack, and moves between destinations.",
      hi: "Back stack का मालिक है, और destinations के बीच ले जाता है।",
      "hi-en": "Back stack ka maalik hai, aur destinations ke beech le jata hai.",
    },
    values: {
      en: "`navigate` takes an options block with `popUpTo`, `inclusive`, `launchSingleTop`, `saveState` and `restoreState`.",
      hi: "`navigate` एक options वाला block लेता है, जिसमें `popUpTo`, `inclusive`, `launchSingleTop`, `saveState` और `restoreState` आते हैं।",
      "hi-en": "`navigate` ek options wala block leta hai, jismein `popUpTo`, `inclusive`, `launchSingleTop`, `saveState` aur `restoreState` aate hain.",
    },
    affects: {
      en: "Never hold one in a `ViewModel` — it outlives its usefulness the same way an `Activity` reference does. Calling `navigate` from a composable body rather than an effect can fire several times for one state change and leave duplicate entries.",
      hi: "इसे `ViewModel` में कभी मत रखिए — यह उसी तरह अपने काम के रहने के बाद भी जीता है जैसे कोई `Activity` का पता। किसी effect के बजाय composable की body से `navigate` बुलाने पर वह एक ही state बदलाव पर कई बार चल सकता है और stack पर एक जैसी entries छोड़ देता है।",
      "hi-en": "Ise `ViewModel` mein kabhi mat rakhiye — ye usi tarah apne kaam ke rehne ke baad bhi jeeta hai jaise koi `Activity` ka pata. Kisi effect ke bajaye composable ki body se `navigate` bulane par wo ek hi state badlaav par kai baar chal sakta hai aur stack par ek jaisi entries chhod deta hai.",
    },
    related: ["NavHost", "rememberNavController", "LaunchedEffect"],
  },

  rememberNavController: {
    term: "rememberNavController",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "jetpack",
    importLine: "import androidx.navigation.compose.rememberNavController",
    does: {
      en: "Creates a `NavController` and keeps it across recompositions and configuration changes.",
      hi: "एक `NavController` बनाता है और उसे recompositions तथा configuration बदलने के आर-पार रखता है।",
      "hi-en": "Ek `NavController` banata hai aur use recompositions tatha configuration badalne ke aar-paar rakhta hai.",
    },
    affects: {
      en: "Its back stack is saved and restored with it, so a rotation does not send the user back to the start destination.",
      hi: "उसका back stack भी उसी के साथ सँभलता और लौटता है, तो rotation user को शुरुआती destination पर वापस नहीं भेजता।",
      "hi-en": "Uska back stack bhi usi ke saath sambhalta aur lautta hai, to rotation user ko shuruati destination par wapas nahi bhejta.",
    },
    related: ["NavController", "NavHost"],
  },

  toRoute: {
    term: "toRoute",
    kind: { en: "Extension function", hi: "Extension function", "hi-en": "Extension function" },
    source: "jetpack",
    importLine: "import androidx.navigation.toRoute",
    does: {
      en: "Reads a destination's typed arguments back out of its back stack entry.",
      hi: "किसी destination के type वाले arguments उसकी back stack entry से वापस पढ़ता है।",
      "hi-en": "Kisi destination ke type wale arguments uski back stack entry se wapas padhta hai.",
    },
    affects: {
      en: "Because the route is a `@Serializable` type, a wrong argument is a compile error rather than a malformed string. The arguments still ride in saved state, so they must stay small — pass an id, not an object.",
      hi: "Route एक `@Serializable` type है, इसलिए गलत argument बिगड़ी हुई string नहीं बल्कि compile error है। Arguments फिर भी saved state में सवारी करते हैं, तो उन्हें छोटा रहना है — id भेजिए, object नहीं।",
      "hi-en": "Route ek `@Serializable` type hai, isliye galat argument bigdi hui string nahi balki compile error hai. Arguments phir bhi saved state mein sawari karte hain, to unhe chhota rehna hai — id bhejiye, object nahi.",
    },
    related: ["NavHost", "NavController"],
  },

  animateFloatAsState: {
    term: "animateFloatAsState",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.animation.core.animateFloatAsState",
    does: {
      en: "Animates a value towards whatever the current state says, and returns it as `State`.",
      hi: "किसी value को उस तरफ चलाता है जो मौजूदा state कहती है, और उसे `State` की तरह लौटाता है।",
      "hi-en": "Kisi value ko us taraf chalata hai jo maujooda state kehti hai, aur use `State` ki tarah lautata hai.",
    },
    values: {
      en: "There is one per type: `animateDpAsState`, `animateColorAsState`, `animateIntOffsetAsState`, and more.",
      hi: "हर type के लिए एक है: `animateDpAsState`, `animateColorAsState`, `animateIntOffsetAsState`, वगैरह।",
      "hi-en": "Har type ke liye ek hai: `animateDpAsState`, `animateColorAsState`, `animateIntOffsetAsState`, waghairah.",
    },
    affects: {
      en: "Changing the target mid-flight redirects from where the value currently is rather than restarting — the behaviour you want on a double tap. Reading the result in composition recomposes on every frame, so prefer a lambda modifier such as `graphicsLayer`.",
      hi: "बीच रास्ते में निशाना बदलने पर वह दोबारा शुरू होने के बजाय जहाँ है वहीं से मुड़ जाता है — दो बार tap करने पर यही चाहिए। नतीजा composition में पढ़ना हर frame पर recompose कराता है, इसलिए `graphicsLayer` जैसा lambda वाला modifier बेहतर है।",
      "hi-en": "Beech raste mein nishana badalne par wo dobara shuru hone ke bajaye jahan hai wahin se mud jata hai — do baar tap karne par yahi chahiye. Result composition mein padhna har frame par recompose karata hai, isliye `graphicsLayer` jaisa lambda wala modifier behtar hai.",
    },
    related: ["updateTransition", "Animatable", "spring", "graphicsLayer"],
  },

  updateTransition: {
    term: "updateTransition",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.animation.core.updateTransition",
    does: {
      en: "Drives several animated values from one target state, so they start and finish together.",
      hi: "एक ही निशाने से कई animate होती values चलाता है, तो वे साथ शुरू होती हैं और साथ खत्म।",
      "hi-en": "Ek hi nishane se kai animate hoti values chalata hai, to wo saath shuru hoti hain aur saath khatam.",
    },
    affects: {
      en: "Three separate `animate*AsState` calls each run their own clock and drift apart under load. A transition also shows up as one thing in Android Studio's animation tooling.",
      hi: "तीन अलग `animate*AsState` calls अपनी-अपनी घड़ी चलाती हैं और बोझ पड़ने पर बिखर जाती हैं। Transition Android Studio के animation वाले औजार में भी एक ही चीज की तरह दिखता है।",
      "hi-en": "Teen alag `animate*AsState` calls apni-apni ghadi chalati hain aur bojh padne par bikhar jati hain. Transition Android Studio ke animation wale auzar mein bhi ek hi cheez ki tarah dikhta hai.",
    },
    related: ["animateFloatAsState", "AnimatedVisibility"],
  },

  AnimatedVisibility: {
    term: "AnimatedVisibility",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.animation.AnimatedVisibility",
    does: {
      en: "Animates content in and out as a boolean changes.",
      hi: "किसी boolean के बदलने पर content को आते और जाते हुए animate करता है।",
      "hi-en": "Kisi boolean ke badalne par content ko aate aur jate hue animate karta hai.",
    },
    values: {
      en: "`enter` and `exit` take combinations joined with `+`: `fadeIn()`, `slideInVertically()`, `expandVertically()`, and their exit counterparts.",
      hi: "`enter` और `exit` `+` से जुड़े जोड़ लेते हैं: `fadeIn()`, `slideInVertically()`, `expandVertically()`, और उनके जाने वाले जोड़ीदार।",
      "hi-en": "`enter` aur `exit` `+` se jude jod lete hain: `fadeIn()`, `slideInVertically()`, `expandVertically()`, aur unke jane wale jodidar.",
    },
    affects: {
      en: "The content stays composed until the exit animation finishes, so anything expensive inside it lives a little longer than the boolean suggests.",
      hi: "Exit वाली animation पूरी होने तक content composed रहता है, तो उसके अंदर की कोई भारी चीज उस boolean के बताए से थोड़ा ज्यादा जीती है।",
      "hi-en": "Exit wali animation poori hone tak content composed rehta hai, to uske andar ki koi bhaari cheez us boolean ke bataye se thoda zyada jeeti hai.",
    },
    related: ["AnimatedContent", "updateTransition"],
  },

  AnimatedContent: {
    term: "AnimatedContent",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.animation.AnimatedContent",
    does: {
      en: "Animates the swap when one piece of content replaces another.",
      hi: "जब एक content की जगह दूसरा आता है, तो उस अदला-बदली को animate करता है।",
      "hi-en": "Jab ek content ki jagah doosra aata hai, to us adla-badli ko animate karta hai.",
    },
    affects: {
      en: "Use the state the lambda hands you, not the outer variable. During the transition both the old and new content are on screen, and reading the outer value makes the outgoing content show the incoming data — a flash of the wrong screen on every change.",
      hi: "वही state लीजिए जो lambda आपको देता है, बाहर वाला variable नहीं। बदलाव के दौरान पुराना और नया दोनों content screen पर होते हैं, और बाहर वाली value पढ़ने से जाता हुआ content आने वाला data दिखाने लगता है — हर बदलाव पर गलत screen की एक झलक।",
      "hi-en": "Wahi state lijiye jo lambda aapko deta hai, bahar wala variable nahi. Badlaav ke dauran purana aur naya dono content screen par hote hain, aur bahar wali value padhne se jata hua content aane wala data dikhane lagta hai — har badlaav par galat screen ki ek jhalak.",
    },
    related: ["AnimatedVisibility", "updateTransition"],
  },

  Animatable: {
    term: "Animatable",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "compose",
    importLine: "import androidx.compose.animation.core.Animatable",
    does: {
      en: "An animated value you drive yourself from a coroutine, with `snapTo`, `animateTo` and `stop`.",
      hi: "ऐसी animate होती value जिसे आप खुद किसी coroutine से चलाते हैं — `snapTo`, `animateTo` और `stop` के साथ।",
      "hi-en": "Aisi animate hoti value jise aap khud kisi coroutine se chalate hain — `snapTo`, `animateTo` aur `stop` ke saath.",
    },
    affects: {
      en: "It carries velocity, so releasing a drag continues naturally instead of jumping — which is why gestures need this and not `animate*AsState`, where you cannot snap to a value or stop mid-flight.",
      hi: "यह रफ्तार साथ रखता है, तो खिंचाव छोड़ने पर वह कूदने के बजाय सहज आगे बढ़ता है — इसीलिए इशारों को यह चाहिए, `animate*AsState` नहीं, जहाँ न किसी value पर कुदाया जा सकता है न बीच में रोका।",
      "hi-en": "Ye raftar saath rakhta hai, to khinchav chhodne par wo koodne ke bajaye sehaj aage badhta hai — isiliye isharon ko ye chahiye, `animate*AsState` nahi, jahan na kisi value par kudaya ja sakta hai na beech mein roka.",
    },
    related: ["animateFloatAsState", "draggable", "spring"],
  },

  spring: {
    term: "spring",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.animation.core.spring",
    does: {
      en: "An animation spec with no fixed duration, described by damping and stiffness.",
      hi: "बिना तय अवधि वाला animation spec, जो damping और stiffness से बताया जाता है।",
      "hi-en": "Bina tay avadhi wala animation spec, jo damping aur stiffness se bataya jata hai.",
    },
    affects: {
      en: "It is the default, and usually the right answer: an interrupted spring carries its velocity into the new target instead of restarting, which is exactly what stops fast taps feeling unresponsive. Use `tween` only when a duration is genuinely part of the design.",
      hi: "यही default है, और आमतौर पर सही जवाब भी: बीच में टोकी गई spring दोबारा शुरू होने के बजाय अपनी रफ्तार नए निशाने तक ले जाती है, और तेज taps पर UI का सुस्त लगना इसी से रुकता है। `tween` तभी लीजिए जब अवधि सच में design का हिस्सा हो।",
      "hi-en": "Yahi default hai, aur aam taur par sahi jawab bhi: beech mein toki gayi spring dobara shuru hone ke bajaye apni raftar naye nishane tak le jati hai, aur tez taps par UI ka sust lagna isi se rukta hai. `tween` tabhi lijiye jab avadhi sach mein design ka hissa ho.",
    },
    related: ["tween", "animateFloatAsState", "Animatable"],
  },

  tween: {
    term: "tween",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.animation.core.tween",
    does: {
      en: "An animation spec with a fixed duration and an easing curve.",
      hi: "तय अवधि और easing वाले घुमाव के साथ एक animation spec।",
      "hi-en": "Tay avadhi aur easing wale ghumav ke saath ek animation spec.",
    },
    affects: {
      en: "A fixed duration means an interrupted animation restarts rather than redirecting, which is what makes a screen feel unresponsive under fast taps. Right for a progress bar or a timed reveal; wrong as a default.",
      hi: "तय अवधि का मतलब है कि टोकी गई animation मुड़ने के बजाय दोबारा शुरू होती है, और जल्दी-जल्दी taps पर screen का सुस्त लगना इसी से आता है। किसी progress bar या समय से खुलने वाली चीज के लिए सही; default के तौर पर गलत।",
      "hi-en": "Tay avadhi ka matlab hai ki toki gayi animation mudne ke bajaye dobara shuru hoti hai, aur jaldi-jaldi taps par screen ka sust lagna isi se aata hai. Kisi progress bar ya samay se khulne wali cheez ke liye sahi; default ke taur par galat.",
    },
    related: ["spring", "animateFloatAsState"],
  },

  AndroidView: {
    term: "AndroidView",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "compose",
    importLine: "import androidx.compose.ui.viewinterop.AndroidView",
    does: {
      en: "Puts a real `View` inside a composition.",
      hi: "किसी असली `View` को composition के अंदर रखता है।",
      "hi-en": "Kisi asli `View` ko composition ke andar rakhta hai.",
    },
    values: {
      en: "`factory` constructs the view once, `update` runs whenever the state it reads changes, and `onRelease` cleans up when it leaves.",
      hi: "`factory` view एक बार बनाता है, `update` तब चलता है जब उसकी पढ़ी हुई state बदले, और `onRelease` उसके जाते वक्त सफाई करता है।",
      "hi-en": "`factory` view ek baar banata hai, `update` tab chalta hai jab uski padhi hui state badle, aur `onRelease` uske jate waqt safai karta hai.",
    },
    affects: {
      en: "Constructing the view anywhere but `factory` creates a new one on every recomposition and leaks the old ones. A view with its own lifecycle, such as `MapView` or `WebView`, must also be told about the surrounding lifecycle or it keeps working in the background.",
      hi: "View को `factory` के अलावा कहीं भी बनाना हर recomposition पर एक नई बना देता है और पुरानी leak होती जाती हैं। जिस view का अपना lifecycle है, जैसे `MapView` या `WebView`, उसे आस-पास के lifecycle की खबर भी देनी पड़ती है, वरना वह पीछे चलता रहता है।",
      "hi-en": "View ko `factory` ke alawa kahin bhi banana har recomposition par ek nai bana deta hai aur purani leak hoti jati hain. Jis view ka apna lifecycle hai, jaise `MapView` ya `WebView`, use aas-paas ke lifecycle ki khabar bhi deni padti hai, warna wo peeche chalta rehta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/migrate/interoperability-apis",
    related: ["ComposeView", "View", "DisposableEffect"],
  },

  ComposeView: {
    term: "ComposeView",
    kind: { en: "View class", hi: "View class", "hi-en": "View class" },
    source: "compose",
    importLine: "import androidx.compose.ui.platform.ComposeView",
    does: {
      en: "A real `View` that hosts a composition, so Compose can live inside an XML layout.",
      hi: "एक असली `View`, जिसके अंदर composition रहती है, ताकि Compose किसी XML layout के अंदर रह सके।",
      "hi-en": "Ek asli `View`, jiske andar composition rehti hai, taki Compose kisi XML layout ke andar reh sake.",
    },
    affects: {
      en: "It starts a new composition, so `MaterialTheme` and any composition local must be provided again inside its `setContent` — otherwise the embedded Compose renders with Material defaults and looks like a different app inside your own screen.",
      hi: "यह एक नई composition शुरू करता है, तो `MaterialTheme` और कोई भी composition local उसके `setContent` के अंदर दोबारा देना पड़ता है — वरना अंदर रखा Compose Material के defaults से बनता है और आपकी अपनी screen के अंदर किसी और app जैसा दिखता है।",
      "hi-en": "Ye ek nai composition shuru karta hai, to `MaterialTheme` aur koi bhi composition local uske `setContent` ke andar dobara dena padta hai — warna andar rakha Compose Material ke defaults se banta hai aur aapki apni screen ke andar kisi aur app jaisa dikhta hai.",
    },
    related: ["ViewCompositionStrategy", "AndroidView", "setContent"],
  },

  ViewCompositionStrategy: {
    term: "ViewCompositionStrategy",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "compose",
    importLine: "import androidx.compose.ui.platform.ViewCompositionStrategy",
    does: {
      en: "Decides when a `ComposeView` disposes its composition.",
      hi: "तय करता है कि `ComposeView` अपनी composition कब खत्म करे।",
      "hi-en": "Tay karta hai ki `ComposeView` apni composition kab khatam kare.",
    },
    values: {
      en: "`DisposeOnViewTreeLifecycleDestroyed` for a fragment or a `RecyclerView` row; `DisposeOnDetachedFromWindowOrReleasedFromPool` for a pooled view. The window-based default suits only a view that lives as long as its activity.",
      hi: "किसी fragment या `RecyclerView` की row के लिए `DisposeOnViewTreeLifecycleDestroyed`; pool में रखी view के लिए `DisposeOnDetachedFromWindowOrReleasedFromPool`। Window वाला default सिर्फ उस view के लिए ठीक है जो अपनी activity जितनी जीती है।",
      "hi-en": "Kisi fragment ya `RecyclerView` ki row ke liye `DisposeOnViewTreeLifecycleDestroyed`; pool mein rakhi view ke liye `DisposeOnDetachedFromWindowOrReleasedFromPool`. Window wala default sirf us view ke liye theek hai jo apni activity jitni jeeti hai.",
    },
    affects: {
      en: "A fragment's view can be destroyed while the window stays, so the default lets the composition outlive its own view, keep observing state and hold a destroyed fragment — the classic fragment view leak, wearing Compose clothes.",
      hi: "Fragment की view window के रहते हुए भी खत्म हो सकती है, तो default composition को अपनी ही view से ज्यादा जीने देता है, वह state देखती रहती है और खत्म हो चुके fragment को पकड़े रहती है — वही जाना-पहचाना fragment view leak, Compose के कपड़ों में।",
      "hi-en": "Fragment ki view window ke rehte hue bhi khatam ho sakti hai, to default composition ko apni hi view se zyada jeene deta hai, wo state dekhti rehti hai aur khatam ho chuke fragment ko pakde rehti hai — wahi jana-pehchana fragment view leak, Compose ke kapdon mein.",
    },
    related: ["ComposeView", "viewLifecycleOwner"],
  },

  currentWindowAdaptiveInfo: {
    term: "currentWindowAdaptiveInfo",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.material3.adaptive.currentWindowAdaptiveInfo",
    does: {
      en: "Reports the size class of the window the app currently occupies.",
      hi: "App अभी जिस window में है उसका size class बताता है।",
      "hi-en": "App abhi jis window mein hai uska size class batata hai.",
    },
    values: {
      en: "Width classes are `COMPACT` under 600dp, `MEDIUM` from 600 to 840dp, and `EXPANDED` above that.",
      hi: "Width के class हैं: 600dp से कम पर `COMPACT`, 600 से 840dp तक `MEDIUM`, और उससे ऊपर `EXPANDED`।",
      "hi-en": "Width ke class hain: 600dp se kam par `COMPACT`, 600 se 840dp tak `MEDIUM`, aur usse upar `EXPANDED`.",
    },
    affects: {
      en: "It describes the window, not the device, which is why it is correct in split screen, on a half-opened foldable and in a resized desktop window — all cases where a `screenWidthDp` check on device type gives the wrong answer.",
      hi: "यह window के बारे में बताता है, device के बारे में नहीं, इसीलिए split screen में, आधे खुले किसी मुड़ने वाले phone पर और नाप बदले हुए desktop window में यह सही रहता है — वे सारी हालतें जहाँ device के प्रकार वाली `screenWidthDp` की जाँच गलत जवाब देती है।",
      "hi-en": "Ye window ke baare mein batata hai, device ke baare mein nahi, isiliye split screen mein, aadhe khule kisi mudne wale phone par aur naap badle hue desktop window mein ye sahi rehta hai — wo saari haalatein jahan device ke prakar wala `screenWidthDp` check galat jawab deta hai.",
    },
    docs: "https://developer.android.com/develop/ui/compose/layouts/adaptive",
    related: ["LazyVerticalGrid", "MaterialTheme"],
  },
};
