// 1 - variáves
let nome = "Arhur";

console.log(nome);

nome = "Arthur lopes";

console.log(nome);

const idade = 19;

console.log(idade);
// idade = 20 não se pode fazer um re-atribuição
//de valor em uma constande

// 2 - Mais sobre variáveis
// simbolos não permitido no começo de uma variável
// let 2testes ="var invalida"
// let @teste = "var invalida"

let a = 10,
 b = 20, 
 c = 30;

 console.log(a,b,c);

const Nomecompleto = "Arthur Lopes";

const nomecompleto = "arthur lopes";

console.log(Nomecompleto);

console.log(nomecompleto);

// simbolos permitidos no começo de uma variável
let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

/* 3 prompt
const age = prompt("Digite a sua idade ?");

console.log(`Você tem ${age} anos de idade.`)*/

/* 4 alert

alert("testando");

const z = 2;

alert(`O número é ${z}`);*/

// 5 objeto math
console.log(Math.max(4, 5, 7, 32, 45)); // encontra o maior

console.log(Math.min(34, 12, 345 , 6545, 1)); // encontra o menor

console.log(Math.floor(5.14)); // arredonda um número para baixo

console.log(Math.ceil(5.14)) // arredonda para um número para cima

// 6 objeto console
console.log("exibe uma mensagem");

console.error("ERRO!");

console.warn("AVISO!");