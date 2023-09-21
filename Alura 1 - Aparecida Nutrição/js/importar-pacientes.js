var btnImportar = document.querySelector("#importar-paciente");

btnImportar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  xhr.send();

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionarPacientesTabela(paciente);
      });
      document.querySelector("#erro-ajax").classList.add("invisivel");
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      document.querySelector("#erro-ajax").classList.remove("invisivel");
    }
  });
});
