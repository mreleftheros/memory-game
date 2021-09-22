import Game from "./game";

class UI {
  constructor() {
    this.levelScreen = document.getElementById("levelScreen");
    this.levels = document.getElementById("levels");
    this.gameScreen = document.getElementById("gameScreen");
    this.cardsContainer = document.getElementById("cardsContainer");
  }
  chooseLevel(e) {
    if (e.target.tagName !== "BUTTON") return; // check
    
    const level = e.target.getAttribute("data-level");

    game = new Game(level);
    this.transitionScreens();
    game.init();
  }
  transitionScreens() {
    this.levelScreen.classList.add("transition");
    this.levelScreen.addEventListener("transitionend", () => {
      this.levelScreen.classList.remove("active");
    })

    this.gameScreen.classList.add("active");
  }
}

const ui = new UI();
let game;

export { ui, game };