const dfMessengerBubble = document.querySelector("df-messenger-chat-bubble");
var welcome = false;
var phrase = {
    welcome: "Hi",
    prompt: "Generate a question offering help or assistance.",
    help: false
}
// dfMessengerBubble.addEventListener("df-chat-open-changed", async (event) => {
    // const dfMessenger = document.querySelector('df-messenger');
    // if (event.detail.isOpen) {
    //     console.log("welcome", welcome)
    //     async function startNewSession() {
    //         await dfMessenger.startNewSession({ retainHistory: true });
    //     }
    //     async function sendQuery() {
    //         if (welcome) {
    //             if (!phrase.help) {
    //                 phrase.help = true;
    //                 await dfMessenger.sendQuery(phrase.prompt);
    //             }
    //         } else {
    //             await dfMessenger.sendQuery(phrase.welcome);
    //             welcome = true;
    //         }
    //     }
    //     startNewSession();
    //     sendQuery();
    // }
// });