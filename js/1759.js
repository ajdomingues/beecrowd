var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = Number(lines.shift());
let ho = [];
for (let i = 0; i < numero; i++) {
    ho.push('Ho');
}
ho = ho.join(' ');
ho += '!';
console.log(ho);