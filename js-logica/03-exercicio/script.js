/* 
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

*/

alert("Bem vindo ao conversor de medidas, para iniciar, vamos precisar da unidade de medida em metros.");
const metrosComputados = prompt("Insira o valor em metros para realizar possiveis conversões.");
let valorConvertido;
let medida;
let opcao = prompt(
    `
    Escolha uma opção abaixo:
    
    [1] milímetro (mm)
    [2] centímetro (cm)
    [3] decímetro (dm)
    [4] decâmetro (dam)
    [5] hectômetro (hm)
    [6] quilômetro (km)
    `
)

opcao = Number(opcao);


switch(opcao) {
    case 1:
        valorConvertido = metrosComputados * 1000;
        medida = "milímetro";
    break;
    case 2:
        valorConvertido = metrosComputados * 100;
        medida = "centímetro";
    break;
    case 3:
        valorConvertido = metrosComputados * 10;
        medida = "decímetro";
    break;
    case 4:
        valorConvertido = metrosComputados / 10;
        medida = "decâmetro";
    break;
    case 5:
        valorConvertido = metrosComputados / 100;
        medida = "hectômetro";
    break;
    case 6:
        valorConvertido = metrosComputados / 1000;
        medida = "quilômetro";
    break;
    default: 
        valorConvertido = "Opção invalida!";
        medida = "Medida invalida"
    break;
}

alert(`O valor em metros foi: ${metrosComputados}, valor de metros para ${medida} equivale a ${valorConvertido} ${medida}`);