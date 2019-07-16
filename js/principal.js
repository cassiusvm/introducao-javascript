var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var trPaciente = document.querySelector(".paciente");
//var tdPeso = trPaciente.querySelector(".info-peso");
//var tdAltura = trPaciente.querySelector(".info-altura");
//var tdImc = trPaciente.querySelector(".info-imc");

//tdPeso.textContent = 2000;
//tdAltura.textContent = 4;

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso > 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.style.color = "red";
    paciente.classList.add("paciente-invalido");
    console.log("Peso inválido");
  }

  if (altura < 0 || altura > 3.00) {
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    // paciente.style.color = "red";
    paciente.style.backgroundColor = "ligthcoral";
    console.log("Altura inválida");
  }

  if(pesoEhValido && alturaEhValida) {
    var imc = (peso/(altura*altura));
    tdImc.textContent = imc.toFixed(2);
  }
}
