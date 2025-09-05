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


