
//ex1
let favFood="fish";
let favMeal="launch";

console.log("i eat" , favFood , "at every" + favMeal); // answer

//ex2
//part 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]; // aray that contains sentece (string)

let myWatchedSeriesLength = 3; // number

let myWatchedSeriesSentence = "black mirror, money heist, the big bang theory" ; // variable that describes series i watched

console.log("i watched"+ " " + myWatchedSeriesLength +" " + "series:"+ " " +  myWatchedSeriesSentence); //couldnt use $ sign dont understand why

// part 2

//1
 myWatchedSeries[2] = "friends";

 console.log(myWatchedSeries); // answer

 //2
 myWatchedSeries.push("lucifer");

 console.log(myWatchedSeries); // answer , now the array contains 4 strings.

 //3

 myWatchedSeries.splice(0,0, "naruto");
 /* 0= the position of the elements i want to add
    0= the position of the elements i want to remove
    "naruto" = my favorite show*/
    
console.log(myWatchedSeries);

//4
myWatchedSeries.splice(1,1);
/* 1= the position of the elements i want to slicen in
   1= the number of the elements i want to remove*/
console.log(myWatchedSeries);

//5
console.log(myWatchedSeries[1]); // just checking that 1= money heist

let third_letter = myWatchedSeries[1].charAt(2); 
/* first of all i need to give value to variable in order to console.log it. /
--in that case i want to know the third letter/
of the word money heist which is in array/--
so i gave a value (third_letter) to what i am looking for/
and then exctracted the information i need with charAt method./
i wanted to know the third letter, so i wrote 2 because the counting starts from zero./

*/

console.log(third_letter);

//6
console.log(myWatchedSeries);

//ex3

let celsius = 27; // number of sunnyday temp

console.log(celsius/5) //5.4
console.log(5.4*9); // 48.6
console.log(48.6+32); // 80.6

let fahrenheit = 80.6;

console .log(`${celsius}°C is ${fahrenheit}°F`); // is that correct?

//ex4

let c;
let a = 34;
let b = 21;

console.log(a+b); //first expression
// Prediction: i think C will be 55 because it equal to a(34) + b (21)
// Actual: 55 (yay!)


a = 2;

console.log(a+b); //second expression
// Prediction:i think C will be 23 because it equal to a(2) + b (21)
// Actual:23 (yay again)

console.log(3 + 4 + '5'); 
/* here we have 2 numbers (3,7) and 1 string ('5' - it is a string because it in '')
that outcome will be 7'5' */

//ex5


console.log (typeof(15));
// Prediction: number
// Actual: number

console.log(typeof(5.5));
// Prediction:number
// Actual: number

console.log(typeof(NaN));
// Prediction: string
// Actual: number // how not a number can be a number?

console.log(typeof("hello"));
// Prediction: string
// Actual:string

console.log(typeof("true")); // what comes in "" is always a string//
// Prediction: string
// Actual:string

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual: humburgers

console.log("hamburgers" - "s")
// Prediction:hamburge // i understand that both of them are string and - its a mat function
// Actual: Nan

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3") 
// Prediction: Nan
// Actual: -2

console.log("johnny" + 5)
// Prediction: jonny5
// Actual:jonny5

console.log("johnny" - 5)
// Prediction:Nan
// Actual:Nan

console.log(99 * "hello")
// Prediction:Nan
// Actual:Nan

console.log(1 != 1)
// Prediction: false
// Actual: false

console.log(1 == "1")
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction: false
// Actual: false


//ex6

console.log(5 + "34")
// Prediction: 534
// Actual: 534

console.log(5 - "4")
// Prediction: Nan // confused again
// Actual: 1

console.log(10 % 5)
// Prediction: 0
// Actual: 0

console.log(5 % 10) // ???
// Prediction: -1
// Actual: 5

console.log("Java" + "Script")
// Prediction: javascript
// Actual: javascript

console.log(" " + " ") // i understand just got confused but got it
// Prediction: (space) + (space)
// Actual: only space

console.log(" " + 0)
// Prediction: 0
// Actual: 0

console.log(true + true) 
// Prediction: true
// Actual: 2

console.log(true + false) 
// Prediction: false
// Actual: 1

console.log(false + true)
// Prediction: 1
// Actual: 1

console.log(false - true)
// Prediction: -1
// Actual: -1

console.log(!true)
// Prediction: i dont know
// Actual: false

console.log(3 - 4)
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill")
// Prediction: nan
// Actual: nan

