const nome = document.querySelector("#nome");
const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoTarefa = nome.value.trim();

  if (textoTarefa !== "") {
    adicionarTarefa(textoTarefa);
    nome.value = "";
    nome.focus();
  }
});

function adicionarTarefa(textoTarefa) {
  const novaTarefa = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    novaTarefa.classList.toggle("marcado");
  });

  const textoElemento = document.createElement("span");
  textoElemento.textContent = textoTarefa;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.addEventListener("click", function () {
    lista.removeChild(novaTarefa);
  });

  novaTarefa.appendChild(checkbox);
  novaTarefa.appendChild(textoElemento);
  novaTarefa.appendChild(botaoExcluir);

  lista.appendChild(novaTarefa);
}
