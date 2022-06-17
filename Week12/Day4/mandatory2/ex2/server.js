const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/:id', (req,res)=>{
    console.log(req.params)
    res.send('Hello')
})

// app.use(express.static(__dirname + '/public'))

app.listen(3006)

