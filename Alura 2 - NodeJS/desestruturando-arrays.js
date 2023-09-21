//A desestruturação do array veio na atualização de 2015 (ES6)

var arrayBase = ["Olá", "Vinícius", "bom dia", "eu", "sou"]

//Posso utilizar a desestruturação do array para salvar o primeiro elemento dentro da primeira variável e o segundo elemento na segunda variável e assim por diante
let [saudacao1, nome1] = arrayBase

console.log(saudacao1)
console.log(nome1)

//Também é possível utilizar esse mesmo conceito para salvar elementos de outras posições...
let [saudacao2, nome2, ,pronome1] = arrayBase
console.log(saudacao2)
console.log(nome2)
console.log(pronome1)

//Posso guardar elementos específicos dentro de uma variável e o restante do array em outra variável
let [, nomes, ...itensArray] = arrayBase
console.log(nomes)
console.log(itensArray)

