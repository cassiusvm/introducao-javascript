var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  var pacienteTr = criaPacienteTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
  var ulMensagensErro = document.querySelector("#mensagens-erro");
  ulMensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function criaPacienteTr(paciente) {
  var pacienteTr = criaTr("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function criaTr(classe) {
  var tr = document.createElement("tr");
  tr.classList.add("paciente");
  return tr;
}

function criaTd(dado, classe) {
  var td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function validaPaciente(paciente) {

  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  return erros;
}