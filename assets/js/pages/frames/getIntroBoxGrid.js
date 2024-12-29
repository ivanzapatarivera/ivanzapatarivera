let getIntroBoxGrid = () => {
    let content = document.querySelector("#content");
    const introBoxGrid = `<div class="row">
                        <div class="col-6 col-md-6 leftside" id="leftside">
                        <!-- Dialogflow Agent Starts Here -->
    
    <df-messenger project-id="dialogflow-gcf" agent-id="fa1e9d92-42eb-4f4e-85a5-c20119a0c605" language-code="en"
        max-query-length="-1">
        <df-messenger-chat-bubble chat-title="Navia" chat-subtitle="Neural Assistant and Virtual Intelligent Agent">
        </df-messenger-chat-bubble>
    </df-messenger>
    <style>
        df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-size: .9rem;
            --df-messenger-titlebar-background: #29ccf4;
            --df-messenger-titlebar-font-color: #303030;
            --df-messenger-titlebar-title-font-size: 1.75rem;
            --df-messenger-titlebar-title-font-family: "Big Shoulders Stencil Text", Sans-serif;
            --df-messenger-titlebar-subtitle-font-size: 1rem;
            --df-messenger-titlebar-subtitle-font-color: #303030;
            --df-messenger-titlebar-subtitle-font-family: "Big Shoulders Stencil Text", Sans-serif;
            --df-messenger-chat-background: #021b21;
            --df-messenger-chat-bubble-background: #29ccf4;
            --df-messenger-message-bot-background: #1a6f85;
            --df-messenger-message-bot-font-color: rgb(216, 216, 216);
            --df-messenger-message-user-background: #4574ae;
            --df-messenger-message-user-font-color: rgb(216, 216, 216);
            --df-messenger-input-background: #29ccf4;
            --df-messenger-send-icon-color: #0f4a58;
            --df-messenger-chat-scroll-button-background: #29ccf4;
            --df-messenger-chat-scroll-button-font-color: #303030;
            bottom: 16px;
            right: 16px;
        }
    </style>
    <!-- Dialogflow Agent Ends Here -->
                        </div>
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