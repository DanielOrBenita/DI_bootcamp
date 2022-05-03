//view
let quotes = [
    {
        id: "1",
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        likes : ""
    },
    {
        id: "2",
        author: "Walt Disney",
        quote: "he way to get started is to quit talking and begin doing.",
        likes : ""
    },
    {
        id: "3",
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        like: ""
    },
    {
        id: "4",
        author: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        likes : ""
    },
    {
        id: "5",
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        like: ""
    },
    {
        id: "6",
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans.",
        likes : ""
    },
    {
        id: "7",
        author: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        likes : ""
    },
    {
        id: "8",
        author: "Mother Teresa",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        likes : ""
    },
    {
        id: "9",
        author: "Franklin D. Roosevelt",
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        likes : ""
    },
    {
        id: "10",
        author: "Anne Frank",
        quote: "Whoever is happy will make others happy too.",
        likes : ""
    },


]
console.log(quotes)
let currentQuoteId;


let generateQuote= ()=>{
    
    let randomNumber=Math.floor(Math.random() * (quotes.length-1) )
    quote.textContent = quotes[randomNumber].quote + (` `) + quotes[randomNumber].author
    body.append(quote)

}



let pushQuote = (e)=>{
    e.preventDefault();
        let userQuote = {
            id: quotes.length,
            author: authorInput.value,
            quote: quoteInput.value,
            likes : "",
        }
    authorInput.value =""
    quoteInput.value =""
    quotes.push(userQuote)
    console.log(quotes)
}

let numSpacefunc = (e)=>{
    e.preventDefault();
    let currentQuote =quotes[currentQuoteId].quote
    console.log(currentQuote)
}



 // documents
const body = document.querySelector(`body`)
let section = document.querySelector(`#section`)
let quote= document.createElement(`p`)
let generator = document.querySelector(`#quotebtn`)
let quotecreator = document.querySelector(`#quotecreator`)
quotecreator.addEventListener("click", pushQuote)
let quoteInput = document.querySelector(`#quoteinput`)
let authorInput = document.querySelector(`#authorinput`)
generator.addEventListener("click", generateQuote)
let numSpace= document.querySelector(`#NumSpace`)
console.log(numSpace)
numSpace.addEventListener("click", numSpacefunc)
let numNoSpace= document.querySelector(`#NumNoSpace`)
let numWord= document.querySelector(`#NumWord`)

