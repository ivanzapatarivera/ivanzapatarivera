function github() {
  const github = document.querySelector("#github");
  github.addEventListener("click", () => {
    window.open("https://github.com/ivanzapatarivera", "_blank");
  });
}

export { github };
