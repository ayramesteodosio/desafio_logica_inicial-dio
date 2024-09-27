// Desafio de Projeto 01
// Dev: Ayrames Pereira Teodósio
// Data: 27/09/2024

// Variavéis Nome e Quantidade de XP
let nomeHeroi = ['Rimuru', 'Satoru Gojo', 'Goku', 'Saitama', 'Bakugou']
let quantXP = [1000, 3000, 6000, 7500, 10500]

// Laço de Repetição
for (let i = 0; i < nomeHeroi.length; i++){
    
    //Variavéis
    let nivel;

    // Estrutura de descisão
    if (quantXP[i] <= 1000){
        nivel = "Ferro"
    }
    else if(quantXP[i] >= 1001 && quantXP[i] <= 2000)  {
        nivel = "Bronze"
    }
    else if(quantXP[i] >= 2001 && quantXP[i] <= 5000){
        nivel = "Prata"
    }
    else if(quantXP[i] >= 5001 && quantXP[i] <= 7000){
        nivel = "Ouro"
    }
    else if(quantXP[i] >= 7001 && quantXP[i] <= 8000){
        nivel = "Platina"
    }
    else if(quantXP[i] >= 8001 && quantXP[i] <= 9000){
        nivel = "Ascendente"
    }
    else if(quantXP[i] >= 9001 && quantXP[i] <= 10000){
        nivel = "Imortal"
    }
    else if(quantXP[i] >= 10001){
        nivel = "Radiante"
    }

    //Saída
    console.log('O Herói de nome '+ nomeHeroi[i] +' está no nível de '+ nivel)
}