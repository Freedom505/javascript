const quotes = [
  { quote: "Don't dwell on the past" },
  { quote: "Believe in yourslef" },
  { quote: "Follow your heart" },
  { quote: "Seize the day" },
  { quote: "You only live once" },
  { quote: "Past is just past" },
  { quote: "Love yourself" },
  { quote: "Where there is a will there is a way" },
  { quote: "Don't beat yourself up" },
  { quote: "Life is a journey" },
  { quote: "rest in peace" },
];

const quote = document.querySelector("#quotes span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
