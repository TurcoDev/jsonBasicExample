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

function convertToJSON(data) {
  let convertedJSON = JSON.stringify(data);
  console.log(convertedJSON);
}

convertToJSON(ObjectData);


let noticia1 = {
  title: "Impactante",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet ullam porro repudiandae deleniti beatae, rerum corrupti maiores nisi alias, minus in magni assumenda voluptatibus? Numquam beatae nulla esse molestiae dolores blanditiis quibusdam laborum cum fuga? Ad laboriosam odit voluptatum harum quas a animi eaque hic magni rem culpa, laborum, repellat repudiandae odio optio quibusdam cupiditate sed vel accusantium reiciendis aliquam dignissimos maxime. Iusto, consequuntur cumque! Tenetur facilis similique at ab qui, facere odit iure libero rerum ducimus? Id, ut nam quae aperiam non facere ab qui assumenda, alias unde quas repellendus nemo consectetur tenetur harum. Maxime inventore sapiente laudantium.",
  image: "url imagen noticia"
}

let noticia2 = {
  title: "Impactante",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet ullam porro repudiandae deleniti beatae, rerum corrupti maiores nisi alias, minus in magni assumenda voluptatibus? Numquam beatae nulla esse molestiae dolores blanditiis quibusdam laborum cum fuga? Ad laboriosam odit voluptatum harum quas a animi eaque hic magni rem culpa, laborum, repellat repudiandae odio optio quibusdam cupiditate sed vel accusantium reiciendis aliquam dignissimos maxime. Iusto, consequuntur cumque! Tenetur facilis similique at ab qui, facere odit iure libero rerum ducimus? Id, ut nam quae aperiam non facere ab qui assumenda, alias unde quas repellendus nemo consectetur tenetur harum. Maxime inventore sapiente laudantium.",
  image: "url imagen noticia"
}

let noticia3 = {
  title: "Impactante",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet ullam porro repudiandae deleniti beatae, rerum corrupti maiores nisi alias, minus in magni assumenda voluptatibus? Numquam beatae nulla esse molestiae dolores blanditiis quibusdam laborum cum fuga? Ad laboriosam odit voluptatum harum quas a animi eaque hic magni rem culpa, laborum, repellat repudiandae odio optio quibusdam cupiditate sed vel accusantium reiciendis aliquam dignissimos maxime. Iusto, consequuntur cumque! Tenetur facilis similique at ab qui, facere odit iure libero rerum ducimus? Id, ut nam quae aperiam non facere ab qui assumenda, alias unde quas repellendus nemo consectetur tenetur harum. Maxime inventore sapiente laudantium.",
  image: "url imagen noticia"
}

let noticias = [
  noticia1,
  noticia2,
  noticia3
]

