function leitura(vet){
    vet.push('João', 'Maria', 'Alisson', 'Marcela', 'Amanda')
}

function exiba(vet){
    for (let i = 0; i < vet.length; i++) {
        vet[i] = vet[i].toUpperCase()
    }
}

function anonimoA(vet){
    for(let i = 0; i < vet.length; i++){
        if (vet[i].slice(0, 1) /* ou vet[i][0] */ == 'A'){
            vet[i] = 'ANÔNIMO'
        }
    }
}

function mostra(vet){
    console.log(vet)
}

function main(){
    let alunos = []
    leitura(alunos)
    exiba(alunos)
    anonimoA(alunos)
    mostra(alunos)
}
main()