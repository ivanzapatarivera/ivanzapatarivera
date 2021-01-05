import { projects } from "./eventListeners/linksBox/projects.js";
import { aboutMe } from "./eventListeners/linksBox/aboutMe.js";
import { resume } from "./eventListeners/linksBox/resume.js";
import { contact } from "./eventListeners/linksBox/contact.js";
import { linkedin } from "./eventListeners/icons/linkedin.js";
import { github } from "./eventListeners/icons/github.js";
import { twitter } from "./eventListeners/icons/twitter.js";

function eventListeners() {
  projects();
  aboutMe();
  resume();
  contact();
  linkedin();
  github();
  twitter();
}

export { eventListeners };
