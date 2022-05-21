// let data = new XMLHttpRequest()
// data.open(`GET`, `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
// data.send()
// data.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText)
//     console.log(data.data)

// })

2
let data = new XMLHttpRequest()
data.open(`GET`, `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

data.send()

data.onload = function () {

    data = JSON.parse(this.responseText)
    console.log(data.data)
};
// data.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText)
//     console.log(data.data)

// })

