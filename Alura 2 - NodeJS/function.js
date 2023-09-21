//Função Declarativa => Função mais comum utilizada. Pode ser chamada antes do sistema percorrer o bloco de código.
console.log(minhaFuncao("Teste Função Declarativa"))
function minhaFuncao (param){
    return param
}

//Função Expressiva => Uma forma diferente de se criar uma função. Não pode ser chamada antes do sistema percorrer o bloco de código.
const soma = function(num1, num2) {return num1+num2}
console.log(soma(1,1))


//No caso de função expressiva, não é possivel chama-lá antes de declara-la, pois ainda não foi inicializada!
//Ao contrário da função declarativa, que posso chama-la antes mesmo de "chegar" ao bloco de código!

//Arrow Function => Uma forma mais simples de criar uma função, que veio com a ECS6


const apresentacao = nome => `Meu nome é ${nome} - Primeira Arrow`;
console.log(apresentacao("Vinicius"))


const somaArrowFunction = (num1, num2) => `${num1 + num2} Segunda Arrow`;
console.log(somaArrowFunction(1,1))


const multiplicarArrow = (num1, num2) => {
    return `O resultado da minha multiplicação é: ${num1*num2}`
}
console.log(multiplicarArrow(2,2))