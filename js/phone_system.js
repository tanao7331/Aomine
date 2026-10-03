/* ==========================================================================
   THE BOYS: REMASTERED - SMARTPHONE OS & MESSENGER SYSTEM (32X EXPANSION)
   Interactive In-Game Phone: Chats, Voice Notes, Archive Photos & Secret Files
   ========================================================================== */

class SmartphoneSystem {
  constructor() {
    this.unreadCount = 0;
    this.activeTab = 'chats'; // 'chats', 'gallery', 'dossier', 'notes'
    this.activeChatId = 'school_chat';
    
    // Complete Chat Archives (2018 - 2024)
    this.chats = {
      school_chat: {
        id: 'school_chat',
        name: '«Банда 11-Б» (Школьный чат)',
        avatar: 'assets/backgrounds/bg_anime_school_sunset.jpg',
        badge: '4 участника',
        messages: [
          { sender: 'Никита', time: '14 мая 2023, 16:42', text: 'Пацаны, кто физичку на перемене запер в лаборантской? Она там до сих пор стучит 💀' },
          { sender: 'Аслан', time: '14 мая 2023, 16:44', text: 'Ха-ха-ха, это Исмаил сто пудов, у него вечно зуб на нее был из-за контрольной.' },
          { sender: 'Исмаил', time: '14 мая 2023, 16:45', text: 'Я ничего не делал. Просто ключ случайно с внешней стороны вставил и повернул. Физика — лженаука.' },
          { sender: 'Ваня', time: '14 мая 2023, 16:48', text: 'Давайте без глупостей перед последним звонком, нас же директриса без аттестатов оставит.' },
          { sender: 'Никита', time: '25 мая 2023, 23:10', text: 'После выпускного ко мне в гаражи! Я шашлыки замучу, музло включим на всю катушку.' },
          { sender: 'Аслан', time: '25 мая 2023, 23:12', text: 'К черту гаражи, мы 11 лет этого ждали! Я через 2 недели в Москву билеты взял.' },
          { sender: 'Исмаил', time: '25 мая 2023, 23:15', text: 'Клянемся, что не потеряемся, что бы ни случилось?' },
          { sender: 'Ваня', time: '25 мая 2023, 23:16', text: 'Клянемся. Всегда на связи.' },
          { sender: 'Никита', time: '12 июля 2023, 03:14', text: 'Эй... спите? Тут такая тема... короче, бабки срочно нужны. Кто может перехватить десятку?' },
          { sender: 'Ваня', time: '12 июля 2023, 08:30', text: 'Никит, ты куда опять встрял? Возьми трубку.' },
          { sender: 'Аслан', time: '15 июля 2023, 19:20', text: 'Пацаны, зацените просмотры! Ролик залетел на 3.4 миллиона! Мне рекламу казино предложили за полляма!' },
          { sender: 'Исмаил', time: '15 июля 2023, 20:01', text: 'Аслан, не вздумай рекламировать казино. Это грязь и статья в будущем. Потеряешь людей.' },
          { sender: 'Аслан', time: '15 июля 2023, 20:15', text: 'Ой, политолог нашелся)) Зато на эти бабки я хату в Сити снял. Приезжайте в гости, нищеброды!' },
          { sender: 'Никита', time: '28 авг 2023, 01:22', text: 'За мной менты следят. Серьезно. Около бокса бобик стоял два часа. Ваня, спрячь мой рюкзак...' },
          { sender: 'Ваня', time: '28 авг 2023, 01:25', text: 'Никита, какой рюкзак?! Что там?! Не делай глупостей, бросай всё!' },
          { sender: 'Никита', time: '28 авг 2023, 01:40', text: 'Поздно. Кажется, ломают ворота...' }
        ]
      },
      nikita_dm: {
        id: 'nikita_dm',
        name: 'Никита Сидоров',
        avatar: 'assets/characters/anime_nikita_clean.png',
        badge: 'Был в сети: 14 ноя 2023',
        messages: [
          { sender: 'Никита', time: '3 июня 2023, 22:15', text: 'Вань, помнишь как мы в 7 классе карбид взрывали за помойкой? Весело было, пиздец.' },
          { sender: 'Ваня', time: '3 июня 2023, 22:18', text: 'Помню. Тебе тогда еще брови опалило, неделю в кепке ходил.' },
          { sender: 'Никита', time: '18 окт 2023, 02:44', text: 'Ванька... мне хреново. Кости крутит так, будто трактор переехал. Холодно пиздец.' },
          { sender: 'Ваня', time: '18 окт 2023, 02:46', text: 'Никита! Ты опять сорвался на героин?! Где ты находишься?! Я еду!' },
          { sender: 'Никита', time: '18 окт 2023, 02:50', text: 'Не надо, брат. Тут люди серьезные. Если дернешься — обоим пиздец. Просто скажи матери, что я ее люблю...' },
          { sender: 'Ваня', time: '18 окт 2023, 02:51', text: 'НИКИТА! ВОЗЬМИ ТРУБКУ!' },
          { sender: 'Никита', time: '14 ноя 2023, 19:02', text: 'Суд завтра в 10:00. Адвокат сказал — без шансов. 228 часть 4. Пятнашка строгого. Прости меня, пацаны...' }
        ]
      },
      aslan_dm: {
        id: 'aslan_dm',
        name: 'Аслан Мухамеджанов',
        avatar: 'assets/characters/anime_aslan_clean.png',
        badge: 'Был в сети: 21 дек 2023',
        messages: [
          { sender: 'Аслан', time: '10 авг 2023, 14:00', text: 'Ванька! Я взял Гелик в лизинг! Патрики гудят, все блогеры со мной здороваются!' },
          { sender: 'Ваня', time: '10 авг 2023, 14:15', text: 'Рад за тебя, Ас. Но не забывай откладывать. Блогинг не вечен.' },
          { sender: 'Аслан', time: '10 ноя 2023, 04:12', text: 'Вань... срочно... займи 2 миллиона. Пожалуйста. Я на слотах всё слил... у меня таймер до утра.' },
          { sender: 'Ваня', time: '10 ноя 2023, 04:20', text: 'Аслан, ты с ума сошел?! Два миллиона?! Где ты играл?!' },
          { sender: 'Аслан', time: '10 ноя 2023, 04:25', text: 'В закрытом вип-клубе... они паспорт забрали и расписку. Если не отдам — обещали пальцы отрезать.' },
          { sender: 'Ваня', time: '10 ноя 2023, 04:30', text: 'Я переведу со счета IvanEnergy 500к — это всё, что есть на свободном счету. Беги в полицию!' },
          { sender: 'Аслан', time: '21 дек 2023, 23:58', text: 'Долг 50 миллионов. Квартира заложена. Машина ушла за долги. В дверь ломятся трое кавказцев с арматурой. Красивый город... огни Москвы сверху как звезды. Прощай, брат.' }
        ]
      },
      ismail_dm: {
        id: 'ismail_dm',
        name: 'Исмаил Бейсембек',
        avatar: 'assets/characters/anime_ismail_clean.png',
        badge: 'Был в сети: 16 янв 2024',
        messages: [
          { sender: 'Исмаил', time: '5 сент 2023, 11:20', text: 'Я раскопал инфу про контрабанду в нашем порту. Завтра выкладываю расследование.' },
          { sender: 'Ваня', time: '5 сент 2023, 11:22', text: 'Исмаил, остановись. Ты лезешь под каток. Тебя просто посадят.' },
          { sender: 'Исмаил', time: '5 сент 2023, 11:25', text: 'Кто-то должен говорить правду. Если все будут молчать — мы сгнием в этом болоте.' },
          { sender: 'Исмаил', time: '14 янв 2024, 07:15', text: 'Еду на поезде в Москву. Мне назначили встречу в Сити, обещали слить секретные архивы.' },
          { sender: 'Исмаил', time: '14 янв 2024, 18:40', text: 'На Ленинградском вокзале... двое в штатском подошли. Сказали пройти с ними. Телефон отбирают.' },
          { sender: 'Исмаил', time: '16 янв 2024, 12:00', text: '[Записка через адвоката]: Я в СИЗО-1 Матросская Тишина. Спецблок. Шьют 282 статью. Бьют каждую ночь. Не выдержу 6 лет лагерей. Лучше сразу...' }
        ]
      }
    };

    // Notes Archive
    this.notes = [
      { title: 'Клятва 25 мая', date: '25.05.2023', text: 'Мы поклялись на задней парте 11-го класса: ни деньги, ни города нас не разделят. Если кто-то падает — остальные трое тянут за руку. Сколько стоит эта клятва теперь?' },
      { title: 'Рецепт IvanEnergy', date: '14.07.2023', text: 'Партия 100 000 банок разлита. На банке наш общий тотем — черный волк. Первый миллион чистой прибыли. Но радости нет. Никита не берет трубку уже 3 недели.' },
      { title: 'Звонок матери Аслана', date: '22.12.2023', text: 'Она кричала в трубку полчаса. Тело нашли уборщицы в Сити. Шелковый галстук на трубе вентиляции. Все зеркала в пентхаусе были разбиты вдребезги.' },
      { title: 'Повестка в военкомат', date: '10.02.2024', text: 'Кабинет №14. Военком спросил: «Кожин, ты же бизнесмен, бронь есть, чего пришел?». Я ответил: «Мне некуда больше возвращаться. Запишите в штурмовой отряд».' }
    ];
  }

