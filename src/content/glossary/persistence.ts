import type { Glossary } from "./types";

/** Room, DataStore, platform storage, Paging and Coil — everything that keeps data on the device. */
export const PERSISTENCE_GLOSSARY: Glossary = {
  Entity: {
    term: "@Entity",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Entity",
    does: {
      en: "Declares that a data class is a table; its properties are the columns.",
      hi: "बताता है कि कोई data class एक table है; उसकी properties ही columns हैं।",
      "hi-en": "Batata hai ki koi data class ek table hai; uski properties hi columns hain.",
    },
    values: {
      en: "`tableName` renames the table, `indices` declares indexes, `primaryKeys` handles a composite key, `foreignKeys` declares references.",
      hi: "`tableName` table का नाम बदलता है, `indices` indexes बताता है, `primaryKeys` कई columns वाली key सँभालता है, `foreignKeys` रिश्ते बताता है।",
      "hi-en": "`tableName` table ka naam badalta hai, `indices` indexes batata hai, `primaryKeys` kai columns wali key sambhalta hai, `foreignKeys` rishte batata hai.",
    },
    affects: {
      en: "The class *is* the schema, so changing a property is a schema change and needs a version bump and a migration. That is also why an entity should stay in the data layer — letting one reach a `ViewModel` makes a schema change a UI change.",
      hi: "Class ही schema है, तो किसी property को बदलना schema का बदलाव है और उसे version बढ़ाना तथा migration चाहिए। इसीलिए entity को data परत में ही रहना चाहिए — उसे `ViewModel` तक पहुँचने देना schema के बदलाव को UI का बदलाव बना देता है।",
      "hi-en": "Class hi schema hai, to kisi property ko badalna schema ka badlaav hai aur use version badhana tatha migration chahiye. Isiliye entity ko data parat mein hi rehna chahiye — use `ViewModel` tak pahunchne dena schema ke badlaav ko UI ka badlaav bana deta hai.",
    },
    docs: "https://developer.android.com/training/data-storage/room",
    related: ["Dao", "PrimaryKey", "Migration"],
  },

  Dao: {
    term: "@Dao",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Dao",
    does: {
      en: "Marks an interface whose functions are database queries.",
      hi: "ऐसे interface पर लगता है जिसके functions database की queries हैं।",
      "hi-en": "Aise interface par lagta hai jiske functions database ki queries hain.",
    },
    affects: {
      en: "Room generates the implementation and checks every query against the schema at build time, so a misspelled column is a compile error naming the query rather than a crash when a user opens the screen. The generated `_Impl` class in `build/generated` is the fastest way to understand a confusing Room error.",
      hi: "Room उसका implementation बनाता है और हर query को build वक्त schema के सामने जाँचता है, तो गलत लिखा column उस query का नाम लेती compile error है, न कि किसी user के screen खोलने पर आया crash। `build/generated` में बनी `_Impl` class किसी उलझाने वाली Room error को समझने का सबसे तेज रास्ता है।",
      "hi-en": "Room uska implementation banata hai aur har query ko build waqt schema ke saamne check karta hai, to galat likha column us query ka naam leti compile error hai, na ki kisi user ke screen kholne par aaya crash. `build/generated` mein bani `_Impl` class kisi uljhane wali Room error ko samajhne ka sabse tez raasta hai.",
    },
    related: ["Entity", "Database", "Transaction"],
  },

  Database: {
    term: "@Database",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Database",
    does: {
      en: "Lists the entities and the schema version, and exposes the DAOs.",
      hi: "Entities और schema की version गिनाता है, और DAOs तक पहुँच देता है।",
      "hi-en": "Entities aur schema ki version ginata hai, aur DAOs tak pahunch deta hai.",
    },
    values: {
      en: "`entities`, `version`, `exportSchema`, and `autoMigrations` for changes Room can work out itself.",
      hi: "`entities`, `version`, `exportSchema`, और जिन बदलावों को Room खुद निकाल सकता है उनके लिए `autoMigrations`।",
      "hi-en": "`entities`, `version`, `exportSchema`, aur jin badlaavon ko Room khud nikal sakta hai unke liye `autoMigrations`.",
    },
    affects: {
      en: "Build one instance for the app with `applicationContext` — an `Activity` context leaks that activity for as long as the database lives, and two open handles on one SQLite file invite locking errors under concurrency. Keep `exportSchema = true` and commit `app/schemas/`, because that JSON is what makes migrations testable.",
      hi: "ऐप भर के लिए एक instance `applicationContext` से बनाइए — `Activity` का context उस activity को database की पूरी उम्र तक leak करता है, और एक ही SQLite file पर दो खुले हाथ साथ-साथ चलने पर ताले वाली errors बुलाते हैं। `exportSchema = true` रखिए और `app/schemas/` commit कीजिए, क्योंकि वही JSON migrations को जाँचने लायक बनाती है।",
      "hi-en": "App bhar ke liye ek instance `applicationContext` se banaiye — `Activity` ka context us activity ko database ki poori umar tak leak karta hai, aur ek hi SQLite file par do khule haath saath-saath chalne par taale wali errors bulate hain. `exportSchema = true` rakhiye aur `app/schemas/` commit kijiye, kyunki wahi JSON migrations ko jaanchne layak banati hai.",
    },
    related: ["RoomDatabase", "Migration", "applicationContext"],
  },

  RoomDatabase: {
    term: "RoomDatabase",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.room.RoomDatabase",
    does: {
      en: "The base class your `@Database` extends, holding the open helper and the invalidation tracker.",
      hi: "वह base class जिसे आपका `@Database` extend करता है, और जो खोलने वाला helper तथा invalidation tracker रखती है।",
      "hi-en": "Wo base class jise aapka `@Database` extend karta hai, aur jo kholne wala helper tatha invalidation tracker rakhti hai.",
    },
    affects: {
      en: "The invalidation tracker is what makes `Flow` queries re-emit, and it fires per table and per write transaction — not per row. So a sync of five hundred rows written one at a time is five hundred invalidations and five hundred full re-queries; the same rows in one transaction is one.",
      hi: "उसी invalidation tracker से `Flow` वाली queries दोबारा emit करती हैं, और वह हर table तथा हर लिखने वाली transaction पर चलता है — हर row पर नहीं। तो एक-एक करके लिखी गई पाँच सौ rows की sync पाँच सौ invalidations और पाँच सौ पूरी queries हैं; वही rows एक transaction में एक हैं।",
      "hi-en": "Usi invalidation tracker se `Flow` wali queries dobara emit karti hain, aur wo har table tatha har likhne wali transaction par chalta hai — har row par nahi. To ek-ek karke likhi gayi paanch sau rows ki sync paanch sau invalidations aur paanch sau poori queries hain; wahi rows ek transaction mein ek hain.",
    },
    related: ["Database", "Transaction", "Flow"],
  },

  PrimaryKey: {
    term: "@PrimaryKey",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.PrimaryKey",
    does: {
      en: "Marks the column that identifies a row.",
      hi: "उस column पर लगता है जो किसी row की पहचान है।",
      "hi-en": "Us column par lagta hai jo kisi row ki pehchan hai.",
    },
    values: {
      en: "`autoGenerate = true` lets SQLite assign a rowid; leave it off when the id comes from the server.",
      hi: "`autoGenerate = true` से SQLite खुद rowid देता है; जब id server से आती हो तो उसे मत लगाइए।",
      "hi-en": "`autoGenerate = true` se SQLite khud rowid deta hai; jab id server se aati ho to use mat lagaiye.",
    },
    affects: {
      en: "It is what `OnConflictStrategy.REPLACE` compares on, so an entity whose key is a locally generated id will duplicate rows the server considers the same. Using the server's id as the key is what makes an upsert actually update.",
      hi: "`OnConflictStrategy.REPLACE` इसी को मिलाता है, तो जिस entity की key locally बनी id है वह उन rows की नकलें बनाएगी जिन्हें server एक ही मानता है। Server की id को key बनाना ही upsert को सच में update बनाता है।",
      "hi-en": "`OnConflictStrategy.REPLACE` isi ko milata hai, to jis entity ki key locally bani id hai wo un rows ki naklein banayegi jinhe server ek hi manta hai. Server ki id ko key banana hi upsert ko sach mein update banata hai.",
    },
    related: ["Entity", "Insert"],
  },

  ColumnInfo: {
    term: "@ColumnInfo",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.ColumnInfo",
    does: {
      en: "Gives a column a different name from the property, or declares its type affinity and index.",
      hi: "किसी column को property से अलग नाम देता है, या उसका type और index बताता है।",
      "hi-en": "Kisi column ko property se alag naam deta hai, ya uska type aur index batata hai.",
    },
    affects: {
      en: "Renaming a property without it renames the column, which is a schema change needing a migration. The annotation lets Kotlin naming and SQL naming differ without either one dictating the other.",
      hi: "इसके बिना किसी property का नाम बदलना column का नाम बदल देता है, जो schema का बदलाव है और उसे migration चाहिए। यह annotation Kotlin के नामों और SQL के नामों को अलग रहने देता है, बिना किसी एक के दूसरे पर हुक्म चलाए।",
      "hi-en": "Iske bina kisi property ka naam badalna column ka naam badal deta hai, jo schema ka badlaav hai aur use migration chahiye. Ye annotation Kotlin ke naamon aur SQL ke naamon ko alag rehne deta hai, bina kisi ek ke doosre par hukum chalaye.",
    },
    related: ["Entity", "Migration"],
  },

  Insert: {
    term: "@Insert",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Insert",
    does: {
      en: "Generates an insert from the function's parameter, with a conflict strategy.",
      hi: "Function के parameter से insert बनाता है, टकराव की एक नीति के साथ।",
      "hi-en": "Function ke parameter se insert banata hai, takrav ki ek neeti ke saath.",
    },
    values: {
      en: "`OnConflictStrategy.REPLACE`, `IGNORE` or `ABORT` decide what happens when the primary key already exists.",
      hi: "`OnConflictStrategy.REPLACE`, `IGNORE` या `ABORT` तय करते हैं कि जब वह primary key पहले से हो तब क्या होगा।",
      "hi-en": "`OnConflictStrategy.REPLACE`, `IGNORE` ya `ABORT` tay karte hain ki jab wo primary key pehle se ho tab kya hoga.",
    },
    affects: {
      en: "Taking a `List` is not a convenience — it is the batching. One call is one transaction and one invalidation, while the same rows inserted in a loop are one invalidation each, so a collected `Flow` re-queries once per row and the list rebuilds hundreds of times.",
      hi: "`List` लेना सुविधा नहीं है — वही batching है। एक call यानी एक transaction और एक invalidation, जबकि वही rows loop में डालने पर हर एक का अपना invalidation है, तो collect होता `Flow` हर row पर एक बार दोबारा query करता है और list सैकड़ों बार बनती है।",
      "hi-en": "`List` lena suvidha nahi hai — wahi batching hai. Ek call yani ek transaction aur ek invalidation, jabki wahi rows loop mein daalne par har ek ka apna invalidation hai, to collect hota `Flow` har row par ek baar dobara query karta hai aur list saikdon baar banti hai.",
    },
    related: ["Delete", "Transaction", "RoomDatabase"],
  },

  Delete: {
    term: "@Delete",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Delete",
    does: {
      en: "Deletes the rows matching the entities passed in, by primary key.",
      hi: "भेजी गई entities से मेल खाती rows को primary key के हिसाब से मिटाता है।",
      "hi-en": "Bheji gayi entities se mel khati rows ko primary key ke hisab se mitata hai.",
    },
    affects: {
      en: "It matches on the primary key alone, so the other fields of the object you pass are ignored — you can delete with a stub carrying only the id. Deleting by a condition rather than by identity wants a `@Query` with a `DELETE` statement instead.",
      hi: "यह सिर्फ primary key मिलाता है, तो जो object आप भेजते हैं उसके बाकी fields अनदेखे रह जाते हैं — आप सिर्फ id वाले ढाँचे से भी मिटा सकते हैं। पहचान के बजाय किसी शर्त से मिटाने के लिए `DELETE` वाला `@Query` चाहिए।",
      "hi-en": "Ye sirf primary key milata hai, to jo object aap bhejte ho uske baaki fields andekhe reh jate hain — aap sirf id wale dhanche se bhi mita sakte ho. Pehchan ke bajaye kisi shart se mitane ke liye `DELETE` wala `@Query` chahiye.",
    },
    related: ["Insert", "PrimaryKey"],
  },

  Transaction: {
    term: "@Transaction",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Transaction",
    does: {
      en: "Runs a DAO method's statements as one transaction — all of them, or none.",
      hi: "किसी DAO method के सारे statements एक transaction की तरह चलाता है — या तो सब, या कोई नहीं।",
      "hi-en": "Kisi DAO method ke saare statements ek transaction ki tarah chalata hai — ya to sab, ya koi nahi.",
    },
    affects: {
      en: "Two jobs, both load-bearing. It makes multi-step writes atomic, so a clear-then-insert cannot leave the database empty when the second half fails. And it is required on a `@Relation` query, because Room runs two queries there and without it another thread can write between them, assembling a parent and children from two different instants.",
      hi: "दो काम, दोनों बोझ उठाते हुए। यह कई कदमों वाली लिखाई को एक इकाई बनाता है, तो खाली करके भरने वाला काम दूसरे आधे के नाकाम होने पर database खाली नहीं छोड़ सकता। और `@Relation` वाली query पर यह जरूरी है, क्योंकि Room वहाँ दो queries चलाता है और उसके बिना कोई दूसरा thread उनके बीच लिख सकता है, जिससे parent और बच्चे दो अलग पलों से जुड़ जाते हैं।",
      "hi-en": "Do kaam, dono bojh uthate hue. Ye kai kadmon wali likhai ko ek ikai banata hai, to khaali karke bharne wala kaam doosre aadhe ke nakaam hone par database khaali nahi chhod sakta. Aur `@Relation` wali query par ye zaruri hai, kyunki Room wahan do queries chalata hai aur uske bina koi doosra thread unke beech likh sakta hai, jisse parent aur bachche do alag palon se jud jate hain.",
    },
    related: ["Relation", "Insert", "RoomDatabase"],
  },

  Relation: {
    term: "@Relation",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Relation",
    does: {
      en: "Declares a one-to-many link so Room can assemble a parent with its children.",
      hi: "एक-से-कई का रिश्ता बताता है ताकि Room parent को उसके बच्चों समेत जोड़ सके।",
      "hi-en": "Ek-se-kai ka rishta batata hai taki Room parent ko uske bachchon samet jod sake.",
    },
    affects: {
      en: "Room runs two queries — parents, then all children whose foreign key is in that set — and joins them in memory. That is the fix for N+1: fifty orders cost two queries instead of fifty-one. It needs `@Transaction`, or the two halves come from two different instants.",
      hi: "Room दो queries चलाता है — parents, फिर वे सारे बच्चे जिनकी foreign key उस समूह में है — और उन्हें memory में जोड़ देता है। N+1 का इलाज यही है: पचास orders इक्यावन के बजाय दो queries में। इसे `@Transaction` चाहिए, वरना दोनों आधे दो अलग पलों से आते हैं।",
      "hi-en": "Room do queries chalata hai — parents, phir wo saare bachche jinki foreign key us samooh mein hai — aur unhe memory mein jod deta hai. N+1 ka ilaaj yahi hai: pachaas orders ikyavan ke bajaye do queries mein. Ise `@Transaction` chahiye, warna dono aadhe do alag palon se aate hain.",
    },
    related: ["Embedded", "Transaction", "Entity"],
  },

  Embedded: {
    term: "@Embedded",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.Embedded",
    does: {
      en: "Flattens a nested class into the same table, one column per property.",
      hi: "किसी अंदरूनी class को उसी table में चपटा कर देता है, हर property पर एक column।",
      "hi-en": "Kisi andaruni class ko usi table mein chapta kar deta hai, har property par ek column.",
    },
    affects: {
      en: "For a value with no identity of its own — an address that belongs to exactly one user and is never queried alone. If the nested thing has its own id and is queried separately, it is a table and wants `@Relation` instead.",
      hi: "उस value के लिए जिसकी अपनी कोई पहचान नहीं — ऐसा पता जो ठीक एक user का है और जिसकी अकेले query कभी नहीं होती। अगर उस अंदरूनी चीज की अपनी id है और उसकी अलग query होती है, तो वह एक table है और उसे `@Relation` चाहिए।",
      "hi-en": "Us value ke liye jiski apni koi pehchan nahi — aisa pata jo theek ek user ka hai aur jiski akele query kabhi nahi hoti. Agar us andaruni cheez ki apni id hai aur uski alag query hoti hai, to wo ek table hai aur use `@Relation` chahiye.",
    },
    related: ["Relation", "Entity"],
  },

  TypeConverter: {
    term: "@TypeConverter",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.TypeConverter",
    does: {
      en: "Converts a type SQLite cannot store into one it can, and back.",
      hi: "ऐसे type को, जिसे SQLite रख नहीं सकता, रखे जा सकने वाले में बदलता है और वापस।",
      "hi-en": "Aise type ko, jise SQLite rakh nahi sakta, rakhe ja sakne wale mein badalta hai aur wapas.",
    },
    affects: {
      en: "A good converter is one value in, one column out, and the result stays queryable — you can still `WHERE` and `ORDER BY` on it. Storing a list as JSON compiles and quietly makes those values invisible to the database: no index, no filter, and finding one means reading every row. A list of things is a table.",
      hi: "अच्छा converter वह है जिसमें एक value अंदर, एक column बाहर, और नतीजे पर query अब भी हो सके — आप उस पर `WHERE` और `ORDER BY` लिख सकें। किसी list को JSON बनाकर रखना compile हो जाता है और चुपचाप उन values को database की नजर से गायब कर देता है: न index, न छानना, और किसी एक को ढूँढ़ने का मतलब हर row पढ़ना। चीजों की list एक table है।",
      "hi-en": "Achha converter wo hai jisme ek value andar, ek column bahar, aur result par query ab bhi ho sake — aap us par `WHERE` aur `ORDER BY` likh sako. Kisi list ko JSON banakar rakhna compile ho jata hai aur chupchap un values ko database ki nazar se gayab kar deta hai: na index, na chhanna, aur kisi ek ko dhoondhne ka matlab har row padhna. Cheezon ki list ek table hai.",
    },
    related: ["TypeConverters", "Entity"],
  },

  TypeConverters: {
    term: "@TypeConverters",
    kind: { en: "Annotation", hi: "Annotation", "hi-en": "Annotation" },
    source: "jetpack",
    importLine: "import androidx.room.TypeConverters",
    does: {
      en: "Registers a class of converters with the database, a DAO or a single field.",
      hi: "Converters वाली किसी class को database, किसी DAO या किसी एक field के साथ दर्ज करता है।",
      "hi-en": "Converters wali kisi class ko database, kisi DAO ya kisi ek field ke saath darj karta hai.",
    },
    affects: {
      en: "Where you put it decides its reach: on the `@Database` it applies everywhere, on a field only there. Narrower is better — a converter that applies to the whole database can silently change how an unrelated column is stored.",
      hi: "इसे कहाँ लगाया, यह उसकी पहुँच तय करता है: `@Database` पर लगाने से हर जगह, किसी field पर लगाने से सिर्फ वहीं। छोटा दायरा बेहतर है — पूरे database पर लगा converter किसी बेमतलब column के रखे जाने का तरीका चुपचाप बदल सकता है।",
      "hi-en": "Ise kahan lagaya, ye uski pahunch tay karta hai: `@Database` par lagane se har jagah, kisi field par lagane se sirf wahin. Chhota daayra behtar hai — poore database par laga converter kisi bematlab column ke rakhe jane ka tarika chupchap badal sakta hai.",
    },
    related: ["TypeConverter", "Database"],
  },

  Migration: {
    term: "Migration",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.room.migration.Migration",
    does: {
      en: "Describes the SQL that takes a database from one schema version to the next.",
      hi: "वह SQL बताता है जो database को एक schema version से अगली तक ले जाता है।",
      "hi-en": "Wo SQL batata hai jo database ko ek schema version se agli tak le jata hai.",
    },
    affects: {
      en: "This is the only code in an app where a mistake destroys data the user cannot recover, so test it with `MigrationTestHelper`, which builds an old database from the exported schema JSON and validates the result. A `NOT NULL` column added to a table with rows must have a `DEFAULT`. And never ship `fallbackToDestructiveMigration()` — it drops every table silently.",
      hi: "यह ऐप का इकलौता code है जहाँ गलती ऐसा data मिटा देती है जो user को वापस नहीं मिलेगा, तो उसे `MigrationTestHelper` से जाँचिए, जो exported schema JSON से पुराना database बनाता है और नतीजा परखता है। जिस table में rows हैं उसमें जोड़े गए `NOT NULL` column को `DEFAULT` चाहिए ही। और `fallbackToDestructiveMigration()` कभी मत भेजिए — वह हर table चुपचाप गिरा देता है।",
      "hi-en": "Ye app ka iklauta code hai jahan galti aisa data mita deti hai jo user ko wapas nahi milega, to use `MigrationTestHelper` se jaanchiye, jo exported schema JSON se purana database banata hai aur result parakhta hai. Jis table mein rows hain usmein jode gaye `NOT NULL` column ko `DEFAULT` chahiye hi. Aur `fallbackToDestructiveMigration()` kabhi mat bhejiye — wo har table chupchap gira deta hai.",
    },
    related: ["Database", "Entity"],
  },

  DataStore: {
    term: "DataStore",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "jetpack",
    importLine: "import androidx.datastore.core.DataStore",
    does: {
      en: "Stores small key-value or typed data, read as a `Flow` and written with a `suspend` function.",
      hi: "छोटा key-value या type वाला data रखता है, जिसे `Flow` से पढ़ा और `suspend` function से लिखा जाता है।",
      "hi-en": "Chhota key-value ya type wala data rakhta hai, jise `Flow` se padha aur `suspend` function se likha jata hai.",
    },
    affects: {
      en: "It replaces `SharedPreferences` by removing the possibility rather than the symptom: reads are a flow and writes suspend, so the main thread cannot block. `edit` suspends until the write is durable, which `apply()` never promised. Its `data` flow can emit an `IOException` on a corrupt file — `catch` it and emit defaults, or that becomes a crash on whichever screen collects it.",
      hi: "यह `SharedPreferences` की जगह लक्षण नहीं, गुंजाइश हटाकर लेता है: पढ़ना एक flow है और लिखना suspend, तो main thread रुक ही नहीं सकता। `edit` तब तक रुकता है जब तक लिखा हुआ पक्का न हो, जिसका वादा `apply()` ने कभी किया ही नहीं। बिगड़ी file पर इसका `data` वाला flow `IOException` भेज सकता है — उसे `catch` करके defaults भेजिए, वरना वह उस screen पर crash बन जाता है जो उसे collect करती है।",
      "hi-en": "Ye `SharedPreferences` ki jagah lakshan nahi, gunjaish hatakar leta hai: padhna ek flow hai aur likhna suspend, to main thread ruk hi nahi sakta. `edit` tab tak rukta hai jab tak likha hua pakka na ho, jiska wada `apply()` ne kabhi kiya hi nahi. Bigdi file par iska `data` wala flow `IOException` bhej sakta hai — use `catch` karke defaults bhejiye, warna wo us screen par crash ban jata hai jo use collect karti hai.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/datastore",
    related: ["Flow", "Database"],
  },

  MediaStore: {
    term: "MediaStore",
    kind: { en: "Content provider", hi: "Content provider", "hi-en": "Content provider" },
    source: "android",
    importLine: "import android.provider.MediaStore",
    does: {
      en: "The system index of photos, videos and audio, written through a `ContentResolver`.",
      hi: "तस्वीरों, videos और audio की system वाली सूची, जिसमें `ContentResolver` से लिखा जाता है।",
      "hi-en": "Tasveeron, videos aur audio ki system wali list, jismein `ContentResolver` se likha jata hai.",
    },
    affects: {
      en: "You describe the file and get a `Uri` back rather than building a path, which is the whole point — raw paths into shared storage stopped working at Android 10. Writing your own media needs no permission. Set `IS_PENDING` while writing, or the gallery can index a half-written file and show a broken thumbnail.",
      hi: "आप path बनाने के बजाय file का हुलिया बताते हैं और बदले में एक `Uri` पाते हैं, और पूरी बात यही है — shared storage के सादे paths Android 10 पर काम करना बंद कर चुके हैं। अपना media लिखने के लिए कोई permission नहीं चाहिए। लिखते वक्त `IS_PENDING` लगाइए, वरना gallery आधी लिखी file को सूची में लेकर टूटा thumbnail दिखा सकती है।",
      "hi-en": "Aap path banane ke bajaye file ka huliya batate ho aur badle mein ek `Uri` paate ho, aur poori baat yahi hai — shared storage ke saade paths Android 10 par kaam karna band kar chuke hain. Apna media likhne ke liye koi permission nahi chahiye. Likhte waqt `IS_PENDING` lagaiye, warna gallery aadhi likhi file ko list mein lekar toota thumbnail dikha sakti hai.",
    },
    docs: "https://developer.android.com/training/data-storage/shared/media",
    related: ["FileProvider", "Uri"],
  },

  FileProvider: {
    term: "FileProvider",
    kind: { en: "Content provider", hi: "Content provider", "hi-en": "Content provider" },
    source: "jetpack",
    importLine: "import androidx.core.content.FileProvider",
    does: {
      en: "Hands another app a `content://` URI for one of your files, with a temporary grant.",
      hi: "आपकी किसी file के लिए दूसरे ऐप को `content://` URI देता है, थोड़े वक्त की इजाजत के साथ।",
      "hi-en": "Aapki kisi file ke liye doosre app ko `content://` URI deta hai, thode waqt ki ijazat ke saath.",
    },
    affects: {
      en: "Your `filesDir` is private, so a `file://` URI is useless to another app — and since Android 7 passing one throws `FileUriExposedException` rather than failing quietly. The provider is declared `exported=\"false\"` with `grantUriPermissions=\"true\"`: nobody has blanket access, and each grant is per-URI and temporary. Forgetting the grant flag on the intent is why a share sheet opens and then the other app cannot read the file.",
      hi: "आपका `filesDir` निजी है, तो `file://` URI दूसरे ऐप के किसी काम का नहीं — और Android 7 से उसे भेजने पर चुपचाप नाकाम होने के बजाय `FileUriExposedException` आता है। वह provider `exported=\"false\"` और `grantUriPermissions=\"true\"` के साथ लिखा जाता है: किसी के पास खुली छूट नहीं, और हर इजाजत एक URI भर की और थोड़े वक्त की है। Intent पर grant वाला flag भूलना ही वह वजह है कि share sheet खुलती है और फिर दूसरा ऐप file पढ़ नहीं पाता।",
      "hi-en": "Aapka `filesDir` niji hai, to `file://` URI doosre app ke kisi kaam ka nahi — aur Android 7 se use bhejne par chupchap nakaam hone ke bajaye `FileUriExposedException` aata hai. Wo provider `exported=\"false\"` aur `grantUriPermissions=\"true\"` ke saath likha jata hai: kisi ke paas khuli chhoot nahi, aur har ijazat ek URI bhar ki aur thode waqt ki hai. Intent par grant wala flag bhoolna hi wo wajah hai ki share sheet khulti hai aur phir doosra app file padh nahi pata.",
    },
    related: ["MediaStore", "Uri", "Intent"],
  },

  PagingSource: {
    term: "PagingSource",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.paging.PagingSource",
    does: {
      en: "Loads one page and names the key of the next one.",
      hi: "एक page लाता है और अगले की key बताता है।",
      "hi-en": "Ek page lata hai aur agle ki key batata hai.",
    },
    affects: {
      en: "Returning `nextKey = null` is how you say there is no more data. `getRefreshKey` is the one people leave returning `null` and regret — it decides which page reloads after a refresh, and `null` sends the user back to the top, which on a pull-to-refresh feels like the app lost their place.",
      hi: "`nextKey = null` लौटाना ही यह कहने का तरीका है कि और data नहीं है। `getRefreshKey` वही है जिसे लोग `null` छोड़ देते हैं और पछताते हैं — वह तय करता है कि refresh के बाद कौन सा page दोबारा लदे, और `null` user को वापस सबसे ऊपर भेज देता है, जो pull-to-refresh पर ऐसा लगता है मानो ऐप ने उसकी जगह खो दी।",
      "hi-en": "`nextKey = null` lautana hi ye kehne ka tarika hai ki aur data nahi hai. `getRefreshKey` wahi hai jise log `null` chhod dete hain aur pachhtate hain — wo tay karta hai ki refresh ke baad kaunsa page dobara lade, aur `null` user ko wapas sabse upar bhej deta hai, jo pull-to-refresh par aisa lagta hai mano app ne uski jagah kho di.",
    },
    docs: "https://developer.android.com/topic/libraries/architecture/paging/v3-overview",
    related: ["Pager", "LoadResult", "RemoteMediator"],
  },

  LoadResult: {
    term: "LoadResult",
    kind: { en: "Sealed class", hi: "Sealed class", "hi-en": "Sealed class" },
    source: "jetpack",
    importLine: "import androidx.paging.PagingSource.LoadResult",
    does: {
      en: "What a `load` returns: a `Page` with data and keys, an `Error`, or `Invalid`.",
      hi: "`load` जो लौटाता है: data और keys वाला `Page`, कोई `Error`, या `Invalid`।",
      "hi-en": "`load` jo lautata hai: data aur keys wala `Page`, koi `Error`, ya `Invalid`.",
    },
    affects: {
      en: "Returning `Error` rather than throwing is what lets the UI show a retry for that page alone, instead of replacing a working screen. The failure becomes a value in `loadState`, which is the whole reason paging can distinguish a failed first load from a failed page five.",
      hi: "फेंकने के बजाय `Error` लौटाना ही UI को उस एक page भर के लिए retry दिखाने देता है, चलती screen को बदलने के बजाय। वह नाकामी `loadState` में एक value बन जाती है, और यही पूरी वजह है कि paging पहली नाकाम लदाई और page पाँच की नाकाम लदाई में फर्क कर पाता है।",
      "hi-en": "Phenkne ke bajaye `Error` lautana hi UI ko us ek page bhar ke liye retry dikhane deta hai, chalti screen ko badalne ke bajaye. Wo nakami `loadState` mein ek value ban jati hai, aur yahi poori wajah hai ki paging pehli nakaam ladai aur page paanch ki nakaam ladai mein farak kar pata hai.",
    },
    related: ["PagingSource", "Pager"],
  },

  Pager: {
    term: "Pager",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.paging.Pager",
    does: {
      en: "Ties a `PagingSource` and a `PagingConfig` together and exposes a `Flow<PagingData<T>>`.",
      hi: "किसी `PagingSource` और `PagingConfig` को जोड़ता है और एक `Flow<PagingData<T>>` देता है।",
      "hi-en": "Kisi `PagingSource` aur `PagingConfig` ko jodta hai aur ek `Flow<PagingData<T>>` deta hai.",
    },
    affects: {
      en: "This is where a `RemoteMediator` is attached, and the shape of that wiring is the whole offline-first story: the `pagingSourceFactory` reads from Room and the mediator only writes into it, so the app pages through cached data offline with no separate code path.",
      hi: "यहीं `RemoteMediator` जुड़ता है, और उस जोड़ की शक्ल ही पूरी offline-first कहानी है: `pagingSourceFactory` Room से पढ़ता है और mediator सिर्फ उसमें लिखता है, तो ऐप offline में रखे हुए data के pages पलटता है, बिना किसी अलग रास्ते के।",
      "hi-en": "Yahin `RemoteMediator` judta hai, aur us jod ki shakal hi poori offline-first kahani hai: `pagingSourceFactory` Room se padhta hai aur mediator sirf usmein likhta hai, to app offline mein rakhe hue data ke pages palatta hai, bina kisi alag raaste ke.",
    },
    related: ["PagingSource", "PagingConfig", "RemoteMediator"],
  },

  PagingConfig: {
    term: "PagingConfig",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.paging.PagingConfig",
    does: {
      en: "Sets the page size, how far ahead to prefetch, and how much to keep in memory.",
      hi: "Page का नाप, कितना पहले से लाना है, और memory में कितना रखना है, यह तय करता है।",
      "hi-en": "Page ka naap, kitna pehle se lana hai, aur memory mein kitna rakhna hai, ye tay karta hai.",
    },
    values: {
      en: "`pageSize`, `prefetchDistance`, `initialLoadSize`, `maxSize`, and `enablePlaceholders`.",
      hi: "`pageSize`, `prefetchDistance`, `initialLoadSize`, `maxSize`, और `enablePlaceholders`।",
      "hi-en": "`pageSize`, `prefetchDistance`, `initialLoadSize`, `maxSize`, aur `enablePlaceholders`.",
    },
    affects: {
      en: "`pageSize` should be comfortably larger than a screenful, or the list loads constantly while scrolling. `prefetchDistance` is what makes paging invisible — too small and the user reaches the end before the next page arrives.",
      hi: "`pageSize` एक screen भर से आराम से बड़ा होना चाहिए, वरना scroll करते वक्त list लगातार लदती रहती है। `prefetchDistance` ही paging को अदृश्य बनाता है — बहुत छोटा हो तो अगला page आने से पहले user सिरे पर पहुँच जाता है।",
      "hi-en": "`pageSize` ek screen bhar se aaram se bada hona chahiye, warna scroll karte waqt list lagatar ladti rehti hai. `prefetchDistance` hi paging ko adrishya banata hai — bahut chhota ho to agla page aane se pehle user sire par pahunch jata hai.",
    },
    related: ["Pager", "PagingSource"],
  },

  PagingData: {
    term: "PagingData",
    kind: { en: "Class", hi: "Class", "hi-en": "Class" },
    source: "jetpack",
    importLine: "import androidx.paging.PagingData",
    does: {
      en: "A snapshot of paged items as they flow towards the UI.",
      hi: "UI की तरफ बहते हुए paged items की एक झलक।",
      "hi-en": "UI ki taraf behte hue paged items ki ek jhalak.",
    },
    affects: {
      en: "It is not a list: it has no `size` and cannot be filtered once collected. Transform it inside the flow with `PagingData.map` or `PagingData.filter`, or better, filter in the query — filtering after the fact leaves pages of uneven size and confuses the prefetch distance.",
      hi: "यह list नहीं है: इसका कोई `size` नहीं है और collect होने के बाद इसे छाना नहीं जा सकता। उसे flow के अंदर `PagingData.map` या `PagingData.filter` से बदलिए, या उससे बेहतर, query में ही छानिए — बाद में छानने से pages का नाप ऊबड़-खाबड़ रह जाता है और prefetch की दूरी गड़बड़ा जाती है।",
      "hi-en": "Ye list nahi hai: iska koi `size` nahi hai aur collect hone ke baad ise chhana nahi ja sakta. Use flow ke andar `PagingData.map` ya `PagingData.filter` se badliye, ya usse behtar, query mein hi chhaniye — baad mein chhanne se pages ka naap oobad-khabad reh jata hai aur prefetch ki doori gadbada jati hai.",
    },
    related: ["Pager", "PagingSource"],
  },

  RemoteMediator: {
    term: "RemoteMediator",
    kind: { en: "Abstract class", hi: "Abstract class", "hi-en": "Abstract class" },
    source: "jetpack",
    importLine: "import androidx.paging.RemoteMediator",
    does: {
      en: "Fetches a page from the network and writes it into the database that the `PagingSource` reads.",
      hi: "Network से एक page लाता है और उसे उस database में लिखता है जिसे `PagingSource` पढ़ता है।",
      "hi-en": "Network se ek page lata hai aur use us database mein likhta hai jise `PagingSource` padhta hai.",
    },
    affects: {
      en: "This is what makes paging compatible with a single source of truth — it only writes, so reads stay a database `Flow`. Write the rows and the remote key in one transaction: separately, a process death leaves saved rows and a key that never advanced, and the app re-fetches the same page forever. Several DAO calls outside a transaction are also several invalidations, so one page of data reloads the list several times.",
      hi: "यही paging को सच के इकलौते ठिकाने के साथ चलने लायक बनाता है — यह सिर्फ लिखता है, तो पढ़ना database का `Flow` ही रहता है। Rows और remote key एक ही transaction में लिखिए: अलग-अलग लिखने पर process मरने से सहेजी हुई rows और आगे न बढ़ी key बच जाती है, और ऐप वही page हमेशा दोबारा लाता रहता है। Transaction के बाहर कई DAO calls कई invalidations भी हैं, तो एक page भर का data list को कई बार दोबारा लादता है।",
      "hi-en": "Yahi paging ko sach ke iklaute thikane ke saath chalne layak banata hai — ye sirf likhta hai, to padhna database ka `Flow` hi rehta hai. Rows aur remote key ek hi transaction mein likhiye: alag-alag likhne par process marne se saheji hui rows aur aage na badhi key bach jati hai, aur app wahi page hamesha dobara lata rehta hai. Transaction ke bahar kai DAO calls kai invalidations bhi hain, to ek page bhar ka data list ko kai baar dobara ladta hai.",
    },
    related: ["Pager", "PagingSource", "Transaction"],
  },

  AsyncImage: {
    term: "AsyncImage",
    kind: { en: "Composable", hi: "Composable", "hi-en": "Composable" },
    source: "library",
    importLine: "import coil3.compose.AsyncImage",
    does: {
      en: "Loads an image from a URL and draws it, off the main thread and cached.",
      hi: "किसी URL से तस्वीर लाकर बनाता है, main thread से हटकर और cache के साथ।",
      "hi-en": "Kisi URL se tasveer lakar banata hai, main thread se hatkar aur cache ke saath.",
    },
    affects: {
      en: "Give it a size constraint. A decoded bitmap is width times height times four bytes, so a 12-megapixel photo is about 48 MB — without a known target it may decode at source resolution and scale down afterwards, which is the expensive order and how a grid of thumbnails runs out of memory. A `placeholder` is not decoration either: without one the row has no height until the image arrives, so the list reflows.",
      hi: "इसे नाप की हद दीजिए। Decode हुआ bitmap चौड़ाई गुणा ऊँचाई गुणा चार bytes होता है, तो 12 megapixel की तस्वीर करीब 48 MB है — बिना जानी हुई जगह के वह स्रोत के नाप पर decode करके बाद में छोटा कर सकता है, और महँगा क्रम यही है, और thumbnails का grid इसी से memory खत्म करता है। `placeholder` भी सजावट नहीं है: उसके बिना तस्वीर आने तक उस row की कोई ऊँचाई नहीं होती, तो list दोबारा बैठती है।",
      "hi-en": "Ise naap ki had dijiye. Decode hua bitmap width guna height guna chaar bytes hota hai, to 12 megapixel ki tasveer kareeb 48 MB hai — bina jani hui jagah ke wo srot ke naap par decode karke baad mein chhota kar sakta hai, aur mehnga order yahi hai, aur thumbnails ka grid isi se memory khatam karta hai. `placeholder` bhi sajawat nahi hai: uske bina tasveer aane tak us row ki koi unchai nahi hoti, to list dobara baithti hai.",
    },
    docs: "https://coil-kt.github.io/coil/compose/",
    related: ["ImageLoader", "dp"],
  },

  ImageLoader: {
    term: "ImageLoader",
    kind: { en: "Interface", hi: "Interface", "hi-en": "Interface" },
    source: "library",
    importLine: "import coil3.ImageLoader",
    does: {
      en: "Coil's shared loader, holding the memory cache, the disk cache and the HTTP client.",
      hi: "Coil का साझा loader, जो memory वाला cache, disk वाला cache और HTTP client रखता है।",
      "hi-en": "Coil ka share loader, jo memory wala cache, disk wala cache aur HTTP client rakhta hai.",
    },
    affects: {
      en: "Give it the app's own `OkHttpClient` — then images reuse the connection pool and inherit the auth interceptor, so a signed-in image URL works with no second auth path. Its memory cache is keyed by URL **and** size, so the same image at two sizes is two entries; and a signed URL whose token changes every session misses the cache every time unless you set a stable `memoryCacheKey`.",
      hi: "उसे ऐप का अपना `OkHttpClient` दीजिए — तब तस्वीरें वही connection pool लेती हैं और auth वाला interceptor उन्हें विरासत में मिलता है, तो signed-in तस्वीर का URL बिना दूसरे auth रास्ते के चलता है। इसका memory cache URL **और** नाप दोनों से बँधा है, तो वही तस्वीर दो नापों पर दो entries है; और जिस signed URL का token हर session बदलता है वह हर बार cache से चूकता है, जब तक आप कोई टिकी हुई `memoryCacheKey` न दें।",
      "hi-en": "Use app ka apna `OkHttpClient` dijiye — tab tasveerein wahi connection pool leti hain aur auth wala interceptor unhe virasat mein milta hai, to signed-in tasveer ka URL bina doosre auth raaste ke chalta hai. Iska memory cache URL **aur** naap dono se bandha hai, to wahi tasveer do naapon par do entries hai; aur jis signed URL ka token har session badalta hai wo har baar cache se chookta hai, jab tak aap koi tiki hui `memoryCacheKey` na do.",
    },
    related: ["AsyncImage", "OkHttpClient", "Cache"],
  },
};
