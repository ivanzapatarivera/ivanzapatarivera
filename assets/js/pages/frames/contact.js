import { contactEventListener } from "../../eventListeners/linksBox/contact.js";

function contactFrame() {
  const root = document.querySelector("#root");
  const contactLink = document.querySelector("#contact");

  // Conditional to verify on contact link
  if (contactLink) {
    const contact = `<div class="contactPage col-12 col-md-6" style="display: none" id="contactPage">
                      </div>
                      `;
    root.insertAdjacentHTML("afterbegin", contact);
    contactEventListener();
  }
}

export { contactFrame };
