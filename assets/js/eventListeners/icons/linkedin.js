function linkedin() {
  const linkedin = document.querySelector("#linkedin");
  linkedin.addEventListener("click", () => {
    window.open("https://linkedin.com/in/ivanzapatarivera", "_blank");
  });
}

export { linkedin };
