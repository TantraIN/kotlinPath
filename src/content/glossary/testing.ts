import type { Glossary } from "./types";

/** JUnit, MockK, the coroutine test machinery, Turbine, Compose testing and Espresso. */
export const TESTING_GLOSSARY: Glossary = {
  Test: {
    term: "@Test",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import org.junit.Test",
    does: {
      en: "Marks a function as a test case.",
      hi: "किसी function को test का मामला बताता है।",
      "hi-en": "Kisi function ko test ka maamla batata hai.",
    },
    affects: {
      en: "Give it a backtick name — a failure then reads `client errors are not retried FAILED`, which tells you what broke without opening the file, and that is the entire value of a test name. Avoid JUnit 4's `@Test(expected = ...)`: it passes if the exception is thrown anywhere in the method, including from setup you never meant to test. `assertThrows` scopes it to one block.",
      hi: "उसे backtick वाला नाम दीजिए — तब नाकामी `client errors are not retried FAILED` बनकर पढ़ी जाती है, जो बिना file खोले बता देती है कि क्या टूटा, और test के नाम की पूरी कीमत यही है। JUnit 4 के `@Test(expected = ...)` से बचिए: अगर वह exception उस method में कहीं भी फेंका जाए तो वह पास हो जाता है, उस तैयारी समेत जिसे आप जाँचना चाहते ही नहीं थे। `assertThrows` उसे एक हिस्से तक सीमित रखता है।",
      "hi-en": "Use backtick wala naam dijiye — tab nakami `client errors are not retried FAILED` bankar padhi jati hai, jo bina file khole bata deti hai ki kya toota, aur test ke naam ki poori keemat yahi hai. JUnit 4 ke `@Test(expected = ...)` se bachiye: agar wo exception us method mein kahin bhi phenka jaye to wo pass ho jata hai, us taiyari samet jise aap jaanchna chahte hi nahi the. `assertThrows` use ek hisse tak seemit rakhta hai.",
    },
    related: ["Before", "assertEquals", "runTest"],
  },

  Before: {
    term: "@Before",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import org.junit.Before",
    does: {
      en: "Runs before every test in the class, giving each one a fresh subject.",
      hi: "Class के हर test से पहले चलता है, हर एक को ताजा चीज देते हुए।",
      "hi-en": "Class ke har test se pehle chalta hai, har ek ko taza cheez dete hue.",
    },
    affects: {
      en: "\"Before every test\" rather than once per class is deliberate: it means no test can depend on what a previous one left behind. `@BeforeClass` runs once, and anything mutable you put there becomes shared state — which is the classic cause of a suite that passes locally and fails in CI, since JUnit does not guarantee execution order and does not order tests identically on every machine.",
      hi: "\"हर test से पहले\", न कि class में एक बार — यह जानबूझकर है: इसका मतलब है कि कोई test इस पर टिक ही नहीं सकता कि पिछले ने क्या छोड़ा। `@BeforeClass` एक बार चलता है, और वहाँ रखी कोई भी बदलती चीज साझा हालत बन जाती है — और यही उस suite की जानी-पहचानी वजह है जो आपके यहाँ पास होती है और CI में नाकाम, क्योंकि JUnit चलने के क्रम की गारंटी नहीं देता और हर मशीन पर tests को एक जैसा नहीं छाँटता।",
      "hi-en": "\"Har test se pehle\", na ki class mein ek baar — ye jaanbujhkar hai: iska matlab hai ki koi test is par tik hi nahi sakta ki pichhle ne kya chhoda. `@BeforeClass` ek baar chalta hai, aur wahan rakhi koi bhi badalti cheez share haalat ban jati hai — aur yahi us suite ki jani-pehchani wajah hai jo aapke yahan pass hoti hai aur CI mein nakaam, kyunki JUnit chalne ke order ki guarantee nahi deta aur har machine par tests ko ek jaisa nahi chhantata.",
    },
    related: ["Test", "After", "Rule"],
  },

  After: {
    term: "@After",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import org.junit.After",
    does: {
      en: "Runs after every test, for cleanup.",
      hi: "हर test के बाद चलता है, सफाई के लिए।",
      "hi-en": "Har test ke baad chalta hai, safai ke liye.",
    },
    affects: {
      en: "This is where an in-memory Room database is closed and a `MockWebServer` is shut down — without it, file handles and ports leak into later tests and a test finds rows it never inserted. It is also where MockK's `unmockkAll()` belongs, since `mockkObject` and `mockkStatic` are global and a leaked mock breaks an unrelated test later, with a failure that points nowhere near the cause.",
      hi: "यहीं memory वाला Room का database बंद होता है और `MockWebServer` shutdown — उसके बिना file के हाथ और ports आगे के tests में रिसते हैं और कोई test ऐसी rows पा लेता है जो उसने कभी डाली ही नहीं। MockK का `unmockkAll()` भी यहीं की चीज है, क्योंकि `mockkObject` और `mockkStatic` सब जगह लागू होते हैं और छूटा हुआ mock आगे किसी बेमतलब test को तोड़ देता है, ऐसी नाकामी के साथ जो वजह के आस-पास भी इशारा नहीं करती।",
      "hi-en": "Yahin memory wala Room ka database band hota hai aur `MockWebServer` shutdown — uske bina file ke haath aur ports aage ke tests mein riste hain aur koi test aisi rows pa leta hai jo usne kabhi daali hi nahi. MockK ka `unmockkAll()` bhi yahin ki cheez hai, kyunki `mockkObject` aur `mockkStatic` sab jagah lagu hote hain aur chhoota hua mock aage kisi bematlab test ko tod deta hai, aisi nakami ke saath jo wajah ke aas-paas bhi ishara nahi karti.",
    },
    related: ["Before", "MockWebServer", "mockkObject"],
  },

  Rule: {
    term: "@Rule",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import org.junit.Rule",
    does: {
      en: "Wraps every test in the class with reusable setup and teardown.",
      hi: "Class के हर test को दोबारा इस्तेमाल होने वाली तैयारी और सफाई में लपेट देता है।",
      "hi-en": "Class ke har test ko dobara istemal hone wali taiyari aur safai mein lapet deta hai.",
    },
    affects: {
      en: "In Kotlin it must be written `@get:Rule`, because the annotation belongs on the getter and a plain `@Rule` on a property fails at run time with a message about the field not being public. This is how `MainDispatcherRule`, `createComposeRule()`, `ActivityScenarioRule` and `GrantPermissionRule` are all applied.",
      hi: "Kotlin में इसे `@get:Rule` लिखना पड़ता है, क्योंकि वह annotation getter पर लगता है और किसी property पर सादा `@Rule` चलते वक्त ऐसे संदेश के साथ नाकाम होता है कि वह field public नहीं है। `MainDispatcherRule`, `createComposeRule()`, `ActivityScenarioRule` और `GrantPermissionRule`, सब इसी तरह लगाए जाते हैं।",
      "hi-en": "Kotlin mein ise `@get:Rule` likhna padta hai, kyunki wo annotation getter par lagta hai aur kisi property par saada `@Rule` chalte waqt aise sandesh ke saath nakaam hota hai ki wo field public nahi hai. `MainDispatcherRule`, `createComposeRule()`, `ActivityScenarioRule` aur `GrantPermissionRule`, sab isi tarah lagaye jate hain.",
    },
    related: ["Before", "createComposeRule", "GrantPermissionRule"],
  },

  assertEquals: {
    term: "assertEquals",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import org.junit.Assert.assertEquals",
    does: {
      en: "Fails the test unless two values are equal.",
      hi: "अगर दो values बराबर न हों तो test नाकाम कर देता है।",
      "hi-en": "Agar do values barabar na hon to test nakaam kar deta hai.",
    },
    affects: {
      en: "It takes **expected first**. Swapping the arguments still passes and still fails, but the failure message reads backwards — \"expected 4, was 5\" when it was the other way round — and you spend a minute doubting the wrong thing. Floating point needs a delta: `0.1 + 0.2` is not `0.3`, so `assertEquals(0.3, sum)` fails on arithmetic that is perfectly correct.",
      hi: "इसमें **पहले expected** आता है। Arguments उलट देने पर भी वह पास होता है और नाकाम भी, पर नाकामी का संदेश उलटा पढ़ा जाता है — \"expected 4, was 5\" जबकि बात उलटी थी — और आप एक मिनट गलत चीज पर शक करते रहते हैं। दशमलव को delta चाहिए: `0.1 + 0.2` `0.3` नहीं है, तो `assertEquals(0.3, sum)` ऐसे गणित पर नाकाम होता है जो बिलकुल सही है।",
      "hi-en": "Ismein **pehle expected** aata hai. Arguments ulat dene par bhi wo pass hota hai aur nakaam bhi, par nakami ka sandesh ulta padha jata hai — \"expected 4, was 5\" jabki baat ulti thi — aur aap ek minute galat cheez par shak karte rehte ho. Dashamlav ko delta chahiye: `0.1 + 0.2` `0.3` nahi hai, to `assertEquals(0.3, sum)` aise ganit par nakaam hota hai jo bilkul sahi hai.",
    },
    related: ["Test", "assertThrows"],
  },

  assertThrows: {
    term: "assertThrows",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import org.junit.Assert.assertThrows",
    does: {
      en: "Asserts that a block throws a given exception, and returns it.",
      hi: "दावा करता है कि कोई हिस्सा दिया हुआ exception फेंकता है, और उसे लौटा देता है।",
      "hi-en": "Dawa karta hai ki koi hissa diya hua exception phenkta hai, aur use lauta deta hai.",
    },
    affects: {
      en: "Because it is scoped to a block rather than a whole method, it cannot pass because your setup threw — which is exactly the failure mode of `@Test(expected = ...)`. It returns the exception, so you can assert on the message too, which is worth doing when the message is part of the contract.",
      hi: "यह पूरे method के बजाय एक हिस्से तक सीमित है, तो यह इसलिए पास नहीं हो सकता कि आपकी तैयारी ने फेंक दिया — और `@Test(expected = ...)` की नाकामी की शक्ल ठीक वही है। यह वह exception लौटाता है, तो आप उसके संदेश पर भी दावा कर सकते हैं, और जब वह संदेश करार का हिस्सा हो तब यह करने लायक है।",
      "hi-en": "Ye poore method ke bajaye ek hisse tak seemit hai, to ye isliye pass nahi ho sakta ki aapki taiyari ne phenk diya — aur `@Test(expected = ...)` ki nakami ki shakal theek wahi hai. Ye wo exception lautata hai, to aap uske sandesh par bhi dawa kar sakte ho, aur jab wo sandesh karaar ka hissa ho tab ye karne layak hai.",
    },
    related: ["assertEquals", "Test"],
  },

  mockk: {
    term: "mockk",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import io.mockk.mockk",
    does: {
      en: "Creates a mock of a type, whose behaviour you then stub.",
      hi: "किसी type का mock बनाता है, जिसका बर्ताव आप फिर stub करते हैं।",
      "hi-en": "Kisi type ka mock banata hai, jiska behaviour aap phir stub karte ho.",
    },
    values: {
      en: "`relaxed = true` returns a default for every function; `relaxUnitFun = true` relaxes only the ones returning `Unit`.",
      hi: "`relaxed = true` हर function के लिए कोई डिफॉल्ट लौटाता है; `relaxUnitFun = true` सिर्फ `Unit` लौटाने वालों को ढीला करता है।",
      "hi-en": "`relaxed = true` har function ke liye koi default lautata hai; `relaxUnitFun = true` sirf `Unit` lautane walon ko dheela karta hai.",
    },
    affects: {
      en: "An unstubbed call on a plain mock **throws**, which is a feature — an unexpected call fails loudly instead of silently returning null. That is why `relaxed = true` everywhere is usually too much: it is how a test stops noticing that the code called something it should not have. Prefer `relaxUnitFun = true`. And for most cases a fake is better still: it has real behaviour, so tests read as a sequence of actions and survive refactoring.",
      hi: "सादे mock पर बिना stub की गई call **फेंकती है**, और यह सुविधा है — कोई अनचाही call चुपचाप null लौटाने के बजाय जोर से नाकाम होती है। इसीलिए हर जगह `relaxed = true` आमतौर पर जरूरत से ज्यादा है: इसी से test उन calls को नोटिस करना बंद कर देता है जो code को करनी ही नहीं चाहिए थीं। `relaxUnitFun = true` बेहतर है। और ज्यादातर मामलों में नकली चीज उससे भी बेहतर है: उसका असली बर्ताव है, तो tests कामों की कड़ी की तरह पढ़े जाते हैं और refactor में बचते हैं।",
      "hi-en": "Saade mock par bina stub ki gayi call **phenkti hai**, aur ye suvidha hai — koi anchahi call chupchap null lautane ke bajaye zor se nakaam hoti hai. Isiliye har jagah `relaxed = true` aam taur par zarurat se zyada hai: isi se test un calls ko notice karna band kar deta hai jo code ko karni hi nahi chahiye thin. `relaxUnitFun = true` behtar hai. Aur zyadatar mamlon mein nakli cheez usse bhi behtar hai: uska asli behaviour hai, to tests kaamon ki kadi ki tarah padhe jate hain aur refactor mein bachte hain.",
    },
    docs: "https://mockk.io/",
    related: ["every", "verify", "slot"],
  },

  every: {
    term: "every",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import io.mockk.every",
    does: {
      en: "Stubs what a mocked function returns; `coEvery` is the `suspend` version.",
      hi: "Mock किए हुए function का जवाब तय करता है; `coEvery` उसका `suspend` वाला रूप है।",
      "hi-en": "Mock kiye hue function ka jawab tay karta hai; `coEvery` uska `suspend` wala roop hai.",
    },
    affects: {
      en: "Forgetting the `co` prefix on a suspend function gives a confusing error rather than a helpful one, so it is worth recognising. If a test only needs a canned return value, a fake does that with less ceremony and no stubbing at all — reach for `every` when you also need to assert that the call happened.",
      hi: "Suspend function पर `co` लगाना भूलने से मददगार के बजाय उलझाने वाला error मिलता है, तो उसे पहचान लेना काम का है। अगर किसी test को सिर्फ बना-बनाया जवाब चाहिए, तो नकली चीज वह कम तामझाम में और बिना किसी stub के देती है — `every` तब उठाइए जब आपको यह भी दावा करना हो कि वह call हुई।",
      "hi-en": "Suspend function par `co` lagana bhoolne se madadgar ke bajaye uljhane wala error milta hai, to use pehchan lena kaam ka hai. Agar kisi test ko sirf bana-banaya jawab chahiye, to nakli cheez wo kam tamjhaam mein aur bina kisi stub ke deti hai — `every` tab uthaiye jab aapko ye bhi dawa karna ho ki wo call hui.",
    },
    related: ["mockk", "verify", "suspend"],
  },

  verify: {
    term: "verify",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import io.mockk.verify",
    does: {
      en: "Asserts that a mocked function was called; `coVerify` is the `suspend` version.",
      hi: "दावा करता है कि mock किया हुआ function बुलाया गया; `coVerify` उसका `suspend` वाला रूप है।",
      "hi-en": "Dawa karta hai ki mock kiya hua function bulaya gaya; `coVerify` uska `suspend` wala roop hai.",
    },
    values: {
      en: "`exactly = 1` pins the count; `exactly = 0` asserts something did **not** happen.",
      hi: "`exactly = 1` गिनती तय करता है; `exactly = 0` दावा करता है कि कोई चीज हुई **नहीं**।",
      "hi-en": "`exactly = 1` ginti tay karta hai; `exactly = 0` dawa karta hai ki koi cheez hui **nahi**.",
    },
    affects: {
      en: "Verifying a call instead of asserting on state is the failure mode that makes people distrust mock-heavy suites: a test that stubs `refresh()` and verifies it was called still passes when the `ViewModel` ignores the result entirely — which is the bug it was written to catch. Keep verification for cases where the interaction genuinely is the requirement, like a token refresh happening exactly once.",
      hi: "State पर दावे के बजाय call जाँचना वही नाकामी है जिससे लोग mock वाली suites पर भरोसा करना छोड़ देते हैं: जो test `refresh()` stub करके यह जाँचता है कि वह बुलाया गया, वह तब भी पास होता है जब `ViewModel` उस नतीजे को पूरी तरह अनदेखा कर दे — और ठीक वही bug उसे पकड़ना था। Verification उन्हीं मामलों के लिए रखिए जहाँ वह लेन-देन सच में जरूरत है, जैसे token refresh का ठीक एक बार होना।",
      "hi-en": "State par dawe ke bajaye call dekhna wahi nakami hai jisse log mock wali suites par bharosa karna chhod dete hain: jo test `refresh()` stub karke ye dekhta hai ki wo bulaya gaya, wo tab bhi pass hota hai jab `ViewModel` us result ko poori tarah andekha kar de — aur theek wahi bug use pakadna tha. Verification unhin mamlon ke liye rakhiye jahan wo len-den sach mein zarurat hai, jaise token refresh ka theek ek baar hona.",
    },
    related: ["mockk", "every", "slot"],
  },

  slot: {
    term: "slot",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import io.mockk.slot",
    does: {
      en: "Captures the argument a mocked function was called with, so you can assert on it.",
      hi: "Mock किए हुए function को जिस argument के साथ बुलाया गया उसे पकड़ लेता है, ताकि आप उस पर दावा कर सकें।",
      "hi-en": "Mock kiye hue function ko jis argument ke saath bulaya gaya use pakad leta hai, taki aap us par dawa kar sako.",
    },
    affects: {
      en: "Used with `capture(slot)` in the stub, then read as `slot.captured`. It is usually clearer than building an elaborate `match { }` predicate, because the assertion lives with your other assertions rather than hidden inside the stub.",
      hi: "Stub में `capture(slot)` के साथ लिया जाता है, फिर `slot.captured` से पढ़ा जाता है। यह आमतौर पर किसी लंबी-चौड़ी `match { }` शर्त से साफ है, क्योंकि वह दावा आपके बाकी दावों के साथ रहता है, stub के अंदर छिपा हुआ नहीं।",
      "hi-en": "Stub mein `capture(slot)` ke saath liya jata hai, phir `slot.captured` se padha jata hai. Ye aam taur par kisi lambi-chaudi `match { }` shart se saaf hai, kyunki wo dawa aapke baaki dawon ke saath rehta hai, stub ke andar chhupa hua nahi.",
    },
    related: ["mockk", "every", "verify"],
  },

  mockkObject: {
    term: "mockkObject",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import io.mockk.mockkObject",
    does: {
      en: "Mocks a Kotlin `object`; `mockkStatic` does the same for static members.",
      hi: "किसी Kotlin `object` को mock करता है; `mockkStatic` static सदस्यों के लिए वही करता है।",
      "hi-en": "Kisi Kotlin `object` ko mock karta hai; `mockkStatic` static sadasyon ke liye wahi karta hai.",
    },
    affects: {
      en: "These are **global**, so always unmock in `@After` — a leaked mock breaks an unrelated test later in the suite, with a failure that points nowhere near the cause. Treat each use as a note that a dependency is not injected: an object you have to `mockkObject` is one you could have passed into the constructor. `mockkStatic` for Android framework statics like `Uri.parse` is the one genuinely reasonable case, since you cannot inject those.",
      hi: "ये **सब जगह लागू** होते हैं, तो `@After` में हमेशा unmock कीजिए — छूटा हुआ mock suite में आगे किसी बेमतलब test को तोड़ देता है, ऐसी नाकामी के साथ जो वजह के आस-पास भी इशारा नहीं करती। हर इस्तेमाल को इस बात का पर्चा मानिए कि कोई dependency inject नहीं की गई: जिस object को `mockkObject` करना पड़ रहा है वह वही है जिसे आप constructor में भेज सकते थे। `Uri.parse` जैसे Android framework वाले statics के लिए `mockkStatic` इकलौता सच में जायज मामला है, क्योंकि उन्हें inject किया ही नहीं जा सकता।",
      "hi-en": "Ye **sab jagah lagu** hote hain, to `@After` mein hamesha unmock kijiye — chhoota hua mock suite mein aage kisi bematlab test ko tod deta hai, aisi nakami ke saath jo wajah ke aas-paas bhi ishara nahi karti. Har istemal ko is baat ka parcha maniye ki koi dependency inject nahi ki gayi: jis object ko `mockkObject` karna pad raha hai wo wahi hai jise aap constructor mein bhej sakte the. `Uri.parse` jaise Android framework wale statics ke liye `mockkStatic` iklauta sach mein jayaz maamla hai, kyunki unhe inject kiya hi nahi ja sakta.",
    },
    related: ["mockk", "After", "Inject"],
  },

  runTest: {
    term: "runTest",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.test.runTest",
    does: {
      en: "Runs a test body with a virtual clock, so `delay` costs no real time.",
      hi: "Test की body को आभासी घड़ी के साथ चलाता है, तो `delay` की कोई असली कीमत नहीं।",
      "hi-en": "Test ki body ko aabhasi ghadi ke saath chalata hai, to `delay` ki koi asli keemat nahi.",
    },
    affects: {
      en: "This is what makes async code testable: a `delay(5_000)` completes instantly because the scheduler skips the time rather than spending it. So you never wait, you advance. It only controls coroutines using **its** dispatcher, though — a class that hardcodes `Dispatchers.IO` launches onto a real thread pool where the test's clock has no say, which is why dispatchers are injected.",
      hi: "यही async code को जाँचने लायक बनाता है: `delay(5_000)` तुरंत पूरा हो जाता है क्योंकि scheduler वह समय खर्च करने के बजाय लाँघ जाता है। तो आप इंतजार कभी नहीं करते, घड़ी आगे बढ़ाते हैं। पर यह सिर्फ उन coroutines पर अख्तियार रखता है जो **इसका** dispatcher लेते हैं — जो class `Dispatchers.IO` जड़ देती है वह असली thread pool पर चल पड़ती है जहाँ test की घड़ी की कोई नहीं सुनता, और dispatchers inject इसीलिए किए जाते हैं।",
      "hi-en": "Yahi async code ko jaanchne layak banata hai: `delay(5_000)` turant poora ho jata hai kyunki scheduler wo samay kharch karne ke bajaye laangh jata hai. To aap intezar kabhi nahi karte, ghadi aage badhate ho. Par ye sirf un coroutines par akhtiyaar rakhta hai jo **iska** dispatcher lete hain — jo class `Dispatchers.IO` jad deti hai wo asli thread pool par chal padti hai jahan test ki ghadi ki koi nahi sunta, aur dispatchers inject isiliye kiye jate hain.",
    },
    related: ["advanceUntilIdle", "StandardTestDispatcher", "Dispatchers"],
  },

  advanceUntilIdle: {
    term: "advanceUntilIdle",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.test.advanceUntilIdle",
    does: {
      en: "Runs every pending coroutine until nothing is left to do, instantly.",
      hi: "हर बाकी पड़े coroutine को तब तक चलाता है जब तक कुछ बचे नहीं, तुरंत।",
      "hi-en": "Har baaki pade coroutine ko tab tak chalata hai jab tak kuch bache nahi, turant.",
    },
    values: {
      en: "`advanceTimeBy(ms)` moves the virtual clock a known amount; `runCurrent()` runs only what is already queued; `currentTime` reads the virtual clock.",
      hi: "`advanceTimeBy(ms)` आभासी घड़ी तय जितनी आगे बढ़ाता है; `runCurrent()` सिर्फ वही चलाता है जो पहले से कतार में है; `currentTime` आभासी घड़ी पढ़ता है।",
      "hi-en": "`advanceTimeBy(ms)` aabhasi ghadi tay jitni aage badhata hai; `runCurrent()` sirf wahi chalata hai jo pehle se line mein hai; `currentTime` aabhasi ghadi padhta hai.",
    },
    affects: {
      en: "This replaces `Thread.sleep`, which is flaky on a loaded machine and slow on every machine — five hundred milliseconds per test is a minute across a hundred tests, spent doing nothing. Under `StandardTestDispatcher` nothing has run until you call it, so a missing `advanceUntilIdle` is a visible failure rather than an accidental pass.",
      hi: "यह `Thread.sleep` की जगह लेता है, जो बोझ में दबी मशीन पर गैर-भरोसेमंद है और हर मशीन पर धीमा — हर test पर पाँच सौ milliseconds यानी सौ tests पर एक मिनट, कुछ न करते हुए। `StandardTestDispatcher` के नीचे आपके इसे बुलाने तक कुछ चला ही नहीं होता, तो `advanceUntilIdle` का छूटना दिखती हुई नाकामी है, इत्तेफाकन मिली पास नहीं।",
      "hi-en": "Ye `Thread.sleep` ki jagah leta hai, jo bojh mein dabi machine par gair-bharosemand hai aur har machine par dheema — har test par paanch sau milliseconds yani sau tests par ek minute, kuch na karte hue. `StandardTestDispatcher` ke neeche aapke ise bulane tak kuch chala hi nahi hota, to `advanceUntilIdle` ka chhootna dikhti hui nakami hai, ittefaqan mili pass nahi.",
    },
    related: ["runTest", "StandardTestDispatcher"],
  },

  StandardTestDispatcher: {
    term: "StandardTestDispatcher",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "coroutines",
    importLine: "import kotlinx.coroutines.test.StandardTestDispatcher",
    does: {
      en: "Queues coroutines instead of running them, so the test says when work happens.",
      hi: "Coroutines को चलाने के बजाय कतार में लगाता है, तो test बताता है कि काम कब होता है।",
      "hi-en": "Coroutines ko chalane ke bajaye line mein lagata hai, to test batata hai ki kaam kab hota hai.",
    },
    affects: {
      en: "This is the better default. `UnconfinedTestDispatcher` starts a coroutine eagerly and runs it to its first real suspension, which makes simple tests look synchronous and need no scheduling calls — convenient, and the problem: the test passes for a reason it never states, and stops passing the moment production code adds a `delay`, a `withContext` or a second coroutine, with a failure that looks unrelated to the change. Pass `testScheduler` to an injected dispatcher so it shares the clock.",
      hi: "बेहतर डिफॉल्ट यही है। `UnconfinedTestDispatcher` coroutine को तुरंत शुरू करके पहली असली रुकावट तक चला देता है, जिससे आसान tests साथ-साथ चलते दिखते हैं और उन्हें कोई scheduling वाली call चाहिए ही नहीं — सुविधाजनक, और यही दिक्कत: test ऐसी वजह से पास होता है जो उसने कभी बताई नहीं, और production वाला code जैसे ही कोई `delay`, `withContext` या दूसरा coroutine जोड़ता है वह पास होना बंद कर देता है, ऐसी नाकामी के साथ जो उस बदलाव से बेमतलब लगती है। Inject किए dispatcher को `testScheduler` भेजिए ताकि घड़ी साझा रहे।",
      "hi-en": "Behtar default yahi hai. `UnconfinedTestDispatcher` coroutine ko turant shuru karke pehli asli rukavat tak chala deta hai, jisse aasan tests saath-saath chalte dikhte hain aur unhe koi scheduling wali call chahiye hi nahi — suvidhajanak, aur yahi mushkil: test aisi wajah se pass hota hai jo usne kabhi batai nahi, aur production wala code jaise hi koi `delay`, `withContext` ya doosra coroutine jodta hai wo pass hona band kar deta hai, aisi nakami ke saath jo us badlaav se bematlab lagti hai. Inject kiye dispatcher ko `testScheduler` bhejiye taki ghadi share rahe.",
    },
    related: ["runTest", "advanceUntilIdle", "Dispatchers"],
  },

  awaitItem: {
    term: "awaitItem",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "library",
    importLine: "import app.cash.turbine.test",
    does: {
      en: "Turbine: suspends until the flow's next emission and returns it.",
      hi: "Turbine: उस flow की अगली emission तक रुकता है और उसे लौटाता है।",
      "hi-en": "Turbine: us flow ki agli emission tak rukta hai aur use lautata hai.",
    },
    values: {
      en: "`awaitComplete()`, `awaitError()`, `expectNoEvents()` and `cancelAndIgnoreRemainingEvents()` cover the other outcomes.",
      hi: "`awaitComplete()`, `awaitError()`, `expectNoEvents()` और `cancelAndIgnoreRemainingEvents()` बाकी नतीजे ढकते हैं।",
      "hi-en": "`awaitComplete()`, `awaitError()`, `expectNoEvents()` aur `cancelAndIgnoreRemainingEvents()` baaki natije dhakte hain.",
    },
    affects: {
      en: "The trap is `StateFlow`, which always has a current value — so the first `awaitItem()` hands you the state that already existed, before anything the test did, and a test that calls `load()` then asserts on the first item fails in a way that reads like the code never ran. Turbine also fails the test on an emission you did not consume, which is usually a real bug: a `StateFlow` re-emitting because you rebuilt an equal-but-not-`==` object.",
      hi: "जाल `StateFlow` है, जिसके पास हमेशा एक मौजूदा value होती है — तो पहला `awaitItem()` वही state देता है जो पहले से थी, test के कुछ भी करने से पहले, और जो test `load()` बुलाकर पहली item पर दावा करता है वह ऐसे नाकाम होता है मानो वह code चला ही न हो। जो emission आपने ली नहीं उस पर भी Turbine test नाकाम कर देता है, और वह आमतौर पर असली bug है: कोई `StateFlow` सिर्फ इसलिए दोबारा भेज रहा है कि आपने बराबर पर `==` न होने वाली चीज दोबारा बना दी।",
      "hi-en": "Jaal `StateFlow` hai, jiske paas hamesha ek maujooda value hoti hai — to pehla `awaitItem()` wahi state deta hai jo pehle se thi, test ke kuch bhi karne se pehle, aur jo test `load()` bulakar pehli item par dawa karta hai wo aise nakaam hota hai mano wo code chala hi na ho. Jo emission aapne li nahi us par bhi Turbine test nakaam kar deta hai, aur wo aam taur par asli bug hai: koi `StateFlow` sirf isliye dobara bhej raha hai ki aapne barabar par `==` na hone wali cheez dobara bana di.",
    },
    docs: "https://github.com/cashapp/turbine",
    related: ["runTest", "StateFlow", "Flow"],
  },

  createComposeRule: {
    term: "createComposeRule",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.ui.test.junit4.createComposeRule",
    does: {
      en: "Hosts a composable for a test, with no activity, and synchronises with the composition.",
      hi: "किसी test के लिए composable को बिना activity के रखता है, और composition से तालमेल रखता है।",
      "hi-en": "Kisi test ke liye composable ko bina activity ke rakhta hai, aur composition se taalmel rakhta hai.",
    },
    affects: {
      en: "No activity means these run in seconds rather than the tens of seconds an Espresso test takes — use `createAndroidComposeRule<T>()` only when the test genuinely needs the activity. The rule waits for the composition to be idle, but it cannot know your `LaunchedEffect` started a load that has not finished, since that is your coroutine rather than Compose's recomposition. `waitUntil` covers that; hoisting the state so the test can set it directly removes the wait entirely.",
      hi: "कोई activity न होने का मतलब है कि ये सेकंडों में चलते हैं, न कि Espresso वाले दसियों सेकंड में — `createAndroidComposeRule<T>()` तभी लीजिए जब test को सच में वह activity चाहिए। वह rule composition के खाली होने का इंतजार करता है, पर वह जान नहीं सकता कि आपके `LaunchedEffect` ने ऐसा काम शुरू किया जो पूरा नहीं हुआ, क्योंकि वह आपका coroutine है, Compose का recomposition नहीं। `waitUntil` उसे ढकता है; state ऊपर उठा देना, ताकि test उसे सीधे रख सके, उस इंतजार को पूरी तरह हटा देता है।",
      "hi-en": "Koi activity na hone ka matlab hai ki ye secondon mein chalte hain, na ki Espresso wale dasiyon second mein — `createAndroidComposeRule<T>()` tabhi lijiye jab test ko sach mein wo activity chahiye. Wo rule composition ke khaali hone ka intezar karta hai, par wo jaan nahi sakta ki aapke `LaunchedEffect` ne aisa kaam shuru kiya jo poora nahi hua, kyunki wo aapka coroutine hai, Compose ka recomposition nahi. `waitUntil` use dhakta hai; state upar utha dena, taki test use seedhe rakh sake, us intezar ko poori tarah hata deta hai.",
    },
    related: ["onNodeWithText", "semantics", "Rule"],
  },

  onNodeWithText: {
    term: "onNodeWithText",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "compose",
    importLine: "import androidx.compose.ui.test.onNodeWithText",
    does: {
      en: "Finds a node in the semantics tree by its visible text.",
      hi: "Semantics के पेड़ में किसी node को उसके दिखते text से ढूँढ़ता है।",
      "hi-en": "Semantics ke ped mein kisi node ko uske dikhte text se dhoondhta hai.",
    },
    values: {
      en: "`onNodeWithContentDescription` for icons, `onNodeWithTag` for a test-only handle, `onAllNodesWithText(...)[i]` when several match.",
      hi: "Icons के लिए `onNodeWithContentDescription`, सिर्फ test वाले हत्थे के लिए `onNodeWithTag`, और कई मिलने पर `onAllNodesWithText(...)[i]`।",
      "hi-en": "Icons ke liye `onNodeWithContentDescription`, sirf test wale hatthe ke liye `onNodeWithTag`, aur kai milne par `onAllNodesWithText(...)[i]`.",
    },
    affects: {
      en: "Prefer text and content description over `testTag`: those are what a user perceives, so a test using them fails when the user experience breaks, while a `testTag` keeps passing after the label becomes wrong. `testTag` earns its place only when there is nothing user-visible to grab. When a finder fails, `onRoot().printToLog()` dumps the tree.",
      hi: "`testTag` के बजाय text और content description लीजिए: user वही महसूस करता है, तो उन्हें लेने वाला test तब नाकाम होता है जब user का अनुभव टूटे, जबकि `testTag` वाला label के गलत हो जाने के बाद भी पास होता रहता है। `testTag` तभी अपनी जगह बनाता है जब पकड़ने को कुछ दिखता ही न हो। कोई खोजी नाकाम हो तो `onRoot().printToLog()` पूरा पेड़ छाप देता है।",
      "hi-en": "`testTag` ke bajaye text aur content description lijiye: user wahi mehsoos karta hai, to unhe lene wala test tab nakaam hota hai jab user ka anubhav toote, jabki `testTag` wala label ke galat ho jane ke baad bhi pass hota rehta hai. `testTag` tabhi apni jagah banata hai jab pakadne ko kuch dikhta hi na ho. Koi khoji nakaam ho to `onRoot().printToLog()` poora ped chhap deta hai.",
    },
    related: ["createComposeRule", "semantics", "Modifier"],
  },

  semantics: {
    term: "semantics",
    kind: { en: "Modifier", hi: "Modifier", "hi-en": "Modifier" },
    source: "compose",
    importLine: "import androidx.compose.ui.semantics.semantics",
    does: {
      en: "Describes what a composable is and means, for tests and for screen readers.",
      hi: "बताता है कि कोई composable है क्या और उसका मतलब क्या है — tests के लिए भी, screen readers के लिए भी।",
      "hi-en": "Batata hai ki koi composable hai kya aur uska matlab kya hai — tests ke liye bhi, screen readers ke liye bhi.",
    },
    affects: {
      en: "Tests and TalkBack read the same tree, which is why writing testable UI and writing accessible UI turn out to be the same job. `mergeDescendants = true` turns a composite into one node with a combined label — without it a row of three composables is three nodes, so a screen reader announces three fragments and your test has to find them individually. `testTag` is itself a semantics property, which is why `useUnmergedTree = true` is sometimes needed to reach a merged child.",
      hi: "Tests और TalkBack वही पेड़ पढ़ते हैं, इसीलिए जाँचे जा सकने वाला UI लिखना और सुलभ UI लिखना एक ही काम निकलते हैं। `mergeDescendants = true` किसी जुड़ी हुई चीज को जुड़े label वाली एक node बना देता है — उसके बिना तीन composables वाली row तीन nodes है, तो screen reader तीन टुकड़े बोलता है और आपके test को उन्हें अलग-अलग ढूँढ़ना पड़ता है। `testTag` खुद भी semantics की एक चीज है, और इसीलिए मिलाए हुए किसी बच्चे तक पहुँचने के लिए कभी-कभी `useUnmergedTree = true` चाहिए।",
      "hi-en": "Tests aur TalkBack wahi ped padhte hain, isiliye jaanche ja sakne wala UI likhna aur sulabh UI likhna ek hi kaam nikalte hain. `mergeDescendants = true` kisi judi hui cheez ko jude label wali ek node bana deta hai — uske bina teen composables wali row teen nodes hai, to screen reader teen tukde bolta hai aur aapke test ko unhe alag-alag dhoondhna padta hai. `testTag` khud bhi semantics ki ek cheez hai, aur isiliye milaye hue kisi bachche tak pahunchne ke liye kabhi-kabhi `useUnmergedTree = true` chahiye.",
    },
    related: ["onNodeWithText", "createComposeRule", "Modifier"],
  },

  onView: {
    term: "onView",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "jetpack",
    importLine: "import androidx.test.espresso.Espresso.onView",
    does: {
      en: "Espresso's entry point: find a View, act on it, assert on it.",
      hi: "Espresso का दरवाजा: कोई View ढूँढ़िए, उस पर काम कीजिए, उस पर दावा कीजिए।",
      "hi-en": "Espresso ka darwaza: koi View dhoondhiye, us par kaam kijiye, us par dawa kijiye.",
    },
    affects: {
      en: "Every Espresso statement is the same sentence: `onView(matcher).perform(action).check(assertion)`. Two things bite. `closeSoftKeyboard()` after typing is not decoration — a keyboard covering the next target makes the click fail with \"not displayed\", a confusing message for an occlusion problem. And a `RecyclerView` only creates visible views, so a plain `onView` for an off-screen item fails because it is not in the hierarchy at all; `RecyclerViewActions` exists for that.",
      hi: "Espresso का हर वाक्य वही एक वाक्य है: `onView(matcher).perform(action).check(assertion)`. दो चीजें काटती हैं। Type करने के बाद `closeSoftKeyboard()` सजावट नहीं है — अगले निशाने को ढकता keyboard click को \"not displayed\" के साथ नाकाम कर देता है, जो ढके होने की दिक्कत के लिए उलझाने वाला संदेश है। और `RecyclerView` सिर्फ दिखने वाले views बनाता है, तो screen से बाहर के item के लिए सादा `onView` इसलिए नाकाम होता है कि वह hierarchy में है ही नहीं; `RecyclerViewActions` इसी के लिए है।",
      "hi-en": "Espresso ka har vakya wahi ek vakya hai: `onView(matcher).perform(action).check(assertion)`. Do cheezein kaat-ti hain. Type karne ke baad `closeSoftKeyboard()` sajawat nahi hai — agle nishane ko dhakta keyboard click ko \"not displayed\" ke saath nakaam kar deta hai, jo dhake hone ki mushkil ke liye uljhane wala sandesh hai. Aur `RecyclerView` sirf dikhne wale views banata hai, to screen se bahar ke item ke liye saada `onView` isliye nakaam hota hai ki wo hierarchy mein hai hi nahi; `RecyclerViewActions` isi ke liye hai.",
    },
    related: ["IdlingResource", "GrantPermissionRule", "createComposeRule"],
  },

  IdlingResource: {
    term: "IdlingResource",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "jetpack",
    importLine: "import androidx.test.espresso.IdlingResource",
    does: {
      en: "Tells Espresso to wait for work it cannot see.",
      hi: "Espresso से कहता है कि जो काम उसे दिखता नहीं उसका इंतजार करे।",
      "hi-en": "Espresso se kehta hai ki jo kaam use dikhta nahi uska intezar kare.",
    },
    affects: {
      en: "Espresso synchronises on the main thread's message queue, so it waits for layout, animations and posted work — and knows nothing about a coroutine or an OkHttp call running elsewhere. That gap is where the one-run-in-ten failure comes from. An `IdlingResource` is the correct mechanism, but for most tests the better answer is to remove the wait: point the app at `MockWebServer` or inject a fake repository, so the data is there immediately.",
      hi: "Espresso main thread की संदेश-कतार से तालमेल रखता है, तो वह layout, animations और भेजे गए काम का इंतजार करता है — और कहीं और चलते किसी coroutine या OkHttp की call के बारे में कुछ नहीं जानता। दस में एक बार वाली नाकामी उसी छेद से आती है। `IdlingResource` सही तरीका है, पर ज्यादातर tests के लिए बेहतर जवाब है उस इंतजार को हटा देना: ऐप को `MockWebServer` की तरफ मोड़िए या नकली repository inject कीजिए, ताकि data तुरंत मौजूद हो।",
      "hi-en": "Espresso main thread ki sandesh-line se taalmel rakhta hai, to wo layout, animations aur bheje gaye kaam ka intezar karta hai — aur kahin aur chalte kisi coroutine ya OkHttp ki call ke baare mein kuch nahi janta. Das mein ek baar wali nakami usi chhed se aati hai. `IdlingResource` sahi tarika hai, par zyadatar tests ke liye behtar jawab hai us intezar ko hata dena: app ko `MockWebServer` ki taraf modiye ya nakli repository inject kijiye, taki data turant maujood ho.",
    },
    related: ["onView", "MockWebServer", "runTest"],
  },

  GrantPermissionRule: {
    term: "GrantPermissionRule",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.test.rule.GrantPermissionRule",
    does: {
      en: "Grants a runtime permission before the test, so the system dialog never appears.",
      hi: "Test से पहले runtime वाली permission दे देता है, ताकि system का dialog आए ही नहीं।",
      "hi-en": "Test se pehle runtime wali permission de deta hai, taki system ka dialog aaye hi nahi.",
    },
    affects: {
      en: "Right for a test that is about something else, but it means the permission flow itself is untested — so keep one test that exercises the denial path with `UiAutomator`, which can drive the system dialog Espresso cannot see.",
      hi: "जो test किसी और चीज के बारे में है उसके लिए सही, पर इसका मतलब है कि permission वाला बहाव खुद बिना जाँचे रह जाता है — तो एक test ऐसा रखिए जो `UiAutomator` से मना वाला रास्ता चलाए, क्योंकि वह उस system के dialog को चला सकता है जो Espresso को दिखता ही नहीं।",
      "hi-en": "Jo test kisi aur cheez ke baare mein hai uske liye sahi, par iska matlab hai ki permission wala bahav khud bina jaanche reh jata hai — to ek test aisa rakhiye jo `UiAutomator` se mana wala raasta chalaye, kyunki wo us system ke dialog ko chala sakta hai jo Espresso ko dikhta hi nahi.",
    },
    related: ["onView", "Rule"],
  },

  MockWebServer: {
    term: "MockWebServer",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import okhttp3.mockwebserver.MockWebServer",
    does: {
      en: "A real HTTP server for tests, serving responses you enqueue.",
      hi: "Tests के लिए असली HTTP server, जो आपकी कतार में लगाई responses परोसता है।",
      "hi-en": "Tests ke liye asli HTTP server, jo aapki line mein lagai responses parosta hai.",
    },
    affects: {
      en: "This is what a fake API cannot replace: a fake hands back Kotlin objects that were already constructed, so deserialization — the one step where a renamed field becomes a null — never runs. Serving real JSON over a real socket makes Retrofit and the converter do their actual work. `takeRequest()` is the underrated half: it returns what your code actually sent, so you can assert the auth header was attached. Spend most of the effort on failures — `503`, a malformed body, `SocketPolicy.NO_RESPONSE` — since those branches are the ones nobody exercises by hand.",
      hi: "यही वह चीज है जिसकी जगह नकली API नहीं ले सकती: नकली चीज पहले से बनी Kotlin की objects लौटाती है, तो deserialization — वह इकलौता कदम जहाँ नाम बदली field null बन जाती है — कभी चलता ही नहीं। असली socket पर असली JSON परोसने से Retrofit और converter अपना सच्चा काम करते हैं। `takeRequest()` कम आँका जाने वाला आधा हिस्सा है: वह लौटाता है कि आपके code ने सच में भेजा क्या, तो आप दावा कर सकते हैं कि auth का header लगा था। मेहनत ज्यादातर नाकामियों पर लगाइए — `503`, बिगड़ी body, `SocketPolicy.NO_RESPONSE` — क्योंकि वही शाखाएँ हैं जिन्हें कोई हाथ से नहीं चलाता।",
      "hi-en": "Yahi wo cheez hai jiski jagah nakli API nahi le sakti: nakli cheez pehle se bani Kotlin ki objects lautati hai, to deserialization — wo iklauta kadam jahan naam badli field null ban jati hai — kabhi chalta hi nahi. Asli socket par asli JSON parosne se Retrofit aur converter apna sachcha kaam karte hain. `takeRequest()` kam aanka jane wala aadha hissa hai: wo lautata hai ki aapke code ne sach mein bheja kya, to aap dawa kar sakte ho ki auth ka header laga tha. Mehnat zyadatar nakamiyon par lagaiye — `503`, bigdi body, `SocketPolicy.NO_RESPONSE` — kyunki wahi shakhayein hain jinhe koi haath se nahi chalata.",
    },
    related: ["Retrofit", "IdlingResource", "After"],
  },

  inMemoryDatabaseBuilder: {
    term: "inMemoryDatabaseBuilder",
    kind: { en: "Function", hi: "Function", "hi-en": "Function" },
    source: "jetpack",
    importLine: "import androidx.room.Room",
    does: {
      en: "Builds a real Room database that never touches disk and disappears when closed.",
      hi: "असली Room database बनाता है जो disk को छूता ही नहीं और बंद होते ही गायब हो जाता है।",
      "hi-en": "Asli Room database banata hai jo disk ko chhoota hi nahi aur band hote hi gayab ho jata hai.",
    },
    affects: {
      en: "Real SQLite is the point: it proves your `ORDER BY` is spelled correctly, the column exists, your `@TypeConverter` round-trips and a `@Relation` query assembles children — none of which a fake DAO can know. Close it in `@After`, or the handle survives and a later test finds rows it never inserted. Avoid `allowMainThreadQueries()`: it hides the threading rule the app still has to obey.",
      hi: "असली SQLite ही पूरी बात है: वह साबित करता है कि आपका `ORDER BY` सही लिखा है, वह column है, आपका `@TypeConverter` आगे-पीछे ठीक चलता है और `@Relation` वाली query बच्चे जोड़ती है — इनमें से कुछ भी नकली DAO जान ही नहीं सकता। उसे `@After` में बंद कीजिए, वरना वह हाथ बचा रहता है और आगे कोई test ऐसी rows पा लेता है जो उसने कभी डाली नहीं। `allowMainThreadQueries()` से बचिए: वह threading वाला नियम छिपा देता है जो ऐप को फिर भी मानना है।",
      "hi-en": "Asli SQLite hi poori baat hai: wo sabit karta hai ki aapka `ORDER BY` sahi likha hai, wo column hai, aapka `@TypeConverter` aage-peeche theek chalta hai aur `@Relation` wali query bachche jodti hai — inmein se kuch bhi nakli DAO jaan hi nahi sakta. Use `@After` mein band kijiye, warna wo haath bacha rehta hai aur aage koi test aisi rows pa leta hai jo usne kabhi daali nahi. `allowMainThreadQueries()` se bachiye: wo threading wala niyam chhupa deta hai jo app ko phir bhi manna hai.",
    },
    related: ["MigrationTestHelper", "Dao", "After"],
  },

  MigrationTestHelper: {
    term: "MigrationTestHelper",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.room.testing.MigrationTestHelper",
    does: {
      en: "Creates a database at an old schema version and runs your migrations against it.",
      hi: "Database को schema की पुरानी version पर बनाता है और उस पर आपके migrations चलाता है।",
      "hi-en": "Database ko schema ki purani version par banata hai aur us par aapke migrations chalata hai.",
    },
    affects: {
      en: "This is the highest-value test in an Android app, because a migration is the only place where a mistake destroys data the user cannot recover. It needs `exportSchema = true` and the committed `app/schemas/` JSON, which `runMigrationsAndValidate` compares against. Assert on the **data**, not just that the migration ran — one that completes and empties a table passes a test that only checks for no exception.",
      hi: "यह Android ऐप का सबसे कीमती test है, क्योंकि migration ही इकलौती जगह है जहाँ गलती ऐसा data मिटा देती है जो user को वापस नहीं मिलेगा। इसे `exportSchema = true` और commit की गई `app/schemas/` वाली JSON चाहिए, जिससे `runMigrationsAndValidate` मिलाता है। **Data** पर दावा कीजिए, सिर्फ इस पर नहीं कि migration चला — जो पूरा होकर table खाली कर देता है वह उस test को पास कर जाता है जो सिर्फ exception न आने को देखता है।",
      "hi-en": "Ye Android app ka sabse keemti test hai, kyunki migration hi iklauti jagah hai jahan galti aisa data mita deti hai jo user ko wapas nahi milega. Ise `exportSchema = true` aur commit ki gayi `app/schemas/` wali JSON chahiye, jisse `runMigrationsAndValidate` milata hai. **Data** par dawa kijiye, sirf is par nahi ki migration chala — jo poora hokar table khaali kar deta hai wo us test ko pass kar jata hai jo sirf exception na aane ko dekhta hai.",
    },
    related: ["Migration", "inMemoryDatabaseBuilder", "Database"],
  },
};
