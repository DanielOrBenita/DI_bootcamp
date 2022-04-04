//1
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

//2

console.log(building.numberOfFloors)

//3

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor )

//4
console.log(building.nameOfTenants) // dan is item:2 (which means one in the next console.log)
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan)

console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms`)

//5 Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if(building.numberOfRoomsAndRent.sarah[1] +
    
    building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1] )

    building.numberOfRoomsAndRent.dan[1]= 1200;{

    console.log( building.numberOfRoomsAndRent.dan[1]) // check the result.
    }

    
    
    