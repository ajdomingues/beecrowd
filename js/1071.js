var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let primeiroNumero = Number(lines.shift());
let segundoNumero = Number(lines.shift());
let soma = 0;
if (primeiroNumero > segundoNumero) {
    let temporario = primeiroNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = temporario;
}
for (let i = primeiroNumero + 1; i < segundoNumero; i++) {
    if (i % 2 !== 0) soma += i;
}
console.log(soma);