function listarNomes(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i].nome)
    }
}
function aumentarSalario(funcionarios) {
    for (let funcionario of funcionarios) {
        funcionario.salario = funcionario.salario * 1.1
    }
}
function cadastroInicial(funcionarios) {
    funcionarios.push({ nome: "Ana", cargo: "Engenheiro de Software Junior", salario: 3000  })
    funcionarios.push({ nome: "Carlos", cargo: "Teach Lead", salario: 5000 })
    funcionarios.push({ nome: "Beatriz", cargo: "PO", salario: 4000 })
}
function cadastrarNovo(funcionarios) {
    funcionarios.push({
        nome: prompt("Digite o nome do novo funcionário:"),
        cargo: prompt("Digite a cargo do novo funcionário:"),
        salario: Number(prompt("Digite o salario do novo funcionário:"))
    });
}
function buscarSalarioNome(funcionario, nomeFuncionario){
    for( let i = 0; i < funcionario.length; i++){
        if(nomeFuncionario == funcionario[i].nome){
            console.log(`O salário do funcionário ${nomeFuncionario} é ${funcionario[i].salario}`)
            return
        }
    }
    alert('funcionário não encontrado')
}
function atualizarCargo(nomeFuncionario, funcionarios){
    for(let i = 0; i < funcionarios.length; i++){
        if(nomeFuncionario == funcionarios[i].nome){
            let novoCargo = prompt(`Digite qual o novo cargo do funcionário: `)
            funcionarios[i].cargo = novoCargo
            alert(`O novo cargo de ${nomeFuncionario} é ${funcionarios[i].cargo}`)
            return
        }
    }
    alert('funcionário não encontrado')
}
function mediaSalarial(funcionarios){
    let soma = 0
    for( let i = 0; i < funcionarios.length; i++){
        soma += funcionarios[i].salario
    }
    let media = soma / funcionarios.length
    console.log(`A média salarial da empresa é de R$ ${media.toFixed(2)}.`)
    for(let i = 0; i < funcionarios.length; i++){
        if (funcionarios[i].salario < media){
            alert(`O funcionário ${funcionarios[i].nome} tem um salario abaixo da média!`)
            funcionarios[i].cargo = "Análista Júnior"
            funcionarios[i].salario = funcionarios[i].salario * 1.1
        }
    }
}
function maiorSalario(funcionarios){
    let maior = funcionarios[0].salario
    let iMaior = 0
    for( let i = 1; i < funcionarios.length; i++){
        if(maior < funcionarios[i].salario){
            maior = funcionarios[i].salario
            iMaior = i
        }
    }
    console.log(`O funcionario ${funcionarios[iMaior].nome} recebe o maior salário de ${maior.toFixed(2)}`)
}
function removefuncionario(funcionarios, nomefuncionario) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (nomefuncionario == funcionarios[i].nome) {
            funcionarios.splice(i, 1)
            alert(`Funcionário ${nomefuncionario} removido com sucesso!`)
            return
        }
    }
    alert('Funcionário não encontrado')
}
function main() {
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do {
        opcao = Number(prompt(`Digite \n1. Criar funcionário \n 2. Listar nomes \n3. Aumentar o salario de todos em 10% \n4. Buscar salário \n5. Atualizar cargo do funcionario \n6. Remover funcionario \n7. Exibir média salarial da empresa \n8. Exibir funcionário de maior salário \n9. Sair`))
        switch (opcao) {
            case 1: cadastrarNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarSalario(vetor); break;
            case 4: let nomeSalario = prompt(`Informe o nome do funcionário para buscar o sálario`)
                buscarSalarioNome(vetor, nomeSalario); break;
            case 5: let nomeCargo = prompt(`Informe o nome do funcionário atualizar o cargo`)
                atualizarCargo(nomeCargo, vetor); break;
            case 6: let nomeRemove = prompt(`Informe nome para remover`)
                removefuncionario(vetor, nomeRemove); break;
            case 7: mediaSalarial(vetor); break;
            case 8: maiorSalario(vetor); break;
            case 9: alert('Programa encerrado'); break;
            default: alert('Opção inválida'); break;
        }
    } while (opcao != 9);
    console.log(vetor)

}
main()