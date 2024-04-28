var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = Number(lines.shift());
let sequencia = [0, 1];
for (let i = 2; i < numero; i++) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
}
sequencia = sequencia.join(' ');
console.log(sequencia);