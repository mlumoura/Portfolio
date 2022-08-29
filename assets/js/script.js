//Seletores
const sobre = document.querySelector("#menu-sobre");
const skills = document.querySelector("#menu-skills");
const hobbies = document.querySelector("#menu-hobbies");
const formacao = document.querySelector("#menu-formacao");
const projetos = document.querySelector("#menu-projetos");
const contato = document.querySelector("#menu-contato");

// captura o id no momento do click e direciona para o metódo relativo
document.getElementById("menu-sobre").onclick = (e) => {
  e.preventDefault();
  limpa();
  const textSobre =
    "Sou formada em Tecnólogo de Processamento de Dados e atualmente curso Pós em Projetos de Aplicativos Móveis. Também estou participando do projeto Oracle ONE na Alura Latam";
  mensagem.value = textSobre;
};

document.getElementById("menu-skills").onclick = (e) => {
  e.preventDefault();
  limpa();
  document.getElementById("listaskills").style.display = "block";
  aparece();
};

document.getElementById("menu-hobbies").onclick = (e) => {
  e.preventDefault();
  limpa();
  document.getElementById("hobbies").style.display = "block";
  aparece();
};

document.getElementById("menu-formacao").onclick = (e) => {
  e.preventDefault();
  limpa();
  document.getElementById("formacao").style.display = "block";
  aparece();
};

document.getElementById("menu-projetos").onclick = (e) => {
  e.preventDefault();
  limpa();
  document.getElementById("projetos").style.display = "block";
  aparece();
};

document.getElementById("menu-contato").onclick = (e) => {
  e.preventDefault();
  limpa();
  document.getElementById("contacto").style.display = "block";
  aparece();
};

//manipula o dom para que alguns componentes apareçam e desapareçam da tela
function aparece() {
  document.getElementById("div-aparece").style.display = "block";
}

function limpa() {
  document.getElementById("listaskills").style.display = "none";
  document.getElementById("formacao").style.display = "none";
  document.getElementById("projetos").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  mensagem.value = "";
}
