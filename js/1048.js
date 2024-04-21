var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salario = Number(lines.shift());
let novoSalario = 0;
let reajusteGanho = 0;
let percentual = 0;
switch (true) {
    case salario > 2000:
        percentual = 4;
        novoSalario = salario + (salario * (percentual / 100));
        reajusteGanho = novoSalario - salario;
        break;
    case salario >= 1200.01 && salario <= 2000:
        percentual = 7;
        novoSalario = salario + (salario * (percentual / 100));
        reajusteGanho = novoSalario - salario;
        break;
    case salario >= 800.01 && salario <= 1200:
        percentual = 10;
        novoSalario = salario + (salario * (percentual / 100));
        reajusteGanho = novoSalario - salario;
        break;
    case salario >= 400.01 && salario <= 800:
        percentual = 12;
        novoSalario = salario + (salario * (percentual / 100));
        reajusteGanho = novoSalario - salario;
        break;
    case salario <= 400:
        percentual = 15;
        novoSalario = salario + (salario * (percentual / 100));
        reajusteGanho = novoSalario - salario;
        break;
}

console.log(`Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${reajusteGanho.toFixed(2)}
Em percentual: ${percentual} %`);