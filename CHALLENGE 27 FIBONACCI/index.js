const btn = document.getElementById('start');
const result = document.getElementById('result');

/**
 * This function ask for a number to set the fibonnacci's array limit.
 * @returns {number}
 */
function askNumber() {
  result.innerHTML = '';
  let limit = prompt('Por favor ingrese un numero entre el 3 y el 100.');

  if(limit === null){
    return
  }; 
  
  if(isNaN(limit) || !limit || limit < 3){
    alert('Por favor ingrese un numero entre el 3 y el 100.');
    return
  }; 
  
  return parseInt(limit);
}

/**
 * This function 
 * @param {*} value 
 */
function fibonacci(value){
  let fibonaccis = [0, 1];

  for(i = 2; i < value; i++){
    fibonaccis.push(fibonaccis[i - 1] + fibonaccis[i - 2]);
  }

  result.innerHTML = `${fibonaccis.map(number => number = new Intl.NumberFormat().format(number)).join(' - ')}`;

}

btn.addEventListener('click', () => {
  const n = askNumber();
  
  if (n) {
    fibonacci(n);
  }

})