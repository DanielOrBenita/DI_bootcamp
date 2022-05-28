//1
// let arr = ["peach", "apple", "hello", "armagedon", "Ninja"]
// let newArr = []
// // i want to take each and every element and check if there are string , if yes so upper case them if no so reject them.

// let makeAllCaps = () => {


//   return new Promise((res, rej) => {

//     const checker = arr.every((word) => typeof word === "string")
//     console.log(checker)

//     if (checker) {
//       newArr.push(arr.map(e => e.toLocaleUpperCase()))

//       res(console.log(newArr))
//     } else {
//       rej(console.log(`sorry but not oll of them are string`))
//     }

//   })

// }

// makeAllCaps(newArr)


// const sortWords = (arr) => {
//   return new Promise((res, rej) => {

//     arr.length > 4
//       ? res(console.log(arr.map(e => e.toUpperCase()).sort()))
//       : rej(console.log(`sorry not work`))

//   })

// }

// sortWords(arr)


//2
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
  

}`

let toJs = () => {

  return new Promise((res, rej) => {

    if (morse === "") {
      rej(`sorry, no word here`)
    } else {
      res(JSON.parse(morse))
    }


  })

}


let toMorse = (morseJS) => new Promise((res, rej) => {

  let userAnswer = prompt(`please insert a sentence and well morse it`).split("")
  console.log(userAnswer)

  let arrForTheResolve = []
  userAnswer.every(char => {
    if (!!morseJS[char.toLowerCase()]) {
      arrForTheResolve.push(morseJS[char.toLowerCase()])
      return true
    } else {
      return false
    }
  })
    ? res(arrForTheResolve)
    : rej(`please use only acceptebale chars`)

})

let joinWords = (morseTranslation) => {
  let body = document.querySelector(`body`)

  morseTranslation.forEach(e => {
    let p = document.createElement(`p`)
    p.textContent = e
    body.append(p)
  })

}

toJs()
  .then(toMorse)
  .then(joinWords)