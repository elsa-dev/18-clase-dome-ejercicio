// const primero = document.getElementsByTagName(`p`)

// console.log(primero)



// const segundo =  document.getElementsByClassName(`verde`)
// console.log(segundo)




// const tercero = document.querySelector("#borde-rojo")
// console.log(tercero)



// console.log(document.getElementById(`borde-rojo`))

// const segundoParrafo = document.getElementById(`borde-rojo`) segundoParrafo.classList.add(`borde-azul`)

// const cuartoParrafo = document.querySelector(`#azul`)

// console.log(cuartoParrafo)


// const primerParrafo = document.querySelector(`.primer-parrafo`)
// console.log(primerParrafo)


// const varios = document.getElementsByTagName(`p`)
// console.log(varios)

// 




// const todosLosElementP = document.getElementsByTagName(`p`)
// console.log(todosLosElementP)




// const todosLosElementosClaseVerde = document.getElementsByClassName(`verde`)
// console.log(todosLosElementosClaseVerde)

// // segunda forma de hacerlo
// // const todosLosElementosClaseVerde = document.querySelectorAll(`.verde`)

// const primerElementoIdBordeRojo = document.getElementById(`borde-rojo`)
// console.log(primerElementoIdBordeRojo)

// // segundaforma
// const primerElementoIdBordeRojo = document.querySelector(`#borde-rojo`)

const pirmerElementoClaseVerde = document.querySelector(`.verde`)
const primerElementoIdRojo = document.querySelector(`#borde-rojo`)
console.dir(primerElementoIdRojo)

console.log(pirmerElementoClaseVerde.classList)

pirmerElementoClaseVerde.classList.remove(`verde`)
pirmerElementoClaseVerde.classList.add(`color-rojo`)
console.log(pirmerElementoClaseVerde.classList.contains(`fucsia`))