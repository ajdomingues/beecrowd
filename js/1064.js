var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let quantidadePositivos = 0;
let positivos = 0;
for (let i = 0; i < 6; i++) {
    let numero = Number(lines.shift());
    if (numero > 0) {
        positivos += numero;
        quantidadePositivos++;
    }
}
console.log(`${quantidadePositivos} valores positivos`);
console.log(`${(positivos / quantidadePositivos).toFixed(1)}`);