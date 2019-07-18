var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if (!pesoEhValido) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    //paciente.style.color = "red";
    paciente.classList.add("paciente-invalido");
    console.log("Peso inválido");
  }

  if (!alturaEhValida) {
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    // paciente.style.color = "red";
    //paciente.style.backgroundColor = "ligthcoral";
    paciente.classList.add("paciente-invalido");
    console.log("Altura inválida");
  }

  if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  }
}

function calculaImc(peso, altura) {
  var imc = 0.0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}

// titulo.addEventListener("click", mostraMensagem);
//
// function mostraMensagem(){// }

// titulo.addEventListener("click", function(){
//     console.log("Olá eu fui clicado!");
// });
