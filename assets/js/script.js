import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";

// Redirect page to main portfolio URL if coming from other URL's
let verifyURL = () => {
  if (window.origin !== "https://ivanzapatarivera.com") {
    document.body.innerHTML = ""; 
    location.replace("https://ivanzapatarivera.com");
  } else {
    console.log("You're in ", window.origin);
    loadPage();
  }
}

// Loads page constructor and event listeners for page functionality
let loadPage = () => {
  window.onload = () => {
    const root = document.querySelector("#root");
    construction(root);
    eventListeners();
  };
}

verifyURL();