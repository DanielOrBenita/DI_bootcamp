"strict mode";
// Daily Challenge: Tell The Story
// 1 + 2
let btn = document.querySelector("#lib-button");
let vars = {
  noun,
  adjective,
  person,
  verb,
  place,
};
btn.addEventListener("click", function (e) {
  let inputs = document.querySelectorAll("input");
  let inputsValue = [];
  inputs.forEach((item) => inputsValue.push(item.value));
  if (!inputsValue.includes("")) {
    inputs.forEach(function (item, i) {
      vars[item.id] = item.value;
    });
    displayStory();
  } else alert("You didn't fill all or some of the fields!");
});
// 3
function createHeading(text) {
  if (!document.querySelector("h1:last-child")) {
    let h1 = document.createElement("h1");
    let textNode = document.createTextNode(text);
    h1.append(textNode);
    document.body.append(h1);
  }
}
function displayStory() {
  let story = `Yesterday I bought a ${vars.adjective} ${vars.noun} and ${vars.person} wanted to borrow it from me while I was ${vars.verb} at the ${vars.place}`;
  createHeading(story);
}