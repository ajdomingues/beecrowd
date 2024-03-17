var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let linha = lines.shift().split(' ');
    let x = parseInt(linha.shift());
    let y = parseInt(linha.shift());
    if (x === y) {
        break;
    }

    if (x > y) {
        console.log("Decrescente");
    }
    else {
        console.log("Crescente");
    }
}
