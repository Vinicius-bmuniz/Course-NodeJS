const cliente = {
    nome: "João",
    idade: "25",
    email: "contato@email.com",
    telefone: ["11 932307333", "11 940112570"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log ("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado. Seu saldo atual é: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(150)

//Utilizando a forma abaixo, o JS não criará uma cópia do objeto original, mas sim fará uma referência do objeto original
//Ou seja, se alterarmos o objeto original, o objeto "cliente2" mostrará os dados do objeto original.
//Dessa forma, não estamos criando uma nova instância do objeto, mas sim referenciando o objeto original
const cliente2 = cliente
console.log(cliente2)

//Para criarmos uma nova instância do objeto original, precisamos utilizar o método "Object.create(objeto a ser copiado)"
const cliente3 = Object.create(cliente)
cliente3.saldo = 2500
console.log(cliente3)
console.log(cliente3.nome)