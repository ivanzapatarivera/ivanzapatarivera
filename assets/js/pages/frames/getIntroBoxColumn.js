let getIntroBoxColumn = (myName, title, intro) => {
  let introBoxColumn = document.querySelector("#introBoxColumn");
  const introBox = `<div class="row topIntroBoxRow">
                        <div class="col-12 text-center pt-2 nameColumn" id="nameColumn">${myName}</div>
                    </div>
                    <div class="row middleIntroBoxRow pt-3">
                        <div class="col-11">${intro}</div>
                    </div>
                    <div class="row bottomIntroBoxRow">
                        <div class="col-12 text-center" id="titleColumn">${title}</div>
                    </div>`;
  introBoxColumn.insertAdjacentHTML("afterbegin", introBox);
  return;
};

export { getIntroBoxColumn };
