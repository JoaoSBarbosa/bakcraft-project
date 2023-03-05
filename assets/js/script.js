// Ativação do link do menu - Pagina atual
function ativarLink(link) {
  const href = link.href;
  const url = window.location.href;
  if (url.includes(href)) {
    console.log(link);
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
