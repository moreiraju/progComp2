let biblioteca = [];
let somaPaginas = 0;

// Leitura dos dados
for (let i = 0; i < 5; i++) {
    let titulo = prompt(`Informe o título do livro ${i + 1}:`);
    let autor = prompt(`Informe o autor do livro ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano de publicação do livro ${i + 1}:`));
    let pag = Number(prompt(`Informe a quantidade de páginas do livro ${i + 1}:`));

    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        pag: pag
    };

    biblioteca.push(livro);
    somaPaginas += pag;
}

// 1. Livros com mais de 300 páginas
console.log("Livros com mais de 300 páginas:");
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].pag > 300) {
        console.log(`${biblioteca[i].titulo} - ${biblioteca[i].pag} páginas`);
    }
}

// 2. Livro com maior número de páginas
let livroMaisPaginas = biblioteca[0];
for (let i = 1; i < biblioteca.length; i++) {
    if (biblioteca[i].pag > livroMaisPaginas.pag) {
        livroMaisPaginas = biblioteca[i];
    }
}
console.log(`\nO livro com mais páginas é: "${livroMaisPaginas.titulo}" com ${livroMaisPaginas.pag} páginas.`);

// 3. Média de páginas
let mediaPaginas = somaPaginas / biblioteca.length;
console.log(`\nMédia de páginas dos livros: ${mediaPaginas.toFixed(2)}`);
