//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação do campo vazio
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Adiciona à lista e atualiza a exibição
    listaAmigos.push(nome);
    input.value = ''; // Limpa o campo
    
    const lista = document.getElementById('listaAmigos');
    const itemLista = document.createElement('li');
    itemLista.textContent = nome;
    lista.appendChild(itemLista);
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Valida lista vazia
    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        resultado.innerHTML = '';
        return;
    }

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceSorteado];
    
    // Exibe o resultado
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSecreto}</strong></li>`;
}