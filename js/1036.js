var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [A, B, C] = lines[0].split(' ').map(Number);
const delta = Math.pow(B, 2) - (4 * A * C);
if (delta < 0 || (2 * A) == 0) {
    console.log("Impossivel calcular");
} else {
    const R1 = (-(B) + Math.sqrt(delta, 2)) / (2 * (A));
    const R2 = (-(B) - Math.sqrt(delta, 2)) / (2 * (A));
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}