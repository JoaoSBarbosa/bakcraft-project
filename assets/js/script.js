// Ativação do link do menu - Pagina atual
function ativarLink(link) {
  const href = link.href;
  const url = window.location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
const links = document.querySelectorAll(".header-menu a").forEach(ativarLink);

// Ativar itens do orçamento
const url = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
url.forEach(ativarProduto);

// Perguntas frequentes
function ativarPergunta(event) {
  const p = event.currentTarget;
  const controls = p.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const condicao = resposta.classList.contains("ativo");
  p.setAttribute("aria-expanded", condicao);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
const perguntas = document
  .querySelectorAll(".perguntas button")
  .forEach(eventosPerguntas);

// Galeria de Bicicletas
function trocarImagem(event) {
  const imgAtual = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(imgAtual);
  }
}
const galeria = document
  .querySelectorAll(".bicicleta-imagens img")
  .forEach((img) => {
    img.addEventListener("click", trocarImagem);
  });

const galeriaContainer = document.querySelector(".bicicleta-imagens");
