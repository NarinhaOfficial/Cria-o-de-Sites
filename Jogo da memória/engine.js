const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];
// vetor para guardar as cartas
let openCards = [];
// Sortear as cartas
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    // Chama a função criada
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
function handleClick() {
    // Abrir no máx. 2 cartas (0,1)
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        // Pega a carta aberta e coloca no vetor opencards
        openCards.push(this);
    }
    //Verifica se as cartas são iguais
    if (openCards.length == 2) {
        // Chama a função checkMatch para verificar se as cartas são iguais
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
}
function checkMatch() {
    // Verifica se as cartas são iguais
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // Se forem, adiciona a classa boxMatch
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        // Se não, remove elas da classe boxOpen
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    // Depois que verificar, deixar o openCards vazio de novo
    openCards = [];

    // Se a boxMatch estiver com todas as cartas viradas, terminou o jogo
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
}