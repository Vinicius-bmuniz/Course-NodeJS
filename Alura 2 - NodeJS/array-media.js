
const notas = [10, 6.5, 8, 7.5]
const array = [61, 63, 21, 10]
console.log((notas[0] + notas[1] + notas[2] + notas[3])/notas.length)

function verificar(numeroMin) {
   return numeroMin > 60
}


//.push() => Adicionar elementos ao Array, por padrão é adicionado como último elemento.
notas.push(9.5)
console.log(notas)

//.pop() => Remove o último elemento do Array
notas.pop()
console.log(notas)

//.concat() => Concatena dois arrays, porém não adiciona dentro do array já criado, apenas cria um outro array concatenado.
novoArray = notas.concat(array)
console.log(novoArray)

//.filter() => Retorna um array com os valores que passaram no teste da função.
const verifica = (numero) => numero>60;
const filterArray = novoArray.filter(verifica)
console.log(filterArray)

//.find() => Parecido com o .filter(), porém retorna apenas o primeiro resultado que atenda os critérios da função passada.
console.log(novoArray.find(verifica))

//.findIndex() => Parecido com o .find(), porém retorna o indice do primeiro ao invés do próprio elemento.
console.log(novoArray.findIndex(verifica))

//.lastIndexOf() => Mesma coisa do .findIndex(), porém começa do último elemento.
const arrayT = [61, 63, 21, 60]
const arrayNova = arrayT.lastIndexOf(60)
console.log(arrayNova)

//.forEach() => Executa uma função para cada elemento do array

//.shift() => Retira o primeiro elemento do Array

//.unshift() => Funciona igual o .push(), porém adiciona na primeira posição e altera todo o index do array | Altera o Array original.

//.reduce() => Utiliza uma função definida em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida.

//.reduceRight() => Igual o .reduce(), porém começa do final do array até o inicio

//.reverse() => Inverte a ordem dos elementos do array

//.sort() => Organiza o array de acordo com a classificação Unicode

//.splice() => Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

const alunoss = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
console.log(alunoss.length)

//O método slice não incluí o indice final.
console.log(alunoss.slice(0,10))



const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//Primeiro parametro informamos o index inicial (index[1]), segundo parametro informamos a quantidade de elementos (2) e o terceiro parametro é o dado que será colocado no lugar dos removidos ("Rodrigo")
nomes.splice(1, 2, "Rodrigo")
console.log(nomes)


const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const alunosEMedias = [alunos, medias]

console.log(alunosEMedias)

//Utilizando os colchetes, podemos acessar os elementos do array dentro de outro array (alunosEMedias[0][1])
console.log(`A aluna selecionada foi a ${alunosEMedias[0][1]} e sua nota foi: ${alunosEMedias[1][0]}`)

function exibirNomeNota (aluno){
    if (alunosEMedias[0].includes(aluno)){
        let [alunos, medias] = alunosEMedias

        let index = alunos.indexOf(aluno)
        var nota = medias[index]

        console.log(`Aluno(a) ${aluno} encontrado(a) e sua nota foi de ${nota}`)
    } else {
        console.log ("Aluno(a) não encontrado(a)!")
    }
}

exibirNomeNota ("Ana")


const numeros = [100, 200, 300, 400, 500, 600, 601, 602, 603];

for (i = 0; i < numeros.length; i++){
    let numeroAtual = numeros[i]
    let indexAtual = numeros.indexOf(numeroAtual)
    console.log(`Número atual é ${numeroAtual} e seu index é ${indexAtual}`)
}

//Fazendo a média das notas através do for
const notasFor = [10, 6.5, 9.6, 7.5];
var somaNota = 0

for(i=0; i < notasFor.length; i++){
    somaNota += notasFor[i]
}
console.log(`A média das notas é ${somaNota/notasFor.length}`)


//Fazendo a média com For Of
var totalNotas = 0
for (let elemento of notasFor){
    totalNotas += elemento 
}
console.log(`A média das notas é ${totalNotas/notasFor.length}`)

//Números pares crescente
var numerosPares = []
for (let i=0; i <=100; i+=2){
    numerosPares.push(i)
}
console.log(numerosPares)

