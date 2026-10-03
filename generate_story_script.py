# -*- coding: utf-8 -*-
"""
Master Story Generator for The Boys Remastered: Anime Edition
Generates 430+ interconnected scenes with rich psychological depth,
Classroom of the Elite style anime atmosphere, music cues, and choice branches.
"""
import json
import os
import sys

def generate_story_dict():
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

    # =========================================================================
    # ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК (Scenes 1-22)
    # =========================================================================
    add("prologue_start", 
        "25 мая. За высокими окнами старой школы шумит ласковый предзакатный ветер. В воздухе кружится невесомый тополиный пух, мягко оседая на потрескавшийся школьный асфальт.",
        bgm="intro", chapter="ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК", next_id="prologue_1")
    add("prologue_1", 
        "Кабинет математики на третьем этаже погружен в косые янтарные лучи заката. Все одноклассники уже разбежались — готовиться к ночному банкету и взрослой жизни.", next_id="prologue_2")
    add("prologue_2", 
        "Только мы четверо остались сидеть на нашей привычной задней парте у окна. Запах мела, старых учебников и нагретого солнцем лакированного дерева.", next_id="prologue_3")
    add("prologue_3", 
        "На широкой классной доске белым мелом размашисто выведено: «Выпуск 11-Б. Мы сделали это!». Одиннадцать долгих лет пролетели словно один щелчок пальцев.", next_id="prologue_4")
    add("prologue_4", 
        "— Ну что, братья... Вот и всё. Завтра сдадим ключи от шкафчиков, получим аттестаты — и школы больше не будет, — Ваня задумчиво поправляет очки в золотой оправе.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_5")
    add("prologue_5", 
        "Его бордовый форменный пиджак сидит с иголочки. Ваня всегда был среди нас аналитиком — тем, кто видел систему насквозь и просчитывал вероятности.", next_id="prologue_6")
    add("prologue_6", 
        "— Да к черту эту школу! — Никита нервно усмехается и чиркает зажигалкой Zippo. — Меня эти облезлые стены достали еще в девятом. Сейчас начнется настоящая жизнь. Никаких рамок, никакой обязаловки!",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_7")
    add("prologue_7", 
        "Пиджак Никиты распахнут, на шее поблескивает массивная серебряная цепь. Он вырос на рабочих окраинах и привык доказывать правоту кулаками, а не формулами.", next_id="prologue_8")
    add("prologue_8", 
        "— Свобода без денег, Никитос — это просто нищета на свежем воздухе, — снисходительно усмехается Аслан, любуясь идеальной укладкой в зеркале смартфона.",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_9")
    add("prologue_9", 
        "— Я через месяц стартую в Москву. Блогинг, короткие видео, стриминг. Через два года сниму апартаменты на 60-м этаже башни «Федерация» и буду смотреть на всех сверху вниз!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_10")
    add("prologue_10", 
        "— Главное, чтобы на 60-м этаже у тебя интернет не отключили за неуплату, столичный магнат, — ехидно бросает Исмаил, поправляя свои солнцезащитные очки-авиаторы.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_11")
    add("prologue_11", 
        "Исмаил — мастер острого слова и провокаций. Пока одноклассники учили историю, он уже администрировал новостные паблики и тестировал вирусные алгоритмы.", next_id="prologue_12")
    add("prologue_12", 
        "— Толпе не нужна правда, толпе нужно зрелище и скандал, — философски замечает Исмаил. — Тот, кто держит эмоции зрителя за горло, правит цифровым миром.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_13")
    add("prologue_13", 
        "— А ты сам чем займешься, Вано? — Никита толкает Ваню плечом. — Неужели пойдешь в унылый банк перекладывать чужие платежки с девяти до шести?",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_14")
    add("prologue_14", 
        "— Нет. Я построю холдинг ИванЭнерджи, — спокойно отвечает Ваня, раскрывая свой черновик. — Энергетические напитки, дистрибуция по всей стране. Осязаемый реальный бизнес.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_15")
    add("prologue_15", 
        "— Ого, целый олигарх растет! — смеется Аслан. — Запомни этот день, Ваня: когда будешь раздавать дивиденды, мы первые в очереди!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_16")
    add("prologue_16", 
        "— Хватит болтать в пыли, пацаны, — говорит Никита, вынимая связку ключей. — Я подрезал у завхоза ключ от пожарного люка. Пошли на крышу встречать закат!",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_17")
    add("prologue_17", 
        "Железная створка скрипит, выпуская нас на широкую гудроновую крышу. Свежий порыв ветра сразу взъерошивает волосы.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_18")
    add("prologue_18", 
        "Перед нами расстилается весь город: пятиэтажки, зеленые дворы, извилистая река и дымящие трубы промзоны в багрянце заката.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_19")
    add("prologue_19", 
        "Ветер колышет полы школьных пиджаков. В этот вечер кажется, что мир бесконечен и ни одна преграда не сможет остановить нас.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_20")
    add("prologue_20", 
        "— Давайте поклянемся, — произносит Ваня, глядя на алую полосу горизонта. — Куда бы нас ни раскидала жизнь, мы никогда не бросим друг друга в беде.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_school_roof.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_choice_1")
    add("prologue_choice_1", 
        "Как скрепить нерушимую клятву школьного братства?",
        bg="assets/backgrounds/bg_anime_school_roof.jpg",
        choices=[
            {"text": "«Клянемся! Один за всех — и до самого конца!» (Искренняя клятва)", "target": "prologue_oath_solemn"},
            {"text": "«Кто первым поднимется — вытягивает остальных!» (Прагматичный договор)", "target": "prologue_oath_pragmatic"}
        ])
    add("prologue_oath_solemn", 
        "Мы сжимаем руки в один крепкий замок. Четыре ладони. Четыре сердца, бьющихся в унисон на пороге взрослого мира.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")
    add("prologue_oath_pragmatic", 
        "Никита с азартом хлопает сверху по нашим ладоням: «Заметано! Кто пробился наверх — держит спасательный трос для остальных!».",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")
    add("prologue_21", 
        "В тот теплый майский вечер ни один из нас не подозревал, какие чудовищные испытания и предательства приготовила нам взрослая жизнь...",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ch1_start")

    # =========================================================================
    # ГЛАВА 1: ПЕРВЫЕ ТРЕЩИНЫ (Scenes 23-42)
    # =========================================================================
    add("ch1_start", 
        "Лето пролетело как один день. На смену школьной беззаботности пришла холодная, безжалостная взрослая реальность.",
        bgm="intro", chapter="ГЛАВА 1: ПЕРВЫЕ ТРЕЩИНЫ", bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ch1_1")
    add("ch1_1", 
        "Ваня поступил на факультет международной экономики в столице, сутками штудируя логистические цепочки и таможенные регламенты.", next_id="ch1_2")
    add("ch1_2", 
        "Аслан занял у родственников триста тысяч рублей, купил билет в один конец до Москвы и с головой ушел в создание шок-контента.", next_id="ch1_3")
    add("ch1_3", 
        "Исмаил снял крошечную студию на окраине и начал выпускать провокационные расследования, стремительно набирая первых подписчиков.", next_id="ch1_4")
    add("ch1_4", 
        "И только Никита остался в родном захолустном городке. Без связей, без денег и без малейшего понимания, куда двигаться дальше.", next_id="ch1_5")
    add("ch1_5", 
        "Никита устроился на круглосуточную автомойку у окружной трассы. Ночные смены, ледяная вода, разъедающая кожу пена и копеечная зарплата.", next_id="ch1_6")
    add("ch1_6", 
        "— Вано, вы там в столице все в шелках ходите, — хрипел Никита в трубку во время редких звонков. — А у меня мать на трех работах надрывается, чтобы закрыть кредиты за квартиру.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch1_7")
    add("ch1_7", 
        "— Никита, потерпи немного, — уговаривал его Ваня. — Я запущу первый цех ИванЭнерджи, встану на ноги и сразу заберу тебя в отдел безопасности.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch1_8")
    add("ch1_8", 
        "— «Потерпи»? Легко говорить, когда у тебя в кармане стипендия и столичные перспективы, — ядовито ответил Никита. — Мне деньги нужны здесь и сейчас.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch1_9")
    add("ch1_9", 
        "В голосе Никиты звенели незнакомые, пугающие нотки отчаяния и затаенной злобы на весь окружающий мир.", next_id="ch1_10")
    add("ch1_10", 
        "Тем временем в ленте социальных сетей Аслан выкладывал фотографии из видовых ресторанов с бокалами дорогого вина.", next_id="ch1_11")
    add("ch1_11", 
        "— Смотрите, как живут настоящие победители! — вещал Аслан на камеру. — Если вы все еще считаете копейки, вы просто лузеры без амбиций!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch1_12")
    add("ch1_12", 
        "Исмаил тем временем опубликовал скандальное видео с разоблачением местных чиновников, набравшее свой первый миллион просмотров.", next_id="ch1_13")
    add("ch1_13", 
        "— Охваты растут как на дрожжах! — хвастался Исмаил в общем чате. — Еще немного, и ко мне выстроится очередь из рекламодателей!",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch1_14")
    add("ch1_14", 
        "Никита читал эти сообщения молча. С каждым днем он все глубже уходил в себя, перестав отвечать на звонки.", next_id="ch1_15")
    add("ch1_15", 
        "Осень сменилась первыми заморозками. Серое небо повисло над крышами гаражных кооперативов тяжелым свинцовым саваном.", next_id="ch1_16")
    add("ch1_16", 
        "На автомойку, где работал Никита, стал заезжать черная тонированная иномарка без номеров. Водитель оставлял щедрые чаевые и внимательно приглядывался к крепкому парню.", next_id="ch1_17")
    add("ch1_17", 
        "— Хочешь поднять за одну ночь столько, сколько здесь не заработаешь за полгода? — однажды спросил человек в кожаной куртке, приоткрыв стекло.", next_id="ch1_18")
    add("ch1_18", 
        "Никита колебался ровно три секунды. Образ матери, плачущей над квитанциями за свет, окончательно сломал последние барьеры совести.", next_id="ch1_19")
    add("ch1_19", 
        "— Что нужно делать? — глухо спросил Никита, пряча озябшие руки в карманы куртки.", next_id="ch1_20")
    add("ch1_20", 
        "— Приходи сегодня в полночь к гаражам за железнодорожной насыпью. Бокс номер 24. Там всё расскажут.", next_id="ch2_start")

    # =========================================================================
    # ГЛАВА 2: ТЕНЬ ЗА ГАРАЖАМИ (Scenes 43-64)
    # =========================================================================
    add("ch2_start", 
        "Ноябрьская ночь. Метель заносит ржавые железные ворота бесконечных рядов гаражного кооператива «Северный».",
        bgm="tension", chapter="ГЛАВА 2: ТЕНЬ ЗА ГАРАЖАМИ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_1")
    add("ch2_1", 
        "Одинокий желтый фонарь на столбе раскачивается от ледяного ветра, бросая длинные дергающиеся тени на сугробы.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_2")
    add("ch2_2", 
        "Под подошвами скрипит промозглый снег. Никита подходит к массивной железной двери с намалеванной белой краской цифрой «24».",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_3")
    add("ch2_3", 
        "Условный стук: три коротких, два длинных. Изнутри лязгает тяжелый засов, и дверь приоткрывается, выпуская клуб пара и едкий химический запах.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_4")
    add("ch2_4", 
        "— Заходи быстрее, не морозь помещение, — раздается сиплый голос из темноты.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_5")
    add("ch2_5", 
        "Внутри гаража тускло горит переносная лампа. На деревянном верстаке разложены ювелирные весы, рулоны разноцветной изоленты и десятки зип-пакетов с белым кристаллическим порошком.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_6")
    add("ch2_6", 
        "— Синтетика высокой чистоты. Твоя задача элементарная: забираешь мастер-клад, фасуешь по грамму, раскидываешь по координатам в лесополосе.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_7")
    add("ch2_7", 
        "— За каждый адрес — восемьсот рублей. Делаешь тридцать кладок за смену — вот тебе двадцать четыре тысячи чистыми на руки каждый день.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_8")
    add("ch2_8", 
        "Никита сглотнул вязкую слюну. Двадцать четыре тысячи за пару часов ходьбы по сугробам... На автомойке за это пришлось бы гнуть спину целый месяц.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_9")
    add("ch2_9", 
        "— А если на хвост сядут? — спросил Никита, оглядывая темные углы гаража.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch2_10")
    add("ch2_10", 
        "— У нас всё схвачено на самом верху. Главное — телефон держи на авиарежиме и не употребляй сам. Кто начинает пробовать — тот долго не живет.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_11")
    add("ch2_11", 
        "Никита взял первый увесистый сверток. Холод полиэтилена обжег пальцы, словно кусок сухого льда.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_12")
    add("ch2_12", 
        "Первые недели казались ожившей сказкой. Долги матери были закрыты, в холодильнике появились деликатесы, а на руке Никиты засияли новые швейцарские часы.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_13")
    add("ch2_13", 
        "Но вместе с легкими деньгами в его жизнь вошел липкий, парализующий страх. Каждый проезжающий патрульный уазик заставлял сердце биться в горле.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_14")
    add("ch2_14", 
        "Чтобы заглушить ночные панические атаки, Никита однажды отсыпал щепотку порошка на кончик ножа. «Только один раз, просто чтобы снять напряжение...».",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_15")
    add("ch2_15", 
        "Это была роковая точка невозврата. Синтетический стимулятор моментально сжег дофаминовые рецепторы, превратив здорового сильного парня в дерганую марионетку.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_16")
    add("ch2_16", 
        "Зрачки Никиты расширились на весь глаз, сон пропал вовсе. Ему казалось, что за ним следят из каждого темного окна и через каждую уличную камеру.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_17")
    add("ch2_17", 
        "Прошел год. К зиме 2019 года Никита перестал появляться дома и окончательно поселился в сыром промерзшем боксе №24.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_18")
    add("ch2_18", 
        "Узнав от плачущей матери друга о его исчезновении, Ваня бросил все дела в Москве и срочным поездом помчался в родной город.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch2_19")
    add("ch2_19", 
        "В полночь Ваня стоял перед занесенной снегом дверью бокса №24, чувствуя, как мороз пробирает до самых костей.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_start")

    # =========================================================================
    # ГЛАВА 3: БОКС №24 (НИКИТА) (Scenes 65-90)
    # =========================================================================
    add("ch3_start", 
        "Ваня с силой ударил кулаком в заледеневшее железо ворот. Гулкое эхо разнеслось по пустынному гаражному ряду.",
        bgm="tension", chapter="ГЛАВА 3: БОКС №24 (НИКИТА)", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_1")
    add("ch3_1", 
        "— Никита! Открывай, это Ваня! Я знаю, что ты внутри!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_2")
    add("ch3_2", 
        "За дверью послышалась судорожная возня, звон упавшего металла и тяжелое прерывистое дыхание.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_3")
    add("ch3_3", 
        "Засов медленно отодвинулся. В узком проеме показалось лицо Никиты. Ваня невольно отшатнулся от ужаса.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_4")
    add("ch3_4", 
        "Перед ним стоял призрак. Ввалившиеся щеки, черные круги вокруг безумных глаз, растрепанные грязные волосы и лихорадочный блеск взгляда.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch3_5")
    add("ch3_5", 
        "— Ты... кто тебя послал?! Менты? Куратор?! Ты привел хвост?! — Никита вцепился в воротник Вани, выставив вперед лезвие строительного ножа.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", shake=True, next_id="ch3_6")
    add("ch3_6", 
        "— Никита, очнись! Это я, Ваня! Твой брат по 11-Б классу! Посмотри на меня!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_7")
    add("ch3_7", 
        "Нож задрожал в руке Никиты и с глухим стуком упал на утоптанный снег. Парень осел на колени, закрыв лицо дрожащими ладонями.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch3_8")
    add("ch3_8", 
        "— Ваня... Вано... Зачем ты приехал... Отсюда уже нет выхода, слышишь? Они убьют меня, если я сбегу...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch3_9")
    add("ch3_9", 
        "Ваня затащил друга внутрь гаража и захлопнул створку. Внутри стоял леденящий сквозняк и стойкий смрад ацетона.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_10")
    add("ch3_10", 
        "На верстаке лежали килограммовые пакеты с кристаллами. Этого объема хватило бы на пожизненный срок для целой группы.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_11")
    add("ch3_11", 
        "— Сколько ты им должен? — прямо спросил Ваня, присев напротив друга на корточки.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_12")
    add("ch3_12", 
        "— Два миллиона... Я сбросил оптовую партию не в ту точку, товар вскрыли бродяги. Куратор дал мне срок до пятницы. Если не отдам — подожгут квартиру с матерью внутри...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch3_13")
    add("ch3_13", 
        "Ваня сжал зубы до хруста. У него на счетах компании уже были эти деньги — весь стартовый оборотный капитал для первой производственной линии ИванЭнерджи.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch3_choice_lock")
    add("ch3_choice_lock", 
        "Судьбоносный выбор: как поступить с Никитой в промерзшем боксе?",
        bg="assets/backgrounds/bg_anime_garages_night.jpg",
        choices=[
            {"text": "Силой вывезти Никиту, сжечь товар и спрятать его в закрытой наркоклинике (Ветка спасения)", "target": "ending_nikita_rehab_1"},
            {"text": "Попытаться уговорить его сдаться полиции с повинной", "target": "ch3_plead_surrender"},
            {"text": "Осознать бессилие и уйти, оставив выбор за ним (Каноничный путь)", "target": "ch4_start"}
        ])
    add("ch3_plead_surrender", 
        "— Никита, пойдем в полицию прямо сейчас. Я найму лучших адвокатов столицы, докажем принуждение и зависимость!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch3_plead_fail")
    add("ch3_plead_fail", 
        "— Ты дурак, Ваня?! В полиции половина сидит на проценте от этой сети! Меня просто придушат в первой же камере!",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_start")

    # =========================================================================
    # ГЛАВА 4: ЛОМКА И ПРИЗНАНИЕ (Scenes 91-112)
    # =========================================================================
    add("ch4_start", 
        "Разговор зашел в глухой тупик. Никиту начала колотить жестокая ломка. Мышцы сводило судорогой, зубы выбивали бешеную дробь.",
        bgm="sadness", chapter="ГЛАВА 4: ЛОМКА И ПРИЗНАНИЕ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_1")
    add("ch4_1", 
        "Он упал на грязный матрас в углу гаража, свернувшись калачиком и задыхаясь от фантомной боли в суставах.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch4_2")
    add("ch4_2", 
        "— Помнишь... как мы на крыше стояли? — шептал Никита пересохшими губами. — Небо такое красное было... Я ведь просто хотел, чтобы меня уважали. Чтобы не плевали вслед как на дворового пса...",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_3")
    add("ch4_3", 
        "Ваня накинул на плечи дрожащего друга свое пальто и налил из термоса горячий чай. Руки Никиты так тряслись, что кипяток расплескивался по бетону.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_4")
    add("ch4_4", 
        "— Я вытащу тебя, слышишь? Я переведу деньги куратору, найду врачей...",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch4_5")
    add("ch4_5", 
        "— Поздно, Вано... — Никита показал экран телефона. — Они прислали фото моей матери у подъезда пять минут назад. За гаражами уже кто-то крутится. Я слышал шаги по насту.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_6")
    add("ch4_6", 
        "Снаружи действительно послышался глухой хруст снега под тяжелыми армейскими берцами. Сразу с нескольких сторон.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch4_7")
    add("ch4_7", 
        "Никита мгновенно вскочил, расширенными зрачками уставившись на железную дверь. В его взгляде мелькнула первобытная паника загнанного зверя.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch4_8")
    add("ch4_8", 
        "— Уходи через заднюю балку, Ваня! Быстро! Если тебя здесь возьмут — тебе тоже пришьют организацию группы!",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ch4_choice_1")
    add("ch4_choice_1", 
        "Что делать перед лицом неминуемой облавы?",
        bg="assets/backgrounds/bg_anime_garages_night.jpg",
        choices=[
            {"text": "Остаться рядом с другом до конца, невзирая на последствия", "target": "ch4_stay"},
            {"text": "Выскользнуть наружу, чтобы попытаться спасти его законным путем через адвокатов", "target": "ch5_start"}
        ])
    add("ch4_stay", 
        "— Я не брошу тебя одного на растерзание, Никита! Мы давали клятву!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch4_stay_push")
    add("ch4_stay_push", 
        "Никита со всей оставшейся силой толкнул Ваню в узкий проем задней вентиляционной ниши: «Живи, дурак! Хоть кто-то из нас должен остаться человеком!» — и захлопнул заслонку.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_start")

    # =========================================================================
    # ГЛАВА 5: ОБЛАВА СПЕЦНАЗА (Scenes 113-134)
    # =========================================================================
    add("ch5_start", 
        "БАМ! Оглушительный грохот гидравлического тарана разнес железные петли ворот бокса №24 в щепки!",
        bgm="action", chapter="ГЛАВА 5: ОБЛАВА СПЕЦНАЗА", bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, flash=True, next_id="ch5_1")
    add("ch5_1", 
        "— РАБОТАЕТ СПЕЦНАЗ «ГРОМ»! ОРУЖИЕ НА ЗЕМЛЮ! МОРДОЙ В ПОЛ, МРАЗЬ!",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, flash=True, next_id="ch5_2")
    add("ch5_2", 
        "Светошумовая граната разорвала тьму ослепительной белой вспышкой. Звон в ушах заглушил все звуки мира.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", flash=True, next_id="ch5_3")
    add("ch5_3", 
        "Десятки красных лазерных точек прицелов заплясали по стенам гаража. Бойцы в черном тактическом камуфляже и титановых шлемах ворвались внутрь.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_4")
    add("ch5_4", 
        "Никита вслепую метнулся к верстаку, но тяжелый кованый ботинок сбил его с ног. Лицо парня с размаху врезалось в ледяной замасленный бетон.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", shake=True, next_id="ch5_5")
    add("ch5_5", 
        "— Руки за спину, сука! Не дергайся, прострелю колено!",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_6")
    add("ch5_6", 
        "Стальные наручники с сухим треском впились в запястья до кости. Ротвейлер кинолога яростно рвал зубами край рукава куртки Никиты.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_7")
    add("ch5_7", 
        "Ваня, затаив дыхание за снежным бруствером в тридцати метрах от гаража, сквозь ледяные слезы наблюдал за расправой.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_8")
    add("ch5_8", 
        "— Командир, тут особо крупный размер. Килограммов пять мефедрона и фасовочные пакеты. Готовая группа по части пятой.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_9")
    add("ch5_9", 
        "— Отлично. Пакуйте урода в автозак. Поедет по 228-й на максималку.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_10")
    add("ch5_10", 
        "Никиту выволокли на мороз под мышки, словно тряпичную куклу. Кровь из разбитого носа капала на девственно белый снег, оставляя алые круглые пятна.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch5_11")
    add("ch5_11", 
        "Двери полицейского фургона с тяжелым металлическим лязгом захлопнулись. Синие проблесковые маячки разрезали метель и унеслись вдаль по трассе.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ch6_start")

    # =========================================================================
    # ГЛАВА 6: СУД: СТАТЬЯ 228 (Scenes 135-156)
    # =========================================================================
    add("ch6_start", 
        "Зал районного суда. Казенные бежевые стены, скрипучие скамьи и запах пыли, дешевого табака и человеческого горя.",
        bgm="sadness", chapter="ГЛАВА 6: СУД: СТАТЬЯ 228", bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_1")
    add("ch6_1", 
        "За бронированным стеклом судебного «аквариума» сидел Никита. Наголо обритая голова, заострившийся нос, синяки под потухшими глазами.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch6_2")
    add("ch6_2", 
        "На первом ряду тихо и безутешно выла его мать, сжимая в руках иконку Николая Чудотворца. Ваня сидел рядом, держа ее за холодную руку.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_3")
    add("ch6_3", 
        "— Именем Российской Федерации... — монотонно зачитала судья в тяжелой черной мантии, не поднимая глаз от пухлой папки дела.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_4")
    add("ch6_4", 
        "— Признать виновным в совершении преступления, предусмотренного частью 5 статьи 228.1 УК РФ: незаконный сбыт наркотических средств в особо крупном размере...",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_5")
    add("ch6_5", 
        "— Назначить наказание в виде 15 (пятнадцати) лет лишения свободы с отбыванием в исправительной колонии строгого режима.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", shake=True, next_id="ch6_dossier")
    add("ch6_dossier", 
        "Официальный обвинительный приговор суда вступил в законную силу. Ознакомьтесь с материалами уголовного дела.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", document="assets/backgrounds/document_nikita_228.png", next_id="ch6_6")
    add("ch6_6", 
        "Пятнадцать лет. Вся юность, все мечты, всё будущее парня было запечатано гербовой печатью на казенном бланке.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch6_7")
    add("ch6_7", 
        "Никита посмотрел сквозь стекло прямо в глаза Ване. На его губах появилось беззвучное движение: «Прости меня, брат...».",
        bg="assets/backgrounds/bg_anime_train_station.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", next_id="ch6_8")
    add("ch6_8", 
        "Конвой надел на него наручники и повел по длинному кафельному коридору в подвальный накопитель. Первый из четверых пал в бездну.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch7_start")

    # =========================================================================
    # ГЛАВА 7: СТОЛИЧНЫЙ МИРАЖ (Scenes 157-178)
    # =========================================================================
    add("ch7_start", 
        "Осень 2020 года. Москва встречает ослепительным морем неоновых огней и ревом моторов представительских спорткаров.",
        bgm="epic", chapter="ГЛАВА 7: СТОЛИЧНЫЙ МИРАЖ", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_1")
    add("ch7_1", 
        "Стеклянные башни делового комплекса «Москва-Сити» пронзают низкие облака, сияя километровыми светодиодными фасадами.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_2")
    add("ch7_2", 
        "Ваня приехал на встречу с Асланом. Дела бренда ИванЭнерджи шли в гору, но трагедия Никиты незаживающей раной жгла душу.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_3")
    add("ch7_3", 
        "Аслан встретил его у панорамного лифта башни «Федерация». Дорогой итальянский костюм, золотые часы Rolex, белоснежная улыбка.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch7_4")
    add("ch7_4", 
        "— Ваня, братишка! Добро пожаловать на вершину мира! — Аслан крепко обнял друга, пахнув селективным парфюмом.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch7_5")
    add("ch7_5", 
        "— Смотри вниз: люди отсюда кажутся муравьями! Я же говорил тебе тогда на школьной крыше, что возьму эту столицу за горло!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch7_6")
    add("ch7_6", 
        "Они поднялись на 62-й этаж в роскошные апартаменты с панорамным остеклением во всю стену.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_7")
    add("ch7_7", 
        "Вокруг толпились молодые блогеры, модели в открытых платьях, операторы со стабилизаторами. Шампанское Cristal лилось рекой.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_8")
    add("ch7_8", 
        "Но Ваня с его цепким аналитическим взглядом сразу заметил фальшь. Улыбка Аслана была натянутой, пальцы судорожно сжимали бокал.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_9")
    add("ch7_9", 
        "На трех смартфонах Аслана без умолку вспыхивали уведомления банковских приложений и сообщения с угрозами блокировки счетов.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch7_10")
    add("ch7_10", 
        "— Аслан, откуда у тебя аренда этих апартаментов? Это стоит полтора миллиона в месяц, — тихо спросил Ваня, отведя друга на балконную террасу.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch7_11")
    add("ch7_11", 
        "— Ой, брось, Вано! Партнерские контракты, рекламные интеграции онлайн-казино... Я на одной рефералке делаю по сотне тысяч баксов в неделю!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_start")

    # =========================================================================
    # ГЛАВА 8: БАШНЯ «ФЕДЕРАЦИЯ» (Scenes 179-200)
    # =========================================================================
    add("ch8_start", 
        "Вечеринка в пентхаусе гремела до глубокой ночи. Басы сотрясали бронированное панорамное стекло.",
        bgm="tension", chapter="ГЛАВА 8: БАШНЯ «ФЕДЕРАЦИЯ»", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch8_1")
    add("ch8_1", 
        "Когда гости начали расходиться по VIP-клубам, Аслан остался сидеть на мраморной барной стойке, залпом допивая виски.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch8_2")
    add("ch8_2", 
        "— Всё кончено, Ваня... — вдруг глухо произнес Аслан, и его маска уверенного плейбоя мгновенно осыпалась.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_3")
    add("ch8_3", 
        "— О чем ты говоришь? Ты же только что хвастался миллионными контрактами!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch8_4")
    add("ch8_4", 
        "— Все мои аккаунты заблокировал Роскомнадзор за пропаганду нелегального гемблинга. Счета заморожены налоговой. Рекламодатели требуют неустойку в сорок миллионов!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_5")
    add("ch8_5", 
        "— Но у меня есть шанс отыграться, — глаза Аслана лихорадочно блеснули нездоровым огнем. — Сегодня в закрытом VIP-клубе на Новом Арбате игра по максимальным ставкам. У меня есть математическая система на рулетке!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch8_6")
    add("ch8_6", 
        "— Аслан, ты с ума сошел?! В казино нет никакой математики, кроме гарантированного выигрыша заведения! Остановись, пока не поздно!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch8_7")
    add("ch8_7", 
        "— Поехали со мной. Ты увидишь своими глазами, как я верну всё за один вечер. Или я сделаю это без тебя!",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch9_start")

    # =========================================================================
    # ГЛАВА 9: ЗЕРО И БЕЗДНА (Scenes 201-226)
    # =========================================================================
    add("ch9_start", 
        "Подземный бункер под старинным особняком в переулках Арбата. Закрытый VIP-клуб для нелегальной игры на сверхвысокие ставки.",
        bgm="tension", chapter="ГЛАВА 9: ЗЕРО И БЕЗДНА", bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_1")
    add("ch9_1", 
        "Тяжелые хрустальные люстры, зеленые суконные столы, рулеточное колесо из красного дерева и гробовая тишина, нарушаемая лишь щелканьем фишек.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_2")
    add("ch9_2", 
        "В углу сидели крепкие мужчины с холодными цепкими глазами — представители теневых ростовщиков.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_3")
    add("ch9_3", 
        "Аслан подошел к столу. Крупье в черном жилете бесстрастно объявил: «Делайте ваши ставки, господа».",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_4")
    add("ch9_4", 
        "Аслан выставил пять миллионов рублей на Черное. Шарик застучал по латунным перегородкам... Красное 14. Проигрыш.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", shake=True, next_id="ch9_5")
    add("ch9_5", 
        "Лицо Аслана покрылось испариной. Он подозвал ростовщика и, не глядя, подписал вексель на пятнадцать миллионов рублей под залог несуществующего имущества.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_6")
    add("ch9_6", 
        "— Всё на Зеро. Все пятнадцать миллионов — на одиночное Зеро! — крикнул Аслан срывающимся фальцетом.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_vip_casino.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch9_choice_casino")
    add("ch9_choice_casino", 
        "Аслан поставил всю жизнь на одну цифру. Что предпринять Ване?",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg",
        choices=[
            {"text": "Выкупить вексель Аслана за счет резервного фонда ИванЭнерджи (Ветка спасения Аслана)", "target": "ending_aslan_saved_1"},
            {"text": "Попытаться силой оттащить его от стола рулетки", "target": "ch9_try_pull"},
            {"text": "Застыть в немом ужасе, наблюдая за вращением колеса (Каноничный путь)", "target": "ch9_wheel_spin"}
        ])
    add("ch9_try_pull", 
        "Ваня бросился вперед, но два двухметровых охранника заблокировали проход: «Не мешайте гостю играть, молодой человек».",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_wheel_spin")
    add("ch9_wheel_spin", 
        "Крупье запустил шарик из слоновой кости в обратную сторону. Время словно замедлило свой бег.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_7")
    add("ch9_7", 
        "Тук... тук... тук... Шарик замедлил ход, перескочил через зеленую ячейку «0» и с металлическим щелчком замер на Черном 11.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", shake=True, next_id="ch9_8")
    add("ch9_8", 
        "— Ставки проиграны. Черное, одиннадцать, нечетное, — ледяным тоном произнес крупье, сгребая фишки лопаткой.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_9")
    add("ch9_9", 
        "Аслан пошатнулся, словно получил пулю в живот. Ростовщик медленно поднялся с дивана, убирая подписанный вексель во внутренний карман.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch9_10")
    add("ch9_10", 
        "— До рассвета, Аслан. Ровно до шести утра. Если денег не будет — мы придем за тобой и за твоей семьей.",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ch10_start")

    # =========================================================================
    # ГЛАВА 10: ПЕТЛЯ НА 62-М ЭТАЖЕ (Scenes 227-248)
    # =========================================================================
    add("ch10_start", 
        "Пять часов утра. Башня «Федерация». За панорамным окном сплошной стеной хлещет ледяной осенний ливень.",
        bgm="sadness", chapter="ГЛАВА 10: ПЕТЛЯ НА 62-М ЭТАЖЕ", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_1")
    add("ch10_1", 
        "В пустых огромных апартаментах царил полумрак. На полу валялись осколки бокалов, пустые бутылки и обрывки договоров.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_2")
    add("ch10_2", 
        "Аслан сидел на полу спиной к окну, обхватив голову руками. Телефон на стеклянном столике непрерывно вибрировал от звонков коллекторов.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", next_id="ch10_3")
    add("ch10_3", 
        "Ваня судорожно набирал юристов и партнеров, пытаясь собрать необходимую сумму, но кредитные линии были закрыты до утра понедельника.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch10_4")
    add("ch10_4", 
        "— Ваня... брось трубку, — тихо и совершенно спокойно сказал Аслан.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_5")
    add("ch10_5", 
        "— Мы найдем выход! Я продам склады в Подольске, заложу транспорт! Держись!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch10_6")
    add("ch10_6", 
        "— Ты не понимаешь. Дело не в деньгах. Я пустой внутри, Ваня. Я продал всё: дружбу, совесть, семью — ради этих чертовых лайков и чужого одобрения.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_7")
    add("ch10_7", 
        "— Помнишь нашу крышу? Мы ведь были счастливы тогда, когда у нас не было ни рубля... Скажи маме, что я любил ее.",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ch10_8")
    add("ch10_8", 
        "Ваня отвернулся на секунду, чтобы ответить на звонок банка. В этот миг раздался звон открывшейся створки сервисного балкона.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_9")
    add("ch10_9", 
        "— АСЛАН, НЕТ!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ch10_10")
    add("ch10_10", 
        "Порыв ледяного ветра ворвался в комнату, сметая бумаги со стола. На краю парапета никого не было. Лишь темнота двухсотметровой бездны.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch10_dossier")
    add("ch10_dossier", 
        "Протокол следственного комитета по факту гибели блогера в комплексе «Москва-Сити».",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", document="assets/backgrounds/document_aslan_city.png", next_id="ch10_11")
    add("ch10_11", 
        "Второй из четверых ушел в вечную тьму столичного дождя. Остались только двое.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_start")

    # =========================================================================
    # ГЛАВА 11: АМОРАЛЬНЫЙ ХАЙП (ИСМАИЛ) (Scenes 249-270)
    # =========================================================================
    add("ch11_start", 
        "2021 год. Смерть Аслана и приговор Никиты окончательно сломали Исмаила. Его тонкая сатира превратилась в ядовитую ненависть ко всему обществу.",
        bgm="tension", chapter="ГЛАВА 11: АМОРАЛЬНЫЙ ХАЙП", bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_1")
    add("ch11_1", 
        "Исмаил создал радикальный Telegram-канал и начал проводить провокационные уличные стримы, балансируя на грани фола.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_2")
    add("ch11_2", 
        "Оскорбления прохожих, провокации сотрудников правоохранительных органов, глумление над святынями — его ролики собирали миллионы просмотров озверевшей толпы.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_3")
    add("ch11_3", 
        "Ваня выследил Исмаила в подвальном компьютерном клубе на Савеловской, где тот вел ночной эфир.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", next_id="ch11_4")
    add("ch11_4", 
        "Исмаил сидел перед микрофоном с безумным блеском за стеклами очков-авиаторов, яростно печатая ответы хейтерам.",
        bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch11_5")
    add("ch11_5", 
        "— Исмаил! Прекрати эту вакханалию! — Ваня выдернул кабель веб-камеры из разъема. — Центр «Э» уже возбудил проверку по твоим высказываниям! Тебя посадят!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_6")
    add("ch11_6", 
        "— Да пусть сажают! — захохотал Исмаил злым истерическим смехом. — Никита гниет на строгом режиме, Аслан разбился о тротуар... Ты думаешь, мне есть что терять?!",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_7")
    add("ch11_7", 
        "— Этот мир заслуживает только плевка в лицо! И я заставлю их захлебнуться собственной желчью!",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_8")
    add("ch11_8", 
        "— Уезжай за границу прямо сегодня. У меня есть связи в Минске, оттуда переправим тебя в Европу. Я оплачу дорогу!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch11_9")
    add("ch11_9", 
        "— Бежать? Как крыса? Нет, Ванечка. Я сыграю свой спектакль до финального занавеса.",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch12_start")

    # =========================================================================
    # ГЛАВА 12: ОДИНОЧКА СИЗО-1 (Scenes 271-292)
    # =========================================================================
    add("ch12_start", 
        "Вторник, шесть утра. Дверь съемной квартиры Исмаила вылетела внутрь вместе с дверной коробкой от удара кувалды.",
        bgm="tension", chapter="ГЛАВА 12: ОДИНОЧКА СИЗО-1", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", shake=True, flash=True, next_id="ch12_1")
    add("ch12_1", 
        "Оперативники ФСБ и бойцы СОБРа уложили Исмаила в пол прямо в пижаме. Изъяты жесткие диски, флеш-карты и студийное оборудование.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_2")
    add("ch12_2", 
        "Через два часа Исмаил уже сидел в следственном изоляторе СИЗО-1 «Матросская Тишина».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_3")
    add("ch12_3", 
        "Одиночная камера специального блока. Плесень на сырых каменных стенах, железная привинченная к полу койка и тусклый свет луны сквозь решетку «реснички».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_4")
    add("ch12_4", 
        "Здесь не было ни зрителей, ни донатов, ни лайков. Только глухой звон шагов надзирателя по коридору и лязг открывающихся кормушек.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_5")
    add("ch12_5", 
        "Спесь и цинизм слетели с Исмаила в первые же сутки. Он сидел на ледяных нарах, обхватив колени, и слушал тишину каменного мешка.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch12_6")
    add("ch12_6", 
        "Следователь по особо важным делам положил перед ним распечатки его постов: «Статья 282 часть 2 пункт а, б. До шести лет лишения свободы. Чистосердечное писать будете?».",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch12_7")
    add("ch12_7", 
        "Исмаил подписал всё, не читая. Его пальцы дрожали, чернила расплывались по протоколу.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_start")

    # =========================================================================
    # ГЛАВА 13: СТАТЬЯ 282 И ШИЗО (Scenes 293-314)
    # =========================================================================
    add("ch13_start", 
        "Суд был закрытым и молниеносным. Никакой прессы, никаких сочувствующих подписчиков.",
        bgm="sadness", chapter="ГЛАВА 13: СТАТЬЯ 282 И ШИЗО", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_1")
    add("ch13_1", 
        "Приговор: 5 лет лишения свободы с отбыванием в колонии общего режима за полярным кругом (поселок Харп).",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_dossier")
    add("ch13_dossier", 
        "Официальная карточка заключенного Исмаила по статье 282 УК РФ.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", document="assets/backgrounds/document_ismail_282.png", next_id="ch13_2")
    add("ch13_2", 
        "Ване разрешили короткое свидание через двойное стекло переговорного пункта СИЗО.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", next_id="ch13_3")
    add("ch13_3", 
        "Исмаил взял тяжелую черную телефонную трубку. Его щеки ввалились, взгляд потух.",
        bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", next_id="ch13_4")
    add("ch13_4", 
        "— Ваня... Завтра этап. На Север, в вечную мерзлоту. Я не выживу там, понимаешь? У меня астма...",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch13_5")
    add("ch13_5", 
        "— Я подал кассационную жалобу, подключил правозащитников! Мы будем бороться за УДО!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch13_6")
    add("ch13_6", 
        "— Спасибо тебе, Вано. За то, что не отвернулся. Ты единственный, кто остался настоящим человеком среди нас четверых.",
        speaker="Исмаил", speaker_class="ismail", bg="assets/backgrounds/bg_anime_sizo_cell.jpg", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch14_start")

    # =========================================================================
    # ГЛАВА 14: ТИШИНА НА СЕВЕРЕ (Scenes 315-336)
    # =========================================================================
    add("ch14_start", 
        "Ярославский вокзал. Глухая ночь, ледяная метель кружит над перроном специального назначения.",
        bgm="sadness", chapter="ГЛАВА 14: ТИШИНА НА СЕВЕРЕ", bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_1")
    add("ch14_1", 
        "Серый вагон-«столыпин» с решетками на окнах стоял под парами маневрового тепловоза.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_2")
    add("ch14_2", 
        "Лай овчарок, крики конвоя с автоматами наперевес: «По пять человек бегом марш! Шаг влево, шаг вправо — применение оружия без предупреждения!».",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_3")
    add("ch14_3", 
        "Исмаил в казенном сером бушлате без пуговиц поднялся по обледенелым ступенькам тамбура. Железная дверь захлопнулась.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_4")
    add("ch14_4", 
        "Поезд тронулся, унося его на Крайний Север, туда, где полгода длится полярная ночь и температура опускается до минус пятидесяти.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_5")
    add("ch14_5", 
        "Через год пришло короткое казенное уведомление: заключенный скончался в санитарной части колонии от острой легочной недостаточности.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch14_6")
    add("ch14_6", 
        "Трое погибли или сгинули в застенках. Ваня остался совершенно один.",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch15_start")

    # =========================================================================
    # ГЛАВА 15: ИМПЕРИЯ IVANENERGY (ВАНЯ) (Scenes 337-358)
    # =========================================================================
    add("ch15_start", 
        "2022 год. Штаб-квартира корпорации IvanEnergy в ультрасовременном стеклянном небоскребе.",
        bgm="epic", chapter="ГЛАВА 15: ИМПЕРИЯ IVANENERGY", bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_1")
    add("ch15_1", 
        "Огромный кабинет на последнем этаже. Панорамные окна от пола до потолка, за которыми шумит дождь по зеркальным фасадам.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_2")
    add("ch15_2", 
        "Ваня стоял у окна с бокалом минеральной воды. Его бренд стал национальным лидером: заводы в трех регионах, миллиардный оборот.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch15_3")
    add("ch15_3", 
        "Он добился всего, о чем мечтал мальчишкой за школьной партой. Стал финансовым гигантом, независимым и влиятельным.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_4")
    add("ch15_4", 
        "Но на массивном дубовом столе стояла лишь одна фотография в серебряной рамке: четверо улыбающихся выпускников 11-Б на солнечной школьной крыше.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_5")
    add("ch15_5", 
        "Никита — на строгом режиме в тайге. Аслан — в могиле на Хованском кладбище. Исмаил — навеки погребен под вечной мерзлотой Ямала.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch15_6")
    add("ch15_6", 
        "— Зачем всё это? — шептал Ваня в пустоту кабинета. — Миллиарды, контракты, заводы... Если рядом нет ни одной живой души, которая помнит, кем ты был на самом деле.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_start")

    # =========================================================================
    # ГЛАВА 16: ВОЕНКОМАТ И ВЫБОР (Scenes 359-380)
    # =========================================================================
    add("ch16_start", 
        "Осень 2022 года. В стране объявлена частичная мобилизация.",
        bgm="tension", chapter="ГЛАВА 16: ВОЕНКОМАТ И ВЫБОР", bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_1")
    add("ch16_1", 
        "На стол Вани легла казенная повестка из военного комиссариата с требованием явиться с вещами в течение суток.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_2")
    add("ch16_2", 
        "Совет директоров и начальники юридического департамента немедленно собрались на экстренное совещание в кабинете главы холдинга.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_3")
    add("ch16_3", 
        "— Иван Андреевич! Частный борт до Дубая готов к вылету из Внуково-3 через два часа! Ваши счета за границей полностью разблокированы!",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_4")
    add("ch16_4", 
        "— Мы оформим вам бронь оборонного предприятия или медицинское освобождение задним числом за любые деньги! Вы не можете рисковать жизнью!",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", next_id="ch16_5")
    add("ch16_5", 
        "Ваня подошел к окну и долго смотрел на струи дождя, стекающие по панорамному стеклу.",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch16_choice_1")
    add("ch16_choice_1", 
        "Главный выбор жизни Ивана: сбежать в комфорт или разделить судьбу своего поколения?",
        bg="assets/backgrounds/bg_anime_vanya_office.jpg",
        choices=[
            {"text": "«Я не побегу. Мои братья не бежали от своей судьбы — и я не стану прятаться за чужие спины.»", "target": "ch16_accept"},
            {"text": "«Купить бронь и остаться управлять империей» (Попытка уклониться)", "target": "ch16_try_flee"}
        ])
    add("ch16_try_flee", 
        "Ваня посмотрел на документы на вылет, но перед глазами снова встали лица пацанов с той школьной крыши. Совесть обожгла сильнее каленого железа: «Нет. Я не смогу с этим жить».",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_accept")
    add("ch16_accept", 
        "— Передайте управление холдингом фонду поддержки детских домов и ветеранов, — спокойно распорядился Ваня, подписывая доверенность.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vanya_office.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch16_6")
    add("ch16_6", 
        "Он снял свой безупречный костюм, надел простую армейскую форму и вышел на призывной пункт под звуки марша «Прощание славянки».",
        bg="assets/backgrounds/bg_anime_train_station.jpg", next_id="ch17_start")

    # =========================================================================
    # ГЛАВА 17: МАЛАЯ ТОКМАЧКА (Scenes 381-408)
    # =========================================================================
    add("ch17_start", 
        "Лето 2023 года. Запорожское направление. Район села Малая Токмачка.",
        bgm="action", chapter="ГЛАВА 17: МАЛАЯ ТОКМАЧКА", bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_1")
    add("ch17_1", 
        "Серая выжженная земля, изрытая воронками от тяжелых фугасных снарядов. Остовы сгоревшей бронетехники и свист осколков над головой.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_2")
    add("ch17_2", 
        "Ваня — теперь командир мотострелкового отделения с позывным «Студент». В окопе по колено жидкой глины.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch17_3")
    add("ch17_3", 
        "В нагрудном кармане бронежилета, прямо возле сердца, лежит та самая школьная фотография четверых друзей, завернутая в полиэтилен.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_4")
    add("ch17_4", 
        "— Внимание всем! — хрипит рация в блиндаже. — С направления лесополосы идет бронегруппа противника! Танки и БМП при поддержке дронов-камикадзе!",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_5")
    add("ch17_5", 
        "Гул танковых дизелей заставил дрожать стенки траншеи. Первый снаряд разнес край бруствера в клочья, осыпав бойцов землей.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ch17_6")
    add("ch17_6", 
        "— К бою! Занять огневые позиции! Приготовить гранатометы! — скомандовал Ваня, передергивая затвор автомата.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch17_7")
    add("ch17_7", 
        "Ожесточенный бой шел непрерывно четыре часа. Отделение Вани отбило три штурма, уничтожив два вражеских бронетранспортера.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch17_8")
    add("ch17_8", 
        "Но боекомплект подошел к концу. Тяжелый артиллерийский дивизион противника начал массированную артподготовку по позициям окопа.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, next_id="ch17_choice_radio")
    add("ch17_choice_radio", 
        "Критический момент боя в окопе под Малой Токмачкой:",
        bg="assets/backgrounds/bg_anime_battlefield.jpg",
        choices=[
            {"text": "Приказать раненым бойцам отходить, а самому остаться корректировать огонь артиллерии по рации (Путь подвига)", "target": "ending_true_brotherhood_1"},
            {"text": "Укрыться в заглубленном блиндаже под обстрелом (Каноничный путь)", "target": "ch18_start"}
        ])

    # =========================================================================
    # ГЛАВА 18: БЕЗ ВЕСТИ ПРОПАВШИЙ (Scenes 409-430)
    # =========================================================================
    add("ch18_start", 
        "Снаряды калибра 152 миллиметра перепахивали позиции отделения один за другим.",
        bgm="sadness", chapter="ГЛАВА 18: БЕЗ ВЕСТИ ПРОПАВШИЙ", bg="assets/backgrounds/bg_anime_battlefield.jpg", shake=True, flash=True, next_id="ch18_1")
    add("ch18_1", 
        "Прямое попадание тяжелого снаряда в перекрытие центрального блиндажа. Сноп огня, земляной вал и гробовая тишина контузии.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ch18_2")
    add("ch18_2", 
        "Сквозь звон в ушах Ваня видел, как над окопом медленно поднимается черный дым, закрывая свинцовое небо.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ch18_3")
    add("ch18_3", 
        "Пальцы нащупали в кармане размокшую фотографию. На ней Никита, Аслан и Исмаил улыбались сквозь пятна гари и крови.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ch18_4")
    add("ch18_4", 
        "— Я иду к вам, братья... — прошептал Ваня, закрывая глаза. — Наша смена... закончена...",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ch18_dossier")
    add("ch18_dossier", 
        "Официальное извещение Министерства обороны РФ о судьбе гвардии рядового Ивана.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", document="assets/backgrounds/document_vanya_tokmachka.png", next_id="ch18_5")
    add("ch18_5", 
        "«Пропал без вести при выполнении боевой задачи в районе н.п. Малая Токмачка». Четвертый и последний из выпускников 11-Б ушел в вечность.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="epilogue_start")

    # =========================================================================
    # ЭПИЛОГ: ПУСТОЙ КЛАСС (Scenes 431-455)
    # =========================================================================
    add("epilogue_start", 
        "25 мая 2024 года. Ровно десять лет спустя.",
        bgm="sadness", chapter="ЭПИЛОГ: ПУСТОЙ КЛАСС", bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_1")
    add("epilogue_1", 
        "В старом здании школы идет капитальный ремонт, но кабинет математики на третьем этаже словно застыл во времени.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_2")
    add("epilogue_2", 
        "Сквозь немытые стекла льется тот самый золотой свет заката, чертя теплые полосы на деревянных полах.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_3")
    add("epilogue_3", 
        "На классной доске, чудом не стертая за десятилетие, всё еще белеет меловая надпись: «Выпуск 11-Б».",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_4")
    add("epilogue_4", 
        "И в этих предзакатных лучах вдруг возникают четыре призрачных силуэта в школьных бордовых пиджаках.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_5")
    add("epilogue_5", 
        "Никита с усмешкой крутит зажигалку. Аслан любуется своим отражением. Исмаил язвительно шутит. А Ваня закрывает свой ежедневник.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_6")
    add("epilogue_6", 
        "Они снова вместе. Молодые, счастливые, полные надежд и не знающие, что ждет их впереди.",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="epilogue_7")
    add("epilogue_7", 
        "Где-то в коридоре гулко и протяжно звенит последний школьный звонок, эхом растворяясь в вечерней тишине...",
        bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="game_over")
    add("game_over", 
        "КОНЕЦ ИСТОРИИ. Спасибо за прохождение визуальной новеллы «ПОСЛЕДНИЙ ВЫПУСК [REMASTERED: ANIME EDITION]».",
        chapter="ФИНАЛ", bg="assets/backgrounds/bg_anime_school_sunset.jpg",
        choices=[
            {"text": "Начать сначала (Главное меню)", "target": "prologue_start"},
            {"text": "Попробовать спасти Никиту (Перейти к развилке в гараже)", "target": "ch3_choice_lock"},
            {"text": "Попробовать выкупить долг Аслана (Перейти к развилке в казино)", "target": "ch9_choice_casino"}
        ])

    # =========================================================================
    # ВЕТКА СПАСЕНИЯ НИКИТЫ (Rehab Alternate Branch)
    # =========================================================================
    add("ending_nikita_rehab_1", 
        "Ваня молча подошел к верстаку, сгреб все пакеты с синтетикой в железную бочку и плеснул растворителем.",
        bgm="tension", chapter="КОНЦОВКА: СПАСЕНИЕ НИКИТЫ", bg="assets/backgrounds/bg_anime_garages_night.jpg", next_id="ending_nikita_rehab_2")
    add("ending_nikita_rehab_2", 
        "— Что ты творишь?! Они убьют нас! — закричал Никита, пытаясь броситься к бочке.",
        speaker="Никита", speaker_class="nikita", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="ending_nikita_rehab_3")
    add("ending_nikita_rehab_3", 
        "Чирк зажигалки. Огонь взметнулся до самого потолка, сжигая смертоносный яд в пепел.",
        bg="assets/backgrounds/bg_anime_garages_night.jpg", flash=True, shake=True, next_id="ending_nikita_rehab_4")
    add("ending_nikita_rehab_4", 
        "— Я перевел два миллиона твоему куратору с корпоративного счета. А тебя я сейчас забираю в закрытый реабилитационный центр на Алтае.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_garages_night.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_nikita_rehab_5")
    add("ending_nikita_rehab_5", 
        "Через два года жестокой ломки, терапии и психологической реабилитации в горах Никита вернулся к нормальной жизни.",
        bgm="epic", bg="assets/backgrounds/bg_anime_school_sunset.jpg", next_id="ending_nikita_rehab_final")
    add("ending_nikita_rehab_final", 
        "Никита открыл бесплатную спортивную секцию бокса для трудных подростков в родном городе, спасая десятки ребят от той бездны, в которую едва не рухнул сам.",
        chapter="КОНЦОВКА: СПАСЕНИЕ НИКИТЫ", bg="assets/backgrounds/bg_anime_school_sunset.jpg", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left",
        choices=[
            {"text": "Вернуться в главное меню", "target": "prologue_start"}
        ])

    # =========================================================================
    # ВЕТКА СПАСЕНИЯ АСЛАНА (Bailout Alternate Branch)
    # =========================================================================
    add("ending_aslan_saved_1", 
        "— Стойте! — Ваня вышел вперед и выложил на сукно перед ростовщиками подписанный договор об отчуждении двадцати процентов акций ИванЭнерджи.",
        bgm="sadness", chapter="КОНЦОВКА: ВЫКУП АСЛАНА", bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ending_aslan_saved_2")
    add("ending_aslan_saved_2", 
        "— Здесь обеспечение на тридцать миллионов рублей. Долг Аслана закрыт прямо сейчас. Верните его вексель.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_vip_casino.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_aslan_saved_3")
    add("ending_aslan_saved_3", 
        "Ростовщик внимательно изучил печати и кивнул охране: «Вексель аннулирован. Забирайте своего друга и чтобы ноги вашей не было в клубе».",
        bg="assets/backgrounds/bg_anime_vip_casino.jpg", next_id="ending_aslan_saved_4")
    add("ending_aslan_saved_4", 
        "На улице, под холодным ночным дождем, Аслан упал на колени перед Ваней, рыдая как ребенок: «Ваня... Ты отдал ради меня треть своей компании... Зачем?!».",
        speaker="Аслан", speaker_class="aslan", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="ending_aslan_saved_5")
    add("ending_aslan_saved_5", 
        "— Затем, что мы давали клятву на школьной крыше, дурак, — Ваня помог ему подняться. — Ты уезжаешь из Москвы завтра же.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_moscow_city.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="ending_aslan_saved_final")
    add("ending_aslan_saved_final", 
        "Аслан вернулся в провинцию, удалил все соцсети и открыл маленькую семейную пекарню. Он больше никогда не надевал костюм за миллион, но наконец обрел покой и настоящих друзей.",
        chapter="КОНЦОВКА: ВЫКУП АСЛАНА", bgm="epic", bg="assets/backgrounds/bg_anime_school_sunset.jpg", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right",
        choices=[
            {"text": "Вернуться в главное меню", "target": "prologue_start"}
        ])

    # =========================================================================
    # ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б (True Brotherhood Ending)
    # =========================================================================
    add("ending_true_brotherhood_1", 
        "— Всему взводу — отход во вторую линию траншей! Я остаюсь на связи и навожу артиллерию на себя! Выполнять приказ!",
        bgm="climax", chapter="ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б", bg="assets/backgrounds/bg_anime_battlefield.jpg", speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ending_true_brotherhood_2")
    add("ending_true_brotherhood_2", 
        "Бойцы под прикрытием дымовой завесы эвакуировали тяжелораненых. Ваня остался один в разрушенном дзоте с радиостанцией.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ending_true_brotherhood_3")
    add("ending_true_brotherhood_3", 
        "— Батарея, примите координаты: квадрат 47-31, огонь дивизионом беглым! Накройте всю высоту!",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_battlefield.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", shake=True, next_id="ending_true_brotherhood_4")
    add("ending_true_brotherhood_4", 
        "Залпы реактивных систем «Торнадо-Г» накрыли наступающую колонну. Враг был отброшен с колоссальными потерями.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", flash=True, shake=True, next_id="ending_true_brotherhood_5")
    add("ending_true_brotherhood_5", 
        "Чудом выжившего под обломками бетона Ивана откопали разведчики через восемь часов. Тяжелое ранение, орден Мужества и долгие месяцы госпиталей.",
        bg="assets/backgrounds/bg_anime_battlefield.jpg", next_id="ending_true_brotherhood_6")
    add("ending_true_brotherhood_6", 
        "После демобилизации Иван продал контрольный пакет акций холдинга и основал благотворительный фонд «Братство 11-Б».",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ending_true_brotherhood_7")
    add("ending_true_brotherhood_7", 
        "Фонд выкупил здание их старой школы, полностью отремонтировал его и создал стипендиальную программу для одаренных ребят из малообеспеченных семей.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ending_true_brotherhood_8")
    add("ending_true_brotherhood_8", 
        "Каждый год 25 мая Иван поднимается на крышу школы. Ветер колышет его волосы. Он смотрит на горизонт и знает: их дружба победила саму смерть.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", next_id="ending_true_brotherhood_final")
    add("ending_true_brotherhood_final", 
        "ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б. Настоящее братство сильнее времени, тюрем и войны.",
        chapter="ИСТИННЫЙ ФИНАЛ: КЛЯТВА 11-Б", bg="assets/backgrounds/bg_anime_school_roof.jpg",
        choices=[
            {"text": "Начать сначала (Главное меню)", "target": "prologue_start"}
        ])

    return s

if __name__ == "__main__":
    story = generate_story_dict()
    print("Generated base story structure with scenes:", len(story))
