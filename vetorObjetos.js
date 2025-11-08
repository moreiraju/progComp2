function listarNomes(alunos){
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome)
    }
}
function aumentarIdade(alunos){
    for( let aluno of alunos){
        aluno.idade += 1
    }
}
function cadastroInicial(alunos){
    alunos.push({nome: "Ana", idade: 20, curso: "Sistemas de Informacao"})
    alunos.push({ nome: "Carlos", idade: 22, curso: "Ciencia da Computacao" })
    alunos.push({ nome: "Beatriz", idade: 19, curso: "Engenharia de Software" })
}
function cadastrarNovo(alunos) {
    alunos.push({ 
        nome : prompt("Digite o nome do novo aluno:"),
        idade : Number(prompt("Digite a idade do novo aluno:")),
        curso : prompt("Digite o curso do novo aluno:")
    });
}
function removeAluno(alunos, nomeAluno){
    for(let i = 0; i < alunos.length; i++){
        if (nomeAluno == alunos[i].nome){
            alunos.splice(i, 1)
            return
        }
    }
    alert('Aluno não encontrado')
}
function main(){
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do {
        opcao = Number(prompt(`Digite 1. para criar aluno 2. para listar nomes 3. para atualizar idade 4. para remover aluno 5. para sair`))
        switch(opcao){
            case 1: cadastrarNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: let nomeRemove = prompt(`Informe nome para remover`)
                    removeAluno(vetor, nomeRemove); break;
            case 5: alert('Programa encerrado'); break;
            default: alert('Opção inválida'); break;
        }
    } while (opcao != 5);
    console.log(vetor)

}
main()