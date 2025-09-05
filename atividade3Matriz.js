let matriz = [];

// Entrada de dados com validação
for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        let valor;
        do {
            valor = Number(prompt(`Digite o índice de poluição da região ${i} no dia ${j} (0 a 500):`));
        } while (valor < 0 || valor > 500);
        matriz[i][j] = valor;
    }
}

console.log("Matriz de índices de poluição:");
console.log(matriz);

// Diagonal principal
let diagPrincipal = [];
let somaPrincipal = 0;
for (let i = 0; i < 5; i++) {
    diagPrincipal.push(matriz[i][i]);
    somaPrincipal += matriz[i][i];
}
console.log("Diagonal Principal:", diagPrincipal);
console.log("Média Diagonal Principal:", somaPrincipal / 5);

// Diagonal secundária
let diagSecundaria = [];
let somaSecundaria = 0;
for (let i = 0; i < 5; i++) {
    diagSecundaria.push(matriz[i][4 - i]);
    somaSecundaria += matriz[i][4 - i];
}
console.log("Diagonal Secundária:", diagSecundaria);
console.log("Média Diagonal Secundária:", somaSecundaria / 5);

// Maior índice de poluição
let maior = matriz[0][0];
let posicao = { regiao: 0, dia: 0 };
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
            posicao = { regiao: i, dia: j };
        }
    }
}
console.log(`Maior índice de poluição: ${maior} (Região ${posicao.regiao}, Dia ${posicao.dia})`);

// Quantas vezes índice foi superior a 300 
let critico = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > 300) {
            critico++;
        }
    }
}
console.log(`Quantidade de índices críticos (>300): ${critico}`);

// Região com menor média de poluição
let menorMedia = Infinity;
let regiaoMenor = -1;
for (let i = 0; i < 5; i++) {
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[i][j];
    }
    let media = soma / 5;
    console.log(`Média da Região ${i}: ${media}`);
    if (media < menorMedia) {
        menorMedia = media;
        regiaoMenor = i;
    }
}
console.log(`Região com menor média de poluição: Região ${regiaoMenor} (Média = ${menorMedia})`);
