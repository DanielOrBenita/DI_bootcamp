let button = document.querySelector('button');
console.log(button)
button.addEventListener("click", (e)=>{
    e.preventDefault();
    let item = document.getElementById('item').value;
    let numberOfItems = document.getElementById('numberOfItems').value;
    fetch('http://localhost:5000/sendData', {
        
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({item, numberOfItems})
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    .catch(err=>{
        console.log(err)
    })
})
