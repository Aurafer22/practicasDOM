// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let clase = document.querySelector('showme')
console.log(clase)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let id = document.querySelector('#pillado')
console.log(id)

// 1.3 Usa querySelector para mostrar por consola todos los p
let parrafos = document.querySelectorAll('p')
console.log(parrafos)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon
let pokemons = document.querySelectorAll('.pokemon')
console.log(pokemons)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
let atributos = document.querySelectorAll('[data-function="testMe"]')
console.log(atributos)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

let personaje3 = document.querySelector(
  '[data-function="testMe"]:nth-child(3n)'
)
console.log(personaje3)
