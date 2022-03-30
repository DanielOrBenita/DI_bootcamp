let a = 2 + 1;

switch (a) {
  case 4: // if a is equal to 4 the alert will be right
    alert('Right!');
    break; // move on to the next case

  case 3: // (*) grouped two cases // if the answer will be 5 or 3 then it will be to 2: alerts
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;// move on to the next case

  default: // otherwise the outcome is not 2/3/5 it will be alert "The result is very strange. Really"
    alert('The result is strange. Really.');
}