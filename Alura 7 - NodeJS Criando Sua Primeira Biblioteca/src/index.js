import fs from "fs"
import chalk from "chalk";

function trataErro (erro){
    throw new Error(chalk.red(erro.code, "Arquivo não encontrado!"))
}

function extraiLinks(texto){
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura => ({
        [captura[1]] : captura[2]
    }))

    return resultados.length !==0 ? resultados : "Não há links no arquivo!"
}

//Função assíncrona com async/await
async function pegaArquivo(path){
    try {
        const enconding2 = "utf-8"
        const texto = await fs.promises.readFile(path, enconding2)
        return extraiLinks(texto)
    } catch (erro){
        trataErro(erro)
    }
}

export default pegaArquivo



