import { ui } from "./ui";
import firebase from "./firebase";

const init = () => {
  ui.init();
};

document.addEventListener("DOMContentLoaded", init);