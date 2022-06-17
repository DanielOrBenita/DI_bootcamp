const express = require('express')
const app = express()
app.use("/", express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())


const item = []
app.post('/sendData', (req, res)=>{
    console.log(req.body);
    item.push(req.body)
    res.json(item)

})

app.get('/sendData', (req,res)=>{
    res.send(item)
})

app.listen(5000)