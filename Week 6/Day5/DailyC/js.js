
let allTruthy = (...args)=>{ // i make the args into array to take care of unknown amounts of args

    let answer;
    answer= args.every(e=>e===true)

    if(answer===true){ // ternary operator does not work here :(
        return true     
    }   else {
        return false
    }
    
}

console.log(allTruthy(false , 6>4));





