//1
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));

async function answer() {

    let resp = await fetch("https://www.swapi.tech/api/starships/9/")
    let data = await resp.json()

    console.log(data)


}

answer()

//2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // the output will be : `calling` => resolveafter2seconds function => then the result the resolveafter2seconds will be complete first because 
// we have await into the second function

//3
