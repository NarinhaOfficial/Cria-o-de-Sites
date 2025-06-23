// criamos a constate pianokys para pegar todas as teclas da classe piano-keys e que tenha key
const pianoKeys = document.querySelectorAll(".piano-keys .key");
// Pegamos a classe volume-slider e o input dentro dela
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
// Colocando o áudio
let audio = new Audio("src/tunes/a.wav");
// Pegando todos os áudios da pasta tunes
const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
  // Aqui ele pega todos elementos do html que tenham o atributo data-key igual a key
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});
// pega as teclas do teclado e adiciona o evento de pressionar a tecla
// e chama a função playTune passando a tecla pressionada
document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});
// e.target.value pega o valor do input volume-slider
// e atribui ao volume do áudio
// assim o volume do áudio é controlado pelo input
const handleVolume = (e) => {
  audio.volume = e.target.value;
};
// Para esconder ou mostrar as teclas
// a função showHideKeys percorre todas as teclas e adiciona ou remove a classe
// hide, que esconde as teclas
// a classe hide tem display: none no css
// e o evento click do input keysCheck chama a função showHideKeys
// para esconder ou mostrar as teclas
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