//Números impares crescente
var numerosImpares = []
for (let i=1; i <=100; i+=2){
    numerosImpares.push(i)
}
console.log(numerosImpares)

//Números Pares decrescente
var numerosParesDecrescente = []
for (let i = 100; i >= 0; i-=2){
    numerosParesDecrescente.push(i)
}
console.log(numerosParesDecrescente)

//Números Impares decrescente
var numerosImparesDecrescente = []
for (let i =101; i >=0; i-=2){
    numerosImparesDecrescente.push(i)
}
console.log(numerosImparesDecrescente)

//Média das notas utilizando o forEach => O forEach pode nos retornar 3 informações que são passadas como parâmetros para a function anônima
//1 parâmetro: VALUE => valor atual do array iterado
//2 parâmetro: INDEX => Número do indice atual do array iterado
//3 parâmetro: ARRAY => Lista de elementos atuais do array iterado
var mediasNotasForEach =0
notasFor.forEach(function(notas, index, array){
    mediasNotasForEach += notas
    console.log(`O indice atual é: ${index} dentro da lista: ${array}`)
})
console.log(`A média das notas é: ${mediasNotasForEach/notasFor.length}`)

//forEach utilizando ArrowFunction anônima
notasFor.forEach(notaAtual => console.log(`Nota atual: ${notaAtual}`))

var notasTotalForEach = 0
notasFor.forEach(notaAtual => notasTotalForEach += notaAtual)
console.log (`forEach com função anônima: ${notasTotalForEach/notasFor.length}`)

var notasTotalForEachFunction = 0
notasFor.forEach(calcularNotas)
console.log (`forEach com função externa + Index + Array: ${notasTotalForEachFunction/notasFor.length}`)

function calcularNotas (notas, index, array){
    notasTotalForEachFunction += notas
    console.log(index)
    console.log(array)
}


//Podemos utilizar o .map() para iterar o array e adicionar 1 ponto em cada nota
//Esse método NÃO sobrescreve o array original, por isso temos que salvar o resultado em um novo array
//Utilizamos um operador ternário para verificar:
//Se nota+1 for >10, então o resultado será 10
//Se nota+1 for <10, então o resultado será nota+1
//Com isso garantimos que a maior nota possível será 10!
const notasAtualizadas = notasFor.map((notas) => (notas+1 > 10 ? notas=10 : notas+1))
console.log(`As notas atualizadas são: ${notasAtualizadas}`)


//Utilizamos o .map() para iterar o array e deixar todos os nomes maiúsculos.
var nomesMap = ["ana Julia", "Caio vinicius", "BIA silva"]
const nomesPadronizados = nomesMap.map((nomes) => nomes.toUpperCase());
console.log(nomesPadronizados);

//Utilizando o método .filter() para retornar apenas os alunos reprovados.
//Essa função não altera diretamente o array original, por isso precisamos salvar o resultado em um novo array
const alunosFilter = ["Ana", "Marcos", "Maria", "Mauro"];
const mediasFilter = [7, 4.5, 8, 7.5];

//Como não estamos utilizando o primeiro parametro (nome), por convenção, podemos colocar um "_"(underline)
const reprovados = alunosFilter.filter((_, index) => (mediasFilter[index] <7))
console.log(reprovados)

//Calculando a média de cada sala utilizando o método .reduce()
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (notasDaSala) {
    let somaDasNotas = notasDaSala.reduce((acumulador, nota)=> {
        return acumulador + nota
    }, 0)

    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de JS é: ${calculaMedia(salaJS)}`)

//Utilizando o Spread Operator
const notasSpread = [7, 7, 8, 9];

//Utilizando o Spread "...", podemos copiar o array original e inseri-lo em outro array, clonando o array original.
//Dessa forma, não alteramos o array original.
const novasNotasSpread = [...notasSpread]
novasNotasSpread.push(10)

console.log(`As notas originais são: ${notasSpread}`)
console.log(`As notas atualizadas são: ${novasNotasSpread}`)


//Utilizando a classe Set() para remover itens duplicados de um array
const nomesDuplicados = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//Utilizando o Set() e passando o array como parâmetro, temos no retorno, uma array sem itens duplicados
const nomesAtualizados = [...(new Set(nomesDuplicados))]
console.log(nomesAtualizados)