//1
let sentence = ["my", "favorite", "color", "is", "blue"];

let joined = sentence.join(` `)
console.log(joined)

//2
let str1 = "mix"; //pox
let str2 = "pod"; // mid

let str3 = str2.slice(0, 2) + str1.slice(2)
let str4 = str1.slice(0, 2) + str2.slice(2)
console.log(str3)
console.log(str4)
let str5 = str1.concat(str2)
console.log((str5))

//3

// let num1 = Number(prompt(`please pick a number`))
// let num2 = Number(prompt(`please pick another number`))
// console.log(typeof num1)
// let answer = alert(`the answer is ${num1 + num2}`)

//ninja1,2
//1
console.log(5 >= 1)//  true
console.log(0 === 1)// false
console.log(4 <= 1)// false
console.log(1 != 1)// false
console.log("A" > "B")  // it depends on the Binar code of each letter
console.log("B" < "C")  // ""
console.log("a" > "A")  // ""
console.log("b" < "A")  // "" 
console.log(true === false) // false
console.log(true != true) // false

//2

// let UserNumber = prompt("Insert numbers separated by commas");

// let numberArray = UserNumber.split(",").map(Number);
// console.log(typeof numberArray[0]);

// let sum = numberArray.reduce(function (a, b) {
//     return a + b;
// }, 0);i ai

// console.log(sum);

//3

let userSentence = prompt(`insert a sentence containing the word Nemo`) // i want to find the position of nemo word in the sentence
let position = userSentence.split(" ")
let nemoPos = position.indexOf(`Nemo`)
if (nemoPos >= 0) {
    alert(` i font nemo on word number ${nemoPos + 1}`)
} else {
    alert(`could not find nemo`)
}