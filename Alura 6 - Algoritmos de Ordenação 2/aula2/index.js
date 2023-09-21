const listaLivros = require("./array")

function mergeSort(array) {
    if (array.length > 1) {
        const meioArray = Math.floor(array.length / 2) //Estamos pegando a metade do array e arredondanto o index.
        const parte1 = mergeSort(array.slice(0, meioArray))
        const parte2 = mergeSort(array.slice(meioArray, array.length))
        array = ordena(parte1, parte2)
    }
    return array
}

function ordena(array1, array2) {
    let atualArray1 = 0
    let atualArray2 = 0
    const result = []

    while (atualArray1 < array1.length && atualArray2 < array2.length) {
        let objArray1 = array1[atualArray1]
        let objArray2 = array2[atualArray2]

        if (objArray1.preco < objArray2.preco) {
            result.push(objArray1)
            atualArray1++
        } else {
            result.push(objArray2)
            atualArray2++
        }
    }
    return result.concat(atualArray1 < array1.length
        ? array1.slice(atualArray1)
        : array2.slice(atualArray2)
    )
}

console.log(mergeSort(listaLivros))