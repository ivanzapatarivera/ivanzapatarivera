import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";

verifyURL();
function verifyURL() {
  if (window.origin !== "https://ivanzapatarivera.com") {
    document.body.innerHTML = "";
    loadPage();
    // location.replace("https://ivanzapatarivera.com");
  } else {
    console.log("You're in ", window.origin);
    loadPage();
  }

  verifyMobileScreen();
}

function verifyMobileScreen() {
  const body = document.querySelector("body");
  window.addEventListener("resize", () => {
    console.log(document.body.clientWidth)
    if(document.body.clientWidth <= "767") {
      body.requestFullscreen();
      body.addEventListener("fullscreenchange", () => {
      });
    } else {
      document.exitFullscreen()
    }
  }, true);
}

function loadPage() {
  window.onload = () => {
    const root = document.querySelector("#root");

    construction(root);
    eventListeners();
  };
}
