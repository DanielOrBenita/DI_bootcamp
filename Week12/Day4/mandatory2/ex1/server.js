const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.use(express.static(__dirname + '/public'))

app.listen(3005)

// app.get('/', (req,res)=>{

//     console.log(req.body)
//     res.send('hello')

// })

