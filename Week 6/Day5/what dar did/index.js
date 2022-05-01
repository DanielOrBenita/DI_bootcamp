// Mini Project - Random Quote Generator;

// Part 1 : Quote Generator;

// view
const generateBtn = document.querySelector('.generate-quote');
const addQuoteForm = document.forms.addQuote;
const inputQuote = document.getElementById('quote');
const inputAuthor = document.getElementById('author');
const containerDiv = document.querySelector('.container');
const authorP = document.querySelector('.author');
const quoteP = document.querySelector('.quote');
const btnSpaceIncluded = document.querySelector('.character-space-included');
const pBtnSpaceIncluded = document.querySelector('.p-character-space-included');
const btnNoSpaceIncluded = document.querySelector('.character-no-space');
const pBtnNoSpaceIncluded = document.querySelector('.p-character-no-space');
const btnCalcNumOfWords = document.querySelector('.number-of-words');
const pBtnCalcNumOfWords = document.querySelector('.p-number-of-words');
const btnLike = document.querySelector('.like');
const likedQuotes = document.querySelector('.liked-quotes');
const btnDisplayAuthorQuotes = document.querySelector('.display-all-specific-quotes');
const authorInput = document.getElementById('name-of-author');
const authorQuotes = document.querySelector('.author-quotes');

// Model
const quotes = [{
        id: 0,
        author: 'Nelson Mandela',
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall"'
    },
    {
        id: 1,
        author: '-Jennifer Aniston-',
        quote: '"I always say, Dont make plans, make options"'
    },
    {
        id: 2,
        author: '-Steve Jobs-',
        quote: '"Innovation distinguishes between a leader and a follower"'
    },
    {
        id: 3,
        author: '-Jim carrey-',
        quote: '"Life opens up opportunities to you, and you either take them or you stay afraid of taking them"'
    },
    {
        id: 4,
        author: '-Rihanna my love-',
        quote: '"it is tougher to be vulnerable than to actually be tough"'
    },
];


const generateQuote = () => {
    randomNum = Math.floor(Math.random() * quotes.length);
    authorP.textContent = quotes[randomNum].author;
    quoteP.textContent = quotes[randomNum].quote;
    btnLike.textContent = '🤍';
};

const displayQuote = (num) => {
    console.log(num)
    authorP.textContent = quotes[num].author;
    quoteP.textContent = quotes[num].quote;
    btnLike.textContent = '🤍';
};

//Adding display new quote immediately
const addNewQuote = (e) => {
    e.preventDefault();
    let newQuoteObj = { id: quotes.length, author: inputAuthor.value, quote: inputQuote.value };
    quotes.push(newQuoteObj);
    displayQuote(newQuoteObj.id);
    inputAuthor.value = '';
    inputQuote.value = '';
};

const calcNumOfCharSpaceIncluded = () => {
    currentQuote = quotes[randomNum].quote;
    pBtnSpaceIncluded.textContent = currentQuote.length;
};
const calcNumOfCharNoSpaceIncluded = () => {
    currentQuote = quotes[randomNum].quote;
    let lengthNoSpace = currentQuote.replaceAll(' ', '').length;
    pBtnNoSpaceIncluded.textContent = lengthNoSpace;
};

const CalcNumOfWords = () => {
    currentQuote = quotes[randomNum].quote;
    console.log(currentQuote);
    pBtnCalcNumOfWords.textContent = currentQuote.split(' ').length;
};

const like = () => {
    currQuote = quotes[randomNum]
    currQuote.like = true;
    console.log(currentQuote);
    addQuoteToLikedList();
};
const addQuoteToLikedList = () => {
    currentQuote = quotes[randomNum];
    if (currentQuote.like) {
        btnLike.textContent = '💗';
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.append(currentQuote.quote);
        ul.append(li);
        likedQuotes.append(ul);
    }
};
const displayAuthorQuotes = (e) => {
    e.preventDefault();
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    quotes.forEach(quote => {
        if (authorInput.value === quote.author) {
            li.append(quote.quote);
        }
    });
    ul.append(li);
    authorQuotes.append(ul);
};
let currentQuote = 0
    //calling the func from the html
const switchQuote = (num) => {
    currentQuote += num
    console.log(currentQuote)
    if (currentQuote < 0) currentQuote = quotes.length - 1
    if (currentQuote > quotes.length - 1) currentQuote = 0
    displayQuote(currentQuote)
};

// Controller
generateBtn.addEventListener('click', generateQuote);
addQuoteForm.addEventListener('submit', addNewQuote);
btnSpaceIncluded.addEventListener('click', calcNumOfCharSpaceIncluded);
btnNoSpaceIncluded.addEventListener('click', calcNumOfCharNoSpaceIncluded);
btnCalcNumOfWords.addEventListener('click', CalcNumOfWords);
btnLike.addEventListener('click', like);
btnDisplayAuthorQuotes.addEventListener('click', displayAuthorQuotes);