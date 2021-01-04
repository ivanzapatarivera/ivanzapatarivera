const nameAndTitle = {
    myname: "Iv&aacute;n Zapata-Rivera",
    title: "Full Stack-Flex Developer"
}

const myname = nameAndTitle.myname;
const title = nameAndTitle.title;

construction();
function construction(content, introBoxColumn, introBox) {
  root = document.querySelector("#root");
  if (root) {
    content =   `<div class="row">
                    <div class="col-12 content" id="content">
                    </div>
                </div>`;
    root.insertAdjacentHTML("afterend", content);

    // Creating introduction box grid
    content = document.querySelector("#content");
    introBoxGrid =  `<div class="row">
                        <div class="col-12 col-md-6 leftside" id="leftside"></div>
                        <div class="col-12 col-md-6 rightside" id="rightside">
                            <div class="row topRow">
                            </div>
                            <div class="row middleRow" id="middleRow">                            
                                <div class="col-11 col-xl-9 mx-auto" id="introBoxColumn"></div>
                            </div>
                            <div class="row bottomRow">
                            </div>
                        </div>
                    </div>`
    content.insertAdjacentHTML("afterbegin", introBoxGrid);

    introBoxColumn = document.querySelector("#introBoxColumn");
    introBox =  `<div class="row topIntroBoxRow">
                    <div class="col-12 text-center pt-2 nameColumn" id="nameColumn">${myname}</div>
                </div>
                <div class="row middleIntroBoxRow">
                    <div class="col-10 mx-auto"></div>
                </div>
                <div class="row bottomIntroBoxRow">
                    <div class="col-12 text-center" id="titleColumn">${title}</div>
                </div>`
    introBoxColumn.insertAdjacentHTML("afterbegin", introBox)
  }
}
