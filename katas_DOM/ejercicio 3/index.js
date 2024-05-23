// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
let createList = document.createElement('ul')
for (const country of countries) {
  let createElement = document.createElement('li')
  createElement.textContent = country
  createList.appendChild(createElement)
}
document.documentElement.appendChild(createList)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let deleteElement = document.querySelectorAll('.fn-remove-me')
deleteElement.forEach((element) => {
  element.remove()
})

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
let selectDiv = document.querySelector(`div[data-function="printHere"]`)
let newList = document.createElement('ul')

for (const car of cars) {
  let newElementList = document.createElement('li')
  newElementList.textContent = car
  newList.appendChild(newElementList)
}
selectDiv.appendChild(newList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (let i = 0; i < countries2.length; i++) {
  let country2 = countries2[i]
  let eachDiv = document.createElement('div')
  eachDiv.classList.add('div-country')
  let theH4 = document.createElement('h4')
  theH4.textContent = country2.title
  let theImg = document.createElement('img')
  theImg.src = country2.imgUrl
  eachDiv.appendChild(theH4)
  eachDiv.appendChild(theImg)
  document.documentElement.appendChild(eachDiv)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
let theButton = document.createElement('button')
theButton.textContent = 'Elimina el último elemento'
theButton.style =
  'background: red; color: white; padding: 20px; border-radius: 20px'
document.documentElement.appendChild(theButton)
const eliminarDiv = (event) => {
  let divs = document.querySelectorAll('div')
  if (divs.length > 0) {
    let lastDiv = divs[divs.length - 1]
    lastDiv.remove()
  }
}
theButton.addEventListener('click', eliminarDiv)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

let divElement = document.getElementsByClassName('div-country')

for (const div of divElement) {
  let divButton = document.createElement('button')
  divButton.textContent = 'Elimina el último elemento'
  divButton.style =
    'background: red; color: white; padding: 20px; border-radius: 20px'
  div.appendChild(divButton)
  const eliminarEsteDiv = (event) => {
    div.remove()
  }
  divButton.addEventListener('click', eliminarEsteDiv)
}
