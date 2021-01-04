import { linksBox } from "./eventListeners/linksBox/linksBox.js";
import { aboutMe } from "./eventListeners/linksBox/aboutMe.js";
import { contact } from "./eventListeners/linksBox/contact.js";

function eventListeners() {
  linksBox();
  aboutMe();
  contact();
}

export { eventListeners };
