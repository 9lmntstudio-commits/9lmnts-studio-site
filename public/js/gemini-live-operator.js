/**
 * 9LMNTS Studio — Gemini Live AI Voice Operator Client
 * Powers Station 04 / Real-Time Voice Consultation
 * Persona: Deep Baritone Founder Proxy (Darnley Sanon)
 */

(function () {
  'use strict';

  let isListening = false;
  let isSpeaking = false;
  let audioContext = null;
  let mediaStream = null;
  let visualizerAnimId = null;

  // DOM Elements
  let floatingPill = null;
  let voiceDrawer = null;
  let waveformCanvas = null;
  let canvasCtx = null;
  let voiceStatusText = null;
  let voiceTranscript = null;
  let micToggleButton = null;

  const FOUNDER_RESPONSES = [
    {
      keywords: ['price', 'pricing', 'cost', 'how much', 'package', 'packages'],
      response: "At 9LMNTS Studio, we keep commercial pricing completely fixed and transparent. Our Quick Fix upgrade starts from $500. Our standalone Launch Page is $1,800. The Growth Website is $4,500 with a 40/30/30 rail, and our custom Signature Systems start from $8,500. Every project requires a 50% upfront deposit via Desjardins Interac before we touch a line of code."
    },
    {
      keywords: ['turnaround', 'how long', 'timeline', 'fast', 'speed', 'sprint'],
      response: "We execute on strict, productized sprints. A Quick Fix takes 2 to 5 days. A Launch Page goes live in 1 to 2 weeks, and a full Growth Website is live within 3 to 4 weeks. No endless agency retainer bloat."
    },
    {
      keywords: ['handyman', 'trades', 'contractor'],
      response: "Our Handyman Dispatch OS captures missed calls instantly, sends an automatic SMS quote calculator to the homeowner's phone in under 60 seconds, and locks in a deposit before your competitors even check their voicemail."
    },
    {
      keywords: ['clash', 'sound clash', 'dj', 'battle'],
      response: "Sound Clash OS is our live DJ battle in a box hosted on Base44 at clash.9lmntsstudio.com. It features real-time crowd QR voting, digital drink gifting, and automated 8-contender tournament bracket seeding."
    },
    {
      keywords: ['wedding', 'reception', 'sanon'],
      response: "The Sanon Reception is our flagship Wedding OS showcase. It replaces paper programs with live ballroom table finding, instant Apple Pay honeymoon fund gifting, and real-time Best Man vs Maid of Honor speech voting."
    },
    {
      keywords: ['contact', 'book', 'call', 'talk', 'hire', 'start'],
      response: "You can book a direct 15-minute diagnostic call with founder Darnley Sanon right from our contact page, or click Claim A System. You'll leave the call with a complete architectural roadmap and a fixed price."
    }
  ];

  function getFallbackResponse(query) {
    const q = query.toLowerCase();
    for (const r of FOUNDER_RESPONSES) {
      if (r.keywords.some(k => q.includes(k))) {
        return r.response;
      }
    }
    return "This is the 9LMNTS Studio Dispatch Operator representing Darnley Sanon in Ottawa. We build high-converting websites and autonomous booking operating systems for local businesses. Are you looking to upgrade an existing site, or deploy a full business OS?";
  }

  // Text-To-Speech Synthesis using Browser WebSpeech as ultra-low latency fallback
  function speakResponse(text) {
    if (!('speechSynthesis' in window)) {
      updateTranscript('Operator: ' + text);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // Calm baritone cadence
    utterance.pitch = 0.85; // Deep baritone tone

    // Try to pick deep baritone English voice
    const voices = window.speechSynthesis.getVoices();
    const deepVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('David') || v.name.includes('Natural') || v.name.includes('Male') || v.name.includes('Daniel') || v.name.includes('Guy')));
    if (deepVoice) {
      utterance.voice = deepVoice;
    }

    utterance.onstart = function () {
      isSpeaking = true;
      setStatus('Operator Speaking...');
      animateWaveform(true);
    };

    utterance.onend = function () {
      isSpeaking = false;
      setStatus(isListening ? 'Listening...' : 'Ready');
      animateWaveform(false);
    };

    window.speechSynthesis.speak(utterance);
    updateTranscript('Operator: ' + text);
  }

  function setStatus(status) {
    if (voiceStatusText) {
      voiceStatusText.textContent = status;
    }
  }

  function updateTranscript(line) {
    if (!voiceTranscript) return;
    const p = document.createElement('div');
    p.className = line.startsWith('You:') ? 'vt-user' : 'vt-operator';
    p.textContent = line;
    voiceTranscript.appendChild(p);
    voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
  }

  // Draw animated Flame Orange waveform
  function initWaveform() {
    if (!waveformCanvas) return;
    canvasCtx = waveformCanvas.getContext('2d');
    drawIdleWaveform();
  }

  function drawIdleWaveform() {
    if (!canvasCtx || isSpeaking || isListening) return;
    const w = waveformCanvas.width;
    const h = waveformCanvas.height;
    canvasCtx.clearRect(0, 0, w, h);

    const bars = 32;
    const barWidth = 3;
    const gap = (w - (bars * barWidth)) / (bars - 1);

    canvasCtx.fillStyle = 'rgba(255, 85, 0, 0.3)';
    for (let i = 0; i < bars; i++) {
      const bh = 4;
      const x = i * (barWidth + gap);
      const y = (h - bh) / 2;
      canvasCtx.fillRect(x, y, barWidth, bh);
    }
  }

  function animateWaveform(active) {
    if (visualizerAnimId) {
      cancelAnimationFrame(visualizerAnimId);
      visualizerAnimId = null;
    }

    if (!active) {
      drawIdleWaveform();
      return;
    }

    let phase = 0;
    function render() {
      if (!isSpeaking && !isListening) {
        drawIdleWaveform();
        return;
      }

      const w = waveformCanvas.width;
      const h = waveformCanvas.height;
      canvasCtx.clearRect(0, 0, w, h);

      const bars = 32;
      const barWidth = 3;
      const gap = (w - (bars * barWidth)) / (bars - 1);

      for (let i = 0; i < bars; i++) {
        const factor = Math.sin((i / 5) + phase) * 0.5 + 0.5;
        const bh = Math.max(4, factor * (h * 0.85));
        const x = i * (barWidth + gap);
        const y = (h - bh) / 2;

        const grad = canvasCtx.createLinearGradient(0, y, 0, y + bh);
        grad.addColorStop(0, '#FF5500');
        grad.addColorStop(1, '#FF8833');
        canvasCtx.fillStyle = grad;
        canvasCtx.fillRect(x, y, barWidth, bh);
      }

      phase += 0.15;
      visualizerAnimId = requestAnimationFrame(render);
    }
    render();
  }

  // Start Speech Recognition
  let recognition = null;
  function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Google Chrome or Edge.");
      return;
    }

    if (!recognition) {
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = function () {
        isListening = true;
        setStatus('Listening to your inquiry...');
        micToggleButton.classList.add('active');
        animateWaveform(true);
      };

      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        updateTranscript('You: ' + transcript);
        setStatus('Thinking...');
        animateWaveform(false);

        setTimeout(() => {
          const reply = getFallbackResponse(transcript);
          speakResponse(reply);
        }, 400);
      };

      recognition.onerror = function (event) {
        setStatus('Ready');
        isListening = false;
        micToggleButton.classList.remove('active');
        animateWaveform(false);
      };

      recognition.onend = function () {
        isListening = false;
        micToggleButton.classList.remove('active');
        if (!isSpeaking) {
          setStatus('Ready');
          animateWaveform(false);
        }
      };
    }

    try {
      recognition.start();
    } catch (e) {
      console.log('Recognition start error:', e);
    }
  }

  function stopListening() {
    if (recognition && isListening) {
      recognition.stop();
    }
  }

  function toggleListening() {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  function openVoiceModal() {
    if (!voiceDrawer) return;
    voiceDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    initWaveform();

    if (voiceTranscript && voiceTranscript.children.length === 0) {
      speakResponse("Welcome to Nine Elements Studio. I'm the autonomous dispatch operator. Ask me about our 72-hour revenue recovery systems, pricing, or how we automate your customer bookings.");
    }
  }

  function closeVoiceModal() {
    if (!voiceDrawer) return;
    voiceDrawer.classList.remove('open');
    document.body.style.overflow = '';
    stopListening();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    isListening = false;
    animateWaveform(false);
  }

  function injectVoiceUI() {
    // 1. Create Floating Audio Pill
    floatingPill = document.createElement('div');
    floatingPill.className = 'voice-pill-float';
    floatingPill.id = 'globalVoicePill';
    floatingPill.innerHTML = `
      <span class="beacon-dot"></span>
      <span class="voice-pill-label">Talk to Studio Dispatch</span>
      <span class="voice-pill-arrow">↗</span>
    `;
    floatingPill.addEventListener('click', openVoiceModal);
    document.body.appendChild(floatingPill);

    // 2. Create Slide-Over Drawer
    voiceDrawer = document.createElement('div');
    voiceDrawer.className = 'voice-drawer-modal';
    voiceDrawer.id = 'voiceOperatorModal';
    voiceDrawer.innerHTML = `
      <div class="voice-drawer-backdrop"></div>
      <div class="voice-drawer-content">
        <div class="voice-drawer-head">
          <div>
            <div class="voice-kicker"><span class="beacon-dot"></span> 9LMNTS DISPATCH AUDIO · STATION 04</div>
            <h3>Autonomous Voice Operator</h3>
          </div>
          <button class="voice-close-btn" aria-label="Close voice modal">✕</button>
        </div>

        <div class="voice-drawer-body">
          <div class="voice-wave-container">
            <canvas id="voiceWaveformCanvas" width="300" height="60"></canvas>
            <div class="voice-status-badge" id="voiceStatusText">Ready</div>
          </div>

          <div class="voice-transcript-feed" id="voiceTranscript"></div>

          <div class="voice-quick-prompts">
            <button class="v-quick-chip" data-prompt="What are your packages and pricing?">What is your pricing?</button>
            <button class="v-quick-chip" data-prompt="How fast is your launch turnaround?">How fast do you launch?</button>
            <button class="v-quick-chip" data-prompt="Tell me about Handyman Dispatch OS.">Handyman Dispatch OS</button>
            <button class="v-quick-chip" data-prompt="Tell me about Sound Clash OS.">Sound Clash OS</button>
          </div>
        </div>

        <div class="voice-drawer-foot">
          <button class="btn-voice-mic" id="voiceMicToggle">
            <span class="mic-icon">🎙️</span>
            <span>Tap to Speak</span>
          </button>
          <a class="btn btn-primary btn-sm" href="/contact/">Book Diagnostic Call <span class="arrow">↗</span></a>
        </div>
      </div>
    `;

    document.body.appendChild(voiceDrawer);

    // Bind elements
    waveformCanvas = document.getElementById('voiceWaveformCanvas');
    voiceStatusText = document.getElementById('voiceStatusText');
    voiceTranscript = document.getElementById('voiceTranscript');
    micToggleButton = document.getElementById('voiceMicToggle');

    voiceDrawer.querySelector('.voice-close-btn').addEventListener('click', closeVoiceModal);
    voiceDrawer.querySelector('.voice-drawer-backdrop').addEventListener('click', closeVoiceModal);
    micToggleButton.addEventListener('click', toggleListening);

    // Bind Quick Chips
    const chips = voiceDrawer.querySelectorAll('.v-quick-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt');
        updateTranscript('You: ' + prompt);
        setStatus('Thinking...');
        setTimeout(() => {
          const reply = getFallbackResponse(prompt);
          speakResponse(reply);
        }, 300);
      });
    });

    // Also bind any in-page trigger (like the Studio Workbench Radar Beacon!)
    const radarTrigger = document.getElementById('heroVoiceRadarTrigger');
    if (radarTrigger) {
      radarTrigger.addEventListener('click', openVoiceModal);
      radarTrigger.style.cursor = 'pointer';
    }
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectVoiceUI);
  } else {
    injectVoiceUI();
  }
})();
