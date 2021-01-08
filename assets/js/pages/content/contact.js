import contactArr from "../content/contactArr.js";

function contactContents() {
  const contactPage = document.querySelector("#contactPage");

  // Validating contact page is loaded
  if (contactPage) {
    const contact = `<div class="container">
                        <div class="row contactContent d-flex align-items-center">
                            <div class="col-12 pl-4 pr-3" id="contactContent">
                            <h3 class="pt-5 mb-5">Contact Me</h3>
                            </div>
                        </div>
                    </div>
                `;

    // Adding contact contect div element
    contactPage.insertAdjacentHTML("afterbegin", contact);

    const contactContent = document.querySelector("#contactContent");
    contactContents(contact, contactContent);
  }

  function contactContents() {
    if (contactContent) {
      // Adding contact information dynamically
      contactArr.map((data) => {
        const id = data.id;
        const type = data.type;
        const content = data.content;
        const href = data.href;
        const contact = `<div class="row mt-4 link" id="${id}">
                            <div class="col-12 col-md-3"><b>${type}</b></div>
                            <div class="col-8">${content}</a></div>
                        </div>`;

        // Adding generated information to contact div element
        contactContent.insertAdjacentHTML("beforeend", contact);

        // Event listener per id of each contact element
        const idElement = document.querySelector("#" + `${id}`);
        idElement.addEventListener("click", () => {
          window.open(`${href}`, "_blank");
        });
      });
    }
  }
}

export { contactContents };
