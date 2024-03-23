
const nome = document.querySelector("#nome")
const formulario = document.querySelector("#formulario")
const lista = document.querySelector("#lista")

function adicionarTarefa(tarefa) {
    tarefa.preventDefault()

    const novaTarefa = document.createElement("li")
    const checkbox = document.createElement("input")
    const botaoExcluir = document.createElement("button")

    checkbox.type = "checkbox"
    checkbox.addEventListener("change",(e) => {
        if (e.target.checked) {
            novaTarefa.classList.add("marcado")
        } else {
            novaTarefa.classList.remove("marcado")
        }
    })

    botaoExcluir.textContent = "Excluir"
    botaoExcluir.addEventListener("click",() => {
        lista.removeChild(novaTarefa)
    })

    novaTarefa.appendChild(checkbox)
    novaTarefa.appendChild(document.createTextNode(nome.value))
    novaTarefa.appendChild(botaoExcluir)

    lista.appendChild(novaTarefa)

    nome.value = ""
    nome.focus()
}

formulario.addEventListener("submit", adicionarTarefa)
