let getIconsBoxRow = () => {
  let iconsBoxRow = document.querySelector("#iconsBoxRow");
  const linksBox = `<div class="row linksBox p-4">
                            <div class="col-12 text-center boxItems" id="projects">Projects</div>
                            <div class="col-12 text-center pt-3 boxItems">Resume <span id="resumePDF">PDF</span>, <span id="resumeDOC">Word</span>, <span id="resumeGoogleDocs">Google Docs</span></div>
                            <div class="col-12 text-center py-3 boxItems" id="aboutMe">About Me</div>
                            <div class="col-12 text-center boxItems" id="contact">Contact</div>
                        </div>
                        `;
  iconsBoxRow.insertAdjacentHTML("afterend", linksBox);
  return;
};

export { getIconsBoxRow };
