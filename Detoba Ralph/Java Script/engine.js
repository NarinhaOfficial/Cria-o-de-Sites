const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: setInterval(randomSquare, 1000),
        hitPosition: 0,
        result: 0,
        // Definindo o tempo
        tempo: 10,
        atualTempo: setInterval(decrementarTempo, 1000),
    },
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        })

    });
}

// Função para decrementar o tempo
function decrementarTempo() {
    state.values.tempo--;
    state.view.timeLeft.textContent = state.values.tempo;
    if (state.values.tempo <= 0) {
        clearInterval(state.values.atualTempo);
        clearInterval(state.values.timerId);
        alert("Game over! Sua pontuação foi: " + state.values.result);
    }
}
//Função para colocar áudio
function playSound() {
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

function init() {
    addListenerHitBox();
}
init();