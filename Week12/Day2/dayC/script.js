// const main = require('./main')
// const b = 5
// console.log(main.largeNumber+b)

// part 2

// const http = require ('http');

// const server = http.createServer((req,res)=>{
//     console.log(`im listening`)
//     res.end(`hello from my first server`);
    


// })

// server.listen(3000);

// 4

// const http = require ('http');

// const server = http.createServer((req,res)=>{
//     console.log(`im listening`)
//     res.end(`<h1>Amaizing title </h1>`);
    


// })

// server.listen(3000);

// part 3

const dateAnswer = require('./main')

const http = require('http')

const server = http.createServer((req,res)=>{
    res.end(`<p>The current date is: ${dateAnswer.currentDate()}</p>`);})

server.listen(8080)