// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
let myDiv = document.createElement('div')
document.documentElement.appendChild(myDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let myDiv2 = document.createElement('div')
let myP = document.createElement('p')
document.documentElement.appendChild(myDiv2)
myDiv2.appendChild(myP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
let myDiv3 = document.createElement('div')

for (let i = 0; i < 6; i++) {
  let myP6 = document.createElement('p')
  myDiv3.appendChild(myP6)
}
document.documentElement.appendChild(myDiv3)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
let myPTexto = document.createElement('p')
myPTexto.textContent = 'Soy dinámico!'
document.documentElement.appendChild(myPTexto)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let myH2 = document.querySelector('.fn-insert-here')
myH2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let myLista = document.createElement('ul')

for (const app of apps) {
  let myLi = document.createElement('li')
  myLi.textContent = app
  myLista.appendChild(myLi)
}
document.body.appendChild(myLista)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const noClass = document.querySelectorAll('.fn-remove-me')
noClass.forEach((element) => {
  element.remove()
})

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let primerDiv = document.querySelector('div')
let parrafo = document.createElement('p')
parrafo.textContent = 'Voy en medio!'
primerDiv.insertAdjacentElement('afterend', parrafo)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

let divClase = document.querySelectorAll('div.fn-insert-here')
for (let i = 0; i < divClase.length; i++) {
  let parrafoDentro = document.createElement('p')
  parrafoDentro.textContent = 'Voy dentro!'
  divClase[i].appendChild(parrafoDentro)
}
