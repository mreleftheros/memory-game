import ui from "./ui";

const init = () => {
  ui.levels.addEventListener("click", ui.chooseLevel);
};

document.addEventListener("DOMContentLoaded", init);