//1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -112);

// 2 - operações aritmeticas
console.log(2 + 5);
console.log(21 - 2);
console.log(4 * 12);
console.log(2 / 5);

// 3 - Special numbers no JS
console.log(typeof Infinity);

console.log(12 * "ass");

// 4 - tipo string
console.log("Um texto");
console.log(`Mais um texto`);
console.log('13');

console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);

// 5 - Caracteres especias nas strings do js
console.log("Texto em \nduas linhas");

console.log("Espaçamento de \ttab");

// 6 concatenação de string (união de textos)
console.log("oi," + " Tudo" + " bem");

console.log(`Testando` + ` com` + ` crase!`);

// 7 interpolaçâo de textos(template string)
console.log(`O resultado da expressão 5 + (4 x 12) é ${5 + (4 * 12)}`);

// 8 boolean
console.log(true);

console.log(`5 > 10 ${5 > 10}`);

console.log(`10 > 2 ${10 > 2}`);

console.log(typeof true)

// 9 comparando valores
console.log(`21 >= 21 ${21 >= 21}`);

console.log(`243 <= 43 ${243 <= 43}`);

console.log(`10 == '10' ${10 == '10'}`);

console.log(`10 != '10' ${10 != '10'}`);

console.log(`10 === '10' ${10 === '10'}`);

// 10  Comparação de valor idêntico (verificação de tipo e valor)
console.log(9 == "9")

console.log(9 === "9")

console.log(9 != "9")

console.log(9 !== "9")

// 11 operadores logicos

console.log( true && true)// true

console.log(true && false)// false

console.log(true || true)// true

console.log(true || false)// true

console.log(false || false)// false

console.log(! true)// false

console.log(! false)// true

// 12 operadores logicos na pratica

console.log(`5 > 2 && 10 < 12 ${5  > 2 && 10 < 12}`)

console.log(`5 < 2  && 10 > 12 ${5 < 2 && 10 > 12}`)

console.log(`2 == 5 || 9 !== "9"  ${2 == 5 || 9 !== "9"}`)

console.log(`2 === "3" || 9 !== 9  ${2 === "3" || 9 !== 9}`)

console.log(`5 > 2 ${! 5 > 2}`)

console.log(`5 < 2 ${! 5 < 2}`)