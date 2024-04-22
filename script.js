//Declarando as variáveis
let p1 = prompt("Digite o seu nome: ");
let p2 = prompt("Digite o seu poder: ");
let p3 = prompt("Digite o nome do vilão: ");
let p4 = prompt("Digite um lugar: ");

function abrirJogo(){
    const paragrafo = document.querySelector("#msg");
    const botao = document.querySelector("#botao")
    botao.style.display = "none";
    paragrafo.style.display = "block";
    let msg = document.getElementById("msg")
    msg.innerHTML = `<p>Olá, ${p1} o seu poder é ${p2} e você vai enfrentar o(a) ${p3} em ${p4}</p>`
}

