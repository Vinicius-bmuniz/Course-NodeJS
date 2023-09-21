//Obter todos os pacientes da lista utilizando um seletor
var paciente = document.querySelectorAll(".paciente");

//Laço para verificar os itens já inseridos na tabela
for (var i = 0; i < paciente.length; i++) {
  let altura = paciente[i].querySelector(".info-altura").textContent;
  let peso = paciente[i].querySelector(".info-peso").textContent;

  if (validaPeso(peso) && validaAltura(altura)) {
    paciente[i].querySelector(".info-imc").textContent = calcImc(peso, altura);
  } else {
    paciente[i].querySelector(".info-imc").textContent = "Dados Inválidos";
    paciente[i].classList.add("dados-invalidos");
  }
}

//Função para calcular o IMC
function calcImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

//Função para validar o peso do paciente
function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

//Função para validar a altura do paciente
function validaAltura(altura) {
  if (altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}

function validaGordura (gordura){
  if (gordura > 0 && gordura < 100){
    return true
  } else {
    return false
  }
}