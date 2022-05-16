
let display = () => {
    let body = document.querySelector(`body`)
    let info = window.location.search.substring(1).split(`&`).join(" ").replaceAll("=", ":")
    let p = document.createElement(`p`)
    p.textContent = info
    p.style.fontSize = "50px"
    body.append(p)


    console.log(info)
}
display()