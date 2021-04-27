console.log('javascript funcionando!');

//let adulto = confirm('Você tem mais de 18 anos?'); //retorna um booleano

let nomeUsuario = prompt('Qual é seu nome?'); //retorna texto escrito pelo usuario

console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario');
// elementHeader.innerText = `Olá, ${nomeUsuario}`;
console.log(elementHeader);

elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('ola');
console.log(ola);

ola.style.color = "Orange"

document.getElementById("ola").onclick = function() {darkMode()};

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}