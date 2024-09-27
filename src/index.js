// Desafio de Projeto 01
// Dev: Ayrames Pereira Teodósio
// Data: 27/09/2024

// Variavéis Nome e Quantidade de XP
let nomeHeroi = ['Rimuru', 'Satoru Gojo', 'Goku', 'Saitama', 'Bakugou']
let quantXP = [1000, 3000, 6000, 7500, 10500]

// Laço de Repetição
for (let i = 0; i < nomeHeroi.length; i++){
    
    //Variavéis
    let nome = nomeHeroi[i]
    let xp = quantXP[i]
    let nivel;

    // Estrutura de descisão
    if (xp <= 1000){
        nivel = "Ferro"
    }
    else if(xp >= 1001 && xp <= 2000)  {
        nivel = "Bronze"
    }
    else if(xp >= 2001 && xp <= 5000){
        nivel = "Prata"
    }
    else if(xp >= 5001 && xp <= 7000){
        nivel = "Ouro"
    }
    else if(xp >= 7001 && xp <= 8000){
        nivel = "Platina"
    }
    else if(xp >= 8001 && xp <= 9000){
        nivel = "Ascendente"
    }
    else if(xp >= 9001 && xp <= 10000){
        nivel = "Imortal"
    }
    else if(xp >= 10001){
        nivel = "Radiante"
    }

    //Saída
    console.log('O Herói de nome '+ nome +' está no nível de '+ nivel)
}