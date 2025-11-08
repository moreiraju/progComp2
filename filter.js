/*Enunciado:
Você possui um array com as idades de pessoas em um evento.

let idades = [12, 17, 25, 15, 34, 60, 8];
Tarefa:
Use filter() para criar um novo array apenas com as idades maiores ou iguais a 18 anos (consideradas adultas).

Resultado esperado:

[25, 34, 60] */

let idades = [12, 17, 25, 15, 34, 60, 8];
let idadeMaior = []
let maiorIgual = idades.filter((num) => {
    if (num >= 18) {
        idadeMaior.push(num);
    }
})
console.log(idadeMaior)