import Game from "./game";

class UI {
  constructor() {
    this.levelScreen = document.getElementById("levelScreen");
    this.levels = document.getElementById("levels");
    this.gameScreen = document.getElementById("gameScreen");
    this.cardsContainer = document.getElementById("cardsContainer");
    this.timer = document.getElementById("timer");
    this.highscoresList = document.getElementById("highscoresList");
  }
  chooseLevel(e) {
    if (e.target.tagName !== "BUTTON") return; // check
    
    const level = e.target.getAttribute("data-level");

    game = new Game(level);
    this.transitionScreens();
  }
  transitionScreens() {
    this.levelScreen.classList.add("transition");
    this.levelScreen.addEventListener("transitionend", () => {
      this.levelScreen.classList.remove("active");
    })
    
    this.gameScreen.classList.add("active");
    game.init();
  }
  renderCards() {
    this.cardsContainer.classList.add(game.level);
    const fragment = new DocumentFragment();

    game.shuffledCards.forEach(card => {
      // create card template
      const divElement = document.createElement("div");
      divElement.classList.add("main__game-screen__game-container__cards__card");
      
      const img = new Image();
      img.classList.add("main__game-screen__game-container__cards__card__img")
      img.setAttribute("data-card", card);
      img.src = "./assets/card.jpg";
      
      img.onload = function() {
        divElement.appendChild(img);
      }

      img.addEventListener("click", e => this.chooseCard(e));
      fragment.appendChild(divElement);
    })

    this.cardsContainer.appendChild(fragment);
  }
  chooseCard(e) {
    if (!game.timer) { // start timer
      game.startTimer();
    }

    if (e.target.classList.contains("active") || !game.isPlaying) return; // check
    
    game.isPlaying = false;

    this.openCard(e);
  }
  openCard(e) {
    const card = e.target.getAttribute("data-card");
    e.target.classList.add("active");
    e.target.src = `./assets/${card}.png`;

    game.setCardChoice(card);
  }
  closeCards() {
    for (let child of this.cardsContainer.children) {
      child.firstElementChild.classList.remove("active");

      if (!child.firstElementChild.classList.contains("found")) {
        child.firstElementChild.src = `./assets/card.jpg`;
      }
    }

    game.isPlaying = true;
  }
  setFoundCards(card) {
    let cards = document.querySelectorAll(`[data-card=${card}]`);
    
    for (let card of cards) {
      card.classList.add("found");
    }
    
    let allFound = Array.from(this.cardsContainer.children).every(child => {
      return child.firstElementChild.classList.contains("found");
    })

    if (allFound) {
      game.endGame();
    }
    else {
      game.isPlaying = true;
    }
  }
  displayTime(minutes, seconds, milliseconds) {
    let html = `
    <div class="main__game-screen__game-container__timer-container__timer">
      <span class="main__game-screen__game-container__timer-container__timer__minutes">${minutes} : </span>
      <span class="main__game-screen__game-container__timer-container__timer__seconds">${seconds} :</span>
      <span class="main__game-screen__game-container__timer-container__timer__milliseconds">${milliseconds}</span>
    </div>
    `;

    this.timer.innerHTML = html;
  }
  renderHighscores() {
    const highscores = game.highscores.sort((a, b) => a.time - b.time);

    // helper function which takes a timestamp and returns a timing format
    const setTiming = timestamp => {
      let minutes = String(Math.floor(timestamp / 1000 / 60));
      let seconds = String(Math.floor(timestamp / 1000) % 60);
      let milliseconds = String(timestamp % 1000);

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

      return `${minutes} : ${seconds} : ${milliseconds}`;
    };

    let html = `
      <li class="main__game-screen__game-container__highscores-container__highscores-list__item">
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__place">
          &#129351; &#127942; 1st Place
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__name">
          ${highscores[0].name}
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__time">
          ${setTiming(highscores[0].time)}
        </span>
      </li>
      <li class="main__game-screen__game-container__highscores-container__highscores-list__item">
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__place">
          &#129352; 2nd Place
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__name">
          ${highscores[1].name}
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__time">
          ${setTiming(highscores[1].time)}
        </span>
      </li>
      <li class="main__game-screen__game-container__highscores-container__highscores-list__item">
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__place">
          &#129353; 3rd Place
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__name">
          ${highscores[2].name}
        </span>
        <span class="main__game-screen__game-container__highscores-container__highscores-list__item__time">
          ${setTiming(highscores[2].time)}
        </span>
      </li>
    `;

    this.highscoresList.innerHTML = html;
  }
}

const ui = new UI();
let game;

export default ui;