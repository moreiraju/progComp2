const notas = [6, 9, 9.2, 5, 2, 10, 8, 7, 7.4, 10];

let soma = 0;
let aprovados = 0;
let notasPares = [];

notas.forEach(function (nota, indice) { // (nota, indice) => {
    console.log(`A nota do aluno ${indice + 1} é ${nota}`);

    soma += nota;

    if (nota >= 7) {
        aprovados++;
    }

    if (indice % 2 === 0) {
        notasPares.push(nota);
    }
});

const media = soma / notas.length;
console.log(`\nA soma das notas é: ${soma}`);
console.log(`A média das notas é: ${media.toFixed(2)}`);
console.log(`${aprovados} alunos foram aprovados.`);
console.log(`Notas nas posições pares: ${notasPares.join(', ')}`);
