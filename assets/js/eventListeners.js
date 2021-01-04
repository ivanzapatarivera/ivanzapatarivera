import { linksBox } from "./eventListeners/linksBox/linksBox.js";
import { aboutMe } from "./eventListeners/linksBox/aboutMe.js";
import { contact } from "./eventListeners/linksBox/contact.js";
import { linkedin } from "./eventListeners/icons/linkedin.js";
import { github } from "./eventListeners/icons/github.js";
import { twitter } from "./eventListeners/icons/twitter.js";

function eventListeners() {
  linksBox();
  aboutMe();
  contact();
  linkedin();
  github();
  twitter();
}

export { eventListeners };
