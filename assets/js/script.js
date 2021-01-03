navbar()
// function createFrame(root, frame) {    
//     root = document.querySelector('#root');

    // Frame DIV
    // frame = `<div class="row">
    //             <div class="col-12" id="frame"></div>
    //         </div>`;
    // root.insertAdjacentHTML('afterbegin', frame);
    // navbar();
    // content();
// }

function navbar(frame, navbar, content) {
    root = document.querySelector('#root');
    if (root) {
        navbar =    `<nav class="navbar" id="navbar">
                        <div class="container">
                            <div class="navbar-brand">Iv&aacute;n J. Zapata-Rivera</div>
                            <div class="mr-0">Home</div>
                        </div>
                    </nav>`

        root.insertAdjacentHTML('afterbegin', navbar)
        navbar = document.querySelector('#navbar')
        content =   `<div class="row">
                        <div class="container col-12 content">This is content
                        </div>
                    </div>`;
        navbar.insertAdjacentHTML('afterend', content)
    }
}