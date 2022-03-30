/*just checed some things
let answer=(prompt(`2+2=?`))
let a=(parseInt(answer))*/

let a= (2+2)

switch (a) { // if a is equal to (num)3 so it will be alert `to small`
  case 3:
    alert( 'Too small' );
    break;
  case 4:  //if a is equal to (num)4 so it will be alert 'Exactly!'
    alert( 'Exactly!' );
    break;
  case 5:  //if a is equal to (num)5 so it will be alert 'Too large'
    alert( 'Too large' );
    break;
  default:  //if a is not a number then it will alert ` i dont know...`
    alert( "I don't know such values" );
}

