// fetch(`https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//     .then(response => JSON.parse(response))
//     .then(data => console.log(data))

let body = document.querySelector(`body`)
let json = [];
let fetchData = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => (response.json()))
        .then(data => {
            console.log(data)
            let p = document.createElement(`p`)
            p.textContent = data.title
            body.append(p)
        })

}
fetchData()


