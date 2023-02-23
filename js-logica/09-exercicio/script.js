/*
    Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

        - área do triângulo: base * altura / 2
        - área do retângulo: base * altura
        - área do quadrado: lado²
        - área do trapézio: (base maior + base menor) * altura / 2
        - área do círculo: pi * raio² (considere pi = 3.14)

    Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

let opcao = "";

alert("Calculadora de áreas geometricas.");

do {
    let base = ""
    let altura = ""

    opcao = prompt(`Escolha uma opção abaixo: 
    
    [1] Área triângulo
    [2] Área retângulo 
    [3] Área quadrado
    [4] Área trapézio
    [5] Área círculo
    [6] Finalizar
    `)

    switch(opcao) {
        case "1":
            alert("Insira as informações para calcular");
            base = Number(prompt("Qual é a base?"));
            altura = Number(prompt("Qual é a altura?"));
            calcularAreaTriangulo(base, altura);
        break;
        case "2":
            alert("Insira as informações para calcular");
            base = Number(prompt("Qual é a base?"));
            altura = Number(prompt("Qual é a altura?"));
            calcularAreaRetangulo(base, altura);
        break;
        case "3":
            alert("Insira as informações para calcular");
            const lado = Number(prompt("Qual é o lado?"));
            calcularAreaQuadrado(lado);
        break;
        case "4":
            alert("Insira as informações para calcular");
            const baseMaior = Number(prompt("Qual é a base maior?"));
            const baseMenor = Number(prompt("Qual é a base menor?"));
            altura = Number(prompt("Qual é a altura?"));
            calcularAreaTrapezio(baseMenor, baseMaior, altura);
        break;
        case "5":
            alert("Insira as informações para calcular");
            const raio = Number(prompt("Qual é o raio?"));
            calcularAreaCirculo(raio);
        break;
        case "6":
            alert("Saindo...")
        break;
        default:
            alert("Insira uma opção válida!");
        break;
    }

} while(opcao !== "6")

function calcularAreaTriangulo(base, altura) {
    const area = base * altura / 2;
    alert("Area: " + area);
}

function calcularAreaRetangulo(base, altura) {
    const area = base * altura;
    alert("Area: " + area);
}

function calcularAreaQuadrado(lado) {
    const area = lado ** 2;
    alert("Area: " + area);
}

function calcularAreaTrapezio(baseMenor, baseMaior, altura) {
    const area = (baseMaior + baseMenor) * altura / 2;
    alert("Area: " + area);
}

function calcularAreaCirculo(raio) {
    const pi = 3.14;
    const area =  pi * (raio ** 2);
    alert("Area: " + area);
}