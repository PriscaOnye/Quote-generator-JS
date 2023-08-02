const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const LinkedIn_Share = document.getElementById("share");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}


quoteButton.addEventListener("click", function() {
    getquote(api_url)
});


getquote(api_url);

LinkedIn_Share.addEventListener("click", function() {
    window.open("https://www.linkedin.com/share?text=" + quote.innerHTML + "%0A%0A __ by  " + author.innerHTML, "LinkedIn window", "width=600, height=500");
});

