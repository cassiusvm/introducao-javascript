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

// titulo.addEventListener("click", mostraMensagem);
//
// function mostraMensagem(){// }

// titulo.addEventListener("click", function(){
//     console.log("Olá eu fui clicado!");
// });

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

});
