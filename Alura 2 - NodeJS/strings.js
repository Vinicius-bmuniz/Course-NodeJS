//Por de baixo dos panos, todas as strings são um Objeto no JS, por isso temos acesso a diversos métodos para trabalhar com strings.

const nome = "Vinícius"

//.legth => Conta os caracteres da string
console.log(nome.length) 

//.charAt() => Nos retorna o caractere da posição informada | Caso não tenha nenhum caracter naquela posição, nos retorna " " uma string vazia
console.log(nome.charAt(1))
//Como toda string vira um Array, Também podemos retornar o caracter utilizando o index do array
console.log(nome[2])

//.indexOf() => Nos retorna a posição do caracter informado
console.log(nome.indexOf("s"))
//Caso tenha mais de um caracter informado dentro da String, essa função nos retornará a posição da primeira ocorrencia.
console.log(nome.indexOf("i"))

//.toUpperCase() => Transforma toda a string em letras MAIÚSCULAS
//.toLowerCase() => Transforma toda a string em letras minúsculas
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

//.substr() => Permite extrair uma parte da String começando e terminando pelo Index informado
console.log(nome.substr(0, 3))

//.slice() => Também permite extrair parte de uma String começando e terminando pelo index informado
console.log(nome.slice(0, 4))

//.replace() => Com esse método, podemos substituir uma parte da string informando o texto a ser substituído e o novo texto a ser colocado no lugar.
console.log(nome.replace("Vin", "vinn"))

//.concat() => Podemos concatenar duas strings sem utilizar o operador de "+"
console.log(nome.concat(" de").concat(" Paula Barbosa Muniz"))

//.split() => Podemos quebrar a string com base em caracteres que informaremos e nos retornará um Array
console.log(nome.split("i"))

//.trim() => Remove os espaços em branco no início ou no fim da String
const email = "       teste @gmail.com   "
const fim = "<<"
const inicio = ">>"

console.log(inicio + email + fim)
console.log(inicio + email.trim() + fim)
console.log(inicio + email.trimStart() + fim)
console.log(inicio + email.trimEnd() + fim)