/* 
    Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

    - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
    - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
    - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

    Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

const nomeAtaque = "Eric" 
const ataque = 3000;

const nomeDefesa = "Lucas";
const vidaDefesa = 100;
const defesa = 2500;
const possuiEscudo = true;

const danoMaiorSemEscudo = ataque > defesa && !possuiEscudo;
const danoMaiorComEscudo = ataque > defesa && possuiEscudo;
const danoMenorOuIgualDefesa = ataque <= defesa;

if(danoMaiorSemEscudo) {    
    alert("Defesa: " + Number(defesa - ataque));
} else if(danoMaiorComEscudo) {
    alert("Defesa: " + Number(defesa - (ataque / 2)))
} else if(danoMenorOuIgualDefesa) {
    alert("Defesa: " + Number(defesa - 0))
}