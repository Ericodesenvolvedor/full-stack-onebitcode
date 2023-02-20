/* 
    Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let option = ""

do {
    option = prompt(`
        Escolha uma opção abaixo: 

        [1] Comprar chip Tim
        [2] Comprar chip Oi
        [3] Comprar chip Vivo
        [4] Comprar chip Claro
        [5] Encerrar
    `)

    switch(option) {
        case "1":
            alert("Você comprou o chip da tim");
        break;
        case "2":
            alert("Você comprou o chip da oi");
        break;
        case "3":
            alert("Você comprou o chip da vivo");
        break;
        case "4":
            alert("Você comprou o chip da claro");
        break;
        case "5":
        break;
        default: 
            alert("Espertinho, tente adicionar uma opção válida!");
        break;
    }

} while(option !== "5");