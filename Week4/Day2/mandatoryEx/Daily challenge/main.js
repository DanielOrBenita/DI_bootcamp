
let userWord = prompt(`Yo, please write some words sepeaated with comamas.`)

let arr= userWord.split (",")

//console.log(userWord) // just checked the words are moved to the array



let sum= function(a,b) {
    return b.length - a.length; 
    // b-a because i want to make sure that the longes word will be
     //always 0 as long as i dont know hot many words there are
}

let longest= arr.sort(sum,[0]);
console.log(longest) 

console.log( `* `.repeat(longest[0].length ))


for (i=0 ;i<arr.length; i++ ){
    console.log(`* ${arr[i]} ${" ".repeat(longest[0].length - arr[i].length)} *`)
}


console.log( `* `.repeat(longest[0].length ))

//longest[0].length  - arr[i].length
