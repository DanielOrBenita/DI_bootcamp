let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let str = "";
for (let x in details) {
  console.log(x, details[x]);
  str = `${str} ${x} ${details[x]}`;
}
console.log(str);