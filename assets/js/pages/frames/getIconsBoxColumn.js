let getIconsBoxColumn = () => {
  let iconsBoxColum = document.querySelector("#iconsBoxColum");
  const iconsBox = `<div class="row p-3" id="iconsBoxRow">
                        <div class="col-4 text-right boxItems" id="linkedin"><i class="fab iconsBox fa-linkedin-in"></i><br></div>
                        <div class="col-4 text-center boxItems" id="github"><i class="fab iconsBox fa-github"></i></div>
                        <div class="col-4 text-left boxItems" id="twitter"><i class="fab iconsBox fa-twitter"></i><br></i></div>
                    </div>
`;
  iconsBoxColum.insertAdjacentHTML("afterbegin", iconsBox);
  return;
};

export { getIconsBoxColumn };
