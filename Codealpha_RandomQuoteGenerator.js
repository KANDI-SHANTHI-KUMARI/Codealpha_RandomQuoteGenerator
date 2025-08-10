// Array of quotes
const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
];

// Get elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

// Function to show a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = "— " + randomQuote.author;
}

// Show a quote when page loads
window.onload = showRandomQuote;

// Show a new quote on button click
newQuoteBtn.addEventListener("click", showRandomQuote);
