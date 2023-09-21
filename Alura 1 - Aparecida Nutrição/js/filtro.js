var campoFiltro = document.querySelector("#filtrar-pacientes");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (i = 0; i < pacientes.length; i++) {
      var nome = pacientes[i].querySelector(".info-nome").textContent;
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        pacientes[i].classList.add("invisivel");
      } else {
        pacientes[i].classList.remove("invisivel");
      }
    }
  } else {
    for (i = 0; i < pacientes.length; i++) {
      pacientes[i].classList.remove("invisivel");
    }
  }
});
