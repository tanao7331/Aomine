/* ==========================================================================
   THE BOYS: REMASTERED - INTERACTIVE MINIGAMES ENGINE (32X EXPANSION)
   4 Psychological Horror Minigames Integrated into Story Progression
   ========================================================================== */

class HorrorMinigamesEngine {
  constructor() {
    this.container = null;
    this.onCompleteCallback = null;
  }

  init(containerId = 'minigame-container') {
    this.container = document.getElementById(containerId);
  }

  // ==========================================================================
  // MINIGAME 1: LOCKPICKING BOX #24 (NIKITA'S GARAGE)
  // ==========================================================================
  startLockpick(onComplete) {
    this.onCompleteCallback = onComplete;
    this.container.classList.add('active');
    window.horrorAudio.triggerHaptic('rigid');

    let currentAngle = 0;
    const targetAngle = 72; // Secret sweet spot
    let tension = 0;
    let unlocked = false;

    this.container.innerHTML = `
      <div class="minigame-card lockpick-game">
        <div class="minigame-header">
          <h3>ВЗЛОМ ЗАМКА: ГСК «СЕВЕРНЫЙ» • БОКС №24</h3>
          <p>Поворачивайте отмычку ползунком и нажмите «Повернуть ключ», чтобы почувствовать сопротивление.</p>
        </div>
        <div class="lock-visual-container">
          <div class="lock-cylinder" id="lock-cylinder">
            <div class="lock-slot" id="lock-slot"></div>
          </div>
          <div class="lock-hint" id="lock-feedback">Замок заржавел от мороза...</div>
        </div>
        <div class="lock-controls">
          <input type="range" id="pick-slider" min="0" max="180" value="0">
          <button class="choice-btn" id="btn-turn-lock">Повернуть ключ [Проверить]</button>
        </div>
      </div>
    `;

    const slider = document.getElementById('pick-slider');
    const slot = document.getElementById('lock-slot');
    const feedback = document.getElementById('lock-feedback');
    const btnTurn = document.getElementById('btn-turn-lock');

    slider.addEventListener('input', (e) => {
      currentAngle = parseInt(e.target.value);
      slot.style.transform = `rotate(${currentAngle - 90}deg)`;
      window.horrorAudio.playTypewriterBlip('nikita');
    });

    btnTurn.addEventListener('click', () => {
      const diff = Math.abs(currentAngle - targetAngle);
      window.horrorAudio.triggerHaptic('medium');

      if (diff <= 8) {
        unlocked = true;
        feedback.innerText = 'ЩЕЛЧОК! Засов с глухим звоном отошел!';
        feedback.style.color = '#88ff88';
        window.horrorAudio.playJumpShock();
        setTimeout(() => {
          this.closeMinigame();
          if (this.onCompleteCallback) this.onCompleteCallback(true);
        }, 1500);
      } else if (diff <= 25) {
        feedback.innerText = 'Штифт поддается, вы очень близко к цели...';
        feedback.style.color = '#ffff99';
        window.horrorAudio.triggerHaptic('light');
      } else {
        feedback.innerText = 'Замок намертво заклинило. Попробуйте другой угол.';
        feedback.style.color = '#ff8888';
        window.horrorAudio.triggerHaptic('heavy');
      }
    });
  }

