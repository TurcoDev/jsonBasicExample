// module ES
import people from "./people.js";
// commonJS
// const people = required("people.js")

convertToJSON(people);

console.log(people[0].gender)

for (let index = 0; index < people.length; index++) {
  const element = people[index];
  console.log(element.name.first)
}

people.forEach((element) => console.log(element.name.first));

function setList(arrayList) {
  let listNode = document.createElement('ol');
  arrayList.forEach((element) => {
    let listItem = document.createElement('li');
    listItem.innerText = element.name.first;
    // let content = document.createTextNode(element.name.first);
    // listItem.appendChild(content);
    listNode.appendChild(listItem);
  });
  document.body.appendChild(listNode);
}

setList(people);


