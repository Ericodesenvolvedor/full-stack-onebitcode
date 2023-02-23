/*
    Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

        - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
        - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
        - O menu deve ter a opção de salvar um imóvel.

        - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
            - Nome do proprietário.
            - Quantidade de quartos.
            - Quantidade de banheiros.
            - Se possui garagem.

        - O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let opcao = "";
let imoveis = [];

do {
    opcao = prompt(`Imoveis cadastrados: ${imoveis.length}

Escolha uma das opções abaixo: 

[1] Cadastrar imovel
[2] Ver imoveis cadastrados
[3] Sair
    `)

    switch(opcao) {
        case "1":
            const imovel = {
                proprietario: prompt("Qual o nome do proprietario?"),
                quantidadeQuartos: prompt("Quantos quartos possui?"),
                quantidadeBanheiros: prompt("Quantos banheiros possui?"),
                possuiGaragem: prompt("Tem garagem disponivel para uso? [sim/nao]"),
            }

            imoveis.push(imovel);
        break;
        case "2":
            let informacoesImoveisCadastrados = ``;

            imoveis.forEach((imovel, numeroImovel) => {
                informacoesImoveisCadastrados += `
Imovel nº ${numeroImovel + 1}: 

Proprietario: ${imovel.proprietario} 
Quartos: ${imovel.quantidadeQuartos}
Banheiros: ${imovel.quantidadeBanheiros}
Garagem: ${imovel.possuiGaragem}

======================================== 

                `
            })

            alert("Imoveis cadastrados: \n\n" + informacoesImoveisCadastrados);
        break;
        case "3":
            alert("Saindo...");
        break;
        default:
            alert("Insira uma opção válida!");
        break;
    }
} while(opcao !== "3");