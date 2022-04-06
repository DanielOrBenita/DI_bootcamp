  //1 

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//2
//this is an array for items ( fruits)
let shoppingList=[]
shoppingListAll= (Object.keys(stock));
shoppingList.push(shoppingListAll[0], shoppingListAll[1], shoppingListAll[3])

//this is an array for prices
let fruitPrices=[];
let fruitPricesAll=(Object.values(prices))
fruitPrices.push(fruitPricesAll[0], fruitPricesAll[1] , fruitPricesAll[3])
console.log(fruitPrices)

//3 +4 +5
function myBill(){
    let total = fruitPrices.reduce(sum,0)
    
    function sum (a,b){
        return a+b
    }

    console.log(`the total price is ${total} `)

}

myBill() 

//6 bonus



