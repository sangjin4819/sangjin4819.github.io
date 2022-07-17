const quotes = [
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "We think too much and we feel too little.",
        author: "Charlie Chaplin",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Some infinities are bigger than other infinities.",
        author: "John Green",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    }
];

const images = ["img1.jpg", "img2.webp", "img3.jpg", "img4.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;  

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
document.body.appendChild(bgImage);
