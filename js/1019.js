var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const tempo = Number(lines.shift());
let horas = 0;
let minutos = 0;
let segundos = 0;
let temporario = tempo

function contadorHoras() {
    horas++;
}

function contadorMinutos() {
    minutos++;
}

for (let i = 1; i <= tempo; i++) {
    if (temporario >= 3600) {
        contadorHoras()
        temporario -= 3600;
    }
    if (temporario >= 60) {
        contadorMinutos()
        temporario -= 60;
    }
}
segundos = temporario;

console.log(`${horas}:${minutos}:${segundos}`);