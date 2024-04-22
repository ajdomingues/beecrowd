var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numero = Number(lines.shift());
let mensagem = '';
switch (numero) {
    case 11:
        mensagem = 'Sao Paulo';
        break;
    case 19:
        mensagem = 'Campinas';
        break;
    case 21:
        mensagem = 'Rio de Janeiro';
        break;
    case 27:
        mensagem = 'Vitoria';
        break;
    case 31:
        mensagem = 'Belo Horizonte';
        break;
    case 32:
        mensagem = 'Juiz de Fora';
        break;
    case 61:
        mensagem = 'Brasilia';
        break;
    case 71:
        mensagem = 'Salvador';
        break;
    default:
        mensagem = 'DDD nao cadastrado';
        break;
}
console.log(mensagem);