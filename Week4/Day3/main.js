
let doYouWantToPlay = function (){
    let userAnswer=confirm(`do you want tp play?`)
    let userprompt=""
    if(userAnswer){
        userprompt= prompt(`please pick a number`)
    } else{

        alert(`bye bye`)
    }
    
    return userprompt
}

let userAnswer=(doYouWantToPlay())

//step 2 : check the value
let checkTheValue= function(value) {
      let computerNumber="" 
    if(value>10 || value<0){
        alert(`not a good number`)
    }

    else if(isNaN(value)){
        alert(`not a  number`)
    }
    else{
        // console.log(userAnswer)
        computerNumber= Math.round(Math.random() * (10-0) +0)
    //    console.log(computerNumber)
    }

return computerNumber
}
console.log(userAnswer)
let computernum=(checkTheValue(userAnswer))
console.log(computernum)

let test= function (userNumber,computerNumber){
    
    if (userNumber==computerNumber){
        console.log(`winner`)
        alert(`you won! you guess the right num`)
        return `winner`
        
    }
    else if (userNumber>computerNumber){
        console.log(`bigger`)
        alert(`your number is bigger`)
        
        return `bigger`
    }
    else{
        console.log(`smaller`)
        alert(`your number is smaller`)
        
        return `smaller`
    }
    
}

test(userAnswer,computernum)