//view
let quotes = [
    {
        id: "1",
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    },
    {
        id: "2",
        author: "Walt Disney",
        quote: "he way to get started is to quit talking and begin doing",
    },
    {
        id: "3",
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    },
    {
        id: "4",
        author: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor.",
    },
    {
        id: "5",
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    },
    {
        id: "6",
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans",
    },
    {
        id: "7",
        author: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    },
    {
        id: "8",
        author: "Mother Teresa",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    {
        id: "9",
        author: "Franklin D. Roosevelt",
        quote: "When you reach the end of your rope, tie a knot in it and hang on",
    },
    {
        id: "10",
        author: "Anne Frank",
        quote: "Whoever is happy will make others happy too.",
    },


]

const generator=document.getElementById(`generator`) // i selected the button which uses the quotes
const section=document.getElementById(`section`) // i created the section tag
const h1Quote = document.createElement(`h1`) // it will display the quotes
section.appendChild(h1Quote); //i put h1 in the section
const h2Quote = document.createElement(`h2`) // it will display the quotes
section.appendChild(h2Quote); //i put h2 in the section
const submit = document.getElementById(`submiton`) // this is the submit for add quote
const quoteinput= document.getElementById(`userquote`)
const quoteauthor= document.getElementById(`userauthor`)
const withspace= document.getElementById(`withspace`)
const withoutspace= document.getElementById(`withoutspace`)
const words= document.getElementById(`words`)
const prev= document.getElementById(`prev`)
const next= document.getElementById(`next`)



//controller


