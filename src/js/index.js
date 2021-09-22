import { ui, game } from "./ui";

const init = () => {
  ui.levels.addEventListener("click", e => ui.chooseLevel(e));
};

document.addEventListener("DOMContentLoaded", init);