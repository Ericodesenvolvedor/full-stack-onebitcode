/* 
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.
*/

let result;

const configuracaoCalculadora = {
    n1: Number(prompt("Insira o primeiro número!")),
    n2: Number(prompt("Insira o segundo número!")),
    operacao: prompt(`
        Escolha uma das opções abaixo: 
        [1] +
        [2] -
        [3] *
        [4] /
    `)
}

switch(configuracaoCalculadora.operacao) {
    case "1": 
        result = configuracaoCalculadora.n1 + configuracaoCalculadora.n2     
    break;
    case "2": 
        result = configuracaoCalculadora.n1 - configuracaoCalculadora.n2     
    break;
    case "3": 
        result = configuracaoCalculadora.n1 * configuracaoCalculadora.n2     
    break;
    case "4": 
        result = configuracaoCalculadora.n1 / configuracaoCalculadora.n2     
    break;
    default:
        alert("Opção não encontrada, tente novamente."); 
    break;
}

const operacoes = {
    "1": "+",
    "2": "-",
    "3": "*",
    "4": "/"
}

alert(`O resultado de ${configuracaoCalculadora.n1} ${operacoes[configuracaoCalculadora.operacao]} ${configuracaoCalculadora.n2} é: ${result}`)