import { ui } from "./ui";

class Game {
  constructor(level) {
    this.levels = ["rookie", "skilled", "expert"];
    this.level = level;
    this.cards;
  }
  init() {
    console.log("game init", this.level);
    ui.renderCards();
  }
  shuffleCards() {
    let arr = [];
    let cards = ["banana", "broccoli", "carrot", "cherry", "coconut", "egg", "eggplant", "lemon", "onion", "strawberry"];
    let len = cards.length;
    arr.length = len;

    cards.forEach(card => {
      let randomIndex = Math.floor(Math.random() * len);
      
      while (arr[randomIndex]) {
        randomIndex = (randomIndex + 1) % len;
      }
      arr.splice(randomIndex, 1, card);
    })
    this.cards = [...arr];
    return;
  }
}

export default Game;