// 1
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// });

// console.log(promise1, promise2, promise3)

// let check = Promise.all([promise1, promise2, promise3])
//   .then(values => {
//     console.log(values)
//   })

//   .catch(err => `there was a problem ${err}`)

// console.log(check)



//2

// let sunsetTime = async () => {

//   let fetched = await fetch(` https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
//   let fetched2 = await fetched.json()
//   console.log(fetched2.results.sunrise)
// }

// sunsetTime()


const form = document.querySelector(`form`)
const latitude1 = document.querySelector(`#latitude1`)
const latitude2 = document.querySelector(`#latitude2`)
const longitude1 = document.querySelector(`#longitude1`)
const longitude2 = document.querySelector(`#longitude2`)
const button = document.querySelector(`#btn`)
const body = document.querySelector(`body`)




const getInfo = () => {

  const sunTime1 = async () => {

    let lat = latitude1.value
    let lon = longitude1.value


    if (!(lat == "")) {
      const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
      let data = await res.json()
      return console.log(data.results.sunrise)
    }

  }



  const sunTime2 = async () => {

    let lat = latitude2.value
    let lon = longitude2.value


    if (!(lat == "")) {
      const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
      let data = await res.json()
      return console.log(data.results.sunrise)
    }




  }

  sunTime1()
  sunTime2()

}


getInfo()


button.addEventListener(`click`, getInfo)


