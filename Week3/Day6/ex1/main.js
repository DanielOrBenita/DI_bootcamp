let people = ["Greg", "Mary", "Devon", "James"];

//ex1

//1
console.log(people)
people.splice(0,1, );
console.log(people)

//2
console.log(people.indexOf("James")) // i want to find where James is in the array. //=2
people[2]="Jason";
console.log(people)

//3
people.push('Daniel Benita')
console.log(people)

//4
console.log(people.indexOf("Mary"))

//5
let newArray=people.slice(1,3);
console.log(newArray)

//6
console.log(newArray.indexOf("foo")) // this code returns -1 (false) because value "Foo" is not exiceted in this array.//

//7
console.log(newArray.length)
// this function =2 this array has 2 items. in the next code ill type 1 because it starting count from 0.
let last= newArray[1]
console.log(last)

//part2
console.log(people) // just checking for me

for (let i= 0; i< people.length; i++) {
    console.log(people[i])
}

//2

console.log(people.indexOf(`Jason`))
for (let i= 0;  i< people.length; i++) {
    
    if(i===2) {break;
    } 
    console.log(people[i])
}
