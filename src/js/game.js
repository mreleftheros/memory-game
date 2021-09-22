import { ui } from "./ui";

class Game {
  constructor(level) {
    this.levels = ["rookie", "skilled", "expert"];
    this.level = level;
  }
  init() {
    console.log("game init", this.level);
    ui.renderCards();
  }
}

export default Game;