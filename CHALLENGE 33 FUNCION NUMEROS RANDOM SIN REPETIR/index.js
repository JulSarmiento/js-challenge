const btn = document.getElementById('start');
const result = document.getElementById('result');


/**
 * This function calculate 100 unique random numbers and push them in an array
 * @returns  an array 
 */
function randomNumber() {
  const numbers = [];

  do{
    const number = Math.round(Math.random() * (1000 - 1) + 1);
    
    if(!numbers.includes(number)){
      numbers.push(number);
    } 

  } while(numbers.length !== 100)

  return numbers
}

btn.addEventListener('click', () => {
  const numbersArray = randomNumber();
  result.innerHTML = numbersArray.join(' - ');
})





