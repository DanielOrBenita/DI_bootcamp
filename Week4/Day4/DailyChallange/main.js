
let beginNumber= ""
bottles= "bottle"


//choose a number
function chooseANumber() {
    beginNumber = Number(prompt(`choose a number to begin counting down bottles`))

    while( (isNaN(beginNumber)) || beginNumber<0) {
        beginNumber=prompt('Sorry not a number please answer again: choose a number to begin counting down bottles');
    }
       return beginNumber 
}

chooseANumber()



// countdown loop
function loopCountDown () {

    for(i=beginNumber; i>0; i--) {
        console.log(`${i} bottles of beers on the wall${i} bottles of beer`)
        console.log(`take ${beginNumber + 1 - i} down, pass them around`)
        console.log(`${i-1} bottles of beer`)
        console.log(""); 

    } 
    
    return beginNumber + 1 - i
}

loopCountDown()

// i could not do the grammer part







/*
    for(i=beginNumber; i>0; i--) {
        console.log(`${i} bottles of beers on the wall, ${i} bottles of beer`)
        console.log(`take ${beginNumber + 1 - i} down, pass them around`)
        console.log(`${i-1} bottles of beer`)
        console.log(""); 

    } return 
    */