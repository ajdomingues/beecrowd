var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const valor = lines[0]
for (let i = 1; i <= valor; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
}