let frase = "Estou estudando JS"

frase //mostra a frase completa

frase[4] //mostra 'u' -> é um vetor de string

frase.length //mostra '18' -> quantidade de vetores da string

frase.toUpperCase() //tudo em caixa alta

frase.toLowerCase() //tudo em caixa baixa

frase.includes('') //verifica se tem o texto que vc deseja achar na string

frase.toUpperCase().includes('js')

frase.slice(0,5) //pega os 5 primeiros caracteres

frase.slice(-5) //pega os ultimos 5


let frase2 = "hoje, pra variar, foi um dia corrido"

frase2.trim()
//'hoje, pra variar, foi um dia corrido'

let aprovados = "joao,jose,pedro,lucas,carlos,rafaela,monica"

let vetApro = aprovados.split(",")

console.log(vetApro)
//(7)['joao', 'jose', 'pedro', 'lucas', 'carlos', 'rafaela', 'monica']
vetApro.length
//7

let palavra = prompt(`Informe as palavras:`)
let limpa= palavra.trim()
let vetor =  limpa.split("")
let invertida = vetor.reverse()
let invertidaString = invertida.join("")

if(invertidaString === limpa){
    alert('São palíndromas')
} else alert('Não são palíndromas')



/*
let palavra = prompt("Informe uma palavra")
// tira os espaços antes e depois
let limpa = palavra.trim()
// cria um vetor da palavra limpa
let vetor = limpa.split("")
// inverte palavra do tipo vetor
let invertida = vetor.reverse()
// converte vetor em string
let invertidaString = invertida.join("")

if (invertidaString === limpa) { // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas')
/*

let palavra = prompt("Informe uma palavra")
let invertida = palavra.trim().split("").reverse().join()

if (palavra.trim() === invertida){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas') */


let raio = parseFloat(lines[0])
let pi = 3.14159
let area = pi * (raio * raio)

console.log(`A=${area.toFixed(2)}`)

/*let A = parseInt(lines[0])
let B = parseInt(lines[1])

let SOMA = A + B
console.log(` SOMA = ${SOMA}`)*/

let fixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])

let comissao = (vendas * 15) / 100
let final = fixo + comissao
console.log(`TOTAL = R$ ${final}`)