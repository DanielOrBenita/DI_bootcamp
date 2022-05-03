// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// [bread, carrot , potato, chicken, apple , orange]
// ------2------
const country = "USA";
console.log([...country]);
//[U,S,A] // because it just string inside the var so it break it to char
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [[,,]]

// ex2:
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeStudents= users.map(e => `Welcome` + (` `) +e.firstName)
console.log(welcomeStudents)


//2
let answer= users.filter( e => e.role=='Full Stack Resident')
console.log(answer)

//ex 3:
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let newEpic= epic.reduce((sentence, word) => sentence + (` `)+word)

console.log(newEpic)

//ex 4:

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let studentPassed= students.filter(e=>!(e.isPassed==false))
console.log(studentPassed)               
//2

studentPassed.forEach(e=> console.log(`Mazal tov ${e.name}! you passed ${e.course} course`))
