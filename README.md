Utilizando tentando escrever um pouco de código limpo, refiz algumas partes do meu código para exemplificar.


//TODO

// lista 
 let listaDeHerois = [["Mercy", 1000], ["Ana", 2000], ["Moira", 5000], ["Zenyatta", 7000], ["Baptiste", 8000], ["Dva", 9000], ["Lucio", 10000]];
  
// Inicializar variáveis

listaDeHerois.forEach(heroi => {
const nome = heroi[0];
let xp = heroi[1];
let nivel;
  


// Código explicativo para determinar o nível do jogador com base na experiência (xp)//

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2000 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5000 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7000 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8000 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9000 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}
// Fim do código explicativo //

// CÓDIGO LIMPO PARA DETERMINAR O NÍVEL DO JOGADOR COM BASE NA EXPERIÊNCIA (XP) //

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

// EXEMPLIFICANDO CONSOLE.LOG

Console.log("O herói" + nome + "está no nível" + nivel);

console.log(`O herói ${nome} está no nível ${nivel}`);


