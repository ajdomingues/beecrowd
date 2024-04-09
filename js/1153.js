var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = parseInt(lines.shift());
let soma = 1;
for (let i = 1; i <= numero; i++) {
    soma *= i;
}
console.log(soma);