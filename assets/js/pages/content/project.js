import projectArr from "../content/projectArr.js";

// Create project contents dynamically
function projectContents(projects) {
  const projectContents = document.querySelector("#projectsPage");

  // Conditional to verify if element is true
  if (projectContents) {
    projects = `<div class="row d-flex align-items-center projectCardsContent">
                  <div class="col-12">
                    <div class="row d-flex justify-content-center">
                      <div class="col-11">
                        <h3 class="p-5 text-center">Projects</h3>
                      </div>                    
                    </div>
                    <div class="row d-flex justify-content-center" id="projectCards"></div>
                  </div>
                </div>
                `;
    // Inserting projects intro frame
    projectContents.insertAdjacentHTML("afterbegin", projects);

    // Calling on function to display dynamically created project cards
    insertProjectCards();
  }

  function insertProjectCards(projectCards) {
    projectCards = document.querySelector("#projectCards");
    if (projectCards) {
      // Adding project cards dynamically
      projectArr.map((data) => {

        // Declaring each item from projectArr model to be used
        const id = data.id;
        const imgSrc = data.imgSrc;
        const title = data.title;
        const description = data.description;
        const deployHref = data.deployHref;
        const repositoryHref = data.repositoryHref;

        // HTML elements to de dynamically generated
        const cards = `<!-- New Card with Project Information -->
                      <div class="col-10 col-md-4 my-1 mb-2 mx-1 pb-2 projectCards bodytext" id=${id}>
                        <div class="row">
                          <div class="col-12 col-md-6 snapshot">
                            <img src="${imgSrc}" class="snapshotImage mt-3" />
                          </div>
                          <div class="col-12 col-md-6 text-left">
                            <h4 class="mt-3">${title}</h4>
                            ${description}<br />
                            <div class="row">
                              <div class="col-12 text-left">
                                <a href="${deployHref}" target="_0">App Demo</a><br />
                                <a href="${repositoryHref}" target="_0">GitHub Repo</a>
                            </div>
                          </div>
                        </div> 
                      </div>`;

        // Adding generated cards to div element
        projectCards.insertAdjacentHTML("beforeend", cards);
      })
    }
  }
}

export { projectContents };
