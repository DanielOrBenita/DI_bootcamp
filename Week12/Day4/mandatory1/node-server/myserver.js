const http = require('http')
const server = http.createServer((req, res)=>{
    console.log(`im listening`)
    res.setHeader('content-type', 'text/html')
    res.end('<h1>helloooo</h1> <h2> whats apppppp </h2> <h3> everyoneee</h3>')
})

server.listen(3000);

//2
