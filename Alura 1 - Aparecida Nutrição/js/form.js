//Selecionar o botão do formulário através de seletor de Id
var adicionarPaciente = document.querySelector("#adicionar-paciente");

var erros = []

//Utilizando um evento de click (clicar o botão) para executar as tarefas necessárias.
adicionarPaciente.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  
  //Função para verificar se os dados do formulários estão corretos
  verificaDadosFormulario ()

  //Função para encerrar event caso tenha erros no formulário
  if (erros.length > 0){
    erros = []
    return
  }
  
  //Obter os dados do paciente através do formulário
  var paciente = obterDadosPaciente(form);

  adicionarPacientesTabela(paciente)

  //Limpa os campos do formulário sem recarregar a página
  form.reset();
});

function adicionarPacientesTabela(paciente){
  var pacienteTr = montarTr(paciente);
  document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
}

//Função para obter os dados do paciente através do Formulário
function obterDadosPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

//Função para criar as linhas (TR) da tabela e adicionar as informações (TD) dentro dessa linha criada
function montarTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

//Função para inserir as informações de cada coluna (TD)
function montarTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

//Função para verificar se os campos do formulários estão corretos e retornar mensagem de erro caso incorretos
function verificaDadosFormulario (){
  let nomeIsValid = document.querySelector("#nome").checkValidity()
  let pesoIsValid = document.querySelector("#peso").checkValidity()
  let alturaIsValid = document.querySelector("#altura").checkValidity()
  let gorduraIsValid = document.querySelector("#gordura").checkValidity()

  if(!nomeIsValid){
    document.querySelector("#nome").classList.add("dados-invalidos");
    erros.push (document.querySelector("#error-nome").textContent = "Nome inválido")
  } else {
    document.querySelector("#error-nome").textContent = "";
    document.querySelector("#nome").classList.remove("dados-invalidos");
  }

  if (!pesoIsValid || !validaPeso (document.querySelector("#peso").value)){
    document.querySelector("#peso").classList.add("dados-invalidos");
    erros.push (document.querySelector("#error-peso").textContent = "Peso inválido")
  } else {
    document.querySelector("#error-peso").textContent = "";
    document.querySelector("#peso").classList.remove("dados-invalidos");
  }

  if (!alturaIsValid || !validaAltura(document.querySelector("#altura").value)){
    document.querySelector("#altura").classList.add("dados-invalidos");
    erros.push (document.querySelector("#error-altura").textContent = "Altura inválida")
  } else {
    document.querySelector("#error-altura").textContent = "";
    document.querySelector("#altura").classList.remove("dados-invalidos");
  }

  if (!gorduraIsValid || !validaGordura(document.querySelector("#gordura").value)){
    document.querySelector("#gordura").classList.add("dados-invalidos");
    erros.push (document.querySelector("#error-gordura").textContent = "% Gordura inválida")
  } else {
    document.querySelector("#error-gordura").textContent = "";
    document.querySelector("#gordura").classList.remove("dados-invalidos");
  }

 return erros
}