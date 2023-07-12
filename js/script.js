// Objeto de javascript
const ObjectData = {
  "name": "Roberto",
  "lastname": "Nomeimporta",
  "age": 37,
  "children": null,
  "married": false,
  "friends": ["Kolade", "Nithya", "Dammy", "Jack"],
  "players": {"one": "Kante", "two": "Hazard", "three": "Didier"}
}

console.log(ObjectData);

const JSONData = `{
  "name": "Roberto",
  "lastname": "Nomeimporta",
  "age": 37,
  "children": null,
  "married": false,
  "friends": ["Kolade", "Nithya", "Dammy", "Jack"],
  "players": {"one": "Kante", "two": "Hazard", "three": "Didier"}
}`

console.log(JSONData);

let convertedObject = JSON.parse(JSONData);
console.log(convertedObject);
document.write(convertedObject.friends);

let convertedJSON = JSON.stringify(ObjectData);
console.log(convertedJSON);
