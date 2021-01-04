// Event Listener for links on top of box
function contact() {
    const root = document.querySelector("#root");
    const contactEl = document.querySelector("#contact");
  
    // Conditional to verify on contact link
    if (contactEl) {
      const contact = `<div class="contactPage" style="display: none" id="contactPage">
                      </div>`;
      root.insertAdjacentHTML("afterbegin", contact);
      const contactPage = document.querySelector("#contactPage");
  
      // Event listener conditional on display style to who div with proects
      contactEl.addEventListener("click", () => {
        if (contactPage.style.display == "none") {
          contactPage.classList.add("flip-in-hor-bottom");
          contactPage.style.display = "block";
        } else if (contactPage.style.display == "block") {
          contactPage.style.display = "none";
          contactPage.classList.remove("slide-out-top");
          contactPage.style.display = "block";
          contactPage.classList.add("flip-in-hor-bottom");
        }
      });
  
      // Event listener to exit contact div
      contactPage.addEventListener("click", () => {
        contactPage.classList.remove("flip-in-hor-bottom");
        contactPage.classList.add("slide-out-top");
      });
    }
  }
  
  export { contact };
  