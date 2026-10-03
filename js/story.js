/* ==========================================================================
   THE BOYS: REMASTERED - ANIME EDITION (429 SCENES MASTER SCRIPT)
   Full 18 Chapters + Prologue + Epilogue + 3 Endings
   ========================================================================== */

const STORY_DATA = {
  "prologue_start": {
    "text": "25 мая. За высокими окнами старой школы №7 шумит теплый предзакатный ветер. В воздухе кружится невесомый тополиный пух, мягко оседая на потрескавшийся асфальт школьного двора.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_1",
    "bgm": "intro",
    "chapter": "ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК"
  },
  "prologue_1": {
    "text": "Кабинет математики на третьем этаже залит густым янтарным сиянием заката. Солнечные лучи пробиваются сквозь пыльные жалюзи, чертя на деревянных партах ровные золотые полосы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_2"
  },
  "prologue_2": {
    "text": "Все одноклассники уже давно разбежались — кто-то примеряет выпускные платья, кто-то прячет шампанское в кустах у стадиона. Только мы четверо остались сидеть на привычной задней парте у окна.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_3"
  },
  "prologue_3": {
    "text": "На широкой классной доске белым мелом размашисто и гордо выведено: «Выпуск 11-Б. Мы сделали это!». Одиннадцать долгих лет пролетели словно одна яркая вспышка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_4"
  },
  "prologue_4": {
    "text": "— Ну что, братья... Вот и финишная прямая, — Ваня поправляет очки в тонкой золотой оправе и бережно закрывает свой пухлый блокнот с первыми бизнес-расчетами.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_5",
    "sfx": "typewriter"
  },
  "prologue_5": {
    "text": "Его темно-бордовый форменный пиджак сидит безупречно, золотые пуговицы поблескивают в закатных лучах. Ваня всегда был среди нас стратегом, просчитывающим каждый шаг на годы вперед.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_6"
  },
  "prologue_6": {
    "text": "— Завтра торжественное вручение аттестатов, банкет до утра — и школьные годы официально закончились. Даже не верится, что завтра мы уже взрослые.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_7",
    "sfx": "typewriter"
  },
  "prologue_7": {
    "text": "— Да брось ты эти сопли, Вано! — громко фыркает Никита, закинув ноги в кедах на край парты. Его пиджак распахнут настежь, обнажая черную футболку и массивную серебряную цепь.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "prologue_8",
    "sfx": "typewriter"
  },
  "prologue_8": {
    "text": "— Меня эти облезлые стены и нудные поучения физички достали еще в девятом классе! — Никита со щелчком зажигает зажигалку Zippo. — Наконец-то свобода! Начнем жить по собственным правилам.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "prologue_9",
    "sfx": "typewriter"
  },
  "prologue_9": {
    "text": "— Свобода без денег, Никитос — это просто красивая нищета на свежем воздухе, — снисходительно усмехается Аслан. Он любуется своим отражением в экране смартфона.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "prologue_10",
    "sfx": "typewriter"
  },
  "prologue_10": {
    "text": "— Я через месяц стартую в Москву. Там сейчас крутится всё бабло планеты. Блогинг, стриминг, миллионные контракты. Через пару лет сниму пентхаус на шестидесятом этаже в Сити!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "prologue_11",
    "sfx": "typewriter"
  },
  "prologue_11": {
    "text": "— Главное, чтобы на шестидесятом этаже у тебя интернет не отрубили за неуплату, столичный магнат, — язвительно бросает с соседней парты Исмаил, протирая очки-авиаторы.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_12",
    "sfx": "typewriter"
  },
  "prologue_12": {
    "text": "Исмаил — мозг нашей компании по части едких шуток и цифровых авантюр. Пока другие зубрили историю, он администрировал новостные паблики и тестировал провокационный контент.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "prologue_13"
  },
  "prologue_13": {
    "text": "— В современном мире правит не пафос, а охваты и шок-контент, — заявляет Исмаил. — Тот, кто держит эмоции зрителя за горло, правит цифровым миром.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_14",
    "sfx": "typewriter"
  },
  "prologue_14": {
    "text": "— А ты сам чем займешься, Вано? — Никита толкает Ваню в плечо. — Все исписал свои тетрадки графиками да таблицами. Неужели пойдешь в унылый банк за тридцать тысяч?",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "prologue_15",
    "sfx": "typewriter"
  },
  "prologue_15": {
    "text": "— Нет. Я создам свой бренд. IvanEnergy, — спокойно отвечает Ваня. — Энергетические напитки, дистрибуция по всей стране. Это осязаемый реальный бизнес, а не воздух.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_16",
    "sfx": "typewriter"
  },
  "prologue_16": {
    "text": "— Ого, целый олигарх растет! — смеется Аслан, хлопая Ваню по плечу. — Запомни этот день: когда будешь делить дивиденды, мы первые в очереди!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "prologue_17",
    "sfx": "typewriter"
  },
  "prologue_17": {
    "text": "— Ладно, мужики, солнце почти село, — говорит Никита, вынимая ключ. — Я подрезал у завхоза ключ от пожарного выхода на крышу. Пошли встречать закат!",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "prologue_18",
    "sfx": "typewriter"
  },
  "prologue_18": {
    "text": "Тяжелая железная дверь со скрипом поддается, и прохладный вечерний сквозняк ударяет в лицо. Мы выходим на плоскую рубероидную крышу школы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "prologue_19"
  },
  "prologue_19": {
    "text": "Перед нами расстилается весь наш провинциальный город: хрущевки, зеленые тополя, петляющая лента реки и далекие дымы промзоны в багровых лучах заката.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "prologue_20"
  },
  "prologue_20": {
    "text": "Ветер треплет полы наших школьных пиджаков. Мы стоим у оградительной решетки, и кажется, что весь огромный мир лежит у наших ног.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "prologue_21"
  },
  "prologue_21": {
    "text": "— Давайте поклянемся, — тихо произносит Ваня. — Куда бы нас ни раскидала жизнь, мы никогда не бросим друг друга в беде.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "prologue_choice_1",
    "sfx": "typewriter"
  },
  "prologue_choice_1": {
    "text": "Какими словами скрепить нерушимую клятву школьного братства на закатной крыше?",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "choices": [
      {
        "text": "«Клянемся! Один за всех — и до самого конца!» (Искренняя клятва)",
        "target": "prologue_oath_solemn"
      },
      {
        "text": "«Кто первым поднимется — вытягивает остальных!» (Прагматичный договор)",
        "target": "prologue_oath_pragmatic"
      }
    ]
  },
  "prologue_oath_solemn": {
    "text": "Мы протягиваем руки и смыкаем ладони в крепкий мужской замок. Четыре ладони. Четыре судьбы, переплетенные за школьными партами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "prologue_22"
  },
  "prologue_oath_pragmatic": {
    "text": "Никита с азартом хлопает сверху по нашим ладоням: «Заметано! Кто первый взлетит — держит трос для остальных!».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "prologue_22"
  },
  "prologue_22": {
    "text": "В этот миг ни один из нас не мог даже в страшном кошмаре представить, какие бездны, решетки, долги и кровавые траншеи уготовило нам грядущее десятилетие...",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ch1_start"
  },
  "ch1_start": {
    "text": "Июнь пролетел в пьянящем угаре выпускных вечеров. Но уже к июлю воздух наполнился тревогой приближающейся взрослой жизни.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ch1_1",
    "bgm": "intro",
    "chapter": "ГЛАВА 1: ПЕРВЫЕ ТРЕЩИНЫ"
  },
  "ch1_1": {
    "text": "Приемные комиссии столичных вузов подвели итоги. Ваня прошел на бюджет экономического факультета в Москве с максимальным баллом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "ch1_2"
  },
  "ch1_2": {
    "text": "В крошечной комнате студенческого общежития в Марфино он сутками чертил технологические карты будущих производственных линий IvanEnergy.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "ch1_3"
  },
  "ch1_3": {
    "text": "Аслан собрал свои брендовые вещи в два чемодана, занял крупную сумму у дяди и уехал покорять столичные медиа-агентства.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch1_4"
  },
  "ch1_4": {
    "text": "Исмаил закрылся в подвальном помещении на окраине города, обклеил стены ячеистым поролоном для акустики и запустил свой канал с расследованиями.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch1_5"
  },
  "ch1_5": {
    "text": "И только Никита остался один на один с пустеющим родным двором. Родители развелись, мать тяжело заболела артритом, денег в семье не было совсем.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_6"
  },
  "ch1_6": {
    "text": "Никита устроился на круглосуточную автомойку «Авто-Люкс» возле объездной трассы. Смена с восьми вечера до восьми утра.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_7"
  },
  "ch1_7": {
    "text": "Ледяная вода под давлением в сто атмосфер, едкая щелочная пена, разъедающая кожу рук до кровавых трещин, и постоянные маты проезжих водителей.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_8"
  },
  "ch1_8": {
    "text": "В коротких перекурах Никита листал ленту в телефоне. Аслан выкладывал видео с фуршетов в Москва-Сити, улыбаясь рядом с популярными тиктокерами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_9"
  },
  "ch1_9": {
    "text": "Исмаил хвастался первыми пятидесятью тысячами подписчиков, публикуя скриншоты донатов. Ваня делился конспектами по международной логистике.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_10"
  },
  "ch1_10": {
    "text": "— Вано, здорово... — голос Никиты в телефонной трубке звучал глухо и неестественно устало. — Ты как там в столице? В белой рубашке ходишь?",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch1_11",
    "sfx": "typewriter"
  },
  "ch1_11": {
    "text": "— Привет, Никита! Да какой там, зарылся в микроэкономику по горло, — бодро ответил Ваня. — Слушай, я скоро допишу бизнес-план завода и устрою тебя к себе!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch1_12",
    "sfx": "typewriter"
  },
  "ch1_12": {
    "text": "— «Скоро»... — с горькой усмешкой протянул Никита. — А у меня матери сегодня выписали лекарств на двадцать тысяч. Где мне их взять прямо сейчас?",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch1_13",
    "sfx": "typewriter"
  },
  "ch1_13": {
    "text": "— Никита, давай я переведу тебе остатки стипендии! Пять тысяч рублей, больше пока нет...",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch1_14",
    "sfx": "typewriter"
  },
  "ch1_14": {
    "text": "— Подачки мне не нужны, Ваня! Сам разберусь! — в трубке раздались короткие гудки отбоя.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch1_15",
    "sfx": "typewriter"
  },
  "ch1_15": {
    "text": "Ваня с тревогой посмотрел на погасший экран. В груди шевельнулось тяжелое, нехорошее предчувствие.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch1_16"
  },
  "ch1_16": {
    "text": "А в этот же вечер на автомойку к Никите заехал тонированный черный внедорожник без государственных номеров.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_17"
  },
  "ch1_17": {
    "text": "Никита отдраил кузов до зеркального блеска. Водитель опустил стекло: «Хорошо работаешь, парень. Сильный, дерзкий. Вижу, на жизнь не хватает?».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_18"
  },
  "ch1_18": {
    "text": "— А кому сейчас хватает? — угрюмо отозвался Никита, вытирая капли пены с предплечья.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch1_19",
    "sfx": "typewriter"
  },
  "ch1_19": {
    "text": "— Есть тема для серьезных парней. Доставка посылок по тайникам. От ста тысяч рублей в неделю чистыми. Приходи в полночь в гаражный кооператив «Северный». Бокс №24.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_20"
  },
  "ch1_20": {
    "text": "Мужчина бросил Никите карточку с зашифрованным ником в Telegram и со свистом шин сорвался с места.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch1_21"
  },
  "ch1_21": {
    "text": "Никита сжал пластиковую карточку в руке. В кармане лежали неоплаченные рецепты матери. Судьба сделала первый роковой шаг в бездну.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_start"
  },
  "ch2_start": {
    "text": "Ноябрь. Зима пришла неожиданно рано, сковав город свирепыми морозами. Ветер поднимает колючие снежные вихри над ржавыми рядами гаражей.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 2: ТЕНЬ ЗА ГАРАЖАМИ"
  },
  "ch2_1": {
    "text": "Одинокий фонарь на бетонном столбе мигает и гудит, раскачиваясь на ветру. Под ногами с сухим хрустом ломается наст.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_2"
  },
  "ch2_2": {
    "text": "Никита подошел к синим металлическим воротам с выведенной белой краской цифрой «24». Ворота были обледенелыми и массивными.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_3"
  },
  "ch2_3": {
    "text": "Условный сигнал: три коротких удара ключом, пауза, два тяжелых удара. Внутри лязгнул тяжелый шпингалет.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_4"
  },
  "ch2_4": {
    "text": "Дверь приоткрылась. Клуб пара и удушливый запах растворителя вырвались наружу: «Заходи живо, не свети на линии!».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_5"
  },
  "ch2_5": {
    "text": "Внутри гаража горела переносная лампа. На деревянном верстаке лежали прецизионные весы, рулоны цветной изоленты и пакеты с белыми кристаллами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_6"
  },
  "ch2_6": {
    "text": "— Смотри сюда, Никита. Это высококонцентрированная синтетика. Твоя работа — раскладывать тайники по лесополосе и промзонам.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_7"
  },
  "ch2_7": {
    "text": "— За каждый проверенный адрес — восемьсот рублей на криптокошелек. Делаешь тридцать штук за смену — получаешь двадцать четыре тысячи рублей за одну ночь.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_8"
  },
  "ch2_8": {
    "text": "Никита затаил дыхание. Двадцать четыре тысячи за несколько часов... На автомойке за такие деньги приходилось горбатиться больше месяца.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_9"
  },
  "ch2_9": {
    "text": "— А если полиция? Патрули в парках дежурят круглосуточно, — спросил Никита, пряча озябшие руки в карманы.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch2_10",
    "sfx": "typewriter"
  },
  "ch2_10": {
    "text": "— Телефон только на авиарежиме, геометки через прокси. И самое главное правило: никогда, ни при каких обстоятельствах не пробуй продукт сам.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_11"
  },
  "ch2_11": {
    "text": "Никита взял первый увесистый мастер-клад. Холод пластика обжег ладонь, словно кусок сухого льда.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_12"
  },
  "ch2_12": {
    "text": "Первые недели показались Никите сказочным сном. Долги матери были выплачены, на столе появились деликатесы, а на плечах — дорогая кожаная куртка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_13"
  },
  "ch2_13": {
    "text": "Но вместе с легкими деньгами пришел парализующий животный ужас. Каждый проезжающий патрульный уазик заставлял сердце замирать в горле.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_14"
  },
  "ch2_14": {
    "text": "Каждый случайный прохожий казался переодетым оперативником в штатском, каждый треск ветки в ночном лесу — взведением затвора пистолета.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_15"
  },
  "ch2_15": {
    "text": "Однажды, после трех суток без сна на лютом морозе, Никита не выдержал. Чтобы заглушить паническую атаку, он отсыпал крохотную щепотку кристаллов на лезвие ключа.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_16"
  },
  "ch2_16": {
    "text": "«Только разок... Просто чтобы успокоиться и согреться...». Это была точка невозврата.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_17"
  },
  "ch2_17": {
    "text": "Синтетика моментально выжгла центры удовольствия в мозгу. Наступила эйфория всесилия, сменившаяся еще более жестокой паранойей и галлюцинациями.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_18"
  },
  "ch2_18": {
    "text": "Зрачки Никиты расширились во всю радужку, челюсть начало сводить судорогой. Он перестал появляться дома, сутками скрываясь в промерзшем гараже.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_19"
  },
  "ch2_19": {
    "text": "Прошел год. К зиме 2019 года Никита окончательно превратился в живую тень, забаррикадировавшись в боксе №24 с остатками нерасфасованного порошка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch2_20"
  },
  "ch2_20": {
    "text": "Узнав от плачущей матери о пропаже друга, Ваня бросил подготовку к сессии в Москве и первым ночным поездом помчался спасать брата.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_start"
  },
  "ch3_start": {
    "text": "Полночь. Вьюга завывает между бесконечными рядами серых гаражей. Ваня пробирается по колено в снегу, сжимая в кармане фонарик.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 3: БОКС №24 (НИКИТА)"
  },
  "ch3_1": {
    "text": "Вот он — бокс №24. На воротах висит огромный заржавевший навесной замок. Щеколда плотно прижата морозом, из щели ворот не доносится ни звука.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_lock_minigame"
  },
  "ch3_lock_minigame": {
    "text": "Замок заклинило на морозе. Нужно аккуратно повернуть цилиндр отмычкой, чтобы открыть тяжелую дверь бокса №24.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_2",
    "minigame": "lockpick"
  },
  "ch3_2": {
    "text": "Замок с щелчком поддался! Из щелей потянуло гарью, застарелым табаком и удушливыми химикатами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_3"
  },
  "ch3_3": {
    "text": "Ваня с силой колотит в промерзшее железо: «Никита! Открой, черт тебя дери! Это Ваня! Я один!»",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch3_4",
    "sfx": "typewriter"
  },
  "ch3_4": {
    "text": "Внутри раздался металлический звон упавшего инструмента, лихорадочное сопение и глухой рык.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_5"
  },
  "ch3_5": {
    "text": "Засов резко отодвинулся, и дверь распахнулась. На Ваню выскочил человек с безумными выпученными глазами, сжимая в руке нож.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_6"
  },
  "ch3_6": {
    "text": "— Стоять, сука! Кто с тобой?! Менты за углом?! Куратор прислал зачистить свидетеля?! — Никита прижал лезвие к горлу Вани. Рука парня ходила ходуном.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch3_7",
    "sfx": "typewriter",
    "shake": true
  },
  "ch3_7": {
    "text": "— Никита, посмотри мне в глаза! Это я, Ваня! Твой брат! Мы за одной партой одиннадцать лет сидели!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch3_8",
    "sfx": "typewriter"
  },
  "ch3_8": {
    "text": "Нож выпал из онемевших пальцев Никиты, звякнув о бетон. Парень осел на пол, закрыв лицо грязными руками с обломанными ногтями.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch3_9"
  },
  "ch3_9": {
    "text": "— Вано... Зачем ты приперся сюда... Зачем?! Тебя убьют вместе со мной! Отсюда нет выхода...",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch3_10",
    "sfx": "typewriter"
  },
  "ch3_10": {
    "text": "Ваня шагнул внутрь и захлопнул за собой створку. В гараже стоял леденящий сквозняк, пахло гнилью, немытым телом и синтетической химией.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_11"
  },
  "ch3_11": {
    "text": "На верстаке лежали целые штабеля расфасованного порошка. Пакеты, весы, фольга. Не меньше пяти килограммов — гарантия пожизненного срока.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch3_12"
  },
  "ch3_12": {
    "text": "— Никита, что ты наделал... Это же 228-я статья, пятая часть. Организованная группа, особо крупный размер. До двадцати лет строгого режима!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch3_13",
    "sfx": "typewriter"
  },
  "ch3_13": {
    "text": "— А у меня был выбор?! — со слезами выкрикнул Никита. — Мать загибалась от боли, жрать было нечего! А эти ублюдки дали мне денег! Но теперь я на цифровом поводке!",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch3_14",
    "sfx": "typewriter"
  },
  "ch3_14": {
    "text": "— Сколько ты им должен? Говори точно!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch3_15",
    "sfx": "typewriter"
  },
  "ch3_15": {
    "text": "— Два миллиона рублей. Я потерял мастер-клад в лесу, когда убегал от патруля. Куратор дал срок до утра пятницы. Если не положу деньги — сожгут квартиру вместе с матерью.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch3_choice_lock",
    "sfx": "typewriter"
  },
  "ch3_choice_lock": {
    "text": "Роковой выбор перед лицом надвигающейся катастрофы:",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "choices": [
      {
        "text": "Силой вывезти Никиту, сжечь товар и спрятать его в закрытом реабилитационном центре на Алтае (Ветка спасения)",
        "target": "ending_nikita_rehab_1"
      },
      {
        "text": "Попытаться убедить Никиту немедленно сдаться властям с повинной",
        "target": "ch3_plead_surrender"
      },
      {
        "text": "Осознать свое бессилие перед беспощадной криминальной машиной (Каноничный путь)",
        "target": "ch4_start"
      }
    ]
  },
  "ch3_plead_surrender": {
    "text": "— Никита, пойдем в полицию прямо сейчас. Я найму лучших столичных адвокатов, докажем принуждение и кабалу!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch3_plead_fail",
    "sfx": "typewriter"
  },
  "ch3_plead_fail": {
    "text": "— Ты наивный дурак, Ваня! В местном отделе половина сидит на проценте от этой сети! Меня просто придушат в первой же камере ИВС!",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_start",
    "sfx": "typewriter"
  },
  "ch4_start": {
    "text": "Температура в боксе упала ниже нуля. Никиту на глазах начала выкручивать чудовищная синтетическая ломка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch4_1",
    "bgm": "sadness",
    "chapter": "ГЛАВА 4: ЛОМКА И ПРИЗНАНИЕ"
  },
  "ch4_1": {
    "text": "Его тело сводило судорогами, суставы выворачивало от невыносимой боли. Он рухнул на грязный поролоновый матрас, царапая бетон ногтями.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_2"
  },
  "ch4_2": {
    "text": "— Вано... Помнишь крышу?.. Закат... Какой закат был красивый тогда... Теплый...",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_3",
    "sfx": "typewriter"
  },
  "ch4_3": {
    "text": "Слезы текли по его серым ввалившимся щекам, оставляя чистые полосы на копоти: «Я ведь не хотел быть мразью... Я просто хотел, чтобы на меня не смотрели как на пустое место...».",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_4",
    "sfx": "typewriter"
  },
  "ch4_4": {
    "text": "Ваня снял свое теплое пальто и укутал дрожащего друга. Он налил из термоса горячий чай, но Никита не мог удержать кружку — кипяток расплескивался по рукам.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch4_5"
  },
  "ch4_5": {
    "text": "— Я отдам им эти деньги, Никита! Слышишь меня?! Я переведу два миллиона прямо сейчас!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch4_6",
    "sfx": "typewriter"
  },
  "ch4_6": {
    "text": "— Бесполезно... — Никита протянул дрожащую руку с треснувшим телефоном. — Посмотри. Они прислали фото подъезда моей матери пятнадцать минут назад.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_7",
    "sfx": "typewriter"
  },
  "ch4_7": {
    "text": "На экране было ночное фото хрущевки, где жила мать Никиты. Внизу стояла подпись: «Время пошло, закладчик».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch4_8"
  },
  "ch4_8": {
    "text": "— И еще... Слышишь? — Никита вдруг замер, расширенными от ужаса глазами уставившись в потолок гаража.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_9",
    "sfx": "typewriter"
  },
  "ch4_9": {
    "text": "Снаружи, сквозь вой метели, послышался глухой, размеренный скрип десятков тяжелых армейских ботинок по замерзшему насту.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch4_10"
  },
  "ch4_10": {
    "text": "Они окружали бокс. Слаженные, профессиональные движения группы захвата. Ошибиться было невозможно.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch4_11"
  },
  "ch4_11": {
    "text": "— Ваня, уходи через задний технический лаз! — Никита вскочил, забыв о боли, и сорвал фанерный лист с вентиляционной шахты.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch4_choice_1",
    "sfx": "typewriter"
  },
  "ch4_choice_1": {
    "text": "Секунды до неминуемого штурма спецназа:",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "choices": [
      {
        "text": "Остаться с другом плечом к плечу, разделив его судьбу",
        "target": "ch4_stay"
      },
      {
        "text": "Выбраться наружу через лаз, чтобы бороться за него законными методами",
        "target": "ch5_start"
      }
    ]
  },
  "ch4_stay": {
    "text": "— Я не брошу тебя, Никита! Мы давали клятву!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch4_stay_push",
    "sfx": "typewriter"
  },
  "ch4_stay_push": {
    "text": "Никита со всей оставшейся яростью толкнул Ваню в узкий проем: «Живи, дурак! Не смей губить свою жизнь из-за меня!» — и захлопнул стальную заслонку снаружи.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_start"
  },
  "ch5_start": {
    "text": "БАМ! Страшный грохот гидравлического тарана сорвал петли железных ворот, вмяв их внутрь гаража!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_1",
    "bgm": "action",
    "shake": true,
    "flash": true,
    "chapter": "ГЛАВА 5: ОБЛАВА СПЕЦНАЗА"
  },
  "ch5_1": {
    "text": "— СПЕЦНАЗ «ГРОМ»! ОРУЖИЕ НА ПОЛ! МОРДОЙ В ЗЕМЛЮ, МРАЗОТА!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_2",
    "shake": true,
    "flash": true
  },
  "ch5_2": {
    "text": "Ослепительная вспышка светошумовой гранаты превратила ночь в пылающий белый ад. Барабанные перепонки взорвались звоном.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_3",
    "flash": true
  },
  "ch5_3": {
    "text": "Десятки красных лазерных прицелов прорезали дымовую завесу. Штурмовая группа в бронежилетах пятого класса ворвалась в бокс.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_4"
  },
  "ch5_4": {
    "text": "Никита вслепую метнулся в угол, но тяжелый кованый ботинок штурмовика с размаху сбил его с ног. Лицо парня впечаталось в ледяной замасленный бетон.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_5",
    "shake": true
  },
  "ch5_5": {
    "text": "— Руки за голову, сука! Дернешься — стреляю на поражение!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_6"
  },
  "ch5_6": {
    "text": "Стальные наручники с сухим металлическим хрустом впились в запястья до самой надкостницы. Служебная овчарка с яростным рыком рвала край куртки Никиты.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_7"
  },
  "ch5_7": {
    "text": "Ваня, задыхаясь в сугробе за железнодорожным полотном, сквозь ледяные слезы наблюдал за арестом брата.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_8"
  },
  "ch5_8": {
    "text": "— Товарищ майор, здесь оптовый перевалочный пункт. Пять килограммов чистой соли, расфасованные свертки, электронные весы. Полный комплект на организованную группу.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_9"
  },
  "ch5_9": {
    "text": "— Отличная работа. Понятых сюда, составляем протокол изъятия вещдоков в присутствии специалистов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_10"
  },
  "ch5_10": {
    "text": "Оперативники в резиновых перчатках методично упаковывали в пакеты весы, мерные ложки и сотовые телефоны.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_11"
  },
  "ch5_11": {
    "text": "— Фамилия, имя, отчество фигуранта? — следователь ткнул авторучкой в протокол.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_12"
  },
  "ch5_12": {
    "text": "— Никита... Александрович... — прохрипел парень с разбитыми в кровь губами.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch5_13",
    "sfx": "typewriter"
  },
  "ch5_13": {
    "text": "— Со статьей ознакомлен: 228 прим 1, часть пятая. Наказывается лишением свободы на срок от пятнадцати до двадцати лет либо пожизненно.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_14"
  },
  "ch5_14": {
    "text": "Никита даже не вздрогнул. Его взгляд остекленел, в нем погасла последняя искра человеческого тепла.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_15"
  },
  "ch5_15": {
    "text": "Двое спецназовцев подняли его с пола под мышки и выволокли наружу на трескучий тридцатиградусный мороз.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_16"
  },
  "ch5_16": {
    "text": "Капли крови из рассеченной брови падали на девственно чистый снег, оставляя дымящиеся алые следы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_17"
  },
  "ch5_17": {
    "text": "Тяжелые бронированные двери автозака захлопнулись с гулким лязгом тюремного засова.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_18"
  },
  "ch5_18": {
    "text": "Синие проблесковые маячки на крышах уазиков осветили кружащую метель призрачным синим сиянием.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_19"
  },
  "ch5_19": {
    "text": "Колонна сорвалась с места и растворилась в снежном вихре, увозя Никиту в ледяной мрак следственного изолятора.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch5_20"
  },
  "ch5_20": {
    "text": "Ваня остался один среди сугробов. Ветер обжигал мокрое от слез лицо, в ушах стоял крик Никиты: «Живи, Вано!..».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ch6_start"
  },
  "ch6_start": {
    "text": "Спустя девять месяцев следствия. Зал городского суда. Казенные бежевые стены, скрипучие скамьи и запах пыли, дешевого табака и человеческого горя.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_1",
    "bgm": "sadness",
    "chapter": "ГЛАВА 6: СУД: СТАТЬЯ 228"
  },
  "ch6_1": {
    "text": "За бронированным стеклом судебного «аквариума» сидел Никита. Наголо обритый череп, серая арестантская роба, землистый цвет лица.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch6_2"
  },
  "ch6_2": {
    "text": "На первом ряду тихо плакала его мать, сжимая в высохших пальцах бумажную иконку. Ваня сидел рядом, держа ее за холодную руку.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_3"
  },
  "ch6_3": {
    "text": "Казенный назначенный адвокат скучающе листал телефон, даже не пытаясь возражать против доводов обвинения.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_4"
  },
  "ch6_4": {
    "text": "Прокурор в темно-синем мундире чеканил слова: «Обвиняемый действовал с прямым умыслом из корыстных побуждений в составе сетевого преступного синдиката».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_5"
  },
  "ch6_5": {
    "text": "— Преступление представляет исключительную общественную опасность. Прошу суд назначить семнадцать лет лишения свободы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_6"
  },
  "ch6_6": {
    "text": "Судья предоставила подсудимому последнее слово. Никита медленно поднялся со скамьи и подошел к микрофону за стеклом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch6_7"
  },
  "ch6_7": {
    "text": "— Я не прошу пощады... Я виноват. Мама, прости меня, если сможешь... Я только хотел спасти тебя от нищеты.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch6_8",
    "sfx": "typewriter"
  },
  "ch6_8": {
    "text": "Мать зарыдала в голос, закрыв лицо платком. Ваня сжал зубы до скрежета, чувствуя полное бессилие перед государственной машиной.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_9"
  },
  "ch6_9": {
    "text": "Суд удалился в совещательную комнату. Два бесконечных часа ожидания в душном коридоре.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_10"
  },
  "ch6_10": {
    "text": "— Встать, суд идет! — секретарь ударила ладонью по конторке.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_11"
  },
  "ch6_11": {
    "text": "— Именем Российской Федерации... Признать виновным по части 5 статьи 228.1 УК РФ...",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_12"
  },
  "ch6_12": {
    "text": "— Назначить наказание в виде 15 (пятнадцати) лет лишения свободы с отбыванием в исправительной колонии строгого режима в Пермском крае.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_dossier",
    "shake": true
  },
  "ch6_dossier": {
    "text": "Официальный обвинительный приговор суда вступил в законную силу. Ознакомьтесь с материалами уголовного дела.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_13",
    "document": "assets/backgrounds/document_nikita_228.png"
  },
  "ch6_13": {
    "text": "Пятнадцать лет. Вся юность, все мечты, всё будущее двадцатилетнего парня было запечатано гербовой печатью на казенном бланке.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_14"
  },
  "ch6_14": {
    "text": "Никита посмотрел сквозь бронестекло прямо в глаза Ване. На его губах появилось беззвучное движение: «Прости меня, брат...».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ch6_15"
  },
  "ch6_15": {
    "text": "Конвой надел на него наручники за спиной и повел по длинному кафельному коридору в подвальный накопитель.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_16"
  },
  "ch6_16": {
    "text": "На товарной станции уже формировался специальный вагон-автозак, отправляющийся на восток.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_17"
  },
  "ch6_17": {
    "text": "Стучали колеса на стрелках, гудел маневровый тепловоз в серых клочьях осеннего тумана.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_18"
  },
  "ch6_18": {
    "text": "Первый из четверых братьев по школьной парте рухнул в бездну тюремного ада.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch6_19"
  },
  "ch6_19": {
    "text": "Ваня стоял на перроне, сжимая в руке оставленный Никитой ключ от гаража. Впереди лежала Москва.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch7_start"
  },
  "ch7_start": {
    "text": "Осень 2020 года. Москва встречает ослепительным морем неоновых огней и ревом моторов представительских спорткаров.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_1",
    "bgm": "epic",
    "chapter": "ГЛАВА 7: СТОЛИЧНЫЙ МИРАЖ"
  },
  "ch7_1": {
    "text": "Стеклянные башни делового комплекса «Москва-Сити» пронзают низкие облака, сияя километровыми светодиодными фасадами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_2"
  },
  "ch7_2": {
    "text": "Ваня приехал на встречу с Асланом. Дела бренда IvanEnergy шли в гору, но трагедия Никиты незаживающей раной жгла душу.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_3"
  },
  "ch7_3": {
    "text": "Аслан встретил его у панорамного лифта башни «Федерация». Дорогой итальянский костюм, золотые часы Rolex, белоснежная улыбка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_4"
  },
  "ch7_4": {
    "text": "— Ваня, братишка! Добро пожаловать на вершину мира! — Аслан крепко обнял друга, пахнув селективным парфюмом.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_5",
    "sfx": "typewriter"
  },
  "ch7_5": {
    "text": "— Смотри вниз: люди отсюда кажутся муравьями! Я же говорил тебе тогда на школьной крыше, что возьму эту столицу за горло!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_6",
    "sfx": "typewriter"
  },
  "ch7_6": {
    "text": "Они поднялись на 62-й этаж в роскошные апартаменты с панорамным остеклением во всю стену.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_7"
  },
  "ch7_7": {
    "text": "Вокруг толпились молодые блогеры, модели в открытых платьях, операторы со стабилизаторами. Шампанское Cristal лилось рекой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_8"
  },
  "ch7_8": {
    "text": "Но Ваня с его цепким аналитическим взглядом сразу заметил фальшь. Улыбка Аслана была натянутой, пальцы судорожно сжимали бокал.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_9"
  },
  "ch7_9": {
    "text": "На трех смартфонах Аслана без умолку вспыхивали уведомления банковских приложений и сообщения с угрозами блокировки счетов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_10"
  },
  "ch7_10": {
    "text": "— Аслан, откуда у тебя аренда этих апартаментов? Это стоит полтора миллиона в месяц, — тихо спросил Ваня, отведя друга на балконную террасу.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch7_11",
    "sfx": "typewriter"
  },
  "ch7_11": {
    "text": "— Ой, брось, Вано! Партнерские контракты, рекламные интеграции онлайн-казино... Я на одной рефералке делаю по сотне тысяч баксов в неделю!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_12",
    "sfx": "typewriter"
  },
  "ch7_12": {
    "text": "— Аслан, это незаконно. Роскомнадзор и налоговая зачищают гемблинг-трафик со страшной силой.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch7_13",
    "sfx": "typewriter"
  },
  "ch7_13": {
    "text": "— Да плевать я хотел на их законы! В этой стране либо ты берешь всё наглостью, либо гниешь на дне, как Никитос!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_14",
    "sfx": "typewriter"
  },
  "ch7_14": {
    "text": "При упоминании Никиты лицо Аслана нервно передернулось. Он быстро налил себе полный бокал коньяка и выпил залпом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_15"
  },
  "ch7_15": {
    "text": "— Я вытащу его, Ваня. Вот подниму еще пару миллионов долларов — и найму адвокатов из Лондона. Мы всё решим!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_16",
    "sfx": "typewriter"
  },
  "ch7_16": {
    "text": "Но в его глазах читался только страх. Страх потерять этот роскошный, хрупкий карточный домик.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_17"
  },
  "ch7_17": {
    "text": "К Аслану подошел продюсер с планшетом: «Аслан, через пять минут совместный стрим с казино-рулеткой. Подписчики ждут розыгрыш».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_18"
  },
  "ch7_18": {
    "text": "Аслан натянул на лицо фирменную ослепительную улыбку: «Погнали делать историю! Ваня, устраивайся поудобнее, сейчас будет жара!».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch7_19"
  },
  "ch7_19": {
    "text": "Загорелись софиты. На экране вспыхнул счетчик онлайна: 150 000 зрителей в прямом эфире.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch7_20"
  },
  "ch7_20": {
    "text": "Никто из них не подозревал, что этот стрим станет началом сокрушительного падения с 62-го этажа.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_start"
  },
  "ch8_start": {
    "text": "Вечеринка в пентхаусе гремела до глубокой ночи. Басы сотрясали бронированное панорамное стекло.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 8: БАШНЯ «ФЕДЕРАЦИЯ»"
  },
  "ch8_1": {
    "text": "В разгар стрима на главном мониторе внезапно вспыхнул красный транспарант: «Ваш канал заблокирован навсегда за пропаганду азартных игр».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_2",
    "flash": true
  },
  "ch8_2": {
    "text": "Трансляция мгновенно оборвалась. Онлайн рухнул до нуля. В комнате повисла тяжелая тишина.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_3"
  },
  "ch8_3": {
    "text": "«Друзья» и блогеры переглянулись, тихо собрали свои вещи и один за другим покинули апартаменты.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_4"
  },
  "ch8_4": {
    "text": "Через двадцать минут в огромном пентхаусе не осталось никого, кроме Вани и Аслана.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_5"
  },
  "ch8_5": {
    "text": "Аслан остался сидеть на барной стойке, залпом допивая остатки дорогого виски прямо из горлышка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_6"
  },
  "ch8_6": {
    "text": "— Всё рухнуло, Ваня... — глухо выдавил он, глядя в темную бездну за стеклом. Его маска уверенного миллионера осыпалась прахом.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_7",
    "sfx": "typewriter"
  },
  "ch8_7": {
    "text": "— Что случилось? Ты же только что хвастался миллионными контрактами!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch8_8",
    "sfx": "typewriter"
  },
  "ch8_8": {
    "text": "— Счета арестованы. Рекламодатели требуют вернуть авансы и штраф в сорок миллионов рублей за срыв контрактов!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_9",
    "sfx": "typewriter"
  },
  "ch8_9": {
    "text": "— Сорок миллионов?! Аслан, откуда такие суммы?!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch8_10",
    "sfx": "typewriter"
  },
  "ch8_10": {
    "text": "— Я брал у теневых букмекеров предоплату на год вперед, чтобы оплатить этот чертов пентхаус и тачки для съемок!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_11",
    "sfx": "typewriter"
  },
  "ch8_11": {
    "text": "— Но у меня есть шанс вернуть всё за одну ночь, — глаза Аслана заблестели опасным маниакальным огнем. — Сегодня в закрытом VIP-клубе на Арбате игра на астрономические суммы. У меня есть безошибочная стратегия на рулетке!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_12",
    "sfx": "typewriter"
  },
  "ch8_12": {
    "text": "— Аслан, ты в своем уме?! В казино нет никаких стратегий, кроме разорения игрока! Остановись, мы найдем юристов, объявим банкротство!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch8_13",
    "sfx": "typewriter"
  },
  "ch8_13": {
    "text": "— Банкротство? Чтобы надо мной ржал весь интернет?! Нет! Либо я забираю банк этой ночью, либо мне незачем жить. Поехали со мной!",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch8_14",
    "sfx": "typewriter"
  },
  "ch8_14": {
    "text": "Аслан схватил кожаную куртку и выбежал к лифту. Ваня бросился следом, понимая, что оставить друга одного сейчас — значит обречь его на гибель.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_15"
  },
  "ch8_15": {
    "text": "Лифт с бешеной скоростью понес их вниз, к мокрым от дождя улицам ночной столицы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_16"
  },
  "ch8_16": {
    "text": "Такси мчалось по пустому Садовому кольцу, разрезая фарами плотный туман.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch8_17"
  },
  "ch8_17": {
    "text": "Впереди ждал Арбат — лабиринт переулков, где в подземельях вершились чужие судьбы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch9_start"
  },
  "ch9_start": {
    "text": "Подземный бункер под старинным особняком в переулках Нового Арбата. Закрытый элитный VIP-клуб для нелегальной игры на миллионные ставки.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 9: ЗЕРО И БЕЗДНА"
  },
  "ch9_1": {
    "text": "Хрустальные люстры отражаются в лакированном дереве рулетки. Зеленое сукно, тяжелый табачный дым и гробовая напряженная тишина.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_2"
  },
  "ch9_2": {
    "text": "В полутемных ложах сидят молчаливые люди в дорогих пальто — представители теневых ростовщиков и бандитов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_3"
  },
  "ch9_3": {
    "text": "Аслан дрожащими руками выставил на поле фишки на пять миллионов рублей. «Ставка на Черное». Шарик запрыгал по секторам... Красное 14. Проигрыш.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_4",
    "shake": true
  },
  "ch9_4": {
    "text": "По лицу Аслана градом покатился пот. Он подозвал ростовщика и подмахнул долговую расписку на пятнадцать миллионов рублей под залог несуществующей недвижимости.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_5"
  },
  "ch9_5": {
    "text": "— Всё на Зеро. Все пятнадцать миллионов — на одиночное Зеро! — сорвался на визг Аслан.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch9_choice_casino",
    "sfx": "typewriter"
  },
  "ch9_choice_casino": {
    "text": "Аслан поставил свою жизнь на один сектор рулетки. Решение Вани:",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "choices": [
      {
        "text": "Выкупить вексель Аслана за счет резервного капитала IvanEnergy (Ветка спасения Аслана)",
        "target": "ending_aslan_saved_1"
      },
      {
        "text": "Попытаться силой вырвать Аслана из-за стола рулетки",
        "target": "ch9_try_pull"
      },
      {
        "text": "Запустить колесо рулетки и довериться слепой фортуне (Интерактивная игра)",
        "target": "ch9_casino_minigame"
      }
    ]
  },
  "ch9_try_pull": {
    "text": "Ваня рванулся вперед, но два двухметровых охранника жестко преградили путь: «Не мешайте клиенту отдыхать».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_casino_minigame"
  },
  "ch9_casino_minigame": {
    "text": "Шарик запущен! Сердце замирает в груди, когда колесо рулетки решает судьбу Аслана на 15 000 000 рублей.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_wheel_spin",
    "minigame": "casino"
  },
  "ch9_wheel_spin": {
    "text": "Крупье запустил шарик из слоновой кости в обратную сторону. Время словно остановилось.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_6"
  },
  "ch9_6": {
    "text": "Тук... тук... тук... Шарик ударился о металлический дефлектор, проскочил мимо зеленого сектора «0» и глухо замер на Черном 11.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_7",
    "shake": true
  },
  "ch9_7": {
    "text": "— Ставки проиграны. Черное, одиннадцать, нечетное, — ледяным голосом объявил крупье, сгребая фишки в лоток.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_8"
  },
  "ch9_8": {
    "text": "Аслан пошатнулся, словно в него выстрелили в упор. Ростовщик в дорогом пальто неспешно поднялся с кресла, пряча расписку.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_9"
  },
  "ch9_9": {
    "text": "— До рассвета, Асланчик. Ровно до шести утра. Если денег не будет — долг заплатят твои родственники своими жизнями.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_10"
  },
  "ch9_10": {
    "text": "Охрана клуба вывела их через служебный выход на промозглый ночной Арбат.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_11"
  },
  "ch9_11": {
    "text": "Аслан шел по лужам на подгибающихся ногах, не разбирая дороги. В его глазах была пустота.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ch9_12"
  },
  "ch9_12": {
    "text": "— Поехали в Сити, Ваня... Мне нужно забрать вещи...",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_start",
    "sfx": "typewriter"
  },
  "ch10_start": {
    "text": "Пять часов утра. Башня «Федерация». За панорамным стеклом свирепствует ледяной столичный ливень, размывая огни дорог в мутные пятна.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_1",
    "bgm": "sadness",
    "chapter": "ГЛАВА 10: ПЕТЛЯ НА 62-М ЭТАЖЕ"
  },
  "ch10_1": {
    "text": "В огромном пентхаусе царила гробовая тишина. На мраморном полу валялись осколки бокалов, пустые бутылки и обрывки долговых расписок.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_2"
  },
  "ch10_2": {
    "text": "Аслан сидел на полу спиной к окну, обхватив руками колени. Телефон непрерывно жужжал от звонков коллекторов с угрозами расправы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_3"
  },
  "ch10_3": {
    "text": "Ваня лихорадочно обзванивал кредиторов и партнеров, пытаясь собрать залог, но до открытия межбанковских счетов в понедельник достать наличные было невозможно.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch10_4"
  },
  "ch10_4": {
    "text": "— Ваня... опусти трубку, — тихо и пугающе спокойно произнес Аслан.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_5",
    "sfx": "typewriter"
  },
  "ch10_5": {
    "text": "— Мы найдем выход! Я продам складские комплексы в Подмосковье! Держись!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch10_6",
    "sfx": "typewriter"
  },
  "ch10_6": {
    "text": "— Дело не в деньгах, Вано. Я пустой внутри. Я променял настоящую жизнь на фальшивые лайки и дешевые понты. Я предал всех, кто меня любил.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_7",
    "sfx": "typewriter"
  },
  "ch10_7": {
    "text": "— Помнишь школьную крышу? Тот закат... Мы ведь были счастливы тогда, когда у нас не было ни гроша... Передай маме, что я очень ее люблю.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_8",
    "sfx": "typewriter"
  },
  "ch10_8": {
    "text": "Аслан медленно встал и подошел к тяжелому шкафу в гардеробной. Он достал шелковый альпинистский трос, купленный когда-то для эффектных съемок на крыше.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_9"
  },
  "ch10_9": {
    "text": "— Ваня, свари мне кофе на дорожку. Как в школе варили в турке. Пожалуйста.",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ch10_10",
    "sfx": "typewriter"
  },
  "ch10_10": {
    "text": "Ваня на секунду отвернулся к кухонной стойке. Руки дрожали, рассыпая кофейные зерна по мрамору.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_11"
  },
  "ch10_11": {
    "text": "В этот миг сзади раздался резкий скрежет металлического крепежа и глухой стук опрокинутого дизайнерского стула.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_12",
    "shake": true
  },
  "ch10_12": {
    "text": "— АСЛАН, НЕТ!!! — дикий крик вырвался из груди Вани.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch10_13",
    "sfx": "typewriter",
    "shake": true
  },
  "ch10_13": {
    "text": "Ваня бросился вперед, но время превратилось в густую патоку. На массивной балке под потолком покачивался силуэт лучшего друга.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_14",
    "shake": true,
    "flash": true
  },
  "ch10_14": {
    "text": "Ваня судорожно схватился за ноги Аслана, пытаясь приподнять его тяжелое тело, пальцами рвал натянутый канат, сдирая ногти в мясо.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_15"
  },
  "ch10_15": {
    "text": "«Дыши! Дыши, черт тебя дери! Аслан, живи!» — хрипел Ваня, задыхаясь от собственных слез.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch10_16",
    "sfx": "typewriter"
  },
  "ch10_16": {
    "text": "Но пульс под ледяной шеей затих. Золотые часы Rolex на онемевшем запястье мерно отсчитывали секунды в вечность.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_17"
  },
  "ch10_17": {
    "text": "За панорамным окном разгорался холодный, сырой московский рассвет. Огромные небоскребы из стекла и стали казались гигантскими надгробными плитами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_18"
  },
  "ch10_18": {
    "text": "Прибывшая бригада реанимации и следственная группа лишь констатировали биологическую смерть.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_dossier"
  },
  "ch10_dossier": {
    "text": "Официальный протокол следственных органов по факту гибели в деловом комплексе «Москва-Сити».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_19",
    "document": "assets/backgrounds/document_aslan_city.png"
  },
  "ch10_19": {
    "text": "Следователь в сером плаще молча закрыл лицо погибшего простыней и протянул Ване протокол на подпись.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch10_20"
  },
  "ch10_20": {
    "text": "Второй из школьной четверки растворился в ночной темноте. Остались только двое.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_start"
  },
  "ch11_start": {
    "text": "2021 год. Гибель Аслана и срок Никиты окончательно сломали Исмаила. Его ирония превратилась в черную всепоглощающую ненависть ко всему миру.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 11: АМОРАЛЬНЫЙ ХАЙП"
  },
  "ch11_1": {
    "text": "Исмаил запустил радикальный стриминговый проект, начав проводить жестокие уличные треш-стримы и провокации.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_2"
  },
  "ch11_2": {
    "text": "Публичные оскорбления прохожих, провокации полиции, глумление над национальными и религиозными ценностями собирали миллионы просмотров озверевшей публики.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_3"
  },
  "ch11_3": {
    "text": "Его комната превратилась в мрачную цифровую студию: неоновые кольцевые лампы, микрофоны на пантографах и три монитора, залитые токсичным чатом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_4"
  },
  "ch11_4": {
    "text": "Донаты лились непрерывным потоком. За сто тысяч рублей зрители заставляли его жечь вещи, драться с бездомными и выкрикивать экстремистские лозунги.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_5"
  },
  "ch11_5": {
    "text": "Ваня разыскал Исмаила в подвальном помещении у Савеловского вокзала, где тот вел очередной полуночный эфир.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_6"
  },
  "ch11_6": {
    "text": "Исмаил сидел перед мерцающими мониторами в темных очках-авиаторах, яростно выкрикивая оскорбления в микрофон.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_7"
  },
  "ch11_7": {
    "text": "— Исмаил! Прекрати этот позор! — Ваня силой выдернул провод питания из системного блока. — Центр «Э» и ФСБ уже возбудили проверку! Тебя закроют на годы!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_8",
    "sfx": "typewriter"
  },
  "ch11_8": {
    "text": "— Да пусть закрывают! — захохотал Исмаил со слезами на глазах. — Никитос мотает пятнашку на лесоповале, Аслан разбился о тротуар... Чего мне бояться?!",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_9",
    "sfx": "typewriter"
  },
  "ch11_9": {
    "text": "— Это общество жрет чужую боль вместо попкорна! Я просто показываю им их собственное уродливое отражение!",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_10",
    "sfx": "typewriter"
  },
  "ch11_10": {
    "text": "— Ты разрушаешь себя, Исмаил! Ты торгуешь ядом, который разъедает твою душу!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_11",
    "sfx": "typewriter"
  },
  "ch11_11": {
    "text": "— А где была твоя душа, Ваня, когда Аслан влезал в петлю?! Где был твой чертов капитал IvanEnergy?! Никого из нас уже не вернуть!",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_12",
    "sfx": "typewriter"
  },
  "ch11_12": {
    "text": "Слова Исмаила полоснули по сердцу Вани острее бритвы. Ваня молча опустил голову.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_13"
  },
  "ch11_13": {
    "text": "— Уезжай за границу немедленно, — тихо сказал Ваня. — Я оплачу тебе перелет в Стамбул или Тбилиси прямо сегодня. У меня есть связи в консульстве.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_14",
    "sfx": "typewriter"
  },
  "ch11_14": {
    "text": "— Бежать? Ни за что. Я доиграю свою партию до конца, Ваня. Мой зритель ждет грандиозный финальный стрим.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_15",
    "sfx": "typewriter"
  },
  "ch11_15": {
    "text": "Исмаил достал из ящика стола ингалятор и с шумом вдохнул дозу сальбутамола. Его руки мелко дрожали от хронического недосыпа и нервного истощения.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_16"
  },
  "ch11_16": {
    "text": "— Завтра в полночь я выпущу ролик, который взорвет Рунет. Они надолго меня запомнят.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_17",
    "sfx": "typewriter"
  },
  "ch11_17": {
    "text": "— Одумайся... Ты не понимаешь, с кем играешь в эти игры.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_18",
    "sfx": "typewriter"
  },
  "ch11_18": {
    "text": "Исмаил отвернулся к окну, закуривая дешевую сигарету. Дым клубился в синем неоновом свете мониторов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch11_19"
  },
  "ch11_19": {
    "text": "— Уходи, Ваня. Не пачкай свой дорогой пиджак о мое дно.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch11_20",
    "sfx": "typewriter"
  },
  "ch11_20": {
    "text": "Ваня вышел на улицу под моросящий холодный дождь. Он знал, что этот разговор был их последней встречей на свободе.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "next": "ch12_start"
  },
  "ch12_start": {
    "text": "Утро вторника. Шесть часов ноль минут. Металлическая дверь квартиры Исмаила вылетела от сокрушительного удара гидравлического клина.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_1",
    "bgm": "tension",
    "shake": true,
    "flash": true,
    "chapter": "ГЛАВА 12: ОДИНОЧКА СИЗО-1"
  },
  "ch12_1": {
    "text": "— ФСБ РОССИИ! РАБОТАЕТ СПЕЦНАЗ! ВСЕМ ЛЕЖАТЬ НА ПОЛУ! РУКИ ЗА СПИНУ!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_2",
    "shake": true,
    "flash": true
  },
  "ch12_2": {
    "text": "Оперативная группа Главного управления по противодействию экстремизму МВД и бойцы СОБРа моментально нейтрализовали блогера.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_3"
  },
  "ch12_3": {
    "text": "Были изъяты все серверы, жесткие диски, флеш-накопители и студийное оборудование. Протокол обыска занял сорок страниц.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_4"
  },
  "ch12_4": {
    "text": "Спустя два часа автозак с затонированными решетками въехал во внутренний двор следственного изолятора СИЗО-1 «Матросская Тишина».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_5"
  },
  "ch12_5": {
    "text": "Тяжелые кованые ворота захлопнулись с могильным грохотом. Впереди открылся коридор с тусклыми лампочками за проволочной сеткой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_6"
  },
  "ch12_6": {
    "text": "Одиночная спецкамера номер 114. Серые облупленные стены, въевшийся запах хлорки и сырости, привинченная к полу железная шконка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_7"
  },
  "ch12_7": {
    "text": "Единственное крошечное окно под самым потолком перекрыто массивной наклонной решеткой — «ресничкой». Небо видно лишь тонкой серой полоской.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_8"
  },
  "ch12_8": {
    "text": "Здесь не было зрителей, комментариев, лайков и донатов. Лишь гулкие шаги надзирателя по галерее и лязг металлических глазков.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_9"
  },
  "ch12_9": {
    "text": "Вся показная бравада слетела с Исмаила в первые же часы одиночного заключения. В тишине сырой камеры его охватил удушающий ужас.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch12_10"
  },
  "ch12_10": {
    "text": "Приступ бронхиальной астмы начался внезапно. Лекарства изъяли при личном досмотре, влажный холод подвала сдавил бронхи железным обручем.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch12_11"
  },
  "ch12_11": {
    "text": "Исмаил колотил кулаками в бронированную дверь: «Дежурный! Ингалятор! Я задыхаюсь!».",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch12_12",
    "sfx": "typewriter",
    "shake": true
  },
  "ch12_12": {
    "text": "Глазок приоткрылся. Равнодушный голос конвоира отчеканил: «Прекратить шум в камере. Фельдшер придет на утреннем обходе».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_13"
  },
  "ch12_13": {
    "text": "Исмаил сполз по холодной стене на пол, жадно глотая спёртый пыльный воздух открытым ртом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_14"
  },
  "ch12_14": {
    "text": "В девять утра начался первый допрос. Следователь по особо важным делам положил перед ним пухлую папку с расшифровками стримов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_15"
  },
  "ch12_15": {
    "text": "— Статья 282 часть 2 пункт «а» УК РФ. Возбуждение ненависти либо вражды с использованием информационно-телекоммуникационных сетей организованной группой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_16"
  },
  "ch12_16": {
    "text": "— Срок по данной части — до шести лет колонии. Вы отдавали себе отчет, когда призывали к насилию в прямом эфире?",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_17"
  },
  "ch12_17": {
    "text": "Исмаил сидел, опустив голову на прикрученный к полу металлический стол. Его трясло крупной дрожью.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch12_18"
  },
  "ch12_18": {
    "text": "— Это был всего лишь контент... Розыгрыш... Перформанс для подписчиков...",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch12_19",
    "sfx": "typewriter"
  },
  "ch12_19": {
    "text": "— Суд оценит ваш «перформанс». Подписывайте протокол задержания.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch12_20"
  },
  "ch12_20": {
    "text": "Исмаил подписал бумаги непослушными, ледяными пальцами. Капкан захлопнулся намертво.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_start"
  },
  "ch13_start": {
    "text": "Судебный процесс в Мещанском районном суде Москвы проходил в закрытом режиме под усиленной охраной судебных приставов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_1",
    "bgm": "sadness",
    "chapter": "ГЛАВА 13: СТАТЬЯ 282 И ШИЗО"
  },
  "ch13_1": {
    "text": "Исмаил находился внутри стеклянной кабины. Синие круги под глазами, впалые щеки, искусанные в кровь губы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_2"
  },
  "ch13_2": {
    "text": "Судья монотонно зачитывала приговор: «Признать виновным... Назначить наказание в виде 5 (пяти) лет лишения свободы в колонии общего режима...».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_dossier",
    "shake": true
  },
  "ch13_dossier": {
    "text": "Учетная карточка осужденного Исмаила по статье 282 УК РФ.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_3",
    "document": "assets/backgrounds/document_ismail_282.png"
  },
  "ch13_3": {
    "text": "Местом отбывания наказания была определена исправительная колония ИК-3 в поселке Харп Ямало-Ненецкого автономного округа — за Полярным кругом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_4"
  },
  "ch13_4": {
    "text": "Ване удалось использовать все свои финансовые ресурсы и авторитет компании IvanEnergy, чтобы получить разрешение на короткое свидание перед отправкой по этапу.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_5"
  },
  "ch13_5": {
    "text": "Комната свиданий СИЗО. Двойное пуленепробиваемое стекло. Черные телефонные трубки с потрескивающим проводом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_6"
  },
  "ch13_6": {
    "text": "Исмаил поднял трубку. Его рука дрожала, дыхание через раз прерывалось свистящим кашлем.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_7"
  },
  "ch13_7": {
    "text": "— Ваня... Они отправляют меня в Заполярье. В поселок Харп. Там вечная мерзлота и минус пятьдесят зимой...",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_8",
    "sfx": "typewriter"
  },
  "ch13_8": {
    "text": "— Я найму лучшую коллегию адвокатов! Мы подадим кассационную жалобу, потребуем медосвидетельствования и перевода по состоянию здоровья!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_9",
    "sfx": "typewriter"
  },
  "ch13_9": {
    "text": "— Поздно, Вано... По 282-й статье кассации не удовлетворяют. Меня сожрут там. Климат, лагерный режим... Я не выживу.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_10",
    "sfx": "typewriter"
  },
  "ch13_10": {
    "text": "Исмаил прижал ладонь к холодному стеклу. Ваня прижал свою ладонь с другой стороны. Между их пальцами было пять сантиметров бронированного стекла.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_11"
  },
  "ch13_11": {
    "text": "— Помнишь школьную крышу? Как мы клялись вытаскивать друг друга?.. — по щеке Исмаила скатилась скупая слеза.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_12",
    "sfx": "typewriter"
  },
  "ch13_12": {
    "text": "— Помню. И я вытащу тебя, Исмаил! Слышишь?! Я потрачу всё до последней копейки, но вытащу!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_13",
    "sfx": "typewriter"
  },
  "ch13_13": {
    "text": "— Спасибо тебе, брат... Береги себя. Не позволяй этой алчной Москве пережевать и тебя тоже.",
    "speaker": "Исмаил",
    "speakerClass": "ismail",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "ch13_14",
    "sfx": "typewriter"
  },
  "ch13_14": {
    "text": "Конвоир за спиной Исмаила тронул его за плечо: «Свидание окончено. Трубку на базу».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_15"
  },
  "ch13_15": {
    "text": "Связь оборвалась. Исмаила увели вглубь тюремных катакомб.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_16"
  },
  "ch13_16": {
    "text": "Ваня стоял в пустой телефонной кабине, сжимая пластиковую трубку до хруста в пальцах.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_17"
  },
  "ch13_17": {
    "text": "Он вышел на улицу. Осенний московский дождь хлестал по лицу, смешиваясь со слезами отчаяния.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_18"
  },
  "ch13_18": {
    "text": "Никита — на каторге в пермских лесах. Аслан — в земле. Исмаил — на пути в полярную тундру.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_19"
  },
  "ch13_19": {
    "text": "Проклятие словно преследовало их выпуск 11-Б, методично выкашивая одного за другим.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch13_20"
  },
  "ch13_20": {
    "text": "Надвигалась ночь отправки столыпинского эшелона на Крайний Север.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_sizo_cell.jpg",
    "next": "ch14_start"
  },
  "ch14_start": {
    "text": "Ярославский вокзал. Ночь. Ледяная метель кружит над специальным закрытым тупиковым перроном.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_1",
    "bgm": "sadness",
    "chapter": "ГЛАВА 14: ТИШИНА НА СЕВЕРЕ"
  },
  "ch14_1": {
    "text": "Серый вагон-«столыпин» с решетчатыми окнами дымит закопченной трубой печки-буржуйки на лютом ветру.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_2"
  },
  "ch14_2": {
    "text": "Яростный лай караульных кавказских овчарок, автоматчики конвоя в тулупах: «Дистанция два шага! По вагонам бегом марш!».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_3"
  },
  "ch14_3": {
    "text": "Исмаил в казенном сером бушлате без пуговиц с биркой на груди поднялся по обледенелым ступенькам тамбура.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_4"
  },
  "ch14_4": {
    "text": "Тяжелая железная дверь вагона лязгнула на засов. Колеса тяжело тронулись по стрелкам, увозя заключенных на северо-восток.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_5"
  },
  "ch14_5": {
    "text": "Две недели бесконечного стука колес сквозь заснеженные таежные пустоши. Чай из ржавой кружки, кусок черствого хлеба и ледяные сквозняки.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_6"
  },
  "ch14_6": {
    "text": "Поселок Харп. Край земли. За колючей проволокой простиралась бескрайняя белая пустыня тундры под сполохами северного сияния.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_7"
  },
  "ch14_7": {
    "text": "Мороз минус сорок восемь градусов с ураганным полярным ветром обжигал легкие при каждом вдохе.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_8"
  },
  "ch14_8": {
    "text": "Слабые легкие Исмаила не выдержали арктических условий. Хроническая астма переросла в тяжелейшую двустороннюю пневмонию.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_9"
  },
  "ch14_9": {
    "text": "За малейшее нарушение лагерного распорядка его водворили в ШИЗО — штрафной изолятор, где бетонный пол покрывался коркой льда.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_10"
  },
  "ch14_10": {
    "text": "В ледяной камере, лишенный лекарств и надежды, доведенный до крайнего отчаяния и физического истощения, Исмаил принял свое последнее страшное решение.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_11"
  },
  "ch14_11": {
    "text": "Осколком металлической пуговицы от бушлата он вскрыл вены на левом запястье в темном углу штрафного изолятора.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_12",
    "shake": true,
    "flash": true
  },
  "ch14_12": {
    "text": "Алая теплая кровь медленно стекала на обледенелый бетон, дымясь на морозе...",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_13"
  },
  "ch14_13": {
    "text": "В предсмертном бреду ему чудился солнечный кабинет математики, запах тополиного пуха и голоса друзей: «Исмаил, бросай шутить, звенит звонок...».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "ch14_14"
  },
  "ch14_14": {
    "text": "Утром дежурный наряд санчасти лишь констатировал смерть от массивной кровопотери и переохлаждения.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch14_15"
  },
  "ch14_15": {
    "text": "Спустя месяц в центральный офис IvanEnergy в Москве фельдъегерь доставил сухое казенное заказное письмо с уведомлением.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch14_16"
  },
  "ch14_16": {
    "text": "«Извещаем, что осужденный Бейсембек И. скончался в ФКУ ИК-3 УФСИН России по ЯНАО. Тело захоронено на лагерном секторе №4».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch14_17"
  },
  "ch14_17": {
    "text": "Письмо выпало из онемевших пальцев Вани на полированный стол.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch14_18"
  },
  "ch14_18": {
    "text": "Трое. Трое из четверых мальчишек с выпускной фотографии ушли в небытие или сгнили заживо в лагерях.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch14_19"
  },
  "ch14_19": {
    "text": "Ваня закрыл лицо руками и впервые за много лет разрыдался в голос в пустом кабинете огромного небоскреба.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch14_20"
  },
  "ch14_20": {
    "text": "Он остался совершенно один в этом огромном, безжалостном мире.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_start"
  },
  "ch15_start": {
    "text": "2022 год. Штаб-квартира многомиллиардного холдинга IvanEnergy в ультрасовременном стеклянном небоскребе.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_1",
    "bgm": "epic",
    "chapter": "ГЛАВА 15: ИМПЕРИЯ IVANENERGY"
  },
  "ch15_1": {
    "text": "Просторный президентский кабинет на семьдесят первом этаже. Панорамное остекление, за которым раскинулась вся столица.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_2"
  },
  "ch15_2": {
    "text": "Ваня стоял у панорамного окна в идеально сидящем темно-синем костюме от Brioni. Его энергетический напиток стал брендом номер один в стране.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch15_3"
  },
  "ch15_3": {
    "text": "Десятки заводов, тысячи сотрудников, контракты с крупнейшими федеральными ритейлерами, колоссальные прибыли на банковских счетах.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_4"
  },
  "ch15_4": {
    "text": "Он добился абсолютно всего, о чем грезил наивным мальчишкой за школьной партой: признания, богатства, безграничной власти.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_5"
  },
  "ch15_5": {
    "text": "Но внутри него царила выжженная ледяная пустыня. Деньги не принесли ни капли счастья.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_6"
  },
  "ch15_6": {
    "text": "На массивном дубовом столе из мореного ясеня не было ни дипломов, ни престижных бизнес-премий. Стояла лишь одна-единственная фотография в серебряной рамке.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_7"
  },
  "ch15_7": {
    "text": "Четверо смеющихся парней на залитой золотым закатным солнцем крыше школы номер семь. Четыре судьбы, связанные детской клятвой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ch15_8"
  },
  "ch15_8": {
    "text": "Никита — мотает пятнадцатилетний строгий режим на лесоповале в тайге. Аслан — на Хованском кладбище под мраморной плитой. Исмаил — в безымянной могиле в вечной мерзлоте Харпа.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_9"
  },
  "ch15_9": {
    "text": "Каждая банка проданного энергетика казалась Ване кровавым укором совести. «Зачем мне всё это?..» — шептал он в тишину роскошного кабинета.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch15_10",
    "sfx": "typewriter"
  },
  "ch15_10": {
    "text": "В дверь тихо постучала секретарь: «Иван Андреевич, совет директоров в сборе. Обсуждается контракт на экспорт партии в Азию на полмиллиарда».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_11"
  },
  "ch15_11": {
    "text": "— Отмените совещание, — тихо и бесцветно ответил Ваня.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch15_12",
    "sfx": "typewriter"
  },
  "ch15_12": {
    "text": "— Но партнеры прилетели из Дубая! Они ждут в переговорной!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_13"
  },
  "ch15_13": {
    "text": "— Я сказал: отмените. И оставьте меня одного.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch15_14",
    "sfx": "typewriter"
  },
  "ch15_14": {
    "text": "Дверь бесшумно закрылась. Ваня подошел к окну и прижался горячим лбом к холодному стеклу.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_15"
  },
  "ch15_15": {
    "text": "Внизу бесконечными ручьями текли огни автомобилей. Миллионы чужих людей спешили по своим делам, не зная и не помня о тех, кого перетерло колесо судьбы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_16"
  },
  "ch15_16": {
    "text": "Ваня достал из кармана связку ключей. Среди них до сих пор висел старый ржавый ключ от школьного пожарного выхода, подаренный Никитой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_17"
  },
  "ch15_17": {
    "text": "«Кто первый поднимется — вытягивает остальных...» — эхом прозвучали в памяти слова Никиты.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_18"
  },
  "ch15_18": {
    "text": "«Я поднялся выше всех, пацаны... Но вытянуть никого из вас так и не смог», — горькая слеза скатилась по щеке молодого олигарха.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch15_19",
    "sfx": "typewriter"
  },
  "ch15_19": {
    "text": "На календаре наступил сентябрь 2022 года. В воздухе запахло порохом больших исторических потрясений.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch15_20"
  },
  "ch15_20": {
    "text": "Приближался день, когда Иван примет решение, навсегда перечеркнувшее его прошлую жизнь.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_start"
  },
  "ch16_start": {
    "text": "21 сентября 2022 года. В стране объявлен указ о частичной мобилизации.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_1",
    "bgm": "tension",
    "chapter": "ГЛАВА 16: ВОЕНКОМАТ И ВЫБОР"
  },
  "ch16_1": {
    "text": "Курьер специальной связи доставил в приемную Ивана повестку из военного комиссариата Центрального административного округа Москвы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_2"
  },
  "ch16_2": {
    "text": "«Предписывается явиться 23 сентября к 09:00 для уточнения учетных данных и прохождения медицинского освидетельствования».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_3"
  },
  "ch16_3": {
    "text": "Совет директоров и начальники юридических департаментов холдинга IvanEnergy немедленно собрались в кабинете руководителя.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_4"
  },
  "ch16_4": {
    "text": "— Иван Андреевич! Частный бизнес-джет Gulfstream G650 во Внуково-3 заправлен и готов к вылету в Стамбул через сорок минут!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_5"
  },
  "ch16_5": {
    "text": "— Мы оформим вам бронь стратегического системообразующего предприятия за два часа! У нас есть все основания для отсрочки!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_6"
  },
  "ch16_6": {
    "text": "— Вы управляете огромной корпорацией, создаете рабочие места! Вы не имеете права рисковать собой в окопах!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_7"
  },
  "ch16_7": {
    "text": "Ваня молча смотрел на разложенные перед ним загранпаспорта, открытые визы и проект распоряжения об отсрочке.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch16_8"
  },
  "ch16_8": {
    "text": "В памяти вспыхнул взгляд Никиты в зале суда: «Прости меня, брат...». Вспомнился Аслан, летящий в бездну с 62-го этажа. Вспомнился Исмаил, замерзающий в штрафном изоляторе Харпа.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_9"
  },
  "ch16_9": {
    "text": "Все они встретили свою жестокую судьбу лицом к лицу, не пытаясь откупиться деньгами или сбежать на чужбину.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_10"
  },
  "ch16_10": {
    "text": "«Если я сбегу сейчас в шелка Дубая или Стамбула... я навсегда потеряю право называться их братом. Я стану никем», — подумал Иван.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_choice_1"
  },
  "ch16_choice_1": {
    "text": "Главный нравственный выбор в жизни Ивана:",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "choices": [
      {
        "text": "«Я не побегу. Мои братья не прятались от судьбы — и я не стану прятаться за чужими спинами.»",
        "target": "ch16_accept"
      },
      {
        "text": "«Купить бронь и остаться руководить империей» (Попытка уклониться)",
        "target": "ch16_try_flee"
      }
    ]
  },
  "ch16_try_flee": {
    "text": "Ваня посмотрел на билет на самолет, но в памяти всплыли глаза пацанов на школьной крыше. Совесть обожгла сильнее огня: «Нет. Я не смогу жить с клеймом труса».",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch16_accept",
    "sfx": "typewriter"
  },
  "ch16_accept": {
    "text": "— Составьте генеральную доверенность на управление холдингом. Все дивиденды перечислять в благотворительный фонд помощи семьям погибших бойцов и детским домам.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch16_11",
    "sfx": "typewriter"
  },
  "ch16_11": {
    "text": "Ваня уверенным росчерком пера подписал документы о передаче активов в доверительное управление.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vanya_office.jpg",
    "next": "ch16_12"
  },
  "ch16_12": {
    "text": "В девять утра следующего дня он вошел в скрипучие двери районного военкомата с небольшим брезентовым рюкзаком за плечами.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_13"
  },
  "ch16_13": {
    "text": "В кабинете военного комиссара майор долго изучал анкету добровольца, поднимая удивленный взгляд на основателя IvanEnergy.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_14"
  },
  "ch16_14": {
    "text": "— Кожин Иван Андреевич... Миллиардер, предприниматель года... Сынок, ты в своем уме? Зачем тебе туда?",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_15"
  },
  "ch16_15": {
    "text": "— Я хочу быть там, где есть правда, товарищ майор. Оформляйте контракт добровольца.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch16_16",
    "sfx": "typewriter"
  },
  "ch16_16": {
    "text": "Медицинская комиссия: рост 176 см, вес 56 кг. Категория «А». Годен к строевой службе в мотострелковых подразделениях.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_17"
  },
  "ch16_17": {
    "text": "На плацу сборного пункта ему выдали комплект камуфляжной формы «Ратник», берцы и армейский жетон с личным номером.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_18"
  },
  "ch16_18": {
    "text": "Перед посадкой в эшелон Ваня бережно достал из кармана заламинированную школьную фотографию 11-Б и убрал ее во внутренний карман бронежилета, прямо возле сердца.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_19"
  },
  "ch16_19": {
    "text": "Военный эшелон под звуки марша «Прощание славянки» медленно тронулся на юг, увозя новобранцев навстречу огненному шторму.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch16_20"
  },
  "ch16_20": {
    "text": "Впереди была передовая Запорожского фронта. Малая Токмачка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_train_station.jpg",
    "next": "ch17_start"
  },
  "ch17_start": {
    "text": "Июль 2023 года. Запорожский фронт. Ореховское направление, передовые позиции в окрестностях села Малая Токмачка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_1",
    "bgm": "action",
    "chapter": "ГЛАВА 17: МАЛАЯ ТОКМАЧКА"
  },
  "ch17_1": {
    "text": "Выжженная серая земля, изрытая тысячами воронок от тяжелых фугасов. Остовы сгоревшей бронетехники и едкий пороховой дым под свинцовым грозовым небом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_2",
    "shake": true
  },
  "ch17_2": {
    "text": "Ваня — теперь сержант мотострелкового взвода с позывным «Студент». За десять месяцев непрерывных боев он закалился, превратившись в хладнокровного и опытного командира.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch17_3"
  },
  "ch17_3": {
    "text": "В окопе липкая жирная глина по колено. Непрерывный гул вражеских дронов-камикадзе в небе держит нервы натянутыми, как струны.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_4"
  },
  "ch17_4": {
    "text": "— «Студент», к нам гости! — крикнул наблюдатель с бруствера. — Из лесополосы выдвигается механизированная колонна! До трех танков и четыре БМП «Брэдли»!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_5",
    "shake": true
  },
  "ch17_5": {
    "text": "Снаряды калибра 155 мм начали вспахивать бруствер опорного пункта. Взрывы поднимали в воздух тонны черной земли, засыпая бойцов комьями глины.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_6",
    "shake": true,
    "flash": true
  },
  "ch17_6": {
    "text": "— Отделение, к бою! Расчеты ПТУР — на позиции! Пехоту отсекать пулеметным огнем! — скомандовал Ваня, передергивая затвор автомата АК-12.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch17_7",
    "sfx": "typewriter"
  },
  "ch17_7": {
    "text": "Завязался яростный бой на дистанции ста пятидесяти метров. Пулеметные очереди ссекали ветви деревьев, осколки со звоном рикошетили от танковой брони.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_8",
    "shake": true
  },
  "ch17_8": {
    "text": "Головной танк противника подорвался на минном шлагбауме, взметнув столб черного дыма. Второй был поражен точным выстрелом расчета гранатомета.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_9",
    "shake": true,
    "flash": true
  },
  "ch17_9": {
    "text": "Но штурмовая пехота противника при поддержке кассетных боеприпасов продолжала накатывать волнами, пытаясь окружить опорный пункт с флангов.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_10"
  },
  "ch17_10": {
    "text": "Связь с командным пунктом полка прервалась — осколком мины перебило выносную антенну радиостанции.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_radio_minigame"
  },
  "ch17_radio_minigame": {
    "text": "Радиостанция Р-168 залита шумом и помехами. Срочно настройте частоту на 142.8 МГц, чтобы восстановить связь с дивизионом артиллерии!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_11",
    "minigame": "radio"
  },
  "ch17_11": {
    "text": "«...Я Волга-7! Назовите координаты! Дивизион готов открыть заградительный огонь!...» — прорвался сквозь треск эфира долгожданный голос комбата.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_12"
  },
  "ch17_12": {
    "text": "— Я «Студент»! Координаты квадрата 47-32! Накройте посадки беглым огнем! Срочно!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch17_13",
    "sfx": "typewriter"
  },
  "ch17_13": {
    "text": "Шквал реактивных снарядов РСЗО накрыл наступающие порядки. Земля дрожала, словно при девятибалльном землетрясении.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_14",
    "shake": true,
    "flash": true
  },
  "ch17_14": {
    "text": "Атака захлебнулась, остатки бронегруппы начали откат в глубину посадок. Но вражеская артиллерия в ответ открыла прицельный огонь по позиции Ивана.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_15",
    "shake": true
  },
  "ch17_15": {
    "text": "Боекомплект отделения был практически израсходован. Трое бойцов получили тяжелые ранения.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_16"
  },
  "ch17_16": {
    "text": "— Командир, они подтягивают свежие резервы! Нам не удержать траншею без боеприпасов!",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch17_17"
  },
  "ch17_17": {
    "text": "Ваня посмотрел на раненых пацанов — таких же молодых, какими они были с Никитой, Асланом и Исмаилом на школьной крыше.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch17_choice_radio"
  },
  "ch17_choice_radio": {
    "text": "Решающий момент боя под Малой Токмачкой:",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "choices": [
      {
        "text": "Приказать отделению эвакуировать раненых во вторую траншею, а самому остаться на рации и вызвать огонь дивизиона на себя (Путь подвига)",
        "target": "ending_true_brotherhood_1"
      },
      {
        "text": "Укрыться в заглубленном блиндаже под массированным артобстрелом (Каноничный путь)",
        "target": "ch18_start"
      }
    ]
  },
  "ch18_start": {
    "text": "Массированный артиллерийский налет противника превратил передовую траншею в сплошное море огня и дыма.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_1",
    "bgm": "climax",
    "shake": true,
    "flash": true,
    "chapter": "ГЛАВА 18: БЕЗ ВЕСТИ ПРОПАВШИЙ"
  },
  "ch18_1": {
    "text": "Тяжелый бетонобойный снаряд калибра 152 мм разорвался прямо на трехслойном дубовом накате центрального блиндажа.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_2",
    "shake": true,
    "flash": true
  },
  "ch18_2": {
    "text": "Ослепительная огненная вспышка, чудовищный грохот рухнувших вековых бревен и глухая, звенящая тишина контузии.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_3",
    "shake": true
  },
  "ch18_3": {
    "text": "Многотонная толща земли погребла под собой командирский отсек.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_4"
  },
  "ch18_4": {
    "text": "Сквозь мутную пелену оседающей пыли Ваня видел тонкий солнечный луч, с трудом пробивающийся сквозь завал.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch18_5"
  },
  "ch18_5": {
    "text": "Дышать становилось всё труднее. Земля давила на грудь с неодолимой силой, но боли уже не было.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_6"
  },
  "ch18_6": {
    "text": "Ослабевшими, испачканными в копоти пальцами Ваня нащупал во внутреннем кармане бронежилета ту самую фотографию.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_7"
  },
  "ch18_7": {
    "text": "Сквозь трещины заламинированной пленки на него смотрели трое его братьев: дерзкий Никита с зажигалкой, сияющий Аслан и ироничный Исмаил.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ch18_8"
  },
  "ch18_8": {
    "text": "Теплый закатный свет на их лицах казался неземным, словно струящимся из другого, чистого и непорочного мира.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ch18_9"
  },
  "ch18_9": {
    "text": "— Я иду к вам, братья... — прошептал Ваня пересохшими губами, и на его лице впервые за долгие годы появилась спокойная, умиротворенная улыбка.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch18_10",
    "sfx": "typewriter"
  },
  "ch18_10": {
    "text": "— Наша вахта... окончена...",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ch18_11",
    "sfx": "typewriter"
  },
  "ch18_11": {
    "text": "Веки медленно сомкнулись. Оглушительный грохот войны затих, сменившись шелестом молодых березовых листьев на школьном дворе.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "ch18_12"
  },
  "ch18_12": {
    "text": "После боя поисковые группы и сослуживцы несколько суток вручную разбирали воронки и завалы на высоте.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_13"
  },
  "ch18_13": {
    "text": "Были найдены фрагменты оружия, разбитая радиостанция и оплавленная каска командира отделения.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_14"
  },
  "ch18_14": {
    "text": "Тело сержанта Кожина обнаружить не удалось — плотный артобстрел буквально перемешал землю с металлом.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_dossier"
  },
  "ch18_dossier": {
    "text": "Официальное извещение Министерства обороны РФ о судьбе гвардии сержанта Ивана.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_15",
    "document": "assets/backgrounds/document_vanya_tokmachka.png"
  },
  "ch18_15": {
    "text": "«Гвардии сержант Кожин Иван Андреевич, рост 176 см, вес 56 кг. При выполнении боевого задания в районе населенного пункта Малая Токмачка пропал без вести».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ch18_16"
  },
  "ch18_16": {
    "text": "Четвертый и последний из неразлучной школьной четверки выпуска 11-Б растворился в вечности.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "epilogue_start"
  },
  "epilogue_start": {
    "text": "25 мая 2024 года. Ровно десять лет спустя после того памятного последнего звонка.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_1",
    "bgm": "intro",
    "chapter": "ЭПИЛОГ: ПАМЯТЬ 11-Б"
  },
  "epilogue_1": {
    "text": "Теплый весенний вечер. В старом школьном дворе снова кружится невесомый тополиный пух, мягко устилая потрескавшийся асфальт.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_2"
  },
  "epilogue_2": {
    "text": "Здание школы пережило капитальный ремонт благодаря средствам благотворительного фонда IvanEnergy, но кабинет математики на третьем этаже остался нетронутым.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_3"
  },
  "epilogue_3": {
    "text": "Те же высокие дубовые окна, те же пыльные жалюзи, сквозь которые льются густые золотые лучи закатного солнца.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_4"
  },
  "epilogue_4": {
    "text": "На широкой классной доске до сих пор бережно сохранена надпись белым мелом: «Выпуск 11-Б. Мы сделали это!». Под ней висят защитные стеклянные экраны музея школы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_5"
  },
  "epilogue_5": {
    "text": "Задняя парта у окна пуста. На полированной деревянной поверхности видны едва различимые нацарапанные перочинным ножом инициалы четырех друзей.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_6"
  },
  "epilogue_6": {
    "text": "Ветер с крыши треплет шторы. И в этом мягком янтарном сиянии заката в воздухе словно проявляются четыре знакомых силуэта в темно-бордовых школьных пиджаках.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "epilogue_7"
  },
  "epilogue_7": {
    "text": "Вот Никита с дерзкой мальчишеской улыбкой со щелчком открывает зажигалку Zippo, мечтая о свободе.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "epilogue_8"
  },
  "epilogue_8": {
    "text": "Вот Аслан с блеском в глазах хвастается грандиозными планами покорения сияющей огнями столицы.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "epilogue_9"
  },
  "epilogue_9": {
    "text": "Вот Исмаил в своих темных очках едко и остроумно подначивает друзей, вызывая искренний общий хохот.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_ismail_clean.png",
    "charPos": "sprite-center",
    "next": "epilogue_10"
  },
  "epilogue_10": {
    "text": "И Ваня, степенно поправляя золотую оправу очков, захлопывает исписанную блокнотную тетрадь: «Мы всё сможем, пацаны. Мы никогда не бросим друг друга».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "epilogue_11"
  },
  "epilogue_11": {
    "text": "Они снова вместе. Вне времени, вне жестоких законов взрослого мира, вне тюремных решеток, долговых ям и огненных воронок передовой.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "epilogue_12"
  },
  "epilogue_12": {
    "text": "Навсегда семнадцатилетние выпускники 11-Б на залитой закатным солнцем крыше школы, перед которыми открыт весь бесконечный мир.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "epilogue_13"
  },
  "epilogue_13": {
    "text": "Где-то далеко в пустом школьном коридоре эхом раздается звон медного колокольчика — последний звонок юности, зовущий в вечность.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "epilogue_14"
  },
  "epilogue_14": {
    "text": "Их жизни сгорели быстро и ярко, как падающие звезды на майском небосклоне, но их дружба оказалась сильнее самой смерти.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "game_over"
  },
  "game_over": {
    "text": "КОНЕЦ ИСТОРИИ. Спасибо за прохождение интерактивной новеллы «ПОСЛЕДНИЙ ВЫПУСК [REMASTERED: ANIME EDITION]».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "choices": [
      {
        "text": "Начать сначала (Главное меню)",
        "target": "prologue_start"
      },
      {
        "text": "Попробовать спасти Никиту (Перейти к развилке в гараже)",
        "target": "ch3_choice_lock"
      },
      {
        "text": "Попробовать выкупить долг Аслана (Перейти к развилке в казино)",
        "target": "ch9_choice_casino"
      }
    ],
    "chapter": "ФИНАЛ"
  },
  "ending_nikita_rehab_1": {
    "text": "Ваня молча подошел к верстаку, сгреб все пакеты с отравой в железную бочку и плеснул растворителем.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ending_nikita_rehab_2",
    "bgm": "tension",
    "chapter": "КОНЦОВКА: СПАСЕНИЕ НИКИТЫ"
  },
  "ending_nikita_rehab_2": {
    "text": "— Что ты творишь?! Они убьют нас! — закричал Никита, пытаясь броситься к бочке.",
    "speaker": "Никита",
    "speakerClass": "nikita",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "next": "ending_nikita_rehab_3",
    "sfx": "typewriter"
  },
  "ending_nikita_rehab_3": {
    "text": "Чирк зажигалки. Огонь взметнулся к потолку, сжигая яд в пепел.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "next": "ending_nikita_rehab_4",
    "shake": true,
    "flash": true
  },
  "ending_nikita_rehab_4": {
    "text": "— Я перевел два миллиона рублей куратору с корпоративного счета IvanEnergy. Долг закрыт. А тебя я прямо сейчас увожу в закрытую клинику на Алтае.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_garages_night.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_nikita_rehab_5",
    "sfx": "typewriter"
  },
  "ending_nikita_rehab_5": {
    "text": "Через два года тяжелейшей реабилитации и лечения в горах Алтая Никита полностью победил зависимость и вернулся к жизни.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "next": "ending_nikita_rehab_final",
    "bgm": "epic"
  },
  "ending_nikita_rehab_final": {
    "text": "Никита возглавил спортивную школу бокса для трудных подростков в родном городе, спасая сотни мальчишек от страшной судьбы, в которую едва не рухнул сам.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_nikita_clean.png",
    "charPos": "sprite-left",
    "choices": [
      {
        "text": "Вернуться в главное меню",
        "target": "prologue_start"
      }
    ],
    "chapter": "КОНЦОВКА: СПАСЕНИЕ НИКИТЫ"
  },
  "ending_aslan_saved_1": {
    "text": "— Стойте! — Ваня решительно шагнул вперед и положил на сукно перед ростовщиками подписанный договор залога двадцати процентов акций IvanEnergy.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ending_aslan_saved_2",
    "bgm": "sadness",
    "chapter": "КОНЦОВКА: ВЫКУП АСЛАНА"
  },
  "ending_aslan_saved_2": {
    "text": "— Здесь обеспечение на тридцать миллионов рублей. Долг Аслана закрыт в полном объеме прямо сейчас. Верните его расписку.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_aslan_saved_3",
    "sfx": "typewriter"
  },
  "ending_aslan_saved_3": {
    "text": "Ростовщик внимательно проверил печати и кивнул охране: «Вексель погашен. Забирайте своего друга и чтобы ноги вашей не было в клубе».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_vip_casino.jpg",
    "next": "ending_aslan_saved_4"
  },
  "ending_aslan_saved_4": {
    "text": "На мокрой улице под осенним ливнем Аслан опустился на колени перед Ваней, рыдая: «Ваня... Ты отдал треть своего бизнеса ради меня... Зачем?!».",
    "speaker": "Аслан",
    "speakerClass": "aslan",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "next": "ending_aslan_saved_5",
    "sfx": "typewriter"
  },
  "ending_aslan_saved_5": {
    "text": "— Затем, что мы давали клятву на школьной крыше, дурак, — Ваня поднял его за плечи. — Завтра ты уезжаешь из Москвы навсегда.",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_moscow_city.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_aslan_saved_final",
    "sfx": "typewriter"
  },
  "ending_aslan_saved_final": {
    "text": "Аслан вернулся в родной городок, удалил соцсети и открыл маленькую уютную пекарню. Он больше никогда не надевал костюм за миллион, но обрел душевный покой и настоящую семью.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_sunset.jpg",
    "char": "assets/characters/anime_aslan_clean.png",
    "charPos": "sprite-right",
    "choices": [
      {
        "text": "Вернуться в главное меню",
        "target": "prologue_start"
      }
    ],
    "bgm": "epic",
    "chapter": "КОНЦОВКА: ВЫКУП АСЛАНА"
  },
  "ending_true_brotherhood_1": {
    "text": "— Всему отделению — немедленный отход во вторую траншею! Эвакуировать раненых! Я остаюсь на связи и вызываю огонь артиллерии на себя!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_true_brotherhood_2",
    "bgm": "climax",
    "sfx": "typewriter",
    "shake": true,
    "chapter": "ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б"
  },
  "ending_true_brotherhood_2": {
    "text": "Бойцы под прикрытием дымовых гранат вынесли раненых товарищей. Ваня остался один в полуразрушенном капонире с зажатой в руке тангентой рации.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ending_true_brotherhood_3"
  },
  "ending_true_brotherhood_3": {
    "text": "— Батарея, я «Студент»! Координаты квадрата 47-31, залп всего дивизиона беглым! Накройте всю высоту прямо сейчас!",
    "speaker": "Ваня",
    "speakerClass": "vanya",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_true_brotherhood_4",
    "sfx": "typewriter",
    "shake": true
  },
  "ending_true_brotherhood_4": {
    "text": "Огненный шквал десятков реактивных снарядов накрыл высоту, сметая наступающие порядки противника.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ending_true_brotherhood_5",
    "shake": true,
    "flash": true
  },
  "ending_true_brotherhood_5": {
    "text": "Чудом выжившего под рухнувшим перекрытием Ивана откопали разведчики после завершения боя. Тяжелые контузии, орден Мужества и месяцы военных госпиталей.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_battlefield.jpg",
    "next": "ending_true_brotherhood_6"
  },
  "ending_true_brotherhood_6": {
    "text": "После демобилизации Иван передал всё управление компанией IvanEnergy благотворительному фонду «Братство 11-Б».",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ending_true_brotherhood_7"
  },
  "ending_true_brotherhood_7": {
    "text": "Фонд восстановил родную школу, открыл бесплатные спортивные комплексы для сотен детей и создал вечный музей памяти выпускников 11-Б.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "next": "ending_true_brotherhood_8"
  },
  "ending_true_brotherhood_8": {
    "text": "Каждый год 25 мая Иван поднимается на крышу школы. Теплый весенний ветер треплет его волосы. Он знает: их братство оказалось сильнее самой смерти.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "char": "assets/characters/anime_vanya_clean.png",
    "charPos": "sprite-center",
    "next": "ending_true_brotherhood_final"
  },
  "ending_true_brotherhood_final": {
    "text": "ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б. Настоящее братство живет вечно в сердцах тех, кто помнит.",
    "speaker": "Повествователь",
    "speakerClass": "narrator",
    "bg": "assets/backgrounds/bg_anime_school_roof.jpg",
    "choices": [
      {
        "text": "Начать сначала (Главное меню)",
        "target": "prologue_start"
      }
    ],
    "bgm": "epic",
    "chapter": "ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б"
  }
};

if (typeof window !== 'undefined') {
  window.STORY_DATA = STORY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORY_DATA;
}
