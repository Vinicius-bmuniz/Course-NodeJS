function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`
            } catch(erro){
                return manejaErros(erro)
                
            }
        })
    )
    return arrStatus
}

function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return "Link não encontrado!"
    } else {
        return "Erro desconhecido!"
    }
}

export default async function validarLista(listaLinks){
    const links = extraiLinks(listaLinks)
    const status = await checaStatus(links)

    return listaLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
    
}

