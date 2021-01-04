// Event Listener for links on top of box
function linksBox() {
  const root = document.querySelector("#root");
  const projectsEl = document.querySelector("#projects");

  // Conditional to verify on projects link
  if (projectsEl) {
    const projects = `<div class="projectsPage" style="display: none" id="projectsPage">
                    </div>`;
    root.insertAdjacentHTML("afterbegin", projects);
    const projectsPage = document.querySelector("#projectsPage");

    // Event listener conditional on display style to who div with proects
    projectsEl.addEventListener("click", () => {
      if (projectsPage.style.display == "none") {
        projectsPage.classList.add("flip-in-hor-bottom");
        projectsPage.style.display = "block";
      } else if (projectsPage.style.display == "block") {
        projectsPage.style.display = "none";
        projectsPage.classList.remove("slide-out-top");
        projectsPage.style.display = "block";
        projectsPage.classList.add("flip-in-hor-bottom");
      }
    });

    // Event listener to exit projects div
    projectsPage.addEventListener("click", () => {
      projectsPage.classList.remove("flip-in-hor-bottom");
      projectsPage.classList.add("slide-out-top");
    });
  }
}

export { linksBox };
