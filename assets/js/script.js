navbar();
function navbar(frame, navbar, content) {
  root = document.querySelector("#root");
  if (root) {

    // Creating navbar
    navbar = `<nav class="navbar" id="navbar">
                <div class="container">
                    <div class="navbar-brand mx-auto">Iv&aacute;n J. Zapata-Rivera</div>
                    
                </div>
            </nav>`;

    root.insertAdjacentHTML("afterbegin", navbar);

    // Creating main content section
    navbar = document.querySelector("#navbar");
    content =   `<div class="row">
                    <div class="col-12 content" id="content">
                    </div>
                </div>`;
    navbar.insertAdjacentHTML("afterend", content);

    // Creating introduction box grid
    content = document.querySelector("#content");
    introBoxGrid =  `<div class="row">
                    <div class="col-12 col-md-6 leftside" id="leftside"></div>
                    <div class="col-12 col-md-6 rightside" id="rightside">
                        <div class="row topRow">
                        </div>
                        <div class="row middleRow" id="middleRow">
                            <div class="col-1 leftColumnIntroBox"></div>
                            <div class="col-10" id="middleColumnIntroBox"></div>
                            <div class="col-1 rightColumnIntroBox"></div>
                        </div>
                        <div class="row bottomRow">
                        </div>
                    </div>
                </div>`
    content.insertAdjacentHTML("afterbegin", introBoxGrid);

    middleColumn = document.querySelector("#middleColumnIntroBox");
    introBox =  `<div class="row topIntroBoxRow">
                    <div class="col-12 text-center pt-2 nameColumn">Iv&aacuten J. Zapata-Rivera</div>
                </div>
                <div class="row middleIntroBoxRow">
                    <div class="col-10 mx-auto"> 
                        
                    </div>
                </div>
                <div class="row bottomIntroBoxRow">
                    <div class="col-12 text-center">Full Stack-Flex Developer</div>
                </div>`
    middleColumn.insertAdjacentHTML("afterbegin", introBox)
  }
}
