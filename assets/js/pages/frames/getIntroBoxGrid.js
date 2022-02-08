let getIntroBoxGrid = () => {
    let content = document.querySelector("#content");
    const introBoxGrid = `<div class="row">
                        <div class="col-6 col-md-6 leftside" id="leftside"></div>
                        <div class="col-6 col-md-6 rightside" id="rightside">
                            <div class="row slide-in-right" id="middleRow">                            
                                <div class="col-11 col-xl-9 mx-auto introBoxColumn" id="introBoxColumn"></div>
                            </div>
                            <div class="row slide-in-bottom" id="bottomRow">
                                <div class="col-11 col-xl-9 mx-auto iconsBoxColum" id="iconsBoxColum"></div>
                            </div>
                        </div>
                    </div>`;
    content.insertAdjacentHTML("afterbegin", introBoxGrid);
    return
}

export { getIntroBoxGrid }