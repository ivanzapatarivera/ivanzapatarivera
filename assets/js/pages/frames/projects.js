import { projectsEventListener } from "../../eventListeners/linksBox/projects.js";

function projectsFrame() {
  const root = document.querySelector("#root");
  const projectsLink = document.querySelector("#projects");

  // Conditional to verify on projects link
  if (projectsLink) {
    const projects = `<div class="projectsPage" style="display: none" id="projectsPage">
                        
                    </div>`;
    root.insertAdjacentHTML("afterbegin", projects);
    
    // Calling function to display/exit projects page
    projectsEventListener();
  }
}

export { projectsFrame };
