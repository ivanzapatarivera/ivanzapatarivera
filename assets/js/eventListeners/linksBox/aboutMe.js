import { aboutMeContents } from "../../pages/content/aboutMe.js";

// Event Listener for links on top of box
function aboutMeEventListener() {
  const rightSide = document.querySelector("#rightside");
  const aboutMeLink = document.querySelector("#aboutMe");
  const aboutMePage = document.querySelector("#aboutMePage");

  // Event listener conditional on display style to who div with proects
  aboutMeLink.addEventListener("click", () => {
    // Calling content to be added into created framework
    aboutMeContents();

    if (aboutMePage.style.display == "none") {
      aboutMePage.classList.add("flip-in-hor-bottom");
      aboutMePage.style.display = "block";
      rightSide.classList.add("fade-out");
    } else if (aboutMePage.style.display == "block") {
      aboutMePage.style.display = "none";
      aboutMePage.classList.remove("scale-out-bottom");
      aboutMePage.style.display = "block";
      aboutMePage.classList.add("flip-in-hor-bottom");
      rightSide.classList.add("fade-out");
    }
  });

  // Event listener to exit aboutMe div
  aboutMePage.addEventListener("click", () => {
    // Removing contents from about me frame
    aboutMePage.innerHTML = "";

    aboutMePage.classList.remove("flip-in-hor-bottom");
    aboutMePage.classList.add("scale-out-bottom");
    rightSide.classList.remove("fade-out");
    rightSide.classList.add("fade-in");
  });
}

export { aboutMeEventListener };
