var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const raio = Number(lines.shift());
const pi = 3.14159;
const resultado = (4 / 3.0) * pi * Math.pow(raio, 3);
console.log(`VOLUME = ${resultado.toFixed(3)}`);