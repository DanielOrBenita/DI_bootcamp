let compareToTen = (num) => {

    return new Promise(function (resolve, reject) {

        (num < 10) ? resolve(`${num} is smaller than 10`) : reject(`${num} is bigger than 10`)

    })

}

compareToTen(11)
    .then(result => console.log(result))
    .catch(err => console.log(err))

compareToTen(2)
    .then(result => console.log(result))
    .catch(err => console.log(err))

//2

let ifTrue = true

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        (ifTrue === true) ? resolve(`sucsses`) : reject(`reject`)

    }, 4000)


})

promise.then(result => console.log(result))
    .catch(err => console.log(err))

// shorter vesrion


const promise2 = Promise.resolve('success')
promise2.then(result => {
    setTimeout(() => console.log(result), 4000)
})

//3

const answer = Promise.resolve(3)
answer.then(result => console.log(result))