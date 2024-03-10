var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const linha = lines.shift().split(' ');
const produto = Number(linha[0]);
const quantidade = Number(linha[1]);
let total = 0;
switch (produto) {
    case 1:
        total = quantidade * 4.00;
        break;
    case 2:
        total = quantidade * 4.50;
        break;
    case 3:
        total = quantidade * 5.00;
        break;
    case 4:
        total = quantidade * 2.00;
        break;
    case 5:
        total = quantidade * 1.50;
        break;
}
console.log(`Total: R$ ${total.toFixed(2)}`);