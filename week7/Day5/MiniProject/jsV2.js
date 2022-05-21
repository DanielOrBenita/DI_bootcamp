// // I need to build a web app which represents the robots i have in the array.
//the information should be absorbed from the robots array.


const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?50X50'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?50X50'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?50X50'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?50X50'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?50X50'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?50X50'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?50X50'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?50X50'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?50X50'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?50X50'
    }
];


let robot =
{id: 10,
name: 'Clementina DuBuque',
username: 'Moriah.Stanton',
email: 'Rey.Padberg@karina.biz',
image: 'https://robohash.org/10?50X50'
}

const cardRowContainer = document.getElementById(`cardRowContainer`)
let input = document.querySelector(`input`)


class CardAndRobots {
    constructor({ id, name, username, email, image }) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.image = image

    }

    createCard() {

        this.cardContainer = document.createElement(`div`)
        this.cardContainer.className = `col-sm-4 cardContainer`
        this.cardContainer.id = this.id

        let card = document.createElement(`div`)
        card.className = `card mt-5`

        let cardBody = document.createElement(`div`)
        cardBody.className = `card-body`

        let img = document.createElement(`img`)
        img.className = `card-img-top`
        img.setAttribute('src', this.image)


        let h5 = document.createElement(`h5`)
        h5.className = `card-title`
        h5.textContent = this.name

        let p = document.createElement(`p`)
        p.className = `card-text`
        p.textContent = this.email


        cardRowContainer.append(this.cardContainer)
        this.cardContainer.append(card)
        card.append(cardBody)
        cardBody.append(img, h5, p)


    }

    show() {
        this.cardContainer.classList.remove("d-none")
    }

    hide() {
        this.cardContainer.classList.add("d-none")
    }
}

let displayRobots = robots.map(robot => {
    let display = new CardAndRobots(robot)
    display.createCard()
    return display

})

console.log(displayRobots)



let showRelevantRobot = function (e) {
    let inputFilter = e.target.value.toLowerCase()
    console.log(inputFilter)

    for (i = 0; i < displayRobots.length; i++) {
        console.log()
        displayRobots[i].name.includes(inputFilter)
            ? displayRobots[i].show()
            : displayRobots[i].hide()
    }

}

input.addEventListener("input", showRelevantRobot)
