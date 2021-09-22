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
    if (e.target.classList.contains("active") || !game.isPlaying) return; // check
    
    game.isPlaying = false;
    game.setChoiceCount();

    this.openCard(e);
  }
  openCard(e) {
    const card = e.target.getAttribute("data-card");
    e.target.classList.add("active");

    e.target.src = `./assets/${card}.png`;

    if (game.choiceCount === 0) {
      setTimeout(this.closeCards, 1000);
    } else {
      game.isPlaying = true;
    }
  }
  closeCards() {
    for (let child of this.cardsContainer.children) {
      child.firstElementChild.classList.remove("active");
      child.firstElementChild.src = `./assets/card.jpg`;
    }
    game.isPlaying = true;
  }
}

const ui = new UI();
let game = new Game("skilled")

export { ui, game };