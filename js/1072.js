var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const quantidadeValores = Number(lines.shift());
let valores = Number(lines.shift());
let valoresIn = 0;
let valoresOut = 0;
for (let i = 0; i < quantidadeValores; i++) {
    if (valores >= 10 && valores <= 20) {
        valoresIn++;
    } else {
        valoresOut++;
    }
    valores = lines.shift();
}
console.log(`${valoresIn} in`);
console.log(`${valoresOut} out`);