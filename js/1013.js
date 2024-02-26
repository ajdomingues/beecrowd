var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [a, b, c] = lines[0].split(' ').map(Number);
const maior = (a + b + Math.abs(a - b)) / 2;
const maiorABC = (maior + c + Math.abs(maior - c)) / 2;
console.log(`${maiorABC} eh o maior`);