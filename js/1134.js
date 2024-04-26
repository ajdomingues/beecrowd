var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let alcool = 0;
let gasolina = 0;
let diesel = 0;
while (true) {
    let opcao = Number(lines.shift())
    if (opcao === 4) break;
    if (opcao > 0 && opcao < 4) {
        switch (opcao) {
            case 1:
                alcool++;
                break;
            case 2:
                gasolina++;
                break;
            case 3:
                diesel++;
                break;
        }
    }
}
console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);