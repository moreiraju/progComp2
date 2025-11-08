/*
Enunciado:
Você tem um array com os valores de vendas de uma loja em um dia:

let vendas = [150, 300, 50, 450, 100];
Tarefa:
Use reduce() para calcular o total das vendas do dia.

Resultado esperado:

1050 */
let vendas = [150, 300, 50, 450, 100];
let total = vendas.reduce((acc, num) => acc + num, 0);
console.log(total)