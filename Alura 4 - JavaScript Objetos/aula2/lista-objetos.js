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

cliente.enderecos.push(
    {
        rua: "Rua da Proclamação",
        numero: 81,
        complemento: "Casa 03",
        isApto: true
    }
)


const listaIsApto = cliente.enderecos.filter(
    (endereco) => endereco.isApto === true
)

console.log(listaIsApto)
