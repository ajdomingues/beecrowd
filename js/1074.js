var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const repeticoes = Number(lines.shift());
let entrada = Number(0);
for (let i = 0; i < repeticoes; i++) {
    let linha = lines.shift().split(' ');
    entrada = Number(linha.shift());
    if (entrada === 0) {
        console.log('NULL');
    }
    if (entrada < 0 && entrada % 2 === 0) {
        console.log('EVEN NEGATIVE');
    }
    if (entrada < 0 && entrada % 2 !== 0) {
        console.log('ODD NEGATIVE');
    }
    if (entrada > 0 && entrada % 2 === 0) {
        console.log('EVEN POSITIVE');
    }
    if (entrada > 0 && entrada % 2 !== 0) {
        console.log('ODD POSITIVE');
    }
}