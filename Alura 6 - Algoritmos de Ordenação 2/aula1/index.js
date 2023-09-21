const { edFolha, edGalho } = require('./arrays')

function juntaLivros (lista1, lista2){
    let listaFinal = [];
    let atualLista1 = 0;
    let atualLista2 = 0;
    let atual = 0;

    while (atualLista1 < lista1.length && atualLista2 < lista2.length){
        let objLista1 = lista1[atualLista1];
        let objLista2 = lista2[atualLista2];

        if(objLista1.preco < objLista2.preco){
            listaFinal[atual] = objLista1;
            atualLista1++;
        } else {
            listaFinal[atual] = objLista2;
            atualLista2++;
        }
        atual++;
    }

    while (atualLista1 < lista1.length){
        listaFinal[atual] = lista1[atualLista1]
        atualLista1++
        atual++
    }

    while (atualLista2 < lista2.length){
        listaFinal[atual] = lista2[atualLista2]
        atualLista2++
        atual++
    }

    return listaFinal;
}

console.log(juntaLivros(edFolha, edGalho))
console.log(juntaLivros(edFolha, edGalho).length)
