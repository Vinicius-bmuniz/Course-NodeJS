//Construtor Promise()

function promessa(boolean){
    const x = boolean

    return new Promise((resolve, reject) => {
        if (!boolean){
            reject(new Error ("Promessa não concluída!"))
        }
        resolve("Promessa concluída!")
    })
}

function exibirTexto(texto){
    console.log(texto)
}

promessa(true).then((texto)=> console.log(texto))
promessa(true).then(exibirTexto)