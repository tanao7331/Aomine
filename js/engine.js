/* ==========================================================================
   THE BOYS: REMASTERED - VISUAL NOVEL ENGINE CORE
   Inspired by "Tiny Bunny" (Зайчик)
   Optimized for Telegram Mini App (TMA) & Mobile Landscape 16:9
   ========================================================================== */

class VisualNovelEngine {
  constructor() {
    this.currentSceneId = null;
    this.currentScene = null;
    this.typewriterTimer = null;
    this.isTyping = false;
    this.fullText = '';
    this.displayedText = '';
    this.textSpeed = 22; // ms per character

    // State flags
    this.isAutoPlay = false;
    this.isSkipMode = false;
    this.autoPlayTimer = null;
    this.isUIVisible = true;

    // History Backlog
    this.dialogueHistory = [];

    // Particle system
    this.particles = [];
    this.particleAnimFrame = null;

    // DOM Elements
    this.elements = {};
    this.initElements();
    this.setupTelegram();
    this.initParticles();
    this.bindEvents();
    this.checkOrientation();
  }

  initElements() {
    this.elements = {
      viewport: document.getElementById('game-viewport'),
      stage: document.getElementById('game-stage'),
      bgLayer: document.getElementById('bg-layer'),
      characterLayer: document.getElementById('character-layer'),
      particlesCanvas: document.getElementById('particles-canvas'),
      flashOverlay: document.getElementById('flash-overlay'),
      chapterWatermark: document.getElementById('chapter-watermark'),
      
      dialogueArea: document.getElementById('dialogue-area'),
      dialogueBox: document.getElementById('dialogue-box'),
      speakerName: document.getElementById('speaker-name'),
      nameplateContainer: document.getElementById('nameplate-container'),
      textContent: document.getElementById('text-content'),
      advanceIndicator: document.getElementById('advance-indicator'),
      btnHideUI: document.getElementById('btn-hide-ui'),
      
      btnBacklog: document.getElementById('btn-backlog'),
      btnAuto: document.getElementById('btn-auto'),
      btnSkip: document.getElementById('btn-skip'),
      btnMenu: document.getElementById('btn-menu'),
      btnInfo: document.getElementById('btn-info'),

      choicesContainer: document.getElementById('choices-container'),
      choicesList: document.getElementById('choices-list'),

      documentModal: document.getElementById('document-modal'),
      documentImg: document.getElementById('document-modal-img'),

      backlogModal: document.getElementById('backlog-modal'),
      backlogList: document.getElementById('backlog-list'),

      saveModal: document.getElementById('save-modal'),
      saveSlotsGrid: document.getElementById('save-slots-grid'),
      saveModalTitle: document.getElementById('save-modal-title'),

      infoModal: document.getElementById('info-modal'),
      mainMenu: document.getElementById('main-menu'),
      orientationWarning: document.getElementById('orientation-warning'),
      phoneModal: document.getElementById('phone-modal'),
      minigameContainer: document.getElementById('minigame-container')
    };

    if (window.horrorMinigames) {
      window.horrorMinigames.init('minigame-container');
    }
  }

