const btn = document.getElementById(`btn`)
const container = document.getElementById(`container`)

btn.addEventListener(`click`, () =>{

    createnotfunction()
});

function createnotfunction() {
    const notif = document.createElement(`div`)
    notif.classList.add(`toast`)
    notif.innerText= "I am amaizing"
    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)

}