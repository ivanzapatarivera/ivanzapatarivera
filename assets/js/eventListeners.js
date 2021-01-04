import { linksBox } from "./eventListener/linksBox.js";
import { aboutMe } from "./eventListener/aboutMe.js";
import { contact } from "./eventListener/contact.js";

function eventListeners() {
    linksBox();
    aboutMe();
    contact();
}

export {eventListeners}