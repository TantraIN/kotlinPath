import type { Glossary } from "./types";

/** Firebase Messaging, Auth, Firestore, Crashlytics, Remote Config, Analytics and sockets. */
export const FIREBASE_GLOSSARY: Glossary = {
  FirebaseMessagingService: {
    term: "FirebaseMessagingService",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.firebase.messaging.FirebaseMessagingService",
    does: {
      en: "The service Android wakes to hand your app an incoming push message.",
      hi: "वह service जिसे Android जगाकर आपके ऐप को आया हुआ push का संदेश थमाता है।",
      "hi-en": "Wo service jise Android jagakar aapke app ko aaya hua push ka sandesh thamata hai.",
    },
    affects: {
      en: "It runs with roughly ten seconds of budget, like a `BroadcastReceiver`, so it should notice and delegate rather than work: enqueue a `WorkManager` request and return. Doing a network sync inline is the classic mistake, and it fails only for the users whose connection is slow — which is to say, silently, and never on your desk.",
      hi: "यह किसी `BroadcastReceiver` की तरह करीब दस सेकंड के बजट में चलती है, तो इसे काम नहीं, नोटिस करके सौंप देना चाहिए: कोई `WorkManager` की माँग कतार में डालिए और लौट आइए। वहीं नेट का sync करना जानी-पहचानी गलती है, और वह सिर्फ उन लोगों के लिए टूटती है जिनका connection धीमा है — यानी चुपचाप, और आपकी मेज पर कभी नहीं।",
      "hi-en": "Yeh kisi `BroadcastReceiver` ki tarah kareeb das second ke budget mein chalti hai, to ise kaam nahi, notice karke saunp dena chahiye: koi `WorkManager` ki maang kataar mein daaliye aur laut aaiye. Wahin net ka sync karna jaani-pehchaani galti hai, aur wo sirf un logon ke liye toot-ti hai jinka connection dheema hai — yaani chupchaap, aur aapki mez par kabhi nahi.",
    },
    docs: "https://firebase.google.com/docs/cloud-messaging/android/receive",
    related: ["onMessageReceived", "onNewToken", "OneTimeWorkRequestBuilder"],
  },

  onMessageReceived: {
    term: "onMessageReceived",
    kind: { en: "Callback", hi: "Callback", "hi-en": "Callback" },
    source: "library",
    importLine: null,
    does: {
      en: "Called with an incoming message when your app can handle it itself.",
      hi: "जब आपका ऐप खुद सँभाल सकता है, तब आए हुए संदेश के साथ बुलाया जाता है।",
      "hi-en": "Jab aapka app khud sambhal sakta hai, tab aaye hue sandesh ke saath bulaya jaata hai.",
    },
    affects: {
      en: "Whether it is called at all depends on the payload. A message with a `notification` block is drawn by the system when your app is backgrounded and this never runs; a data-only message always reaches here. That single distinction explains almost every \"push works in the foreground but not in the background\" report, and it is fixed on the server, not in the app.",
      hi: "यह बुलाया भी जाएगा या नहीं, वह payload पर टिका है। जिस संदेश में `notification` का हिस्सा है उसे ऐप के पीछे रहते तंत्र खुद बनाता है और यह कभी चलता ही नहीं; सिर्फ data वाला संदेश हमेशा यहीं पहुँचता है। यही एक फर्क लगभग हर उस शिकायत को समझा देता है कि \"push सामने रहते चलता है, पीछे नहीं\", और उसका हल ऐप में नहीं, server पर है।",
      "hi-en": "Yeh bulaya bhi jaayega ya nahi, wo payload par tika hai. Jis sandesh mein `notification` ka hissa hai use app ke peechhe rehte tantra khud banata hai aur yeh kabhi chalta hi nahi; sirf data wala sandesh hamesha yahin pahunchta hai. Yahi ek farak lagbhag har us shikaayat ko samjha deta hai ki \"push saamne rehte chalta hai, peechhe nahi\", aur uska hal app mein nahi, server par hai.",
    },
    related: ["FirebaseMessagingService", "RemoteMessage"],
  },

  RemoteMessage: {
    term: "RemoteMessage",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.firebase.messaging.RemoteMessage",
    does: {
      en: "One push message: a `data` map, and optionally a notification block.",
      hi: "एक push का संदेश: `data` का नक्शा, और चाहें तो notification का हिस्सा।",
      "hi-en": "Ek push ka sandesh: `data` ka naksha, aur chahein to notification ka hissa.",
    },
    affects: {
      en: "Everything in `data` is a string, so ids and flags need parsing and a missing key needs a real answer rather than a crash. Treat the payload as a hint, not as truth: it is small, it can be dropped, and it can arrive out of order, so the correct pattern is to use it as a signal to fetch from your own API.",
      hi: "`data` में सब कुछ string है, तो ids और झंडों को पढ़ना पड़ता है और छूटी हुई चाबी को crash नहीं, असली जवाब चाहिए। उस payload को सच नहीं, इशारा मानिए: वह छोटा है, गिर सकता है, और बेतरतीब आ सकता है, तो सही तरीका उसे अपनी ही API से लाने के इशारे की तरह लेना है।",
      "hi-en": "`data` mein sab kuchh string hai, to ids aur jhandon ko padhna padta hai aur chhooti hui chaabi ko crash nahi, asli jawaab chahiye. Us payload ko sach nahi, ishaara maaniye: wo chhota hai, gir sakta hai, aur betarteeb aa sakta hai, to sahi tareeka use apni hi API se laane ke ishaare ki tarah lena hai.",
    },
    related: ["onMessageReceived", "FirebaseMessagingService"],
  },

  FirebaseMessaging: {
    term: "FirebaseMessaging",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.firebase.messaging.FirebaseMessaging",
    does: {
      en: "Gives you the device's push token and manages topic subscriptions.",
      hi: "उपकरण का push का token देता है और विषयों की सदस्यता सँभालता है।",
      "hi-en": "Upkaran ka push ka token deta hai aur vishayon ki sadasyata sambhalta hai.",
    },
    affects: {
      en: "The token is per install, not per user, and it changes — on reinstall, on restore to a new phone, on data clear — so registering it once at sign-in is not enough and `onNewToken` must send it too. It is also why sign-out has to call `deleteToken`: leave it and the next person to use that phone receives the previous user's notifications.",
      hi: "वह token हर install का है, हर उपयोगकर्ता का नहीं, और वह बदलता है — दोबारा install पर, नए फोन पर लौटाने पर, data मिटाने पर — तो sign-in पर एक बार दर्ज कर देना काफी नहीं और `onNewToken` को भी उसे भेजना पड़ता है। इसीलिए sign-out को `deleteToken` बुलाना ही पड़ता है: छोड़ दीजिए तो उस फोन का अगला इस्तेमाल करने वाला पिछले उपयोगकर्ता की notifications पाएगा।",
      "hi-en": "Wo token har install ka hai, har upyogkarta ka nahi, aur wo badalta hai — dobara install par, naye phone par lautane par, data mitaane par — to sign-in par ek baar darj kar dena kaafi nahi aur `onNewToken` ko bhi use bhejna padta hai. Isiliye sign-out ko `deleteToken` bulana hi padta hai: chhod dijiye to us phone ka agla istemaal karne wala pichhle upyogkarta ki notifications paayega.",
    },
    related: ["onNewToken", "subscribeToTopic"],
  },

  onNewToken: {
    term: "onNewToken",
    kind: { en: "Callback", hi: "Callback", "hi-en": "Callback" },
    source: "library",
    importLine: null,
    does: {
      en: "Called whenever the push token is issued or replaced.",
      hi: "जब भी push का token जारी या बदला जाता है, तब बुलाया जाता है।",
      "hi-en": "Jab bhi push ka token jaari ya badla jaata hai, tab bulaya jaata hai.",
    },
    affects: {
      en: "It can fire when no one is signed in and when there is no network, so sending it directly with an HTTP call loses it. Enqueue a worker instead: the registration then survives the process dying and retries when connectivity returns, which is the difference between push that works for everyone and push that works for people with good signal.",
      hi: "यह तब भी चल सकता है जब कोई signed in न हो और नेट भी न हो, तो सीधे HTTP की call से भेजना उसे खो देता है। उसकी जगह कोई worker कतार में डालिए: तब वह दर्ज होना process के मरने पर भी बचता है और नेट लौटने पर दोबारा कोशिश करता है, और यही सबके लिए चलते push और अच्छे signal वालों के लिए चलते push में फर्क है।",
      "hi-en": "Yeh tab bhi chal sakta hai jab koi signed in na ho aur net bhi na ho, to seedhe HTTP ki call se bhejna use kho deta hai. Uski jagah koi worker kataar mein daaliye: tab wo darj hona process ke marne par bhi bachta hai aur net lautne par dobara koshish karta hai, aur yahi sabke liye chalte push aur achhe signal walon ke liye chalte push mein farak hai.",
    },
    related: ["FirebaseMessaging", "OneTimeWorkRequestBuilder"],
  },

  subscribeToTopic: {
    term: "subscribeToTopic",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Signs the device up for a named broadcast channel.",
      hi: "उपकरण को नाम वाले किसी प्रसारण के channel में शामिल कर देता है।",
      "hi-en": "Upkaran ko naam wale kisi prasaaran ke channel mein shaamil kar deta hai.",
    },
    affects: {
      en: "It saves you from storing tokens for broadcast-style sends, which is genuinely useful for \"everyone in this city\" or \"everyone on the beta\". What it must not carry is anything private: a topic name is a public string on the device, and there is no authorisation on subscribing, so any app that guesses `user_1234` receives that user's messages.",
      hi: "प्रसारण जैसे भेजने के लिए tokens रखने से यह बचा लेता है, जो \"इस शहर के सब\" या \"beta वाले सब\" के लिए सच में काम का है। जो इसमें नहीं होना चाहिए वह है कोई निजी बात: विषय का नाम उपकरण पर पड़ी सार्वजनिक string है, और शामिल होने पर कोई इजाजत नहीं लगती, तो जो भी ऐप `user_1234` का अंदाजा लगा ले वह उस उपयोगकर्ता के संदेश पाने लगता है।",
      "hi-en": "Prasaaran jaise bhejne ke liye tokens rakhne se yeh bacha leta hai, jo \"is shehar ke sab\" ya \"beta wale sab\" ke liye sach mein kaam ka hai. Jo ismein nahi hona chahiye wo hai koi niji baat: vishay ka naam upkaran par padi saarvajanik string hai, aur shaamil hone par koi ijaazat nahi lagti, to jo bhi app `user_1234` ka andaaza laga le wo us upyogkarta ke sandesh paane lagta hai.",
    },
    related: ["FirebaseMessaging"],
  },

  signInWithEmailAndPassword: {
    term: "signInWithEmailAndPassword",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Authenticates against Firebase Auth with an email and password.",
      hi: "किसी email और password से Firebase Auth में पहचान कराता है।",
      "hi-en": "Kisi email aur password se Firebase Auth mein pehchaan karata hai.",
    },
    affects: {
      en: "It throws typed exceptions, and mapping them one-to-one onto messages is a mistake: `FirebaseAuthInvalidUserException` means no such account and `FirebaseAuthInvalidCredentialsException` means wrong password, so distinct messages tell an attacker which emails are registered. Collapse both into one, and keep the network case separate so a user offline is not told their password is wrong.",
      hi: "यह किस्म वाले exceptions फेंकता है, और उन्हें एक-के-बदले-एक संदेशों पर बिठाना गलती है: `FirebaseAuthInvalidUserException` का मतलब ऐसा खाता है ही नहीं और `FirebaseAuthInvalidCredentialsException` का मतलब गलत password, तो अलग-अलग संदेश हमलावर को बता देते हैं कि कौन से email दर्ज हैं। दोनों को एक में मिलाइए, और नेट वाले मामले को अलग रखिए ताकि बिना नेट वाले से यह न कहा जाए कि उसका password गलत है।",
      "hi-en": "Yeh kism wale exceptions phenkta hai, aur unhein ek-ke-badle-ek sandeshon par bithana galti hai: `FirebaseAuthInvalidUserException` ka matlab aisa khaata hai hi nahi aur `FirebaseAuthInvalidCredentialsException` ka matlab galat password, to alag-alag sandesh hamlaawar ko bata dete hain ki kaun se email darj hain. Donon ko ek mein milaiye, aur net wale maamle ko alag rakhiye taki bina net wale se yeh na kaha jaaye ki uska password galat hai.",
    },
    related: ["currentUser", "addAuthStateListener", "signInWithCredential"],
  },

  currentUser: {
    term: "currentUser",
    kind: { en: "Property", hi: "खूबी", "hi-en": "Khoobi" },
    source: "library",
    importLine: null,
    does: {
      en: "The signed-in user, or `null` when nobody is.",
      hi: "Signed in उपयोगकर्ता, या `null` जब कोई नहीं है।",
      "hi-en": "Signed in upyogkarta, ya `null` jab koi nahi hai.",
    },
    affects: {
      en: "Reading it once at startup is the bug: it is `null` for a moment while the SDK restores the session from disk, so a launch check often decides the user is signed out and sends them to the login screen. Observe `addAuthStateListener` instead, and treat the very first emission as the answer.",
      hi: "शुरुआत में इसे एक बार पढ़ लेना ही गड़बड़ी है: SDK के disk से session लौटाने के दौरान यह एक पल के लिए `null` होता है, तो खुलते वक्त की परख अक्सर तय कर लेती है कि उपयोगकर्ता signed out है और उसे login की screen पर भेज देती है। उसकी जगह `addAuthStateListener` देखिए, और सबसे पहली आवाज को ही जवाब मानिए।",
      "hi-en": "Shuruaat mein ise ek baar padh lena hi gadbadi hai: SDK ke disk se session lautane ke dauraan yeh ek pal ke liye `null` hota hai, to kholte waqt ki parakh aksar tay kar leti hai ki upyogkarta signed out hai aur use login ki screen par bhej deti hai. Uski jagah `addAuthStateListener` dekhiye, aur sabse pehli aawaz ko hi jawaab maaniye.",
    },
    related: ["addAuthStateListener", "signInWithEmailAndPassword"],
  },

  addAuthStateListener: {
    term: "addAuthStateListener",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Notifies you whenever the signed-in user changes, including on session restore.",
      hi: "जब भी signed in उपयोगकर्ता बदले, बता देता है, session लौटने पर भी।",
      "hi-en": "Jab bhi signed in upyogkarta badle, bata deta hai, session lautne par bhi.",
    },
    affects: {
      en: "Wrapped in `callbackFlow` it becomes the single source of truth for authentication, which lets navigation be a function of state rather than a pile of manual redirects — sign-out anywhere, including a token revoked on the server, moves every screen at once. Remember the matching `removeAuthStateListener` in `awaitClose`, or each new screen adds another live listener.",
      hi: "`callbackFlow` में लपेटकर यह पहचान का इकलौता सच्चा स्रोत बन जाता है, जिससे navigation हाथ से किए गए मोड़ों का ढेर नहीं, हालत का function बन जाता है — कहीं से भी sign-out, server पर रद्द हुए token समेत, सारी screens एक साथ हिला देता है। `awaitClose` में मेल खाता `removeAuthStateListener` याद रखिए, वरना हर नई screen एक और जिंदा listener जोड़ देती है।",
      "hi-en": "`callbackFlow` mein lapetkar yeh pehchaan ka iklauta saccha srot ban jaata hai, jisse navigation haath se kiye gaye modon ka dher nahi, haalat ka function ban jaata hai — kahin se bhi sign-out, server par radd hue token samet, saari screens ek saath hila deta hai. `awaitClose` mein mel khaata `removeAuthStateListener` yaad rakhiye, warna har nayi screen ek aur zinda listener jod deti hai.",
    },
    related: ["currentUser", "callbackFlow", "awaitClose"],
  },

  signInWithCredential: {
    term: "signInWithCredential",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Signs in with a credential obtained from another provider, such as a Google id token.",
      hi: "किसी दूसरे प्रदाता से मिली पहचान से sign in कराता है, जैसे Google का कोई id token।",
      "hi-en": "Kisi doosre pradaata se mili pehchaan se sign in karata hai, jaise Google ka koi id token.",
    },
    affects: {
      en: "The step people get wrong is upstream: the id token must be requested with the **web** client id, not the Android one, and using the Android id produces a token Firebase rejects with an error that says nothing about which id was used. Once past that, this is also how accounts get linked, so decide early whether an email that already exists should merge or refuse.",
      hi: "जो कदम लोग गलत करते हैं वह पहले का है: वह id token **web** वाली client की पहचान से माँगा जाना चाहिए, Android वाली से नहीं, और Android वाली से ऐसा token बनता है जिसे Firebase ऐसी error से ठुकराता है जो यह बताती ही नहीं कि कौन सी पहचान लगी थी। उससे आगे, खाते जोड़े भी इसी से जाते हैं, तो पहले ही तय कीजिए कि पहले से मौजूद email को मिलाना है या मना करना।",
      "hi-en": "Jo kadam log galat karte hain wo pehle ka hai: wo id token **web** wali client ki pehchaan se maanga jaana chahiye, Android wali se nahi, aur Android wali se aisa token banta hai jise Firebase aisi error se thukraata hai jo yeh bataati hi nahi ki kaun si pehchaan lagi thi. Usse aage, khaate jode bhi isi se jaate hain, to pehle hi tay kijiye ki pehle se maujood email ko milana hai ya mana karna.",
    },
    related: ["signInWithEmailAndPassword", "currentUser"],
  },

  whereEqualTo: {
    term: "whereEqualTo",
    kind: { en: "Query method", hi: "Query का method", "hi-en": "Query ka method" },
    source: "library",
    importLine: null,
    does: {
      en: "Filters a Firestore query to documents where a field equals a value.",
      hi: "Firestore की query को उन documents तक सीमित करता है जहाँ कोई खाना उस मान के बराबर हो।",
      "hi-en": "Firestore ki query ko un documents tak seemit karta hai jahan koi khaana us maan ke baraabar ho.",
    },
    affects: {
      en: "Firestore bills for documents read, so a filter is a cost control before it is a correctness one — reading a collection and filtering in Kotlin is the mistake that quietly turns into a large bill. More than one filter, or a filter plus an `orderBy` on a different field, needs a composite index; the error message contains a link that creates it, which is the fastest fix you will ever apply.",
      hi: "Firestore पढ़े गए documents के पैसे लेता है, तो filter सही होने से पहले खर्च का काबू है — पूरा collection पढ़कर Kotlin में छाँटना वह गलती है जो चुपचाप बड़े बिल में बदलती है। एक से ज्यादा filter, या किसी दूसरे खाने पर `orderBy` के साथ filter, को मिला-जुला index चाहिए; उस error के संदेश में वही link होता है जो उसे बना देता है, और यह आपका लगाया सबसे तेज हल होगा।",
      "hi-en": "Firestore padhe gaye documents ke paise leta hai, to filter sahi hone se pehle kharch ka kaaboo hai — poora collection padhkar Kotlin mein chhaantna wo galti hai jo chupchaap bade bill mein badalti hai. Ek se zyada filter, ya kisi doosre khaane par `orderBy` ke saath filter, ko mila-jula index chahiye; us error ke sandesh mein wahi link hota hai jo use bana deta hai, aur yeh aapka lagaya sabse tez hal hoga.",
    },
    related: ["addSnapshotListener", "runTransaction", "SetOptions"],
  },

  addSnapshotListener: {
    term: "addSnapshotListener",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Streams a query's results and every later change to them.",
      hi: "किसी query के नतीजे और उनमें आगे होने वाला हर बदलाव धारा की तरह देता है।",
      "hi-en": "Kisi query ke nateeje aur unmein aage hone wala har badlaav dhaara ki tarah deta hai.",
    },
    affects: {
      en: "The registration it returns must be removed, which is why it belongs inside `callbackFlow` with `registration.remove()` in `awaitClose` — a listener left attached keeps receiving updates and keeps billing reads long after the screen is gone. It also fires immediately with cached data before the server responds, which is what makes Firestore feel offline-first for free.",
      hi: "यह जो पंजी लौटाता है उसे हटाना पड़ता है, और इसीलिए यह `callbackFlow` के भीतर की चीज है, `awaitClose` में `registration.remove()` के साथ — लगा छूटा हुआ listener screen के जाने के बहुत बाद तक बदलाव पाता रहता है और पढ़ने के पैसे कटवाता रहता है। Server के जवाब देने से पहले यह जमा हुए data के साथ तुरंत भी चलता है, और यही Firestore को मुफ्त में बिना नेट पहले वाला महसूस कराता है।",
      "hi-en": "Yeh jo panji lautata hai use hataana padta hai, aur isiliye yeh `callbackFlow` ke bheetar ki cheez hai, `awaitClose` mein `registration.remove()` ke saath — laga chhoota hua listener screen ke jaane ke bahut baad tak badlaav paata rehta hai aur padhne ke paise katwata rehta hai. Server ke jawaab dene se pehle yeh jama hue data ke saath turant bhi chalta hai, aur yahi Firestore ko muft mein bina net pehle wala mehsoos karata hai.",
    },
    related: ["whereEqualTo", "callbackFlow", "awaitClose"],
  },

  runTransaction: {
    term: "runTransaction",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Reads and writes documents atomically, retrying if another client interfered.",
      hi: "Documents को एक ही झटके में पढ़ता और लिखता है, और कोई दूसरा client बीच में आए तो दोबारा कोशिश करता है।",
      "hi-en": "Documents ko ek hi jhatke mein padhta aur likhta hai, aur koi doosra client beech mein aaye to dobara koshish karta hai.",
    },
    affects: {
      en: "Use it wherever the new value depends on the old one — a counter, a stock level, a seat — because read-then-write in two calls loses updates the moment two clients overlap. The block can run more than once, so it must be free of side effects: no notifications, no analytics, no local state changed inside it.",
      hi: "जहाँ नया मान पुराने पर टिका हो वहीं लीजिए — कोई गिनती, कोई भंडार, कोई सीट — क्योंकि दो calls में पढ़ो-फिर-लिखो, दो clients के टकराते ही बदलाव खो देता है। वह हिस्सा एक से ज्यादा बार चल सकता है, तो उसमें कोई side effect नहीं होना चाहिए: कोई notification नहीं, कोई analytics नहीं, भीतर कोई स्थानीय हालत नहीं बदली जाए।",
      "hi-en": "Jahan naya maan purane par tika ho wahin lijiye — koi ginti, koi bhandaar, koi seat — kyonki do calls mein padho-phir-likho, do clients ke takraate hi badlaav kho deta hai. Wo hissa ek se zyada baar chal sakta hai, to usmein koi side effect nahi hona chahiye: koi notification nahi, koi analytics nahi, bheetar koi sthaaniya haalat nahi badli jaaye.",
    },
    related: ["SetOptions", "whereEqualTo"],
  },

  SetOptions: {
    term: "SetOptions",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.firebase.firestore.SetOptions",
    does: {
      en: "Turns a `set` into a merge instead of a full replacement.",
      hi: "किसी `set` को पूरी जगह लेने के बजाय मिलाने वाला बना देता है।",
      "hi-en": "Kisi `set` ko poori jagah lene ke bajay milane wala bana deta hai.",
    },
    affects: {
      en: "Plain `set` replaces the whole document, so writing a partial object silently deletes every field you left out — the data loss is complete, immediate and looks like a successful write. `merge()` patches only the fields present, and `update` is the third option that fails loudly if the document does not exist, which is often what you actually wanted.",
      hi: "सादा `set` पूरे document की जगह ले लेता है, तो अधूरी चीज लिखना उन सब खानों को चुपचाप मिटा देता है जो आपने छोड़े — वह नुकसान पूरा है, तुरंत है, और कामयाब लिखने जैसा दिखता है। `merge()` सिर्फ मौजूद खानों पर patch लगाता है, और `update` तीसरा रास्ता है जो document न होने पर जोर से गिरता है, और अक्सर आप असल में वही चाहते थे।",
      "hi-en": "Saada `set` poore document ki jagah le leta hai, to adhoori cheez likhna un sab khaanon ko chupchaap mita deta hai jo aapne chhode — wo nuksaan poora hai, turant hai, aur kaamyaab likhne jaisa dikhta hai. `merge()` sirf maujood khaanon par patch lagata hai, aur `update` teesra raasta hai jo document na hone par zor se girta hai, aur aksar aap asal mein wahi chaahte the.",
    },
    related: ["runTransaction", "whereEqualTo"],
  },

  FirebaseCrashlytics: {
    term: "FirebaseCrashlytics",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.firebase.crashlytics.FirebaseCrashlytics",
    does: {
      en: "Collects crashes with a stack trace, breadcrumbs and the keys you attach.",
      hi: "Crashes को stack trace, निशानों और आपकी लगाई चाबियों के साथ जमा करता है।",
      "hi-en": "Crashes ko stack trace, nishaanon aur aapki lagai chaabiyon ke saath jama karta hai.",
    },
    affects: {
      en: "A stack trace tells you where, and custom keys tell you who and what — which screen, which variant, whether the user was offline — and that difference is usually what makes a crash reproducible. Never put an email or a name in `setUserId`: use an opaque id, because a crash report is a data export that leaves your control.",
      hi: "Stack trace बताती है कहाँ, और आपकी चाबियाँ बताती हैं कौन और क्या — कौन सी screen, कौन सा रूप, उपयोगकर्ता बिना नेट था या नहीं — और यही फर्क आमतौर पर किसी crash को दोहराने लायक बनाता है। `setUserId` में कभी email या नाम न रखिए: कोई अपारदर्शी पहचान लीजिए, क्योंकि crash की रिपोर्ट एक ऐसा data है जो आपके काबू से बाहर चला जाता है।",
      "hi-en": "Stack trace bataati hai kahan, aur aapki chaabiyan bataati hain kaun aur kya — kaun si screen, kaun sa roop, upyogkarta bina net tha ya nahi — aur yahi farak aamtaur par kisi crash ko dohraane layak banata hai. `setUserId` mein kabhi email ya naam na rakhiye: koi apaardarshi pehchaan lijiye, kyonki crash ki report ek aisa data hai jo aapke kaaboo se bahar chala jaata hai.",
    },
    related: ["setCustomKey", "logEvent"],
  },

  setCustomKey: {
    term: "setCustomKey",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Attaches a named value to every crash reported from now on.",
      hi: "अब से बताई जाने वाली हर crash पर नाम वाला कोई मान लगा देता है।",
      "hi-en": "Ab se batai jaane wali har crash par naam wala koi maan laga deta hai.",
    },
    affects: {
      en: "Keys are what let you filter a crash board by the thing you suspect — a flavour, a feature flag, a screen — instead of reading a thousand identical traces. Pick a small fixed set and set them at the same points every time; keys added ad hoc in one code path produce reports you cannot compare against each other.",
      hi: "चाबियाँ ही आपको crash के board को उसी चीज से छाँटने देती हैं जिस पर शक है — कोई flavour, कोई सुविधा का झंडा, कोई screen — हजार एक जैसी traces पढ़ने के बजाय। छोटा और तय सेट चुनिए और हर बार उन्हीं जगहों पर रखिए; किसी एक रास्ते में जरूरत पड़ने पर जोड़ी गई चाबियाँ ऐसी रिपोर्टें बनाती हैं जिन्हें आपस में मिलाया नहीं जा सकता।",
      "hi-en": "Chaabiyan hi aapko crash ke board ko usi cheez se chhaantne deti hain jis par shak hai — koi flavour, koi suvidha ka jhanda, koi screen — hazaar ek jaisi traces padhne ke bajay. Chhota aur tay set chuniye aur har baar unhi jagahon par rakhiye; kisi ek raaste mein zaroorat padne par jodi gayi chaabiyan aisi reportein banati hain jinhein aapas mein milaya nahi ja sakta.",
    },
    related: ["FirebaseCrashlytics"],
  },

  fetchAndActivate: {
    term: "fetchAndActivate",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Downloads Remote Config values and makes them the ones your code reads.",
      hi: "Remote Config के मान उतारता है और उन्हीं को आपके code का पढ़ा हुआ बना देता है।",
      "hi-en": "Remote Config ke maan utaarta hai aur unhi ko aapke code ka padha hua bana deta hai.",
    },
    affects: {
      en: "Fetching and activating in one call means values can change mid-session, so a flag read twice can answer differently and a screen can rebuild itself under the user. Fetch on launch, activate once, and treat the config as fixed for that session — and always set `setDefaultsAsync` first, because the very first launch happens before any fetch completes.",
      hi: "एक ही call में लाना और चालू करना यह मतलब रखता है कि मान बीच session में बदल सकते हैं, तो दो बार पढ़ा गया झंडा अलग जवाब दे सकता है और screen उपयोगकर्ता के नीचे से दोबारा बन सकती है। खुलने पर लाइए, एक बार चालू कीजिए, और उस session के लिए सजावट को तय मानिए — और `setDefaultsAsync` हमेशा पहले रखिए, क्योंकि सबसे पहला खुलना किसी भी fetch के पूरे होने से पहले होता है।",
      "hi-en": "Ek hi call mein laana aur chaalu karna yeh matlab rakhta hai ki maan beech session mein badal sakte hain, to do baar padha gaya jhanda alag jawaab de sakta hai aur screen upyogkarta ke neeche se dobara ban sakti hai. Khulne par laaiye, ek baar chaalu kijiye, aur us session ke liye sajaavat ko tay maaniye — aur `setDefaultsAsync` hamesha pehle rakhiye, kyonki sabse pehla khulna kisi bhi fetch ke poore hone se pehle hota hai.",
    },
    related: ["setDefaultsAsync", "logEvent"],
  },

  setDefaultsAsync: {
    term: "setDefaultsAsync",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Supplies the values Remote Config returns before any fetch has succeeded.",
      hi: "किसी भी fetch के कामयाब होने से पहले Remote Config जो मान लौटाए, वे देता है।",
      "hi-en": "Kisi bhi fetch ke kaamyaab hone se pehle Remote Config jo maan lautaaye, wo deta hai.",
    },
    affects: {
      en: "The default must be the safe state, not the exciting one: a new checkout defaulting to `true` ships to every first-launch user before the config arrives, which is the opposite of a controlled rollout. Getting this backwards turns a flag that was meant to protect a launch into the thing that broke it.",
      hi: "तयशुदा मान सुरक्षित हालत होनी चाहिए, रोमांचक नहीं: `true` पर तय किया गया नया checkout config के आने से पहले ही हर पहली बार खोलने वाले तक चला जाता है, जो काबू में किए गए रोल-आउट का उलटा है। इसे उलटा कर देना उस झंडे को, जो launch बचाने को था, launch तोड़ने वाली चीज बना देता है।",
      "hi-en": "Tayshuda maan surakshit haalat honi chahiye, romaanchak nahi: `true` par tay kiya gaya naya checkout config ke aane se pehle hi har pehli baar kholne wale tak chala jaata hai, jo kaaboo mein kiye gaye roll-out ka ulta hai. Ise ulta kar dena us jhande ko, jo launch bachaane ko tha, launch todne wali cheez bana deta hai.",
    },
    related: ["fetchAndActivate"],
  },

  logEvent: {
    term: "logEvent",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Records a named analytics event with typed parameters.",
      hi: "नाम वाली कोई analytics की घटना, किस्म वाले parameters के साथ दर्ज करता है।",
      "hi-en": "Naam wali koi analytics ki ghatna, kism wale parameters ke saath darj karta hai.",
    },
    affects: {
      en: "Names and parameters are effectively permanent — renaming one splits its history in two and you cannot merge them back — so the naming scheme is worth agreeing before the first event ships. Collection should also start disabled until the user has agreed, because an event sent before consent cannot be recalled from the server.",
      hi: "नाम और parameters असल में हमेशा के लिए हैं — किसी एक का नाम बदलना उसके इतिहास को दो में बाँट देता है और आप उन्हें वापस मिला नहीं सकते — तो पहली घटना भेजने से पहले नामों का तरीका तय कर लेना कीमत रखता है। उपयोगकर्ता के मानने तक जमा करना बंद भी रहना चाहिए, क्योंकि मंजूरी से पहले भेजी गई घटना server से वापस नहीं ली जा सकती।",
      "hi-en": "Naam aur parameters asal mein hamesha ke liye hain — kisi ek ka naam badalna uske itihaas ko do mein baant deta hai aur aap unhein wapas mila nahi sakte — to pehli ghatna bhejne se pehle naamon ka tareeka tay kar lena keemat rakhta hai. Upyogkarta ke maanne tak jama karna band bhi rehna chahiye, kyonki manzoori se pehle bheji gayi ghatna server se wapas nahi li ja sakti.",
    },
    related: ["FirebaseCrashlytics", "fetchAndActivate"],
  },

  OneTimeWorkRequestBuilder: {
    term: "OneTimeWorkRequestBuilder",
    kind: { en: "Builder", hi: "Builder", "hi-en": "Builder" },
    source: "jetpack",
    importLine: "import androidx.work.OneTimeWorkRequestBuilder",
    does: {
      en: "Describes a single piece of background work for `WorkManager` to run.",
      hi: "`WorkManager` के चलाने लायक पीछे के एक काम का ब्योरा देता है।",
      "hi-en": "`WorkManager` ke chalaane layak peechhe ke ek kaam ka byora deta hai.",
    },
    affects: {
      en: "Enqueuing one is how a short-lived callback — a push message, a broadcast, a token change — hands off work that must actually complete, because the request is persisted to disk and survives the process being killed and the device rebooting. That durability is the entire reason to reach for it rather than a coroutine.",
      hi: "किसी छोटी उम्र वाले callback — कोई push का संदेश, कोई broadcast, token का बदलना — के लिए वह काम सौंपने का यही तरीका है जो सच में पूरा होना चाहिए, क्योंकि वह माँग disk पर लिखी जाती है और process के मारे जाने तथा उपकरण के दोबारा चालू होने से भी बच जाती है। किसी coroutine के बजाय इसे उठाने की पूरी वजह वही टिकाऊपन है।",
      "hi-en": "Kisi chhoti umar wale callback — koi push ka sandesh, koi broadcast, token ka badalna — ke liye wo kaam saunpne ka yahi tareeka hai jo sach mein poora hona chahiye, kyonki wo maang disk par likhi jaati hai aur process ke maare jaane tatha upkaran ke dobara chaalu hone se bhi bach jaati hai. Kisi coroutine ke bajay ise uthaane ki poori wajah wahi tikaaupan hai.",
    },
    related: ["workDataOf", "FirebaseMessagingService", "onNewToken"],
  },

  workDataOf: {
    term: "workDataOf",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "jetpack",
    importLine: "import androidx.work.workDataOf",
    does: {
      en: "Builds the small key-value bundle passed into or out of a worker.",
      hi: "किसी worker के भीतर या बाहर जाने वाला छोटा चाबी-मान का गट्ठर बनाता है।",
      "hi-en": "Kisi worker ke bheetar ya bahar jaane wala chhota chaabi-maan ka gatthar banata hai.",
    },
    affects: {
      en: "It holds about ten kilobytes and only primitives and their arrays, which is a deliberate limit rather than an oversight: the data is written to disk with the request, so passing a whole object would mean serialising state that is stale by the time the worker runs. Pass an id and let the worker read the current row.",
      hi: "यह करीब दस किलोबाइट और सिर्फ बुनियादी किस्म तथा उनकी arrays रखता है, और यह चूक नहीं, जानबूझकर रखी हद है: वह data उस माँग के साथ disk पर लिखा जाता है, तो पूरी चीज भेजने का मतलब होता ऐसी हालत लिखना जो worker के चलते वक्त तक बासी हो चुकी है। कोई पहचान भेजिए और worker को अभी की पंक्ति पढ़ने दीजिए।",
      "hi-en": "Yeh kareeb das kilobyte aur sirf buniyaadi kism tatha unki arrays rakhta hai, aur yeh chook nahi, jaanboojhkar rakhi had hai: wo data us maang ke saath disk par likha jaata hai, to poori cheez bhejne ka matlab hota aisi haalat likhna jo worker ke chalte waqt tak baasi ho chuki hai. Koi pehchaan bhejiye aur worker ko abhi ki pankti padhne dijiye.",
    },
    related: ["OneTimeWorkRequestBuilder"],
  },

  WebSocketListener: {
    term: "WebSocketListener",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "library",
    importLine: "import okhttp3.WebSocketListener",
    does: {
      en: "Receives the open, message, failure and closed events of an OkHttp WebSocket.",
      hi: "OkHttp के किसी WebSocket के खुलने, संदेश, नाकामी और बंद होने की घटनाएँ पाता है।",
      "hi-en": "OkHttp ke kisi WebSocket ke khulne, sandesh, naakami aur band hone ki ghatnaayein paata hai.",
    },
    affects: {
      en: "Its callbacks arrive on OkHttp's own thread, not yours, which is why the sane shape is `callbackFlow` — `trySend` from the callback, `socket.close(1000, ...)` in `awaitClose`, and the collector's context decides where the work happens. Treat `onFailure` as normal: a mobile socket disconnects constantly, so reconnection with backoff is part of the feature rather than error handling.",
      hi: "इसके callbacks आपके नहीं, OkHttp के अपने धागे पर आते हैं, और इसीलिए समझदार शक्ल `callbackFlow` है — callback से `trySend`, `awaitClose` में `socket.close(1000, ...)`, और काम कहाँ हो यह collect करने वाले का माहौल तय करता है। `onFailure` को आम मानिए: mobile का socket लगातार टूटता है, तो ठहराव के साथ दोबारा जुड़ना error सँभालना नहीं, उसी सुविधा का हिस्सा है।",
      "hi-en": "Iske callbacks aapke nahi, OkHttp ke apne dhaage par aate hain, aur isiliye samajhdaar shakl `callbackFlow` hai — callback se `trySend`, `awaitClose` mein `socket.close(1000, ...)`, aur kaam kahan ho yeh collect karne wale ka maahaul tay karta hai. `onFailure` ko aam maaniye: mobile ka socket lagataar toot-ta hai, to thehraav ke saath dobara judna error sambhalna nahi, usi suvidha ka hissa hai.",
    },
    related: ["newWebSocket", "callbackFlow", "retryWhen"],
  },

  newWebSocket: {
    term: "newWebSocket",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: null,
    does: {
      en: "Opens a WebSocket on an OkHttp client and attaches a listener to it.",
      hi: "किसी OkHttp client पर WebSocket खोलता है और उससे कोई listener जोड़ देता है।",
      "hi-en": "Kisi OkHttp client par WebSocket kholta hai aur usse koi listener jod deta hai.",
    },
    affects: {
      en: "It returns immediately — the handshake happens in the background and the first sign of success is `onOpen`, so anything sent before that is queued rather than delivered. Reuse the same `OkHttpClient` you use for HTTP: it shares the connection pool and the dispatcher, and creating a second one doubles the threads and sockets for no benefit.",
      hi: "यह तुरंत लौट आता है — हाथ मिलाना पीछे होता है और कामयाबी का पहला निशान `onOpen` है, तो उससे पहले भेजी हर चीज पहुँचती नहीं, कतार में लगती है। वही `OkHttpClient` दोबारा इस्तेमाल कीजिए जो HTTP के लिए है: वह connection का तालाब और dispatcher बाँट लेता है, और दूसरा बनाना बिना किसी फायदे के धागे और sockets दोगुने कर देता है।",
      "hi-en": "Yeh turant laut aata hai — haath milana peechhe hota hai aur kaamyaabi ka pehla nishaan `onOpen` hai, to usse pehle bheji har cheez pahunchti nahi, kataar mein lagti hai. Wahi `OkHttpClient` dobara istemaal kijiye jo HTTP ke liye hai: wo connection ka taalab aur dispatcher baant leta hai, aur doosra banana bina kisi faayde ke dhaage aur sockets doguna kar deta hai.",
    },
    related: ["WebSocketListener", "callbackFlow"],
  },
};
