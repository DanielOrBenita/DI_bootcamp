
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