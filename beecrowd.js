//1000
console.log(`Hello World!`)

//1001
/*
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

var X = A + B;

console.log(`X = ${X}`);
*/

//1002
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var raio = parseFloat(lines[0]);

const pi = 3.14159;

var area = pi * (raio * raio);

console.log(`A=${area.toFixed(4)}`);

//1003
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);
*/

//1004
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let v1 = parseInt(lines[0]);
let v2 = parseInt(lines[1]);

let PROD = v1 * v2;

console.log(`PROD = ${PROD}`)

//1005
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

let media = ((A * 3.5) + (B * 7.5)) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)
*/

//1006
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

media = ((A * 2) + (B * 3) + (C *5)) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)
*/

//1007
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

let DIFERENCA = (A * B - C * D)

console.log(`DIFERENCA = ${DIFERENCA}`)


//1008
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines[0])
let horas = parseInt(lines[1])
let valor = parseFloat(lines[2])

let salario = horas * valor

console.log(`NUMBER = ${num}\nSALARY = U$ ${salario.toFixed(2)}`)


//1009
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let fixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])

let salarioF = fixo + (vendas * 0.15)

console.log(`TOTAL = R$ ${salarioF.toFixed(2)}`)


//1010
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores1 = lines[0].split(' ');
let valores2 = lines[1].split(' ');

let c1 = parseInt(valores1[0]);
let n1 = parseInt(valores1[1]);
let v1 = parseFloat(valores1[2]);

let c2 = parseInt(valores2[0]);
let n2 = parseInt(valores2[1]);
let v2 = parseFloat(valores2[2]);

let total = (n1 * v1) + (n2 * v2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
*/


//1168
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let n = parseInt(lines[0]);

let leds = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
};

for (let i = 1; i <= n; i++) {
    let numero = lines[i].trim();
    let total = 0;

    for (let j = 0; j < numero.length; j++) {
        total += leds[numero[j]];
    }

    console.log(total + " leds");
}