  setupTelegram() {
    try {
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        if (tg.requestFullscreen) tg.requestFullscreen();
        if (tg.disableVerticalSwipes) tg.disableVerticalSwipes();
        if (tg.enableClosingConfirmation) tg.enableClosingConfirmation();
        if (tg.setHeaderColor) tg.setHeaderColor('#000000');
        if (tg.setBackgroundColor) tg.setBackgroundColor('#000000');
      }
    } catch (e) {
      console.log('Telegram SDK init info:', e);
    }
  }

  checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth && window.innerWidth <= 900;
    if (this.elements.orientationWarning) {
      this.elements.orientationWarning.style.display = isPortrait ? 'flex' : 'none';
    }
  }

  bindEvents() {
    // Window resize / orientation change
    window.addEventListener('resize', () => {
      this.checkOrientation();
      this.resizeCanvas();
    });
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.checkOrientation();
        this.resizeCanvas();
      }, 200);
    });

    // Tap on stage to restore hidden UI
    this.elements.stage.addEventListener('click', (e) => {
      if (!this.isUIVisible) {
        this.toggleUI(true);
        e.stopPropagation();
      }
    });

    // Dialogue box tap to advance or instantly complete text
    this.elements.dialogueBox.addEventListener('click', (e) => {
      // Don't trigger if clicked on child control buttons
      if (e.target.closest('.box-ctrl-btn') || e.target.closest('#btn-hide-ui')) {
        return;
      }
      this.handleUserAdvance();
    });

    // Hide UI button
    if (this.elements.btnHideUI) {
      this.elements.btnHideUI.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleUI(false);
      });
    }

    // Keyboard support for PC pair-programming / browser testing (Space, Enter, Esc)
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        if (!this.elements.choicesContainer.classList.contains('active') &&
            !this.elements.documentModal.classList.contains('active') &&
            this.elements.mainMenu.classList.contains('hidden')) {
          this.handleUserAdvance();
        }
      } else if (e.code === 'Escape') {
        if (this.elements.mainMenu.classList.contains('hidden')) {
          this.showMainMenu();
        } else {
          this.elements.mainMenu.classList.add('hidden');
        }
      }
    });
  }

  // ==========================================================================
  // PARTICLE SYSTEM (Monochrome Atmospheric Snow & Dust Motes)
  // ==========================================================================

  initParticles() {
    const canvas = this.elements.particlesCanvas;
    if (!canvas) return;
    this.resizeCanvas();

    const count = 55;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.6,
        speedX: (Math.random() - 0.4) * 0.8,
        speedY: Math.random() * 0.9 + 0.3,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    const render = () => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';

      for (let p of this.particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > canvas.height) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
      }

      this.particleAnimFrame = requestAnimationFrame(render);
    };

    render();
  }

  resizeCanvas() {
    const canvas = this.elements.particlesCanvas;
    if (!canvas) return;
    canvas.width = canvas.parentElement.clientWidth || 1280;
    canvas.height = canvas.parentElement.clientHeight || 720;
  }

  // ==========================================================================
  // GAME PROGRESSION & SCENE NAVIGATION
  // ==========================================================================

  startGame(startNode = 'prologue_start') {
    this.elements.mainMenu.classList.add('hidden');
    this.elements.dialogueArea.classList.remove('hidden-ui');
    this.goToScene(startNode);
  }

  showMainMenu() {
    this.stopAutoPlay();
    this.elements.mainMenu.classList.remove('hidden');
    this.elements.dialogueArea.classList.add('hidden-ui');
    window.horrorAudio.stopHeartbeat();
    window.horrorAudio.stopWind();
  }

  goToScene(sceneId) {
    if (!window.STORY_DATA || !window.STORY_DATA[sceneId]) {
      console.error(`Scene ${sceneId} not found in STORY_DATA`);
      return;
    }

    this.currentSceneId = sceneId;
    this.currentScene = window.STORY_DATA[sceneId];
    const s = this.currentScene;

    // AutoSave progress
    this.saveGame('autosave', true);

    // 1. Chapter Title Watermark
    if (s.chapter && this.elements.chapterWatermark) {
      this.elements.chapterWatermark.innerText = s.chapter;
    }

    // 2. Background handling
    if (s.bg) {
      this.elements.bgLayer.style.backgroundImage = `url('${s.bg}')`;
    }

    // 3. Audio handling (BGM, SFX, Heartbeat, Wind)
    if (s.bgm) {
      window.horrorAudio.playTrack(s.bgm);
    }
    if (s.sfx) {
      if (s.sfx === 'jump' || s.sfx === 'glitch') window.horrorAudio.playJumpShock();
      else if (s.sfx === 'wind') window.horrorAudio.playWind();
    }
    if (s.heartbeat) {
      window.horrorAudio.startHeartbeat(s.heartbeat);
    } else if (s.heartbeat === 0) {
      window.horrorAudio.stopHeartbeat();
    }

    // 4. Visual effects (Flash, Shake)
    if (s.flash) {
      this.triggerFlash(s.flash);
    }
    if (s.shake) {
      this.triggerShake(s.shake);
    }

    // 5. Official Dossier / Document Inspection Modal
    if (s.document) {
      this.showDocumentModal(s.document);
    }

    // 5.5. Interactive Minigame Trigger
    if (s.minigame && window.horrorMinigames) {
      if (s.minigame === 'lockpick') {
        window.horrorMinigames.startLockpick((success) => {
          if (s.next) this.goToScene(s.next);
        });
        return;
      } else if (s.minigame === 'casino') {
        window.horrorMinigames.startCasinoRoulette((success) => {
          if (s.next) this.goToScene(s.next);
        });
        return;
      } else if (s.minigame === 'radio') {
        window.horrorMinigames.startRadioTuning((success) => {
          if (s.next) this.goToScene(s.next);
        });
        return;
      }
    }

    // 6. Character Sprites
    this.updateCharacterSprite(s);

    // 7. Speaker Tag
    this.updateSpeakerTag(s);

    // 8. Choices or Advance
    if (s.choices && s.choices.length > 0) {
      this.elements.advanceIndicator.classList.remove('visible');
      this.startTypewriter(s.text, () => {
        this.renderChoices(s.choices);
      });
    } else {
      this.elements.choicesContainer.classList.remove('active');
      this.startTypewriter(s.text, () => {
        this.elements.advanceIndicator.classList.add('visible');
        if (this.isAutoPlay) {
          this.scheduleAutoAdvance();
        }
      });
    }

    // 9. Add to History
    this.dialogueHistory.push({
      speaker: s.speaker || 'Повествователь',
      text: s.text,
      chapter: s.chapter || ''
    });
  }

  updateCharacterSprite(scene) {
    const container = this.elements.characterLayer;
    container.innerHTML = '';

    if (!scene.char) return;

    const spriteWrap = document.createElement('div');
    spriteWrap.className = `sprite-container ${scene.charPos || 'sprite-center'} speaking`;

    const img = document.createElement('img');
    img.src = scene.char;
    img.alt = scene.speaker || 'Персонаж';

    spriteWrap.appendChild(img);
    container.appendChild(spriteWrap);
  }

  updateSpeakerTag(scene) {
    const nameEl = this.elements.speakerName;
    const speaker = scene.speaker || 'Повествователь';
    nameEl.innerText = speaker;

    // Reset classes
    nameEl.className = '';
    if (scene.speakerClass) {
      nameEl.classList.add(scene.speakerClass);
    }

    // If narrator, style softly
    if (speaker.toLowerCase() === 'повествователь') {
      nameEl.classList.add('narrator');
    }
  }

  // ==========================================================================
  // TYPEWRITER TEXT ANIMATION
  // ==========================================================================

  startTypewriter(text, onComplete) {
    if (this.typewriterTimer) clearInterval(this.typewriterTimer);

    this.isTyping = true;
    this.fullText = text;
    this.displayedText = '';
    this.elements.textContent.innerText = '';
    this.elements.advanceIndicator.classList.remove('visible');

    let idx = 0;
    const speakerClass = this.currentScene.speakerClass || 'narrator';

    // Skip mode instant print
    if (this.isSkipMode) {
      this.displayedText = text;
      this.elements.textContent.innerText = text;
      this.isTyping = false;
      if (onComplete) onComplete();
      return;
    }

    this.typewriterTimer = setInterval(() => {
      if (idx < text.length) {
        this.displayedText += text[idx];
        this.elements.textContent.innerText = this.displayedText;

        // Play typewriter click blip on non-space characters
        if (text[idx] !== ' ' && idx % 2 === 0) {
          window.horrorAudio.playTypewriterBlip(speakerClass);
        }
        idx++;
      } else {
        clearInterval(this.typewriterTimer);
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    }, this.textSpeed);
  }

  finishTypingInstantly() {
    if (this.typewriterTimer) clearInterval(this.typewriterTimer);
    this.isTyping = false;
    this.elements.textContent.innerText = this.fullText;
    this.elements.advanceIndicator.classList.add('visible');

    if (this.currentScene.choices && this.currentScene.choices.length > 0) {
      this.renderChoices(this.currentScene.choices);
    } else if (this.isAutoPlay) {
      this.scheduleAutoAdvance();
    }
  }

  handleUserAdvance() {
    window.horrorAudio.triggerHaptic('light');

    // 1. If currently typing, finish instantly
    if (this.isTyping) {
      this.finishTypingInstantly();
      return;
    }

    // 2. If choices are waiting, do not advance via click
    if (this.currentScene && this.currentScene.choices && this.currentScene.choices.length > 0) {
      return;
    }

    // 3. Advance to next scene
    if (this.currentScene && this.currentScene.next) {
      this.goToScene(this.currentScene.next);
    } else {
      // Reached ending of script
      this.showMainMenu();
    }
  }

  // ==========================================================================
  // CHOICES SYSTEM
  // ==========================================================================

  renderChoices(choices) {
    this.elements.choicesList.innerHTML = '';
    choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerText = `${index + 1}. ${choice.text}`;
      btn.onclick = (e) => {
        e.stopPropagation();
        window.horrorAudio.triggerHaptic('medium');
        this.elements.choicesContainer.classList.remove('active');
        this.goToScene(choice.target);
      };
      this.elements.choicesList.appendChild(btn);
    });

    this.elements.choicesContainer.classList.add('active');
  }

  // ==========================================================================
  // OFFICIAL DOSSIER INSPECTOR
  // ==========================================================================

  showDocumentModal(docSrc) {
    window.horrorAudio.triggerHaptic('rigid');
    this.elements.documentImg.src = docSrc;
    this.elements.documentModal.classList.add('active');
  }

  closeDocumentModal() {
    window.horrorAudio.triggerHaptic('light');
    this.elements.documentModal.classList.remove('active');
  }

  // ==========================================================================
  // AUTO-PLAY & SKIP MODE CONTROLS
  // ==========================================================================

  toggleAutoPlay() {
    this.isAutoPlay = !this.isAutoPlay;
    if (this.isAutoPlay) {
      this.isSkipMode = false;
      this.elements.btnSkip.classList.remove('active-glow');
      this.elements.btnAuto.classList.add('active-glow');
      if (!this.isTyping) this.scheduleAutoAdvance();
    } else {
      this.stopAutoPlay();
    }
  }

  stopAutoPlay() {
    this.isAutoPlay = false;
    this.elements.btnAuto.classList.remove('active-glow');
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  scheduleAutoAdvance() {
    if (this.autoPlayTimer) clearTimeout(this.autoPlayTimer);
    this.autoPlayTimer = setTimeout(() => {
      if (this.isAutoPlay && !this.isTyping) {
        this.handleUserAdvance();
      }
    }, 2200);
  }

  toggleSkipMode() {
    this.isSkipMode = !this.isSkipMode;
    if (this.isSkipMode) {
      this.stopAutoPlay();
      this.elements.btnSkip.classList.add('active-glow');
      this.handleUserAdvance();
    } else {
      this.elements.btnSkip.classList.remove('active-glow');
    }
  }

  toggleUI(force = null) {
    if (force !== null) {
      this.isUIVisible = force;
    } else {
      this.isUIVisible = !this.isUIVisible;
    }

    if (this.isUIVisible) {
      this.elements.dialogueArea.classList.remove('hidden-ui');
    } else {
      this.elements.dialogueArea.classList.add('hidden-ui');
    }
  }

  // ==========================================================================
  // VISUAL EFFECTS (Shakes & Flashes)
  // ==========================================================================

  triggerFlash(type = 'white') {
    const overlay = this.elements.flashOverlay;
    overlay.className = 'layer';
    overlay.classList.add(type === 'dark' ? 'active-dark' : 'active-white');
    setTimeout(() => {
      overlay.className = 'layer';
    }, 240);
  }

  triggerShake(intensity = 'subtle') {
    const stage = this.elements.stage;
    stage.classList.remove('shake-subtle', 'shake-heavy');
    void stage.offsetWidth; // Force CSS reflow
    stage.classList.add(intensity === 'heavy' ? 'shake-heavy' : 'shake-subtle');
    setTimeout(() => {
      stage.classList.remove('shake-subtle', 'shake-heavy');
    }, 550);
  }

  // ==========================================================================
  // BACKLOG / HISTORY MODAL
  // ==========================================================================

  toggleBacklog() {
    const modal = this.elements.backlogModal;
    const isActive = modal.classList.contains('active');

    if (isActive) {
      modal.classList.remove('active');
    } else {
      this.renderBacklog();
      modal.classList.add('active');
    }
  }

  renderBacklog() {
    const list = this.elements.backlogList;
    list.innerHTML = '';

    const recent = this.dialogueHistory.slice(-40);
    recent.forEach((item) => {
      const entry = document.createElement('div');
      entry.className = 'backlog-item';

      const speaker = document.createElement('div');
      speaker.className = 'backlog-speaker';
      speaker.innerText = item.speaker;

      const text = document.createElement('div');
      text.className = 'backlog-text';
      text.innerText = item.text;

      entry.appendChild(speaker);
      entry.appendChild(text);
      list.appendChild(entry);
    });

    list.scrollTop = list.scrollHeight;
  }

  // ==========================================================================
  // SAVE & LOAD SYSTEM (6 Slots + AutoSave, LocalStorage & TG CloudStorage)
  // ==========================================================================

  showSaveLoadModal(mode = 'save') {
    this.saveLoadMode = mode;
    this.elements.saveModalTitle.innerText = mode === 'save' ? 'СОХРАНЕНИЕ ИГРЫ' : 'ЗАГРУЗКА ИГРЫ';
    this.renderSaveSlots();
    this.elements.saveModal.classList.add('active');
  }

  closeSaveModal() {
    this.elements.saveModal.classList.remove('active');
  }

  renderSaveSlots() {
    const grid = this.elements.saveSlotsGrid;
    grid.innerHTML = '';

    const totalSlots = 6;
    for (let i = 1; i <= totalSlots; i++) {
      const slotKey = `theboys_save_slot_${i}`;
      let slotData = null;
      try {
        const raw = localStorage.getItem(slotKey);
        if (raw) slotData = JSON.parse(raw);
      } catch (e) {}

      const card = document.createElement('div');
      card.className = 'save-slot-card';

      const title = document.createElement('div');
      title.className = 'slot-num';
      title.innerText = `СЛОТ ${i}`;

      const desc = document.createElement('div');
      desc.className = 'slot-desc';
      desc.innerText = slotData ? (slotData.chapter || slotData.speaker || 'Сохранение') : '— Пусто —';

      const date = document.createElement('div');
      date.className = 'slot-date';
      date.innerText = slotData ? slotData.timestamp : '';

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(date);

      card.onclick = () => {
        if (this.saveLoadMode === 'save') {
          this.saveGame(slotKey);
          this.renderSaveSlots();
        } else {
          if (slotData) {
            this.loadGame(slotKey);
            this.closeSaveModal();
            this.elements.mainMenu.classList.add('hidden');
          }
        }
      };

      grid.appendChild(card);
    }
  }

  saveGame(slotKey = 'autosave', silent = false) {
    if (!this.currentSceneId) return;

    const data = {
      sceneId: this.currentSceneId,
      speaker: this.currentScene.speaker || 'Повествователь',
      chapter: this.currentScene.chapter || (this.elements.chapterWatermark ? this.elements.chapterWatermark.innerText : ''),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    try {
      localStorage.setItem(slotKey, JSON.stringify(data));
      // Mirror to Telegram CloudStorage if available
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.CloudStorage) {
        window.Telegram.WebApp.CloudStorage.setItem(slotKey, JSON.stringify(data));
      }
      if (!silent) window.horrorAudio.triggerHaptic('rigid');
    } catch (e) {
      console.warn('Save failed:', e);
    }
  }

  loadGame(slotKey = 'autosave') {
    try {
      const raw = localStorage.getItem(slotKey);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data && data.sceneId) {
        window.horrorAudio.triggerHaptic('medium');
        this.goToScene(data.sceneId);
      }
    } catch (e) {
      console.warn('Load failed:', e);
    }
  }

  // ==========================================================================
  // INFO MODAL
  // ==========================================================================

  showInfoModal() {
    if (this.elements.infoModal) {
      this.elements.infoModal.classList.add('active');
    }
  }

  closeInfoModal() {
    if (this.elements.infoModal) {
      this.elements.infoModal.classList.remove('active');
    }
  }
}

// Global VN instance
window.addEventListener('DOMContentLoaded', () => {
  window.game = new VisualNovelEngine();
});
