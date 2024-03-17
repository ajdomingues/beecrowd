var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const primeiroNum = Number(lines.shift());
const segundoNum = Number(lines.shift());
if (primeiroNum < segundoNum) {
    somar(primeiroNum, segundoNum);
} else {
    somar(segundoNum, primeiroNum);
}

function somar(menor, maior) {
    let soma = 0;
    for (let i = menor; i <= maior; i++) {
        if (i % 13 !== 0) {
            soma += i;
        }
    }
    return console.log(soma);
}