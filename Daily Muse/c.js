var quotes = [
    "Champions keep playing until they get it right.",
    "Believe you can and you're halfway there.",
    "The moment you doubt whether you can fly, you cease for ever to be able to do it.",
    "To overcome fear is the quickest way to gain your self-confidence.",
    "You sometimes lose by taking risks, but you always lose by holding back.",
    "No one can make you feel inferior without your consent."
];
var quotesButton = document.getElementById('quotesButton');
quotesButton.onclick = displayQuote;

function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}


function displayQuote() {
    var quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = generateQuote();
}


window.onload = displayQuote;
