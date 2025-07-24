let nomeListaAmigos = [];

const inputNome = document.querySelector('input');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function adicionarAmigo(){
  const nome = inputNome.value;

  if (nome === '') return alert('Por favor, insira um nome.');

  nomeListaAmigos.push(nome);
  atualizarConteudo();
}

function listarAmigos(){
  listaAmigos.innerHTML = '';
  nomeListaAmigos.forEach((nome, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1} - ${nome}`;
    listaAmigos.appendChild(li);
  });
}

function atualizarConteudo(){
  listarAmigos();
  inputNome.value = '';
  resultado.textContent = '';
}

function sortearAmigo(){
  if (nomeListaAmigos.length === 0) {
    alert("Nenhum amigo cadastrado.");
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * nomeListaAmigos.length);
  const selectedFriend = nomeListaAmigos[randomIndex];
  resultado.textContent = `Amigo sorteado: ${selectedFriend}`;
}
