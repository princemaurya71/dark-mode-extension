chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "darkMode") {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    }

    if (message.action === "lightMode") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }

});