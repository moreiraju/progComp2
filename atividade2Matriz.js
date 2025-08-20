let matriz = [];
let nome = [];

//recebendo valores pelo usuário e aleatório
for (let v = 0; v < 4; v++) {
    //nome do vendedor
    nome[v] = prompt(`Digite o nome do vendedor [${v}]:`)
    matriz[v] = []
    for (let d = 0; d < 7; d++) {
        //valor vendido pelo vendecor no dia
        matriz[v][d] = parseInt(Math.random(0) * 1000)
    }
}

//mostra os valores vendidos e os nomes dos vendedores
console.log(matriz)
console.log(nome)

//cria variável maior
let maior = matriz[0][0];
//salva a posição da variável maior
let posicao = { v: 0, d: 0 };
//cria a variável para somar a média geral
let mediaG = 0;
for (let v = 0; v < 4; v++) {
    //variável para ver o valor vendido por cada vendedor, é zerado assim que muda o vendedor
    let vendaV = 0
    for (let d = 0; d < 7; d++) {
        //soma os valores das vendas de cada vendedor
        vendaV += matriz[v][d]
        //soma todos valores independente de vendedor
        mediaG += matriz[v][d]
        //confere quem é o maior valor e substitui o valor e a posição caso o seja maior que a variável maior
        if (maior < matriz[v][d]) {
            maior = matriz[v][d]
            posicao = { v: v, d: d };
        }
    }
    //Mostra o total do valor das vendas de cada vendedor
    console.log(`Venda por vendedor ${nome[v]}: ${vendaV}`)
}
//Mostra a média geral das vendas
console.log(`Média geral das vendas ${mediaG / (4*7)}`)

//for para mostrar o valor total das vendas por semana
for (let d = 0; d < 7; d++) {
    //variável para armazenar as vendas por coluna/semana
    let vendaC = 0
    for (let v = 0; v < 4; v++) {
        //soma de acordo com a semana/coluna
        vendaC += matriz[v][d]
    }
    //mostra o valor da venda por semana
    console.log(`Venda por semana ${d}: ${vendaC}`)
}


