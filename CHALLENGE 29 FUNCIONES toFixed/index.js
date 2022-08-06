const btn = document.getElementById('start');
const result = document.getElementById('result');

function showPiNumbers() {
  const numberPi = Math.PI.toFixed(2);
  result.innerHTML = `El numero PI es: "${numberPi}".`
};

btn.addEventListener('click', showPiNumbers);