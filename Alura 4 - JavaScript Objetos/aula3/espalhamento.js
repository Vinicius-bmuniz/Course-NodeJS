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

function ligaParaCliente (telefoneResidencial, telefoneComercial){
    console.log(`Ligando para ${telefoneResidencial}`)
    console.log(`Ligando para ${telefoneComercial}`)
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1])

//Podemos utilizar o espalhamento para passar os parametros
ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    //Dessa forma teriamos que referenciar cada propriedade do objeto, mas não é viavel quando existe uma quantidade muito grande de propriedades.
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,
    // complemento: cliente.enderecos[0].complemento,
    // isApto: cliente.enderecos[0].isApto,
    
    //Outra forma mais prática de se obter o mesmo resultado, seria:
    ...cliente.enderecos[0]

}

console.log(encomenda)