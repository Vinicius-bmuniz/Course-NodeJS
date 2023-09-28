import chalk from "chalk"
import fs from "fs"
import pegaArquivo from "./index.js"
import validarLista from "./validar-http.js"

const caminho = process.argv

async function imprimeLista (valida, resultado, nomeArquivo){
    if(valida){
        console.log (
            chalk.yellow("Links do Arquivo: "),
            chalk.black.bgGreenBright(nomeArquivo), await validarLista(resultado)
        )
    } else {
        console.log (
            chalk.yellow("Links do Arquivo: "),
            chalk.black.bgGreenBright(nomeArquivo), resultado
        )
    }     
}

async function processaTexto (argumentos){
    const caminho = argumentos[2]
    const valida = argumentos[3] === "--valida"

    try {
        fs.lstatSync(caminho)
    } catch (erro){
        if (erro.code === "ENOENT"){
            console.log(chalk.red("Arquivo ou diretório inválido!"))
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2])
        imprimeLista (valida, resultado, caminho)
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`)
            imprimeLista (valida, lista, nomeArquivo)
        })
    }
}

processaTexto(caminho)


