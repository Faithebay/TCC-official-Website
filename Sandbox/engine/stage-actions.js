import { StageCore } from "./stage-core.js";

export const StageActions = {
  move(characterId, dx, dy) {
    const char = StageCore.state.characters.find(c => c.id === characterId);
    if (!char) return;

    char.x += dx;
    char.y += dy;
  },

  say(characterId, text) {
    const char = StageCore.state.characters.find(c => c.id === characterId);
    if (!char) return;

    char.message = text;
  },

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};
