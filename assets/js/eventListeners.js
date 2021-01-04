import { linksBox } from "./eventListener/linksBox.js";
import { aboutMe } from "./eventListener/aboutMe.js"

function eventListeners() {
    linksBox();
    aboutMe();
    contact();
}

export {eventListeners}