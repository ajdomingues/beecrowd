var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const distancia = parseFloat(lines.shift());
const consumo = parseFloat(lines.shift());
const kmLitros = distancia / consumo;
console.log(`${kmLitros.toFixed(3)} km/l`)