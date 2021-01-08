import { aboutMeContents } from "../../pages/content/aboutMe.js";
import { aboutMeEventListener } from "../../eventListeners/linksBox/aboutMe.js";

function aboutMeFrame() {
  // Calling root and link on profile page
  const root = document.querySelector("#root");
  const aboutMeLink = document.querySelector("#aboutMe");

  // Conditional to verify on aboutMe link
  if (aboutMeLink) {
    // About Me frame
    const aboutMe = `<div class="aboutMePage col-12 col-md-6" style="display: none" id="aboutMePage">
                      </div>`;

    // Inserting frame HTML into About Me DIV
    root.insertAdjacentHTML("afterbegin", aboutMe);

    // Calling content to be added into created framework
    aboutMeContents();

    // Calling eventListener on about me frame
    aboutMeEventListener();
  }
}

export { aboutMeFrame };
