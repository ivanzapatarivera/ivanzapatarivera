import { projectContents } from "./projectContents.js";

// Event Listener for links on top of box
function projects() {
  const root = document.querySelector("#root");
  const projectsEl = document.querySelector("#projects");

  // Conditional to verify on projects link
  if (projectsEl) {
    const projects = `<div class="projectsPage" style="display: none" id="projectsPage">
                        <div class="contentLinksBox" id="projectContents">
                        </div>
                    </div>`;
    root.insertAdjacentHTML("afterbegin", projects);
    projectContents();
    const projectsPage = document.querySelector("#projectsPage");

    // Event listener conditional on display style to who div with proects
    projectsEl.addEventListener("click", () => {
      if (projectsPage.style.display == "none") {
        projectsPage.classList.add("flip-in-hor-bottom");
        projectsPage.style.display = "block";
      } else if (projectsPage.style.display == "block") {
        projectsPage.style.display = "none";
        projectsPage.classList.remove("scale-out-center");
        projectsPage.style.display = "block";
        projectsPage.classList.add("flip-in-hor-bottom");
      }
    });

    // Event listener to exit projects div
    projectsPage.addEventListener("click", () => {
      projectsPage.classList.remove("flip-in-hor-bottom");
      projectsPage.classList.add("scale-out-center");
    });
  }
}

export { projects };
