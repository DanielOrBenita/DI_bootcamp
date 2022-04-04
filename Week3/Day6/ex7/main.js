//let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


/*for (let secret of names) {
    //console.log(secret[0]);
    
    console.log(secret[0])  
     
  }
  */

  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

  let sortedNames = names.sort(); 
  let str = ''; 
  for (let i = 0; i < sortedNames.length; i++) {
      let firstChar = sortedNames[i][0];
      console.log(firstChar)
      str += firstChar;
  }
  console.log(str)


