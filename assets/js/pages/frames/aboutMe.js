import { aboutMeContents } from "../../pages/content/aboutMe.js";
import { aboutMeEventListener } from "../../eventListeners/linksBox/aboutMe.js";

function aboutMeFrame() {
  const root = document.querySelector("#root");
  const aboutMeLink = document.querySelector("#aboutMe");

  // Conditional to verify on aboutMe link
  if (aboutMeLink) {
    // Creating aboutMePage element/framework
    const aboutMe = `<div class="aboutMePage col-12 col-md-6" style="display: none" id="aboutMePage">
                      </div>`;
    root.insertAdjacentHTML("afterbegin", aboutMe);

    // Calling content to be added into created framework
    aboutMeContents();

    // Calling eventListener on about me frame
    aboutMeEventListener();
  }
}

export { aboutMeFrame }
