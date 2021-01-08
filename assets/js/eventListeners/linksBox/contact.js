import { contactContents } from "../../pages/content/contact.js";

// Event Listener for links on top of box
function contactEventListener() {
  const rightside = document.querySelector("#rightside");
  const contactLink = document.querySelector("#contact");
  const contactPage = document.querySelector("#contactPage");

  // Event listener conditional on display style to who div with proects
  contactLink.addEventListener("click", () => {
    // Calling contents to be added into created framework
    contactContents();

    if (contactPage.style.display == "none") {
      contactPage.classList.add("flip-in-hor-bottom");
      contactPage.style.display = "block";
      rightside.classList.add("fade-out");
    } else if (contactPage.style.display == "block") {
      contactPage.style.display = "none";
      contactPage.classList.remove("scale-out-bottom");
      contactPage.style.display = "block";
      contactPage.classList.add("flip-in-hor-bottom");
      rightside.classList.add("fade-out");
    }
  });

  // Event listener to exit contact div
  contactPage.addEventListener("click", () => {
    contactPage.classList.remove("flip-in-hor-bottom");
    contactPage.classList.add("scale-out-bottom");
    rightside.style.display = "block";
    rightside.classList.remove("fade-out");
    rightside.classList.add("fade-in");
  });
}

export { contactEventListener };
