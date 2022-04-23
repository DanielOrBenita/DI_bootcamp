let btn= document.getElementById(`btn`)
let nav= document.getElementById(`nav`)
let ul= document.getElementById(`ul`)

btn.addEventListener(`click`, ()=>{
    nav.classList.toggle(`active`)
    btn.classList.toggle(`active`)
})