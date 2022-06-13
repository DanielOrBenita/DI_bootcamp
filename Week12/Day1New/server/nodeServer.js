const http = require ('http');

const server = http.createServer((req,res)=>{
    console.log(`hello world`)
    res.end(`hello from my first server`)
})

server.listen(5000);