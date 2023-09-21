const cliente = {
    nome: "João",
    idade: "25",
    email: "contato@email.com",
    telefone: ["11 932307333", "11 940112570"],
}

cliente.enderecos = [
    {
        rua: "Rua Santa Madalena",
        numero: 411,
        complemento: "Casa 01",
        isApto: false
    },
]
//utilizando a palavra reservada "in", podemos acessar as chaves do objeto cliente
for (chave in cliente){
    // console.log(chave) //Dessa forma, pegamos todos os nomes das propriedades do objeto 
    // console.log(cliente[chave]) //Dessa forma, pegamos os valores de cada chave no objeto cliente
    let tipo = typeof cliente[chave]
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}

