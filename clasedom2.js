const primerElemento = document.querySelector(`.verde`)

console.log(primerElemento)

console.log(primerElemento.classList)

primerElemento.classList.remove(`verde`)

const parrafoRojo = document.querySelector(`.rojo`)

console.log(parrafoRojo)

console.log(parrafoRojo.classList)

parrafoRojo.classList.add(`rosa`)

console.log(parrafoRojo.classList)


const parrafoRosaUltimo = document.querySelector(`#ultimo`)

console.log(parrafoRosaUltimo)
console.log(parrafoRosaUltimo.classList)

parrafoRosaUltimo.classList.toggle(`rosa`)

console.log(parrafoRosaUltimo.classList)

const parrafoAmarillo = document.querySelector(`.amarillo`)
console.log(parrafoAmarillo)


console.log(parrafoAmarillo.classList.contains(`rojo`))