  renderPhoneUI(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="phone-frame">
        <div class="phone-status-bar">
          <span class="phone-time">03:42</span>
          <div class="phone-status-icons">
            <span>LTE</span>
            <span>72%</span>
          </div>
        </div>

        <div class="phone-header">
          <div class="phone-nav-tabs">
            <button class="phone-tab-btn ${this.activeTab === 'chats' ? 'active' : ''}" onclick="window.phoneSys.switchTab('chats')">Чаты</button>
            <button class="phone-tab-btn ${this.activeTab === 'notes' ? 'active' : ''}" onclick="window.phoneSys.switchTab('notes')">Дневник</button>
            <button class="phone-tab-btn ${this.activeTab === 'dossier' ? 'active' : ''}" onclick="window.phoneSys.switchTab('dossier')">Досье</button>
          </div>
          <button class="phone-close-btn" onclick="window.phoneSys.closePhone()">✕</button>
        </div>

        <div class="phone-body" id="phone-body-content">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;
    this.updateTabContent();
  }

  switchTab(tab) {
    this.activeTab = tab;
    const btns = document.querySelectorAll('.phone-tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    this.updateTabContent();
  }

  updateTabContent() {
    const body = document.getElementById('phone-body-content');
    if (!body) return;

    if (this.activeTab === 'chats') {
      let chatListHtml = `
        <div class="chats-sidebar">
      `;
      for (const [key, chat] of Object.entries(this.chats)) {
        chatListHtml += `
          <div class="chat-item-card ${this.activeChatId === key ? 'selected' : ''}" onclick="window.phoneSys.selectChat('${key}')">
            <img class="chat-avatar" src="${chat.avatar}" alt="${chat.name}">
            <div class="chat-item-info">
              <div class="chat-item-name">${chat.name}</div>
              <div class="chat-item-last">${chat.messages[chat.messages.length - 1].text.substring(0, 38)}...</div>
            </div>
          </div>
        `;
      }
      chatListHtml += `</div><div class="chat-active-window" id="chat-messages-area">`;

      const curChat = this.chats[this.activeChatId];
      if (curChat) {
        chatListHtml += `
          <div class="chat-view-header">
            <h4>${curChat.name}</h4>
            <span class="chat-status">${curChat.badge}</span>
          </div>
          <div class="chat-bubbles-container">
        `;
        curChat.messages.forEach(m => {
          const isMe = m.sender === 'Ваня';
          chatListHtml += `
            <div class="chat-bubble ${isMe ? 'bubble-me' : 'bubble-other'}">
              ${!isMe ? `<div class="bubble-sender">${m.sender}</div>` : ''}
              <div class="bubble-text">${m.text}</div>
              <div class="bubble-time">${m.time}</div>
            </div>
          `;
        });
        chatListHtml += `</div>`;
      }
      chatListHtml += `</div>`;
      body.innerHTML = `<div class="phone-chats-layout">${chatListHtml}</div>`;

    } else if (this.activeTab === 'notes') {
      let notesHtml = `<div class="phone-notes-list">`;
      this.notes.forEach(n => {
        notesHtml += `
          <div class="note-card">
            <div class="note-title">${n.title}</div>
            <div class="note-date">${n.date}</div>
            <div class="note-body">${n.text}</div>
          </div>
        `;
      });
      notesHtml += `</div>`;
      body.innerHTML = notesHtml;

    } else if (this.activeTab === 'dossier') {
      body.innerHTML = `
        <div class="phone-dossier-grid">
          <div class="dossier-thumb" onclick="window.game.showDocumentModal('assets/backgrounds/document_nikita_228.png')">
            <img src="assets/backgrounds/document_nikita_228.png" alt="Дело 228">
            <span>Приговор: Никита (ст. 228)</span>
          </div>
          <div class="dossier-thumb" onclick="window.game.showDocumentModal('assets/backgrounds/document_aslan_city.png')">
            <img src="assets/backgrounds/document_aslan_city.png" alt="Протокол СК">
            <span>Протокол: Аслан (Сити)</span>
          </div>
          <div class="dossier-thumb" onclick="window.game.showDocumentModal('assets/backgrounds/document_ismail_282.png')">
            <img src="assets/backgrounds/document_ismail_282.png" alt="Акт ФСИН">
            <span>Акт ФСИН: Исмаил (ст. 282)</span>
          </div>
          <div class="dossier-thumb" onclick="window.game.showDocumentModal('assets/backgrounds/document_vanya_tokmachka.png')">
            <img src="assets/backgrounds/document_vanya_tokmachka.png" alt="Извещение МО">
            <span>Извещение МО: Ваня (Токмачка)</span>
          </div>
        </div>
      `;
    }
  }

  selectChat(chatId) {
    this.activeChatId = chatId;
    this.updateTabContent();
  }

  openPhone() {
    window.horrorAudio.triggerHaptic('medium');
    const modal = document.getElementById('phone-modal');
    if (modal) {
      modal.classList.add('active');
      this.renderPhoneUI(modal);
    }
  }

  closePhone() {
    window.horrorAudio.triggerHaptic('light');
    const modal = document.getElementById('phone-modal');
    if (modal) modal.classList.remove('active');
  }
}

window.phoneSys = new SmartphoneSystem();
