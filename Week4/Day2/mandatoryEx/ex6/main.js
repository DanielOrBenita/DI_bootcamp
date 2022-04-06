//1

//create a function that calculate my vacation cost.

let hotelPay = ""
function hotelTotal() {
    // step1: i want to know how much nights the user would like to stay and the answer must be an Number
    do {

        nightNumber = Number(prompt(`how many night would you like to stay with us?`));

    }

    while (isNaN(nightNumber)); { }

    let hotelPay = (nightNumber * 140);
    console.log(hotelPay);

    return hotelPay;

}

    //hotelcost()

    
    //2 

    
    let userAnswer = ""
   let destenation = function planeRideCost(){

    // step 1: i want to ask the user where he would like to travel.
    

    // step 2: the answer has to b string. if no ask again.
    do{ 
        userAnswer= prompt(`what is your destenation?`)
    }
    while( !isNaN(userAnswer) )

    // step 3: the answer should return a 183$ for london, 220$ for paris , else 300$

    if(userAnswer==="London"){
        userAnswer = 183
    }
    else if (userAnswer==="Paris")
     {
        userAnswer=220
     }
    else{
        userAnswer=300 }

        return userAnswer

}

//planeRideCost()

//3

let Price = ""


 let totalCarRental= function rentalCarCost(){

    // step 1: we need to ask the user about the days of rental car and it has to be >0 and a number
    //trying another way from do and while
    let daysOfRent= prompt(`Hola. for how many days would you like to rent a car?`)
    while( isNaN(daysOfRent) || daysOfRent<=0 ){
        alert(`${daysOfRent} is not a Number`)
        daysOfRent= prompt(`Hola. for how many days would you like to rent a car?`)
        
    }
    

    // step 2: calculate the cost to rent the car. 40$ each day
    Price = (daysOfRent * 40)
    console.log(Price)
    // step 3: if he rent for more than 10 days =-5%
    if(daysOfRent>10){

        console.log(`the price will be ${Price * 0.95}`)

    } else{
        console.log(`the price will be ${Price}`)
    }

    // step 4: The function should return the total price of the car rental.

    return Price

}
// rentalCarCost()

let totalCost=""

let finalPrice= function totalVacationCost(){
    totalCarRental()
    hotelTotal()
    destenation()

    alert(`the hotel cost will be ${hotelPay}, the destenation cost will be ${userAnswer}
    the car rental cost will be ${Price}`)

    return totalCost
}

finalPrice()
