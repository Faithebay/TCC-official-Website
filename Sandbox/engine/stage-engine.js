/* stage-engine.js */

import { StageCore } from "./engine/stage-core.js";
import { renderStage, renderKeys } from "./engine/stage-render.js";
import { handleKeyPress } from "./engine/stage-events.js";
import { compileEvents } from "./engine/stage-blockly.js";

export const StageEngine = {

  init(workspace, config) {
    this.workspace = workspace;
    this.config = config;

    renderKeys(
      config.SE_ALL_KEYS,
      config.SE_KEY_LABELS,
      handleKeyPress
    );
  },

  run() {
    StageCore.isRunning = true;

    compileEvents(
      this.workspace,
      this.config.prefix,
      this.config.SE_MOVE_OPTIONS,
      this.config.SE_SOUND_OPTIONS
    );

    renderStage();
  },

  reset() {
    StageCore.reset();
    renderStage();
  }
};
