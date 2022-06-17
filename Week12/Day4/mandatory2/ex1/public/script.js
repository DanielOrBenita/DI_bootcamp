// const fetch = require('node-fetch')
const getData= ()=>{
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then(data => console.log(data))

    .catch(e=>{
         ' the problem is ' , console.log(e.message)
})

    
}

getData()