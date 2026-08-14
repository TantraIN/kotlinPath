import type { Glossary } from "./types";

/**
 * AndroidManifest elements and attributes.
 *
 * Keys carry an `xml:` prefix because the tokens themselves are not unique —
 * `data` is a Kotlin keyword as well as a manifest element, and `name` or
 * `label` would be far too generic to hold globally. The transformer looks
 * these up only inside XML blocks, so the bare token stays plain everywhere
 * else. `term` holds the name a reader actually sees.
 */
export const MANIFEST_GLOSSARY: Glossary = {
  "xml:manifest": {
    term: "<manifest>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "The root element. Everything the system needs to know before running your code sits inside it.",
      hi: "सबसे बाहर वाला element। जो कुछ system को आपका code चलाने से पहले पता होना चाहिए, वह इसी के अंदर रहता है।",
      "hi-en": "Sabse bahar wala element. Jo kuch system ko aapka code chalane se pehle pata hona chahiye, wo isi ke andar rehta hai.",
    },
    values: {
      en: "Declares the `android` namespace, and `tools` when you need merger directives.",
      hi: "`android` namespace declare करता है, और merger वाले निर्देश चाहिए तो `tools` भी।",
      "hi-en": "`android` namespace declare karta hai, aur merger wale nirdesh chahiye to `tools` bhi.",
    },
    affects: {
      en: "There is no `package` attribute any more — the application ID and `R` namespace come from `build.gradle.kts`. Your file is also not the final one: every library's manifest merges into it.",
      hi: "अब `package` वाला attribute रहा ही नहीं — application ID और `R` का namespace `build.gradle.kts` से आते हैं। आपकी file आखिरी भी नहीं है: हर library का manifest इसमें merge होता है।",
      "hi-en": "Ab `package` wala attribute raha hi nahi — application ID aur `R` ka namespace `build.gradle.kts` se aate hain. Aapki file aakhri bhi nahi hai: har library ka manifest ismein merge hota hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/manifest-element",
    related: ["xml:application", "namespace"],
  },

  "xml:application": {
    term: "<application>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Describes the app as a whole, and holds every component declaration.",
      hi: "पूरी app के बारे में बताता है, और हर component की declaration इसी में रहती है।",
      "hi-en": "Poori app ke baare mein batata hai, aur har component ki declaration isi mein rehti hai.",
    },
    values: {
      en: "Common attributes: `android:name`, `android:icon`, `android:label`, `android:theme`, `android:allowBackup`, `android:usesCleartextTraffic`.",
      hi: "आम attributes: `android:name`, `android:icon`, `android:label`, `android:theme`, `android:allowBackup`, `android:usesCleartextTraffic`।",
      "hi-en": "Aam attributes: `android:name`, `android:icon`, `android:label`, `android:theme`, `android:allowBackup`, `android:usesCleartextTraffic`.",
    },
    affects: {
      en: "Whatever you set here becomes the default for every component inside, and each one may override it — an `activity` with its own `android:theme` wins over this one.",
      hi: "यहाँ जो भी रखेंगे वह अंदर के हर component का default बन जाता है, और हर component उसे बदल भी सकता है — जिस `activity` का अपना `android:theme` है, वह इससे जीत जाती है।",
      "hi-en": "Yahan jo bhi rakhoge wo andar ke har component ka default ban jata hai, aur har component use badal bhi sakta hai — jis `activity` ka apna `android:theme` hai, wo isse jeet jati hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/application-element",
    related: ["xml:activity", "xml:name", "xml:theme"],
  },

  "xml:activity": {
    term: "<activity>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Declares one screen and tells the system it may be started.",
      hi: "एक screen की घोषणा करता है और system को बताता है कि उसे शुरू किया जा सकता है।",
      "hi-en": "Ek screen ki ghoshna karta hai aur system ko batata hai ki use shuru kiya ja sakta hai.",
    },
    values: {
      en: "Needs `android:name`. Often also `android:exported`, `android:theme`, `android:launchMode`, `android:screenOrientation`, `android:configChanges`.",
      hi: "`android:name` जरूरी है। अक्सर `android:exported`, `android:theme`, `android:launchMode`, `android:screenOrientation`, `android:configChanges` भी।",
      "hi-en": "`android:name` zaruri hai. Aksar `android:exported`, `android:theme`, `android:launchMode`, `android:screenOrientation`, `android:configChanges` bhi.",
    },
    affects: {
      en: "An activity that is not declared here cannot be started at all — you get `ActivityNotFoundException` at run time, pointing at the caller rather than at the missing line.",
      hi: "जो activity यहाँ लिखी नहीं है वह शुरू ही नहीं हो सकती — runtime पर `ActivityNotFoundException` मिलता है, जो बुलाने वाले की तरफ इशारा करता है, छूटी हुई line की तरफ नहीं।",
      "hi-en": "Jo activity yahan likhi nahi hai wo shuru hi nahi ho sakti — runtime par `ActivityNotFoundException` milta hai, jo bulane wale ki taraf ishara karta hai, chhooti hui line ki taraf nahi.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/activity-element",
    related: ["xml:exported", "xml:intent-filter", "ActivityNotFoundException"],
  },

  "xml:intent-filter": {
    term: "<intent-filter>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "A standing offer: if a request looks like this, this component can handle it.",
      hi: "एक खड़ी हुई पेशकश: अगर माँग ऐसी दिखती है, तो यह component उसे सँभाल सकता है।",
      "hi-en": "Ek khadi hui peshkash: agar maang aisi dikhti hai, to ye component use sambhal sakta hai.",
    },
    values: {
      en: "Holds `<action>` (required), `<category>` and `<data>`. `android:autoVerify` and `android:priority` go on the filter itself.",
      hi: "इसमें `<action>` (जरूरी), `<category>` और `<data>` आते हैं। `android:autoVerify` और `android:priority` filter पर ही लगते हैं।",
      "hi-en": "Ismein `<action>` (zaruri), `<category>` aur `<data>` aate hain. `android:autoVerify` aur `android:priority` filter par hi lagte hain.",
    },
    affects: {
      en: "Adding one makes the component reachable by implicit intents, which is why `android:exported` becomes mandatory alongside it from API 31.",
      hi: "यह जोड़ते ही component implicit intents से पहुँच में आ जाता है, और इसीलिए API 31 से इसके साथ `android:exported` लिखना जरूरी हो जाता है।",
      "hi-en": "Ye jodte hi component implicit intents se pahunch mein aa jata hai, aur isiliye API 31 se iske saath `android:exported` likhna zaruri ho jata hai.",
    },
    docs: "https://developer.android.com/guide/components/intents-filters",
    related: ["xml:action", "xml:category", "xml:exported"],
  },

  "xml:action": {
    term: "<action>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Names the one action string this filter answers to.",
      hi: "उस एक action string का नाम बताता है जिस पर यह filter जवाब देता है।",
      "hi-en": "Us ek action string ka naam batata hai jis par ye filter jawab deta hai.",
    },
    values: {
      en: "`android.intent.action.MAIN` for a launcher entry, `VIEW` for links, `SEND` for share, `EDIT`, `DIAL` — or your own string for a private contract.",
      hi: "Launcher में जगह के लिए `android.intent.action.MAIN`, links के लिए `VIEW`, share के लिए `SEND`, `EDIT`, `DIAL` — या अपने निजी करार के लिए अपनी खुद की string।",
      "hi-en": "Launcher mein jagah ke liye `android.intent.action.MAIN`, links ke liye `VIEW`, share ke liye `SEND`, `EDIT`, `DIAL` — ya apne niji karaar ke liye apni khud ki string.",
    },
    affects: {
      en: "A filter with no `<action>` matches nothing. The action must match exactly, so a typo simply means your component is never offered.",
      hi: "जिस filter में `<action>` नहीं है वह किसी से मेल नहीं खाता। Action हूबहू मिलना चाहिए, इसलिए typo का मतलब है कि आपका component कभी पेश ही नहीं होगा।",
      "hi-en": "Jis filter mein `<action>` nahi hai wo kisi se mel nahi khata. Action hubahu milna chahiye, isliye typo ka matlab hai ki aapka component kabhi pesh hi nahi hoga.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/action-element",
    related: ["xml:intent-filter", "xml:category", "Intent"],
  },

  "xml:category": {
    term: "<category>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Adds a further condition the incoming intent must also satisfy.",
      hi: "एक और शर्त जोड़ता है जो आने वाले intent को भी पूरी करनी होगी।",
      "hi-en": "Ek aur shart jodta hai jo aane wale intent ko bhi poori karni hogi.",
    },
    values: {
      en: "`LAUNCHER` puts you in the app drawer, `DEFAULT` is required for any implicit intent, `BROWSABLE` lets a browser link open you.",
      hi: "`LAUNCHER` आपको app drawer में डालता है, `DEFAULT` हर implicit intent के लिए जरूरी है, `BROWSABLE` से browser का link आपको खोल सकता है।",
      "hi-en": "`LAUNCHER` aapko app drawer mein daalta hai, `DEFAULT` har implicit intent ke liye zaruri hai, `BROWSABLE` se browser ka link aapko khol sakta hai.",
    },
    affects: {
      en: "Every category on the intent must appear in the filter. Implicit intents get `DEFAULT` added automatically, so a filter that omits it will never match one.",
      hi: "Intent की हर category filter में होनी चाहिए। Implicit intents में `DEFAULT` अपने आप जुड़ जाती है, इसलिए जिस filter में वह नहीं है वह कभी मेल नहीं खाएगा।",
      "hi-en": "Intent ki har category filter mein honi chahiye. Implicit intents mein `DEFAULT` apne aap jud jati hai, isliye jis filter mein wo nahi hai wo kabhi mel nahi khayega.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/category-element",
    related: ["xml:intent-filter", "xml:action"],
  },

  "xml:data": {
    term: "<data>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Narrows the filter to intents whose URI or MIME type fits the shape you describe.",
      hi: "Filter को सिर्फ उन्हीं intents तक सीमित करता है जिनका URI या MIME type आपके बताए ढाँचे में बैठता है।",
      "hi-en": "Filter ko sirf unhi intents tak limited karta hai jinka URI ya MIME type aapke bataye structure mein baithta hai.",
    },
    values: {
      en: "`android:scheme`, `android:host`, `android:port`, `android:path` / `pathPrefix` / `pathPattern`, and `android:mimeType`.",
      hi: "`android:scheme`, `android:host`, `android:port`, `android:path` / `pathPrefix` / `pathPattern`, और `android:mimeType`।",
      "hi-en": "`android:scheme`, `android:host`, `android:port`, `android:path` / `pathPrefix` / `pathPattern`, aur `android:mimeType`.",
    },
    affects: {
      en: "The parts combine, and a missing `scheme` makes the rest inert — a `host` with no `scheme` matches nothing at all.",
      hi: "हिस्से मिलकर काम करते हैं, और `scheme` न हो तो बाकी सब बेकार हो जाता है — बिना `scheme` वाला `host` किसी से मेल नहीं खाता।",
      "hi-en": "Hisse milkar kaam karte hain, aur `scheme` na ho to baaki sab bekaar ho jata hai — bina `scheme` wala `host` kisi se mel nahi khata.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/data-element",
    related: ["xml:scheme", "xml:host", "xml:pathPrefix"],
  },

  "xml:uses-permission": {
    term: "<uses-permission>",
    kind: { en: "Manifest element", hi: "Manifest element", "hi-en": "Manifest element" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Declares that the app may ask for a permission.",
      hi: "बताता है कि app कोई permission माँग सकती है।",
      "hi-en": "Batata hai ki app koi permission maang sakti hai.",
    },
    values: {
      en: "`android:name` such as `android.permission.INTERNET` or `CAMERA`, plus optional `android:maxSdkVersion`.",
      hi: "`android:name` जैसे `android.permission.INTERNET` या `CAMERA`, और चाहें तो `android:maxSdkVersion`।",
      "hi-en": "`android:name` jaise `android.permission.INTERNET` ya `CAMERA`, aur chaho to `android:maxSdkVersion`.",
    },
    affects: {
      en: "It never grants anything. Normal permissions are given at install; dangerous ones still need a runtime request, and without this line that request fails silently.",
      hi: "यह कुछ देता नहीं। साधारण permissions install पर मिल जाती हैं; खतरनाक वाली अब भी runtime पर माँगनी पड़ती हैं, और यह line न हो तो वह माँग चुपचाप fail हो जाती है।",
      "hi-en": "Ye kuch deta nahi. Saadharan permissions install par mil jati hain; khatarnaak wali ab bhi runtime par maangni padti hain, aur ye line na ho to wo maang chupchap fail ho jati hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/uses-permission-element",
    related: ["xml:name", "registerForActivityResult"],
  },

  "xml:name": {
    term: "android:name",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Names the thing being declared — which class, which permission, which action.",
      hi: "जो चीज लिखी जा रही है उसका नाम बताता है — कौन सी class, कौन सी permission, कौन सा action।",
      "hi-en": "Jo cheez likhi ja rahi hai uska naam batata hai — kaun si class, kaun si permission, kaun sa action.",
    },
    values: {
      en: "On a component, a class name — `.MainActivity` with the leading dot is relative to your namespace, or write it fully qualified. On `<uses-permission>` or `<action>`, the full constant string.",
      hi: "Component पर class का नाम — शुरू में dot वाला `.MainActivity` आपके namespace के सापेक्ष है, या पूरा नाम लिखिए। `<uses-permission>` या `<action>` पर पूरी constant string।",
      "hi-en": "Component par class ka naam — shuru mein dot wala `.MainActivity` aapke namespace ke saapeksh hai, ya poora naam likho. `<uses-permission>` ya `<action>` par poori constant string.",
    },
    affects: {
      en: "The class is resolved at run time, not compile time, so renaming a class without updating this compiles fine and crashes on launch.",
      hi: "Class runtime पर ढूँढ़ी जाती है, compile time पर नहीं, इसलिए class का नाम बदलकर इसे न बदलना साफ compile हो जाता है और launch पर crash करता है।",
      "hi-en": "Class runtime par dhundhi jati hai, compile time par nahi, isliye class ka naam badalkar ise na badalna saaf compile ho jata hai aur launch par crash karta hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/activity-element#nm",
    related: ["xml:activity", "namespace"],
  },

  "xml:exported": {
    term: "android:exported",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Decides whether components in *other* apps may start this one.",
      hi: "तय करता है कि *दूसरी* apps के components इसे शुरू कर सकते हैं या नहीं।",
      "hi-en": "Tay karta hai ki *dusri* apps ke components ise shuru kar sakte hain ya nahi.",
    },
    values: {
      en: "`true` or `false`. Mandatory from API 31 on any component that declares an `<intent-filter>`; without a filter it defaults to `false`.",
      hi: "`true` या `false`। API 31 से हर उस component पर लिखना जरूरी है जिसमें `<intent-filter>` है; filter न हो तो default `false` है।",
      "hi-en": "`true` ya `false`. API 31 se har us component par likhna zaruri hai jismein `<intent-filter>` hai; filter na ho to default `false` hai.",
    },
    affects: {
      en: "`true` makes the component a public API of your app — any installed app can send it an `Intent`, so every extra it reads is untrusted input. Guard it with a permission if it is not meant for everyone.",
      hi: "`true` उस component को आपकी app का सार्वजनिक API बना देता है — कोई भी installed app उसे `Intent` भेज सकती है, इसलिए वह जो भी extra पढ़ता है वह बिना भरोसे का input है। सबके लिए नहीं है तो उस पर permission लगाइए।",
      "hi-en": "`true` us component ko aapki app ka public API bana deta hai — koi bhi installed app use `Intent` bhej sakti hai, isliye wo jo bhi extra padhta hai wo bina bharose ka input hai. Sabke liye nahi hai to us par permission lagao.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/activity-element#exported",
    related: ["xml:activity", "xml:intent-filter"],
  },

  "xml:icon": {
    term: "android:icon",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Points at the drawable the launcher and system dialogs use for the app.",
      hi: "उस drawable की ओर इशारा करता है जिसे launcher और system के dialogs app के लिए इस्तेमाल करते हैं।",
      "hi-en": "Us drawable ki taraf ishara karta hai jise launcher aur system ke dialogs app ke liye use karte hain.",
    },
    values: {
      en: "A resource reference — `@mipmap/ic_launcher` or `@drawable/…`. Launcher icons live in `mipmap` so density variants are kept even when the APK is split.",
      hi: "Resource का reference — `@mipmap/ic_launcher` या `@drawable/…`। Launcher के icons `mipmap` में रहते हैं ताकि APK बँटने पर भी density वाले रूप बचे रहें।",
      "hi-en": "Resource ka reference — `@mipmap/ic_launcher` ya `@drawable/…`. Launcher ke icons `mipmap` mein rehte hain taaki APK bantne par bhi density wale roop bache rahein.",
    },
    affects: {
      en: "Set on `<application>` it is the default for everything inside; a component may override it with its own.",
      hi: "`<application>` पर रखने से यह अंदर की हर चीज का default बन जाता है; कोई component अपना रखकर उसे बदल सकता है।",
      "hi-en": "`<application>` par rakhne se ye andar ki har cheez ka default ban jata hai; koi component apna rakhkar use badal sakta hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/application-element#icon",
    related: ["xml:application", "xml:label"],
  },

  "xml:label": {
    term: "android:label",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "The human-readable name shown for the app or the component.",
      hi: "App या component के लिए दिखने वाला, पढ़ने लायक नाम।",
      "hi-en": "App ya component ke liye dikhne wala, padhne laayak naam.",
    },
    values: {
      en: "A string resource such as `@string/app_name`, or a literal. Use the resource — a literal cannot be translated.",
      hi: "कोई string resource जैसे `@string/app_name`, या सीधे लिखा हुआ text। Resource इस्तेमाल कीजिए — सीधे लिखा text translate नहीं हो सकता।",
      "hi-en": "Koi string resource jaise `@string/app_name`, ya seedhe likha hua text. Resource use karo — seedhe likha text translate nahi ho sakta.",
    },
    affects: {
      en: "This is what the launcher shows under the icon, so a per-build-type `strings.xml` is the usual way to mark debug installs apart from release ones.",
      hi: "Launcher icon के नीचे यही दिखाता है, इसलिए debug install को release से अलग पहचानने का आम तरीका यही है कि हर build type की अपनी `strings.xml` रखी जाए।",
      "hi-en": "Launcher icon ke neeche yahi dikhata hai, isliye debug install ko release se alag pehchanne ka aam tarika yahi hai ki har build type ki apni `strings.xml` rakhi jaye.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/application-element#label",
    related: ["xml:icon", "getString"],
  },

  "xml:theme": {
    term: "android:theme",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "The style applied before any of your code runs, including the very first frame.",
      hi: "वह style जो आपका कोई भी code चलने से पहले लग जाती है, सबसे पहले frame समेत।",
      "hi-en": "Wo style jo aapka koi bhi code chalne se pehle lag jati hai, sabse pehle frame samet.",
    },
    values: {
      en: "A style reference — `@style/Theme.MyApp`, or a platform one like `@android:style/Theme.Translucent.NoTitleBar`.",
      hi: "Style का reference — `@style/Theme.MyApp`, या platform वाला जैसे `@android:style/Theme.Translucent.NoTitleBar`।",
      "hi-en": "Style ka reference — `@style/Theme.MyApp`, ya platform wala jaise `@android:style/Theme.Translucent.NoTitleBar`.",
    },
    affects: {
      en: "Because the system reads it before `onCreate`, it decides the background you see while the app starts — a mismatched theme here is the usual cause of a white flash on launch. A translucent theme also makes the activity below stay visible, which is why such an activity gets `onPause` without `onStop`.",
      hi: "System इसे `onCreate` से पहले पढ़ता है, इसलिए app शुरू होते वक्त जो background दिखता है वह यही तय करता है — launch पर सफेद झपक की आम वजह यहाँ की बेमेल theme होती है। पारदर्शी theme से नीचे वाली activity दिखती भी रहती है, और इसीलिए ऐसी activity पर `onPause` तो चलता है पर `onStop` नहीं।",
      "hi-en": "System ise `onCreate` se pehle padhta hai, isliye app shuru hote waqt jo background dikhta hai wo yahi tay karta hai — launch par safed jhapak ki aam wajah yahan ki bemel theme hoti hai. Transparent theme se neeche wali activity dikhti bhi rehti hai, aur isiliye aisi activity par `onPause` to chalta hai par `onStop` nahi.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/application-element#theme",
    related: ["xml:application", "xml:activity"],
  },

  "xml:autoVerify": {
    term: "android:autoVerify",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Asks Android to check that the website really vouches for your app.",
      hi: "Android से कहता है कि जाँच ले, website सच में आपकी app की जमानत लेती है या नहीं।",
      "hi-en": "Android se kehta hai ki jaanch le, website sach mein aapki app ki zamanat leti hai ya nahi.",
    },
    values: {
      en: "`true` or `false`, on the `<intent-filter>` itself rather than on a child.",
      hi: "`true` या `false`, और यह `<intent-filter>` पर ही लगता है, उसके अंदर किसी element पर नहीं।",
      "hi-en": "`true` ya `false`, aur ye `<intent-filter>` par hi lagta hai, uske andar kisi element par nahi.",
    },
    affects: {
      en: "Verification needs an `assetlinks.json` served over HTTPS at the domain. When it passes, links open your app directly; when it fails, the user gets a chooser instead — and it fails silently, so it has to be tested on a real install.",
      hi: "जाँच के लिए उस domain पर HTTPS से `assetlinks.json` मिलना चाहिए। पास हो जाए तो links सीधे आपकी app खोलते हैं; fail हो तो user को chooser मिलता है — और यह चुपचाप fail होता है, इसलिए इसे असली install पर test करना पड़ता है।",
      "hi-en": "Jaanch ke liye us domain par HTTPS se `assetlinks.json` milna chahiye. Paas ho jaye to links seedhe aapki app kholte hain; fail ho to user ko chooser milta hai — aur ye chupchap fail hota hai, isliye ise asli install par test karna padta hai.",
    },
    docs: "https://developer.android.com/training/app-links/verify-android-applinks",
    related: ["xml:intent-filter", "xml:scheme"],
  },

  "xml:scheme": {
    term: "android:scheme",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "The first part of the URI this filter accepts.",
      hi: "URI का पहला हिस्सा, जिसे यह filter स्वीकार करता है।",
      "hi-en": "URI ka pehla hissa, jise ye filter sweekar karta hai.",
    },
    values: {
      en: "`https`, `http`, `tel`, `mailto`, `content`, `geo` — or your own, like `myapp`, for a private deep link.",
      hi: "`https`, `http`, `tel`, `mailto`, `content`, `geo` — या अपनी खुद की, जैसे `myapp`, किसी निजी deep link के लिए।",
      "hi-en": "`https`, `http`, `tel`, `mailto`, `content`, `geo` — ya apni khud ki, jaise `myapp`, kisi niji deep link ke liye.",
    },
    affects: {
      en: "A custom scheme is not verified by anyone, so any other app can claim the same one. `https` with `autoVerify` is the only form that can open without a chooser.",
      hi: "अपनी बनाई scheme की कोई जाँच नहीं होती, इसलिए वही scheme कोई दूसरी app भी अपना सकती है। `autoVerify` वाला `https` ही इकलौता रूप है जो बिना chooser के खुल सकता है।",
      "hi-en": "Apni banai scheme ki koi jaanch nahi hoti, isliye wahi scheme koi dusri app bhi apna sakti hai. `autoVerify` wala `https` hi iklauta roop hai jo bina chooser ke khul sakta hai.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/data-element",
    related: ["xml:data", "xml:host", "Uri"],
  },

  "xml:host": {
    term: "android:host",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "The domain this filter claims.",
      hi: "वह domain जिस पर यह filter दावा करता है।",
      "hi-en": "Wo domain jis par ye filter dawa karta hai.",
    },
    values: {
      en: "A domain like `example.com`, or a leading-wildcard form like `*.example.com`.",
      hi: "`example.com` जैसा domain, या शुरू में wildcard वाला रूप जैसे `*.example.com`।",
      "hi-en": "`example.com` jaisa domain, ya shuru mein wildcard wala roop jaise `*.example.com`.",
    },
    affects: {
      en: "It only takes effect alongside a `scheme` — on its own it matches nothing. Host matching is case-sensitive, so write it lowercase.",
      hi: "यह सिर्फ `scheme` के साथ ही काम करता है — अकेला किसी से मेल नहीं खाता। Host में छोटे-बड़े अक्षर मायने रखते हैं, इसलिए इसे lowercase में लिखिए।",
      "hi-en": "Ye sirf `scheme` ke saath hi kaam karta hai — akela kisi se mel nahi khata. Host mein chhote-bade akshar maayne rakhte hain, isliye ise lowercase mein likho.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/data-element",
    related: ["xml:data", "xml:scheme", "xml:pathPrefix"],
  },

  "xml:pathPrefix": {
    term: "android:pathPrefix",
    kind: { en: "Manifest attribute", hi: "Manifest attribute", "hi-en": "Manifest attribute" },
    source: "android",
    importLine: "AndroidManifest.xml",
    does: {
      en: "Claims every URL whose path starts with the value you give.",
      hi: "हर उस URL पर दावा करता है जिसका path आपकी दी हुई value से शुरू होता है।",
      "hi-en": "Har us URL par dawa karta hai jiska path aapki di hui value se shuru hota hai.",
    },
    values: {
      en: "A path beginning with a slash, like `/order`. Use `android:path` for an exact match, or `android:pathPattern` when you need a wildcard.",
      hi: "Slash से शुरू होता path, जैसे `/order`। हूबहू मिलान के लिए `android:path`, और wildcard चाहिए तो `android:pathPattern`।",
      "hi-en": "Slash se shuru hota path, jaise `/order`. Hubahu milan ke liye `android:path`, aur wildcard chahiye to `android:pathPattern`.",
    },
    affects: {
      en: "A prefix that is too broad quietly takes over links you never meant to handle — `/` claims the whole domain, including pages that should have opened in the browser.",
      hi: "बहुत चौड़ा prefix चुपचाप वे links भी ले लेता है जिन्हें आप सँभालना ही नहीं चाहते थे — `/` पूरे domain पर दावा कर देता है, उन pages समेत जो browser में खुलने चाहिए थे।",
      "hi-en": "Bahut chauda prefix chupchap wo links bhi le leta hai jinhe aap sambhalna hi nahi chahte the — `/` poore domain par dawa kar deta hai, un pages samet jo browser mein khulne chahiye the.",
    },
    docs: "https://developer.android.com/guide/topics/manifest/data-element",
    related: ["xml:data", "xml:host"],
  },

  "xml:node": {
    term: "tools:node",
    kind: { en: "Merger directive", hi: "Merger directive", "hi-en": "Merger directive" },
    source: "android",
    importLine: 'xmlns:tools="http://schemas.android.com/tools"',
    does: {
      en: "Tells the manifest merger what to do with this element instead of merging it normally.",
      hi: "Manifest merger को बताता है कि इस element के साथ आम merge के बजाय क्या करना है।",
      "hi-en": "Manifest merger ko batata hai ki is element ke saath aam merge ke bajaye kya karna hai.",
    },
    values: {
      en: "`remove`, `replace`, `merge`, `mergeOnlyAttributes`, `removeAll`, `strict`.",
      hi: "`remove`, `replace`, `merge`, `mergeOnlyAttributes`, `removeAll`, `strict`।",
      "hi-en": "`remove`, `replace`, `merge`, `mergeOnlyAttributes`, `removeAll`, `strict`.",
    },
    affects: {
      en: "It edits the merge, not your file, which is how you drop a permission a library pulled in. Read the merger report before using it — the library may have needed what you are removing.",
      hi: "यह आपकी file नहीं, merge को बदलता है, और इसी से library की खींची हुई permission हटाई जाती है। इस्तेमाल करने से पहले merger की report पढ़िए — हो सकता है library को उसकी सच में जरूरत हो।",
      "hi-en": "Ye aapki file nahi, merge ko badalta hai, aur isi se library ki kheenchi hui permission hatai jati hai. Use karne se pehle merger ki report padho — ho sakta hai library ko uski sach mein zarurat ho.",
    },
    docs: "https://developer.android.com/build/manage-manifests#merge_rule_markers",
    related: ["xml:manifest", "xml:uses-permission"],
  },
};
