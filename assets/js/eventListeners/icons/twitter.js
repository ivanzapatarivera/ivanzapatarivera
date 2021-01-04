function twitter() {
    const twitter = document.querySelector("#twitter")
    twitter.addEventListener("click", () => {
        window.open("https://twitter.com/ivanzapatariver", "_blank")
    })
}

export { twitter };
