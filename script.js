// 1º - Input do texto do meme
const inputText = document.querySelector('#text-input');
inputText.addEventListener('input', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = inputText.value;
});

// 2º Input da imagem do meme
const inputImage = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
inputImage.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(inputImage.files[0]);
});

// 6º - Alterando a borda do meme
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

fire.addEventListener('click', () => {
  container.classList.add('fire');
  container.classList.remove('water');
  container.classList.remove('earth');
});

water.addEventListener('click', () => {
  container.classList.remove('fire');
  container.classList.add('water');
  container.classList.remove('earth');
});

earth.addEventListener('click', () => {
  container.classList.remove('fire');
  container.classList.remove('water');
  container.classList.add('earth');
});

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', () => {
  memeImage.src = meme1.src;
});

meme2.addEventListener('click', () => {
  memeImage.src = meme2.src;
});

meme3.addEventListener('click', () => {
  memeImage.src = meme3.src;
});

meme4.addEventListener('click', () => {
  memeImage.src = meme4.src;
});
