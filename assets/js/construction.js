import { getNameAndTitle } from "./pages/content/getNameAndTitle.js";
import { getContentDiv } from "./pages/frames/getContentDiv.js";
import { getIconsBoxColumn } from "./pages/frames/getIconsBoxColumn.js";
import { getIntroBoxColumn } from "./pages/frames/getIntroBoxColumn.js";
import { getIntroBoxGrid } from "./pages/frames/getIntroBoxGrid.js";
const myName = getNameAndTitle().myName;
const title = getNameAndTitle().title;
const intro = getNameAndTitle().intro;

// Constructing web framework
function construction(root) {
  if (root) {
    getContentDiv(root);
    getIntroBoxGrid();
    // Introduction to Portfolio
    getIntroBoxColumn(myName, title, intro);
    getIconsBoxColumn();

    // Icons to online presence


    // Navigation Bar (Links Box)
    const iconsBoxRow = document.querySelector("#iconsBoxRow");
    const linksBox = `<div class="row linksBox p-4">
                            <div class="col-12 text-center boxItems" id="projects">Projects</div>
                            <div class="col-12 text-center pt-3 boxItems">Resume <span id="resume">PDF</span>, <span id="resumeDOC">Word</span>, <span id="resumeGoogleDocs">Google Docs</span></div>
                            <div class="col-12 text-center py-3 boxItems" id="aboutMe">About Me</div>
                            <div class="col-12 text-center boxItems" id="contact">Contact</div>
                        </div>
                        `;
    iconsBoxRow.insertAdjacentHTML("afterend", linksBox);
  }
}

export { construction };
