//Diferenças entre tipos de variáveis

//<==== const =====> 
//É de escopo global, porém não pode ter seu valor alterado! Caso seja um objeto, é possível alterar suas propriedades!

//<==== var =====> |EVITAR USAR|
//Escopo local, essa variável tem um problema, caso seja declarada dentro de for, while, if.... Ela vaza seu escopo, ou seja
//Ela pode ser acessada fora do escopo daquela estrutura de código, porém é muito utilizada na web, então não teria como muda-lá!

//<==== let =====> 
//Para corrigir o problema da var, criaram a let, que trabalha apenas dentro do seu escopo, sem vazar para fora da sua estrutura original.

//Objetos podem armazenar qualquer tipo de dado do JS
// const listaDeItens ={
//     item1: "Biscoito",
//     item2: "Suco",
//     quantidade1 : 3,
//     quantidade2 : 4,
//     mostrarItens : () => console.log(`Comprei ${listaDeItens.quantidade1} unidades de ${listaDeItens.item1}`)
// }
// listaDeItens.mostrarItens()

// //Podemos adicionar propriedades no objeto de diversas formas:
// //Através do ".propriedade = valor"
// listaDeItens.energetico = "Monster"
// console.log(listaDeItens)

// //Através de colchetes "[]"
// listaDeItens["Cereal"] = "Sucrilhos"
// console.log(listaDeItens)

// //Podemos deletar uma propriedade
// delete listaDeItens.Cereal
// console.log(listaDeItens)