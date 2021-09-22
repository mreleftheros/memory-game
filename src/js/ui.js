import Game from "./game";

class UI {
  constructor() {
    this.levels = document.getElementById("levels");
  }

  chooseLevel(e) {
    if (e.target.tagName !== "BUTTON") return; // check
    
    const level = e.target.getAttribute("data-level");

    game = new Game(level);
    game.init();
  }
}

const ui = new UI();
let game;

export { ui, game };