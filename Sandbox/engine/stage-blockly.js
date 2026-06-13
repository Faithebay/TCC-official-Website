import { StageActions } from "./stage-actions.js";

export const StageBlockly = {
  run(workspace) {
    const blocks = workspace.getTopBlocks(true);

    blocks.forEach(block => {
      this.execute(block);
    });
  },

  execute(block) {
    if (!block) return;

    switch (block.type) {
      case "move":
        StageActions.move("player", 10, 0);
        break;

      case "say":
        StageActions.say("player", block.getFieldValue("TEXT"));
        break;

      case "wait":
        StageActions.wait(1000);
        break;
    }

    if (block.nextConnection && block.nextConnection.targetBlock()) {
      this.execute(block.nextConnection.targetBlock());
    }
  }
};
