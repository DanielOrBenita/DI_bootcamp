// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys :
// id, author and quote. The id must start at 0, and is incremented for every new quote.
//  So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

const arrayOfQuotes = [
    {
        id: 0,
        author: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        id: 1,
        author: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing'
    },
    {
        id: 2,
        author: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {
        id: 3,
        author: 'James Cameron',
        quote: 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else\'s success. '
    },
    {
        id: 4,
        author: 'John Lennon',
        quote: 'Life is what happens when you\'re busy making other plans.'
    },
    {
        id: 5,
        author: 'Mother Teresa',
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        id: 6,
        author: 'Franklin D. Roosevelt',
        quote: 'When you reach the end of your rope, tie a knot in it and hang on.'
    },
    {
        id: 7,
        author: 'Margaret Mead',
        quote: 'Always remember that you are absolutely unique. Just like everyone else.'
    },
    {
        id: 8,
        author: 'Robert Louis Stevenson',
        quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant. '
    },
    {
        id: 9,
        author: 'Benjamin Franklin',
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    },
    {
        id: 10,
        author: 'Aristotle',
        quote: 'It is during our darkest moments that we must focus to see the light.'
    },
    {
        id: 11,
        author: 'Anne Frank',
        quote: 'Whoever is happy will make others happy too.'
    },
]
// Populate the array with a few quotes that you like.
let quoteh2 = document.querySelector('.quote-place');
let authorAdress = document.querySelector('.author');
let buttons = document.querySelector('.buttons');
let firstButton = document.querySelector('#characters');
let secondButton = document.querySelector('#characters2');
let thirdButton = document.querySelector('#words');
let likeIcon = document.querySelector('i');
let searchButton = document.querySelector('#search-input');
let searchReultsDiv = document.querySelector('.search-results');

let lastQuote = -1;
let result;
let currentValue = 0;
let firstButtonChecked = false;
let secondButtonChecked = false;
let thirdButtonChecked = false;

const showQuote = () => {
    let randomNumber = Math.floor(Math.random() * (arrayOfQuotes.length - 1));
    if(lastQuote == randomNumber) {
        showQuote();
    } else {
        lastQuote = randomNumber;
        let randomQuote = {...arrayOfQuotes[randomNumber]};
        quoteh2.innerHTML = `${randomQuote.quote}`;
        authorAdress.innerHTML = `${randomQuote.author}`;
        buttons.style.visibility = 'visible';
        firstButton.value = 'How many Characters whit blanks';
        secondButton.value = 'How many characters whitout blanks';
        thirdButton.value = 'how many words';
        firstButtonChecked = false;
        secondButtonChecked = false;
        thirdButtonChecked = false;
    }
}

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), 
// and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.






// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button.
// So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

const getLastId = () => {
    let lastId = arrayOfQuotes.at(-1).id;
    return lastId;
}

function addQuote() {
    let quoteValue = document.forms[0].elements.quote.value;
    let authorValue = document.forms[0].elements.author.value;
    let currentId = getLastId() + 1;
    if(quoteValue == '' || authorValue == '') {
        alert('You must fill both camps');
    } else {
        // add the quote to the array.
        arrayOfQuotes.push({
            id: currentId,
            author: authorValue,
            quote: quoteValue
        });
        alert('Quote added');
        // empty the form after submit
        document.forms[0].elements.quote.value = '';
        document.forms[0].elements.author.value = '';
    }
};

function addTextNode(parent, text) {
    parent.innerHTML = '';
    let child = document.createElement('div');
    let node = document.createTextNode(text);
    child.appendChild(node);
    parent.appendChild(child);
}

// In the HTML file, under the displayed quote, create a few more buttons:

// A button that gives the number of character inside each quote (space included)
function characters() {
    if (!firstButtonChecked) {
        let amount = quoteh2.textContent.length;
        firstButton.value += `: ${amount}`;
        firstButtonChecked = true   
    }
}

function characters2() {
    if (!secondButtonChecked) {
        let content = quoteh2.textContent;
        let count = 0;
        for (let char of content) {
            if(char != ' ') {
                count++;                
            };
        }
        secondButtonChecked = true
        secondButton.value += `: ${count}`;

    }
}


function words() {
    if (!thirdButtonChecked) {
        let content = quoteh2.textContent;
        let arrayofWords = content.split(' ');
        let count = arrayofWords.length;
        thirdButtonChecked = true
        thirdButton.value += `: ${count}`;


    }
}
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint :
// add a new key to each object that will represent the number of “likes”.

function setLike() {
    if(likeIcon.style.color == 'green') {
        likeIcon.style.color = 'darkslateblue';
    } else {
        likeIcon.style.color = 'green';
    }
}





// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. 
// When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author.
//  Show only one quote, and add a button “Previous” and a button “Next” 
//  that will display the next or previous quote.


function searchQuote() {
    let searchContent = searchButton.value;
    result = arrayOfQuotes.filter((element) => element.author == searchContent);
    let lenghtResult = result.length;
    if(lenghtResult == 0) {
        addTextNode(searchReultsDiv, `Your result did not have any result. add quotes of ${searchContent}`)
    } else {
        currentValue = 0;
        console.log('on search quote', currentValue);
        addTextNode(searchReultsDiv, result[currentValue].quote);
    }
}


function previousQuote() {
    
    console.log(currentValue);
    console.log(result);
    if(currentValue > 0) {
        currentValue--;
        addTextNode(searchReultsDiv, result[currentValue].quote);
    }
}

function nextQuote() {
    
    console.log(currentValue);
    console.log(result);

    if(currentValue + 1 < result.length) {
        currentValue++;
        addTextNode(searchReultsDiv, result[currentValue].quote);
    }
}