var pdf =
    "../../assets/pdf/Ivan J. Zapata Rivera - Resume Update Aug 2022.pdf",
  doc =
    "../../assets/doc/Ivan J. Zapata Rivera - Resume Update Aug 2022.docx",
  gdoc =
    "https://docs.google.com/document/d/15GXR3cab9vMoIrFFDqJdDomZKdDz8FgMF8ber6_AWYA";

function resume() {
  const resume = document.querySelector("#resume");
  resume.addEventListener("click", () => {
    window.open(pdf, "_blank");
  });
  const resumeDOC = document.querySelector("#resumeDOC");
  resumeDOC.addEventListener("click", () => {
    window.open(doc, "_blank");
  });
  const resumeGoogleDocs = document.querySelector("#resumeGoogleDocs");
  resumeGoogleDocs.addEventListener("click", () => {
    window.open(gdoc, "_blank");
  });
}

export { resume };
