Utilizando tentando escrever um pouco de código limpo, refiz algumas partes do meu código para exemplificar.


//TODO

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




