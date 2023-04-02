//Ativa links do menu
const links = document.querySelectorAll(".header-menu a");

function ativaLinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativaLinks);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas fraquêntes
const perguntas = document.querySelectorAll(".perguntas-container button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("arial-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

//Galeria de Imagens
const galeria = document.querySelectorAll(".magic-imgs img");
const galeriaContainer = document.querySelector(".magic-imgs");

function trocarImagem(event) {
  const img = event.currentTarget;
  const mediamax = matchMedia("(max-width: 930px)").matches;
  const mediamin = matchMedia("(min-width: 801px)").matches;
  if (mediamax !== mediamin) {
    galeriaContainer.prepend(img);
  }
}
function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventoGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
