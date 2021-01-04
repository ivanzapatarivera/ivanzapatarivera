// Event Listener for links on top of box
function aboutMe() {
    const root = document.querySelector("#root");
    const aboutMeEl = document.querySelector("#aboutMe");
  
    // Conditional to verify on aboutMe link
    if (aboutMeEl) {
      const aboutMe = `<div class="aboutMePage" style="display: none" id="aboutMePage">
                      </div>`;
      root.insertAdjacentHTML("afterbegin", aboutMe);
      const aboutMePage = document.querySelector("#aboutMePage");
  
      // Event listener conditional on display style to who div with proects
      aboutMeEl.addEventListener("click", () => {
        if (aboutMePage.style.display == "none") {
          aboutMePage.classList.add("flip-in-hor-bottom");
          aboutMePage.style.display = "block";
        } else if (aboutMePage.style.display == "block") {
          aboutMePage.style.display = "none";
          aboutMePage.classList.remove("slide-out-top");
          aboutMePage.style.display = "block";
          aboutMePage.classList.add("flip-in-hor-bottom");
        }
      });
  
      // Event listener to exit aboutMe div
      aboutMePage.addEventListener("click", () => {
        aboutMePage.classList.remove("flip-in-hor-bottom");
        aboutMePage.classList.add("slide-out-top");
      });
    }
  }
  
  export { aboutMe };
  