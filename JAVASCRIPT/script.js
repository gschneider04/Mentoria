
/* DESAFIO 1 */

let pessoa = {}

pessoa = {
    nome: "Gustavo",
    idade: 19,
    endereço: {
        rua: "Rua Intendente",
        numero: 555,
        cidade: "Montenegro",
    }
}

/* DESAFIO 2 */

let user = {
    nome: "Gustavo",
    idade: 19,
    cidade: "Montenegro",
}

function returnUserName(obj){
    let X = obj.nome + ' ' + obj.idade
    console.log(X)
    return X
}
returnUserName(user)





/* DESAFIO 3 */

let aluno1 = {
    nome: "Gustavo",
    nota: 8,
}

let aluno2 = {
    nome: "Gabriel",
    nota: 7,
}

let aluno3 = {
    nome: "Cristopher",
    nota: 9,
}

let aluno4 = {
    nome:"Lucas",
    nota: 10,
}

let SomaNotas = aluno1.nota + aluno2.nota + aluno3.nota + aluno4.nota;

const QuantidadeDeAlunos = 4;

console.log(SomaNotas / QuantidadeDeAlunos)



/* DESAFIO 4 */

let n = (10); /* ADICIONAR QUALQUER NUMERO DENTRO DOS () */
let resto = n % 2;

/* if (resto == 0) {
    console.log(true);
} else {
    console.log(false);
}

let numero = 10
let numero1 = 5 */

function IdentificarParOuImpar (number){
    if (resto == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
IdentificarParOuImpar (n)

/* DESAFIO 5 */

let tempCelsius = 18

function CalculateCelsius (Celsius){

let formula = (Celsius * 9/5) + 32
console.log(formula)
}

CalculateCelsius (tempCelsius)

/* DESAFIO 6 */

let alturaRetangulo = 25
let larguraRetangulo = 10

function CalculoArea (altura, largura){
    console.log(altura * largura)
}
CalculoArea(alturaRetangulo, larguraRetangulo)


/* DESAFIO 7 */

let precoDoProduto = 300
let desconto = 10

function PrecoComDesconto (price, descount){
    let valorDoDesconto = preco * descount / 100
    let PrecoAPagar = preco - valorDoDesconto
    let ValorTotalDeDesconto = valorDoDesconto

    console.log(`o Preço final do produto, já com Desconto aplicado ficou em R$ ${PrecoAPagar}`)
    console.log(preco)

    ValorTotalDeDesconto === valorDoDesconto ? console.log(`O valor do desconto é R$ ${ValorTotalDeDesconto}`) : console.log("error");
}

PrecoComDesconto(213, 19)