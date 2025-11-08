function alternarNumero(x){
    x = 100;
}

function alterarVetor(v){
    v[0] = 100;
}


function main() {
    let a = 10;
    alternarNumero(a);
    console.log(a)

    let vetor = [10, 20, 30]
    alterarVetor(vetor)
    console.log(vetor)
}

main()