const axios = require('axios')

const getData = async ()=>{
    try {
        const res = await  axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
       return res.data

    } catch (error) {
        // throw new error
        console.log(e)
    }

}

getData()