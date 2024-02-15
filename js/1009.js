var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const nome = lines.shift();
const salarioFixo = Number(lines.shift());
const totalVendas = Number(lines.shift());
const salarioComBonus = salarioFixo + (totalVendas * 0.15);
console.log(`TOTAL = R$ ${salarioComBonus.toFixed(2)}`);