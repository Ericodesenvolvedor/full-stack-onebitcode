/* 
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
*/

const nomeTurista = prompt("Qual é o seu nome?");
let visitou = prompt("Você já visitou alguma cidade? [S/N]").toLowerCase();
let nomeCidade;
let cidades = "";
let cidadesVisitadas = 0; 

while(visitou === "s" || visitou === "sim") {
    nomeCidade = prompt("Qual é o nome da cidade que você visitou?");
    cidades += nomeCidade + ", "
    cidadesVisitadas++
    visitou = prompt("Mais alguma cidade? [S/N]").toLowerCase();
}

if(["n", "nao", "não"].includes(visitou)) {
    alert(
        `
            Cidades visitadas: ${cidadesVisitadas}
            Cidades: ${cidades}
        `
    )
}