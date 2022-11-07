let button = document.querySelector(".btn");
let quoteText = document.querySelector(".text");
let author = document.querySelector(".author");

const quotes = [
    {
        quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        person: "William W. Purkey",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        person: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        person: "Frank Zappa",
    },
    {
        quote: `"You only live once, but if you do it right, once is enough."`,
        person: `Mae West`,
    },
    {
        quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        person: "Bernard M. Baruch",
    },
    {
        quote: `"Be yourself; everyone else is already taken."`,
        person: "Oscar Wilde",
    },
    {
        quote: `"A room without books is like a body without a soul."`,
        person: `Marcus Tullius Cicero`,
    },
];

button.addEventListener("click", function (e) {
    // e.preventDefault();

    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random].quote);

    quoteText.innerText = quotes[random].quote;
    author.innerText = quotes[random].person;
});
