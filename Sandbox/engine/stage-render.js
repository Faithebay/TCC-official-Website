/* stage-render.js */

import { StageCore } from "./stage-core.js";

const SE_COSTUMES = ['🧒','🧑','👧','🧙','🦸','🤖','🐱','🦊'];

const SE_BACKGROUNDS = [
  { name:'City', cls:'bg-city' },
  { name:'Forest', cls:'bg-forest' },
  { name:'Space', cls:'bg-space' },
  { name:'Beach', cls:'bg-beach' },
  { name:'Home', cls:'bg-home' },
];

export function renderStage() {
  const char = document.getElementById('stage-character');
  const screen = document.getElementById('stage-screen');
  const bgLbl = document.getElementById('bg-label');
  const speech = document.getElementById('stage-speech');

  const state = StageCore.state;

  if (char) {
    char.textContent = SE_COSTUMES[state.costume];
    char.style.left = state.charX + '%';
  }

  if (screen) {
    screen.className = 'stage-screen ' + SE_BACKGROUNDS[state.bgIndex].cls;
  }

  if (bgLbl) bgLbl.textContent = SE_BACKGROUNDS[state.bgIndex].name;

  if (speech) speech.classList.add('hidden');
}

/* Keys UI */
export function renderKeys(SE_ALL_KEYS, SE_KEY_LABELS, handleKeyPress) {
  const container = document.getElementById('stage-buttons');
  if (!container) return;

  container.innerHTML = '';

  SE_ALL_KEYS.forEach(key => {
    const btn = document.createElement('button');

    btn.className = 'key-btn';
    btn.dataset.key = key;
    btn.textContent = SE_KEY_LABELS[key];

    btn.addEventListener('click', () => handleKeyPress(key));

    container.appendChild(btn);
  });
}

/* Reaction UI */
export function showReaction(emoji, label, hint, color) {
  const e = document.getElementById('reaction-emoji');
  const l = document.getElementById('reaction-label');
  const h = document.getElementById('reaction-hint');

  if (e) e.textContent = emoji;
  if (l) { l.textContent = label; l.style.color = color || '#fff'; }
  if (h) h.textContent = hint;
}
