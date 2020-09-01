const pedirNombre = prompt(`cual es tu nombre?`)


const centradoDeSaludo = document.getElementById(`centrado`)

const saludo = document.getElementById(`saludo`)
console.log(saludo)

centradoDeSaludo.classList.add(`centro`)

saludo.textContent = `hola ${pedirNombre}`

saludo.classList.add(`tipografia`)