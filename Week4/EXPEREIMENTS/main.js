

 /* let userNumbers=(prompt(`please pick 2 numbers seperated by comas`))

console.log(userNumbers)

let numbersArray= userNumbers.split(`,`).map(Number)

let sum= numbersArray.reduce(add,0)
console.log(sum)

function add(a,b){
return a * b
} */

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//Hint: a string is an array of letters
let passWord=""
for(i=0; i<names.length; i++){
     passWord= names.sort()[i][0]
    console.log() 
}


// Exercise 7 : Secret Group

let name4s = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretName = "";
names.forEach((item) => {
  secretName= item[0];
});
console.log(secretName);