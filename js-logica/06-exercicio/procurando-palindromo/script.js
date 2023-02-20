/*
    Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/

alert("Verificador de palindromos");

const palavra = prompt("Insera a palavra para verificar");
let palavraInvertida = "";

for(let contador = palavra.length - 1; contador >= 0; contador--) {
    palavraInvertida += palavra[contador];
}

if(palavra === palavraInvertida) {
    alert("É um palindromo!");
} else {
    alert("Não é um palindromo! palavra invertida = " + palavraInvertida);
}