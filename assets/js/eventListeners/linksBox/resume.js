function resume() {
    const resume = document.querySelector("#resume");
    resume.addEventListener("click", () => {
        window.open("../../assets/pdf/Ivan J. Zapata Rivera - Resume Update January 2021.pdf", "_blank")
    });
    const resumeDOC = document.querySelector("#resumeDOC");
    resumeDOC.addEventListener("click", () => {
        window.open("../../assets/doc/Ivan J. Zapata Rivera - Resume Update January 2021.docx", "_blank")
    });
}

export { resume }

