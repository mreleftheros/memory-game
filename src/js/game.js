import { ui } from "./ui";

class Game {
  constructor(level) {
    this.levels = [
      {name: "rookie", count: 6},
      {name: "skilled", count: 8},
      {name: "expert", count: 10}
    ];
    this.level = level;
    this.cardsCount;
    this.cards = ["banana", "broccoli", "carrot", "cherry", "coconut", "egg", "eggplant", "lemon", "onion", "strawberry"];
    this.shuffledCards;
  }
  init() {
    console.log("game init", this.level);
    this.setCardsCount();
    this.shuffleCards();
  }
  setCardsCount() {
    this.cardsCount = this.levels.filter(level => level.name === this.level)[0].count;
  }
  shuffleCards() {
    let len = this.cardsCount;
    let arr = [];
    let cardsCopy = [...this.cards];
    arr.length = len;
    cardsCopy.length = len;

    cardsCopy.forEach(card => {
      let firstRandomIndex = Math.floor(Math.random() * (len * 2));
      
      while (arr[firstRandomIndex]) {
        firstRandomIndex = (firstRandomIndex + 1) % (len * 2);
      }

      arr.splice(firstRandomIndex, 1, card);
      
      let secondRandomIndex = Math.floor(Math.random() * (len * 2));
      
      while (arr[secondRandomIndex]) {
        secondRandomIndex = (secondRandomIndex + 1) % (len * 2);
      }

      arr.splice(secondRandomIndex, 1, card);
    })
    this.shuffledCards = [...arr];
  }
}

export default Game;