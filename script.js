// Declarando as variáveis

let nome = prompt("Digite o seu Nome");
let poder = prompt("Digite o seu Poder");
let vilao = prompt("Digite o nome de Vilão");
let lugar = prompt("Digite o nome do Lugar");
let msg = document.getElementById("msg");

msg.innerHTML = `Olá, ${nome}! O seu poder é ${poder} e você vai enfrentar o ${vilao} no/em ${lugar}!`