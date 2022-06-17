
const http = require('http')
const server = http.createServer((req, res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    console.log(`im listening`)
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(user))
})

server.listen(3001);