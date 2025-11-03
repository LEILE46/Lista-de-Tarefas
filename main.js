// --- Lista de tarefas ---
function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const lista = document.getElementById('lista');
  const texto = input.value.trim();

  if (texto === "") return alert("Digite algo!");

  const item = document.createElement('li');
  item.textContent = texto;
  item.onclick = () => item.remove();
  lista.appendChild(item);

  input.value = "";
}


const botao = document.getElementById('botaoImagem');
const imagem = document.getElementById('imagemSurpresa');

botao.addEventListener('click', () => {
  imagem.classList.toggle('oculto');
  imagem.classList.toggle('visivel');

  botao.textContent = imagem.classList.contains('visivel')
    ? "Ocultar Imagem"
    : "Mostrar Imagem";
});
