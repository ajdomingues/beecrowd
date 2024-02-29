var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const valor = lines[0];
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let notas1 = 0;

let temporario = valor
for (let i = 0; i < valor; i++) {
    if (temporario >= 100) {
        notas100++;
        temporario -= 100;
    }
    else if (temporario >= 50) {
        notas50++;
        temporario -= 50;
    }
    else if (temporario >= 20) {
        notas20++;
        temporario -= 20;
    }
    else if (temporario >= 10) {
        notas10++;
        temporario -= 10;
    }
    else if (temporario >= 5) {
        notas5++;
        temporario -= 5;
    }
    else if (temporario >= 2) {
        notas2++;
        temporario -= 2;
    }
    else if (temporario >= 1) {
        notas1++;
        temporario -= 1;
    }
}
console.log(valor)
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);