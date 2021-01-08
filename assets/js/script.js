import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";
window.onload = function () {

  const root = document.querySelector("#root");

  construction(root);
  eventListeners();

  console.log(window.origin)
};