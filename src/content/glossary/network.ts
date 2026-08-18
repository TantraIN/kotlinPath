import type { Glossary } from "./types";

/**
 * The network stack: Retrofit's annotations, OkHttp's extension points, and the
 * serialization annotations that decide what a response becomes.
 *
 * Retrofit's `@Path` is deliberately absent. The glossary matches bare tokens,
 * so an entry for it would also claim Compose's `Path` in the drawing lessons —
 * and a confidently wrong tooltip is worse than none. The retrofit lesson covers
 * the `@Path` versus `@Query` distinction in prose instead.
 */
export const NETWORK_GLOSSARY: Glossary = {
  Retrofit: {
    term: "Retrofit",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import retrofit2.Retrofit",
    does: {
      en: "Turns an annotated interface into a working HTTP client.",
      hi: "Annotations वाले किसी interface को चलता-फिरता HTTP client बना देता है।",
      "hi-en": "Annotations wale kisi interface ko chalta-phirta HTTP client bana deta hai.",
    },
    affects: {
      en: "Build one for the app and share it: each instance otherwise builds its own `OkHttpClient`, so every call pays a fresh handshake and the cache is always empty. Its base URL must end in `/`, and a leading `/` on an endpoint path replaces the base path rather than extending it.",
      hi: "ऐप भर के लिए एक बनाइए और साझा कीजिए: वरना हर instance अपना `OkHttpClient` बनाता है, तो हर call नया handshake भरती है और cache हमेशा खाली रहता है। इसके base URL का अंत `/` पर होना चाहिए, और endpoint के path के आगे लगा `/` उसे बढ़ाने के बजाय पूरा base path बदल देता है।",
      "hi-en": "App bhar ke liye ek banaiye aur share kijiye: warna har instance apna `OkHttpClient` banata hai, to har call naya handshake bharti hai aur cache hamesha khaali rehta hai. Iske base URL ka ant `/` par hona chahiye, aur endpoint ke path ke aage laga `/` use badhane ke bajaye poora base path badal deta hai.",
    },
    docs: "https://square.github.io/retrofit/",
    related: ["OkHttpClient", "GET", "Response"],
  },

  GET: {
    term: "@GET",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.GET",
    does: {
      en: "Declares that a function is an HTTP GET to the given relative path.",
      hi: "बताता है कि यह function दिए गए path पर एक HTTP GET है।",
      "hi-en": "Batata hai ki ye function diye gaye path par ek HTTP GET hai.",
    },
    values: {
      en: "`@POST`, `@PUT`, `@PATCH`, `@DELETE` and `@HEAD` are the same shape for the other methods.",
      hi: "बाकी methods के लिए वही शक्ल: `@POST`, `@PUT`, `@PATCH`, `@DELETE` और `@HEAD`।",
      "hi-en": "Baaki methods ke liye wahi shakal: `@POST`, `@PUT`, `@PATCH`, `@DELETE` aur `@HEAD`.",
    },
    affects: {
      en: "The path is relative, so it appends to the base URL — unless it starts with `/`, which replaces the base path and produces a `404` against a healthy server. `GET` is safe and idempotent, which is what makes it free to retry.",
      hi: "Path सापेक्ष है, तो वह base URL के आगे जुड़ता है — जब तक वह `/` से शुरू न हो, जो base path की जगह ले लेता है और बिलकुल ठीक चलते server से `404` देता है। `GET` safe और idempotent है, और इसीलिए उसे दोबारा भेजना मुफ्त है।",
      "hi-en": "Path saapeksh hai, to wo base URL ke aage judta hai — jab tak wo `/` se shuru na ho, jo base path ki jagah le leta hai aur bilkul theek chalte server se `404` deta hai. `GET` safe aur idempotent hai, aur isiliye use dobara bhejna muft hai.",
    },
    related: ["Retrofit", "Query", "Body"],
  },

  POST: {
    term: "@POST",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.POST",
    does: {
      en: "Declares an HTTP POST, usually carrying a `@Body`.",
      hi: "एक HTTP POST बताता है, जो आमतौर पर कोई `@Body` लेकर चलता है।",
      "hi-en": "Ek HTTP POST batata hai, jo aam taur par koi `@Body` lekar chalta hai.",
    },
    affects: {
      en: "`POST` is neither safe nor idempotent, so a timeout does not tell you whether the server acted and a blind retry can do the work twice. Send an idempotency key generated once per user action, not once per attempt.",
      hi: "`POST` न safe है न idempotent, तो timeout यह नहीं बताता कि server ने काम किया या नहीं, और आँख मूँदकर दोबारा भेजने पर काम दो बार हो सकता है। एक idempotency key भेजिए, जो user के हर काम पर एक बार बने, हर कोशिश पर नहीं।",
      "hi-en": "`POST` na safe hai na idempotent, to timeout ye nahi batata ki server ne kaam kiya ya nahi, aur aankh moondkar dobara bhejne par kaam do baar ho sakta hai. Ek idempotency key bhejiye, jo user ke har kaam par ek baar bane, har koshish par nahi.",
    },
    related: ["GET", "Body", "PATCH"],
  },

  PATCH: {
    term: "@PATCH",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.PATCH",
    does: {
      en: "Declares a partial update — only the fields you send are changed.",
      hi: "थोड़ा-सा बदलाव बताता है — सिर्फ वे fields बदलते हैं जो आप भेजते हैं।",
      "hi-en": "Thoda-sa badlaav batata hai — sirf wo fields badalte hain jo aap bhejte ho.",
    },
    affects: {
      en: "The serializer decides what a patch means: with `explicitNulls = true` a null property is sent as `null`, which a server reads as *clear this field*, so every patch wipes everything you did not set. Setting it to `false` omits nulls instead.",
      hi: "Patch का मतलब serializer तय करता है: `explicitNulls = true` पर null property `null` बनकर जाती है, जिसे server *यह field खाली कर दो* पढ़ता है, तो हर patch वह सब मिटा देता है जो आपने भेजा ही नहीं। उसे `false` करने पर nulls छूट जाते हैं।",
      "hi-en": "Patch ka matlab serializer tay karta hai: `explicitNulls = true` par null property `null` bankar jati hai, jise server *ye field khaali kar do* padhta hai, to har patch wo sab mita deta hai jo aapne bheja hi nahi. Use `false` karne par nulls chhoot jate hain.",
    },
    related: ["POST", "Body", "Serializable"],
  },

  DELETE: {
    term: "@DELETE",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.DELETE",
    does: {
      en: "Declares an HTTP DELETE for a resource.",
      hi: "किसी चीज के लिए HTTP DELETE बताता है।",
      "hi-en": "Kisi cheez ke liye HTTP DELETE batata hai.",
    },
    affects: {
      en: "It is idempotent — deleting twice leaves the same state — so a retry is safe. A successful delete often returns `204` with no body, so declare it as `Response<Unit>` rather than a type the converter would try to parse.",
      hi: "यह idempotent है — दो बार मिटाने पर वही हालत बचती है — तो दोबारा भेजना सुरक्षित है। सफल delete अक्सर बिना body के `204` लौटाता है, तो उसे ऐसे type के बजाय `Response<Unit>` लिखिए जिसे converter parse करने चलेगा।",
      "hi-en": "Ye idempotent hai — do baar mitane par wahi haalat bachti hai — to dobara bhejna safe hai. Safal delete aksar bina body ke `204` lautata hai, to use aise type ke bajaye `Response<Unit>` likhiye jise converter parse karne chalega.",
    },
    related: ["GET", "Response"],
  },

  Query: {
    term: "@Query",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.Query  //  or androidx.room.Query",
    does: {
      en: "Two unrelated annotations share this name. Retrofit's puts a parameter into the URL's query string; Room's carries the SQL for a DAO function.",
      hi: "इस नाम की दो अलग-अलग annotations हैं। Retrofit वाली किसी parameter को URL की query string में रखती है; Room वाली किसी DAO function का SQL ढोती है।",
      "hi-en": "Is naam ki do alag-alag annotations hain. Retrofit wali kisi parameter ko URL ki query string mein rakhti hai; Room wali kisi DAO function ka SQL dhoti hai.",
    },
    affects: {
      en: "**Retrofit's** drops a `null` value from the URL entirely rather than sending it empty, so a nullable parameter is how you express an optional filter with no string building. **Room's** is checked against the schema at build time, so a misspelled table or column is a compile error naming the query rather than a crash when a user opens the screen — and a `Flow` return type there re-emits on every change to the tables the query read.",
      hi: "**Retrofit वाली** `null` value को खाली भेजने के बजाय URL से पूरी तरह हटा देती है, तो nullable parameter ही बिना कोई string जोड़े वैकल्पिक filter कहने का तरीका है। **Room वाली** build वक्त schema के सामने जाँची जाती है, तो गलत लिखा table या column उस query का नाम लेती compile error है, न कि किसी user के screen खोलने पर आया crash — और वहाँ `Flow` वाला return type उन tables में हर बदलाव पर दोबारा emit करता है जिन्हें query ने पढ़ा।",
      "hi-en": "**Retrofit wali** `null` value ko khaali bhejne ke bajaye URL se poori tarah hata deti hai, to nullable parameter hi bina koi string jode optional filter kehne ka tarika hai. **Room wali** build waqt schema ke saamne check ki jati hai, to galat likha table ya column us query ka naam leti compile error hai, na ki kisi user ke screen kholne par aaya crash — aur wahan `Flow` wala return type un tables mein har badlaav par dobara emit karta hai jinhe query ne padha.",
    },
    related: ["GET", "QueryMap", "Dao"],
  },

  QueryMap: {
    term: "@QueryMap",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.QueryMap",
    does: {
      en: "Puts a whole map of parameters into the query string at once.",
      hi: "Parameters का पूरा नक्शा एक साथ query string में रख देता है।",
      "hi-en": "Parameters ka poora naksha ek saath query string mein rakh deta hai.",
    },
    affects: {
      en: "For filters whose set varies at run time. Fixed parameters are better as named `@Query` arguments, because those are visible in the signature and checked by the compiler.",
      hi: "उन filters के लिए जिनका समूह चलते वक्त बदलता है। तय parameters नाम वाले `@Query` arguments की तरह बेहतर हैं, क्योंकि वे signature में दिखते हैं और compiler उन्हें जाँचता है।",
      "hi-en": "Un filters ke liye jinka samooh chalte waqt badalta hai. Tay parameters naam wale `@Query` arguments ki tarah behtar hain, kyunki wo signature mein dikhte hain aur compiler unhe check karta hai.",
    },
    related: ["Query", "GET"],
  },

  Body: {
    term: "@Body",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.Body",
    does: {
      en: "Serialises an object into the request body using the converter factory.",
      hi: "Converter factory से किसी object को request की body में बदल देता है।",
      "hi-en": "Converter factory se kisi object ko request ki body mein badal deta hai.",
    },
    affects: {
      en: "The converter decides the wire format, so what actually gets sent depends on your `Json` or Moshi configuration rather than on this annotation. Send a request-shaped DTO rather than a domain model, so a change to your own types is not silently a change to the API contract.",
      hi: "तार वाली शक्ल converter तय करता है, तो सच में जाता क्या है यह इस annotation के बजाय आपके `Json` या Moshi की settings पर टिका है। Domain के model के बजाय request की शक्ल वाला DTO भेजिए, ताकि आपके अपने types का बदलाव चुपचाप API के करार का बदलाव न बन जाए।",
      "hi-en": "Taar wali shakal converter tay karta hai, to sach mein jata kya hai ye is annotation ke bajaye aapke `Json` ya Moshi ki settings par tika hai. Domain ke model ke bajaye request ki shakal wala DTO bhejiye, taki aapke apne types ka badlaav chupchap API ke karaar ka badlaav na ban jaye.",
    },
    related: ["POST", "PATCH", "Serializable"],
  },

  Header: {
    term: "@Header",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import retrofit2.http.Header",
    does: {
      en: "Sets one request header from a function parameter.",
      hi: "Function के किसी parameter से request का एक header सेट करता है।",
      "hi-en": "Function ke kisi parameter se request ka ek header set karta hai.",
    },
    affects: {
      en: "Right for a header that genuinely varies per call. A header that is on every request — an auth token above all — belongs in an OkHttp interceptor instead, or every call site ends up holding a token it has no business knowing about.",
      hi: "उस header के लिए सही जो सच में हर call पर बदलता है। जो header हर request पर है — सबसे बढ़कर auth का token — वह इसके बजाय किसी OkHttp interceptor की जगह है, वरना हर बुलाने वाली जगह ऐसा token पकड़े बैठी रहती है जिससे उसका कोई लेना-देना नहीं।",
      "hi-en": "Us header ke liye sahi jo sach mein har call par badalta hai. Jo header har request par hai — sabse badhkar auth ka token — wo iske bajaye kisi OkHttp interceptor ki jagah hai, warna har bulane wali jagah aisa token pakde baithi rehti hai jisse uska koi lena-dena nahi.",
    },
    related: ["Interceptor", "GET"],
  },

  Response: {
    term: "Response",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import retrofit2.Response",
    does: {
      en: "Wraps a response so the status code, headers and a nullable body are all available.",
      hi: "Response को इस तरह लपेटता है कि status code, headers और nullable body तीनों हाथ में हों।",
      "hi-en": "Response ko is tarah lapetta hai ki status code, headers aur nullable body teenon haath mein hon.",
    },
    affects: {
      en: "Declaring `Response<T>` instead of the bare type turns a non-2xx from an exception into a value, which is what you want when `404` means \"no results\" or you need an `ETag`. `body()` is nullable because a `204` or an error response has none, so `body()!!` turns a handled status into a crash. OkHttp has its own `Response` class — the one an interceptor sees — which is a different type with the same name.",
      hi: "सादे type के बजाय `Response<T>` लिखना गैर-2xx को exception से value बना देता है, जो तब चाहिए जब `404` का मतलब \"कुछ नहीं मिला\" हो या आपको कोई `ETag` चाहिए। `body()` nullable इसलिए है कि `204` या error वाले response में body होती ही नहीं, तो `body()!!` सँभाले हुए status को crash बना देता है। OkHttp की अपनी `Response` class है — वही जो interceptor को दिखती है — जो उसी नाम का अलग type है।",
      "hi-en": "Saade type ke bajaye `Response<T>` likhna gair-2xx ko exception se value bana deta hai, jo tab chahiye jab `404` ka matlab \"kuch nahi mila\" ho ya aapko koi `ETag` chahiye. `body()` nullable isliye hai ki `204` ya error wale response mein body hoti hi nahi, to `body()!!` sambhale hue status ko crash bana deta hai. OkHttp ki apni `Response` class hai — wahi jo interceptor ko dikhti hai — jo usi naam ka alag type hai.",
    },
    related: ["Retrofit", "HttpException", "Interceptor"],
  },

  HttpException: {
    term: "HttpException",
    kind: { en: "Exception", hi: "Exception", "hi-en": "Exception" },
    source: "library",
    importLine: "import retrofit2.HttpException",
    does: {
      en: "Thrown by Retrofit when a call returns a non-2xx status and the return type is not `Response`.",
      hi: "जब कोई call गैर-2xx status लौटाए और return type `Response` न हो, तब Retrofit इसे फेंकता है।",
      "hi-en": "Jab koi call gair-2xx status lautaye aur return type `Response` na ho, tab Retrofit ise phenkta hai.",
    },
    affects: {
      en: "This is the type that must not escape the data layer. Catch it in the repository, map `code()` onto your own error type, and the `ViewModel` decides what \"offline\" looks like without knowing Retrofit exists. Catch specific `IOException` subclasses before `IOException` itself, or every timeout collapses into \"offline\".",
      hi: "यही वह type है जिसे data परत से बाहर नहीं जाना चाहिए। उसे repository में पकड़िए, `code()` को अपनी error वाली type पर बिठाइए, और `ViewModel` तय करेगा कि \"offline\" कैसा दिखेगा, बिना यह जाने कि Retrofit है। `IOException` से पहले उसकी खास उपशाखाएँ पकड़िए, वरना हर timeout सिमटकर \"offline\" बन जाता है।",
      "hi-en": "Yahi wo type hai jise data parat se bahar nahi jana chahiye. Use repository mein pakadiye, `code()` ko apni error wali type par bithaiye, aur `ViewModel` tay karega ki \"offline\" kaisa dikhega, bina ye jane ki Retrofit hai. `IOException` se pehle uski khaas upshakhayein pakadiye, warna har timeout simatkar \"offline\" ban jata hai.",
    },
    related: ["Response", "Result", "runCatching"],
  },

  OkHttpClient: {
    term: "OkHttpClient",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import okhttp3.OkHttpClient",
    does: {
      en: "The client that actually sends requests, and the owner of the connection pool, thread pool and cache.",
      hi: "वह client जो सच में requests भेजता है, और connection pool, thread pool तथा cache का मालिक है।",
      "hi-en": "Wo client jo sach mein requests bhejta hai, aur connection pool, thread pool tatha cache ka maalik hai.",
    },
    affects: {
      en: "Because it owns those pools, one per app is not a style rule — a second instance means no connection is reused and the cache is empty. When you need a variation, derive it with `newBuilder()` so the pools are shared. Its `callTimeout` is the only end-to-end bound, and it is off by default.",
      hi: "वे pools इसी के हैं, इसलिए ऐप भर में एक रखना सजावट का नियम नहीं है — दूसरा instance यानी कोई connection दोबारा नहीं लगता और cache खाली रहता है। जब कोई अलग रूप चाहिए, उसे `newBuilder()` से निकालिए ताकि pools साझा रहें। इसका `callTimeout` सिरे से सिरे तक की इकलौती हद है, और वह default से बंद है।",
      "hi-en": "Wo pools isi ke hain, isliye app bhar mein ek rakhna sajawat ka niyam nahi hai — doosra instance yani koi connection dobara nahi lagta aur cache khaali rehta hai. Jab koi alag roop chahiye, use `newBuilder()` se nikaliye taki pools share rahein. Iska `callTimeout` sire se sire tak ki iklauti had hai, aur wo default se band hai.",
    },
    docs: "https://square.github.io/okhttp/",
    related: ["Retrofit", "Interceptor", "Cache"],
  },

  Interceptor: {
    term: "Interceptor",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import okhttp3.Interceptor",
    does: {
      en: "Sees the request on its way down and the response on its way back, with `chain.proceed()` in between.",
      hi: "Request को नीचे जाते और response को वापस ऊपर आते देखता है, और बीच में `chain.proceed()` होता है।",
      "hi-en": "Request ko neeche jate aur response ko wapas upar aate dekhta hai, aur beech mein `chain.proceed()` hota hai.",
    },
    values: {
      en: "`addInterceptor` runs once per logical call and even on a cache hit; `addNetworkInterceptor` runs once per wire request, sees redirects and retries, and is skipped when the cache answers.",
      hi: "`addInterceptor` हर तार्किक call पर एक बार चलता है, cache से जवाब मिलने पर भी; `addNetworkInterceptor` तार पर गई हर request पर चलता है, redirects और retries देखता है, और cache के जवाब देने पर छूट जाता है।",
      "hi-en": "`addInterceptor` har tarkik call par ek baar chalta hai, cache se jawab milne par bhi; `addNetworkInterceptor` taar par gayi har request par chalta hai, redirects aur retries dekhta hai, aur cache ke jawab dene par chhoot jata hai.",
    },
    affects: {
      en: "Auth belongs in an application interceptor, because you want it once per logical call whether or not a redirect happens. Refreshing a token here is the common mistake — that is what `Authenticator` is for, with a loop guard an interceptor does not have.",
      hi: "Auth application interceptor की जगह है, क्योंकि आप उसे हर तार्किक call पर एक बार चाहते हैं, redirect हो या न हो। यहाँ token refresh करना आम गलती है — वह `Authenticator` का काम है, जिसके पास घूमते रहने से बचाव है और interceptor के पास नहीं।",
      "hi-en": "Auth application interceptor ki jagah hai, kyunki aap use har tarkik call par ek baar chahte ho, redirect ho ya na ho. Yahan token refresh karna aam galti hai — wo `Authenticator` ka kaam hai, jiske paas ghoomte rehne se bachav hai aur interceptor ke paas nahi.",
    },
    related: ["OkHttpClient", "Authenticator", "Header"],
  },

  Authenticator: {
    term: "Authenticator",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import okhttp3.Authenticator",
    does: {
      en: "Called by OkHttp on a `401`, and returns the request to retry — or `null` to give up.",
      hi: "`401` पर OkHttp इसे बुलाता है, और यह दोबारा भेजी जाने वाली request लौटाता है — या हार मानने के लिए `null`।",
      "hi-en": "`401` par OkHttp ise bulata hai, aur ye dobara bheji jane wali request lautata hai — ya haar manne ke liye `null`.",
    },
    affects: {
      en: "The `priorResponse` chain is how it refuses to loop when the refreshed token is also rejected — without that check, a revoked account produces an endless refresh storm. It is not called once per screen: five parallel calls all get a `401` and all reach it, so the refresh must be serialised and, inside the lock, must re-check whether another thread already refreshed.",
      hi: "`priorResponse` की कड़ी से ही यह घूमते रहने से इनकार करता है जब refresh किया हुआ token भी नामंजूर हो — उस जाँच के बिना, रद्द हो चुका खाता कभी न रुकने वाला refresh का तूफान बना देता है। यह हर screen पर एक बार नहीं बुलाया जाता: साथ-साथ गई पाँच calls को `401` मिलता है और पाँचों यहाँ पहुँचती हैं, तो refresh को एक-एक करके चलाना पड़ता है और ताले के अंदर यह दोबारा देखना पड़ता है कि किसी और thread ने पहले ही refresh तो नहीं कर लिया।",
      "hi-en": "`priorResponse` ki kadi se hi ye ghoomte rehne se inkaar karta hai jab refresh kiya hua token bhi namanzoor ho — us check ke bina, radd ho chuka account kabhi na rukne wala refresh ka toofan bana deta hai. Ye har screen par ek baar nahi bulaya jata: saath-saath gayi paanch calls ko `401` milta hai aur paanchon yahan pahunchti hain, to refresh ko ek-ek karke chalana padta hai aur taale ke andar ye dobara dekhna padta hai ki kisi aur thread ne pehle hi refresh to nahi kar liya.",
    },
    related: ["Interceptor", "OkHttpClient"],
  },

  Cache: {
    term: "Cache",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "library",
    importLine: "import okhttp3.Cache",
    does: {
      en: "An on-disk HTTP cache for an `OkHttpClient`, given a directory and a size.",
      hi: "किसी `OkHttpClient` के लिए disk पर रखा HTTP cache, जिसे एक directory और एक नाप दिया जाता है।",
      "hi-en": "Kisi `OkHttpClient` ke liye disk par rakha HTTP cache, jise ek directory aur ek naap diya jata hai.",
    },
    affects: {
      en: "This is what makes `ETag` and `304` actually run — OkHttp adds `If-None-Match` itself and turns a `304` into the stored body before your code sees it. It obeys the server, so `Cache-Control: no-store` overrides any client setting. It is not offline support: it is evictable and keyed by URL, so anything that must survive belongs in a database.",
      hi: "यही `ETag` और `304` को सच में चलाता है — OkHttp `If-None-Match` खुद जोड़ता है और `304` को आपके code तक पहुँचने से पहले रखी हुई body बना देता है। यह server की मानता है, तो `Cache-Control: no-store` client की किसी भी setting को पलट देता है। यह offline वाली सुविधा नहीं है: यह हटाया जा सकता है और URL से बँधा है, तो जो चीज बचनी ही चाहिए वह database की है।",
      "hi-en": "Yahi `ETag` aur `304` ko sach mein chalata hai — OkHttp `If-None-Match` khud jodta hai aur `304` ko aapke code tak pahunchne se pehle rakhi hui body bana deta hai. Ye server ki manta hai, to `Cache-Control: no-store` client ki kisi bhi setting ko palat deta hai. Ye offline wali suvidha nahi hai: ye hataya ja sakta hai aur URL se bandha hai, to jo cheez bachni hi chahiye wo database ki hai.",
    },
    related: ["OkHttpClient", "Interceptor"],
  },

  SerialName: {
    term: "@SerialName",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import kotlinx.serialization.SerialName",
    does: {
      en: "Gives a property a different name on the wire from the one in Kotlin.",
      hi: "किसी property को तार पर Kotlin वाले नाम से अलग नाम देता है।",
      "hi-en": "Kisi property ko taar par Kotlin wale naam se alag naam deta hai.",
    },
    affects: {
      en: "It lets the DTO read like Kotlin while matching whatever the server sends, which is what keeps a server's naming out of your domain model. For a server that is snake_case throughout, `namingStrategy = JsonNamingStrategy.SnakeCase` does the whole job once instead.",
      hi: "इससे DTO Kotlin जैसा पढ़ा जाता है और फिर भी server जो भेजे उससे मेल खाता है, और यही server के नामों को आपके domain के model से बाहर रखता है। जो server पूरा snake_case है, उसके लिए `namingStrategy = JsonNamingStrategy.SnakeCase` यह काम एक ही बार में कर देता है।",
      "hi-en": "Isse DTO Kotlin jaisa padha jata hai aur phir bhi server jo bheje usse mel khata hai, aur yahi server ke naamon ko aapke domain ke model se bahar rakhta hai. Jo server poora snake_case hai, uske liye `namingStrategy = JsonNamingStrategy.SnakeCase` ye kaam ek hi baar mein kar deta hai.",
    },
    related: ["Serializable", "Body"],
  },

  JsonClassDiscriminator: {
    term: "@JsonClassDiscriminator",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "library",
    importLine: "import kotlinx.serialization.json.JsonClassDiscriminator",
    does: {
      en: "Names the JSON field that says which subclass of a sealed type a response is.",
      hi: "उस JSON field का नाम बताता है जो कहती है कि यह response किसी sealed type की कौन सी उपशाखा है।",
      "hi-en": "Us JSON field ka naam batata hai jo kehti hai ki ye response kisi sealed type ki kaunsi upshakha hai.",
    },
    affects: {
      en: "It is what makes a response whose shape varies by type parseable into a sealed hierarchy instead of one class full of nullables. The flat version compiles and can represent combinations the server can never send; the sealed one cannot, and `when` over it is exhaustive.",
      hi: "इसी से वह response, जिसकी शक्ल type के हिसाब से बदलती है, nullables से भरी एक class के बजाय sealed पेड़ में पढ़ा जा सकता है। चपटा रूप compile होता है और ऐसे जोड़ बना सकता है जो server कभी भेज ही नहीं सकता; sealed वाला नहीं बना सकता, और उस पर `when` पूरा होता है।",
      "hi-en": "Isi se wo response, jiski shakal type ke hisab se badalti hai, nullables se bhari ek class ke bajaye sealed ped mein padha ja sakta hai. Chapta roop compile hota hai aur aise jod bana sakta hai jo server kabhi bhej hi nahi sakta; sealed wala nahi bana sakta, aur us par `when` poora hota hai.",
    },
    related: ["Serializable", "sealed", "when"],
  },
};
