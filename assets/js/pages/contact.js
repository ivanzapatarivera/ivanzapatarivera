function contactContents() {
    const contactPage = document.querySelector("#contactPage");
    if(contactPage) {
        const contact = `<div class="container">
                            <div class="row contactContent d-flex align-items-center">
                                <div class="col-12 pl-4 pr-3">
                                    <h3 class="pt-5">Contact Me</h3>
                                    <div class="row mt-5">
                                        <div class="col-12 col-md-3"><b>Phone #</b></div>
                                        <div class="col-8 mb-3">+1 (551) 666-8559</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-3"><b>E-mail</b></div>
                                        <div class="col-8 mb-3"><a href="mailto:ivan.zapata.rivera@gmail.com" target="_0">ivan.zapata.rivera@gmail.com</a></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-3"><b>LinkedIn</b></div>
                                        <div class="col-8 mb-3"><a href="https://linkedin.com/in/ivanzapatarivera" target="_0">linkedin.com/in/ivanzapatarivera</a></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-3"><b>GitHub</b></div>
                                        <div class="col-8 mb-3"><a href="https://github.com/ivanzapatarivera" target="_0">github.com/ivanzapatarivera</a></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-3"><b>Twitter</b></div>
                                        <div class="col-8 mb-3"><a href="https://twitter.com/ivanzapatariver" target="_0">twitter.com/ivanzapatariver</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
        contactPage.insertAdjacentHTML("afterbegin", contact)
    }
}

export { contactContents }