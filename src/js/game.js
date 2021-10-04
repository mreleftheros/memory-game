import ui from "./ui";
import firebase from "./firebase";

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
    this.totalTime;
    this.highscores;
  }
  async init() {
    this.isPlaying = true;
    this.highscores = await firebase.getHighscores();
    this.highscores.sort((a, b) => a.time - b.time);
    ui.renderHighscores();
   
    this.setCardsCount();
    this.shuffleCards();
  }
  startTimer() {
    const startTime = Date.now();

    this.timer = setInterval(() => {
      const now = Date.now();
      let time = now - startTime;
      this.totalTime = time;
      
      let minutes = String(Math.floor(time / 1000 / 60));
      let seconds = String(Math.floor(time / 1000) % 60);
      let milliseconds = String(time % 1000);

      // formatting
      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }

      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }

      if (milliseconds.length === 1) {
        milliseconds = "00" + milliseconds;
      }
      else if (milliseconds.length === 2) {
        milliseconds = "0" + milliseconds;
      }

      ui.displayTime(minutes, seconds, milliseconds);
    }, 1);
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

    let winner = checkHighscore();

    this.isPlaying = false;

    if(winner) {
      return ui.toggleScreen(ui.winnerScreen);
    }
    else {
      ui.toggleScreen(ui.gameScreen);
      ui.toggleScreen(ui.levelScreen);
      return this.reset();
    }
  }
  checkHighscore() {
    return this.highscores.some(highscore => highscore.time > this.totalTime);
  }
  updateHighScores(name) {
    const removed = this.highscores.pop();
    
    firebase.deleteHighscore(removed.id);
    firebase.setHighscore(name, this.totalTime);
  }
}

export default Game;