let nomeListaAmigos = [];
let historicoSorteios = [];

const inputNome = document.querySelector('input');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const historicoEl = document.getElementById('historico');

function adicionarAmigo() {
  const nome = inputNome.value.trim();

  if (nome === '') return alert('Por favor, insira um nome.');

  if (nomeListaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  nomeListaAmigos.push(nome);
  atualizarConteudo();
}

function listarAmigos() {
  listaAmigos.innerHTML = '';
  nomeListaAmigos.forEach((nome, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1} - ${nome}`;
    listaAmigos.appendChild(li);
  });
}

function atualizarConteudo() {
  listarAmigos();
  inputNome.value = '';
  resultado.innerHTML = '';
}

function sortearAmigo() {
  if (nomeListaAmigos.length === 0) {
    alert("Nenhum amigo cadastrado.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * nomeListaAmigos.length);
  const selectedFriend = nomeListaAmigos[randomIndex];

  resultado.innerHTML = `<li>Amigo sorteado: ${selectedFriend}</li>`;
}

function sortearPares() {
  if (nomeListaAmigos.length < 2) {
    alert("Adicione pelo menos 2 amigos.");
    return;
  }

  let sorteados = [...nomeListaAmigos];
  sorteados.sort(() => Math.random() - 0.5); 
  let pares = [];
  for (let i = 0; i < sorteados.length; i++) {
    let atual = sorteados[i];
    let proximo = sorteados[(i + 1) % sorteados.length]; 
    pares.push(`${atual} ➝ ${proximo}`);
  }

  historicoSorteios.push(pares); 
  mostrarResultado(pares);
  atualizarHistorico();
}

function mostrarResultado(lista) {
  resultado.innerHTML = '';
  lista.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    resultado.appendChild(li);
  });
}

function atualizarHistorico() {
  historicoEl.innerHTML = '';

  historicoSorteios.forEach((round, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Sorteio ${index + 1}:</strong><br>${round.join('<br>')}`;
    historicoEl.appendChild(li);
  });
}
