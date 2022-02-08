let getContentDiv = (root) => {
  let content = `<div class="row">
                    <div class="col-12 content fade-in-image" id="content">
                    </div>
              </div>`;
  root.insertAdjacentHTML("afterbegin", content);
  return;
};

export { getContentDiv };
