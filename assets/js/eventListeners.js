import { projectsFrame } from "./pages/frames/projects.js";
import { resume } from "./eventListeners/linksBox/resume.js";
import { aboutMeFrame } from "./pages/frames/aboutMe.js";
import { contactFrame } from "./pages/frames/contact.js";
import { linkedin } from "./eventListeners/icons/linkedin.js";
import { github } from "./eventListeners/icons/github.js";
import { twitter } from "./eventListeners/icons/twitter.js";

function eventListeners() {
  linkedin();
  github();
  twitter();
  projectsFrame();
  aboutMeFrame();
  resume();
  contactFrame();
}

export { eventListeners };
