var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines.shift())
let x = Number(0);
let y = Number(0);
let resultado = 0

for (let i = 0; i < n; i++) {
    let linha = lines.shift().split(' ');
    x = Number(linha.shift());
    y = Number(linha.shift());

    if (y === 0) {
        console.log('divisao impossivel');
    } else {
        resultado = Number((x / y))
        console.log(resultado.toFixed(1));
    }
}