let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."` ,
    person: `Albert Einstein`
}, {
    quote: `"No one can make you feel inferior without your consent."` ,
    person: `Eleanor Roosevelt`
}, {
    quote: `"Not all those who wander are lost."` ,
    person: `J.R.R.Tolkein`
}, {
    quote: `“The best way to predict your future is to create it.”` ,
    person: `Abraham Lincoln`
}, {
    quote: `"Believe you can and you're halfway there."` ,
    person: `Theodore Roosevelt`
}, {
    quote: `"When you have a dream, you've got to grab it and never let go."` ,
    person: `Carol Burnett`
}, {
    quote: `"The only thing we have to fear is fear itself."` ,
    person: `Franklin D Roosevelt`
}, {
    quote: `"In the middle of difficulty lies opportunity."` ,
    person: `Albert Einstein`
}, {
    quote: `"Life is what happens when you’re busy making other plans."` ,
    person: `John Lennon`
}, {
    quote: `"You must be the change you wish to see in the world."` ,
    person: `Mahatma Gandhi`
}, ];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
   
