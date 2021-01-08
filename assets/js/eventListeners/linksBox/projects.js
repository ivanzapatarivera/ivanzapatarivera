function projectsEventListener() {
  const rightside = document.querySelector("#rightside");
  const projectsPage = document.querySelector("#projectsPage");
  const projectsLink = document.querySelector("#projects");

  // Event listener conditional on display style to who div with proects
  projectsLink.addEventListener("click", () => {
    if (projectsPage.style.display == "none") {
      projectsPage.classList.add("flip-in-hor-bottom");
      projectsPage.style.display = "block";
      rightside.classList.add("fade-out");
    } else if (projectsPage.style.display == "block") {
      projectsPage.style.display = "none";
      projectsPage.classList.remove("scale-out-bottom");
      projectsPage.style.display = "block";
      projectsPage.classList.add("flip-in-hor-bottom");
      rightside.classList.add("fade-out");
    }
  });

  // Event listener to exit projects div
  projectsPage.addEventListener("click", () => {
    projectsPage.classList.remove("flip-in-hor-bottom");
    projectsPage.classList.add("scale-out-bottom");
    rightside.classList.remove("fade-out");
    rightside.classList.add("fade-in");
  });
}

export { projectsEventListener };
