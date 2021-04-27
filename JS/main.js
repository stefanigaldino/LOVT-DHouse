console.log('JS externo funcionou!');

//alert('Seja bem vindo(a)!');

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

document.getElementById("ola").onclick = function () { darkMode() };

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); //cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);
//     //validacao dos campos
//     //exibição de mensagens de erro
//     //envio do formulário
// });

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
    //interrompendo o envio do formulario
    evento.preventDefault();
    //validar se todos os campos estão preenchidos
    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;

    if (!nomeValue || !emailValue || !telefoneValue) {
        alert("Campo não preenchido");
        nomeValue.focus();
        emailValue.focus();
    }
    //validar se nome tem 2 ou mais caracteres
    if(nomeValue.length <= 2){
        alert("Nome contém 2 ou mais caracteres");
    }
    //validar se telefone tem no minimo 8 caracteres
    if(telefoneValue.length < 8){
        alert("Telefone deve ter no mínimo 8 caracteres");
    }
    //validar se o campo do email tem @ (Google: validação com Regex)
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(re.test(emailValue));

    if (re.test(emailValue) == false) {
        alert("Email não existe");
    }
    else{
        alert("Contato enviado!");
    }
})