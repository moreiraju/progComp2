//Criando objetos
let garrafa ={
    nome: "Fresh",
    ml: 800,
    desc: "Pode personalizar",
    preco: 150
};


// Objetos em um vetor
let estoque = [
    {
        nome: "Fresh",
        ml: 800,
        desc: "Pode personalizar",
        preco: 150
    },
    {
        nome: "Daily",
        ml: 500,
        desc: "Com a sua inicial",
        preco: 100
    },
    {
        nome: "Owala",
        ml: 600,
        desc: "Com canudo",
        preco: 120
    }
]

//Mostrando o objeto
console.log(`Preço da garrafa na posição 1: ${estoque[1].preco}`)
console.log(`Ml das garrafas:`)
for(let i = 0; i < estoque.length; i++){
    console.log(`${estoque[i].ml}`)
}


//Usuário informando os objetos
let armazem = []

for (let i = 0; i < 3; i++){
    let nome = prompt(`Informe o nome da garrafa ${i + 1}:`);
    let ml = prompt(`Informe a capacidade em ml da garrafa ${i + 1}:`);
    let desc = prompt(`Informe a descrição da garrafa ${i + 1}:`);
    let preco = prompt(`Informe o preço da garrafa ${i + 1}:`);

    let garrafa = {
        nome: nome,
        ml: ml,
        desc: desc,
        preco: preco
    };
    armazem.push(garrafa);
}
