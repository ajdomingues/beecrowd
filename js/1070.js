var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numero = lines.shift();
let temporario = numero;
for (let i = 0; i < 12; i++) {
    if (temporario % 2 != 0) console.log(temporario);
    temporario++;
}
