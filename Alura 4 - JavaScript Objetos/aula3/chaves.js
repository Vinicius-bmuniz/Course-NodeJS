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

//Utilizando esse método "Object.keys", passamos o objeto como parametro e nos retorna um ARRAY com todas as chaves já inicializados do objeto.
const chavesDoObjeto = Object.keys(cliente)
console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro, é preciso ter um endereço cadastrado!")
} else {
    console.log("Endereço está cadastrado!")
}