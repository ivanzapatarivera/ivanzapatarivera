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
  var URL = "https://ivanzapatarivera.com";

  // Validating if URL is correct, else send it to domain URL.
  var check = 0;
  if (origin === URL || origin.includes("localhost")) check = 1;
  
  check
    ? loadPage()
    : emptyAndReplace(URL)
  return
}

// Loads page constructor and event listeners for page functionality
function loadPage() {
  console.log()
  window.onload = () => {
    const root = document.querySelector("#root");
    getPageElements(root);
    eventListeners();
  };
}

verifyURL();