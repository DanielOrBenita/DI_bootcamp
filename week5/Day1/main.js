let clicked = function(param){
    console.log(param)
    console.log(`you clicked here`)
}

let div= document.getElementsByClassName("box1")[0]

div.addEventListener("click", clicked)