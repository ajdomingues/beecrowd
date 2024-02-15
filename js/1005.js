var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const A = Number(lines.shift());
const B = Number(lines.shift());
const media = (A * 3.5 + B * 7.5) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);