// 1 - criando uma função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao(); // reaproveitamento
//fim

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();
//fim

function funcaoComParametro(texto) {
    console.log(`Imprimindo: ${texto}`);
}

funcaoComParametro("Olá");

funcaoComParametro("Outra função");
//fim


// 2 return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// Par ou impar

const A = 12
const B = 24
const C = 54
const D = 967

function parOUimpar(n){
    if(n % 2 === 0) {
        return `${n} é Par`;
    } else {
        return `${n} é Impar`;
    }
}

console.log(parOUimpar(D));

// 3 escopo da função

let y = 10 

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é ${y}`);
}

console.log(`Y fora da função é ${y}`);

testandoEscopo();

// 4 - escopo aninhado
let m = 10

function escopoAninhado() {
    let m = 20

    if(true)  {
        let m = 30

        if(true) {
            let m = 40
            console.log(m);// escopo do segundo if
        }

        console.log(m);// escopo do primeiro if
    } 

    console.log(m);// escopo da função
}

escopoAninhado();//escopo da função

console.log(m);// escopo global

// 5 - Arrow functions

const testeArrow = () => { 
    console.log("Esta é uma arrow function!");
}

testeArrow();

// par ou impar com arrow function
const _parOUimpar = (n) => {
    if(n % 2 ===0){
        console.log(`${n} É par`);
        return
    }
    console.log(`${n} É impar`);
}

_parOUimpar(12);

_parOUimpar(467);

// 6 - mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadradaResumida = (x) => x * x;

console.log(raizQuadradaResumida(4));

const helloWorld = () => console.log("Hello World!");

helloWorld();