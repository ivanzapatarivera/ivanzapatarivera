function resume() {
    const resume = document.querySelector("#resume");
    resume.addEventListener("click", () => {
        window.open("./assets/pdf/IvanZapataRiveraResume-Dec2020.pdf", "_blank")
    });
}

export { resume }