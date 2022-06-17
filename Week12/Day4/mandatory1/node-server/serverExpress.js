const express = require('express')
const app = express()

app.get('/', (req,res)=>{

    res.send('<h1>Hellooooo</h1>')
})

app.listen(3002)