var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = parseInt(lines.shift());
const horasTrabalhadas = parseFloat(lines.shift());
const valorHora = parseFloat(lines.shift());
const salario = horasTrabalhadas * valorHora;
console.log(`NUMBER = ${numero}\nSALARY = U$ ${salario.toFixed(2)}`);