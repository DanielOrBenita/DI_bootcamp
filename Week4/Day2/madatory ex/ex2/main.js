function calculateTip() {
   
    let answer = Number(prompt((`how much is the bill?`)))
    
    if(answer < 50){
        console.log(`the bill is ${answer}$ so with 20% would be ${answer * 1.2}`)
    } else if (answer >50 && answer <200){
        console.log(`the bill is ${answer}$ so with 15% would be ${answer * 1.15}`)
    } else {
        console.log(`the bill is ${answer}$ so with 10% would be ${answer * 1.1}`)
    }
     
}

calculateTip()

//console.log(`the bill is ${calculateTip()} so with 20% would be ${calculateTip() * 1.2}`)

/*   if()

else if ()

else () */
 
