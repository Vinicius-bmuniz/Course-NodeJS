//A função "require()" é uma função que o node disponibiliza para fazer a leitura de um JSON.
const dados = require("./cliente.json")

console.log(dados)
console.log(typeof dados)

//O método "JSON.stringify()" transforma os dados em uma única string.
const clientesEmString = JSON.stringify(dados)
const clientesEmString2 = JSON.stringify(require("./cliente.json"))
console.log(clientesEmString)
console.log(typeof clientesEmString)

console.log(clientesEmString2)
console.log(typeof clientesEmString2)

//Transformar uma string em objeto
const objetoCliente = JSON.parse(clientesEmString)
console.log(objetoCliente)
console.log(typeof objetoCliente)
