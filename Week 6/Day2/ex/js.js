// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console:
// q1() // it will be 3 the if statement runs and the it overwrite the first var

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// q22() // a=0
// q2() // a= 5
// q22() // a= 0

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// q3() // hello   
// q32() // undifined

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4()

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a); // 5

// // ex2 : 
// function winBattle(){
//     return true;
// }

let winBattle = () => true;
let experiencePoints = winBattle()?10 + `winner` :1;
console.log(experiencePoints);

//ex3:
const isString = (param) => typeof param === "string" ? true : false;

console.log(isString('hello')); 

console.log(isString([1, 2, 4, 0]));

//ex4:
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((e,i)=> console.log(`my ${i+1} choise is ${e}`))

colors.some(e => e==="Violet") ? console.log("yeah") : console.log(`No`)


//ex 5:
//Write a JavaScript program that displays the colors in the following order :
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((color, i) => {
    console.log(
      `my ${i + 1}${i < 3 ? ordinal[i + 1] : ordinal[0]} choice color is ${color}`
    );
  });

let bankAmount = 5000;

let amount;
let noVat = amount -(amount*0.17)

let details = ["+200", "-100", "+146", "+167", "-2900"]

let NumArray= details.map(e=> Number(e*1.17))
console.log(NumArray)
