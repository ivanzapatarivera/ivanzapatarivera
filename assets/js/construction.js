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
                    <div class="col-12 content fade-in" id="content">
                    </div>
                </div>`;
    root.insertAdjacentHTML("afterbegin", content);

    // Creating introduction box grid
    content = document.querySelector("#content");
    const introBoxGrid = `<div class="row">
                        <div class="col-12 col-md-6 leftside" id="leftside"></div>
                        <div class="col-12 col-md-6 rightside" id="rightside">
                            <div class="row slide-in-top topRow" id="topRow">
                                <div class="col-11 col-xl-9 mx-auto" id="linksBoxColumn"></div>
                            </div>
                            <div class="row slide-in-right middleRow" id="middleRow">                            
                                <div class="col-11 col-xl-9 mx-auto introBoxColumn" id="introBoxColumn"></div>
                            </div>
                            <div class="row slide-in-bottom bottomRow" id="bottomRow">
                                <div class="col-11 col-xl-9 mx-auto iconsBoxColum" id="iconsBoxColum"></div>
                            </div>
                        </div>
                    </div>`;
    content.insertAdjacentHTML("afterbegin", introBoxGrid);

    
    // Introduction to Portfolio
    introBoxColumn = document.querySelector("#introBoxColumn");
    const introBox = `<div class="row topIntroBoxRow">
    <div class="col-12 text-center pt-2 nameColumn" id="nameColumn">${myname}</div>
    </div>
    <div class="row middleIntroBoxRow pt-3">
    <div class="col-11">${intro}</div>
    </div>
    <div class="row bottomIntroBoxRow">
    <div class="col-12 text-center" id="titleColumn">${title}</div>
    </div>`;
    introBoxColumn.insertAdjacentHTML("afterbegin", introBox);
    
    // Icons to online presence
    iconsBoxColum = document.querySelector("#iconsBoxColum");
    const iconsBox =  `<div class="row p-3" id="boxItems">
    <div class="col-4 text-right boxItems" id="linkedin"><i class="fab iconsBox fa-linkedin-in"></i><br></div>
    <div class="col-4 text-center boxItems" id="github"><i class="fab iconsBox fa-github"></i></div>
    <div class="col-4 text-left boxItems" id="twitter"><i class="fab iconsBox fa-twitter"></i><br></i></div>
    </div>
    `;
    iconsBoxColum.insertAdjacentHTML("afterbegin", iconsBox);
    
    // Navigation Bar (Links Box)
    const boxItems = document.querySelector("#boxItems");
    const linksBox =  `<div class="row linksBox p-4">
                            <div class="col-12 text-center boxItems" id="projects">Projects</div>
                            <div class="col-12 text-center py-3 boxItems" id="aboutMe">About Me</div>
                            <div class="col-12 text-center boxItems" id="contact">Contact</div>
                        </div>
                        `;
    boxItems.insertAdjacentHTML("afterend", linksBox);
  }
}

export { construction };