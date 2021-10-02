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
    this.cardChoices = [];
    this.isPlaying = false;
    let timer;
  }
  init() {
    this.isPlaying = true;

    this.setCardsCount();
    this.shuffleCards();
  }
  startTimer() {
    const startTime = Date.now();

    this.timer = setInterval(() => {
      const now = Date.now();
      let time = now - startTime;
      
      let minutes = String(Math.floor(time / 1000 / 60) % 60);
      let seconds = String(Math.floor(time / 1000) % 60);

      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }

      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }

      ui.displayTime(minutes, seconds);
    }, 1000);
  }
  setCardsCount() {
    this.cardsCount = this.levels.filter(level => level.name === this.level)[0].count;
  }
  setCardChoice(card) {
    this.cardChoices.push(card);

    if (this.cardChoices.length === 2) {
      if (this.cardChoices[0] === this.cardChoices[1]) {
        ui.setFoundCards(this.cardChoices[0]);
      } else {
        setTimeout(ui.closeCards, 1000);
      }

      this.cardChoices.length = 0;
    }
    else {
      this.isPlaying = true;
    }
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
    ui.renderCards();
  }
  endGame() {
    clearInterval(this.timer);

    this.isPlaying = false;
  }
}

export default Game;