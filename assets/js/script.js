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
    introBox =  `<div class="row">
                    <div class="col-12 col-md-6 leftside" id="leftside"></div>
                    <div class="col-12 col-md-6 rightside" id="rightside">
                        <div class="row topRow">
                        </div>
                        <div class="row middleRow" id="middleRow">
                            <div class="col-2 leftColumnIntroBox"></div>
                            <div class="col-8" id="middleColumnIntroBox"></div>
                            <div class="col-2 rightColumnIntroBox"></div>
                        </div>
                        <div class="row bottomRow">
                        </div>
                    </div>
                </div>`
    content.insertAdjacentHTML("afterbegin", introBox);

    
  }
}
