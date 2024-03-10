var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let valor = lines.shift();
let quantidade = 0;
for (let i = 0; i < 6; i++) {
    if (valor > 0) quantidade++;
    valor = lines.shift();
}
console.log(`${quantidade} valores positivos`);