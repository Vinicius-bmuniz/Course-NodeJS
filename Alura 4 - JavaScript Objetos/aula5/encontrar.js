const clientes = require("./clientes.json")

function encontrar (lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
}

const pesquisaNome = encontrar(clientes, "nome", "Kirby")
const pesquisaTelefone = encontrar(clientes, "telefone", "5327428873")
console.log(pesquisaTelefone)