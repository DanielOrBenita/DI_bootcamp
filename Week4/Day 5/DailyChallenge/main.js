//Create an array which value is the planets of the solar system.


let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

let body = document.querySelector("body");

planets.forEach((newDiv) => {
    newDiv=document.createElement("div")
    newDiv.classList.add("planet")
    newDiv.classList.add("Bgcolor")
    body.append(newDiv)
});

//console.log(body)

let bgColor= document.getElementsByClassName("Bgcolor")
console.log(bgColor)

//each planet should have a different background color. (Hint: add a new class to each planet).
bgColor[0].style.background = "blue"
bgColor[1].style.background = "red"
bgColor[2].style.background = "green"
bgColor[3].style.background = "pink"
bgColor[4].style.background = "orange"
bgColor[5].style.background = "yellow"
bgColor[6].style.background = "white"
bgColor[7].style.background = "grey"

//Finally append each div to the <section> in the HTML (presented below).


let listPlanet=document.getElementsByClassName("listPlanets")[0]
console.log(listPlanet)
listPlanet.append(planets)



