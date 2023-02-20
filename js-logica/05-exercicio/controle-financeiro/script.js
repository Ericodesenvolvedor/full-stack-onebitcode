/* 
    Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

alert("Bem vindo(a) ao seu controle financeiro!");

const quantidadeInicial = prompt("Qual é a quantidade inicial de dinheiro disponivel?");
let dinheiroDisponivelParaMovimentar = Number(quantidadeInicial);
let option = "";

do {
    option = prompt(
        `Quantidade disponivel em conta ${dinheiroDisponivelParaMovimentar}

        Escolha uma opção abaixo: 

        [1] Depositar dinheiro
        [2] Sacar Dinheiro
        [3] Encerrar

        `
    )    

    switch(option) {
        case "1":
            const depositar = prompt("Qual é a quantidade que você deseja depositar?");
            dinheiroDisponivelParaMovimentar += Number(depositar);
        break; 
        case "2":
            const sacar = Number(prompt("Qual é a quantidade que você deseja sacar?"));
            dinheiroDisponivelParaMovimentar -= sacar;
        break;
        case "3":
        break;
        default:
            alert("Espertinho, adicione uma opção válida!"); 
        break;
    }

} while(option !== "3")