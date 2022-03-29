//ex1

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence)

let answer = sentence.join()

console.log (answer)

//ex2

let sentence1= "sun"
let sentence2= "moon"

//2
console.log(sentence1.substring (2))
console.log(sentence2.substring (2))

console.log(sentence1.substring (2) + sentence2.substring (2) );
console.log(sentence2.substring (2) + sentence1.substring (2) );

//3

let newWord =sentence1.substring (2) +
 sentence2.substring (2) +
 sentence2.substring (2)+
 sentence1.substring (2);


console.log(newWord);

//ex3

let num1= prompt('type the first number please') // result is string
console.log (parseInt(num1));
let answer1 = parseInt(num1)
let num2= prompt('type the second number please')
console.log (parseInt(num2));
let answer2 = parseInt(num2);
console.log(answer1+answer2)

let sum=(answer1+answer2)
console.log(sum)

alert(`the answer is:${sum}`)











