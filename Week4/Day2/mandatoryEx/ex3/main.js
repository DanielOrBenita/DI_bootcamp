//1
function isDivisible() {
    let arr = [];
    
    for( i=0; i<500; i++) {
        if (i%23===0) {
            arr.push(i)  
        }        
    }    

   let total = arr.reduce(sum,0);

     function sum (a,b) {
        return a+b
    }
    console.log(`only numbers that devied by 23: ${arr.join(" ")}`)
    console.log(`sum of numbers: ${total}`)

    }

isDivisible()