  // ==========================================================================
  // MINIGAME 2: MOSCOW CITY VIP CASINO ROULETTE (ASLAN'S DOWNWARD SPIRAL)
  // ==========================================================================
  startCasinoRoulette(onComplete) {
    this.onCompleteCallback = onComplete;
    this.container.classList.add('active');
    window.horrorAudio.triggerHaptic('heavy');

    let balance = 15000000; // 15 million rubles
    let round = 1;

    this.container.innerHTML = `
      <div class="minigame-card casino-game">
        <div class="minigame-header">
          <h3>ЗАКРЫТЫЙ VIP-КЛУБ «GOLDEN EMPIRE» • МОСКВА-СИТИ</h3>
          <p>Аслан делает отчаянную ставку на рулетке, пытаясь отыграть 50 000 000 рублей.</p>
        </div>
        <div class="casino-stats">
          <div class="stat-block"><span class="stat-label">Остаток на счете:</span> <span class="stat-val" id="casino-balance">15 000 000 ₽</span></div>
          <div class="stat-block"><span class="stat-label">Долг кредиторам:</span> <span class="stat-val danger">50 000 000 ₽</span></div>
        </div>
        <div class="roulette-wheel-box">
          <div class="roulette-ball" id="roulette-ball">?</div>
          <div class="roulette-status" id="roulette-status">Сделайте последнюю ставку...</div>
        </div>
        <div class="casino-actions">
          <button class="choice-btn danger-btn" id="btn-bet-red">🔴 Вся сумма на КРАСНОЕ (15 млн)</button>
          <button class="choice-btn danger-btn" id="btn-bet-black">⚫ Вся сумма на ЧЕРНОЕ (15 млн)</button>
          <button class="choice-btn danger-btn" id="btn-bet-zero">🟢 Поставить всё на ЗЕРО (Риск)</button>
        </div>
      </div>
    `;

    const status = document.getElementById('roulette-status');
    const ball = document.getElementById('roulette-ball');
    const balEl = document.getElementById('casino-balance');

    const triggerSpin = (choiceName) => {
      window.horrorAudio.startHeartbeat(130);
      window.horrorAudio.triggerHaptic('heavy');
      status.innerText = 'Шарик крутится по колесу... сердце замирает...';
      ball.classList.add('spinning');

      setTimeout(() => {
        ball.classList.remove('spinning');
        ball.innerText = '0 (ZERO)';
        status.innerText = 'ВЫПАЛО ЗЕРО! ПОЛНЫЙ КРАХ! СЧЕТ ОБНУЛЕН!';
        status.style.color = '#ff4444';
        balEl.innerText = '0 ₽';
        window.horrorAudio.playJumpShock();

        setTimeout(() => {
          this.closeMinigame();
          if (this.onCompleteCallback) this.onCompleteCallback(false);
        }, 2200);
      }, 2000);
    };

    document.getElementById('btn-bet-red').onclick = () => triggerSpin('Красное');
    document.getElementById('btn-bet-black').onclick = () => triggerSpin('Черное');
    document.getElementById('btn-bet-zero').onclick = () => triggerSpin('Зеро');
  }

  // ==========================================================================
  // MINIGAME 3: RADIO INTERCEPTION (MALAYA TOKMACHKA BATTLEFIELD)
  // ==========================================================================
  startRadioTuning(onComplete) {
    this.onCompleteCallback = onComplete;
    this.container.classList.add('active');
    window.horrorAudio.triggerHaptic('heavy');

    const targetFreq = 142.8;
    let curFreq = 120.0;

    this.container.innerHTML = `
      <div class="minigame-card radio-game">
        <div class="minigame-header">
          <h3>РАДИОСТАНЦИЯ Р-168 • ОКОПЫ ПОД МАЛОЙ ТОКМАЧКОЙ</h3>
          <p>Настройте частоту рации сквозь глушилки и артиллерийский грохот, чтобы поймать координаты роты.</p>
        </div>
        <div class="radio-display">
          <div class="radio-freq" id="radio-freq-val">120.0 МГц</div>
          <div class="radio-signal-bar" id="radio-signal-meter">СИГНАЛ: 0% [БЕЛЫЙ ШУМ]</div>
        </div>
        <div class="radio-dial-box">
          <input type="range" id="freq-slider" min="1100" max="1600" value="1200">
        </div>
        <div class="radio-transcript" id="radio-transcript">«...шшш... хррр... приём... шшш...»</div>
      </div>
    `;

    const slider = document.getElementById('freq-slider');
    const freqVal = document.getElementById('radio-freq-val');
    const meter = document.getElementById('radio-signal-meter');
    const transcript = document.getElementById('radio-transcript');

    slider.addEventListener('input', (e) => {
      curFreq = (parseInt(e.target.value) / 10).toFixed(1);
      freqVal.innerText = `${curFreq} МГц`;
      const diff = Math.abs(curFreq - targetFreq);

      if (diff < 0.3) {
        meter.innerText = 'СИГНАЛ: 100% [ЧИСТЫЙ ЭФИР]';
        meter.style.color = '#88ff88';
        transcript.innerText = '«...Я Волга-7! Всем кто слышит! Седьмая рота зажата в лесополке под Токмачкой! Срочно эвакуацию!...»';
        transcript.style.color = '#ffffff';
        window.horrorAudio.playJumpShock();

        setTimeout(() => {
          this.closeMinigame();
          if (this.onCompleteCallback) this.onCompleteCallback(true);
        }, 3000);
      } else if (diff < 3.0) {
        meter.innerText = 'СИГНАЛ: 45% [СКВОЗЬ ПОМЕХИ]';
        meter.style.color = '#ffff88';
        transcript.innerText = '«...шшш... Волга... ответьте... координаты сорок... хррр...»';
        window.horrorAudio.playGlitch();
      } else {
        meter.innerText = 'СИГНАЛ: 0% [БЕЛЫЙ ШУМ]';
        meter.style.color = '#888899';
        transcript.innerText = '«...пшшшш... хррррр...»';
      }
    });
  }

  closeMinigame() {
    this.container.classList.remove('active');
    this.container.innerHTML = '';
  }
}

window.horrorMinigames = new HorrorMinigamesEngine();
