const nameAndTitle = {
  myname: "Iv&aacute;n Zapata-Rivera",
  title: "Full Stack-Flex Developer",
  intro: `<p>Hello and thank you for visiting!</p>
            <p>My name is Iv&aacute;n and I'm a web developer based in the State of New Jersey.</p>
            <p>I design full stack-flex web applications using MERN technologies with a mobile first approach.</p>
            `,
};

const myname = nameAndTitle.myname;
const title = nameAndTitle.title;
const intro = nameAndTitle.intro;

// Constructing web framework
function construction(root, content, linksBoxColumn, introBoxColumn, introBox, iconsBoxColum) {

  root = document.querySelector("#root");
  if (root) {
    content = `<div class="row">
                    <div class="col-12 content" id="content">
                    </div>
                </div>`;
    root.insertAdjacentHTML("afterbegin", content);

    // Creating introduction box grid
    content = document.querySelector("#content");
    const introBoxGrid = `<div class="row">
                        <div class="col-12 col-md-6 leftside" id="leftside"></div>
                        <div class="col-12 col-md-6 rightside" id="rightside">
                            <div class="row topRow" id="topRow">
                                <div class="col-11 col-xl-9 mx-auto" id="linksBoxColumn"></div>
                            </div>
                            <div class="row middleRow" id="middleRow">                            
                                <div class="col-11 col-xl-9 mx-auto introBoxColumn" id="introBoxColumn"></div>
                            </div>
                            <div class="row bottomRow" id="bottomRow">
                                <div class="col-11 col-xl-9 mx-auto iconsBoxColum" id="iconsBoxColum"></div>
                            </div>
                        </div>
                    </div>`;
    content.insertAdjacentHTML("afterbegin", introBoxGrid);

    // Navigation Bar (Links Box)
    linksBoxColumn = document.querySelector("#linksBoxColumn");
    const linksBox =  `<div class="row linksBox pb-2">
                            <div class="col-3 align-self-end text-right" id="projects">Projects</div>
                            <div class="col-6 align-self-end text-center" id="aboutMe">About Me</div>
                            <div class="col-3 align-self-end ml-0" id="contact">Contact</div>
                        </div>
                        `;
    linksBoxColumn.insertAdjacentHTML("afterbegin", linksBox);

    // Introduction to Portfolio
    introBoxColumn = document.querySelector("#introBoxColumn");
    const introBox = `<div class="row topIntroBoxRow">
                    <div class="col-12 text-center pt-2 nameColumn" id="nameColumn">${myname}</div>
                </div>
                <div class="row middleIntroBoxRow">
                    <div class="col-11">${intro}</div>
                </div>
                <div class="row bottomIntroBoxRow">
                    <div class="col-12 text-center" id="titleColumn">${title}</div>
                </div>`;
    introBoxColumn.insertAdjacentHTML("afterbegin", introBox);

    // Icons to online presence
    iconsBoxColum = document.querySelector("#iconsBoxColum");
    const iconsBox =  `<div class="row p-3">
                    <div class="col-4 text-right" id="linkedin"><i class="fab iconsBox fa-linkedin-in"></i><br></div>
                    <div class="col-4 text-center" id="github"><i class="fab iconsBox fa-github"></i></div>
                    <div class="col-4 text-left" id="twitter"><i class="fab iconsBox fa-twitter"></i><br></i></div>
                </div>
                `;
    iconsBoxColum.insertAdjacentHTML("afterbegin", iconsBox);
  }
}

export { construction };