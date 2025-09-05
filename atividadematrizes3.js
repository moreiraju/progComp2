/**Você deve desenvolver um programa em JavaScript que:
1)Leia os dados de uma matriz 5x5, onde cada elemento representa o índice de poluição registrado em uma 
determinada região (linha) e em um determinado dia (coluna).
2)Os dados devem ser inseridos pelo usuário via prompt(), com validação para aceitar apenas valores entre
 0 e 500 (índices válidos de poluição).
Ao final, o programa deve:
-Exibir todos os valores da diagonal principal e calcular a sua média.
-Exibir todos os valores da diagonal secundária e calcular a sua média.
-Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu.
-Calcular e exibir quantas vezes o índice foi superior a 300 (nível crítico).
-Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias.
 */

//cria vetores e adiciona valores
let regioes = []
let dias = []
for(let i = 0; i < 5; i++){
    regioes.push(prompt(`Informe o nome da região ${i+1}: `))
}
for(let l = 0; l < 5; l++){
    dias.push(Number(prompt(`Informe o dia ${i+1} `)))
}

//cria matriz e adiciona os níveis de poluição
let poluicao = []
for(let i = 0; i < 5; i++){
    poluicao[i] = [] //cria vetor dentro do vetor
    for(let j = 0; j < 5; j++){
        do{
            poluicao[i][j] = prompt(`Informe a polição da região ${regioes[i]} no dia ${dias[j]}`)
        }
        while(poluicao[i][j] < 0 || poluicao[i][j] > 500)
    }
}

//Exibir todos os valores da diagonal principal e calcular a sua média
let somaDP = 0 
for(let i = 0; i < poluicao.length; i++){
    console.log(`Elementos da diagonal principal ${poluicao[i][i]}`)
    somaDP += poluicao[i][i]
}
console.log(`A média da DP é ${somaDP / poluicao.length}`)

//Exibir todos os valores da diagonal secundária e calcular a sua média
let somaDS = 0
for(let i = 0; i < poluicao.length; i++){
    console.log(`Elemento da diagonal secundária ${poluicao[i][4-i]}`)
    somaDS += poluicao[i][4-i]
}
console.log(`A média da DS é ${somaDS / poluicao.length}`)

//Exibir qual região (linha) teve maior índice de poluição registrado e 
//qual dia (coluna) isso ocorreu
let maior = poluicao[0][0]
let iMaior = 0
let jMaior = 0
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        if (poluicao[i][j] > maior){
            maior = poluicao[i][j]
            iMaior = i
            jMaior = j
        }
    }
}
console.log(`O nivel ${maior} ocorreu na região ${regioes[iMaior]} no dia ${dias[jMaior]}`)

//Calcular e exibir quantas vezes o índice foi superior a 300 (nível crítico)
let qtdeNivelCritico = 0
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        if(poluicao[i][j] > 300){
            qtdeNivelCritico++
        }
    }
}
console.log(`Qtde de níveis criticos ${qtdeNivelCritico}`)

//Exibir a região que teve, em media, o menor indice de poluicao ao longo dos 5 dias
let medias = []
let somaLinhas
for(let i = 0; i < poluicao.length; i++){
    somalinhas = 0 // linha nova, temos que zerar a soma
    for(let j = 0; j < poluicao.length; j++){
        somalinhas+= poluicao[i][j]
    }
    //colocar no vetor
    medias[i] = somalinhas / poluicao.length
}

let menor = medias[0]
let posMenor = 0
for(let i=0; i < medias.length; i++){
    if(medias[i] < menor){
        menor = medias[i]
        posMenor = i
    }
}
console.log(`A região com menor média de ${menor} foi ${regioes[posMenor]}`)