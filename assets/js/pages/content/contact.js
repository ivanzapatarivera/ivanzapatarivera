import contactArr from "../content/contactArr.js";

function contactContents() {
  const contactPage = document.querySelector("#contactPage");
  if (contactPage) {
    const contact = `<div class="container">
                        <div class="row contactContent d-flex align-items-center">
                            <div class="col-12 pl-4 pr-3" id="contactContent">
                            <h3 class="pt-5 mb-5">Contact Me</h3>
                            </div>
                        </div>
                    </div>
                `;
    contactPage.insertAdjacentHTML("afterbegin", contact);
    const contactContent = document.querySelector("#contactContent");
    contactContents(contact, contactContent);
  }

  function contactContents() {
    if (contactContent) {
      contactArr.map((data) => {
        const id = data.id;
        const type = data.type;
        const content = data.content;
        const href = data.href;
        const contact = `<div class="row mt-4">
                            <div class="col-12 col-md-3"><b>${type}</b></div>
                            <div class="col-8" id="${id}">${content}</a></div>
                        </div>`;
        contactContent.insertAdjacentHTML("beforeend", contact);
        
        const idElement = document.querySelector("#" + `${id}`);
        idElement.addEventListener("click", () => {
          window.open(`${href}`, "_blank");
        });
      });
    }
  }
}

export { contactContents };
