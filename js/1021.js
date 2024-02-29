var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const valor = lines[0];
let temporario = valor;
let nota100 = Math.floor(temporario / 100);
temporario = temporario % 100;

let nota50 = Math.floor(temporario / 50);
temporario = temporario % 50;

let nota20 = Math.floor(temporario / 20);
temporario = temporario % 20;

let nota10 = Math.floor(temporario / 10);
temporario = temporario % 10

let nota5 = Math.floor(temporario / 5);
temporario = temporario % 5

let nota2 = Math.floor(temporario / 2);
temporario = temporario % 2

let moeda1 = Math.floor(temporario / 1);
temporario = temporario % 1
let moeda050 = Math.floor(temporario / 0.50);
temporario = temporario % 0.50
let moeda025 = Math.floor(temporario / 0.25);
temporario = temporario % 0.25
let moeda010 = Math.floor(temporario / 0.10);
temporario = temporario % 0.10
let moeda005 = Math.floor(temporario / 0.05);
temporario = temporario % 0.05
let moeda001 = temporario / 0.01;
temporario = temporario % 0.01

console.log('NOTAS:');
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${moeda1} moeda(s) de R$ 1.00`);
console.log(`${moeda050} moeda(s) de R$ 0.50`);
console.log(`${moeda025} moeda(s) de R$ 0.25`);
console.log(`${moeda010} moeda(s) de R$ 0.10`);
console.log(`${moeda005} moeda(s) de R$ 0.05`);
console.log(`${moeda001.toFixed(0)} moeda(s) de R$ 0.01`);
