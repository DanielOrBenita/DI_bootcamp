let ul= document.getElementsByClassName("list")
ul[0].children[1].textContent="Richard"

for (i = 0; i < ul.length; i++) {
    ul[i].children[0].textContent = "daniel";
  }

  let newli= document.createElement("li")
  
  let text=document.createTextNode("Hey students")
  newli.appendChild(text);
  console.log(newli);
 console.log(ul);
    ul[0].append(newli)
    ul[1].append(newli)

    ul[1].removeChild(ul[1].children[1])