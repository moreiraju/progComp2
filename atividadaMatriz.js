let matriz = [];

//recebendo valores pelo usuário
for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para posição [${i}][${j}]`))
    }
}

let soma = 0, pares = 0


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        //soma de todos os elementos
        soma += matriz[i][j]

        //qtd de números pares
        if (matriz[i][j] % 2 === 0) {
            pares++
        }
    }
}

for (let i = 0; i < 3; i++) {
    console.log(`O número na matriz[${i}][${matriz.length - 1 - i}] é: ${matriz[i][matriz.length - 1 -i]}`);
}
console.log(`A quantidade de números pares é: ${pares}`);