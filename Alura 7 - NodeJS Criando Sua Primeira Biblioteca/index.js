import fs from "fs"
import chalk from "chalk";

function trataErro (erro){
    throw new Error(chalk.red(erro.code, "Arquivo não encontrado!"))
}

function pegaArquivo(path){
    const enconding = "utf-8"
    fs.promises.readFile(path, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

// function pegaArquivo (path){
//     const enconding = "utf-8"
//     fs.readFile(path, enconding, (erro, texto) => {
//         if (erro){
//             trataErro(erro)
//         }

//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo("./arquivos/texto.md")
