// // i need to console.log the data i recieved from the type as json

// let form = document.getElementById(`form1`)
// let input = document.querySelector(`#input`)
// let input2 = document.querySelector(`#inputTwo`)

// // let input2 = document.querySelector(`#input2`)


// console.log(form)

// let jSONconverter = (e) => {
//     e.preventDefault()
//     console.log(input.value)
//     console.log(input2.value)
//     let dataObj = {
//         name: input.value,
//         lastName: input2.value
//     }
//     console.log(dataObj)
//     let displayOnDom = document.createElement(`p`)
//     displayOnDom.style.fontSize = "24px"
//     displayOnDom.textContent = JSON.stringify({ name: input.value, lastName: input2.value })

//     body.append(displayOnDom)



// }

// form.addEventListener("submit", jSONconverter)

let body = document.querySelector(`body`)
const form1 = document.forms[0];

let displayer = (e) => {
    e.preventDefault()
    let obj = { name: input.value, lastname: inputTwo.value }
    let displayOnDom = document.createElement(`p`)
    displayOnDom.style.fontSize = "24px"
    displayOnDom.textContent = JSON.stringify(obj)
    body.append(displayOnDom)
}


form1.addEventListener("submit", displayer)


