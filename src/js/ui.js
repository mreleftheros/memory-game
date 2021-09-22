class UI {
  constructor() {
    this.levels = document.getElementById("levels");
  }

  chooseLevel(e) {
    if (e.target.tagName !== "BUTTON") return; // check
  }
}

const ui = new UI();

export default ui;