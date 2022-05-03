let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

let getCarHonda= (carInventory)=> {
   let honda= 
   inventory.find (e => e.car_make===carInventory)
      console.log(honda)
    return `this is a ${honda.car_make} ${honda.car_model} from ${ honda.car_year } `
}

console.log(getCarHonda(`Honda`))

// 2:

let sortCarInventoryByYear=(inventory)=>{
    let sorted = inventory.sort(function (a, b){return a.car_year - b.car_year;})
    console.log(sorted)

}
sortCarInventoryByYear(inventory)

