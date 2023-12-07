var DOCS_URL = "https://docs.google.com/gview?url="

var resumeArr = [
  {
    selector: "#resumePDF",
    href: DOCS_URL + "https://storage.googleapis.com/ivanzapatarivera/resume_pdf.pdf"
  },
  {
    selector: "#resumeDOC",
    href: DOCS_URL + "https://storage.googleapis.com/ivanzapatarivera/resume_doc.docx"
  },
  {
    selector: "#resumeGoogleDocs",
    href: DOCS_URL + "https://docs.google.com/document/d/15GXR3cab9vMoIrFFDqJdDomZKdDz8FgMF8ber6_AWYA"
  }
]

function resume() {
  for (var resume in resumeArr) {
    let object = resumeArr[resume];
    const selector = document.querySelector(object.selector);
    selector.addEventListener("click", () => {
      window.open(object.href, "_blank")
    });
  }
}

export { resume };
