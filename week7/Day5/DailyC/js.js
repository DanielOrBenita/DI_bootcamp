// // Create a function that:

// // takes in two strings as two parameters
// // and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// // anagram is word that contains letter as other word. but not at the same order. 

isThatAnAnagram = (word1, word2) => {

    let str1 = word1.split('').map((word) => word.toLowerCase()).sort().join('').replaceAll(` `, ``)
    let str2 = word2.split('').map((word) => word.toLowerCase()).sort().join('').replaceAll(` `, ``)
    return str1 === str2

}



console.log(isThatAnAnagram("Astronomer", "Moon starer"))
console.log(isThatAnAnagram("School master", "The classroom"))
console.log(isThatAnAnagram("The Morse Code", "Here come dots"))

