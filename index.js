
// Lista de heróis
let listaDeHerois = [["Mercy", 1000], ["Ana", 2000], ["Moira", 5000], ["Zenyatta", 7000], ["Baptiste", 8000], ["Dva", 9000], ["Lucio", 10000]];

// Inicializar variáveis
listaDeHerois.forEach(heroi => {
const nome = heroi[0];
let xp = heroi[1];
let nivel;

//TODO

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


console.log(`O herói ${nome} está no nível ${nivel}`);
});
