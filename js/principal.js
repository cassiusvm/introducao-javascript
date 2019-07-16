var titulo = document.querySelector(".titulo");
titulo.textContent = "DESAPARECIDA Nutrição";

var trPaciente = document.querySelector(".paciente");
var tdPeso = trPaciente.querySelector(".info-peso");
var tdAltura = trPaciente.querySelector(".info-altura");
var tdImc = trPaciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = (peso/(altura*altura));

tdImc.textContent = imc;
