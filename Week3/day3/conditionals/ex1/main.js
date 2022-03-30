/* just for me to understand
let answer=(confirm(`are you over 18?`))

if(answer==true){
    alert(`you are welcome`);
} else{
    alert(`you are now allowed`)
}

*/

let answer=(prompt(`how old are you?`))
let age= (parseInt(answer)) // in order to make the prompt's answer to number from string.

if(age<18){
    alert('sorry, you are too young to drive this car. Powering off')
} else if(age===18){
    alert('Congratulations on your first year of driving. Enjoy the ride')
 } else{ alert('Powering On. Enjoy the ride!')

}   


