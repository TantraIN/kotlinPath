import type { Glossary } from "./types";

/**
 * Layout XML: the attributes and element names of the view system.
 *
 * Keyed `xml:` for the same reason the manifest set is — `id`, `style`,
 * `orientation` and `item` are far too generic to claim in Kotlin code, and
 * `theme` already means something different in a manifest. These resolve only
 * inside XML blocks. `term` holds the name a reader actually sees, which for an
 * attribute includes its namespace prefix.
 */
export const LAYOUT_GLOSSARY: Glossary = {
  "xml:layout_width": {
    term: "android:layout_width",
    kind: { en: "Layout attribute", hi: "Layout attribute", "hi-en": "Layout attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Tells the parent how wide this view wants to be.",
      hi: "parent को बताता है कि यह view कितनी चौड़ी होना चाहती है।",
      "hi-en": "Parent ko batata hai ki ye view kitni chaudi hona chahti hai.",
    },
    values: {
      en: "`match_parent` — as wide as the parent allows. `wrap_content` — only as wide as the content. A dimension such as `16dp`. `0dp` — inside a `LinearLayout` with `layout_weight`, or inside a `ConstraintLayout` meaning match constraints.",
      hi: "`match_parent` — जितना parent देने दे। `wrap_content` — जितना content है उतना ही। कोई नाप जैसे `16dp`। `0dp` — `LinearLayout` में `layout_weight` के साथ, या `ConstraintLayout` में मतलब constraints जितना।",
      "hi-en": "`match_parent` — jitna parent dene de. `wrap_content` — jitna content hai utna hi. Koi naap jaise `16dp`. `0dp` — `LinearLayout` mein `layout_weight` ke saath, ya `ConstraintLayout` mein matlab constraints jitna.",
    },
    affects: {
      en: "It is a request, not a decision — the parent's `MeasureSpec` can still overrule it. Leaving it out is a compile error in every `ViewGroup`.",
      hi: "यह माँग है, फैसला नहीं — parent का `MeasureSpec` इसे फिर भी काट सकता है। इसे छोड़ देना हर `ViewGroup` में compile error है।",
      "hi-en": "Ye maang hai, faisla nahi — parent ka `MeasureSpec` ise phir bhi kaat sakta hai. Ise chhod dena har `ViewGroup` mein compile error hai.",
    },
    docs: "https://developer.android.com/reference/android/view/ViewGroup.LayoutParams",
    related: ["xml:layout_height", "xml:layout_weight", "MeasureSpec"],
  },

  "xml:layout_height": {
    term: "android:layout_height",
    kind: { en: "Layout attribute", hi: "Layout attribute", "hi-en": "Layout attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Tells the parent how tall this view wants to be.",
      hi: "parent को बताता है कि यह view कितनी ऊँची होना चाहती है।",
      "hi-en": "Parent ko batata hai ki ye view kitni oonchi hona chahti hai.",
    },
    values: {
      en: "The same three as width: `match_parent`, `wrap_content`, a dimension, or `0dp` when a weight or constraints decide it.",
      hi: "चौड़ाई जैसे ही तीन: `match_parent`, `wrap_content`, कोई नाप, या `0dp` जब weight या constraints तय करें।",
      "hi-en": "Chaudai jaise hi teen: `match_parent`, `wrap_content`, koi naap, ya `0dp` jab weight ya constraints tay karein.",
    },
    affects: {
      en: "`wrap_content` inside a scrolling parent measures the child with `UNSPECIFIED`, which is why a nested `RecyclerView` set to wrap can measure its whole dataset at once.",
      hi: "scroll करने वाले parent के अंदर `wrap_content` बच्चे को `UNSPECIFIED` से measure करता है, इसीलिए अंदर रखी `RecyclerView` को wrap करने पर वह पूरा data एक बार में measure कर सकती है।",
      "hi-en": "Scroll karne wale parent ke andar `wrap_content` bachche ko `UNSPECIFIED` se measure karta hai, isiliye andar rakhi `RecyclerView` ko wrap karne par wo poora data ek baar mein measure kar sakti hai.",
    },
    related: ["xml:layout_width", "MeasureSpec"],
  },

  "xml:layout_weight": {
    term: "android:layout_weight",
    kind: { en: "LinearLayout attribute", hi: "LinearLayout attribute", "hi-en": "LinearLayout attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Splits the leftover space in a `LinearLayout` between its children in the given proportion.",
      hi: "`LinearLayout` में बची हुई जगह उसके बच्चों में दिए गए अनुपात से बाँटता है।",
      "hi-en": "`LinearLayout` mein bachi hui jagah uske bachchon mein diye gaye anupat se baantta hai.",
    },
    values: {
      en: "Any positive number. Only the ratio between siblings matters, so `1` and `2` behave exactly like `10` and `20`.",
      hi: "कोई भी धनात्मक संख्या। सिर्फ भाई-बहनों के बीच का अनुपात मायने रखता है, तो `1` और `2` ठीक वैसे ही बरतते हैं जैसे `10` और `20`।",
      "hi-en": "Koi bhi positive number. Sirf bhai-behnon ke beech ka anupat maayne rakhta hai, to `1` aur `2` theek waise hi bartte hain jaise `10` aur `20`.",
    },
    affects: {
      en: "It divides only what is *left over*, so the matching `layout_width` or `layout_height` must be `0dp`. With `wrap_content` the child takes its natural size first and the split comes out wrong.",
      hi: "यह सिर्फ *बची हुई* जगह बाँटता है, इसलिए उससे जुड़ी `layout_width` या `layout_height` `0dp` होनी चाहिए। `wrap_content` के साथ बच्चा पहले अपनी सहज जगह ले लेता है और बँटवारा गलत निकलता है।",
      "hi-en": "Ye sirf *bachi hui* jagah baantta hai, isliye usse judi `layout_width` ya `layout_height` `0dp` honi chahiye. `wrap_content` ke saath bachcha pehle apni sehaj jagah le leta hai aur bantwara galat nikalta hai.",
    },
    related: ["xml:LinearLayout", "xml:layout_width", "xml:orientation"],
  },

  "xml:orientation": {
    term: "android:orientation",
    kind: { en: "LinearLayout attribute", hi: "LinearLayout attribute", "hi-en": "LinearLayout attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Says whether a `LinearLayout` stacks its children in a row or a column.",
      hi: "बताता है कि `LinearLayout` अपने बच्चों को आड़े लगाएगा या खड़े।",
      "hi-en": "Batata hai ki `LinearLayout` apne bachchon ko aade lagayega ya khade.",
    },
    values: {
      en: "`vertical` or `horizontal`. There is no default worth relying on — the framework treats a missing value as horizontal, which is almost never what was meant.",
      hi: "`vertical` या `horizontal`। भरोसे लायक कोई default है नहीं — न लिखने पर framework इसे horizontal मानता है, जो लगभग कभी मतलब नहीं होता।",
      "hi-en": "`vertical` ya `horizontal`. Bharose layak koi default hai nahi — na likhne par framework ise horizontal manta hai, jo lagbhag kabhi matlab nahi hota.",
    },
    affects: {
      en: "It decides which axis `layout_weight` divides, so a weight that seems to do nothing is usually a weight on the wrong axis.",
      hi: "यह तय करता है कि `layout_weight` किस दिशा में बाँटेगा, इसलिए जो weight कुछ करता ही नहीं दिखता वह आमतौर पर गलत दिशा वाला weight है।",
      "hi-en": "Ye tay karta hai ki `layout_weight` kis disha mein baantega, isliye jo weight kuch karta hi nahi dikhta wo aam taur par galat disha wala weight hai.",
    },
    related: ["xml:LinearLayout", "xml:layout_weight"],
  },

  "xml:layout_gravity": {
    term: "android:layout_gravity",
    kind: { en: "Layout attribute", hi: "Layout attribute", "hi-en": "Layout attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Positions this view inside the space its parent gave it.",
      hi: "parent ने जो जगह दी है उसके अंदर इस view को रखता है।",
      "hi-en": "Parent ne jo jagah di hai uske andar is view ko rakhta hai.",
    },
    values: {
      en: "`start`, `end`, `top`, `bottom`, `center`, `center_horizontal`, `center_vertical`, combined with `|`.",
      hi: "`start`, `end`, `top`, `bottom`, `center`, `center_horizontal`, `center_vertical`, जो `|` से जोड़े जा सकते हैं।",
      "hi-en": "`start`, `end`, `top`, `bottom`, `center`, `center_horizontal`, `center_vertical`, jo `|` se jode ja sakte hain.",
    },
    affects: {
      en: "It is not `android:gravity`, which arranges a view's own contents. Mixing the two up is the single most common layout confusion — one moves the box, the other moves what is inside it.",
      hi: "यह `android:gravity` नहीं है, जो view के अपने अंदर की चीजें लगाता है। इन दोनों को उलट देना layout की सबसे आम गलतफहमी है — एक डिब्बे को हिलाता है, दूसरा उसके अंदर की चीज को।",
      "hi-en": "Ye `android:gravity` nahi hai, jo view ke apne andar ki cheezein lagata hai. In dono ko ulat dena layout ki sabse aam galatfehmi hai — ek dibbe ko hilata hai, doosra uske andar ki cheez ko.",
    },
    related: ["xml:gravity", "xml:FrameLayout"],
  },

  "xml:gravity": {
    term: "android:gravity",
    kind: { en: "View attribute", hi: "View attribute", "hi-en": "View attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Positions a view's own content inside itself — the text inside a `TextView`, the children inside a `LinearLayout`.",
      hi: "view की अपनी चीज को उसके अपने अंदर रखता है — `TextView` के अंदर का text, `LinearLayout` के अंदर के बच्चे।",
      "hi-en": "View ki apni cheez ko uske apne andar rakhta hai — `TextView` ke andar ka text, `LinearLayout` ke andar ke bachche.",
    },
    values: {
      en: "The same set as `layout_gravity`, combined with `|`.",
      hi: "`layout_gravity` जैसा ही समूह, `|` से जोड़ा हुआ।",
      "hi-en": "`layout_gravity` jaisa hi samooh, `|` se joda hua.",
    },
    affects: {
      en: "On a `wrap_content` view it does nothing visible, because there is no spare room inside to move the content around in.",
      hi: "`wrap_content` वाली view पर यह कुछ दिखाई देने लायक नहीं करता, क्योंकि अंदर हिलाने-डुलाने के लिए फालतू जगह होती ही नहीं।",
      "hi-en": "`wrap_content` wali view par ye kuch dikhai dene layak nahi karta, kyunki andar hilane-dulane ke liye faltu jagah hoti hi nahi.",
    },
    related: ["xml:layout_gravity", "xml:TextView"],
  },

  "xml:id": {
    term: "android:id",
    kind: { en: "View attribute", hi: "View attribute", "hi-en": "View attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Gives a view a name that code, constraints and saved state can refer to.",
      hi: "view को एक नाम देता है जिससे code, constraints और सँभाला हुआ state उसे पहचान सकें।",
      "hi-en": "View ko ek naam deta hai jisse code, constraints aur sambhala hua state use pehchan sakein.",
    },
    values: {
      en: "`@+id/name` creates the id, `@id/name` refers to one that already exists.",
      hi: "`@+id/name` id बनाता है, `@id/name` पहले से बनी हुई id की तरफ इशारा करता है।",
      "hi-en": "`@+id/name` id banata hai, `@id/name` pehle se bani hui id ki taraf ishara karta hai.",
    },
    affects: {
      en: "Only views with an id get a `ViewBinding` field, and only views with an id have their state saved across a rotation — an `EditText` without one silently loses what the user typed.",
      hi: "`ViewBinding` में field सिर्फ id वाली views को मिलती है, और state भी सिर्फ id वाली views का rotation में सँभलता है — बिना id वाला `EditText` user का लिखा चुपचाप खो देता है।",
      "hi-en": "`ViewBinding` mein field sirf id wali views ko milti hai, aur state bhi sirf id wali views ka rotation mein sambhalta hai — bina id wala `EditText` user ka likha chupchap kho deta hai.",
    },
    related: ["findViewById", "onSaveInstanceState"],
  },

  "xml:style": {
    term: "style",
    kind: { en: "Attribute and element", hi: "Attribute और element", "hi-en": "Attribute aur element" },
    source: "android",
    importLine: "res/values/styles.xml",
    does: {
      en: "As an element, names a bundle of attribute values. As an attribute on a view, applies one.",
      hi: "element के रूप में attribute values के एक गट्ठर को नाम देता है। view पर attribute के रूप में उनमें से एक लगाता है।",
      "hi-en": "Element ke roop mein attribute values ke ek gatthar ko naam deta hai. View par attribute ke roop mein unmein se ek lagata hai.",
    },
    values: {
      en: "`@style/Name`. It carries no namespace prefix — it is `style=`, never `android:style=`.",
      hi: "`@style/Name`। इस पर कोई namespace नहीं लगता — यह `style=` है, `android:style=` कभी नहीं।",
      "hi-en": "`@style/Name`. Is par koi namespace nahi lagta — ye `style=` hai, `android:style=` kabhi nahi.",
    },
    affects: {
      en: "An attribute written directly on the view beats the style. Extend with `parent=` rather than copying a block, or your widget freezes at the library version you copied from.",
      hi: "view पर सीधे लिखा attribute style से ऊपर है। नकल करने के बजाय `parent=` से बढ़ाइए, वरना आपका widget उसी library version पर जम जाएगा जहाँ से आपने नकल की।",
      "hi-en": "View par seedhe likha attribute style se upar hai. Nakal karne ke bajaye `parent=` se badhaiye, warna aapka widget usi library version par jam jayega jahan se aapne nakal ki.",
    },
    related: ["xml:item", "xml:theme"],
  },

  "xml:item": {
    term: "<item>",
    kind: { en: "Resource element", hi: "Resource element", "hi-en": "Resource element" },
    source: "android",
    importLine: "res/values/*.xml",
    does: {
      en: "One named attribute value inside a style or theme.",
      hi: "किसी style या theme के अंदर एक नाम वाली attribute value।",
      "hi-en": "Kisi style ya theme ke andar ek naam wali attribute value.",
    },
    values: {
      en: "Its `name` is the attribute being set — `colorPrimary`, `textSize`, `materialButtonStyle` — and its body is the value.",
      hi: "इसका `name` वह attribute है जो तय हो रहा है — `colorPrimary`, `textSize`, `materialButtonStyle` — और इसके अंदर उसकी value।",
      "hi-en": "Iska `name` wo attribute hai jo tay ho raha hai — `colorPrimary`, `textSize`, `materialButtonStyle` — aur iske andar uski value.",
    },
    affects: {
      en: "In a theme, an item named after a widget's default style attribute restyles every one of those widgets in the app without touching a single layout.",
      hi: "theme में जिस item का नाम किसी widget के default style attribute जैसा हो, वह app के हर उस widget की शक्ल बदल देता है, बिना किसी layout को छुए।",
      "hi-en": "Theme mein jis item ka naam kisi widget ke default style attribute jaisa ho, wo app ke har us widget ki shakal badal deta hai, bina kisi layout ko chhue.",
    },
    related: ["xml:style", "xml:theme"],
  },

  "xml:background": {
    term: "android:background",
    kind: { en: "View attribute", hi: "View attribute", "hi-en": "View attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Sets the drawable or colour painted behind a view's content.",
      hi: "view के content के पीछे रंगा जाने वाला drawable या रंग तय करता है।",
      "hi-en": "View ke content ke peeche ranga jane wala drawable ya rang tay karta hai.",
    },
    values: {
      en: "A colour (`@color/…`, `?attr/…`, a literal) or a drawable (`@drawable/…`).",
      hi: "कोई रंग (`@color/…`, `?attr/…`, या सीधे लिखा हुआ) या कोई drawable (`@drawable/…`)।",
      "hi-en": "Koi rang (`@color/…`, `?attr/…`, ya seedhe likha hua) ya koi drawable (`@drawable/…`).",
    },
    affects: {
      en: "Material components build their shape, ripple and elevation *into* the background drawable, so setting this on a `MaterialButton` throws all three away. Use `app:backgroundTint` there instead.",
      hi: "Material components अपनी shape, ripple और elevation background drawable के *अंदर* ही बनाते हैं, इसलिए `MaterialButton` पर यह लगाने से तीनों चले जाते हैं। वहाँ `app:backgroundTint` इस्तेमाल कीजिए।",
      "hi-en": "Material components apni shape, ripple aur elevation background drawable ke *andar* hi banate hain, isliye `MaterialButton` par ye lagane se teenon chale jate hain. Wahan `app:backgroundTint` istemal kijiye.",
    },
    related: ["xml:MaterialButton", "xml:style"],
  },

  "xml:src": {
    term: "android:src",
    kind: { en: "ImageView attribute", hi: "ImageView attribute", "hi-en": "ImageView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Sets the drawable an `ImageView` shows.",
      hi: "`ImageView` जो drawable दिखाएगी वह तय करता है।",
      "hi-en": "`ImageView` jo drawable dikhayegi wo tay karta hai.",
    },
    values: {
      en: "`@drawable/…` or `@mipmap/…`. `app:srcCompat` is the AppCompat version, needed for vector tinting on older devices.",
      hi: "`@drawable/…` या `@mipmap/…`। `app:srcCompat` इसका AppCompat वाला रूप है, जो पुराने devices पर vector की tinting के लिए चाहिए।",
      "hi-en": "`@drawable/…` ya `@mipmap/…`. `app:srcCompat` iska AppCompat wala roop hai, jo purane devices par vector ki tinting ke liye chahiye.",
    },
    affects: {
      en: "It sets the image but not how it fills the view — that is `scaleType`, and leaving it at the default letterboxes photos.",
      hi: "यह तस्वीर तय करता है, यह नहीं कि वह view में कैसे भरेगी — वह `scaleType` है, और उसे default पर छोड़ने से photos के इर्द-गिर्द खाली पट्टियाँ रह जाती हैं।",
      "hi-en": "Ye tasveer tay karta hai, ye nahi ki wo view mein kaise bharegi — wo `scaleType` hai, aur use default par chhodne se photos ke ird-gird khaali pattiyan reh jati hain.",
    },
    related: ["xml:scaleType", "xml:ImageView"],
  },

  "xml:scaleType": {
    term: "android:scaleType",
    kind: { en: "ImageView attribute", hi: "ImageView attribute", "hi-en": "ImageView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Decides how an image is fitted into an `ImageView` whose size does not match it.",
      hi: "जब `ImageView` का size तस्वीर से मेल नहीं खाता, तो तस्वीर उसमें कैसे बैठेगी यह तय करता है।",
      "hi-en": "Jab `ImageView` ka size tasveer se mel nahi khata, to tasveer usmein kaise baithegi ye tay karta hai.",
    },
    values: {
      en: "`centerCrop` fills and crops the overflow. `fitCenter` (the default) fits the whole image and leaves gaps. `fitXY` stretches and distorts. `center` does not scale at all.",
      hi: "`centerCrop` भर देता है और बाहर निकला हिस्सा काट देता है। `fitCenter` (default) पूरी तस्वीर बिठाता है और खाली जगह छोड़ता है। `fitXY` खींचकर बिगाड़ देता है। `center` scale करता ही नहीं।",
      "hi-en": "`centerCrop` bhar deta hai aur bahar nikla hissa kaat deta hai. `fitCenter` (default) poori tasveer bithata hai aur khaali jagah chhodta hai. `fitXY` kheenchkar bigaad deta hai. `center` scale karta hi nahi.",
    },
    affects: {
      en: "For avatars and photo tiles the default is almost always wrong — `centerCrop` is what a designer means by a filled thumbnail.",
      hi: "avatars और photo tiles के लिए default लगभग हमेशा गलत होता है — भरे हुए thumbnail से designer का मतलब `centerCrop` होता है।",
      "hi-en": "Avatars aur photo tiles ke liye default lagbhag hamesha galat hota hai — bhare hue thumbnail se designer ka matlab `centerCrop` hota hai.",
    },
    related: ["xml:src", "xml:ImageView"],
  },

  "xml:textColor": {
    term: "android:textColor",
    kind: { en: "TextView attribute", hi: "TextView attribute", "hi-en": "TextView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Sets the colour a view's text is drawn in.",
      hi: "view का text किस रंग में बनेगा यह तय करता है।",
      "hi-en": "View ka text kis rang mein banega ye tay karta hai.",
    },
    values: {
      en: "`?attr/colorOnSurface` and friends ask the theme. `@color/…` or a literal states a fixed value.",
      hi: "`?attr/colorOnSurface` वगैरह theme से पूछते हैं। `@color/…` या सीधे लिखा रंग एक तय value बताता है।",
      "hi-en": "`?attr/colorOnSurface` waghairah theme se puchte hain. `@color/…` ya seedhe likha rang ek tay value batata hai.",
    },
    affects: {
      en: "A fixed colour here is a dark mode bug that has not happened yet: `values-night` can change what `?attr/` resolves to, but it can never change a literal.",
      hi: "यहाँ लिखा तय रंग dark mode का वह bug है जो अभी हुआ नहीं है: `values-night` `?attr/` का जवाब बदल सकती है, सीधे लिखा रंग कभी नहीं।",
      "hi-en": "Yahan likha tay rang dark mode ka wo bug hai jo abhi hua nahi hai: `values-night` `?attr/` ka jawab badal sakti hai, seedhe likha rang kabhi nahi.",
    },
    related: ["xml:textAppearance", "xml:theme"],
  },

  "xml:textAppearance": {
    term: "android:textAppearance",
    kind: { en: "TextView attribute", hi: "TextView attribute", "hi-en": "TextView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Applies a whole named text style — size, weight, letter spacing and colour — in one attribute.",
      hi: "एक ही attribute में text का पूरा नाम वाला style लगाता है — size, मोटाई, अक्षरों की दूरी और रंग।",
      "hi-en": "Ek hi attribute mein text ka poora naam wala style lagata hai — size, motai, aksharon ki doori aur rang.",
    },
    values: {
      en: "Material 3 roles such as `?attr/textAppearanceDisplayLarge`, `…TitleMedium`, `…BodyLarge`, `…LabelSmall`.",
      hi: "Material 3 की भूमिकाएँ जैसे `?attr/textAppearanceDisplayLarge`, `…TitleMedium`, `…BodyLarge`, `…LabelSmall`।",
      "hi-en": "Material 3 ki bhumikayein jaise `?attr/textAppearanceDisplayLarge`, `…TitleMedium`, `…BodyLarge`, `…LabelSmall`.",
    },
    affects: {
      en: "Using the roles instead of raw `textSize` values is what makes a whole app's typography changeable from one theme file.",
      hi: "सीधे `textSize` लिखने के बजाय ये भूमिकाएँ इस्तेमाल करने से ही पूरी app की typography एक theme file से बदली जा सकती है।",
      "hi-en": "Seedhe `textSize` likhne ke bajaye ye bhumikayein istemal karne se hi poori app ki typography ek theme file se badli ja sakti hai.",
    },
    related: ["xml:textColor", "xml:style", "xml:TextView"],
  },

  "xml:maxLines": {
    term: "android:maxLines",
    kind: { en: "TextView attribute", hi: "TextView attribute", "hi-en": "TextView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Caps how many lines a `TextView` may grow to.",
      hi: "`TextView` ज्यादा से ज्यादा कितनी lines तक बढ़ सकती है, यह बाँधता है।",
      "hi-en": "`TextView` zyada se zyada kitni lines tak badh sakti hai, ye baandhta hai.",
    },
    values: {
      en: "Any positive integer. `1` also stops the text wrapping at all.",
      hi: "कोई भी धनात्मक पूर्णांक। `1` text को अगली line में जाने से भी रोक देता है।",
      "hi-en": "Koi bhi positive integer. `1` text ko agli line mein jane se bhi rok deta hai.",
    },
    affects: {
      en: "On its own it simply cuts the text off mid-word. It needs `ellipsize` alongside it to end in a readable `…` instead.",
      hi: "अकेले यह text को शब्द के बीच से ही काट देता है। पढ़े जाने लायक `…` पर खत्म होने के लिए इसके साथ `ellipsize` चाहिए।",
      "hi-en": "Akele ye text ko shabd ke beech se hi kaat deta hai. Padhe jane layak `…` par khatam hone ke liye iske saath `ellipsize` chahiye.",
    },
    related: ["xml:ellipsize", "xml:TextView"],
  },

  "xml:ellipsize": {
    term: "android:ellipsize",
    kind: { en: "TextView attribute", hi: "TextView attribute", "hi-en": "TextView attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Says where to put the `…` when text does not fit.",
      hi: "text न समाए तो `…` कहाँ लगेगा, यह बताता है।",
      "hi-en": "Text na samaye to `…` kahan lagega, ye batata hai.",
    },
    values: {
      en: "`end` (usual), `start`, `middle` — good for file paths — and `marquee`, which scrolls only while the view has focus.",
      hi: "`end` (आम), `start`, `middle` — file paths के लिए अच्छा — और `marquee`, जो सिर्फ तब चलता है जब view पर focus हो।",
      "hi-en": "`end` (aam), `start`, `middle` — file paths ke liye achha — aur `marquee`, jo sirf tab chalta hai jab view par focus ho.",
    },
    affects: {
      en: "It does nothing without a line cap, so `ellipsize` alone is a common no-op — it needs `maxLines` or `singleLine` to have something to shorten.",
      hi: "lines की हद बताए बिना यह कुछ नहीं करता, इसलिए अकेला `ellipsize` अक्सर बेअसर रहता है — छोटा करने के लिए इसे `maxLines` या `singleLine` चाहिए।",
      "hi-en": "Lines ki had bataye bina ye kuch nahi karta, isliye akela `ellipsize` aksar beasar rehta hai — chhota karne ke liye ise `maxLines` ya `singleLine` chahiye.",
    },
    related: ["xml:maxLines", "xml:TextView"],
  },

  "xml:inputType": {
    term: "android:inputType",
    kind: { en: "EditText attribute", hi: "EditText attribute", "hi-en": "EditText attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Tells the keyboard what kind of text this field expects.",
      hi: "keyboard को बताता है कि इस field में किस तरह का text आने वाला है।",
      "hi-en": "Keyboard ko batata hai ki is field mein kis tarah ka text aane wala hai.",
    },
    values: {
      en: "`text`, `textEmailAddress`, `textPassword`, `textMultiLine`, `number`, `numberDecimal`, `phone`, `date` and others, combined with `|`.",
      hi: "`text`, `textEmailAddress`, `textPassword`, `textMultiLine`, `number`, `numberDecimal`, `phone`, `date` वगैरह, जो `|` से जोड़े जा सकते हैं।",
      "hi-en": "`text`, `textEmailAddress`, `textPassword`, `textMultiLine`, `number`, `numberDecimal`, `phone`, `date` waghairah, jo `|` se jode ja sakte hain.",
    },
    affects: {
      en: "It changes the keyboard, not the data. A `number` field still returns a `String` and can still be pasted into, so parsing and validation stay your job.",
      hi: "यह keyboard बदलता है, data नहीं। `number` वाली field भी `String` ही लौटाती है और उसमें paste भी हो सकता है, इसलिए parse और validation आपके ही जिम्मे हैं।",
      "hi-en": "Ye keyboard badalta hai, data nahi. `number` wali field bhi `String` hi lautati hai aur usmein paste bhi ho sakta hai, isliye parse aur validation aapke hi zimme hain.",
    },
    related: ["xml:imeOptions", "xml:EditText", "xml:TextInputLayout"],
  },

  "xml:imeOptions": {
    term: "android:imeOptions",
    kind: { en: "EditText attribute", hi: "EditText attribute", "hi-en": "EditText attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Sets what the keyboard's action key says and does.",
      hi: "keyboard की action key पर क्या लिखा हो और वह क्या करे, यह तय करता है।",
      "hi-en": "Keyboard ki action key par kya likha ho aur wo kya kare, ye tay karta hai.",
    },
    values: {
      en: "`actionNext`, `actionDone`, `actionSearch`, `actionSend`, `actionGo`.",
      hi: "`actionNext`, `actionDone`, `actionSearch`, `actionSend`, `actionGo`।",
      "hi-en": "`actionNext`, `actionDone`, `actionSearch`, `actionSend`, `actionGo`.",
    },
    affects: {
      en: "`actionNext` only moves on if the next field is actually focusable, which is why the key sometimes appears and does nothing.",
      hi: "`actionNext` तभी आगे बढ़ाता है जब अगली field सच में focus ली जा सकने वाली हो, इसीलिए वह key कभी-कभी दिखती है और कुछ करती नहीं।",
      "hi-en": "`actionNext` tabhi aage badhata hai jab agli field sach mein focus li ja sakne wali ho, isiliye wo key kabhi-kabhi dikhti hai aur kuch karti nahi.",
    },
    related: ["xml:inputType", "xml:EditText"],
  },

  "xml:hint": {
    term: "android:hint",
    kind: { en: "Text field attribute", hi: "Text field attribute", "hi-en": "Text field attribute" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "The label shown in an empty text field.",
      hi: "खाली text field में दिखने वाला label।",
      "hi-en": "Khaali text field mein dikhne wala label.",
    },
    affects: {
      en: "In a `TextInputLayout` it belongs on the *layout*, not on the inner edit text. Put it on the edit text and it cannot float upward, and you end up with two hints stacked on each other.",
      hi: "`TextInputLayout` में यह *layout* पर लगता है, अंदर वाले edit text पर नहीं। Edit text पर लगाएँगे तो वह ऊपर तैर नहीं सकता, और दो hints एक दूसरे पर चढ़े हुए दिखते हैं।",
      "hi-en": "`TextInputLayout` mein ye *layout* par lagta hai, andar wale edit text par nahi. Edit text par lagayenge to wo upar tair nahi sakta, aur do hints ek doosre par chadhe hue dikhte hain.",
    },
    related: ["xml:TextInputLayout", "xml:helperText"],
  },

  "xml:helperText": {
    term: "app:helperText",
    kind: { en: "TextInputLayout attribute", hi: "TextInputLayout attribute", "hi-en": "TextInputLayout attribute" },
    source: "library",
    importLine: "res/layout/*.xml",
    does: {
      en: "Shows a small explanatory line under a text field.",
      hi: "text field के नीचे एक छोटी समझाने वाली line दिखाता है।",
      "hi-en": "Text field ke neeche ek chhoti samjhane wali line dikhata hai.",
    },
    affects: {
      en: "It reserves the vertical space the error message will later use, so setting an error does not make the whole form jump down a line.",
      hi: "यह वह खड़ी जगह पहले से रोक लेता है जिसे बाद में error message लेगा, तो error लगाने पर पूरा form एक line नीचे नहीं कूदता।",
      "hi-en": "Ye wo khadi jagah pehle se rok leta hai jise baad mein error message lega, to error lagane par poora form ek line neeche nahi koodta.",
    },
    related: ["xml:TextInputLayout", "xml:hint"],
  },

  "xml:layout_constraintStart_toStartOf": {
    term: "app:layout_constraintStart_toStartOf",
    kind: { en: "Constraint attribute", hi: "Constraint attribute", "hi-en": "Constraint attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Ties this view's start edge to the start edge of another view or of the parent.",
      hi: "इस view का start किनारा किसी दूसरी view या parent के start किनारे से बाँधता है।",
      "hi-en": "Is view ka start kinara kisi doosri view ya parent ke start kinare se baandhta hai.",
    },
    values: {
      en: "`parent`, or `@id/otherView`. Read the name as: my *Start* goes *to* the *Start of* that.",
      hi: "`parent`, या `@id/otherView`। नाम ऐसे पढ़िए: मेरा *Start*, उसके *Start of* से।",
      "hi-en": "`parent`, ya `@id/otherView`. Naam aise padhiye: mera *Start*, uske *Start of* se.",
    },
    affects: {
      en: "Constraints come in pairs — a view needs one on each axis or it collapses to the top-left corner at run time, even though the editor preview looks fine.",
      hi: "Constraints जोड़ी में आते हैं — हर दिशा में एक चाहिए, वरना चलते वक्त view ऊपर-बाएँ कोने में सिमट जाती है, भले ही editor का preview ठीक दिखे।",
      "hi-en": "Constraints jodi mein aate hain — har disha mein ek chahiye, warna chalte waqt view upar-baayein kone mein simat jati hai, bhale hi editor ka preview theek dikhe.",
    },
    docs: "https://developer.android.com/develop/ui/views/layout/constraint-layout",
    related: ["xml:layout_constraintEnd_toEndOf", "xml:ConstraintLayout"],
  },

  "xml:layout_constraintEnd_toEndOf": {
    term: "app:layout_constraintEnd_toEndOf",
    kind: { en: "Constraint attribute", hi: "Constraint attribute", "hi-en": "Constraint attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Ties this view's end edge to the end edge of another view or of the parent.",
      hi: "इस view का end किनारा किसी दूसरी view या parent के end किनारे से बाँधता है।",
      "hi-en": "Is view ka end kinara kisi doosri view ya parent ke end kinare se baandhta hai.",
    },
    affects: {
      en: "Constrained on both start and end with `layout_width=0dp`, the view stretches between them; with a fixed width it centres between them instead.",
      hi: "start और end दोनों से बँधी हो और `layout_width=0dp` हो तो view उनके बीच फैल जाती है; पक्की चौड़ाई हो तो उनके बीच बीचोंबीच आ जाती है।",
      "hi-en": "Start aur end dono se bandhi ho aur `layout_width=0dp` ho to view unke beech phail jati hai; pakki width ho to unke beech beechonbeech aa jati hai.",
    },
    related: ["xml:layout_constraintStart_toStartOf", "xml:layout_constraintHorizontal_bias"],
  },

  "xml:layout_constraintTop_toTopOf": {
    term: "app:layout_constraintTop_toTopOf",
    kind: { en: "Constraint attribute", hi: "Constraint attribute", "hi-en": "Constraint attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Ties this view's top edge to the top of another view or of the parent.",
      hi: "इस view का ऊपरी किनारा किसी दूसरी view या parent के ऊपरी किनारे से बाँधता है।",
      "hi-en": "Is view ka upari kinara kisi doosri view ya parent ke upari kinare se baandhta hai.",
    },
    affects: {
      en: "Top-to-top on two views is how you align a label with an icon; top-to-bottom is how you stack them. Choosing the wrong one is most of the time spent fighting the editor.",
      hi: "दो views में top-to-top से label और icon एक सीध में आते हैं; top-to-bottom से वे एक के नीचे एक लगते हैं। गलत चुन लेना ही editor से जूझने में लगा ज्यादातर वक्त है।",
      "hi-en": "Do views mein top-to-top se label aur icon ek seedh mein aate hain; top-to-bottom se wo ek ke neeche ek lagte hain. Galat chun lena hi editor se joojhne mein laga zyadatar waqt hai.",
    },
    related: ["xml:layout_constraintStart_toStartOf", "xml:ConstraintLayout"],
  },

  "xml:layout_constraintStart_toEndOf": {
    term: "app:layout_constraintStart_toEndOf",
    kind: { en: "Constraint attribute", hi: "Constraint attribute", "hi-en": "Constraint attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Puts this view's start edge just after another view's end edge.",
      hi: "इस view का start किनारा किसी दूसरी view के end किनारे के ठीक बाद रखता है।",
      "hi-en": "Is view ka start kinara kisi doosri view ke end kinare ke theek baad rakhta hai.",
    },
    affects: {
      en: "It chains to one specific view, so it breaks when that neighbour is hidden with `View.GONE`. A `Barrier` referencing several views is the fix when any of them can disappear.",
      hi: "यह किसी एक तय view से बँधता है, इसलिए वह पड़ोसी `View.GONE` होते ही टूट जाता है। अगर उनमें से कोई भी गायब हो सकता है तो कई views को गिनने वाला `Barrier` इसका इलाज है।",
      "hi-en": "Ye kisi ek tay view se bandhta hai, isliye wo padosi `View.GONE` hote hi toot jata hai. Agar unmein se koi bhi gayab ho sakta hai to kai views ko ginne wala `Barrier` iska ilaaj hai.",
    },
    related: ["xml:Barrier", "xml:layout_constraintStart_toStartOf"],
  },

  "xml:layout_constraintHorizontal_bias": {
    term: "app:layout_constraintHorizontal_bias",
    kind: { en: "Constraint attribute", hi: "Constraint attribute", "hi-en": "Constraint attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Shifts a view along the space between two opposing constraints.",
      hi: "आमने-सामने के दो constraints के बीच की जगह में view को खिसकाता है।",
      "hi-en": "Aamne-saamne ke do constraints ke beech ki jagah mein view ko khiskata hai.",
    },
    values: {
      en: "`0.0` at the start, `0.5` centred (the default), `1.0` at the end.",
      hi: "`0.0` एकदम start पर, `0.5` बीच में (default), `1.0` एकदम end पर।",
      "hi-en": "`0.0` ekdam start par, `0.5` beech mein (default), `1.0` ekdam end par.",
    },
    affects: {
      en: "It only does anything when both opposing constraints exist and the size is not `0dp`, which is why it so often appears to be ignored.",
      hi: "यह तभी कुछ करता है जब आमने-सामने के दोनों constraints हों और size `0dp` न हो, इसीलिए अक्सर लगता है कि इसे अनदेखा किया जा रहा है।",
      "hi-en": "Ye tabhi kuch karta hai jab aamne-saamne ke dono constraints hon aur size `0dp` na ho, isiliye aksar lagta hai ki ise andekha kiya ja raha hai.",
    },
    related: ["xml:layout_constraintStart_toStartOf", "xml:layout_constraintEnd_toEndOf"],
  },

  "xml:constraint_referenced_ids": {
    term: "app:constraint_referenced_ids",
    kind: { en: "Helper attribute", hi: "Helper attribute", "hi-en": "Helper attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Lists the views a `Barrier`, `Group` or `Flow` acts on.",
      hi: "उन views की सूची देता है जिन पर `Barrier`, `Group` या `Flow` काम करता है।",
      "hi-en": "Un views ki list deta hai jin par `Barrier`, `Group` ya `Flow` kaam karta hai.",
    },
    values: {
      en: "Comma-separated ids without the `@id/` prefix and without spaces: `nameLabel,emailLabel,phoneLabel`.",
      hi: "अल्पविराम से अलग की गई ids, बिना `@id/` लगाए और बिना जगह छोड़े: `nameLabel,emailLabel,phoneLabel`।",
      "hi-en": "Comma se alag ki gayi ids, bina `@id/` lagaye aur bina jagah chhode: `nameLabel,emailLabel,phoneLabel`.",
    },
    affects: {
      en: "A space after a comma silently drops that id, so the barrier quietly stops accounting for one of its views and the layout is subtly wrong.",
      hi: "अल्पविराम के बाद एक जगह छोड़ देने से वह id चुपचाप छूट जाती है, तो barrier अपनी एक view गिनना बंद कर देता है और layout हल्के से गलत हो जाता है।",
      "hi-en": "Comma ke baad ek jagah chhod dene se wo id chupchap chhoot jati hai, to barrier apni ek view ginna band kar deta hai aur layout halke se galat ho jata hai.",
    },
    related: ["xml:Barrier", "xml:barrierDirection"],
  },

  "xml:barrierDirection": {
    term: "app:barrierDirection",
    kind: { en: "Barrier attribute", hi: "Barrier attribute", "hi-en": "Barrier attribute" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Says which edge of its referenced views the barrier sits at.",
      hi: "बताता है कि barrier अपनी गिनी हुई views के किस किनारे पर बैठेगा।",
      "hi-en": "Batata hai ki barrier apni gini hui views ke kis kinare par baithega.",
    },
    values: {
      en: "`start`, `end`, `top`, `bottom`, and the absolute `left` and `right`.",
      hi: "`start`, `end`, `top`, `bottom`, और पक्के वाले `left` और `right`।",
      "hi-en": "`start`, `end`, `top`, `bottom`, aur pakke wale `left` aur `right`.",
    },
    affects: {
      en: "The barrier tracks whichever referenced view is widest at run time, so a form's fields stay aligned when one label grows in another language.",
      hi: "Barrier चलते वक्त सबसे चौड़ी वाली view के साथ खिसकता है, इसलिए किसी दूसरी भाषा में एक label लंबा हो जाने पर भी form की fields एक सीध में रहती हैं।",
      "hi-en": "Barrier chalte waqt sabse chaudi wali view ke saath khiskta hai, isliye kisi doosri bhasha mein ek label lamba ho jane par bhi form ki fields ek seedh mein rehti hain.",
    },
    related: ["xml:Barrier", "xml:constraint_referenced_ids"],
  },

  "xml:declare-styleable": {
    term: "<declare-styleable>",
    kind: { en: "Resource element", hi: "Resource element", "hi-en": "Resource element" },
    source: "android",
    importLine: "res/values/attrs.xml",
    does: {
      en: "Declares the custom XML attributes one of your own views accepts.",
      hi: "आपकी अपनी किसी view के लिए custom XML attributes घोषित करता है।",
      "hi-en": "Aapki apni kisi view ke liye custom XML attributes ghoshit karta hai.",
    },
    affects: {
      en: "Its `name` generates the `R.styleable.<Name>` array and one `R.styleable.<Name>_<attr>` index per attribute, which is what `withStyledAttributes` reads.",
      hi: "इसका `name` `R.styleable.<Name>` array बनाता है और हर attribute के लिए एक `R.styleable.<Name>_<attr>` index, जिन्हें `withStyledAttributes` पढ़ता है।",
      "hi-en": "Iska `name` `R.styleable.<Name>` array banata hai aur har attribute ke liye ek `R.styleable.<Name>_<attr>` index, jinhe `withStyledAttributes` padhta hai.",
    },
    related: ["xml:format", "withStyledAttributes", "AttributeSet"],
  },

  "xml:format": {
    term: "format",
    kind: { en: "Attribute", hi: "Attribute", "hi-en": "Attribute" },
    source: "android",
    importLine: "res/values/attrs.xml",
    does: {
      en: "Says what kind of value a custom attribute accepts.",
      hi: "बताता है कि custom attribute किस तरह की value लेता है।",
      "hi-en": "Batata hai ki custom attribute kis tarah ki value leta hai.",
    },
    values: {
      en: "`color`, `dimension`, `string`, `boolean`, `integer`, `float`, `reference`, `enum`, `flags` — combined with `|` where more than one is allowed.",
      hi: "`color`, `dimension`, `string`, `boolean`, `integer`, `float`, `reference`, `enum`, `flags` — एक से ज्यादा चलें तो `|` से जोड़े हुए।",
      "hi-en": "`color`, `dimension`, `string`, `boolean`, `integer`, `float`, `reference`, `enum`, `flags` — ek se zyada chalein to `|` se jode hue.",
    },
    affects: {
      en: "It picks the getter you must use: `dimension` needs `getDimension`, `color` needs `getColor`. A mismatch compiles and then returns a meaningless number.",
      hi: "इसी से तय होता है कि कौन सा getter इस्तेमाल होगा: `dimension` के लिए `getDimension`, `color` के लिए `getColor`। मेल न खाए तो compile हो जाता है और फिर बेमतलब आँकड़ा लौटाता है।",
      "hi-en": "Isi se tay hota hai ki kaun sa getter istemal hoga: `dimension` ke liye `getDimension`, `color` ke liye `getColor`. Mel na khaye to compile ho jata hai aur phir bematlab aankda lautata hai.",
    },
    related: ["xml:declare-styleable", "withStyledAttributes"],
  },

  "xml:LinearLayout": {
    term: "<LinearLayout>",
    kind: { en: "ViewGroup", hi: "ViewGroup", "hi-en": "ViewGroup" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Stacks its children in a single row or column.",
      hi: "अपने बच्चों को एक ही आड़ी या खड़ी लकीर में लगाता है।",
      "hi-en": "Apne bachchon ko ek hi aadi ya khadi lakeer mein lagata hai.",
    },
    affects: {
      en: "Every level of `layout_weight` costs a second measure pass of that subtree, so nested weighted layouts get measurably slow inside a scrolling list.",
      hi: "`layout_weight` की हर परत उस हिस्से का दूसरा measure pass माँगती है, इसलिए scroll होती list के अंदर एक के अंदर एक weight वाले layouts साफ तौर पर धीमे पड़ जाते हैं।",
      "hi-en": "`layout_weight` ki har parat us hisse ka doosra measure pass maangti hai, isliye scroll hoti list ke andar ek ke andar ek weight wale layouts saaf taur par dheeme pad jate hain.",
    },
    related: ["xml:orientation", "xml:layout_weight", "xml:ConstraintLayout"],
  },

  "xml:FrameLayout": {
    term: "<FrameLayout>",
    kind: { en: "ViewGroup", hi: "ViewGroup", "hi-en": "ViewGroup" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Stacks its children on top of one another, in the order they are written.",
      hi: "अपने बच्चों को एक के ऊपर एक रखता है, जिस क्रम में वे लिखे हैं उसी में।",
      "hi-en": "Apne bachchon ko ek ke upar ek rakhta hai, jis kram mein wo likhe hain usi mein.",
    },
    affects: {
      en: "The last child is drawn on top, which makes it the natural choice for badges, overlays and a fragment container.",
      hi: "सबसे आखिरी बच्चा सबसे ऊपर बनता है, इसीलिए badges, overlays और fragment container के लिए यह सहज चुनाव है।",
      "hi-en": "Sabse aakhri bachcha sabse upar banta hai, isiliye badges, overlays aur fragment container ke liye ye sehaj choice hai.",
    },
    related: ["xml:layout_gravity", "xml:LinearLayout"],
  },

  "xml:ConstraintLayout": {
    term: "<ConstraintLayout>",
    kind: { en: "ViewGroup", hi: "ViewGroup", "hi-en": "ViewGroup" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "Positions children by the relationships you declare between their edges, solving them all at once.",
      hi: "बच्चों को उनके किनारों के बीच बताए गए रिश्तों से लगाता है, और सबको एक साथ हल करता है।",
      "hi-en": "Bachchon ko unke kinaron ke beech bataye gaye rishton se lagata hai, aur sabko ek saath hal karta hai.",
    },
    affects: {
      en: "One flat solve replaces a deep tree of nested layouts, which is why it stays fast where nesting does not. Inside it, `0dp` means match constraints, not zero.",
      hi: "एक सपाट हल एक के अंदर एक रखे layouts के गहरे पेड़ की जगह ले लेता है, इसीलिए यह वहाँ तेज रहता है जहाँ nesting नहीं रहती। इसके अंदर `0dp` का मतलब है constraints जितना, शून्य नहीं।",
      "hi-en": "Ek sapaat hal ek ke andar ek rakhe layouts ke gehre ped ki jagah le leta hai, isiliye ye wahan tez rehta hai jahan nesting nahi rehti. Iske andar `0dp` ka matlab hai constraints jitna, zero nahi.",
    },
    docs: "https://developer.android.com/develop/ui/views/layout/constraint-layout",
    related: ["xml:layout_constraintStart_toStartOf", "xml:Barrier", "xml:layout_width"],
  },

  "xml:Barrier": {
    term: "<Barrier>",
    kind: { en: "Constraint helper", hi: "Constraint helper", "hi-en": "Constraint helper" },
    source: "jetpack",
    importLine: "res/layout/*.xml",
    does: {
      en: "An invisible line that sits at the edge of whichever of several views extends furthest.",
      hi: "एक अदृश्य लकीर, जो कई views में से जो सबसे दूर तक जाती है उसके किनारे पर बैठती है।",
      "hi-en": "Ek adrishya lakeer, jo kai views mein se jo sabse door tak jati hai uske kinare par baithti hai.",
    },
    affects: {
      en: "Unlike a `Guideline`, which is at a fixed position, a barrier moves with its content — so it is what keeps a translated form aligned when one label suddenly becomes the longest.",
      hi: "`Guideline` तय जगह पर रहती है, पर barrier अपने content के साथ खिसकता है — इसीलिए किसी अनुवाद में एक label अचानक सबसे लंबा हो जाए तब भी form एक सीध में रहता है।",
      "hi-en": "`Guideline` tay jagah par rehti hai, par barrier apne content ke saath khiskta hai — isiliye kisi translation mein ek label achanak sabse lamba ho jaye tab bhi form ek seedh mein rehta hai.",
    },
    related: ["xml:barrierDirection", "xml:constraint_referenced_ids", "xml:ConstraintLayout"],
  },

  "xml:TextView": {
    term: "<TextView>",
    kind: { en: "Widget", hi: "Widget", "hi-en": "Widget" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Displays text.",
      hi: "text दिखाता है।",
      "hi-en": "Text dikhata hai.",
    },
    affects: {
      en: "It is the base class of `Button` and `EditText`, so `textAppearance`, `maxLines` and `ellipsize` work identically on all three.",
      hi: "यह `Button` और `EditText` की base class है, इसलिए `textAppearance`, `maxLines` और `ellipsize` तीनों पर एक जैसे चलते हैं।",
      "hi-en": "Ye `Button` aur `EditText` ki base class hai, isliye `textAppearance`, `maxLines` aur `ellipsize` teenon par ek jaise chalte hain.",
    },
    related: ["xml:textAppearance", "xml:maxLines", "xml:ellipsize"],
  },

  "xml:ImageView": {
    term: "<ImageView>",
    kind: { en: "Widget", hi: "Widget", "hi-en": "Widget" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "Displays a drawable or bitmap.",
      hi: "कोई drawable या bitmap दिखाता है।",
      "hi-en": "Koi drawable ya bitmap dikhata hai.",
    },
    affects: {
      en: "A decorative image needs `android:importantForAccessibility=\"no\"`, and a meaningful one needs a `contentDescription` — screen readers cannot infer either.",
      hi: "सजावटी तस्वीर पर `android:importantForAccessibility=\"no\"` चाहिए, और मतलब रखने वाली पर `contentDescription` — screen reader इनमें से कुछ भी खुद नहीं समझ सकता।",
      "hi-en": "Sajawati tasveer par `android:importantForAccessibility=\"no\"` chahiye, aur matlab rakhne wali par `contentDescription` — screen reader inmein se kuch bhi khud nahi samajh sakta.",
    },
    related: ["xml:src", "xml:scaleType"],
  },

  "xml:EditText": {
    term: "<EditText>",
    kind: { en: "Widget", hi: "Widget", "hi-en": "Widget" },
    source: "android",
    importLine: "res/layout/*.xml",
    does: {
      en: "A field the user can type into.",
      hi: "वह field जिसमें user लिख सकता है।",
      "hi-en": "Wo field jismein user likh sakta hai.",
    },
    affects: {
      en: "Its text is saved across rotation only if it has an `android:id`. In Material designs it is wrapped in a `TextInputLayout`, which owns the label and the error.",
      hi: "इसका text rotation में तभी सँभलता है जब इस पर `android:id` हो। Material वाले designs में इसे `TextInputLayout` में लपेटा जाता है, जिसके पास label और error रहते हैं।",
      "hi-en": "Iska text rotation mein tabhi sambhalta hai jab is par `android:id` ho. Material wale designs mein ise `TextInputLayout` mein lapeta jata hai, jiske paas label aur error rehte hain.",
    },
    related: ["xml:inputType", "xml:TextInputLayout", "xml:id"],
  },

  "xml:MaterialButton": {
    term: "<MaterialButton>",
    kind: { en: "Material widget", hi: "Material widget", "hi-en": "Material widget" },
    source: "library",
    importLine: "res/layout/*.xml",
    does: {
      en: "The Material 3 button: filled, tonal, outlined or text, chosen by `style`.",
      hi: "Material 3 वाला button: filled, tonal, outlined या text, जो `style` से चुना जाता है।",
      "hi-en": "Material 3 wala button: filled, tonal, outlined ya text, jo `style` se chuna jata hai.",
    },
    values: {
      en: "`Widget.Material3.Button` (filled, the default), `…Button.TonalButton`, `…Button.OutlinedButton`, `…Button.TextButton`.",
      hi: "`Widget.Material3.Button` (filled, default), `…Button.TonalButton`, `…Button.OutlinedButton`, `…Button.TextButton`।",
      "hi-en": "`Widget.Material3.Button` (filled, default), `…Button.TonalButton`, `…Button.OutlinedButton`, `…Button.TextButton`.",
    },
    affects: {
      en: "It draws its shape, ripple and elevation into its background, so use `app:backgroundTint` for colour — `android:background` deletes all three.",
      hi: "यह अपनी shape, ripple और elevation background में ही बनाता है, इसलिए रंग के लिए `app:backgroundTint` लगाइए — `android:background` तीनों मिटा देता है।",
      "hi-en": "Ye apni shape, ripple aur elevation background mein hi banata hai, isliye rang ke liye `app:backgroundTint` lagaiye — `android:background` teenon mita deta hai.",
    },
    related: ["xml:background", "xml:style", "xml:theme"],
  },

  "xml:TextInputLayout": {
    term: "<TextInputLayout>",
    kind: { en: "Material widget", hi: "Material widget", "hi-en": "Material widget" },
    source: "library",
    importLine: "res/layout/*.xml",
    does: {
      en: "Wraps a text field and owns its floating label, box, helper text, error and counter.",
      hi: "text field को लपेटता है, और उसका तैरता हुआ label, box, helper text, error और counter इसी के पास रहते हैं।",
      "hi-en": "Text field ko lapetta hai, aur uska tairta hua label, box, helper text, error aur counter isi ke paas rehte hain.",
    },
    affects: {
      en: "Set `hint` and `error` on the layout, never on the inner `TextInputEditText` — on the inner view the label cannot float and you get two hints at once.",
      hi: "`hint` और `error` layout पर लगाइए, अंदर वाले `TextInputEditText` पर कभी नहीं — अंदर वाली view पर label ऊपर तैर नहीं सकता और एक साथ दो hints दिखते हैं।",
      "hi-en": "`hint` aur `error` layout par lagaiye, andar wale `TextInputEditText` par kabhi nahi — andar wali view par label upar tair nahi sakta aur ek saath do hints dikhte hain.",
    },
    related: ["xml:TextInputEditText", "xml:hint", "xml:helperText"],
  },

  "xml:TextInputEditText": {
    term: "<TextInputEditText>",
    kind: { en: "Material widget", hi: "Material widget", "hi-en": "Material widget" },
    source: "library",
    importLine: "res/layout/*.xml",
    does: {
      en: "The editable field that goes inside a `TextInputLayout`.",
      hi: "वह field जिसमें लिखा जाता है, और जो `TextInputLayout` के अंदर जाती है।",
      "hi-en": "Wo field jismein likha jata hai, aur jo `TextInputLayout` ke andar jati hai.",
    },
    affects: {
      en: "A plain `EditText` in that position mostly works but misses the correct spacing and the floating-label animation, which is why the Material version exists.",
      hi: "उस जगह सादा `EditText` काम तो कर जाता है पर सही दूरी और तैरते label की animation छूट जाती है — Material वाला रूप इसीलिए है।",
      "hi-en": "Us jagah saada `EditText` kaam to kar jata hai par sahi doori aur tairte label ki animation chhoot jati hai — Material wala roop isiliye hai.",
    },
    related: ["xml:TextInputLayout", "xml:inputType"],
  },

  "xml:MaterialCardView": {
    term: "<MaterialCardView>",
    kind: { en: "Material widget", hi: "Material widget", "hi-en": "Material widget" },
    source: "library",
    importLine: "res/layout/*.xml",
    does: {
      en: "A surface with Material shape, elevation and an optional stroke, holding grouped content.",
      hi: "Material वाली shape, elevation और चाहें तो एक लकीर के साथ एक सतह, जिसमें साथ की चीजें रखी जाती हैं।",
      "hi-en": "Material wali shape, elevation aur chahein to ek lakeer ke saath ek satah, jismein saath ki cheezein rakhi jati hain.",
    },
    affects: {
      en: "It reads `colorSurface` from the theme, so putting a theme overlay on it renders a dark card inside a light screen without touching anything inside.",
      hi: "यह theme से `colorSurface` पढ़ता है, तो इस पर theme overlay लगाने से light screen के अंदर dark card बन जाता है, बिना अंदर की किसी चीज को छुए।",
      "hi-en": "Ye theme se `colorSurface` padhta hai, to is par theme overlay lagane se light screen ke andar dark card ban jata hai, bina andar ki kisi cheez ko chhue.",
    },
    related: ["xml:theme", "xml:style"],
  },
};
