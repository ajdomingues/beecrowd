var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const tempoViagem = parseFloat(lines.shift());
const velMedia = parseFloat(lines.shift());
const consumoPadrao = 12.0;
const litroGastos = (tempoViagem * velMedia) / consumoPadrao;
console.log(`${litroGastos.toFixed(3)}`);