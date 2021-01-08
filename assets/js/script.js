import { construction } from "./construction.js";
import { eventListeners } from "./eventListeners.js";

// Redirect page to main portfolio URL if coming from other URL's
verifyURL();
function verifyURL() {
  if (window.origin !== "https://ivanzapatarivera.com") {
    document.body.innerHTML = ""; 
    location.replace("https://ivanzapatarivera.com");
  } else {
    console.log("You're in ", window.origin);
    loadPage();
  }
  // verifyMobileScreen();
}

// If page loads or resizes to mobile screen, portfolio will be fullscreen
// function verifyMobileScreen() {
//   const body = document.querySelector("body");

//   if(document.body.clientWidth <= "767") {
//     body.requestFullscreen();
//   }

  // Fullscreen change when resized
  // window.addEventListener("resize", () => {    
  //   if(document.body.clientWidth <= "767") {    
  //     body.requestFullscreen();

      // Event listener on fullscreen change and screen is of mobile width
      // body.addEventListener("fullscreenchange", () => {
      //   if(document.body.clientWidth <= "767") {
      //     body.requestFullscreen();
      //   }
      // });

      // If window is larger than mobile size, the page will exit fullscreen
    // } else {
//       document.exitFullscreen()
//     }
//   }, true);
// }

// Loads page constructor and event listeners for page functionality
function loadPage() {
  window.onload = () => {
    const root = document.querySelector("#root");
    construction(root);
    eventListeners();
  };
}
