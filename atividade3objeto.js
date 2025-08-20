let projetos = [];

for(let i = 0; i < 7; i++){
    let objeto = {
        nome: prompt(`Informe o nome do projeto ${i + 1}:`),
        empresa: prompt(`Informe a empresa ${i + 1}:`).toLowerCase(),
        duracao: Number(prompt(`Informe duração em meses ${i + 1}:`)),
        orcamento: Number(prompt(`Informe o orçamento do projeto ${i + 1}:`))
    };
    projetos.push(objeto);
}

maior = projetos[0].orcamento;
nomeMaior = projetos[0].nome;
media = 0;
projetosInova = 0;
somaOrcamento6 = 0;

for(let i = 0; i < 7; i++){

    //Projetos com duracao superior a 12 meses e orcamento acima de 1000000
    if(projetos[i].duracao > 12 && projetos[i].orcamento > 1000000){
        console.log(`${projetos[i].nome} tem duração superior a 12 meses e orçamento acima de R$ 1.000.000,00.`)
    }

    //Nome do projeto com o maior orçamento.
    if(maior < projetos[i].orcamento){
       maior = projetos[i].orcamento
       nomeMaior = projetos[i].nome
    }

    //Calcular e exibir a média de duração dos projetos.
    media = media + projetos[i].duracao

    //Quantos projetos foram realizados pela empresa "InovaTech"
    if(projetos[i].empresa === "inovatech"){
        projetosInova++
    }

    //Total gasto (soma de orçamento) apenas com os projetos que têm menos de 6 meses de duração.
    if(projetos[i].duracao < 6){
        somaOrcamento6 += projetos[i].orcamento
    }

}

media = media / projetos.length;

console.log(`O nome do projeto com o maior orçamento é o ${nomeMaior}.`);
console.log(`A média de duração dos projetos é ${media}.`);
console.log(`${projetosInova} foram realizados pela InovaTech.`);
console.log(`O total de gastos dos projetos com menos de 6 meses de duração foi ${somaOrcamento6}.`);
