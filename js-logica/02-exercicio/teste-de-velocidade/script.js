/* 
    Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

const nome = prompt("Qual é o seu nome?");
const velocidadeVeiculo1 = prompt("Qual é a velocidade do veiculo 1?");
const velocidadeVeiculo2 = prompt("Qual é a velocidade do veiculo 2?");

if(velocidadeVeiculo1 > velocidadeVeiculo2) {
    alert("Veiculo 1 é mais rápido!");
} else if(velocidadeVeiculo2 > velocidadeVeiculo1) {
    alert("Veiculo 2 é mais rápido!");
} else {
    alert("Ambos tem a mesma velocidade!")
}