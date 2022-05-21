
//------------------------------------------------------------- element targeting -------------------------------------------------------------//
const searchInput = document.querySelector(`#searchInput`)
const searchBtn = document.querySelector(`#searchBtn`)
const row1 = document.querySelector(`.row1`)
const closerBtn = document.querySelectorAll(`.closer`)
const cardsArr = [] // ill use this arr later in order to data manipulation
const switchTemp = document.querySelector('#switch')


//-------------------------------------------------------------create the card -------------------------------------------------------------//

class cardCreator { // i want to create a class which contain relevant data information
    constructor({ cityName, countryName, icon, temp, description }) {

        this.cityName = cityName
        this.countryName = countryName
        this.icon = icon
        this.temp = temp
        this.description = description
        this.temp = temp
        this.id = cardsArr.length
        cardsArr.push(this) // i want to send the information outside in order to local store manipulate
        this.DOMDisplayer()
        this.store()

    }

    DOMDisplayer() {

        let closingCard = document.createElement('button')
        closingCard.className = 'btn-close mt-2 closer'
        closingCard.type = 'button'


        let card = document.createElement(`div`)
        card.className = "card col-3 me-2 mt-2"
        card.id = this.id + 1


        let image = document.createElement(`img`)
        image.src = this.icon
        image.className = "card-img-top"
        image.alt = "I am a ninja"

        let cardBody = document.createElement(`div`)
        cardBody.className = "card-body"

        let cityName = document.createElement(`h2`)
        cityName.textContent = `${this.cityName} , ${this.countryName}`

        let temp = document.createElement(`h5`)
        temp.textContent = `${this.temp} ℃`
        this.tempChanger = temp

        let description = document.createElement(`p`)
        description.textContent = this.description
        row1.append(card)
        card.append(closingCard, image, cardBody,)
        cardBody.append(cityName, temp, description)
        removeCard(closingCard)
    }

    store() {
        localStorage.setItem('cards', JSON.stringify(cardsArr));

    }

    switchBetweenTemp() {

        switchTemp.checked
            ? this.tempChanger.textContent = (this.temp + 273.15) + ` Kelvin`
            : this.tempChanger.textContent = this.temp + ` ℃`

    }
}

//------------------------------------------------------------- Get the data from api -------------------------------------------------------------//

const DataGetter = function (userCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&units=metric` // i put url into var
    const weatherInfo = new XMLHttpRequest() // i am saving the request into var
    weatherInfo.addEventListener("load", listener) // i want to something to happen when the information is avaliable
    weatherInfo.open(`GET`, url) // i use GET method because i want to retrive info
    weatherInfo.send() // i send info request.

    function listener() { // i want to convert the info from json which the server give me to readable object.
        const data = JSON.parse(this.response); // this is parased info
        console.log(data);
        (data.cod !== 200) ? console.log(`sorry we could not find ${userCity}`) : undefined; // if the location is not available, i want to do something


        const relevantData = { // i want an object wiith the relevant data

            cityName: data.name,
            countryName: data.sys.country,
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: data.main.temp

        }

        sendData = new cardCreator({ ...relevantData }) // i want to send the information into card creator.

    }

}

//------------------------------------------------------------- get the information from search button -------------------------------------------------------------//

searchBtn.addEventListener("click", e => { // i want to send the information from value to data getter. which means userCity = search value.
    e.preventDefault()
    console.log(searchInput.value)
    DataGetter(searchInput.value)
    searchInput.value = "" // i want to delete the search in the end so the placeholder could be shown

})


//------------------------------------------------------------- create a remove card btn -------------------------------------------------------------//


const removeCard = (btnCard) => {
    btnCard.addEventListener("click", (e) => {
        e.target.parentElement.remove();


        // i need to remove it also from the local store

        const storeArr = JSON.parse(localStorage.getItem('cards'))
        storeArr.splice(e.target.id, 1)
        localStorage.setItem('cards', JSON.stringify(storeArr));
        console.log(storeArr)

    });
};

//------------------------------------------------------------- switch temp -------------------------------------------------------------//

switchTemp.addEventListener('click', () => {
    cardsArr.forEach(card => {
        card.switchBetweenTemp()
    });
});

//------------------------------------------------------------- store the information -------------------------------------------------------------//

window.addEventListener(`load`, () => { // when the windows is load i want to something happen
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('cards'));
    dataFromLocalStorage.forEach(card => {
        const cardItems = { ...card }
        new cardCreator(cardItems)
    })

})


