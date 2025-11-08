/*Enunciado:
Você recebeu uma lista com os preços de produtos em dólares. Converta todos os preços para reais, considerando a cotação de R$ 5.00.

let precosUSD = [10, 25.50, 8, 100, 35.25];
Tarefa:
Use map() para criar um novo array com os preços convertidos para reais e exiba o resultado com 2 casas decimais.

Exemplo esperado:

[50.00, 127.50, 40.00, 500.00, 176.25] */
let precosUSD = [10, 25.50, 8, 100, 35.25];

let conversao = precosUSD.map((valor) => {
    return (valor * 5.00).toFixed(2)
})
console.log(conversao)