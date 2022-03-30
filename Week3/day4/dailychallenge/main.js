let sentence=`i am a not bad developer`
console.log(sentence.indexOf("not")) // equal to 7 so i type 8 in the nest variable
let wordNot = 8
console.log(wordNot) // checking
console.log(sentence.indexOf("bad")) // equal to 11 so i type 12 in the nest variable
let wordBad = 12
console.log(wordBad) // checking

if(wordBad>wordNot){
    console.log(sentence.replace(  `not bad` , `good`))
}

