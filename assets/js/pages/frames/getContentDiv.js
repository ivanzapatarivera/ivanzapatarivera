function returnHTML() {
  const HTML =  `<div class="row">
                    <div class="col-12 content fade-in-image" id="content">
                    </div>
                </div>`;
  return HTML;
}

function getContentDiv(root) {
  var HTML = returnHTML();
  root.insertAdjacentHTML("afterbegin", HTML);
  return;
};

export { getContentDiv };
