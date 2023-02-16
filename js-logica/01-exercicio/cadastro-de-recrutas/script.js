/* 
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

const person = {
    name: prompt("Insira o seu primeiro nome!"),
    sobrenome: prompt("Insira o seu sobrenome!"),
    campoDeEstudo: prompt("Insira o seu campo de estudo!"),
    anoNascimento: prompt("Insira o seu ano de nascimento!"),
}

const dataAtual = new Date().getFullYear();
const idadeBaseadoNoAnoDeNascimento = dataAtual - person.anoNascimento;

alert(`
Recruta: ${person.name} ${person.sobrenome}
Seu campo de estudo: ${person.campoDeEstudo} 
Sua idade: ${idadeBaseadoNoAnoDeNascimento}
`)