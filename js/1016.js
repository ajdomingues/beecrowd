var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const distanciaPercorrida = Number(lines.shift());
const mediaDistanciamento = 1;
const tempoDistanciamento = distanciaPercorrida * (mediaDistanciamento * 2);
console.log(`${tempoDistanciamento} minutos`);