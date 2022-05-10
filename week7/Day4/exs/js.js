// ex 1 : 
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

// ex 2:

const obj = {
    firstName: "Daniel",
    lastName: "Benita",
}

const displayStudentInfo = ({ firstName, lastName, }) => {
    console.log(`your full name is ${firstName} ${lastName}`)
}

displayStudentInfo(obj)

// ex 3:

const users = { user1: 18273, user2: 92833, user3: 90315 }
let answer = (Object.entries(users));

//ex3 pt 2 :

let newAnswer = answer.map(e => {
    e[1] = e[1] * 2;
    return e
})

console.log(newAnswer)

//ex4:

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(member);
// i tought it would be string but it actually an object I understand now that the class its like a shablona for objects

//ex 5 : 
class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    constructor(name, size) {
        super(name, size);
        this.size = size;
        this.name = name;

    }
};

const lavrador = new Labrador(`america`, `5meter`)
console.log(lavrador)
// i knew its op 2 because we need super and i also played with the class to figure out some things.

// ex 6 :

console.log([2] === [2]) //false
// { } === {} // false

const object1 = { number: 5 };
const object2 = object1; // 5
const object3 = object2;  // 5
const object4 = { number: 5 }; // 5

object1.number = 4;
console.log(object2.number) //4 passed by refference
console.log(object3.number) //4 passed by refference
console.log(object4.number) // 5 

class Animal {
    constructor(name, type, color) {
        this.name = name,
            this.type = type,
            this.color = color
    }
}

class Mamal extends Animal {

    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(voice) {
        return (` i am ${this.name} i am also ${this.type} my color is ${this.color} and i do ${voice}`)
    }
}

const cow = new Mamal(`cow`, `food`, `white and black`)
const cat = new Mamal(`cat`, `kind of a tiger`, `white`)
console.log(cow.sound(`mooooooooooo`))
console.log(cat.sound(`mewwwwwwwwwooooooooooo`))
