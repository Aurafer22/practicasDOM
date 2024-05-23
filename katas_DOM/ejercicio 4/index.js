// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
let button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Click Here'
document.body.append(button)
const hazClick = (event) => {
  event.preventDefault()
  console.log('Están haciendo click en el botón y hago console.log')
}

button.addEventListener('click', hazClick)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let inputFocus = document.querySelector('.focus')
const ejecutaFocus = (event) => {
  console.log(event.target.value)
}
inputFocus.addEventListener('focus', ejecutaFocus)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let inputClick = document.querySelector('.click')
const ejecutaInput = (event) => {
  console.log(event.target.value)
}
inputClick.addEventListener('input', ejecutaFocus)
