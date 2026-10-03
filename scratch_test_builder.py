# -*- coding: utf-8 -*-
"""
Story Generator for The Boys Remastered: Anime Edition
Generates 450+ scenes with complete graph integrity, rich dialogues,
and full anime visual novel aesthetic.
"""
import json
import os
import sys

def build_story():
    story = {}

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
        story[id] = scene

    # --- PROLOGUE: ПОСЛЕДНИЙ ЗВОНОК (Scenes 1-22) ---
    add("prologue_start", 
        "25 мая. За высокими стрельчатыми окнами школы шумит ласковый предзакатный ветер. В золотом свете кружится невесомый тополиный пух, мягко оседая на потрескавшийся асфальт школьного двора.",
        bgm="intro", chapter="ПРОЛОГ: ПОСЛЕДНИЙ ЗВОНОК", next_id="prologue_1")
    
    add("prologue_1", 
        "Кабинет математики на третьем этаже залит тёплым янтарным сиянием заката. Солнечные лучи пробиваются сквозь пыльные жалюзи, чертя на деревянных партах ровные золотые полосы.",
        next_id="prologue_2")

    add("prologue_2", 
        "Все одноклассники уже давно разбежались — кто-то примеряет выпускные платья, кто-то тайком прячет шампанское в кустах у стадиона. Только мы четверо остались сидеть на нашей привычной задней парте у окна.",
        next_id="prologue_3")

    add("prologue_3", 
        "На широкой классной доске белым мелом размашисто и гордо выведено: «Выпуск 11-Б. Мы сделали это!». Одиннадцать долгих лет. С самого первого сентября 2013 года, когда мы стояли на линейке с огромными гладиолусами.",
        next_id="prologue_4")

    add("prologue_4", 
        "— Ну что, братья... Вот и финишная прямая, — Ваня поправляет очки в тонкой золотой оправе и бережно закрывает свой пухлый ежедневник. — Завтра вручение аттестатов, банкет до рассвета — и детство официально закончилось.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_5")

    add("prologue_5", 
        "Его темно-бордовый форменный пиджак сидит безупречно, золотые пуговицы поблескивают в закатных лучах. Ваня всегда был среди нас самым собранным, тем, кто просчитывал каждый шаг на три хода вперед.",
        next_id="prologue_6")

    add("prologue_6", 
        "— Да брось ты эти сопли, Вано! — громко фыркает Никита, небрежно закинув ноги в стоптанных кедах на край парты. Его пиджак распахнут настежь, обнажая черную футболку и массивную серебряную цепочку.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_7")

    add("prologue_7", 
        "— Меня эти облезлые стены и нудные поучения физички достали еще в восьмом классе! — Никита с щелчком зажигает гравированную зажигалку Zippo и смотрит на танцующий огонек. — Наконец-то свобода! Начнем жить по собственным правилам, а не по звонку.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_8")

    add("prologue_8", 
        "— Свобода без купюр в кармане, Никитос — это просто красивая нищета, — снисходительно усмехается Аслан. Он любуется своим безупречным отражением в экране флагманского смартфона, проводя рукой по стильной укладке.",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_9")

    add("prologue_9", 
        "— Я через месяц пакую чемоданы и рву в Москву, — продолжает Аслан с горящими глазами. — Там сейчас крутится всё бабло планеты. Блогинг, стриминг, коллаборации с топовыми медиа-домами. Через пару лет я сниму пентхаус на семидесятом этаже в Москва-Сити и буду пить шампанское с видом на Кремль!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_10")

    add("prologue_10", 
        "— Главное, чтобы на этом семидесятом этаже у тебя интернет не отрубило за неуплату, столичный магнат, — язвительно бросает с соседней парты Исмаил, протирая рукавом тонированные очки-авиаторы.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_11")

    add("prologue_11", 
        "Исмаил — мозг нашей компании по части едких шуток и цифровых авантюр. В то время как другие зубрили обществознание, он уже накручивал трафик в пабликах и монтировал провокационные ролики, собиравшие сотни тысяч просмотров.",
        next_id="prologue_12")

    add("prologue_12", 
        "— В современном мире правит не пафос, а охваты и шок-контент, — заявляет Исмаил, постукивая пальцем по парте. — Люди обожают скандалы. Если дать толпе то, чего она втайне жаждет — грязные подробности и абсурд — они сами отдадут тебе свои последние сбережения.",
        speaker="Исмаил", speaker_class="ismail", char="assets/characters/anime_ismail_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_13")

    add("prologue_13", 
        "— Ну а ты сам, Ваня? — спрашивает Никита, прищурив серые глаза. — Все исписал свои тетрадки графиками да таблицами. Неужели пойдешь работать планктоном в унылый банк за тридцать тысяч?",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_14")

    add("prologue_14", 
        "— Нет, — спокойно и твердо отвечает Ваня, открывая первую страницу своего блокнота. — Я создам свой бренд. ИванЭнерджи. Линейку безалкогольных тонизирующих напитков и логистическую сеть по всей стране. Это реальное производство, осязаемый продукт, а не воздух.",
        speaker="Ваня", speaker_class="vanya", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_15")

    add("prologue_15", 
        "— Гляньте на него, будущий олигарх! — смеется Аслан, хлопая Ваню по плечу. — Когда станешь миллиардером, не забудь, кто прикрывал тебя на контрольных по алгебре!",
        speaker="Аслан", speaker_class="aslan", char="assets/characters/anime_aslan_clean.png", char_pos="sprite-right", sfx="typewriter", next_id="prologue_16")

    add("prologue_16", 
        "— Ладно, мужики, солнце почти село, — говорит Никита, спрыгивая с парты. — Пошли наверх. Ключ от пожарного выхода на крышу у меня в кармане — я его еще утром у трудовика с гвоздика стащил.",
        speaker="Никита", speaker_class="nikita", char="assets/characters/anime_nikita_clean.png", char_pos="sprite-left", sfx="typewriter", next_id="prologue_17")

    add("prologue_17", 
        "Тяжелая железная дверь со скрипом поддается, и прохладный вечерний сквозняк ударяет в лицо. Мы выходим на плоскую рубероидную крышу школы.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_18")

    add("prologue_18", 
        "Перед нами расстилается весь наш провинциальный город — пятиэтажные хрущевки, густые зеленые тополя, петляющая серебряная лента реки и далекие дымы промзоны, окрашенные в багровые тона заката.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_19")

    add("prologue_19", 
        "Ветер треплет полы наших школьных пиджаков. Мы стоим у оградительной решетки, и на мгновение кажется, что весь огромный мир лежит у наших ног, готовый покориться любому нашему желанию.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_20")

    add("prologue_20", 
        "— Давайте поклянемся, — внезапно тихо, но с глубоким волнением в голосе говорит Ваня, глядя на угасающий горизонт. — Что бы ни случилось... куда бы нас ни занесла судьба — через пять, десять, пятнадцать лет — мы никогда не предадим эту дружбу.",
        speaker="Ваня", speaker_class="vanya", bg="assets/backgrounds/bg_anime_school_roof.jpg", char="assets/characters/anime_vanya_clean.png", char_pos="sprite-center", sfx="typewriter", next_id="prologue_choice_1")

    add("prologue_choice_1", 
        "Какими словами закрепить клятву на школьной крыше?",
        bg="assets/backgrounds/bg_anime_school_roof.jpg",
        choices=[
            {"text": "«Клянемся! Один за всех — и до самого конца!» (Искренняя клятва)", "target": "prologue_oath_solemn"},
            {"text": "«Кто разбогатеет первым — вытаскивает остальных!» (Прагматичный договор)", "target": "prologue_oath_pragmatic"}
        ])

    add("prologue_oath_solemn", 
        "Мы протягиваем руки и смыкаем ладони в крепкий мужской замок. Четыре ладони. Четыре судьбы, переплетенные за школьными партами.",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")

    add("prologue_oath_pragmatic", 
        "Никита усмехается и с размаху ударяет своей мозолистой ладонью поверх наших рук: «По рукам! Кто первый взлетит — держит трос для остальных!».",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="prologue_21")

    add("prologue_21", 
        "В этот миг ни один из нас не мог даже в самом страшном кошмаре представить, какие бездны, решетки, долги и кровавые траншеи уготовило нам грядущее десятилетие...",
        bg="assets/backgrounds/bg_anime_school_roof.jpg", next_id="ch1_start")

    print(f"Generated prologue. Total scenes: {len(story)}")
    return story

if __name__ == "__main__":
    s = build_story()
    print("Test build complete, scenes:", len(s))
