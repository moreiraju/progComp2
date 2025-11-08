/*Operacoes matemáticas:
funcao mostrarDobro(x) que mostra na tela o dobro de um número
crie funcao x que retorna o quadrado de um numero
no main peca ao usuario que digite um numero inteiro
chame as duas funcoes */

function mostrarDobro(numero){
    console.log(numero * 2)
}

function quadrado(numero) {
    return numero * numero
}

function main() {
    let n
    n = parseInt(prompt(`Informe um número inteiro: `))

    mostrarDobro(n)
    console.log(`Quadrado do número é: ${Quadrado(n)}`)
}
main()