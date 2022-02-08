import { getNameAndTitle } from "./pages/content/getNameAndTitle.js";
import { getContentDiv } from "./pages/frames/getContentDiv.js";
import { getIntroBoxColumn } from "./pages/frames/getIntroBoxColumn.js";
import { getIntroBoxGrid } from "./pages/frames/getIntroBoxGrid.js";
const myName = getNameAndTitle().myName;
const title = getNameAndTitle().title;
const intro = getNameAndTitle().intro;

// Constructing web framework
function construction(iconsBoxColum) {
  if (root) {
    getContentDiv(root);
    getIntroBoxGrid();
    // Introduction to Portfolio
    getIntroBoxColumn(myName, title, intro);

    // Icons to online presence
    iconsBoxColum = document.querySelector("#iconsBoxColum");
    const iconsBox = `<div class="row p-3" id="iconsBoxRow">
    <div class="col-4 text-right boxItems" id="linkedin"><i class="fab iconsBox fa-linkedin-in"></i><br></div>
    <div class="col-4 text-center boxItems" id="github"><i class="fab iconsBox fa-github"></i></div>
    <div class="col-4 text-left boxItems" id="twitter"><i class="fab iconsBox fa-twitter"></i><br></i></div>
    </div>
    `;
    iconsBoxColum.insertAdjacentHTML("afterbegin", iconsBox);

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
