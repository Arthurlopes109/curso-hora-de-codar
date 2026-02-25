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

function parOUimpar(n1){
    if(n1 % 2 === 0) {
        return `${n1} Par`;
    } else {
        return `${n1} Impar`;
    }
}

console.log(parOUimpar(D));

// 3 escopo da função

let y = 10 

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}

console.log(`Y fora da função é ${y}`)

testandoEscopo()