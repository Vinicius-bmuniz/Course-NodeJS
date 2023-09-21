let listaDeItens = [];
let itemAEditar;

const form = document.getElementById("form-itens")
const input = document.getElementById("receber-item")
const itensUl = document.getElementById("lista-de-itens")
const itensComprados = document.getElementById("itens-comprados")
const listaRecuperada = localStorage.getItem('listaDeItens')

function atualizaLocalStorage (){
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

if (listaRecuperada){
    listaDeItens = JSON.parse(listaRecuperada)
    mostrarItens()
} else {
    listaDeItens = []
}


form.addEventListener("submit", (event) => {
    event.preventDefault()

    salvarItens()
    mostrarItens()

    input.focus()
})

function salvarItens() {
    const item = input.value
    const checarItem = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === item.toUpperCase())

    if (checarItem) {
        alert("Item já cadastrado!")
    } else {
        listaDeItens.push({
            valor: item,
            checar: false
        })
    }
    input.value = ""
}

function mostrarItens() {
    itensUl.innerHTML = "";
    itensComprados.innerHTML = "";

    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            itensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>`
        } else {
            itensUl.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}" ${index !== Number(itemAEditar) ? "disabled" : ""}></input>
                </div>
                <div>
                    ${index === Number(itemAEditar) ? '<button onclick="salvarEdicao()"> <i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash is-clickable deletar></i>
                </div>
            </li>
            `
        }

        const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
        inputsCheck.forEach((i) => {
            i.addEventListener("click", (evento) => {
                const indexElemento = evento.target.parentElement.parentElement.getAttribute("data-value")
                listaDeItens[indexElemento].checar = evento.target.checked
                mostrarItens();
            })
        })

    })

    const deletarObjetos = document.querySelectorAll(".deletar")

    deletarObjetos.forEach((i) => {
        i.addEventListener("click", (evento)=>{
            const indexElemento = evento.target.parentElement.parentElement.getAttribute("data-value")
            listaDeItens.splice(indexElemento, 1)
            mostrarItens();
        })
    }
    )

    const editarItem = document.querySelectorAll(".editar")
    editarItem.forEach((i) => {
        i.addEventListener("click", (evento)=>{
            itemAEditar = evento.target.parentElement.parentElement.getAttribute("data-value")
            mostrarItens();
        })
    }
    )

    atualizaLocalStorage()

}


function salvarEdicao (){
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
    listaDeItens[itemAEditar].valor = itemEditado.value
    console.log(listaDeItens)
    itemAEditar = -1
    mostrarItens()
}
