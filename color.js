const preguntaColor = prompt(`decime un color #??????`)

const fondoBody = document.querySelector(`.fondo`)

console.dir(fondoBody)

fondoBody.style.backgroundColor = `#${preguntaColor}`