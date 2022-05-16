// 1 
// i created form into html file

//2
// i used Get method

//3
// The information will be displayed into url line


// ----------------------------------- just doing exc on DOM -------------

// let body = document.querySelector(`body`)
// console.log(body)

// let formCreator = () => {
//     let form = document.createElement(`form`)
//     body.append(form)
//     form.method = "get";
//     let label = document.createElement(`label`)
//     form.append(label)
//     label.setAttribute("for", "fname")
//     label.textContent = "First name:"
//     let input = document.createElement(`input`)
//     form.append(input)
//     input.setAttribute("type", "text")
//     input.setAttribute("id", "fname")
//     input.setAttribute("name", "name")
//     input.setAttribute("value", "John")


//     console.log(form)

// }


// formCreator()


// EX2
//   I did the same as one just used post method , the information will be display in the body ( network in console. and it also did 405 error)

//EX3
let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

let marioJson = JSON.stringify(marioGame)
console.log(marioJson)
// IT BECAME A STRING, all the quote type changed to double quote


//2 

marioJson = JSON.stringify(marioGame, null, 2)
console.log(marioJson)