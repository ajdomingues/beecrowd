var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const senhaCorreta = '2002';
let senhaEntrada = '';
while (true) {
    senhaEntrada = lines.shift();
    if (senhaEntrada == senhaCorreta) {
        console.log('Acesso Permitido');
        break;
    } else {
        console.log('Senha Invalida');
    }
}