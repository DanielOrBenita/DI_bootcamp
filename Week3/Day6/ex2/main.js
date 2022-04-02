
//1
let color=["blue", "green", "pink", "yellow", "red"]

//2
 for (let i = 0; i < color.length; i++) {
     const element = color[i];
     //console.log(`my ${i} choise is ` + color[i])
   
 } 

//3 bonus

let suffi=[`st`, `nd`, `th`, `rd`]

for (let i = 0; i < suffi.length; i++) {
    console.log(`my ${i+1} ${suffi[i]} choise is ${color[i]}`)       
}



