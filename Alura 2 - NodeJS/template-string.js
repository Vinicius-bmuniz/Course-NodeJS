const nome = "Vinícius"
const idade = 25
const cidadeDeNascimento = "Diadema"
const estadoDeNascimento = "São Paulo"

const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e nasci na cidade de " + cidadeDeNascimento + " - " + estadoDeNascimento

//Concatenar de forma tradicional
console.log(apresentacao)

//Concatenar utilizando o template String
const apresentacaoTemplateString = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento} - ${estadoDeNascimento}`
console.log(apresentacaoTemplateString)