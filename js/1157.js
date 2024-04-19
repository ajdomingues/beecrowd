var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = Number(lines.shift());
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}