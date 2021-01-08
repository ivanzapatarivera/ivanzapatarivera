import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";

verifyURL();
function verifyURL() {
  if (window.origin !== "https://ivanzapatarivera.com") {
    location.replace("https://ivanzapatarivera.com");
  } else {
    console.log("You're in ", window.origin);
  }
  loadPage();
}

function loadPage() {
  window.onload = function () {
    const root = document.querySelector("#root");

    construction(root);
    eventListeners();
  };
}
