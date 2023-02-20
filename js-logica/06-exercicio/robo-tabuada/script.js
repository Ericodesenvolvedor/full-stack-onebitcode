/*
    Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/

alert("Bem vindo(a) ao robô tabuada!");
const multiplicadorBase = Number(prompt("Insira o número que você deseja saber a tabuada"));
const multiplicadorFinal = Number(prompt("Insira até qual número você deseja saber a multiplicação"));
let tabuada = ""

for(let contador = 1; contador <= multiplicadorFinal; contador++) {
    tabuada += `${multiplicadorBase} x ${contador} = ${multiplicadorBase * contador}\n`
}

alert(tabuada);