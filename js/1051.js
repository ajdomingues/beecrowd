var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const salario = Number(lines.shift());
function calcularImposto(valor) {
    let impostoCalculado = 0
    if (valor >= 0 && valor <= 2000) {
        return `Isento`
    } else if (valor > 2000 && valor <= 3000) {
        impostoCalculado = (valor - 2000) * 0.8
        return `R$ ${(impostoCalculado).toFixed(2)}`
    } else if (valor > 3000 && valor <= 4500) {
        impostoCalculado = (1000 * 0.08) + ((valor - 3000) * 0.18)
        return `R$ ${(impostoCalculado).toFixed(2)}`
    } else {
        impostoCalculado = (1000 * 0.08) + (1500 * 0.18) + ((valor - 4500) * 0.28)
        return `R$ ${(impostoCalculado).toFixed(2)}`
    }
}

console.log(calcularImposto(salario));