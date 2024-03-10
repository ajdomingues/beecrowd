var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = Number(lines.shift());
for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log(`${i}^2 = ${i ** 2}`);
    }
}