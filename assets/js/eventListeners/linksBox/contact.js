import { contactContents } from "../../pages/content/contact.js";

// Event Listener for links on top of box
function contactEventListener() {
  const rightSide = document.querySelector("#rightside");
  const contactLink = document.querySelector("#contact");
  const contactPage = document.querySelector("#contactPage");

  // Event listener conditional on display style to who div with proects
  contactLink.addEventListener("click", () => {
    // Calling contents to be added into created framework
    contactContents();

    if (contactPage.style.display == "none") {
      contactPage.classList.add("flip-in-hor-bottom");
      contactPage.style.display = "block";
      rightSide.classList.add("fade-out");
    } else if (contactPage.style.display == "block") {
      contactPage.style.display = "none";
      contactPage.classList.remove("scale-out-bottom");
      contactPage.style.display = "block";
      contactPage.classList.add("flip-in-hor-bottom");
      rightSide.classList.add("fade-out");
    }
  });

  // Event listener to exit contact div
  contactPage.addEventListener("click", () => {
    // Removing contents from contact page
    contactPage.innerHTML = "";

    contactPage.classList.remove("flip-in-hor-bottom");
    contactPage.classList.add("scale-out-bottom");
    rightSide.style.display = "block";
    rightSide.classList.remove("fade-out");
    rightSide.classList.add("fade-in");
  });
}

export { contactEventListener };
