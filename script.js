const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const LinkedIn_Share = document.getElementById("share");
const copyButton = document.getElementById("copy");
const readButton = document.getElementById("speak");

const api_url = "https://api.quotable.io/random";

let quoteInfo = "";
let authorInfo = "";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    // Update the quoteInfo and authorInfo variables
    quoteInfo = data.content;
    authorInfo = data.author;
}


quoteButton.addEventListener("click", function() {
    getquote(api_url)
});

getquote(api_url);


// copy quote button
copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(quoteInfo + " by " + authorInfo)
});

// read quote button
readButton.addEventListener("click", function() {
    const utterance = new SpeechSynthesisUtterance(quoteInfo + " by " + authorInfo);
    window.speechSynthesis.speak(utterance);
});

// linkedIn share
LinkedIn_Share.addEventListener("click", function() {
    window.open("https://www.linkedin.com/share?text=" + quote.innerHTML + "%0A%0A __ by  " + author.innerHTML, "LinkedIn window", "width=600, height=500");
});

