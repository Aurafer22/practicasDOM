// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

let divContainer = document.querySelector(`[data-function="printHere"]`)
let list = document.createElement('ul')
for (const place of places) {
  let elementList = document.createElement('li')
  elementList.textContent = place
  list.append(elementList)
}
divContainer.append(list)
