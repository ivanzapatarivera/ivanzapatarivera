import { getPageElements } from "./getPageElements.js";
import { eventListeners } from "./eventListeners.js";

// Empty address bar and replace URL with homepage.
function emptyAndReplace(URL) {
  document.body.innerHTML = "";
  location.replace(URL)
}

// Redirect page to main portfolio URL if coming from other URL's
function verifyURL() {
  var origin = window.origin;
  var URL = "https://ivanzapatarivera.com"
  
  if (origin.includes("localhost")) {
    loadPage();
    return;
  } else if (origin !== URL) {
    emptyAndReplace(URL);
    return;
  } else {
    loadPage();
    return;
  }
}

// Loads page constructor and event listeners for page functionality
function loadPage() {
  window.onload = () => {
    const root = document.querySelector("#root");
    getPageElements(root);
    eventListeners();
  };
}

verifyURL();