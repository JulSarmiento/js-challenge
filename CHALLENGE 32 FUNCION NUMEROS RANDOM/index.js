const btn = document.getElementById('start');
const result = document.getElementById('result');

function randomNumber(minNumber, maxNumber){
  let number = Math.round(Math.random() * ((maxNumber - minNumber) + minNumber))
  result.innerHTML = `El numero alatearoio es: "${number}".`
}

btn.addEventListener('click', () => {
  result.innerHTML = '';
  randomNumber(1, 100);
});