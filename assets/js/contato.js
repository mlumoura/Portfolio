const formulario = document.querySelector("ormcontato__form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".assunto");
const Itel = document.querySelector(".mensagem");

function cadastrar() {
  fetch("http://localhost:8080/cadastrar", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      nome: Inome.value,
      email: Iemail.value,
      assunto: Iassunto.value,
      mensagem: Imensagem.value,
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

function limpar() {
  Inome.value = "";
  Iemail.value = "";
  Isenha.value = "";
  Itel.value = "";
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
});
