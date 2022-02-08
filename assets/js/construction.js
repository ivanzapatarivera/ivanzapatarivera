import { getNameAndTitle } from "./pages/content/getNameAndTitle.js";
import { getContentDiv } from "./pages/frames/getContentDiv.js";
import { getIconsBoxRow } from "./pages/frames/getIconsBoxRow.js";
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
    getIntroBoxColumn(myName, title, intro);
    getIconsBoxColumn();
    getIconsBoxRow();
  }
}

export { construction };
