import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";
window.onload = function () {

  const root = document.querySelector("#root");

  construction(root);
  eventListeners();

  if(window.origin == "https://ivanzapatarivera.herokuapp.com/") {
    location.replace("https://ivanzapatarivera.com");
    
  } else {
    console.log("You're in ", window.origin);
  }
};