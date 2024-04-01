var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let notas = 0;
let contador = 0;

while (contador < 2) {
    let entrada = Number(lines.shift());
    if (entrada >= 0 && entrada <= 10.0) {
        notas += entrada;
        contador++
    } else {
        console.log('nota invalida');
    }
}
console.log(`media = ${(notas / 2).toFixed(2)}`);