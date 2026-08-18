import type { Glossary } from "./types";

/**
 * Background execution, notifications, widgets and the hardware APIs.
 *
 * `Constraints` and `Preview` are deliberately absent here. Both names are
 * already taken by Compose classes, and the glossary matches bare tokens, so a
 * second entry would be unreachable — the WorkManager and CameraX meanings are
 * documented inside those existing entries instead.
 */
export const PLATFORM_GLOSSARY: Glossary = {
  WorkManager: {
    term: "WorkManager",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.work.WorkManager",
    does: {
      en: "Schedules work that must finish, even if the user leaves and the device reboots.",
      hi: "ऐसा काम लगाता है जो पूरा होना ही चाहिए, चाहे user चला जाए और device दोबारा चालू हो।",
      "hi-en": "Aisa kaam lagata hai jo poora hona hi chahiye, chahe user chala jaye aur device dobara chalu ho.",
    },
    affects: {
      en: "Surviving is the one thing it offers that a coroutine cannot — a `viewModelScope` job dies when the screen closes, which is right for loading a list and wrong for an upload. What it does not offer is timing: work is deferrable, and Doze batches it into maintenance windows that widen on an idle device.",
      hi: "बचे रहना ही वह इकलौती चीज है जो वह देता है और कोई coroutine नहीं दे सकता — `viewModelScope` वाला काम screen बंद होते ही मर जाता है, जो कोई list लाने के लिए सही है और upload के लिए गलत। जो वह नहीं देता वह है समय: उसका काम टाला जा सकता है, और Doze उसे रखरखाव वाली उन खिड़कियों में इकट्ठा कर देता है जो खाली पड़े device पर चौड़ी होती जाती हैं।",
      "hi-en": "Bache rehna hi wo iklauti cheez hai jo wo deta hai aur koi coroutine nahi de sakta — `viewModelScope` wala kaam screen band hote hi mar jata hai, jo koi list lane ke liye sahi hai aur upload ke liye galat. Jo wo nahi deta wo hai samay: uska kaam taala ja sakta hai, aur Doze use rakhrakhav wali un khidkiyon mein ikattha kar deta hai jo khaali pade device par chaudi hoti jati hain.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/workmanager",
    related: ["CoroutineWorker", "ExistingWorkPolicy", "AlarmManager"],
  },

  CoroutineWorker: {
    term: "CoroutineWorker",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.work.CoroutineWorker",
    does: {
      en: "A worker whose `doWork` is a `suspend` function, returning success, failure or retry.",
      hi: "ऐसा worker जिसका `doWork` `suspend` function है, और जो सफलता, नाकामी या दोबारा-कोशिश लौटाता है।",
      "hi-en": "Aisa worker jiska `doWork` `suspend` function hai, aur jo safalta, nakami ya dobara-koshish lautata hai.",
    },
    values: {
      en: "`Result.success()` runs any chained work, `Result.failure()` stops the chain, `Result.retry()` reschedules with exponential backoff.",
      hi: "`Result.success()` आगे जुड़ा काम चलाता है, `Result.failure()` कड़ी रोक देता है, `Result.retry()` बढ़ते अंतराल के साथ दोबारा लगाता है।",
      "hi-en": "`Result.success()` aage juda kaam chalata hai, `Result.failure()` kadi rok deta hai, `Result.retry()` badhte antaral ke saath dobara lagata hai.",
    },
    affects: {
      en: "`retry()` versus `failure()` is the same decision the network lesson made: a `5xx` or an I/O failure is worth retrying, a `400` will fail identically forever. Returning `retry()` for something permanently broken is how a worker runs on backoff until the app is uninstalled.",
      hi: "`retry()` बनाम `failure()` वही फैसला है जो network वाले पाठ ने किया था: `5xx` या कोई I/O नाकामी दोबारा भेजने लायक है, `400` हमेशा वैसे ही नाकाम होगा। जो चीज पक्की टूटी हुई है उसके लिए `retry()` लौटाना ही वह तरीका है जिससे कोई worker ऐप के uninstall होने तक बढ़ते अंतराल पर चलता रहता है।",
      "hi-en": "`retry()` banam `failure()` wahi faisla hai jo network wale lesson ne kiya tha: `5xx` ya koi I/O nakami dobara bhejne layak hai, `400` hamesha waise hi nakaam hoga. Jo cheez pakki tooti hui hai uske liye `retry()` lautana hi wo tarika hai jisse koi worker app ke uninstall hone tak badhte antaral par chalta rehta hai.",
    },
    related: ["WorkManager", "suspend", "Result"],
  },

  ExistingWorkPolicy: {
    term: "ExistingWorkPolicy",
    kind: { en: "Enum", hi: "Enum", "hi-en": "Enum" },
    source: "jetpack",
    importLine: "import androidx.work.ExistingWorkPolicy",
    does: {
      en: "Decides what `enqueueUniqueWork` does when work with that name is already queued.",
      hi: "तय करता है कि उस नाम का काम पहले से कतार में हो तो `enqueueUniqueWork` क्या करे।",
      "hi-en": "Tay karta hai ki us naam ka kaam pehle se line mein ho to `enqueueUniqueWork` kya kare.",
    },
    values: {
      en: "`KEEP` ignores the new request, `REPLACE` cancels the pending one, `APPEND` runs them in order.",
      hi: "`KEEP` नई माँग अनदेखी करता है, `REPLACE` बाकी पड़े को रोक देता है, `APPEND` उन्हें क्रम से चलाता है।",
      "hi-en": "`KEEP` nai maang andekhi karta hai, `REPLACE` baaki pade ko rok deta hai, `APPEND` unhe order se chalata hai.",
    },
    affects: {
      en: "Naming the work is what stops five taps from queueing five identical syncs that all run at once. Without a unique name every enqueue is a separate job, which is the usual cause of a server seeing the same request several times.",
      hi: "काम को नाम देना ही पाँच taps को पाँच एक जैसी syncs बनने से रोकता है जो सब एक साथ चलती हैं। बिना अलग नाम के हर enqueue अपना अलग काम है, और server को वही request कई बार दिखने की आम वजह यही है।",
      "hi-en": "Kaam ko naam dena hi paanch taps ko paanch ek jaisi syncs banne se rokta hai jo sab ek saath chalti hain. Bina alag naam ke har enqueue apna alag kaam hai, aur server ko wahi request kai baar dikhne ki aam wajah yahi hai.",
    },
    related: ["WorkManager", "CoroutineWorker"],
  },

  WorkInfo: {
    term: "WorkInfo",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.work.WorkInfo",
    does: {
      en: "Reports a worker's state and any progress it published, observable as a `Flow`.",
      hi: "किसी worker की हालत और उसकी भेजी प्रगति बताता है, जिसे `Flow` की तरह देखा जा सकता है।",
      "hi-en": "Kisi worker ki haalat aur uski bheji pragati batata hai, jise `Flow` ki tarah dekha ja sakta hai.",
    },
    values: {
      en: "`ENQUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `BLOCKED`, `CANCELLED`.",
      hi: "`ENQUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `BLOCKED`, `CANCELLED`।",
      "hi-en": "`ENQUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `BLOCKED`, `CANCELLED`.",
    },
    affects: {
      en: "This is how a screen shows an upload without owning it: the work belongs to the system, the screen only observes, so the progress bar stays correct across rotation and is still there when the user returns.",
      hi: "कोई screen upload इसी तरह दिखाती है बिना उसकी मालिक हुए: वह काम system का है, screen सिर्फ देखती है, तो progress वाली पट्टी rotation के आर-पार सही रहती है और user के लौटने पर भी वहीं होती है।",
      "hi-en": "Koi screen upload isi tarah dikhati hai bina uski maalik hue: wo kaam system ka hai, screen sirf dekhti hai, to progress wali patti rotation ke aar-paar sahi rehti hai aur user ke lautne par bhi wahin hoti hai.",
    },
    related: ["WorkManager", "Flow"],
  },

  Service: {
    term: "Service",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.app.Service",
    does: {
      en: "A component with no UI that runs work, typically promoted to the foreground with a notification.",
      hi: "बिना UI वाला हिस्सा जो काम चलाता है, आमतौर पर notification के साथ सामने लाया हुआ।",
      "hi-en": "Bina UI wala hissa jo kaam chalata hai, aam taur par notification ke saath saamne laya hua.",
    },
    affects: {
      en: "It is **not** a lifecycle owner, so there is no `lifecycleScope` — a coroutine launched here outlives the service unless you cancel your own scope in `onDestroy`, which is the leak that keeps a location listener running after the user stopped tracking.",
      hi: "यह lifecycle owner **नहीं** है, तो यहाँ कोई `lifecycleScope` नहीं है — यहाँ शुरू किया coroutine service से ज्यादा जीता है जब तक आप `onDestroy` में अपना scope खुद न रोकें, और यही वह leak है जो user के tracking बंद करने के बाद भी location सुनने वाले को चलाता रहता है।",
      "hi-en": "Ye lifecycle owner **nahi** hai, to yahan koi `lifecycleScope` nahi hai — yahan shuru kiya coroutine service se zyada jeeta hai jab tak aap `onDestroy` mein apna scope khud na roko, aur yahi wo leak hai jo user ke tracking band karne ke baad bhi location sunne wale ko chalata rehta hai.",
    },
    related: ["startForeground", "WorkManager", "lifecycleScope"],
  },

  startForeground: {
    term: "startForeground",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "android",
    importLine: null,
    does: {
      en: "Promotes a service to the foreground with a mandatory, non-dismissible notification.",
      hi: "किसी service को एक जरूरी, न हटाई जा सकने वाली notification के साथ सामने ले आता है।",
      "hi-en": "Kisi service ko ek zaruri, na hatai ja sakne wali notification ke saath saamne le aata hai.",
    },
    affects: {
      en: "It must be called within about **five seconds** of the service starting, or the system throws `ForegroundServiceDidNotStartInTimeException` and kills it — so build the notification first and start the work after, never the other way round. Since Android 12 a background app cannot start a foreground service at all outside a short exemption list, which is invisible in development because your app is on screen while you test.",
      hi: "Service के शुरू होने के करीब **पाँच सेकंड** के अंदर इसे बुलाना पड़ता है, वरना system `ForegroundServiceDidNotStartInTimeException` फेंककर उसे मार देता है — तो notification पहले बनाइए और काम बाद में शुरू कीजिए, कभी उलटा नहीं। Android 12 से पीछे गया ऐप छूटों की छोटी सूची के बाहर foreground service शुरू कर ही नहीं सकता, और बनाते वक्त यह अदृश्य है क्योंकि test करते हुए आपका ऐप screen पर होता है।",
      "hi-en": "Service ke shuru hone ke kareeb **paanch second** ke andar ise bulana padta hai, warna system `ForegroundServiceDidNotStartInTimeException` phenkkar use maar deta hai — to notification pehle banaiye aur kaam baad mein shuru kijiye, kabhi ulta nahi. Android 12 se peeche gaya app chhooton ki chhoti list ke bahar foreground service shuru kar hi nahi sakta, aur banate waqt ye adrishya hai kyunki test karte hue aapka app screen par hota hai.",
    },
    related: ["Service", "NotificationCompat", "WorkManager"],
  },

  NotificationChannel: {
    term: "NotificationChannel",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.app.NotificationChannel",
    does: {
      en: "A user-controllable category that every notification must belong to since Android 8.",
      hi: "User के अख्तियार वाली श्रेणी, जिसका होना Android 8 से हर notification के लिए जरूरी है।",
      "hi-en": "User ke akhtiyaar wali shreni, jiska hona Android 8 se har notification ke liye zaruri hai.",
    },
    values: {
      en: "`IMPORTANCE_HIGH` (banner and sound), `IMPORTANCE_DEFAULT` (sound), `IMPORTANCE_LOW` (silent), `IMPORTANCE_MIN` (no status bar icon).",
      hi: "`IMPORTANCE_HIGH` (पट्टी और आवाज), `IMPORTANCE_DEFAULT` (आवाज), `IMPORTANCE_LOW` (चुप), `IMPORTANCE_MIN` (status bar में icon नहीं)।",
      "hi-en": "`IMPORTANCE_HIGH` (patti aur awaaz), `IMPORTANCE_DEFAULT` (awaaz), `IMPORTANCE_LOW` (chup), `IMPORTANCE_MIN` (status bar mein icon nahi).",
    },
    affects: {
      en: "Importance, sound and vibration are read **once**, when the channel is first created, and belong to the user afterwards — calling `createNotificationChannel` again only updates the name and description. So shipping the wrong importance cannot be fixed for existing users without a new channel id, which appears in their Settings as a second entry.",
      hi: "Importance, आवाज और कंपन **एक ही बार** पढ़े जाते हैं, जब वह channel पहली बार बनता है, और उसके बाद वे user के हैं — `createNotificationChannel` दोबारा बुलाने से सिर्फ नाम और विवरण बदलते हैं। तो गलत importance भेज देने के बाद मौजूदा users के लिए उसे बिना नई channel id के ठीक नहीं किया जा सकता, जो उनकी Settings में दूसरी entry बनकर दिखती है।",
      "hi-en": "Importance, awaaz aur kampan **ek hi baar** padhe jate hain, jab wo channel pehli baar banta hai, aur uske baad wo user ke hain — `createNotificationChannel` dobara bulane se sirf naam aur vivaran badalte hain. To galat importance bhej dene ke baad maujooda users ke liye use bina nai channel id ke theek nahi kiya ja sakta, jo unki Settings mein doosri entry bankar dikhti hai.",
    },
    related: ["NotificationCompat", "PendingIntent"],
  },

  NotificationCompat: {
    term: "NotificationCompat",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.core.app.NotificationCompat",
    does: {
      en: "Builds a notification that behaves the same across Android versions.",
      hi: "ऐसी notification बनाता है जो हर Android version पर एक जैसा बर्ताव करे।",
      "hi-en": "Aisi notification banata hai jo har Android version par ek jaisa behaviour kare.",
    },
    affects: {
      en: "Set both the channel's importance and `setPriority` — the channel governs Android 8 and above, `setPriority` governs older versions, and they only look redundant. `BigTextStyle` is worth using by default, since without it a message longer than a line is truncated with no way to read the rest. `MessagingStyle` is more than a style: the system treats it as a conversation, which is what enables inline reply and bubbles.",
      hi: "Channel की importance और `setPriority` दोनों लगाइए — channel Android 8 और उसके ऊपर चलाता है, `setPriority` उससे पुरानी versions पर, और वे सिर्फ दिखने में एक जैसे लगते हैं। डिफॉल्ट के तौर पर `BigTextStyle` लेने लायक है, क्योंकि उसके बिना एक लाइन से लंबा संदेश कट जाता है और बाकी पढ़ने का रास्ता नहीं बचता। `MessagingStyle` सिर्फ एक style नहीं है: system उसे बातचीत मानता है, और इसी से inline जवाब और bubbles चलते हैं।",
      "hi-en": "Channel ki importance aur `setPriority` dono lagaiye — channel Android 8 aur uske upar chalata hai, `setPriority` usse purani versions par, aur wo sirf dikhne mein ek jaise lagte hain. Default ke taur par `BigTextStyle` lene layak hai, kyunki uske bina ek line se lamba sandesh kat jata hai aur baaki padhne ka raasta nahi bachta. `MessagingStyle` sirf ek style nahi hai: system use baatcheet manta hai, aur isi se inline jawab aur bubbles chalte hain.",
    },
    related: ["NotificationChannel", "PendingIntent", "TaskStackBuilder"],
  },

  PendingIntent: {
    term: "PendingIntent",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.app.PendingIntent",
    does: {
      en: "Hands another process the right to run an intent as your app, later.",
      hi: "किसी दूसरे process को यह हक देता है कि वह बाद में आपके ऐप की तरफ से कोई intent चलाए।",
      "hi-en": "Kisi doosre process ko ye haq deta hai ki wo baad mein aapke app ki taraf se koi intent chalaye.",
    },
    affects: {
      en: "They are matched on requesting package, request code, action, data and type — **deliberately not on extras**. So two notifications built with the same request code look identical to the system, and the second reuses the first one's extras, which is why every notification opens the first one's screen. `FLAG_UPDATE_CURRENT` does not fix it. Put the id in the data URI instead, which is part of the match and shared with deep links. `FLAG_IMMUTABLE` is required from Android 12 unless you genuinely need the receiver to fill in fields.",
      hi: "वे माँगने वाले package, request code, action, data और type पर मिलाए जाते हैं — **जानबूझकर extras पर नहीं**। तो एक ही request code से बनी दो notifications system को बिलकुल एक जैसी दिखती हैं, और दूसरी पहली वाले के extras दोबारा ले लेती है, और इसीलिए हर notification पहली वाली की screen खोलती है। `FLAG_UPDATE_CURRENT` इसे ठीक नहीं करता। उसकी जगह id को data वाले URI में रखिए, जो मिलान का हिस्सा है और deep links के साथ साझा है। Android 12 से `FLAG_IMMUTABLE` जरूरी है, जब तक आपको सच में यह न चाहिए कि लेने वाला उसमें कुछ भरे।",
      "hi-en": "Wo maangne wale package, request code, action, data aur type par milaye jate hain — **jaanbujhkar extras par nahi**. To ek hi request code se bani do notifications system ko bilkul ek jaisi dikhti hain, aur doosri pehli wale ke extras dobara le leti hai, aur isiliye har notification pehli wali ki screen kholti hai. `FLAG_UPDATE_CURRENT` ise theek nahi karta. Uski jagah id ko data wale URI mein rakhiye, jo milan ka hissa hai aur deep links ke saath share hai. Android 12 se `FLAG_IMMUTABLE` zaruri hai, jab tak aapko sach mein ye na chahiye ki lene wala usmein kuch bhare.",
    },
    related: ["NotificationCompat", "TaskStackBuilder", "Intent"],
  },

  TaskStackBuilder: {
    term: "TaskStackBuilder",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.core.app.TaskStackBuilder",
    does: {
      en: "Synthesises a back stack so a screen opened from outside has somewhere to go back to.",
      hi: "एक back stack गढ़ देता है ताकि बाहर से खुली screen के पीछे लौटने को कुछ हो।",
      "hi-en": "Ek back stack gadh deta hai taki bahar se khuli screen ke peeche lautne ko kuch ho.",
    },
    affects: {
      en: "Without it, tapping a notification opens the detail screen with nothing behind it, so Back exits the app rather than going to the list — which feels broken in a way users notice and cannot describe.",
      hi: "उसके बिना notification पर tap करने से detail वाली screen खुलती है और उसके पीछे कुछ नहीं होता, तो Back list पर जाने के बजाय ऐप से बाहर कर देता है — जो टूटा हुआ लगता है, और users उसे महसूस करते हैं पर बता नहीं पाते।",
      "hi-en": "Uske bina notification par tap karne se detail wali screen khulti hai aur uske peeche kuch nahi hota, to Back list par jane ke bajaye app se bahar kar deta hai — jo toota hua lagta hai, aur users use mehsoos karte hain par bata nahi paate.",
    },
    related: ["PendingIntent", "NotificationCompat", "Intent"],
  },

  BroadcastReceiver: {
    term: "BroadcastReceiver",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.content.BroadcastReceiver",
    does: {
      en: "Receives a system or app broadcast in `onReceive`, on the main thread.",
      hi: "System या ऐप का कोई broadcast `onReceive` में लेता है, main thread पर।",
      "hi-en": "System ya app ka koi broadcast `onReceive` mein leta hai, main thread par.",
    },
    affects: {
      en: "`onReceive` gets about **ten seconds** and the process may be killed the moment it returns, so a coroutine started there is not safe either — the only correct shape is to notice and enqueue WorkManager. Two rules bite invisibly: most implicit broadcasts stopped working from the manifest at Android 8, and an app that has never been launched or was force-stopped receives nothing at all, `BOOT_COMPLETED` included.",
      hi: "`onReceive` को करीब **दस सेकंड** मिलते हैं और उसके लौटते ही process मारा जा सकता है, तो वहाँ शुरू किया coroutine भी सुरक्षित नहीं — इकलौती सही शक्ल है नोटिस करके WorkManager को कतार में लगाना। दो नियम चुपचाप काटते हैं: ज्यादातर implicit broadcasts Android 8 पर manifest से चलना बंद कर चुके हैं, और जो ऐप कभी चलाया ही नहीं गया या force-stop किया गया उसे कुछ भी नहीं मिलता, `BOOT_COMPLETED` समेत।",
      "hi-en": "`onReceive` ko kareeb **das second** milte hain aur uske lautte hi process maara ja sakta hai, to wahan shuru kiya coroutine bhi safe nahi — iklauti sahi shakal hai notice karke WorkManager ko line mein lagana. Do niyam chupchap kaat-te hain: zyadatar implicit broadcasts Android 8 par manifest se chalna band kar chuke hain, aur jo app kabhi chalaya hi nahi gaya ya force-stop kiya gaya use kuch bhi nahi milta, `BOOT_COMPLETED` samet.",
    },
    related: ["IntentFilter", "WorkManager", "AlarmManager"],
  },

  IntentFilter: {
    term: "IntentFilter",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.content.IntentFilter",
    does: {
      en: "Declares which intents a receiver, activity or service will accept.",
      hi: "बताता है कि कोई receiver, activity या service कौन से intents लेगी।",
      "hi-en": "Batata hai ki koi receiver, activity ya service kaun se intents legi.",
    },
    affects: {
      en: "For a deep link, the `BROWSABLE` category is what lets a browser fire it — without it the link works from `adb` and nowhere else, which is a confusing half-hour. Since target SDK 33, registering a receiver at run time also requires saying explicitly whether it is exported, and omitting that throws.",
      hi: "किसी deep link के लिए `BROWSABLE` वाली category ही browser को उसे चलाने देती है — उसके बिना वह link `adb` से चलता है और कहीं नहीं, जो उलझाने वाला आधा घंटा है। Target SDK 33 से, चलते वक्त receiver दर्ज करने पर यह भी साफ बताना पड़ता है कि वह exported है या नहीं, और छोड़ने पर वह फेंकता है।",
      "hi-en": "Kisi deep link ke liye `BROWSABLE` wali category hi browser ko use chalane deti hai — uske bina wo link `adb` se chalta hai aur kahin nahi, jo uljhane wala aadha ghanta hai. Target SDK 33 se, chalte waqt receiver darj karne par ye bhi saaf batana padta hai ki wo exported hai ya nahi, aur chhodne par wo phenkta hai.",
    },
    related: ["BroadcastReceiver", "Intent", "xml:exported"],
  },

  AlarmManager: {
    term: "AlarmManager",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.app.AlarmManager",
    does: {
      en: "Fires a `PendingIntent` at a wall-clock time, optionally piercing Doze.",
      hi: "घड़ी के किसी वक्त पर कोई `PendingIntent` चलाता है, और चाहें तो Doze को भेदकर।",
      "hi-en": "Ghadi ke kisi waqt par koi `PendingIntent` chalata hai, aur chaho to Doze ko bhedkar.",
    },
    values: {
      en: "`set()` and `setWindow()` are deferrable; `setExactAndAllowWhileIdle()` fires in Doze and needs `SCHEDULE_EXACT_ALARM`; `setAlarmClock()` is for a literal alarm and is exempt.",
      hi: "`set()` और `setWindow()` टाले जा सकते हैं; `setExactAndAllowWhileIdle()` Doze में बजता है और उसे `SCHEDULE_EXACT_ALARM` चाहिए; `setAlarmClock()` सचमुच के alarm के लिए है और उसे छूट है।",
      "hi-en": "`set()` aur `setWindow()` taale ja sakte hain; `setExactAndAllowWhileIdle()` Doze mein bajta hai aur use `SCHEDULE_EXACT_ALARM` chahiye; `setAlarmClock()` sachmuch ke alarm ke liye hai aur use chhoot hai.",
    },
    affects: {
      en: "Using `set()` where you meant exact compiles, looks right, and arrives hours late on an idle device — the single most common cause of a reminder that fires at 9:40 instead of 7:00. Alarms are also cleared by a reboot and must be rescheduled from `BOOT_COMPLETED`, which is one more reason WorkManager is easier where timing can be loose.",
      hi: "जहाँ पक्का चाहिए था वहाँ `set()` लेना compile होता है, सही दिखता है, और खाली पड़े device पर घंटों देर से आता है — 7:00 के बजाय 9:40 पर बजते reminder की सबसे आम वजह यही अकेली है। Alarms reboot पर मिट भी जाते हैं और उन्हें `BOOT_COMPLETED` से दोबारा लगाना पड़ता है, और जहाँ समय ढीला चल सकता है वहाँ WorkManager के आसान होने की यह एक और वजह है।",
      "hi-en": "Jahan pakka chahiye tha wahan `set()` lena compile hota hai, sahi dikhta hai, aur khaali pade device par ghanton der se aata hai — 7:00 ke bajaye 9:40 par bajte reminder ki sabse aam wajah yahi akeli hai. Alarms reboot par mit bhi jate hain aur unhe `BOOT_COMPLETED` se dobara lagana padta hai, aur jahan samay dheela chal sakta hai wahan WorkManager ke aasan hone ki ye ek aur wajah hai.",
    },
    related: ["PendingIntent", "WorkManager", "BroadcastReceiver"],
  },

  GlanceAppWidget: {
    term: "GlanceAppWidget",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.glance.appwidget.GlanceAppWidget",
    does: {
      en: "Describes a home screen widget in Compose syntax, compiled to `RemoteViews`.",
      hi: "Home screen के widget को Compose की भाषा में बताता है, जो `RemoteViews` में बदलता है।",
      "hi-en": "Home screen ke widget ko Compose ki bhasha mein batata hai, jo `RemoteViews` mein badalta hai.",
    },
    affects: {
      en: "The launcher draws the widget, in its process, from a snapshot — so there is no composition between updates and nothing recomposes on its own. State must be persisted, and a redraw is explicit via `update` or `updateAll`. `provideGlance` is `suspend` precisely so data is loaded before `provideContent`, since there is no `LaunchedEffect` to run one in.",
      hi: "Widget को launcher बनाता है, अपने process में, एक झलक से — तो updates के बीच कोई composition नहीं होती और अपने आप कुछ recompose नहीं होता। State सहेजनी पड़ती है, और दोबारा बनाना `update` या `updateAll` से साफ-साफ करना पड़ता है। `provideGlance` `suspend` ठीक इसीलिए है कि data `provideContent` से पहले लाया जाए, क्योंकि उसे चलाने लायक कोई `LaunchedEffect` है ही नहीं।",
      "hi-en": "Widget ko launcher banata hai, apne process mein, ek jhalak se — to updates ke beech koi composition nahi hoti aur apne aap kuch recompose nahi hota. State sahejni padti hai, aur dobara banana `update` ya `updateAll` se saaf-saaf karna padta hai. `provideGlance` `suspend` theek isiliye hai ki data `provideContent` se pehle laya jaye, kyunki use chalane layak koi `LaunchedEffect` hai hi nahi.",
    },
    docs: "https://developer.android.com/develop/ui/compose/glance",
    related: ["GlanceModifier", "Composable", "remember"],
  },

  GlanceModifier: {
    term: "GlanceModifier",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "jetpack",
    importLine: "import androidx.glance.GlanceModifier",
    does: {
      en: "Glance's own modifier chain — a smaller, separate set from Compose's `Modifier`.",
      hi: "Glance की अपनी modifier की कड़ी — Compose के `Modifier` से छोटा, अलग समूह।",
      "hi-en": "Glance ki apni modifier ki kadi — Compose ke `Modifier` se chhota, alag samooh.",
    },
    affects: {
      en: "Only what `RemoteViews` can express exists here, which is why a Compose modifier you reach for may simply not be there. `clickable` takes an action that names a class or activity rather than a lambda, because the tap happens in the launcher's process long after your lambda's scope is gone.",
      hi: "यहाँ सिर्फ वही है जो `RemoteViews` कह सकता है, इसीलिए जिस Compose वाले modifier की तरफ आप हाथ बढ़ाते हैं वह शायद हो ही न। `clickable` ऐसा action लेता है जो lambda के बजाय किसी class या activity का नाम लेता है, क्योंकि वह tap launcher के process में होता है, आपकी lambda का दायरा खत्म होने के बहुत बाद।",
      "hi-en": "Yahan sirf wahi hai jo `RemoteViews` keh sakta hai, isiliye jis Compose wale modifier ki taraf aap haath badhate ho wo shayad ho hi na. `clickable` aisa action leta hai jo lambda ke bajaye kisi class ya activity ka naam leta hai, kyunki wo tap launcher ke process mein hota hai, aapki lambda ka daayra khatam hone ke bahut baad.",
    },
    related: ["GlanceAppWidget", "Modifier"],
  },

  ProcessCameraProvider: {
    term: "ProcessCameraProvider",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.camera.lifecycle.ProcessCameraProvider",
    does: {
      en: "Binds CameraX use cases to a lifecycle, so the camera opens and closes with it.",
      hi: "CameraX के use cases को किसी lifecycle से बाँधता है, तो camera उसी के साथ खुलता और बंद होता है।",
      "hi-en": "CameraX ke use cases ko kisi lifecycle se baandhta hai, to camera usi ke saath khulta aur band hota hai.",
    },
    affects: {
      en: "`bindToLifecycle` removes the class of bug CameraX was built for — you never call `open` or `close`. Call `unbindAll()` first, because a device supports a limited number of simultaneously bound use cases and rebinding on rotation without unbinding throws once you exceed it.",
      hi: "`bindToLifecycle` उसी किस्म के bugs हटाता है जिनके लिए CameraX बना था — आप कभी `open` या `close` नहीं बुलाते। पहले `unbindAll()` बुलाइए, क्योंकि device एक साथ गिने-चुने बँधे use cases ही सँभालता है और rotation पर बिना unbind किए दोबारा बाँधना वह हद पार होते ही फेंकता है।",
      "hi-en": "`bindToLifecycle` usi kism ke bugs hatata hai jinke liye CameraX bana tha — aap kabhi `open` ya `close` nahi bulate. Pehle `unbindAll()` bulaiye, kyunki device ek saath gine-chune bandhe use cases hi sambhalta hai aur rotation par bina unbind kiye dobara baandhna wo had paar hote hi phenkta hai.",
    },
    docs: "https://developer.android.com/media/camera/camerax",
    related: ["ImageCapture", "ImageAnalysis", "ImageProxy"],
  },

  ImageCapture: {
    term: "ImageCapture",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.camera.core.ImageCapture",
    does: {
      en: "The CameraX use case that takes a photo.",
      hi: "CameraX का वह use case जो तस्वीर लेता है।",
      "hi-en": "CameraX ka wo use case jo tasveer leta hai.",
    },
    values: {
      en: "`CAPTURE_MODE_MINIMIZE_LATENCY` for scanning, `CAPTURE_MODE_MAXIMIZE_QUALITY` for a photo the user keeps.",
      hi: "Scanning के लिए `CAPTURE_MODE_MINIMIZE_LATENCY`, और जिस तस्वीर को user रखेगा उसके लिए `CAPTURE_MODE_MAXIMIZE_QUALITY`।",
      "hi-en": "Scanning ke liye `CAPTURE_MODE_MINIMIZE_LATENCY`, aur jis tasveer ko user rakhega uske liye `CAPTURE_MODE_MAXIMIZE_QUALITY`.",
    },
    affects: {
      en: "Keep `targetRotation` updated, or photos come out sideways for anyone holding the phone in landscape — and with a locked `screenOrientation` the activity is never recreated, so nothing updates it by itself. Write output through `MediaStore` rather than building a path, which has not worked since Android 10. If you need one photo, `ActivityResultContracts.TakePicture` needs no CAMERA permission and no CameraX at all.",
      hi: "`targetRotation` बदलते रहिए, वरना जो phone को आड़ा पकड़ता है उसकी तस्वीरें टेढ़ी आती हैं — और बँधी हुई `screenOrientation` के साथ activity दोबारा बनती ही नहीं, तो उसे अपने आप कुछ बदलता नहीं। नतीजा path बनाने के बजाय `MediaStore` से लिखिए, क्योंकि path Android 10 से चला ही नहीं। अगर एक तस्वीर चाहिए, तो `ActivityResultContracts.TakePicture` को न CAMERA permission चाहिए न CameraX।",
      "hi-en": "`targetRotation` badalte rahiye, warna jo phone ko aada pakadta hai uski tasveerein tedhi aati hain — aur bandhi hui `screenOrientation` ke saath activity dobara banti hi nahi, to use apne aap kuch badalta nahi. Natija path banane ke bajaye `MediaStore` se likhiye, kyunki path Android 10 se chala hi nahi. Agar ek tasveer chahiye, to `ActivityResultContracts.TakePicture` ko na CAMERA permission chahiye na CameraX.",
    },
    related: ["ProcessCameraProvider", "MediaStore", "ImageAnalysis"],
  },

  ImageAnalysis: {
    term: "ImageAnalysis",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.camera.core.ImageAnalysis",
    does: {
      en: "Delivers camera frames to an analyzer — a barcode scanner, an ML model.",
      hi: "Camera के frames किसी analyzer तक पहुँचाता है — barcode scanner, कोई ML model.",
      "hi-en": "Camera ke frames kisi analyzer tak pahunchata hai — barcode scanner, koi ML model.",
    },
    values: {
      en: "`STRATEGY_KEEP_ONLY_LATEST` drops frames while you are busy; `STRATEGY_BLOCK_PRODUCER` delivers every one.",
      hi: "`STRATEGY_KEEP_ONLY_LATEST` आपके व्यस्त रहते frames गिरा देता है; `STRATEGY_BLOCK_PRODUCER` हर एक पहुँचाता है।",
      "hi-en": "`STRATEGY_KEEP_ONLY_LATEST` aapke vyast rehte frames gira deta hai; `STRATEGY_BLOCK_PRODUCER` har ek pahunchata hai.",
    },
    affects: {
      en: "The analyzer must close every `ImageProxy` on every path, including ones that throw — the buffer pool is small and fixed, so a held frame stalls the pipeline and the preview freezes too, which makes a leak look like a camera failure. `try/finally` around the analysis is not decoration.",
      hi: "Analyzer को हर रास्ते पर हर `ImageProxy` बंद करना पड़ता है, उन रास्तों समेत जो फेंकते हैं — buffers का भंडार छोटा और तय है, तो पकड़ा हुआ frame पूरी कड़ी अटका देता है और preview भी जम जाती है, जिससे leak camera की नाकामी जैसा दिखता है। Analysis के इर्द-गिर्द `try/finally` सजावट नहीं है।",
      "hi-en": "Analyzer ko har raaste par har `ImageProxy` band karna padta hai, un raaston samet jo phenkte hain — buffers ka bhandar chhota aur tay hai, to pakda hua frame poori kadi atka deta hai aur preview bhi jam jati hai, jisse leak camera ki nakami jaisa dikhta hai. Analysis ke ird-gird `try/finally` sajawat nahi hai.",
    },
    related: ["ImageProxy", "ProcessCameraProvider", "ImageCapture"],
  },

  ImageProxy: {
    term: "ImageProxy",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "jetpack",
    importLine: "import androidx.camera.core.ImageProxy",
    does: {
      en: "One camera frame handed to an analyzer, drawn from a small fixed buffer pool.",
      hi: "Analyzer को दिया गया एक camera frame, जो गिने-चुने buffers के छोटे भंडार से आता है।",
      "hi-en": "Analyzer ko diya gaya ek camera frame, jo gine-chune buffers ke chhote bhandar se aata hai.",
    },
    affects: {
      en: "Until you call `close()`, that buffer cannot be reused — so once two or three are held the pipeline has nowhere to write and simply stops. `imageInfo.rotationDegrees` tells the analyzer how the buffer is oriented, and passing it to a barcode or ML Kit detector is what makes scanning work in landscape rather than mysteriously failing.",
      hi: "जब तक आप `close()` न बुलाएँ, वह buffer दोबारा काम नहीं आ सकता — तो दो-तीन पकड़े जाते ही कड़ी के पास लिखने को जगह नहीं बचती और वह बस रुक जाती है। `imageInfo.rotationDegrees` analyzer को बताता है कि वह buffer किस दिशा में है, और उसे barcode या ML Kit वाले detector को देना ही scanning को आड़े में चलाता है, वरना वह रहस्यमय तरीके से नाकाम होती रहती है।",
      "hi-en": "Jab tak aap `close()` na bulao, wo buffer dobara kaam nahi aa sakta — to do-teen pakde jate hi kadi ke paas likhne ko jagah nahi bachti aur wo bas ruk jati hai. `imageInfo.rotationDegrees` analyzer ko batata hai ki wo buffer kis disha mein hai, aur use barcode ya ML Kit wale detector ko dena hi scanning ko aade mein chalata hai, warna wo rahasyamay tarike se nakaam hoti rehti hai.",
    },
    related: ["ImageAnalysis", "ProcessCameraProvider"],
  },

  FusedLocationProviderClient: {
    term: "FusedLocationProviderClient",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.android.gms.location.FusedLocationProviderClient",
    does: {
      en: "Play Services' location client, combining GPS, Wi-Fi and cell into one API.",
      hi: "Play Services का location वाला client, जो GPS, Wi-Fi और cell को एक ही API में जोड़ देता है।",
      "hi-en": "Play Services ka location wala client, jo GPS, Wi-Fi aur cell ko ek hi API mein jod deta hai.",
    },
    affects: {
      en: "`getLastLocation()` returns a cached fix that may be hours old or `null`, so it is wrong for anything the user is watching — `getCurrentLocation()` computes a fresh one. When collecting updates as a `callbackFlow`, `awaitClose { removeLocationUpdates(...) }` is what stops GPS when the collector goes; without it a request nobody reads runs until the process dies, which is the battery bug users blame the app for.",
      hi: "`getLastLocation()` रखी हुई ऐसी जगह लौटाता है जो घंटों पुरानी या `null` हो सकती है, तो जिस चीज को user देख रहा है उसके लिए वह गलत है — `getCurrentLocation()` ताजा निकालता है। जब updates को `callbackFlow` की तरह लें, तो `awaitClose { removeLocationUpdates(...) }` ही collector के जाने पर GPS रोकता है; उसके बिना ऐसी माँग जिसे कोई पढ़ ही नहीं रहा process मरने तक चलती है, और battery वाला वह bug users ऐप के सिर मढ़ते हैं।",
      "hi-en": "`getLastLocation()` rakhi hui aisi jagah lautata hai jo ghanton purani ya `null` ho sakti hai, to jis cheez ko user dekh raha hai uske liye wo galat hai — `getCurrentLocation()` taza nikalta hai. Jab updates ko `callbackFlow` ki tarah lo, to `awaitClose { removeLocationUpdates(...) }` hi collector ke jane par GPS rokta hai; uske bina aisi maang jise koi padh hi nahi raha process marne tak chalti hai, aur battery wala wo bug users app ke sir madhte hain.",
    },
    related: ["LocationRequest", "Geofence", "Flow"],
  },

  LocationRequest: {
    term: "LocationRequest",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import com.google.android.gms.location.LocationRequest",
    does: {
      en: "Describes how often and how precisely you want location updates.",
      hi: "बताता है कि आपको location के updates कितनी बार और कितने सटीक चाहिए।",
      "hi-en": "Batata hai ki aapko location ke updates kitni baar aur kitne sateek chahiye.",
    },
    values: {
      en: "`PRIORITY_HIGH_ACCURACY` (GPS, metres), `PRIORITY_BALANCED_POWER_ACCURACY` (Wi-Fi and cell, ~100m), `PRIORITY_LOW_POWER` (city level), `PRIORITY_PASSIVE` (whatever other apps asked for).",
      hi: "`PRIORITY_HIGH_ACCURACY` (GPS, मीटरों में), `PRIORITY_BALANCED_POWER_ACCURACY` (Wi-Fi और cell, ~100m), `PRIORITY_LOW_POWER` (शहर भर), `PRIORITY_PASSIVE` (जो दूसरे ऐप्स ने माँगा)।",
      "hi-en": "`PRIORITY_HIGH_ACCURACY` (GPS, meteron mein), `PRIORITY_BALANCED_POWER_ACCURACY` (Wi-Fi aur cell, ~100m), `PRIORITY_LOW_POWER` (shehar bhar), `PRIORITY_PASSIVE` (jo doosre apps ne maanga).",
    },
    affects: {
      en: "Pick the cheapest priority that answers the question. GPS for something Wi-Fi would resolve costs many times the power, and for weather, a city or a shop list, coarse accuracy is enough — which also means you can request only `ACCESS_COARSE_LOCATION`, a smaller ask that more people accept.",
      hi: "सबसे सस्ती priority लीजिए जो सवाल का जवाब दे दे। जिस चीज का जवाब Wi-Fi दे देता उसके लिए GPS कई गुना बिजली खर्च करता है, और मौसम, शहर या दुकानों की सूची के लिए मोटी सटीकता काफी है — जिसका यह भी मतलब है कि आप सिर्फ `ACCESS_COARSE_LOCATION` माँग सकते हैं, जो छोटी माँग है और ज्यादा लोग उसे मानते हैं।",
      "hi-en": "Sabse sasti priority lijiye jo sawal ka jawab de de. Jis cheez ka jawab Wi-Fi de deta uske liye GPS kai guna bijli kharch karta hai, aur mausam, shehar ya dukanon ki list ke liye moti sateekta kaafi hai — jiska ye bhi matlab hai ki aap sirf `ACCESS_COARSE_LOCATION` maang sakte ho, jo chhoti maang hai aur zyada log use maante hain.",
    },
    related: ["FusedLocationProviderClient", "Geofence"],
  },

  Geofence: {
    term: "Geofence",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import com.google.android.gms.location.Geofence",
    does: {
      en: "Asks the system to notify you when the device enters or leaves an area.",
      hi: "System से कहता है कि device किसी इलाके में आए या निकले तो आपको खबर दे।",
      "hi-en": "System se kehta hai ki device kisi ilake mein aaye ya nikle to aapko khabar de.",
    },
    affects: {
      en: "The system evaluates these once across every app, which is the whole reason to use one rather than a location loop. Three limits: they need background location to fire with the app closed, they are cleared by a reboot and must be re-registered like alarms, and a radius under about 100 metres triggers unreliably indoors — so a small radius produces missed events rather than precision.",
      hi: "System इनका हिसाब हर ऐप के आर-पार एक ही बार करता है, और इसे location वाले loop के बजाय लेने की पूरी वजह यही है। तीन हदें: ऐप बंद रहते चलने के लिए इन्हें background वाली location चाहिए, ये reboot पर मिट जाते हैं और alarms की तरह दोबारा दर्ज करने पड़ते हैं, और करीब 100 मीटर से छोटी त्रिज्या घर के अंदर भरोसे से नहीं चलती — तो छोटी त्रिज्या सटीकता नहीं, छूटी हुई घटनाएँ देती है।",
      "hi-en": "System inka hisab har app ke aar-paar ek hi baar karta hai, aur ise location wale loop ke bajaye lene ki poori wajah yahi hai. Teen hadein: app band rehte chalne ke liye inhe background wali location chahiye, ye reboot par mit jate hain aur alarms ki tarah dobara darj karne padte hain, aur kareeb 100 meter se chhoti trijya ghar ke andar bharose se nahi chalti — to chhoti trijya sateekta nahi, chhooti hui ghatnayein deti hai.",
    },
    related: ["FusedLocationProviderClient", "AlarmManager"],
  },

  SensorManager: {
    term: "SensorManager",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.hardware.SensorManager",
    does: {
      en: "Provides access to the device's sensors and registers listeners on them.",
      hi: "Device के sensors तक पहुँच देता है और उन पर सुनने वाले दर्ज करता है।",
      "hi-en": "Device ke sensors tak pahunch deta hai aur un par sunne wale darj karta hai.",
    },
    values: {
      en: "`SENSOR_DELAY_NORMAL` (~200ms), `SENSOR_DELAY_UI`, `SENSOR_DELAY_GAME`, `SENSOR_DELAY_FASTEST` — a rate you pay for in CPU wakeups.",
      hi: "`SENSOR_DELAY_NORMAL` (~200ms), `SENSOR_DELAY_UI`, `SENSOR_DELAY_GAME`, `SENSOR_DELAY_FASTEST` — एक रफ्तार, जिसकी कीमत CPU के जगने में चुकती है।",
      "hi-en": "`SENSOR_DELAY_NORMAL` (~200ms), `SENSOR_DELAY_UI`, `SENSOR_DELAY_GAME`, `SENSOR_DELAY_FASTEST` — ek raftar, jiski keemat CPU ke jagne mein chukti hai.",
    },
    affects: {
      en: "A listener is registered against the manager, **not** against your screen, so nothing removes it when the screen goes — registering in `onStart` without unregistering in `onStop` accumulates duplicates that all receive the same events, which is why a counter climbs faster the longer the app is used and the phone gets warm. `getDefaultSensor` can also return `null`: sensors are hardware, and a cheap phone may have none.",
      hi: "Listener उस manager पर दर्ज होता है, आपकी screen पर **नहीं**, तो screen के जाने पर उसे कुछ हटाता नहीं — `onStop` में हटाए बिना `onStart` में दर्ज करना नकलें जमा करता जाता है जो सब वही घटनाएँ पाती हैं, इसीलिए ऐप जितनी देर चले गिनती उतनी तेज चढ़ती है और phone गर्म होता है। `getDefaultSensor` `null` भी लौटा सकता है: sensors hardware हैं, और सस्ते phone में कोई हो ही न।",
      "hi-en": "Listener us manager par darj hota hai, aapki screen par **nahi**, to screen ke jane par use kuch hatata nahi — `onStop` mein hataye bina `onStart` mein darj karna naklein jama karta jata hai jo sab wahi ghatnayein paati hain, isiliye app jitni der chale ginti utni tez chadhti hai aur phone garam hota hai. `getDefaultSensor` `null` bhi lauta sakta hai: sensors hardware hain, aur saste phone mein koi ho hi na.",
    },
    related: ["Flow", "BluetoothGatt"],
  },

  BluetoothGatt: {
    term: "BluetoothGatt",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.bluetooth.BluetoothGatt",
    does: {
      en: "A connection to a BLE device, over which you read, write and subscribe to characteristics.",
      hi: "किसी BLE device से connection, जिस पर आप characteristics पढ़ते, लिखते और उनकी खबर लेते हैं।",
      "hi-en": "Kisi BLE device se connection, jis par aap characteristics padhte, likhte aur unki khabar lete ho.",
    },
    affects: {
      en: "It accepts **one outstanding operation at a time**. Issuing a second before the first calls back makes it return `false` and silently do nothing — which is why every \"works on my phone, not on theirs\" BLE bug is a timing race that a faster or slower device exposes. Chain operations through their callbacks, or keep an explicit queue you drain one at a time.",
      hi: "यह **एक बार में एक ही बकाया काम** लेता है। पहले callback आने से पहले दूसरा भेजने पर वह `false` लौटाकर चुपचाप कुछ नहीं करता — और इसीलिए \"मेरे phone पर चलता है, उनके पर नहीं\" वाला हर BLE bug कोई ऐसी दौड़ है जिसे तेज या धीमा device उजागर कर देता है। कामों को उनके callbacks से जोड़िए, या साफ-साफ एक कतार रखिए जिसे एक-एक करके खाली करें।",
      "hi-en": "Ye **ek baar mein ek hi baqaya kaam** leta hai. Pehle callback aane se pehle doosra bhejne par wo `false` lautakar chupchap kuch nahi karta — aur isiliye \"mere phone par chalta hai, unke par nahi\" wala har BLE bug koi aisi daud hai jise tez ya dheema device ujagar kar deta hai. Kaamon ko unke callbacks se jodiye, ya saaf-saaf ek line rakhiye jise ek-ek karke khaali karein.",
    },
    related: ["SensorManager", "Flow"],
  },

  BiometricPrompt: {
    term: "BiometricPrompt",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.biometric.BiometricPrompt",
    does: {
      en: "Shows the system biometric dialog and reports success, failure or error.",
      hi: "System का biometric वाला dialog दिखाता है और सफलता, नाकामी या error बताता है।",
      "hi-en": "System ka biometric wala dialog dikhata hai aur safalta, nakami ya error batata hai.",
    },
    affects: {
      en: "The success callback on its own is **not security** — it is a boolean inside your process, so if the data is decryptable whenever the app wants it, a modified build simply takes the other branch. Real protection means passing a `CryptoObject` wrapping a Keystore key created with `setUserAuthenticationRequired(true)`. Note also that `onAuthenticationFailed` means one bad attempt with the prompt still open, while `onAuthenticationError` means it is over.",
      hi: "अकेला सफलता वाला callback **सुरक्षा नहीं** है — वह आपके process के अंदर एक boolean है, तो अगर वह data तब भी खुल सकता है जब ऐप चाहे, तो बदला हुआ build बस दूसरी शाखा ले लेता है। असली बचाव का मतलब है ऐसा `CryptoObject` भेजना जो `setUserAuthenticationRequired(true)` से बनी Keystore की key लपेटे हो। यह भी गौर कीजिए कि `onAuthenticationFailed` का मतलब है एक गलत कोशिश और prompt अब भी खुला, जबकि `onAuthenticationError` का मतलब है कि बात खत्म।",
      "hi-en": "Akela safalta wala callback **suraksha nahi** hai — wo aapke process ke andar ek boolean hai, to agar wo data tab bhi khul sakta hai jab app chahe, to badla hua build bas doosri shakha le leta hai. Asli bachav ka matlab hai aisa `CryptoObject` bhejna jo `setUserAuthenticationRequired(true)` se bani Keystore ki key lapete ho. Ye bhi gaur kijiye ki `onAuthenticationFailed` ka matlab hai ek galat koshish aur prompt ab bhi khula, jabki `onAuthenticationError` ka matlab hai ki baat khatam.",
    },
    docs: "https://developer.android.com/identity/sign-in/biometric-auth",
    related: ["CryptoObject", "KeyGenParameterSpec", "BiometricManager"],
  },

  BiometricManager: {
    term: "BiometricManager",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.biometric.BiometricManager",
    does: {
      en: "Reports whether biometric authentication is available before you show a prompt.",
      hi: "Prompt दिखाने से पहले बताता है कि biometric वाली पहचान मुमकिन है या नहीं।",
      "hi-en": "Prompt dikhane se pehle batata hai ki biometric wali pehchan mumkin hai ya nahi.",
    },
    values: {
      en: "`BIOMETRIC_SUCCESS`, `BIOMETRIC_ERROR_NONE_ENROLLED`, `BIOMETRIC_ERROR_NO_HARDWARE`, `BIOMETRIC_ERROR_HW_UNAVAILABLE`.",
      hi: "`BIOMETRIC_SUCCESS`, `BIOMETRIC_ERROR_NONE_ENROLLED`, `BIOMETRIC_ERROR_NO_HARDWARE`, `BIOMETRIC_ERROR_HW_UNAVAILABLE`।",
      "hi-en": "`BIOMETRIC_SUCCESS`, `BIOMETRIC_ERROR_NONE_ENROLLED`, `BIOMETRIC_ERROR_NO_HARDWARE`, `BIOMETRIC_ERROR_HW_UNAVAILABLE`.",
    },
    affects: {
      en: "`BIOMETRIC_STRONG` is the only class that can back a Keystore key, so a `CryptoObject` with `BIOMETRIC_WEAK` will not work at all — that is the platform refusing to pretend rather than an inconvenience. Including `DEVICE_CREDENTIAL` lets the user fall back to a PIN, and it is mutually exclusive with `setNegativeButtonText`: setting both throws.",
      hi: "`BIOMETRIC_STRONG` इकलौती श्रेणी है जो Keystore की key सँभाल सकती है, तो `BIOMETRIC_WEAK` के साथ `CryptoObject` चलेगा ही नहीं — यह असुविधा नहीं, platform का बहाना करने से इनकार है। `DEVICE_CREDENTIAL` रखने पर user PIN पर लौट सकता है, और वह `setNegativeButtonText` के साथ नहीं चलता: दोनों रखने पर वह फेंकता है।",
      "hi-en": "`BIOMETRIC_STRONG` iklauti shreni hai jo Keystore ki key sambhal sakti hai, to `BIOMETRIC_WEAK` ke saath `CryptoObject` chalega hi nahi — ye asuvidha nahi, platform ka bahana karne se inkaar hai. `DEVICE_CREDENTIAL` rakhne par user PIN par laut sakta hai, aur wo `setNegativeButtonText` ke saath nahi chalta: dono rakhne par wo phenkta hai.",
    },
    related: ["BiometricPrompt", "CryptoObject"],
  },

  CryptoObject: {
    term: "CryptoObject",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.biometric.BiometricPrompt.CryptoObject",
    does: {
      en: "Ties a `Cipher`, `Signature` or `Mac` to the biometric prompt, so the key only works after authentication.",
      hi: "किसी `Cipher`, `Signature` या `Mac` को biometric वाले prompt से बाँध देता है, तो वह key पहचान बताने के बाद ही चलती है।",
      "hi-en": "Kisi `Cipher`, `Signature` ya `Mac` ko biometric wale prompt se baandh deta hai, to wo key pehchan batane ke baad hi chalti hai.",
    },
    affects: {
      en: "This is what turns a UI flow into a security boundary. The key material stays in secure hardware and the hardware refuses to use it until the user authenticates, so an attacker who skips the prompt is left with ciphertext rather than a branch they can take. A success callback with no cipher has proved nothing worth acting on.",
      hi: "यही किसी UI के बहाव को सुरक्षा की सरहद बना देता है। Key की असली सामग्री सुरक्षित hardware में रहती है और जब तक user पहचान न बताए तब तक hardware उसे इस्तेमाल करने से मना कर देता है, तो prompt छोड़ देने वाले हमलावर के हाथ ऐसी शाखा नहीं आती जो वह ले सके, सिर्फ बंद पड़ा data आता है। बिना cipher वाली सफलता ने ऐसा कुछ साबित नहीं किया जिस पर काम किया जाए।",
      "hi-en": "Yahi kisi UI ke bahav ko suraksha ki sarhad bana deta hai. Key ki asli samagri surakshit hardware mein rehti hai aur jab tak user pehchan na bataye tab tak hardware use istemal karne se mana kar deta hai, to prompt chhod dene wale hamlawar ke haath aisi shakha nahi aati jo wo le sake, sirf band pada data aata hai. Bina cipher wali safalta ne aisa kuch sabit nahi kiya jis par kaam kiya jaye.",
    },
    related: ["BiometricPrompt", "KeyGenParameterSpec"],
  },

  KeyGenParameterSpec: {
    term: "KeyGenParameterSpec",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "android",
    importLine: "import android.security.keystore.KeyGenParameterSpec",
    does: {
      en: "Describes a key to generate in the Android Keystore and the rules for using it.",
      hi: "बताता है कि Android Keystore में कौन सी key बनानी है और उसे इस्तेमाल करने के नियम क्या हैं।",
      "hi-en": "Batata hai ki Android Keystore mein kaun si key banani hai aur use istemal karne ke niyam kya hain.",
    },
    affects: {
      en: "`setUserAuthenticationRequired(true)` is the line that creates the boundary. `setInvalidatedByBiometricEnrollment(true)` destroys the key when a new fingerprint is enrolled — by design, so adding a fingerprint to a stolen unlocked phone still decrypts nothing — which means your code must handle `KeyPermanentlyInvalidatedException` by clearing the encrypted data and asking the user to sign in again. Crashing there turns a security feature into a support ticket.",
      hi: "`setUserAuthenticationRequired(true)` ही वह लाइन है जो सरहद बनाती है। `setInvalidatedByBiometricEnrollment(true)` नया fingerprint दर्ज होते ही उस key को खत्म कर देता है — जानबूझकर, ताकि चुराए हुए खुले phone में fingerprint जोड़ने वाला फिर भी कुछ न खोल सके — जिसका मतलब है कि आपके code को `KeyPermanentlyInvalidatedException` सँभालना पड़ेगा, बंद पड़ा data मिटाकर और user से दोबारा sign in कराकर। वहाँ crash करना सुरक्षा की सुविधा को support ticket बना देता है।",
      "hi-en": "`setUserAuthenticationRequired(true)` hi wo line hai jo sarhad banati hai. `setInvalidatedByBiometricEnrollment(true)` naya fingerprint darj hote hi us key ko khatam kar deta hai — jaanbujhkar, taki churaye hue khule phone mein fingerprint jodne wala phir bhi kuch na khol sake — jiska matlab hai ki aapke code ko `KeyPermanentlyInvalidatedException` sambhalna padega, band pada data mitakar aur user se dobara sign in karakar. Wahan crash karna suraksha ki suvidha ko support ticket bana deta hai.",
    },
    related: ["CryptoObject", "BiometricPrompt"],
  },
};
