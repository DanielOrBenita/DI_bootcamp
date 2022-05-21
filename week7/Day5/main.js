const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

let row = document.getElementById(`row`)

let robot =
{
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image: 'https://robohash.org/10?50X50'
}

class CreateRobots {
    constructor({ id, name, username, email, image }) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.image = image
    }

    CreateRobots() {
        //     <div class="card">
        //     <img src="..." class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
        //             the card's content.</p>
        //     </div>
        // </div>
        this.card = document.createElement(`div`)
        card.classList.add(`card`)
        //this is ot defined, cause there it a variable but its a param of the constructor
        card.classList.add(`col-3`)
        let image = document.createElement(`img`)
        image.classList.add(`card-img-top`)
        image.setAttribute("src", this.image)
        let cardBody = document.createElement(`div`)
        cardBody.classList.add(`card-body`)
        let robotName = document.createElement(`h5`)
        robotName.classList.add("card-title")
        robotName.textContent = (this.username)
        let para = document.createElement(`div`)
        para.classList.add("card-title")
        para.textContent = this.email
        row.append(this.card)
        card.append(image, cardBody)
        cardBody.append(robotName, para)

    }
}

let newcard = new CreateRobots(robot)
newcard.CreateRobots()
