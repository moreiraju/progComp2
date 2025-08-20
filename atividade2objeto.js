let escala = [];
let somaSal = 0;

// Leitura dos dados
for (let i = 0; i < 6; i++) {
    let funcionario = {
        nome: prompt(`Informe o nome do funcionário ${i + 1}:`),
        cargo: prompt(`Informe o cargo do funcionário ${i + 1}:`).toLowerCase(),
        salario: Number(prompt(`Informe o salário do funcionário ${i + 1}:`)),
        tempoServico: Number(prompt(`Informe o tempo de serviço (em anos) do funcionário ${i + 1}:`))
    };
    escala.push(funcionario);


    somaSal += funcionario.salario;
}

let funcionarioMaiorSalario = escala[0];
let gerentes = 0;

for (let i = 0; i < escala.length; i++) {

    
    // Funcionários com salário > 5000 e tempo > 5 anos
    if (escala[i].salario > 5000 && escala[i].tempoServico > 5) {
        console.log(`${escala[i]} tem salário acima de R$ 5.000 e mais de 5 anos de serviço.`);
    }

    // Maior salário
    if (escala[i].salario > funcionarioMaiorSalario.salario) {
        funcionarioMaiorSalario = escala[i];
    }

    // Contagem de gerentes
    if (escala[i].cargo === "gerente") {
        gerentes++;
    }
}

// Cálculo da média salarial
let mediaSalarial = somaSal / escala.length;

console.log(`${funcionarioMaiorSalario.nome} tem o maior salário.`);
console.log(`A média salarial da empresa é R$ ${mediaSalarial}.`);
console.log(`Existem ${gerentes} gerente na empresa.`);
