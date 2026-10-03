/* ==========================================================================
   THE BOYS: REMASTERED - ATMOSPHERIC HORROR AUDIO ENGINE
   Multi-Channel Soundtrack Manager + Web Audio API Procedural Synthesizer
   ========================================================================== */

class HorrorAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.masterVolume = 0.75;
    
    // BGM Tracks
    this.tracks = {
      intro: 'assets/audio/anime_track1_intro.mp3',
      action: 'assets/audio/anime_track2_action.mp3',
      epic: 'assets/audio/anime_track3_epic_ambient.mp3',
      sadness: 'assets/audio/anime_track4_sadness.mp3',
      tension: 'assets/audio/anime_track5_tension.mp3',
      climax: 'assets/audio/anime_track6_climax.mp3',
      main: 'assets/audio/ambient_main.mp3',
      sad: 'assets/audio/ambient_sad.mp3',
      horror: 'assets/audio/ambient_horror.mp3'
    };
    this.activeAudio = null;
    this.currentTrackName = null;
    
    // Heartbeat state
    this.heartbeatTimer = null;
    this.currentBPM = 75;
    
    // Wind procedural state
    this.windNode = null;
    
    // Saved mute preference
    try {
      const savedMute = localStorage.getItem('theboys_audio_muted');
      if (savedMute !== null) this.isMuted = savedMute === 'true';
    } catch(e) {}

    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  ensureContextActive() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ==========================================================================
  // BGM TRACK PLAYBACK & CROSSFADE
  // ==========================================================================

  playTrack(trackName = 'main', fadeSeconds = 1.5) {
    if (!this.tracks[trackName]) trackName = 'main';
    if (this.currentTrackName === trackName && this.activeAudio && !this.activeAudio.paused) {
      return;
    }

    this.ensureContextActive();
    const oldAudio = this.activeAudio;
    const newSrc = this.tracks[trackName];

    const newAudio = new Audio(newSrc);
    newAudio.loop = true;
    newAudio.volume = 0;
    newAudio.preload = 'auto';

    const targetVolume = this.isMuted ? 0 : this.masterVolume;
    this.activeAudio = newAudio;
    this.currentTrackName = trackName;

    const playPromise = newAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Fade in new
        this.fadeAudio(newAudio, 0, targetVolume, fadeSeconds);
      }).catch(err => {
        console.log('Audio autoplay prevented until first user gesture:', err);
      });
    }

    // Fade out old
    if (oldAudio) {
      this.fadeAudio(oldAudio, oldAudio.volume, 0, fadeSeconds, () => {
        oldAudio.pause();
        oldAudio.src = '';
      });
    }
  }

  fadeAudio(audioElem, startVol, endVol, durationSec, onComplete = null) {
    if (!audioElem) return;
    const steps = 20;
    const stepTime = (durationSec * 1000) / steps;
    const volDelta = (endVol - startVol) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const v = startVol + (volDelta * currentStep);
      audioElem.volume = Math.max(0, Math.min(1, v));

      if (currentStep >= steps) {
        clearInterval(timer);
        audioElem.volume = Math.max(0, Math.min(1, endVol));
        if (onComplete) onComplete();
      }
    }, stepTime);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('theboys_audio_muted', this.isMuted ? 'true' : 'false');
    } catch(e) {}

    if (this.activeAudio) {
      this.activeAudio.volume = this.isMuted ? 0 : this.masterVolume;
    }

    if (this.isMuted) {
      this.stopHeartbeat();
      this.stopWind();
    } else {
      if (this.currentBPM) this.startHeartbeat(this.currentBPM);
    }

    return this.isMuted;
  }

  // ==========================================================================
  // TELEGRAM HAPTIC INTEGRATION
  // ==========================================================================

  triggerHaptic(type = 'medium') {
    try {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.HapticFeedback) {
        const h = window.Telegram.WebApp.HapticFeedback;
        if (type === 'heavy') h.impactOccurred('heavy');
        else if (type === 'light') h.impactOccurred('light');
        else if (type === 'rigid') h.impactOccurred('rigid');
        else if (type === 'error') h.notificationOccurred('error');
        else if (type === 'warning') h.notificationOccurred('warning');
        else h.impactOccurred('medium');
      }
    } catch (e) {}
  }

  // ==========================================================================
  // PROCEDURAL SOUND EFFECTS (Web Audio API)
  // ==========================================================================

  // 1. Typewriter Speech Clicks
  playTypewriterBlip(character = 'narrator') {
    if (this.isMuted || !this.ctx) return;
    this.ensureContextActive();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    let baseFreq = 540;
    if (character === 'nikita') baseFreq = 380;
    else if (character === 'aslan') baseFreq = 620;
    else if (character === 'ismail') baseFreq = 480;
    else if (character === 'vanya') baseFreq = 510;
    else if (character === 'narrator') baseFreq = 420;

    // Slight micro-variation per character tap
    const freq = baseFreq + (Math.random() * 50 - 25);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, t);

    gain.gain.setValueAtTime(0.045, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.05);
  }

  // 2. Realistic Binaural Heartbeat (lub-dub)
  startHeartbeat(bpm = 75) {
    this.stopHeartbeat();
    if (this.isMuted || !this.ctx) return;
    this.currentBPM = bpm;

    const intervalMs = (60 / bpm) * 1000;

    const playBeats = () => {
      if (this.isMuted || !this.ctx) return;
      this.ensureContextActive();

      // First thump (lub)
      this.synthesizeHeartThump(52, 0.22, 0.14);

      // Second thump (dub) - slightly higher pitch, shorter
      setTimeout(() => {
        if (!this.heartbeatTimer) return;
        this.synthesizeHeartThump(68, 0.16, 0.11);
      }, 130);
    };

    playBeats();
    this.heartbeatTimer = setInterval(playBeats, intervalMs);
  }

  synthesizeHeartThump(freq, duration, gainVal) {
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, t);

      gain.gain.setValueAtTime(gainVal, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + duration + 0.02);
    } catch(e) {}
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // 3. Jump Shock / Stinger (Dissonant horror cluster chord)
  playJumpShock() {
    this.triggerHaptic('heavy');
    if (this.isMuted || !this.ctx) return;
    this.ensureContextActive();

    const t = this.ctx.currentTime;
    const freqs = [105, 148, 210, 297, 420]; // Tritone cluster

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.75, t + 1.2);

      gain.gain.setValueAtTime(0.09, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 1.5);
    });
  }

  // 4. Glitch / Distortion effect
  playGlitch() {
    this.triggerHaptic('light');
    if (this.isMuted || !this.ctx) return;
    this.ensureContextActive();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.setValueAtTime(80, t + 0.04);
    osc.frequency.setValueAtTime(320, t + 0.08);

    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  // 5. Procedural Wind generator
  playWind() {
    if (this.isMuted || !this.ctx || this.windNode) return;
    this.ensureContextActive();

    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Generate pink/brown noise
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(350, this.ctx.currentTime);
      filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
      this.windNode = { noise, gain, filter };
    } catch(e) {}
  }

  stopWind() {
    if (this.windNode) {
      try {
        this.windNode.noise.stop();
        this.windNode.noise.disconnect();
      } catch(e) {}
      this.windNode = null;
    }
  }
}

// Global instance
window.horrorAudio = new HorrorAudioEngine();
