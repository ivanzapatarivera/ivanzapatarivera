function returnHTML() {
  const HTML =  `<div class="row">
                    <div class="col-12 content fade-in-image" id="content">
                    </div>
                    <!-- Dialogflow Agent Starts Here -->
    <link rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
    <link href='https://fonts.googleapis.com/css?family=Big Shoulders Stencil Text' rel='stylesheet'>
    <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
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
                </div>`;
  return HTML;
}

function getContentDiv(root) {
  var HTML = returnHTML();
  root.insertAdjacentHTML("afterbegin", HTML);
  return;
};

export { getContentDiv };
