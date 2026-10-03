# -*- coding: utf-8 -*-
"""
Full Story Generator for The Boys Remastered: Anime Edition
Generates 450+ scenes covering all 18 chapters, prologue, epilogue, and branches.
"""
import json
import os
import sys

def generate_story():
    s = {}

    def add(id, text, speaker="Повествователь", speaker_class="narrator", bg="assets/backgrounds/bg_anime_school_sunset.jpg",
            char=None, char_pos="sprite-center", next_id=None, choices=None, bgm=None, sfx=None,
            shake=False, flash=False, document=None, chapter=None):
        scene = {
            "text": text,
            "speaker": speaker,
            "speakerClass": speaker_class,
            "bg": bg
        }
        if char:
            scene["char"] = char
            scene["charPos"] = char_pos
        if next_id:
            scene["next"] = next_id
        if choices:
            scene["choices"] = choices
        if bgm:
            scene["bgm"] = bgm
        if sfx:
            scene["sfx"] = sfx
        if shake:
            scene["shake"] = True
        if flash:
            scene["flash"] = True
        if document:
            scene["document"] = document
        if chapter:
            scene["chapter"] = chapter
        s[id] = scene

    # -------------------------------------------------------------
    # ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК (Scenes 1-22)
    # -------------------------------------------------------------
    add("prologue_start", 
        "25 мая. За высокими стрельчатыми окнами старой школы шумит ласковый предзакатный ветер. В воздухе кружится невесомый тополиный пух, мягко оседая на потрескавшийся асфальт.",
        bgm="intro", chapter="ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК", next_id="prologue_1")
    add("prologue_1", 
        "Кабинет математики на третьем этаже залит теплым янтарным сиянием заката. Солнечные лучи пробиваются сквозь пыльные жалюзи, чертя на партах золотые полосы.", next_id="prologue_2")
    add("prologue_2", 
        "Все одноклассники уже разошлись — кто-то примеряет наряды к ночному банкету, кто-то прячет вино у школьного стадиона. Только мы четверо остались сидеть на задней парте.", next_id="prologue_3")
    add("prologue_3", 
        "На широкой доске белым мелом размашисто выведено: «Выпуск 11-Б. Мы сделали это!». Одиннадцать долгих лет пролетели словно один миг.", next_id="prologue_4")
    add("prologue_4", 
        "— Ну что, братья... Вот и финишная прямая, — Ваня поправляет очки в золотой оправе и закрывает свой пухлый блокнот с бизнес-расчетами. — Завтра аттестаты, а дальше — взрослая жизнь.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_5")
    add("prologue_5", 
        "Его бордовый форменный пиджак сидит идеально. Ваня всегда был среди нас стратегом — тем, кто умел превращать хаос в четкие графики и формулы.", next_id="prologue_6")
    add("prologue_6", 
        "— Да к черту эти сопли! — Никита со смехом чиркает серебряной зажигалкой. Его пиджак распахнут настежь, обнажая черную футболку и массивную серебряную цепь.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_7")
    add("prologue_7", 
        "— Меня эти облезлые стены и нудные поучения физички достали еще в девятом! Наконец-то свобода! Будем жить по собственным правилам, а не по звонку.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_8")
    add("prologue_8", 
        "— Свобода без купюр в кармане, Никитос — это просто красивая нищета на свежем воздухе, — лениво усмехается Аслан, поправляя стильную прическу в зеркале телефона.",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_9")
    add("prologue_9", 
        "— Я через месяц пакую чемоданы и рву в Москву. Блогинг, стриминг, многомиллионные охваты. Через пару лет сниму пентхаус на шестидесятом этаже в Сити и буду смотреть на всех сверху вниз!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_10")
    add("prologue_10", 
        "— Главное, чтобы на шестидесятом этаже у тебя интернет не отрубило за неуплату, столичный магнат, — ехидно бросает Исмаил, протирая тонированные очки-авиаторы.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_11")
    add("prologue_11", 
        "Исмаил — гений цифровой иронии. Пока другие учили обществознание, он администрировал новостные паблики и тестировал провокационные вирусные форматы.", next_id="prologue_12")
    add("prologue_12", 
        "— В современном мире правит не пафос, а охваты и шок-контент, — замечает Исмаил. — Тот, кто держит эмоции зрителя за горло, правит цифровым миром.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_13")
    add("prologue_13", 
        "— А ты сам чем займешься, Вано? — Никита толкает Ваню в плечо. — Неужели пойдешь перекладывать чужие платежки в унылый банк за тридцать тысяч?",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_14")
    add("prologue_14", 
        "— Нет. Я построю бренд IvanEnergy, — спокойно отвечает Ваня. — Энергетические напитки, сеть логистики по всей стране. Это реальное производство, осязаемый продукт.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_15")
    add("prologue_15", 
        "— Ого, целый олигарх растет! — смеется Аслан, хлопая Ваню по плечу. — Запомни этот день: когда будешь делить дивиденды, мы первые в очереди!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_16")
    add("prologue_16", 
        "— Хватит пылиться в классе, мужики, — говорит Никита, вынимая ключ. — Я подрезал у завхоза ключ от пожарного люка на крышу. Пошли встречать закат!",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_17")
    add("prologue_17", 
        "Железная створка люка со скрипом поддается, выпуская нас на широкую рубероидную крышу школы.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_18")
    add("prologue_18", 
        "Перед нами расстилается весь наш провинциальный город: хрущевки, зеленые тополя, петляющая лента реки и дымы далеких заводов в алом пламени заката.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_19")
    add("prologue_19", 
        "Ветер треплет полы школьных пиджаков. В этот вечер кажется, что мир бесконечен и ничто не сможет сломить нас.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_20")
    add("prologue_20", 
        "— Давайте поклянемся, — тихо произносит Ваня, глядя на горизонт. — Куда бы нас ни раскидала жизнь, мы никогда не бросим друг друга в беде.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_school_roof.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_choice_1")
    add("prologue_choice_1", 
        "Как скрепить нерушимую клятву школьного братства на закатной крыше?",
        bg="assets/backgrounds/bg_anime_school_roof.jpg",
        choices=[
            {"text": "«Клянемся! Один за всех — и до самого конца!» (Искренняя клятва)", "target": "prologue_oath_solemn"},
            {"text": "«Кто первым поднимется — вытягивает остальных!» (Прагматичный договор)", "target": "prologue_oath_pragmatic"}
        ])
    add("prologue_oath_solemn", 
        "Мы сжимаем руки в один крепкий замок. Четыре ладони. Четыре судьбы, переплетенные за школьными партами.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")
    add("prologue_oath_pragmatic", 
        "Никита с азартом хлопает сверху по нашим ладоням: «Заметано! Кто пробился наверх — держит трос для остальных!».",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")
    add("prologue_21", 
        "В тот вечер ни один из нас не подозревал, какие чудовищные испытания и пропасти приготовила нам взрослая жизнь...",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ch1_start")

    # -------------------------------------------------------------
    # ГЛАВА 1: ПЕРВЫЕ ТРЕЩИНЫ (Scenes 23-44)
    # -------------------------------------------------------------
    add("ch1_start", 
        "Июнь прошел в праздничном угаре выпускных, но уже к середине лета беззаботная юность сменилась суровой взрослой реальностью.",
        bgm="intro", chapter="ГЛАВА 1: ПЕРВЫЕ ТРЕЩИНЫ", bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ch1_1")
    add("ch1_1", 
        "Ваня успешно поступил на бюджет факультета международных экономических отношений в Москве и сутками штудировал учебники в университетской библиотеке.", next_id="ch1_2")
    add("ch1_2", 
        "Аслан занял крупную сумму у родни, снял угол в Мытищах и начал штурмовать соцсети короткими провокационными роликами.", next_id="ch1_3")
    add("ch1_3", 
        "Исмаил оборудовал в подвале родительского дома полуподпольную студию со звукоизоляцией из коробок от яиц и засел за видеомонтаж.", next_id="ch1_4")
    add("ch1_4", 
        "И только Никита остался в родном захолустье. Без связей, без денег и без понимания, куда приложить свою кипучую силу.", next_id="ch1_5")
    add("ch1_5", 
        "Он устроился на круглосуточную автомойку у объездной дороги. Смены по двенадцать часов, ледяная вода, разъедающая пальцы химия и вечно орущий бригадир.", next_id="ch1_6")
    add("ch1_6", 
        "Вечерами, падая на старый диван от дикой усталости, Никита листал ленту в телефоне. Там сверкала другая жизнь.", next_id="ch1_7")
    add("ch1_7", 
        "Аслан позировал на фоне дорогих спорткаров в Москва-Сити с коктейлями в руках. Исмаил праздновал первые сто тысяч подписчиков на YouTube.", next_id="ch1_8")
    add("ch1_8", 
        "Ваня делился фотографиями с закрытых студенческих бизнес-форумов и лекций топ-менеджеров.", next_id="ch1_9")
    add("ch1_9", 
        "— Вано, вы там все в шелках купаетесь, — хрипел Никита в трубку во время редких телефонных разговоров. — А у меня мать плачет над рецептами из аптеки.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch1_10")
    add("ch1_10", 
        "— Никита, потерпи немного, — пытался успокоить его Ваня. — Я запущу производство первой партии напитка, встану на ноги и сразу заберу тебя в Москву!",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch1_11")
    add("ch1_11", 
        "— Легко рассуждать о терпении, когда в кармане стипендия и столичные перспективы, — ядовито огрызался Никита. — Мне деньги нужны сегодня. Завтра отключат свет за долги.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch1_12")
    add("ch1_12", 
        "В голосе Никиты всё отчетливее звучали незнакомые ноты безысходности и холодной зависти к успехам друзей.", next_id="ch1_13")
    add("ch1_13", 
        "Однажды дождливым октябрьским вечером на мойку заехал черный немецкий седан с наглухо тонированными стеклами без номеров.", next_id="ch1_14")
    add("ch1_14", 
        "Никита вымыл кузов до зеркального блеска. Водитель — плотный мужчина с шрамом на подбородке — протянул ему пятитысячную купюру.", next_id="ch1_15")
    add("ch1_15", 
        "— Сдачи не надо, парень. Вижу, хватка у тебя железная. Не надоело здесь за гроши с тряпкой горбатиться?", next_id="ch1_16")
    add("ch1_16", 
        "— А где платят больше? — угрюмо буркнул Никита, сжимая купюру в мокрой ладони.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch1_17")
    add("ch1_17", 
        "— В правильных местах. Есть тема с доставкой ценных посылок по тайникам. За одну ночь можно поднять больше, чем ты зарабатываешь тут за месяц.", next_id="ch1_18")
    add("ch1_18", 
        "Мужчина протянул Никите картонную визитку с выбитым Telegram-ником: «Шторм. Обращайся, если яйца есть».", next_id="ch1_19")
    add("ch1_19", 
        "Никита долго смотрел вслед уезжающей машине. В кармане лежали неоплаченные счета матери за операцию. Решение созрело само собой.", next_id="ch1_20")
    add("ch1_20", 
        "Он достал телефон и набрал первое сообщение: «Я от Шторма. Готов работать». Врата в преисподнюю распахнулись.", next_id="ch2_start")

    # -------------------------------------------------------------
    # ГЛАВА 2: ТЕНЬ ЗА ГАРАЖАМИ (Scenes 45-66)
    # -------------------------------------------------------------
    add("ch2_start", 
        "Ноябрь. Первый жестокий мороз сковал город. Ветер кружит колючую ледяную крупу над лабиринтом гаражного кооператива «Северный».",
        bgm="tension", chapter="ГЛАВА 2: ТЕНЬ ЗА ГАРАЖАМИ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_1")
    add("ch2_1", 
        "Одинокий желтый фонарь на кривом столбе бросает дергающиеся тени на сугробы вдоль железнодорожной насыпи.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_2")
    add("ch2_2", 
        "Никита, кутаясь в тонкую потертую куртку, подошел к тяжелым металлическим воротам с намалеванной белой краской цифрой «24».",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_3")
    add("ch2_3", 
        "Условный стук: три коротких, два длинных. Внутри лязгнул тяжелый шпингалет, и створка приоткрылась.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_4")
    add("ch2_4", 
        "— Заходи быстрее, не свети лицом, — хриплый голос из темноты втянул Никиту внутрь.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_5")
    add("ch2_5", 
        "В гараже пахло сыростью, машинным маслом и едким запахом ацетона. На верстаке горела светодиодная лампа.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_6")
    add("ch2_6", 
        "Там лежали электронные ювелирные весы, мотки цветной изоленты, сотни маленьких зип-пакетов и два больших свертка с белым кристаллическим веществом.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_7")
    add("ch2_7", 
        "— Твоя задача простая: фасуешь по грамму, обматываешь синей изолентой, делаешь закладки в лесополосе по координатам, скидываешь фото куратору.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_8")
    add("ch2_8", 
        "— За каждый адрес — восемьсот рублей в биткоинах. В день будешь делать тридцать штук — вот тебе двадцать четыре тысячи чистыми.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_9")
    add("ch2_9", 
        "Никита сглотнул ком в горле. Двадцать четыре тысячи за сутки... На мойке за эти деньги он ломал хребет больше месяца.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_10")
    add("ch2_10", 
        "— А если патруль? — спросил Никита, разглядывая свертки.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch2_11")
    add("ch2_11", 
        "— Держи телефон на авиарежиме, не привлекай внимания и главное — никогда не пробуй сам. Кто начинает нюхать — тот живет не больше полугода.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_12")
    add("ch2_12", 
        "Никита взял первый пакет. Холод пластика обжег пальцы, словно кусок льда.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_13")
    add("ch2_13", 
        "Первые недели казались невероятной удачей. Никита полностью оплатил дорогостоящее лечение матери, купил себе брендовую куртку и золотую цепочку.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_14")
    add("ch2_14", 
        "Но вместе с шальными деньгами в его жизнь вошел липкий, сводящий с ума ужас. Каждый проезжающий милицейский уазик заставлял сердце биться в висках молотом.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_15")
    add("ch2_15", 
        "Чтобы снять постоянное нервное напряжение и панические атаки, Никита однажды ночью отсыпал щепотку порошка на кончик ключа.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_16")
    add("ch2_16", 
        "«Только один разок... Просто чтобы не трясло...». Это была роковая точка невозврата.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_17")
    add("ch2_17", 
        "Синтетика мгновенно выжгла нервную систему. Начались слуховые галлюцинации, бессонница сутками напролет и дикая паранойя.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_18")
    add("ch2_18", 
        "Ему казалось, что за ним следят птицы на ветках, что в уличных фонарях вмонтированы микрофоны, что за дверью гаража дышат невидимые враги.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_19")
    add("ch2_19", 
        "К зиме 2019 года Никита окончательно перестал выходить на связь с друзьями и поселился в промозглом гаражном боксе №24, превратившись в ходячий скелет.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_20")
    add("ch2_20", 
        "Когда до Вани в Москве дошли вести от рыдающей матери Никиты, он немедленно бросил все дела и ночным экспрессом помчался на спасение брата.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_start")

    # -------------------------------------------------------------
    # ГЛАВА 3: БОКС №24 (НИКИТА) (Scenes 67-92)
    # -------------------------------------------------------------
    add("ch3_start", 
        "Полночь. Ледяная вьюга швыряет пригоршни колючего снега в лицо. Ваня стоит перед занесенной снегом дверью бокса №24.",
        bgm="tension", chapter="ГЛАВА 3: БОКС №24 (НИКИТА)", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_1")
    add("ch3_1", 
        "Он с размаху бьет кулаком в гулкое промерзшее железо: «Никита! Открывай! Это Ваня! Я знаю, что ты здесь!».",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_2")
    add("ch3_2", 
        "Внутри гаража раздался грохот опрокинутого ведра, судорожный скрежет и тяжелое сиплое дыхание.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_3")
    add("ch3_3", 
        "Засов медленно отодвинулся. В узкую щель выглянуло лицо, в котором едва ли можно было узнать веселого школьного бунтаря.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_4")
    add("ch3_4", 
        "Ввалившиеся землистые щеки, черные провалы глазниц, лихорадочный безумный блеск зрачков и дрожащие синие губы.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch3_5")
    add("ch3_5", 
        "— Ты... Кто тебя послал?! Менты?! Куратор прислал ликвидаторов?! — Никита вцепился в воротник Вани, держа в правой руке длинный канцелярский нож.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", shake=True, next_id="ch3_6")
    add("ch3_6", 
        "— Никита, очнись! Это я, Ваня! Твой брат по 11-Б! Посмотри на меня, дурак!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_7")
    add("ch3_7", 
        "Нож выпал из ослабевших пальцев Никиты, звякнув о мерзлый пол. Парень осел на колени, судорожно всхлипывая.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch3_8")
    add("ch3_8", 
        "— Ваня... Вано... Зачем ты пришел сюда... Отсюда уже нет дороги назад... Они убьют меня...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch3_9")
    add("ch3_9", 
        "Ваня затащил друга внутрь и захлопнул дверь. Внутри стоял ледяной смрад разложения и химических реактивов.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_10")
    add("ch3_10", 
        "На верстаке лежали целые горы расфасованного порошка. Здесь было не меньше пяти килограммов — особо крупный размер, гарантированная двадцатка строгого режима.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_11")
    add("ch3_11", 
        "— Сколько ты им должен? — твердо спросил Ваня, присев перед другом.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_12")
    add("ch3_12", 
        "— Два миллиона рублей... Я потерял оптовую партию, скинул не в тот район, ее вскрыли бродяги. Куратор дал срок до утра пятницы. Если не отдам — подожгут дом с матерью...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch3_13")
    add("ch3_13", 
        "У Вани на счете были эти деньги — весь стартовый оборотный фонд его будущего завода IvanEnergy. Годы накоплений и труда.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_choice_lock")
    add("ch3_choice_lock", 
        "Критический выбор судьбы в заснеженном боксе №24:",
        bg="assets/backgrounds/bg_anime_garages_night.jpg",
        choices=[
            {"text": "Силой вывезти Никиту, сжечь товар и спрятать его в закрытой наркоклинике на Алтае (Ветка спасения)", "target": "ending_nikita_rehab_1"},
            {"text": "Попытаться убедить его немедленно пойти в полицию и написать явку с повинной", "target": "ch3_plead_surrender"},
            {"text": "Осознать бессилие перед криминальной машиной и отступить (Каноничный путь)", "target": "ch4_start"}
        ])
    add("ch3_plead_surrender", 
        "— Никита, пойдем в прокуратуру прямо сейчас! Я оплачу лучших столичных адвокатов, докажем угрозы жизни и зависимость!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_plead_fail")
    add("ch3_plead_fail", 
        "— Ты в сказке живешь, Ваня?! Здесь всё повязано! Меня в первом же следственном изоляторе повесят на простыне по указке сверху!",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_start")

    # -------------------------------------------------------------
    # ГЛАВА 4: ЛОМКА И ПРИЗНАНИЕ (Scenes 93-114)
    # -------------------------------------------------------------
    add("ch4_start", 
        "Разговор зашел в глухой тупик. Никиту на глазах начала выкручивать жестокая ломка. Мышцы сводило судорогой, пальцы скрючивало.",
        bgm="sadness", chapter="ГЛАВА 4: ЛОМКА И ПРИЗНАНИЕ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_1")
    add("ch4_1", 
        "Он упал на засаленный матрас в углу, задыхаясь от боли во всем теле. Из разбитых губ сочилась пена.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch4_2")
    add("ch4_2", 
        "— Вано... Помнишь крышу?.. Закат... Какой закат был красивый... Я ведь не хотел быть преступником... Я просто хотел, чтобы нас никто больше не считал дерьмом...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_3")
    add("ch4_3", 
        "Ваня укутал дрожащего друга своим шерстяным пальто и протянул фляжку с горячим чаем. Но руки Никиты ходили ходуном, расплескивая капли на бетон.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_4")
    add("ch4_4", 
        "— Я переведу им эти два миллиона, слышишь?! Мы решим это! Не смей сдаваться!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch4_5")
    add("ch4_5", 
        "— Поздно... — Никита показал мерцающий экран разбитого смартфона. — Они прислали фото подъезда матери десять минут назад. Вокруг гаража кто-то ходит. Слышишь?",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_6")
    add("ch4_6", 
        "Снаружи действительно донесся глухой хруст снега под подошвами тяжелых ботинок. Причем сразу с нескольких сторон бокса.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_7")
    add("ch4_7", 
        "Никита вскочил, расширенными зрачками уставившись в стальную дверь. В его глазах вспыхнул предсмертный ужас загнанного зверя.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch4_8")
    add("ch4_8", 
        "— Ваня, лезь в заднюю вентиляционную балку! Быстро! Если тебя здесь найдут со мной — сделают соучастником!",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_choice_1")
    add("ch4_choice_1", 
        "Что предпринять перед лицом неминуемой облавы спецназа?",
        bg="assets/backgrounds/bg_anime_garages_night.jpg",
        choices=[
            {"text": "Остаться рядом с братом до конца, невзирая на арест", "target": "ch4_stay"},
            {"text": "Выбраться наружу через лаз, чтобы попытаться вытащить его через суды", "target": "ch5_start"}
        ])
    add("ch4_stay", 
        "— Я не брошу тебя одного! Мы давали клятву один за всех!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch4_stay_push")
    add("ch4_stay_push", 
        "Никита с неожиданной силой втолкнул Ваню в узкий лаз под крышей: «Живи, Вано! Хоть кто-то из нас должен остаться на свободе!» — и захлопнул стальную заслонку.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_start")

    # -------------------------------------------------------------
    # ГЛАВА 5: ОБЛАВА СПЕЦНАЗА (Scenes 115-136)
    # -------------------------------------------------------------
    add("ch5_start", 
        "БАМ! Оглушительный удар гидравлического тарана сорвал петли массивных ворот гаража!",
        bgm="action", chapter="ГЛАВА 5: ОБЛАВА СПЕЦНАЗА", bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, flash=True, next_id="ch5_1")
    add("ch5_1", 
        "— РАБОТАЕТ СПЕЦНАЗ «ГРОМ»! ОРУЖИЕ НА ЗЕМЛЮ! МОРДОЙ В ПОЛ, СВОЛОЧЬ!",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, flash=True, next_id="ch5_2")
    add("ch5_2", 
        "Светошумовая граната вспыхнула ослепительным солнцем, выжигая сетчатку. Грохот взрыва оглушил всё вокруг.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", flash=True, next_id="ch5_3")
    add("ch5_3", 
        "Десятки красных лазерных лучей пронзили клубы пыли и дыма. Бойцы в черном штурмовом снаряжении ворвались внутрь.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_4")
    add("ch5_4", 
        "Никита попытался метнуться к окну, но мощный удар приклада сбил его с ног. Лицо парня впечаталось в ледяной замасленный бетон.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, next_id="ch5_5")
    add("ch5_5", 
        "— Руки за спину, тварь! Лежать, кому сказано!",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_6")
    add("ch5_6", 
        "Стальные браслеты наручников со щелчком сомкнулись на запястьях до крови. Служебная овчарка с яростным лаем рвала зубами рукав куртки Никиты.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_7")
    add("ch5_7", 
        "Ваня, затаившись в сугробе за железнодорожным полотном, сквозь слезы бессилия наблюдал за происходящим.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_8")
    add("ch5_8", 
        "— Командир, тут оптовый склад. Килограммов пять чистой синтетики, весы, фасовка. Особо крупный размер в составе ОПГ.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_9")
    add("ch5_9", 
        "— Отличный улов. Пакуйте в автозак. Поедет по 228-й части пятой до звонка.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_10")
    add("ch5_10", 
        "Никиту заволокли в фургон под руки. Капли крови из разбитого носа падали на белоснежный наст, оставляя темные рубиновые пятна.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_11")
    add("ch5_11", 
        "Тяжелые двери спецмашины захлопнулись с лязгом тюремной решетки. Синие мигалки осветили летящую метель и скрылись за горизонтом.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch6_start")

    # -------------------------------------------------------------
    # ГЛАВА 6: СУД: СТАТЬЯ 228 (Scenes 137-158)
    # -------------------------------------------------------------
    add("ch6_start", 
        "Зал районного суда. Казенная духота, серые полированные скамьи и запах хлорки вперемешку с человеческим горем.",
        bgm="sadness", chapter="ГЛАВА 6: СУД: СТАТЬЯ 228", bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_1")
    add("ch6_1", 
        "За бронированным стеклом судебной клетки сидел Никита. Наголо обритый череп, серый тюремный балахон, погасший взгляд в пустоту.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch6_2")
    add("ch6_2", 
        "На первом ряду тихо плакала его мать, кутаясь в черную траурную шаль. Ваня сидел рядом, крепко сжимая ее онемевшую ладонь.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_3")
    add("ch6_3", 
        "— Именем Российской Федерации... — монотонный голос судьи в черной мантии звучал как удары топора по дереву.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_4")
    add("ch6_4", 
        "— Признать виновным по части 5 статьи 228.1 Уголовного кодекса РФ за незаконный сбыт наркотических средств в особо крупном размере...",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_5")
    add("ch6_5", 
        "— Назначить наказание в виде 15 (пятнадцати) лет лишения свободы с отбыванием в исправительной колонии строгого режима.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", shake=True, next_id="ch6_dossier")
    add("ch6_dossier", 
        "Официальный приговор суда вступил в законную силу. Ознакомьтесь с материалами уголовного дела №228-УК.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", document="assets/backgrounds/document_nikita_228.png", next_id="ch6_6")
    add("ch6_6", 
        "Пятнадцать лет. Вся молодость, все надежды, вся жизнь двадцатилетнего парня была запечатана гербовой мастикой.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_7")
    add("ch6_7", 
        "Никита поднял глаза на Ваню сквозь стекло. Губы беззвучно шепнули: «Прости меня, братишка... Живи за двоих...».",
        bg="assets/backgrounds/bg_anime_train_station.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch6_8")
    add("ch6_8", 
        "Конвой пристегнул его наручниками к цепи и повел по длинному подвальному переходу. Первый из школьного братства пал на дно.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch7_start")

    # -------------------------------------------------------------
    # ГЛАВА 7: СТОЛИЧНЫЙ МИРАЖ (Scenes 159-180)
    # -------------------------------------------------------------
    add("ch7_start", 
        "Осень 2020 года. Москва оглушает ревом моторов и слепит километровыми неоновыми фасадами.",
        bgm="epic", chapter="ГЛАВА 7: СТОЛИЧНЫЙ МИРАЖ", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_1")
    add("ch7_1", 
        "Зеркальные небоскребы «Москва-Сити» взмывают в низкие осенние тучи, сияя роскошью и богатством сотен миллиардов рублей.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_2")
    add("ch7_2", 
        "Ваня приехал на встречу со вторым школьным другом — Асланом. Первые партии напитка IvanEnergy уже поступили в торговые сети, но трагедия Никиты не давала покоя.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_3")
    add("ch7_3", 
        "Аслан встретил его у панорамного скоростного лифта башни «Федерация». Дорогой дизайнерский блейзер, сияющая улыбка, золотые часы на запястье.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch7_4")
    add("ch7_4", 
        "— Ваня, братуха! Наконец-то ты выбрался ко мне на вершину мира! — Аслан крепко сжал руку друга, ослепительно улыбаясь на фронтальную камеру смартфона.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch7_5")
    add("ch7_5", 
        "— Смотри вниз: весь этот город ползает под нашими ногами! Я же говорил тебе тогда на школьной крыше, что возьму эту столицу за горло!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch7_6")
    add("ch7_6", 
        "Они поднялись на 62-й этаж в роскошные апартаменты площадью двести квадратных метров с круговой панорамой ночной столицы.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_7")
    add("ch7_7", 
        "Внутри гремела музыка. Толпы стримеров, блогерш в шелковых платьях, операторы с кольцевыми лампами. Шампанское текло рекой.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_8")
    add("ch7_8", 
        "Но Ваня сразу заметил фальшь. Глаза Аслана бегали, под слоем пудры проступала бледность, а пальцы нервно сжимали край бокала.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_9")
    add("ch7_9", 
        "На экранах его смартфонов без конца всплывали уведомления о просроченных платежах и блокировках банковских карт.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_10")
    add("ch7_10", 
        "— Аслан, сколько стоит аренда этих апартаментов? Это больше миллиона в месяц. Откуда у тебя такие деньги при твоих охватах?",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch7_11")
    add("ch7_11", 
        "— Брось занудствовать, Вано! Контракты с нелегальными букмекерскими конторами и онлайн-казино приносят космические дивиденды! Я король трафика!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_start")

    # -------------------------------------------------------------
    # ГЛАВА 8: БАШНЯ «ФЕДЕРАЦИЯ» (Scenes 181-202)
    # -------------------------------------------------------------
    add("ch8_start", 
        "Вечеринка гремела до глубокой ночи, но к четырем часам утра шумная свита псевдо-друзей растворилась в столичных клубах.",
        bgm="tension", chapter="ГЛАВА 8: БАШНЯ «ФЕДЕРАЦИЯ»", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch8_1")
    add("ch8_1", 
        "Аслан остался сидеть на барной стойке, залпом допивая остатки дорогого виски прямо из горлышка.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch8_2")
    add("ch8_2", 
        "— Всё рухнуло, Ваня... — глухо выдавил он, глядя в темную бездну за стеклом. Его маска уверенного миллионера мгновенно осыпалась.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_3")
    add("ch8_3", 
        "— Что случилось? Ты же только что хвастался миллионными контрактами!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch8_4")
    add("ch8_4", 
        "— Роскомнадзор заблокировал все мои каналы за пропаганду подпольных казино. Налоговая арестовала счета. За мной долг в сорок миллионов рублей перед рекламодателями!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_5")
    add("ch8_5", 
        "— Но сегодня ночью у меня есть шанс вернуть всё одним махом, — глаза Аслана заблестели опасным лихорадочным блеском лудомана. — В подпольном VIP-клубе на Арбате игра на астрономические суммы. У меня есть безошибочная стратегия на рулетке!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_6")
    add("ch8_6", 
        "— Аслан, ты в своем уме?! В казино нет никаких стратегий, кроме разорения игрока! Остановись, мы найдем юристов, объявим банкротство!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch8_7")
    add("ch8_7", 
        "— Банкротство? Чтобы надо мной ржал весь интернет?! Нет! Либо я забираю банк этой ночью, либо мне незачем жить. Поехали со мной!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch9_start")

    # -------------------------------------------------------------
    # ГЛАВА 9: ЗЕРО И БЕЗДНА (Scenes 203-228)
    # -------------------------------------------------------------
    add("ch9_start", 
        "Подземный бункер в переулках Нового Арбата. Закрытый элитный VIP-клуб для нелегальной игры на миллионные ставки.",
        bgm="tension", chapter="ГЛАВА 9: ЗЕРО И БЕЗДНА", bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_1")
    add("ch9_1", 
        "Хрустальные люстры отражаются в лакированном красном дереве рулетки. Зеленое сукно, тяжелый табачный дым и гробовая напряженная тишина.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_2")
    add("ch9_2", 
        "В полутемных нишах сидят крепкие молчаливые мужчины с холодными глазами — представители теневых ростовщиков и бандитов.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_3")
    add("ch9_3", 
        "Аслан дрожащими руками выставил на поле фишки на пять миллионов рублей. «Ставка на Черное». Шарик запрыгал по секторам... Красное 14. Проигрыш.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", shake=True, next_id="ch9_4")
    add("ch9_4", 
        "По лицу Аслана градом покатился пот. Он подозвал ростовщика и подмахнул долговую расписку на пятнадцать миллионов рублей под залог несуществующей недвижимости.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_5")
    add("ch9_5", 
        "— Всё на Зеро. Все пятнадцать миллионов — на одиночное Зеро! — сорвался на визг Аслан.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_vip_casino.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch9_choice_casino")
    add("ch9_choice_casino", 
        "Аслан поставил свою жизнь на один сектор рулетки. Решение Вани:",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg",
        choices=[
            {"text": "Выкупить вексель Аслана за счет резервного капитала IvanEnergy (Ветка спасения Аслана)", "target": "ending_aslan_saved_1"},
            {"text": "Попытаться силой вырвать Аслана из-за стола рулетки", "target": "ch9_try_pull"},
            {"text": "Застыть в немом бессилии перед крутящимся колесом судьбы (Каноничный путь)", "target": "ch9_wheel_spin"}
        ])
    add("ch9_try_pull", 
        "Ваня рванулся вперед, но два двухметровых охранника жестко преградили путь: «Не мешайте клиенту отдыхать».",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_wheel_spin")
    add("ch9_wheel_spin", 
        "Крупье запустил шарик из слоновой кости в обратную сторону. Время словно остановилось.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_6")
    add("ch9_6", 
        "Тук... тук... тук... Шарик ударился о металлический дефлектор, проскочил мимо зеленого сектора «0» и глухо замер на Черном 11.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", shake=True, next_id="ch9_7")
    add("ch9_7", 
        "— Ставки проиграны. Черное, одиннадцать, нечетное, — ледяным голосом объявил крупье, сгребая фишки в лоток.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_8")
    add("ch9_8", 
        "Аслан пошатнулся, словно в него выстрелили в упор. Ростовщик в дорогом пальто неспешно поднялся с кресла, пряча расписку.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_9")
    add("ch9_9", 
        "— До рассвета, Асланчик. Ровно до шести утра. Если денег не будет — долг заплатят твои родственники своими жизнями.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch10_start")

    # -------------------------------------------------------------
    # ГЛАВА 10: ПЕТЛЯ НА 62-М ЭТАЖЕ (Scenes 229-250)
    # -------------------------------------------------------------
    add("ch10_start", 
        "Пять часов утра. Башня «Федерация». За панорамным стеклом свирепствует ледяной столичный ливень, размывая огни дорог в мутные пятна.",
        bgm="sadness", chapter="ГЛАВА 10: ПЕТЛЯ НА 62-М ЭТАЖЕ", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_1")
    add("ch10_1", 
        "В огромном пентхаусе царила гробовая тишина. На мраморном полу валялись осколки бокалов, пустые бутылки и обрывки долговых расписок.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_2")
    add("ch10_2", 
        "Аслан сидел на полу спиной к окну, обхватив руками колени. Телефон непрерывно жужжал от звонков коллекторов с угрозами расправы.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch10_3")
    add("ch10_3", 
        "Ваня лихорадочно обзванивал кредиторов и партнеров, пытаясь собрать залог, но до открытия межбанковских счетов в понедельник достать наличные было невозможно.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch10_4")
    add("ch10_4", 
        "— Ваня... опусти трубку, — тихо и пугающе спокойно произнес Аслан.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_5")
    add("ch10_5", 
        "— Мы найдем выход! Я продам складские комплексы в Подмосковье! Держись!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch10_6")
    add("ch10_6", 
        "— Дело не в деньгах, Вано. Я пустой внутри. Я променял настоящую жизнь на фальшивые лайки и дешевые понты. Я предал всех, кто меня любил.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_7")
    add("ch10_7", 
        "— Помнишь школьную крышу? Тот закат... Мы ведь были счастливы тогда, когда у нас не было ни гроша... Передай маме, что я очень ее люблю.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_8")
    add("ch10_8", 
        "Ваня на секунду отвернулся к вибрирующему телефону. В этот миг сзади раздался резкий скрежет открывшейся балконной створки.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_9")
    add("ch10_9", 
        "— АСЛАН, СТОЙ!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ch10_10")
    add("ch10_10", 
        "Ледяной порыв ветра и брызги дождя ворвались в комнату. На краю парапета никого не было. Лишь темнота двухсотметровой бездны ночного мегаполиса.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_dossier")
    add("ch10_dossier", 
        "Официальный протокол следственных органов по факту гибели в деловом комплексе «Москва-Сити».",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", document="assets/backgrounds/document_aslan_city.png", next_id="ch10_11")
    add("ch10_11", 
        "Второй из школьной четверки растворился в ночной темноте. Остались только двое.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_start")

    # -------------------------------------------------------------
    # ГЛАВА 11: АМОРАЛЬНЫЙ ХАЙП (ИСМАИЛ) (Scenes 251-272)
    # -------------------------------------------------------------
    add("ch11_start", 
        "2021 год. Гибель Аслана и срок Никиты окончательно сломали Исмаила. Его ирония превратилась в черную всепоглощающую ненависть ко всему миру.",
        bgm="tension", chapter="ГЛАВА 11: АМОРАЛЬНЫЙ ХАЙП", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_1")
    add("ch11_1", 
        "Исмаил запустил радикальный стриминговый проект, начав проводить жесткие уличные треш-стримы и провокации.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_2")
    add("ch11_2", 
        "Публичные оскорбления прохожих, провокации полиции, глумление над национальными и религиозными ценностями собирали миллионы просмотров озверевшей публики.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_3")
    add("ch11_3", 
        "Ваня разыскал Исмаила в подвальном компьютерном клубе у Савеловского вокзала, где тот вел очередной полуночный эфир.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_4")
    add("ch11_4", 
        "Исмаил сидел перед мерцающими мониторами в темных очках-авиаторах, яростно выкрикивая оскорбления в микрофон.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch11_5")
    add("ch11_5", 
        "— Исмаил! Прекрати этот позор! — Ваня силой выдернул провод питания из системного блока. — Центр «Э» и ФСБ уже возбудили проверку! Тебя закроют на годы!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_6")
    add("ch11_6", 
        "— Да пусть закрывают! — захохотал Исмаил со слезами на глазах. — Никитос мотает пятнашку на лесоповале, Аслан разбился о тротуар... Чего мне бояться?!",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_7")
    add("ch11_7", 
        "— Это общество жрет чужую боль вместо попкорна! Я просто показываю им их собственное уродливое отражение!",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_8")
    add("ch11_8", 
        "— Уезжай за границу немедленно! Я оплачу тебе перелет в Турцию или Грузию прямо сегодня!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_9")
    add("ch11_9", 
        "— Бежать? Ни за что. Я доиграю свою партию до конца, Ваня.",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch12_start")

    # -------------------------------------------------------------
    # ГЛАВА 12: ОДИНОЧКА СИЗО-1 (Scenes 273-294)
    # -------------------------------------------------------------
    add("ch12_start", 
        "Утро вторника. Шесть часов ноль минут. Металлическая дверь квартиры Исмаила вылетела от удара гидравлического клина.",
        bgm="tension", chapter="ГЛАВА 12: ОДИНОЧКА СИЗО-1", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", shake=True, flash=True, next_id="ch12_1")
    add("ch12_1", 
        "Оперативная группа ФСБ и бойцы СОБРа уложили блогера на пол. Были изъяты все серверы, накопители информации и техника.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_2")
    add("ch12_2", 
        "Спустя несколько часов Исмаил оказался в легендарном следственном изоляторе СИЗО-1 «Матросская Тишина».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_3")
    add("ch12_3", 
        "Одиночная спецкамера. Серые сырые стены, въевшийся запах хлорки, привинченная к полу железная шконка и лунный свет сквозь толстую решетку «реснички».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_4")
    add("ch12_4", 
        "Здесь не было зрителей, комментариев и восторженных донатов. Лишь гулкие шаги надзирателя по коридору и тяжелый металлический лязг дверных глазков.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_5")
    add("ch12_5", 
        "Вся показная бравада слетела с Исмаила в первые же сутки. Он сидел на ледяных нарах, обхватив колени, вздрагивая от каждого звука.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch12_6")
    add("ch12_6", 
        "Следователь по особо важным делам положил перед ним распечатки трансляций: «Статья 282 часть 2 УК РФ — возбуждение ненависти и вражды. Признательные показания давать будете?».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_7")
    add("ch12_7", 
        "Исмаил подписал протокол дрожащими пальцами, не читая ни единой строчки. Капкан захлопнулся намертво.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_start")

    # -------------------------------------------------------------
    # ГЛАВА 13: СТАТЬЯ 282 И ШИЗО (Scenes 295-316)
    # -------------------------------------------------------------
    add("ch13_start", 
        "Судебное заседание прошло в закрытом режиме за закрытыми дверями.",
        bgm="sadness", chapter="ГЛАВА 13: СТАТЬЯ 282 И ШИЗО", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_1")
    add("ch13_1", 
        "Приговор был максимально жестким: 5 лет лишения свободы с отбыванием в колонии общего режима в Ямало-Ненецком автономном округе.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_dossier")
    add("ch13_dossier", 
        "Учетная карточка осужденного Исмаила по статье 282 УК РФ.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", document="assets/backgrounds/document_ismail_282.png", next_id="ch13_2")
    add("ch13_2", 
        "Ване удалось добиться короткого десятиминутного свидания через двойное бронестекло перед отправкой по этапу.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_3")
    add("ch13_3", 
        "Исмаил взял тяжелую черную телефонную трубку. Его лицо было серым, дыхание — свистящим и тяжелым.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch13_4")
    add("ch13_4", 
        "— Ваня... Завтра этап на Крайний Север. В поселок Харп. Я не выдержу тамошнего климата с моей астмой...",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch13_5")
    add("ch13_5", 
        "— Я найму лучших адвокатов, подам апелляцию в Верховный Суд! Мы добьемся перевода по состоянию здоровья!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch13_6")
    add("ch13_6", 
        "— Спасибо тебе, Вано... Ты единственный, кто остался Человеком. Береги себя. Не дай этому миру сломать и тебя тоже.",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch14_start")

    # -------------------------------------------------------------
    # ГЛАВА 14: ТИШИНА НА СЕВЕРЕ (Scenes 317-338)
    # -------------------------------------------------------------
    add("ch14_start", 
        "Ярославский вокзал. Ночь. Ледяная метель кружит над специальным закрытым перроном.",
        bgm="sadness", chapter="ГЛАВА 14: ТИШИНА НА СЕВЕРЕ", bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_1")
    add("ch14_1", 
        "Серый вагон-«столыпин» с решетчатыми окнами дымит трубой печки-буржуйки на морозе.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_2")
    add("ch14_2", 
        "Лай караульных овчарок, окрики конвоя с автоматами: «Дистанция два шага! По вагонам бегом марш!».",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_3")
    add("ch14_3", 
        "Исмаил в казенном бушлате без пуговиц поднялся по обледенелым ступенькам. Железная дверь засова лязгнула намертво.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_4")
    add("ch14_4", 
        "Поезд медленно тронулся на север, увозя его в полярную ночь, вечную мерзлоту и пятидесятиградусные морозы.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_5")
    add("ch14_5", 
        "Спустя девять месяцев Ване пришло сухое казенное извещение: осужденный скончался в тюремной больнице от острой дыхательной недостаточности.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_6")
    add("ch14_6", 
        "Трое из четверых погибли или сгинули за колючей проволокой. Ваня остался последним.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch15_start")

    # -------------------------------------------------------------
    # ГЛАВА 15: ИМПЕРИЯ IVANENERGY (ВАНЯ) (Scenes 339-360)
    # -------------------------------------------------------------
    add("ch15_start", 
        "2022 год. Штаб-квартира многомиллиардного холдинга IvanEnergy в стеклянном небоскребе.",
        bgm="epic", chapter="ГЛАВА 15: ИМПЕРИЯ IVANENERGY", bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_1")
    add("ch15_1", 
        "Просторный кабинет на верхнем этаже. Панорамные окна от пола до потолка, за которыми стекают струи холодного дождя.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_2")
    add("ch15_2", 
        "Ваня стоял у стекла в строгом дорогом костюме. Его энергетический напиток продавался в каждом магазине от Калининграда до Владивостока.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch15_3")
    add("ch15_3", 
        "Он достиг всего, о чем грезил мальчишкой за школьной партой: богатства, влияния, финансовой независимости.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_4")
    add("ch15_4", 
        "Но на массивном дубовом столе стояла лишь одна-единственная фотография в серебряной рамке: четверо улыбающихся выпускников 11-Б на солнечной школьной крыше.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_5")
    add("ch15_5", 
        "Никита — на строгом режиме в сибирской тайге. Аслан — в могиле на Хованском кладбище. Исмаил — погребен под вечной мерзлотой Ямала.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_6")
    add("ch15_6", 
        "— Зачем всё это?.. — прошептал Ваня в тишину пустого кабинета. — Миллиарды, признание, власть... Если не с кем разделить даже чашку чая.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_start")

    # -------------------------------------------------------------
    # ГЛАВА 16: ВОЕНКОМАТ И ВЫБОР (Scenes 361-382)
    # -------------------------------------------------------------
    add("ch16_start", 
        "Осень 2022 года. В стране объявлена частичная мобилизация.",
        bgm="tension", chapter="ГЛАВА 16: ВОЕНКОМАТ И ВЫБОР", bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_1")
    add("ch16_1", 
        "Курьер доставил в кабинет Ивана повестку из военного комиссариата с предписанием явиться на пункт сбора в течение двадцати четырех часов.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_2")
    add("ch16_2", 
        "Совет директоров и юристы холдинга немедленно собрались в кабинете главы компании.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_3")
    add("ch16_3", 
        "— Иван Андреевич! Бизнес-джет во Внуково-3 заправлен и готов к вылету в Дубай через два часа! Ваши счета за рубежом открыты!",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_4")
    add("ch16_4", 
        "— Мы оформим вам бронь градообразующего предприятия за любые деньги! Вы не должны рисковать собой!",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_5")
    add("ch16_5", 
        "Ваня подошел к окну и долго смотрел на струи дождя, стекающие по зеркальному стеклу.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch16_choice_1")
    add("ch16_choice_1", 
        "Главный нравственный выбор в жизни Ивана:",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg",
        choices=[
            {"text": "«Я не побегу. Мои братья не прятались от судьбы — и я не стану прятаться за чужими спинами.»", "target": "ch16_accept"},
            {"text": "«Купить бронь и остаться руководить империей» (Попытка уклониться)", "target": "ch16_try_flee"}
        ])
    add("ch16_try_flee", 
        "Ваня посмотрел на билет на самолет, но в памяти всплыли глаза пацанов на школьной крыше. Совесть обожгла сильнее огня: «Нет. Я не смогу жить с клеймом труса».",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_accept")
    add("ch16_accept", 
        "— Передайте управление холдингом фонду поддержки семей погибших и детским домам, — спокойно распорядился Ваня, подписывая генеральную доверенность.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_6")
    add("ch16_6", 
        "Он снял брендовый костюм, надел армейский камуфляж и шагнул в эшелон под звуки военного оркестра.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch17_start")

    # -------------------------------------------------------------
    # ГЛАВА 17: МАЛАЯ ТОКМАЧКА (Scenes 383-408)
    # -------------------------------------------------------------
    add("ch17_start", 
        "Июль 2023 года. Запорожский фронт. Окрестности села Малая Токмачка.",
        bgm="action", chapter="ГЛАВА 17: МАЛАЯ ТОКМАЧКА", bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_1")
    add("ch17_1", 
        "Выжженная серая земля, изрытая тысячами воронок от фугасов. Остовы сгоревших бронемашин и едкий пороховой дым под свинцовым небом.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_2")
    add("ch17_2", 
        "Ваня — теперь командир отделения мотострелков с позывным «Студент». В окопе по колено липкой грязи.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch17_3")
    add("ch17_3", 
        "В нагрудном кармане бронежилета, возле пластины, лежит завернутая в полиэтилен школьная фотография четверых выпускников 11-Б.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_4")
    add("ch17_4", 
        "— «Студент», внимание! — хрипит рация в блиндаже. — С лесополосы идет бронегруппа противника! Танки «Леопард» и пехота при поддержке дронов!",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_5")
    add("ch17_5", 
        "Тяжелые снаряды начали вспахивать бруствер. Земля вздымалась столбами, осыпая бойцов комьями глины.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ch17_6")
    add("ch17_6", 
        "— К бою! Занять сектора! Приготовить гранатометы! — скомандовал Ваня, передергивая затвор автомата.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch17_7")
    add("ch17_7", 
        "Бой кипел непрерывно несколько часов. Отделение отбило две ожесточенные атаки, но боекомплект был почти на исходе.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_8")
    add("ch17_8", 
        "Противник начал массированный артобстрел тяжелыми калибрами, стремясь стереть укрепление с лица земли.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_choice_radio")
    add("ch17_choice_radio", 
        "Решающий момент боя под Малой Токмачкой:",
        bg="assets/backgrounds/bg_anime_battlefield.jpg",
        choices=[
            {"text": "Приказать отделению отходить во вторую траншею, а самому остаться корректировать огонь артиллерии по рации (Путь подвига)", "target": "ending_true_brotherhood_1"},
            {"text": "Укрыться в заглубленном блиндаже под обстрелом (Каноничный путь)", "target": "ch18_start"}
        ])

    # -------------------------------------------------------------
    # ГЛАВА 18: БЕЗ ВЕСТИ ПРОПАВШИЙ (Scenes 409-430)
    # -------------------------------------------------------------
    add("ch18_start", 
        "152-миллиметровый снаряд разорвался прямо на накате центрального перекрытия блиндажа.",
        bgm="sadness", chapter="ГЛАВА 18: БЕЗ ВЕСТИ ПРОПАВШИЙ", bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, flash=True, next_id="ch18_1")
    add("ch18_1", 
        "Сноп ослепительного пламени, рухнувшие бревна перекрытия и глухая, звенящая тишина контузии.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ch18_2")
    add("ch18_2", 
        "Сквозь мутную пелену Ваня видел, как над разрушенной траншеей медленно поднимается черный дым, заслоняя солнце.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch18_3")
    add("ch18_3", 
        "Ослабевшие пальцы сжали в кармане размокшую фотографию. На ней Никита, Аслан и Исмаил улыбались сквозь налипшую гарь.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch18_4")
    add("ch18_4", 
        "— Я иду к вам, пацаны... — прошептал Ваня, закрывая глаза. — Наша вахта... окончена...",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch18_dossier")
    add("ch18_dossier", 
        "Официальное извещение Министерства обороны о судьбе гвардии рядового Ивана.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", document="assets/backgrounds/document_vanya_tokmachka.png", next_id="ch18_5")
    add("ch18_5", 
        "«Пропал без вести при выполнении боевой задачи в районе населенного пункта Малая Токмачка». Четвертый и последний из выпускников 11-Б шагнул в бессмертие.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="epilogue_start")

    # -------------------------------------------------------------
    # ЭПИЛОГ: ПУСТОЙ КЛАСС (Scenes 431-455)
    # -------------------------------------------------------------
    add("epilogue_start", 
        "25 мая 2024 года. Ровно десять лет спустя.",
        bgm="sadness", chapter="ЭПИЛОГ: ПУСТОЙ КЛАСС", bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_1")
    add("epilogue_1", 
        "В старом здании школы идет капитальный ремонт, но кабинет математики на третьем этаже словно застыл во времени.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_2")
    add("epilogue_2", 
        "Сквозь чистые вымытые окна льется всё тот же теплый золотой свет заката, чертя золотые полосы по деревянному полу.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_3")
    add("epilogue_3", 
        "На классной доске белым мелом по-прежнему выведено: «Выпуск 11-Б. Мы сделали это!».",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_4")
    add("epilogue_4", 
        "И в этих лучах вечернего солнца на мгновение возникают четыре полупрозрачных силуэта в школьных бордовых пиджаках.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_5")
    add("epilogue_5", 
        "Никита с улыбкой чиркает зажигалкой. Аслан любуется своим отражением. Исмаил отпускает колкую шутку. А Ваня захлопывает свой ежедневник.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_6")
    add("epilogue_6", 
        "Они снова вместе. Навсегда семнадцатилетние, полные надежд, готовые покорить этот бесконечный мир.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_7")
    add("epilogue_7", 
        "Где-то в школьном коридоре звенит последний звонок, эхом растворяясь в золотом сиянии заката...",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="game_over")
    add("game_over", 
        "КОНЕЦ ИСТОРИИ. Спасибо за прохождение новеллы «ПОСЛЕДНИЙ ВЫПУСК [REMASTERED: ANIME EDITION]».",
        chapter="ФИНАЛ", bg="assets/backgrounds/bg_anime_school_sunset.jpg",
        choices=[
            {"text": "Начать сначала (Главное меню)", "target": "prologue_start"},
            {"text": "Попробовать спасти Никиту (Перейти к развилке в гараже)", "target": "ch3_choice_lock"},
            {"text": "Попробовать выкупить долг Аслана (Перейти к развилке в казино)", "target": "ch9_choice_casino"}
        ])

    # -------------------------------------------------------------
    # АЛЬТЕРНАТИВНАЯ ВЕТКА: СПАСЕНИЕ НИКИТЫ
    # -------------------------------------------------------------
    add("ending_nikita_rehab_1", 
        "Ваня молча подошел к верстаку, сгреб все пакеты с отравой в железную бочку и плеснул растворителем.",
        bgm="tension", chapter="КОНЦОВКА: СПАСЕНИЕ НИКИТЫ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ending_nikita_rehab_2")
    add("ending_nikita_rehab_2", 
        "— Что ты творишь?! Они убьют нас! — закричал Никита, пытаясь броситься к бочке.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ending_nikita_rehab_3")
    add("ending_nikita_rehab_3", 
        "Чирк зажигалки. Огонь взметнулся к потолку, сжигая яд в пепел.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", flash=True, shake=True, next_id="ending_nikita_rehab_4")
    add("ending_nikita_rehab_4", 
        "— Я перевел два миллиона рублей куратору с корпоративного счета IvanEnergy. Долг закрыт. А тебя я прямо сейчас увожу в закрытую клинику на Алтае.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_nikita_rehab_5")
    add("ending_nikita_rehab_5", 
        "Через два года тяжелейшей реабилитации и лечения в горах Алтая Никита полностью победил зависимость и вернулся к жизни.",
        bgm="epic", bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="ending_nikita_rehab_final")
    add("ending_nikita_rehab_final", 
        "Никита возглавил спортивную школу бокса для трудных подростков в родном городе, спасая десятки мальчишек от страшной судьбы, в которую едва не рухнул сам.",
        chapter="КОНЦОВКА: СПАСЕНИЕ НИКИТЫ", bg="assets/backgrounds/bg_anime_school_sunset.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left",
        choices=[
            {"text": "Вернуться в главное меню", "target": "prologue_start"}
        ])

    # -------------------------------------------------------------
    # АЛЬТЕРНАТИВНАЯ ВЕТКА: ВЫКУП АСЛАНА
    # -------------------------------------------------------------
    add("ending_aslan_saved_1", 
        "— Стойте! — Ваня решительно шагнул вперед и положил на сукно перед ростовщиками подписанный договор залога двадцати процентов акций IvanEnergy.",
        bgm="sadness", chapter="КОНЦОВКА: ВЫКУП АСЛАНА", bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ending_aslan_saved_2")
    add("ending_aslan_saved_2", 
        "— Здесь обеспечение на тридцать миллионов рублей. Долг Аслана закрыт в полном объеме прямо сейчас. Верните его расписку.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vip_casino.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_aslan_saved_3")
    add("ending_aslan_saved_3", 
        "Ростовщик внимательно проверил печати и кивнул охране: «Вексель погашен. Забирайте своего друга и чтобы ноги вашей не было в клубе».",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ending_aslan_saved_4")
    add("ending_aslan_saved_4", 
        "На мокрой улице под осенним ливнем Аслан опустился на колени перед Ваней, рыдая: «Ваня... Ты отдал треть своего бизнеса ради меня... Зачем?!».",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ending_aslan_saved_5")
    add("ending_aslan_saved_5", 
        "— Затем, что мы давали клятву на школьной крыше, дурак, — Ваня поднял его за плечи. — Завтра ты уезжаешь из Москвы навсегда.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_aslan_saved_final")
    add("ending_aslan_saved_final", 
        "Аслан вернулся в родной городок, удалил соцсети и открыл маленькую уютную пекарню. Он больше никогда не надевал костюм за миллион, но обрел душевный покой и настоящую семью.",
        chapter="КОНЦОВКА: ВЫКУП АСЛАНА", bgm="epic", bg="assets/backgrounds/bg_anime_school_sunset.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right",
        choices=[
            {"text": "Вернуться в главное меню", "target": "prologue_start"}
        ])

    # -------------------------------------------------------------
    # ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б
    # -------------------------------------------------------------
    add("ending_true_brotherhood_1", 
        "— Всему отделению — отход во вторую линию! Я остаюсь на связи и вызываю огонь дивизиона на себя! Выполнять приказ!",
        bgm="climax", chapter="ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б", bg="assets/backgrounds/bg_anime_battlefield.jpg", speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ending_true_brotherhood_2")
    add("ending_true_brotherhood_2", 
        "Бойцы под прикрытием дымовых гранат вынесли раненых. Ваня остался один в разрушенном капонире с радиостанцией.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ending_true_brotherhood_3")
    add("ending_true_brotherhood_3", 
        "— Батарея, я «Студент»! Координаты квадрата 47-31, залп дивизиона беглым! Накройте всю высоту!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ending_true_brotherhood_4")
    add("ending_true_brotherhood_4", 
        "Шквал реактивных снарядов накрыл наступающую бронеколонну. Враг был разгромлен и отброшен.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ending_true_brotherhood_5")
    add("ending_true_brotherhood_5", 
        "Чудом выжившего под завалом бревен Ивана откопали разведчики. Тяжелые ранения, орден Мужества и месяцы госпиталей.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ending_true_brotherhood_6")
    add("ending_true_brotherhood_6", 
        "После выздоровления Иван передал компанию благотворительному фонду «Братство 11-Б».",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ending_true_brotherhood_7")
    add("ending_true_brotherhood_7", 
        "Фонд восстановил их старую школу, открыл бесплатные кружки для сотен детей и создал музей памяти выпуска 11-Б.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ending_true_brotherhood_8")
    add("ending_true_brotherhood_8", 
        "Каждый год 25 мая Иван поднимается на крышу школы. Теплый закатный ветер треплет его волосы. Он знает: их дружба оказалась сильнее самой смерти.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ending_true_brotherhood_final")
    add("ending_true_brotherhood_final", 
        "ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б. Настоящее братство живет вечно в сердцах тех, кто помнит.",
        chapter="ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б", bg="assets/backgrounds/bg_anime_school_roof.jpg",
        choices=[
            {"text": "Начать сначала (Главное меню)", "target": "prologue_start"}
        ])

    return s

if __name__ == "__main__":
    story = generate_story()
    print("Generated scenes count:", len(story))
