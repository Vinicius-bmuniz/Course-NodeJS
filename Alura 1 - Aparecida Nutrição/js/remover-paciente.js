
//Selecionar a tabela com a lista de pacientes
var tabela = document.querySelector("#tabela-pacientes")

//Adicionar um evento de duplo click na tabela
tabela.addEventListener("dblclick", function(event){
    
    //Seleciona o elemento mãe da "célula" clicada e adiciona a classe fadeOut (animação de exclusão) 
    event.target.parentNode.classList.add("fadeOut")

    //Coloca um atraso de 500ms na execução da função, para terminar a animação
    setTimeout(function(){

        //Remove o elemento mãe da célula clicada
        event.target.parentNode.remove()
    }, 500)

    console.log("Linha Excluída")
})