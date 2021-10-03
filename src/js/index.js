import ui from "./ui";
import firebase from "./firebase";

const init = async () => {
  ui.levels.addEventListener("click", e => ui.chooseLevel(e));
  // await firebase.setHighscores();
};

document.addEventListener("DOMContentLoaded", init);