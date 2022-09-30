String.prototype.replaceAt = function (index, character) {
  return (
    this.substring(0, index) +
    character +
    this.substring(index + character.length)
  );
}
//Uso: wordWhitHyphen =wordWhitHyphen.replaceAt(i*2, letter);

const words = [
  "VIAJE",
  "ABUDABI",
  "VACACIONES",
  "PENA",
  "SANCIONES",
  "MUJERIEGO",
  "CUBO",
  "CANCIONES",
  "AUTORIDAD",
  "EXFOLIACION",
];

const word = words[Math.floor(Math.random() * words.length)];

let wordWhitHyphen = word.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector('#output').innerHTML = wordWhitHyphen;
document.querySelector('#comprobar').addEventListener('click', () => {
  const letter = document.querySelector('#letter').value;
  let haFallado = true;
  
  for (const i in word) {
    if (letter == word[i]) {
      wordWhitHyphen = wordWhitHyphen.replaceAt(i * 2, letter);
      haFallado = false;
    }
  }
  if (haFallado) {
    contadorFallos++;
    document.querySelector('#ahorcado').style.backgroundPosition =
      -(205*contadorFallos) + 'px 0';
    if (contadorFallos == 5) {
      alert("Has perdido..");
    }
  } else {
    if (wordWhitHyphen.indexOf('_') < 0) {
      alert('¡¡Felicitaciones, Has ganado!!')
    }
  }
  document.querySelector('#output').innerHTML = wordWhitHyphen;

  document.querySelector('#letter').value = "";

  document.querySelector('#letter').focus();
});
