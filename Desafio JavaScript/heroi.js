// **O Que deve ser utilizado**
// - Operadores
// - Laços de repetição
const nome = "Mário";
let xp = 1;

do {
    if (xp < 1000) {
        console.log(`O herói de nome ${nome} está no nível de ferro`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=1000
    }
    else if (xp > 1000 && xp <= 2000){
        console.log(`O herói de nome ${nome} está no nível de Bronze`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=2000
    }
    else if (xp > 2000 && xp <= 5000){
        console.log(`O herói de nome ${nome} está no nível de Prata`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=2000
    }
    else if (xp > 5000 && xp <= 7000){
        console.log(`O herói de nome ${nome} está no nível de Ouro`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=2000
    }
    else if (xp > 7000 && xp <= 8000){
        console.log(`O herói de nome ${nome} está no nível de Platina`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=1000
    }
    else if (xp > 8000 && xp <= 9000){
        console.log(`O herói de nome ${nome} está no nível de Ascendente`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=1000
    }
    else if (xp > 9000 && xp <= 10000){
        console.log(`O herói de nome ${nome} está no nível de Imortal`);
        console.log(`Parabéns! Você passou pra próxima fase!`);
        console.log(`\n\n`);
        xp+=1000
    }
    else {
        console.log(`O herói de nome ${nome} está no nível de Radiante`);
        console.log(`Parabéns! Você zerou o jogo!`);
        xp+=2
    }
    
} while (xp<=10002);