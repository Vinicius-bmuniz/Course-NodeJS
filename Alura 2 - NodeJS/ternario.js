const idadeMinima = 18;
const idadeCliente = 16;


// Um if clássico
if (idadeCliente >= idadeMinima){
    console.log("Pode beber!")
} else {
    console.log("Não Pode beber!")
}

//Podemos fazer essa mesma comparação utilizando o operador ternário "?"
// Estrutura do operador ternário => condição ? result true : result false
console.log(idadeCliente >= idadeMinima ? "Pode beber! - Ternário" : "Não pode beber! - Ternário")