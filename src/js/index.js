import { ui, game } from "./ui";

const init = () => {
  ui.levels.addEventListener("click", e => ui.chooseLevel(e));
  game.init()
};

document.addEventListener("DOMContentLoaded", init);