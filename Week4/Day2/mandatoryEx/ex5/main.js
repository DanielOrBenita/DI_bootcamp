function changeEnough(itemPrice, amountOfChange) {
     
    let total =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;

    if( total >=itemPrice){
        console.log(`you can buy it`)
        return true
    } else {
        console.log (`sorry you cant afford it`)
        return false
    }
}

changeEnough(1,[20,0,0,0])
changeEnough(10,[20,0,0,0])