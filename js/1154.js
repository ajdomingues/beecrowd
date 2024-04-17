var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let soma = 0;
let contador = 0;

while (true) {
    let idade = Number(lines.shift());
    if (idade > 0) {
        soma += idade;
        contador++;
    } else {
        break;
    }
}
const resultado = (soma / contador).toFixed(2);
console.log(resultado);