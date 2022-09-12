let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let lista = document.querySelector('.lista');
let cont = 0;

function addTarefa() {
    // Validações
    if (input.value !== "" && input.value !== null) {
        cont++;

        let novoItem = `
        <div class="list-item" id="${cont}">
        <div onclick="marcar(${cont})" class="item-checkebox">
          <i class="material-symbols-outlined" id="circle-${cont}"> circle </i>
        </div>
        <div onclick="marcar(${cont})"  class="item-name">${input.value}</div>

        <button onclick="deletar(${cont})" class="item-button">
          <i class="material-symbols-outlined"> delete </i>
          Deletar
        </button>
      </div>
        `;

        lista.innerHTML += novoItem;

        input.value = "";
        input.focus();

    } else {
        console.log('campo nulo')
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id) {
    var item = document.getElementById(id);

    if (item.getAttribute('class') == 'list-item') {
        item.classList.add('list-item-checked');

        var icone = document.getElementById('circle-' + id);
        icone.innerHTML = 'check_circle';

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('list-item-checked');

        var icone = document.getElementById('circle-' + id);
        icone.innerHTML = 'circle';
    }
}

input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        submit.click();
    }
})