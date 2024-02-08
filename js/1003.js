// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');    
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var SOMA = a + b;   
console.log('SOMA = ' + SOMA);