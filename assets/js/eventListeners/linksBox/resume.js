function resume() {
    const resume = document.querySelector("#resume");
    resume.addEventListener("click", () => {
        window.open("../../../pdf/IvanZapataRiveraResume-Dec2020.pdf", "_blank")
    });
}

export { resume }