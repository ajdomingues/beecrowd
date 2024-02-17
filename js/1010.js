var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [codPeca_1, quantPeca_1, valorPeca_1] = lines[0].split(' ');
const [codPeca_2, quantPeca_2, valorPeca_2] = lines[1].split(' ');
const somatorio = (quantPeca_1 * valorPeca_1) + (quantPeca_2 * valorPeca_2);
console.log(`VALOR A PAGAR: R$ ${somatorio.toFixed(2)}`);