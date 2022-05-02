// //ex 1:
// let sum = (a,b)=>{return a + b}

// // ex 2 :
// //1
// function converter(e) {
// return e*1000
// }
// console.log(converter(2))
// //2
// let gramConverter= function(e) {
//     return e*1000
//     }
// console.log(gramConverter(4))
// //3
// // function expression is a function that stored in a var , while declaration func is not, but it attached to name.

// //4
// let converter2 = (e)=> e*1000;
// //ex 3:
// (function (NumberOfChildren,partnerName,location,job) {
//     let p = document.createElement(`p`)
//     TEXT_NODE= `you will be ${job} in ${location} and married to ${partnerName} with ${NumberOfChildren} children`
//     p.append(TEXT_NODE)
    // let body = document.querySelector(`body`)
//     body.append(p)
    
//   })(18, `Almog` , `Ny`, `officer`);

// ex : 5 


// (function makeJuice(size) {
//     const ingredients = [];
//     function addIngredients(Ing1, Ing2, Ing3) {
//       ingredients.push(Ing1, Ing2, Ing3);
//     }
//     addIngredients("orange", "lemon", "grapefruit");
//     addIngredients("watermelon", "sugar", "strawberries");
//     (function displayJuice() {
//       let textNode;
//       ingredients.forEach((ing, i) => {
//         if (i === 0) {
//           textNode = `The client wants a ${size} juice, with ${ing},`;
//         } else {
//           textNode += ` ${ing}${ingredients.length -1 === i ? ".  " : ","}`;
//         }
//       });
//       const body = document.body;
//       const h2 = document.createElement("h2");
//       h2.append(textNode);
//       body.append(h2);
//     })();
//   })("big");
