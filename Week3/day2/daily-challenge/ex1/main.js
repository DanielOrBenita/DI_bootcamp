let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//1
console.log(fruits.indexOf("Banana"))
fruits.splice(0,1);

//2
console.log(fruits)
fruits[0] = "Apples"
fruits[1] = "Banana"
fruits[3] = "Orange"
fruits[2] = "Blueberries"
console.log(fruits)

//3
fruits.push("Kiwi")
console.log(fruits)

//4
fruits.shift(0)
console.log(fruits)


