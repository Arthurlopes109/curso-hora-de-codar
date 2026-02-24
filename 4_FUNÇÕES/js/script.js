// 1 - criando uma função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao(); // reaproveitamento

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(texto) {
    console.log(`Imprimindo: ${texto}`);
}

funcaoComParametro("Olá");

funcaoComParametro("Outra função");