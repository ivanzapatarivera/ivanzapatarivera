function resume() {
    const resume = document.querySelector("#resume");
    resume.addEventListener("click", () => {
        window.open("../../assets/pdf/Ivan J. Zapata Rivera - Resume Update January 2021.pdf", "_blank")
    });
}

export { resume }

