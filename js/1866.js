var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const quantidadeTestes = Number(lines.shift());
for (let i = 0; i < quantidadeTestes; i++) {
    let numeroRepeticoes = Number(lines.shift());
    let soma = 0;
    for (let j = 0; j < numeroRepeticoes; j++) {
        if (j % 2 === 0) {
            soma += 1;
        } else {
            soma -= 1;
        }
    }
    console.log(soma);
}