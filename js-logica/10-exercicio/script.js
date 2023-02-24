/* 
    Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

    - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
        - Listar vagas disponíveis
        - Criar uma nova vaga
        - Visualizar uma vaga
        - Inscrever um candidato em uma vaga
        - Excluir uma vaga
        - Sair

    - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
    
    - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
    
    - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
    
    - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
    
    - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

    Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

const vagas = [];

let idVaga = 1;
const candidatos = [];
let option = "";
let indice = 0;
const haVagas = vagas.length !== 0;

alert("Bem vindo ao sistema de vagas");

do {
    option = prompt(`Escolha uma das opções abaixo: 
    
    [1] Listar vagas disponíveis
    [2] Criar uma nova vaga
    [3] Visualizar uma vaga
    [4] Inscrever um candidato em uma vaga
    [5] Excluir uma vaga
    [6] Sair
    `)

    switch(option) {
        case "1":
            listarVagas();
        break;
        case "2": 
            cadastrarVaga();
        break;
        case "3": 
            indice = Number(prompt("Insira o indice da vaga que deseja consultar!"));
            visualizarVaga(indice);
        break;
        case "4": 
            cadastrarCandidato();
        break;
        case "5": 
            indice = Number(prompt("Insira o indice da vaga que deseja consultar!"));
            excluirVaga(indice);
        break;
        case "6": 
            alert("Saindo...");
        break;
        default:
            alert("Insira uma opção válida!"); 
        break;
    }
} while(option !== "6")

function cadastrarVaga() {
    const oportunidade = prompt("Qual é o nome da vaga?");
    const descricao = prompt("Qual é a descrição da vaga?");
    const dataLimite = prompt("Qual é a data limite?");
    const confirmarVaga = confirm("Você deseja salvar essa vaga?");

    const vaga = {
        id: idVaga,
        oportunidade,
        descricao,
        dataLimite,
        candidaturas: 0,
        nomes: [],
    }

    if(confirmarVaga) {
        vagas.push(vaga);
        idVaga++
    }
}

function cadastrarCandidato() {
    if(!haVagas) {
        return alert("Não há vagas para se candidatar!");
    }

    const nome = prompt("Qual o seu nome?");
    const oportunidades = vagas.map(vaga => {
        const oportunidade = vaga.oportunidade;
        const id = vaga.id;
        return {oportunidade, id}
    });

    let todasOportunidades = "" 

    oportunidades.forEach(vaga => todasOportunidades += `Oportunidade: ${vaga.oportunidade}\nIndice: ${vaga.id}\n-----\n\n`)

    const indice = Number(prompt(`Selecione uma vaga pelo seu indice!\n${todasOportunidades}`));

    const confirmarCandidatura = confirm("Deseja realmente se inscrever para está vaga?");

    if(confirmarCandidatura) {
        adicionarCandidaturas(vagas, indice, nome);
    }
}

function adicionarCandidaturas(vagas, indice, nome) {
    vagas.filter(vaga => {
        const isVaga = vaga.id === indice
        
        if(isVaga) {
            vaga.candidaturas += 1;
            vaga.nomes.push(nome);
        }
    })

    console.log(vagas);
}

function listarVagas() {
    let oportunidades = "";
    if(!haVagas) {
        return alert("Não há vagas disponiveis, cadastre uma nova vaga!");
    }

    vagas.forEach((vaga, numero) => {
        oportunidades += `Número vaga: ${numero + 1}\nOportunidade: ${vaga.oportunidade}\nCanditados: ${verificarCandidato(vaga)}\nCandidaturas: ${vaga.candidaturas}\n----\n\n` 
    })

    alert("Todos oportunidades ativas no momento: \n\n" + oportunidades);
}

function visualizarVaga(indice) {
    let infoVaga = "";
    
    if(!haVagas) {
        return alert("Cadastre uma nova vaga!");
    }

    const vagaFiltrada = vagas.filter(vaga => {
        const suaVaga = vaga.id === indice;
        
        if(suaVaga) {
            infoVaga = `id: ${vaga.id}\noportunidade: ${vaga.oportunidade}\ndescricao: ${vaga.descricao}\ndataLimite: ${vaga.dataLimite}\ncandidaturas: ${vaga.candidaturas}\nnomes: ${verificarCandidato(vaga)}`
        } 

        return;
    })

    alert(`Informações da vaga: \n\n${infoVaga}`);
}

function verificarCandidato(vaga) {
    return vaga.nomes.length !== 0 ? vaga.nomes.join(", ") : "Sem nomes."
}

function excluirVaga(indice) {
    if(!haVagas) {
        return alert("Não há vagas para excluir!");
    }

    visualizarVaga(indice);

    const excluir = confirm("Deseja excluir está vaga?");

    if(excluir) {
        const filtrar = vagas.filter(vaga => {
            if(vaga.id === indice) {
                return vaga;
            }
        });

        const localizar = vagas.indexOf(filtrar[0]);
        vagas.splice(localizar, 1);
    }
}