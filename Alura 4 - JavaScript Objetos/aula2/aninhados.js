const cliente = {
    nome: "João",
    idade: "25",
    email: "contato@email.com",
    telefone: ["11 932307333", "11 940112570"],
}

console.log(cliente.telefone)
console.log(cliente.telefone[0])

cliente.endereco = {
    rua: "Rua Santa Madalena",
    numero: 411,
    complemento: "Casa 01"

}

console.log(cliente)
console.log(cliente.endereco)
console.log(`O cliente ${cliente.nome}, mora na ${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.complemento}.`)
