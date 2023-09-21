const livros = require("./listaLivros")
const menorValor = require("./maisBarato")

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual

}

console.log(`For tradicional: ${livros}`)

livros.forEach((_, index)=>{
    let menor = menorValor(livros, index) //Retorna o indice do obj com menor valor a partir da posição atual
    
    let livroAtual = livros[index] //Salvará o objeto atual, através do index
    let livroMenor = livros[menor] //Salvará o indice do menor valor
    
    livros[index] = livroMenor
    livros[menor] = livroAtual
})

console.log(livros)

for (let [index, atual] of livros.entries()){
    let menor = menorValor(livros, index)

    let livroAtual = livros[index]
    let livroMenor = livros[menor]

    livros[index] = livroMenor
    livros[menor] = livroAtual
}
//Ao utilizar template string, o JS retorna uma string, por isso é mostrado os objetos de forma simplificada.
//Utilizando o método JSON.stringify(), converteremos os objetos em uma string mais organizada!
//O método JSON.stringify() possuí 3 parâmetros:
//'valor'(obrigatório) => É o array ou objeto que queremos converter em string.
//'replacer'(opcional) => Podemos definir quais propriedades queremos converter/exibir, pode ser uma função ou um array.
    //Exemplo: ${JSON.stringify(livros, null) => O null define que queremos mostrar todas as propriedades
    //Exemplo: ${JSON.stringify(livros, [titulo]) => definimos que queremos mostrar apenas a propriedade título
    //Exemplo: ${JSON.stringify(livros, [titulo, preco]) = Definimos que queremos mostrar as propriedades titulo e preco
//'espaco'(opcional) => Com esse parâmetro, definimos a quantidade de espaços em branco, para organizar a visualização. Strings também podem ser utilizadas.
    //Exemplo: ${JSON.stringify(livros, null, 2) => Definimos que terão 2 espaços em branco.
    //Exemplo: ${JSON.stringify(livros, null, 3) => Definimos que terão 3 espaços em branco.
    //Exemplo: ${JSON.stringify(livros, null, "separador") => Definimos uma string como espaçador.
console.log(`For..Of: ${JSON.stringify(livros, null, 2)}`)
console.log(livros)