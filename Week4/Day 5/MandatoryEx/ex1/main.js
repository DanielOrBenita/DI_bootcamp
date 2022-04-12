//ex1
let nav= document.getElementById("navBar") // targeted the nav
console.log(nav) // checked if my target was right
nav.setAttribute("id", "socialNetworkNavigation") // using set atributes methods i took the id and change is value
console.log(nav)// checkd is working


let li = [...document.getElementsByTagName("li")] // targeted the li
console.log(li)// checked it targeted

let ul = [...document.getElementsByTagName("ul")][0]
let newli= document.createElement("li");

let newTextNode = document.createTextNode("Logout")

newli.append("newTextNode")
console.log(newli)

ul.append(newli)
console.log(ul)
//ex3
let firstli = document.querySelector("ul:first-child li:first-child");
let lastLl = document.querySelector("ul:first-child li:last-child");
console.log(firstli.textContent);
console.log(lastli.textContent);
console.log(li)

//ex2
