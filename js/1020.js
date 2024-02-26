var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const valor = Number(lines.shift());
let anos = 0;
let meses = 0;
let dias = 0;
let temporario = valor;

function contarAnos() {
    anos++;
}
function contarMeses() {
    meses++;
}

for (let i = 0; i < valor; i++) {
    if (temporario >= 365) {
        contarAnos();
        temporario -= 365;
    }
    if (temporario >= 30) {
        contarMeses();
        temporario -= 30;
    }
}
dias = temporario

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);