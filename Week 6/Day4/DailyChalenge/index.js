let client = "betty"; // was jhon at first.

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$", // was 20$ at first
    other : {
        payed : false, // was true at first
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1 ex1 

let displayGroceries= ()=> groceries.fruits.forEach((e) => console.log(e))

displayGroceries()

//ex2

let cloneGroceries= ()=>{
    let user=client
    console.log(user) // it will change to `betty` because it pass by reference and not by value.
    
    let shopping = groceries
    console.log(shopping) // the total price value will change because it pass by reference.

    // we will no see any effect because we copied only the first obj but thers another obj inside the obj to reference to it we need to do something with JSON
    // which we did not study yet.
    //actual it was effected. i was cinufsed. i tought to change the deeper {} we need to use json but in fact it is the opposite.
}
cloneGroceries()