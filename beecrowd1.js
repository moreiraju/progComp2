// Novas atividades do beecrowd

//1168
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let leds = {
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6,
    '0': 6
}

let qtdN = parseInt(lines[0])
for(let i = 1; i <= qtdN; i++){
    let numero = lines[i];
    let soma = 0
    for( let j = 0; j < numero.length; j++){
        soma += leds[numero[j]]
    }
    console.log(`${soma} leds`)
}

//2779
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//n permite novas adicoes caso o elemento for igual a uma ja existente

let completo = parseInt(lines[0])
let pacote = parseInt(lines[1])
let novas = new Set()

for(let i = 2; i <= pacote+1; i++){
    novas.add(lines[i])
}

let faltam = completo - novas.size
console.log(faltam)

//2770
/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;

while( i < lines.length){
    let elemento = lines[i++].split(' ')

    let X = parseInt(elemento[0]);
    let Y = parseInt(elemento[1]);
    let M = parseInt(elemento[2]);

    for( let j = 0; j < M; j++){
        let pedido = lines[i++].split(' ')

        let Xi = parseInt(pedido[0])
        let Yi = parseInt(pedido[1])

        if ((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X) ){
            console.log(`Sim`)
        } else {
            console.log(`Nao`)
        }
    }
}*/

//2770 na forma do daniel
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/); //vai colocar tudo em uma variavel ex: |10|10|3|....

let i = 0
while (i < lines.length) {
    let X = parseInt(lines[i++]) // altura da placa da empresa
    let Y = parseInt(lines[i++]) // largura da placa da empresa
    let P = parseInt(lines[i++]) // quantas placas
    for (let j = 0; j < P; j++) {
        let Xi = parseInt(lines[i++]) // altura da placa do usuário
        let Yi = parseInt(lines[i++]) // largura da placa do usuário
        if ((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)) {
            console.log('Sim')
        }
        else {
            console.log('Nao')
        }
    }
}  

//1179
let par = [];
let impar = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 === 0) {
        par.push(lines[i]);
        if (par.length === 5) { // encheu
            for (let i = 0; i < 5; i++) {
                console.log(`par[${i}] = ${par[i]}`);
            }
            par = []; // esvazia
        }
    } else {
        impar.push(lines[i]);
        if (impar.length === 5) { // encheu
            for (let i = 0; i < 5; i++) {
                console.log(`impar[${i}] = ${impar[i]}`);
            }
            impar = []; // esvazia
        }
    }
}

// Depois da leitura, imprime o que restou
for (let i = 0; i < impar.length; i++) {
    console.log(`impar[${i}] = ${impar[i]}`);
}

for (let i = 0; i < par.length; i++) {
    console.log(`par[${i}] = ${par[i]}`);
}

