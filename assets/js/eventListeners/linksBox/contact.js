import { contactContents } from "../../pages/contact.js";

// Event Listener for links on top of box
function contact() {
  const root = document.querySelector("#root");
  const contactEl = document.querySelector("#contact");

  // Conditional to verify on contact link
  if (contactEl) {
    const contact = `<div class="contactPage col-12 col-md-6" style="display: none" id="contactPage">
                      </div>
                      `;
    root.insertAdjacentHTML("afterbegin", contact);
    contactContents();

    const rightside = document.querySelector("#rightside");
    const contactPage = document.querySelector("#contactPage");

    // Event listener conditional on display style to who div with proects
    contactEl.addEventListener("click", () => {
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
}

export { contact };
