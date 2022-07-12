import { getNameAndTitle } from "./pages/content/getNameAndTitle.js";
import { getContentDiv } from "./pages/frames/getContentDiv.js";
import { getIconsBoxRow } from "./pages/frames/getIconsBoxRow.js";
import { getIntroBoxColumn } from "./pages/frames/getIntroBoxColumn.js";
import { getIconsBoxColumn } from "./pages/frames/getIconsBoxColumn.js";
import { getIntroBoxGrid } from "./pages/frames/getIntroBoxGrid.js";
const myName = getNameAndTitle().myName;
const title = getNameAndTitle().title;
const intro = getNameAndTitle().intro;

// Constructing web framework
function getPageElements(root) {
  if (root) {
    getContentDiv(root);
    getIntroBoxGrid();
    getIntroBoxColumn(myName, title, intro);
    getIconsBoxColumn();
    getIconsBoxRow();
  }
}

export { getPageElements };
