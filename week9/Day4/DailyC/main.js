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



// first i want to collect the information from the api.
//this function return a promise which means i cannot use it in global scope BUT i can use it as a parameter.
// now i now that function return a promise , so i can use promise.all to execute the promises

const getData = async (lat, lon) => {
  lat = latitude1.value
  lon = longitude1.value
  let information = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`)
  let loadedInformation = await information.json()
  return loadedInformation.results
}
// now i want to do the same to collect the require data for the second city
// now i now that function return a promise , so i can use promise.all to execute the promises

const getData2 = async (lat, lon) => {
  lat = latitude2.value
  lon = longitude2.value
  let information = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`)
  let loadedInformation = await information.json()
  return loadedInformation.results
}

// then i want to put the information in dom.
// this function wait for an object. in this object i want only the sunrise key.
const putInDom = ({ sunrise }) => {
  let div = document.createElement(`div`)
  div.innerHTML = `The sunrise will be at ${sunrise}`
  body.append(div)
}


// now i want to declare the sunrise which is the key of the return of the getData and display the information on DOM


const displayInDom = async () => {

  // i put the promsies i created into ARR in order to use promise.all
  let datasArr = await Promise.all([getData(), getData2()])
  datasArr.forEach(putInDom)

}

button.addEventListener("click", displayInDom);

console.log(`I am a ninja`);

