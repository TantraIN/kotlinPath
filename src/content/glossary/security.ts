import type { Glossary } from "./types";

/** Accessibility semantics, StrictMode, the Keystore, pinning, lint suppression and profiling. */
export const SECURITY_GLOSSARY: Glossary = {
  contentDescription: {
    term: "contentDescription",
    kind: { en: "Parameter", hi: "Parameter", "hi-en": "Parameter" },
    source: "compose",
    importLine: null,
    does: {
      en: "The text a screen reader announces for an image or icon.",
      hi: "किसी तस्वीर या icon के लिए screen reader जो बोलता है, वह text।",
      "hi-en": "Kisi tasveer ya icon ke liye screen reader jo bolta hai, wo text.",
    },
    affects: {
      en: "`null` is a real answer, not a lazy one: it means the icon is decorative and the reader should skip it, which is correct when the label next to it already says the same thing. Setting it on a decorative icon makes TalkBack announce the same word twice. The failure mode people ship is an icon-only button with `null`, which reads as an unlabelled button and gives the user nothing to act on.",
      hi: "`null` असली जवाब है, आलस नहीं: उसका मतलब है कि वह icon सजावट है और reader को उसे छोड़ देना चाहिए, जो तब सही है जब बगल का label वही बात पहले ही कह रहा हो। सजावटी icon पर उसे भर देना TalkBack से वही शब्द दो बार बुलवाता है। जो नाकामी लोग भेज देते हैं वह है सिर्फ icon वाला बटन `null` के साथ, जो बिना नाम के बटन की तरह पढ़ा जाता है और उपयोगकर्ता को करने को कुछ नहीं देता।",
      "hi-en": "`null` asli jawaab hai, aalas nahi: uska matlab hai ki wo icon sajaavat hai aur reader ko use chhod dena chahiye, jo tab sahi hai jab bagal ka label wahi baat pehle hi keh raha ho. Sajaavati icon par use bhar dena TalkBack se wahi shabd do baar bulwata hai. Jo naakami log bhej dete hain wo hai sirf icon wala button `null` ke saath, jo bina naam ke button ki tarah padha jaata hai aur upyogkarta ko karne ko kuchh nahi deta.",
    },
    related: ["stateDescription", "mergeDescendants", "stringResource"],
  },

  stateDescription: {
    term: "stateDescription",
    kind: { en: "Semantics property", hi: "Semantics की खूबी", "hi-en": "Semantics ki khoobi" },
    source: "compose",
    importLine: "import androidx.compose.ui.semantics.stateDescription",
    does: {
      en: "Replaces the generic state a screen reader would otherwise announce.",
      hi: "उस आम हालत की जगह लेता है जो screen reader वरना बोलता।",
      "hi-en": "Us aam haalat ki jagah leta hai jo screen reader warna bolta.",
    },
    affects: {
      en: "Without it a toggle announces itself as \"on\" or \"off\", which is accurate and useless — on what? Setting it to \"Paid\" or \"In transit\" is the difference between a control a sighted user can read at a glance and one a screen-reader user has to guess at. It is also the property Compose tests assert on, so writing it makes the state checkable as well as audible.",
      hi: "उसके बिना कोई toggle खुद को \"on\" या \"off\" बताता है, जो सही है और बेकार — किस चीज पर? उसे \"Paid\" या \"In transit\" रखना उस नियंत्रण और इसमें फर्क है जिसे देखने वाला एक नजर में पढ़ लेता है और जिसे screen reader वाले को अंदाजा लगाना पड़ता है। Compose की tests भी इसी खूबी पर दावा करती हैं, तो इसे लिखना उस हालत को सुनाई देने लायक ही नहीं, परखने लायक भी बनाता है।",
      "hi-en": "Uske bina koi toggle khud ko \"on\" ya \"off\" bataata hai, jo sahi hai aur bekaar — kis cheez par? Use \"Paid\" ya \"In transit\" rakhna us niyantran aur ismein farak hai jise dekhne wala ek nazar mein padh leta hai aur jise screen reader wale ko andaaza lagana padta hai. Compose ki tests bhi isi khoobi par daava karti hain, to ise likhna us haalat ko sunai dene layak hi nahi, parakhne layak bhi banata hai.",
    },
    related: ["contentDescription", "mergeDescendants"],
  },

  mergeDescendants: {
    term: "mergeDescendants",
    kind: { en: "Parameter", hi: "Parameter", "hi-en": "Parameter" },
    source: "compose",
    importLine: null,
    does: {
      en: "Collapses a subtree into one accessibility node, announced as a single item.",
      hi: "किसी उप-पेड़ को एक ही accessibility की गाँठ में समेट देता है, जो एक चीज की तरह बोली जाती है।",
      "hi-en": "Kisi up-ped ko ek hi accessibility ki gaanth mein samet deta hai, jo ek cheez ki tarah boli jaati hai.",
    },
    affects: {
      en: "A list row built from an icon, a title, a price and a status is five separate stops for a screen-reader user unless you merge it — five swipes to learn one row. Merging makes it one stop that reads all four values, which is how a sighted user perceives it anyway. The cost is that the children stop being individually focusable, so never merge a row that contains its own buttons.",
      hi: "किसी icon, शीर्षक, दाम और हालत से बनी list की पंक्ति screen reader वाले के लिए पाँच अलग ठहराव है, जब तक आप उसे न मिलाएँ — एक पंक्ति जानने के लिए पाँच swipe। मिलाना उसे एक ठहराव बना देता है जो चारों बातें पढ़ता है, और देखने वाला उसे वैसे भी ऐसे ही समझता है। कीमत यह है कि भीतर के हिस्से अलग-अलग नहीं चुने जा सकते, तो ऐसी पंक्ति कभी न मिलाइए जिसमें अपने बटन हों।",
      "hi-en": "Kisi icon, sheershak, daam aur haalat se bani list ki pankti screen reader wale ke liye paanch alag thehraav hai, jab tak aap use na milayein — ek pankti jaanne ke liye paanch swipe. Milana use ek thehraav bana deta hai jo chaaron baatein padhta hai, aur dekhne wala use waise bhi aise hi samajhta hai. Keemat yeh hai ki bheetar ke hisse alag-alag nahi chune ja sakte, to aisi pankti kabhi na milaiye jismein apne button hon.",
    },
    related: ["contentDescription", "stateDescription"],
  },

  stringResource: {
    term: "stringResource",
    kind: { en: "Composable function", hi: "Composable function", "hi-en": "Composable function" },
    source: "compose",
    importLine: "import androidx.compose.ui.res.stringResource",
    does: {
      en: "Reads a string from `res/values` for the device's current locale.",
      hi: "उपकरण की अभी की भाषा के लिए `res/values` से कोई string पढ़ता है।",
      "hi-en": "Upkaran ki abhi ki bhasha ke liye `res/values` se koi string padhta hai.",
    },
    affects: {
      en: "It is the difference between an app that can be translated and one that cannot, which is why a hardcoded literal in a composable is worth a lint rule of its own. It also recomposes correctly when the locale changes at run time, where a string captured into a `remember` block would not. Accessibility labels belong here for the same reason: a screen reader in Hindi should not announce English.",
      hi: "अनुवाद हो सकने वाले और न हो सकने वाले ऐप में यही फर्क है, और इसीलिए किसी composable में सीधे लिखी string अपने एक lint के नियम लायक है। भाषा चलते वक्त बदलने पर यह ठीक से दोबारा बनता भी है, जबकि किसी `remember` में पकड़ी गई string नहीं बनती। Accessibility के labels भी इसी वजह से यहीं की चीज हैं: हिंदी में चलता screen reader अंग्रेजी नहीं बोलना चाहिए।",
      "hi-en": "Anuvaad ho sakne wale aur na ho sakne wale app mein yahi farak hai, aur isiliye kisi composable mein seedhe likhi string apne ek lint ke niyam layak hai. Bhasha chalte waqt badalne par yeh theek se dobara banta bhi hai, jabki kisi `remember` mein pakdi gayi string nahi banti. Accessibility ke labels bhi isi wajah se yahin ki cheez hain: Hindi mein chalta screen reader angrezi nahi bolna chahiye.",
    },
    related: ["contentDescription", "BuildConfig"],
  },

  StrictMode: {
    term: "StrictMode",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.os.StrictMode",
    does: {
      en: "Watches the main thread for disk and network work, and the process for leaked objects.",
      hi: "मुख्य धागे पर disk और नेट के काम पर, और process में छूटी हुई चीजों पर नजर रखता है।",
      "hi-en": "Mukhya dhaage par disk aur net ke kaam par, aur process mein chhooti hui cheezon par nazar rakhta hai.",
    },
    affects: {
      en: "It finds the cause of jank rather than the symptom: a `SharedPreferences` read or a `File` open on the main thread is invisible on a fast device and a dropped frame on a slow one, and `detectDiskReads` names the exact call site. Enable it only in debug behind `BuildConfig.DEBUG` — `penaltyDeath` in a release build would crash real users for something that is merely slow.",
      hi: "यह लक्षण नहीं, jank की वजह ढूँढ़ता है: मुख्य धागे पर कोई `SharedPreferences` पढ़ना या कोई `File` खोलना तेज उपकरण पर दिखता ही नहीं और धीमे पर गिरा हुआ frame है, और `detectDiskReads` ठीक उस call की जगह का नाम बता देता है। इसे सिर्फ debug में, `BuildConfig.DEBUG` के पीछे चालू कीजिए — release में `penaltyDeath` असली लोगों का ऐप ऐसी चीज पर गिरा देगा जो बस धीमी है।",
      "hi-en": "Yeh lakshan nahi, jank ki wajah dhoondhta hai: mukhya dhaage par koi `SharedPreferences` padhna ya koi `File` kholna tez upkaran par dikhta hi nahi aur dheeme par gira hua frame hai, aur `detectDiskReads` theek us call ki jagah ka naam bata deta hai. Ise sirf debug mein, `BuildConfig.DEBUG` ke peechhe chaalu kijiye — release mein `penaltyDeath` asli logon ka app aisi cheez par gira dega jo bas dheemi hai.",
    },
    docs: "https://developer.android.com/reference/android/os/StrictMode",
    related: ["BuildConfig", "Handler", "trace"],
  },

  BuildConfig: {
    term: "BuildConfig",
    kind: { en: "Generated class", hi: "बना हुआ class", "hi-en": "Bana hua class" },
    source: "android",
    importLine: "import com.example.app.BuildConfig",
    does: {
      en: "A class the build generates, holding constants that differ per build type and flavour.",
      hi: "Build का बनाया एक class, जिसमें वे तयशुदा चीजें हैं जो हर build type और flavour पर अलग होती हैं।",
      "hi-en": "Build ka banaya ek class, jismein wo tayshuda cheezein hain jo har build type aur flavour par alag hoti hain.",
    },
    affects: {
      en: "`BuildConfig.DEBUG` is a compile-time constant, so R8 removes the whole `if` block from a release build rather than leaving a dead branch — that is why debug-only tooling costs nothing in production. What it is not is a hiding place: it compiles to an ordinary field in an ordinary class, so any key you put in it with `buildConfigField` is readable in a decompiler in about a minute.",
      hi: "`BuildConfig.DEBUG` compile वक्त की तयशुदा चीज है, तो R8 release से पूरा `if` वाला हिस्सा हटा देता है, कोई मरी हुई शाखा छोड़ता नहीं — इसीलिए सिर्फ debug के औजार उत्पादन में कुछ नहीं लेते। जो यह नहीं है वह है छिपने की जगह: यह किसी आम class के आम खाने में बदलता है, तो `buildConfigField` से आपकी रखी कोई भी चाबी decompiler में करीब एक मिनट में पढ़ी जा सकती है।",
      "hi-en": "`BuildConfig.DEBUG` compile waqt ki tayshuda cheez hai, to R8 release se poora `if` wala hissa hata deta hai, koi mari hui shaakha chhodta nahi — isiliye sirf debug ke auzaar utpaadan mein kuchh nahi lete. Jo yeh nahi hai wo hai chhipne ki jagah: yeh kisi aam class ke aam khaane mein badalta hai, to `buildConfigField` se aapki rakhi koi bhi chaabi decompiler mein kareeb ek minute mein padhi ja sakti hai.",
    },
    related: ["buildConfigField", "StrictMode", "isMinifyEnabled"],
  },

  Handler: {
    term: "Handler",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.os.Handler",
    does: {
      en: "Posts messages and delayed work onto the `Looper` of a particular thread.",
      hi: "किसी खास धागे के `Looper` पर संदेश और देर वाला काम डालता है।",
      "hi-en": "Kisi khaas dhaage ke `Looper` par sandesh aur der wala kaam daalta hai.",
    },
    affects: {
      en: "Written as an anonymous `object : Handler(...)` inside an Activity it captures the outer `this`, so the Activity survives every pending message — a `postDelayed` of thirty seconds keeps a rotated-away screen in memory for thirty seconds. That is the textbook Android leak, and it is why the modern answer is a coroutine in `lifecycleScope`, which is cancelled for you.",
      hi: "किसी Activity के भीतर बेनाम `object : Handler(...)` की तरह लिखा हुआ यह बाहरी `this` पकड़ लेता है, तो हर बकाया संदेश तक वह Activity जिंदा रहती है — तीस सेकंड का `postDelayed` घुमाकर छोड़ी गई screen को तीस सेकंड memory में रखता है। यही किताबी Android की leak है, और इसीलिए आजका जवाब `lifecycleScope` में कोई coroutine है, जो आपके लिए रद्द कर दी जाती है।",
      "hi-en": "Kisi Activity ke bheetar benaam `object : Handler(...)` ki tarah likha hua yeh bahari `this` pakad leta hai, to har bakaya sandesh tak wo Activity zinda rehti hai — tees second ka `postDelayed` ghumakar chhodi gayi screen ko tees second memory mein rakhta hai. Yahi kitaabi Android ki leak hai, aur isiliye aaj ka jawaab `lifecycleScope` mein koi coroutine hai, jo aapke liye radd kar di jaati hai.",
    },
    related: ["Looper", "StrictMode"],
  },

  Looper: {
    term: "Looper",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.os.Looper",
    does: {
      en: "The message loop a thread runs; `getMainLooper()` returns the UI thread's.",
      hi: "वह संदेशों का चक्कर जो कोई धागा चलाता है; `getMainLooper()` UI वाले धागे का देता है।",
      "hi-en": "Wo sandeshon ka chakkar jo koi dhaaga chalata hai; `getMainLooper()` UI wale dhaage ka deta hai.",
    },
    affects: {
      en: "Passing `Looper.getMainLooper()` to a callback API is how you say \"call me back on the UI thread\", which is why location and sensor APIs ask for one. It is also the reason the main thread can be blocked at all: everything Android delivers to your app — input, drawing, lifecycle callbacks — is a message in this one queue, so any slow work in a callback delays all the rest.",
      hi: "किसी callback वाली API को `Looper.getMainLooper()` देना यह कहने का तरीका है कि \"मुझे UI वाले धागे पर वापस बुलाओ\", और इसीलिए जगह और sensor की APIs वह माँगती हैं। मुख्य धागा रुक क्यों सकता है, इसकी वजह भी यही है: Android आपके ऐप को जो कुछ देता है — छूना, चित्र बनाना, lifecycle के callbacks — सब इसी एक कतार का संदेश है, तो किसी callback में धीमा काम बाकी सबको टाल देता है।",
      "hi-en": "Kisi callback wali API ko `Looper.getMainLooper()` dena yeh kehne ka tareeka hai ki \"mujhe UI wale dhaage par wapas bulao\", aur isiliye jagah aur sensor ki APIs wo maangti hain. Mukhya dhaaga ruk kyon sakta hai, iski wajah bhi yahi hai: Android aapke app ko jo kuchh deta hai — chhoona, chitra banana, lifecycle ke callbacks — sab isi ek kataar ka sandesh hai, to kisi callback mein dheema kaam baaki sabko taal deta hai.",
    },
    related: ["Handler", "StrictMode"],
  },

  setUserAuthenticationRequired: {
    term: "setUserAuthenticationRequired",
    kind: { en: "Builder method", hi: "Builder का method", "hi-en": "Builder ka method" },
    source: "android",
    importLine: null,
    does: {
      en: "Makes the key usable only after the user proves who they are with a biometric or PIN.",
      hi: "उस चाबी को सिर्फ तब इस्तेमाल के लायक बनाता है जब उपयोगकर्ता biometric या PIN से खुद को साबित कर दे।",
      "hi-en": "Us chaabi ko sirf tab istemaal ke layak banata hai jab upyogkarta biometric ya PIN se khud ko saabit kar de.",
    },
    affects: {
      en: "This is the line that turns a biometric prompt from theatre into security. Without it, the prompt is a boolean your own code checks, and anyone who can run your code can skip it; with it, the operating system refuses to unlock the key at all until authentication succeeds, so there is nothing to bypass in your app. The cost is that you must handle the key becoming unusable when the user changes their screen lock.",
      hi: "यही वह लाइन है जो biometric वाले परदे को नाटक से सुरक्षा बना देती है। उसके बिना वह परदा आपके अपने code का जाँचा हुआ एक सही-गलत है, और जो आपका code चला सकता है वह उसे छोड़ सकता है; उसके साथ, तंत्र उस चाबी को खोलने से ही इनकार कर देता है जब तक पहचान पूरी न हो, तो आपके ऐप में छोड़ने को कुछ बचता ही नहीं। कीमत यह है कि उपयोगकर्ता के screen lock बदलने पर उस चाबी के बेकार हो जाने को आपको सँभालना पड़ेगा।",
      "hi-en": "Yahi wo line hai jo biometric wale parde ko naatak se suraksha bana deti hai. Uske bina wo parda aapke apne code ka jaancha hua ek sahi-galat hai, aur jo aapka code chala sakta hai wo use chhod sakta hai; uske saath, tantra us chaabi ko kholne se hi inkaar kar deta hai jab tak pehchaan poori na ho, to aapke app mein chhodne ko kuchh bachta hi nahi. Keemat yeh hai ki upyogkarta ke screen lock badalne par us chaabi ke bekaar ho jaane ko aapko sambhalna padega.",
    },
    related: ["KeyGenParameterSpec"],
  },

  CertificatePinner: {
    term: "CertificatePinner",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import okhttp3.CertificatePinner",
    does: {
      en: "Refuses a TLS connection unless the server's certificate chain matches a pin you listed.",
      hi: "जब तक server की certificate की कड़ी आपके लिखे किसी pin से न मिले, TLS का जुड़ना ठुकरा देता है।",
      "hi-en": "Jab tak server ki certificate ki kadi aapke likhe kisi pin se na mile, TLS ka judna thukra deta hai.",
    },
    affects: {
      en: "It stops an attacker who has managed to install a trusted certificate on the device, which is the one thing plain TLS cannot. The danger is that it is a remote kill switch for your own app: when the certificate rotates and the shipped pin does not, every installed version stops talking to the server and no update can reach a user who cannot load the app. Always pin a backup key as well, and set an expiry.",
      hi: "यह उस हमलावर को रोकता है जो उपकरण पर कोई भरोसेमंद certificate बिठा चुका है, और यही एक चीज सादा TLS नहीं रोक सकता। खतरा यह है कि यह आपके अपने ऐप का दूर से दबा हुआ बटन है: जब certificate बदलता है और भेजा गया pin नहीं, तो हर लगी हुई कड़ी server से बात करना बंद कर देती है और जो उपयोगकर्ता ऐप खोल ही नहीं पाता उस तक कोई update पहुँच नहीं सकता। हमेशा एक बचाव वाली चाबी भी pin कीजिए, और उम्र तय कीजिए।",
      "hi-en": "Yeh us hamlaawar ko rokta hai jo upkaran par koi bharosemand certificate bitha chuka hai, aur yahi ek cheez saada TLS nahi rok sakta. Khatra yeh hai ki yeh aapke apne app ka door se daba hua button hai: jab certificate badalta hai aur bheja gaya pin nahi, to har lagi hui kadi server se baat karna band kar deti hai aur jo upyogkarta app khol hi nahi paata us tak koi update pahunch nahi sakta. Hamesha ek bachaav wali chaabi bhi pin kijiye, aur umar tay kijiye.",
    },
    docs: "https://square.github.io/okhttp/features/https/",
    related: ["BuildConfig"],
  },

  Suppress: {
    term: "@Suppress",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "kotlin-lang",
    importLine: null,
    does: {
      en: "Turns off a named compiler or static-analysis warning for the annotated element.",
      hi: "जिस चीज पर लगा है उसके लिए compiler या static जाँच की नाम से बताई गई चेतावनी बंद कर देता है।",
      "hi-en": "Jis cheez par laga hai uske liye compiler ya static parakh ki naam se batai gayi chetavani band kar deta hai.",
    },
    affects: {
      en: "Scope is the whole point: on a file it hides the warning everywhere including the code you write next year, on a single expression it hides exactly the case you examined. A suppression without a comment saying why is indistinguishable from a bug someone silenced, so the reviewable form is one narrow annotation with one line of reasoning beside it.",
      hi: "बात दायरे की ही है: किसी file पर वह चेतावनी हर जगह छिपा देता है, उस code समेत जो आप अगले साल लिखेंगे; किसी एक अभिव्यक्ति पर वह ठीक वही मामला छिपाता है जिसे आपने देखा। बिना यह बताए कि क्यों, कोई suppression उस गड़बड़ी से अलग नहीं दिखता जिसे किसी ने चुप करा दिया, तो देखे जाने लायक रूप है एक सँकरा annotation और उसके बगल में एक लाइन की वजह।",
      "hi-en": "Baat daayre ki hi hai: kisi file par wo chetavani har jagah chhupa deta hai, us code samet jo aap agle saal likhenge; kisi ek abhivyakti par wo theek wahi maamla chhupata hai jise aapne dekha. Bina yeh bataaye ki kyon, koi suppression us gadbadi se alag nahi dikhta jise kisi ne chup kara diya, to dekhe jaane layak roop hai ek sankra annotation aur uske bagal mein ek line ki wajah.",
    },
    related: ["SuppressLint", "warningsAsErrors"],
  },

  SuppressLint: {
    term: "@SuppressLint",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import android.annotation.SuppressLint",
    does: {
      en: "Silences one Android Lint check on the annotated element.",
      hi: "जिस चीज पर लगा है उस पर Android Lint की एक परख चुप करा देता है।",
      "hi-en": "Jis cheez par laga hai us par Android Lint ki ek parakh chup kara deta hai.",
    },
    affects: {
      en: "`@SuppressLint(\"MissingPermission\")` is the common one, and it is also the most dangerous, because the check it disables is the one that would have caught a `SecurityException` crash on a device where the user said no. Writing it is a claim that the permission is guaranteed elsewhere, so the comment should name where — a reviewer cannot verify the claim otherwise, and neither can you in six months.",
      hi: "`@SuppressLint(\"MissingPermission\")` आम है, और सबसे खतरनाक भी, क्योंकि जो परख वह बंद करता है वही उस `SecurityException` वाली crash को पकड़ती जो उस उपकरण पर होती जहाँ उपयोगकर्ता ने मना कर दिया। उसे लिखना यह दावा है कि वह इजाजत कहीं और पक्की है, तो टिप्पणी में वह जगह नाम से आनी चाहिए — वरना देखने वाला उस दावे को परख नहीं सकता, और छह महीने बाद आप भी नहीं।",
      "hi-en": "`@SuppressLint(\"MissingPermission\")` aam hai, aur sabse khatarnaak bhi, kyonki jo parakh wo band karta hai wahi us `SecurityException` wali crash ko pakadti jo us upkaran par hoti jahan upyogkarta ne mana kar diya. Use likhna yeh daava hai ki wo ijaazat kahin aur pakki hai, to tippani mein wo jagah naam se aani chahiye — warna dekhne wala us daave ko parakh nahi sakta, aur chhah maheene baad aap bhi nahi.",
    },
    related: ["Suppress", "abortOnError"],
  },

  warningsAsErrors: {
    term: "warningsAsErrors",
    kind: { en: "Lint DSL property", hi: "Lint DSL की खूबी", "hi-en": "Lint DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Makes every Lint warning fail the build instead of scrolling past.",
      hi: "Lint की हर चेतावनी को build गिराने वाली बना देता है, बहकर निकल जाने वाली नहीं।",
      "hi-en": "Lint ki har chetavani ko build giraane wali bana deta hai, behkar nikal jaane wali nahi.",
    },
    affects: {
      en: "A warning nobody has to act on is a warning nobody reads, and a project that has accumulated four hundred of them has no signal left. Turning this on is only survivable together with a baseline file, which freezes today's warnings as accepted debt so the rule applies to new code and the build is not red on the first day.",
      hi: "जिस चेतावनी पर किसी को कुछ करना ही नहीं, उसे कोई पढ़ता भी नहीं, और जिस project में चार सौ जमा हो चुकी हैं वहाँ कोई इशारा बचा ही नहीं। इसे चालू करना सिर्फ किसी baseline वाली file के साथ झेला जा सकता है, जो आज की चेतावनियों को माने हुए कर्ज की तरह जमा देती है ताकि नियम नए code पर लगे और पहले ही दिन build लाल न हो।",
      "hi-en": "Jis chetavani par kisi ko kuchh karna hi nahi, use koi padhta bhi nahi, aur jis project mein chaar sau jama ho chuki hain wahan koi ishaara bacha hi nahi. Ise chaalu karna sirf kisi baseline wali file ke saath jhela ja sakta hai, jo aaj ki chetavaniyon ko maane hue karz ki tarah jama deti hai taki niyam naye code par lage aur pehle hi din build laal na ho.",
    },
    related: ["abortOnError", "Suppress"],
  },

  abortOnError: {
    term: "abortOnError",
    kind: { en: "Lint DSL property", hi: "Lint DSL की खूबी", "hi-en": "Lint DSL ki khoobi" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Stops the build when Lint reports an error.",
      hi: "Lint के कोई error बताने पर build रोक देता है।",
      "hi-en": "Lint ke koi error bataane par build rok deta hai.",
    },
    affects: {
      en: "Setting it to `false` is how a team quietly stops running Lint while still appearing to: the task passes, the report is written, and nobody opens it. If the checks are worth having in CI they should be worth failing on, and the honest way to allow an exception is a baseline plus a narrow `@SuppressLint`, not a global switch.",
      hi: "इसे `false` करना वह तरीका है जिससे कोई team चुपचाप Lint चलाना बंद कर देती है और चलाती हुई दिखती रहती है: task पास हो जाता है, रिपोर्ट लिख दी जाती है, और कोई उसे खोलता नहीं। अगर वे परखें CI में रखने लायक हैं तो उन पर गिरने लायक भी होनी चाहिए, और छूट देने का ईमानदार तरीका कोई baseline और सँकरा `@SuppressLint` है, कोई सब जगह लगने वाला बटन नहीं।",
      "hi-en": "Ise `false` karna wo tareeka hai jisse koi team chupchaap Lint chalana band kar deti hai aur chalati hui dikhti rehti hai: task pass ho jaata hai, report likh di jaati hai, aur koi use kholta nahi. Agar wo parakhein CI mein rakhne layak hain to un par girne layak bhi honi chahiye, aur chhoot dene ka imaandaar tareeka koi baseline aur sankra `@SuppressLint` hai, koi sab jagah lagne wala button nahi.",
    },
    related: ["warningsAsErrors", "SuppressLint"],
  },

  trace: {
    term: "trace",
    kind: { en: "Inline function", hi: "Inline function", "hi-en": "Inline function" },
    source: "jetpack",
    importLine: "import androidx.tracing.trace",
    does: {
      en: "Wraps a block in a named section that appears as a slice in a system trace.",
      hi: "किसी हिस्से को नाम वाले खंड में लपेट देता है जो system के trace में एक टुकड़े की तरह दिखता है।",
      "hi-en": "Kisi hisse ko naam wale khand mein lapet deta hai jo system ke trace mein ek tukde ki tarah dikhta hai.",
    },
    affects: {
      en: "It turns a profiler flame chart from a wall of framework frames into your own vocabulary — `loadOrders`, `network`, `map` — which is the difference between seeing that something is slow and knowing which part. Nesting is free and worth doing, because the useful answer is usually a ratio between two child slices rather than the total.",
      hi: "यह profiler के flame chart को framework के frames की दीवार से आपकी अपनी शब्दावली में बदल देता है — `loadOrders`, `network`, `map` — और यही यह देखने और यह जानने में फर्क है कि कुछ धीमा है बनाम कौन सा हिस्सा। भीतर-भीतर लपेटना मुफ्त है और करने लायक, क्योंकि काम का जवाब आमतौर पर कुल नहीं, दो भीतरी टुकड़ों का अनुपात होता है।",
      "hi-en": "Yeh profiler ke flame chart ko framework ke frames ki deewar se aapki apni shabdaawali mein badal deta hai — `loadOrders`, `network`, `map` — aur yahi yeh dekhne aur yeh jaanne mein farak hai ki kuchh dheema hai banaam kaun sa hissa. Bheetar-bheetar lapetna muft hai aur karne layak, kyonki kaam ka jawaab aamtaur par kul nahi, do bheetari tukdon ka anupaat hota hai.",
    },
    related: ["CompilationMode", "StrictMode"],
  },

  CompilationMode: {
    term: "CompilationMode",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.benchmark.macro.CompilationMode",
    does: {
      en: "Tells a Macrobenchmark how the app should be compiled before the run.",
      hi: "किसी Macrobenchmark को बताता है कि चलाने से पहले ऐप कैसे compile होना चाहिए।",
      "hi-en": "Kisi Macrobenchmark ko bataata hai ki chalane se pehle app kaise compile hona chahiye.",
    },
    affects: {
      en: "This is what makes a startup number mean anything. `None()` is the cold, freshly-installed case a real user sees first; `Partial()` is the case with a baseline profile applied. Comparing the two is how you prove a profile earned its place, and reporting a single number without saying which mode produced it is how teams accidentally claim an improvement that was really just a warm run.",
      hi: "यही शुरुआत के किसी अंक को मतलब देता है। `None()` वह ठंडा, अभी-अभी लगा हुआ मामला है जो असली उपयोगकर्ता पहले देखता है; `Partial()` वह मामला है जहाँ baseline वाला profile लगा हो। दोनों को मिलाना ही यह साबित करता है कि उस profile ने अपनी जगह कमाई, और यह बताए बिना कि कौन से रूप से आया, कोई एक अंक बताना वह तरीका है जिससे teams गलती से ऐसे सुधार का दावा कर बैठती हैं जो असल में बस एक गरम दौड़ थी।",
      "hi-en": "Yahi shuruaat ke kisi ank ko matlab deta hai. `None()` wo thanda, abhi-abhi laga hua maamla hai jo asli upyogkarta pehle dekhta hai; `Partial()` wo maamla hai jahan baseline wala profile laga ho. Donon ko milana hi yeh saabit karta hai ki us profile ne apni jagah kamaai, aur yeh bataaye bina ki kaun se roop se aaya, koi ek ank batana wo tareeka hai jisse teams galti se aise sudhaar ka daava kar baithti hain jo asal mein bas ek garam daud thi.",
    },
    related: ["BaselineProfileRule", "startActivityAndWait", "trace"],
  },

  BaselineProfileRule: {
    term: "BaselineProfileRule",
    kind: { en: "JUnit rule", hi: "JUnit का rule", "hi-en": "JUnit ka rule" },
    source: "jetpack",
    importLine: "import androidx.benchmark.macro.junit4.BaselineProfileRule",
    does: {
      en: "Records which methods run during a journey, producing a baseline profile to ship.",
      hi: "किसी सफर के दौरान चले methods दर्ज करता है, और भेजने लायक baseline वाला profile बना देता है।",
      "hi-en": "Kisi safar ke dauraan chale methods darj karta hai, aur bhejne layak baseline wala profile bana deta hai.",
    },
    affects: {
      en: "The profile tells ART to compile those methods ahead of time at install, so the first run of a screen is not interpreted — typically a fifteen to thirty percent cut in startup with no code change. What you record is what you get, so the journey inside `collect` must be the one users actually take: recording a launch and nothing else leaves the first scroll as janky as before.",
      hi: "वह profile ART को कहता है कि उन methods को install के वक्त पहले ही compile कर ले, तो किसी screen का पहला दौर interpret नहीं होता — आमतौर पर बिना code बदले शुरुआत में पंद्रह से तीस प्रतिशत की कटौती। आप जो दर्ज करते हैं वही मिलता है, तो `collect` के भीतर वह सफर वही होना चाहिए जो लोग सच में करते हैं: सिर्फ खुलना दर्ज करना पहली scroll को पहले जितनी ही अटकी छोड़ देता है।",
      "hi-en": "Wo profile ART ko kehta hai ki un methods ko install ke waqt pehle hi compile kar le, to kisi screen ka pehla daur interpret nahi hota — aamtaur par bina code badle shuruaat mein pandrah se tees pratishat ki katauti. Aap jo darj karte hain wahi milta hai, to `collect` ke bheetar wo safar wahi hona chahiye jo log sach mein karte hain: sirf khulna darj karna pehli scroll ko pehle jitni hi atki chhod deta hai.",
    },
    docs: "https://developer.android.com/topic/performance/baselineprofiles/overview",
    related: ["CompilationMode", "startActivityAndWait"],
  },

  startActivityAndWait: {
    term: "startActivityAndWait",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "jetpack",
    importLine: null,
    does: {
      en: "Launches the app and blocks until its first frame is drawn.",
      hi: "ऐप खोलता है और उसका पहला frame बनने तक रुका रहता है।",
      "hi-en": "App kholta hai aur uska pehla frame banne tak ruka rehta hai.",
    },
    affects: {
      en: "The waiting is what makes the measurement honest: `startActivity` returns as soon as the system accepts the intent, which would time the launcher rather than your app. Pair it with `pressHome()` before, so each iteration measures a cold start instead of resuming a process that is already warm in memory.",
      hi: "इंतजार करना ही उस नाप को ईमानदार बनाता है: `startActivity` तंत्र के intent मंजूर करते ही लौट आता है, जो आपके ऐप का नहीं, launcher का समय नापता। उससे पहले `pressHome()` रखिए, ताकि हर बार ठंडी शुरुआत नपे, न कि memory में पहले से गरम पड़े process का फिर से जगना।",
      "hi-en": "Intezaar karna hi us naap ko imaandaar banata hai: `startActivity` tantra ke intent manzoor karte hi laut aata hai, jo aapke app ka nahi, launcher ka samay naapta. Usse pehle `pressHome()` rakhiye, taki har baar thandi shuruaat nape, na ki memory mein pehle se garam pade process ka phir se jagna.",
    },
    related: ["CompilationMode", "BaselineProfileRule"],
  },
};
