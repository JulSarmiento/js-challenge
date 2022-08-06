const btn = document.getElementById('start');
const result = document.getElementById('result');
const modifiedResult = document.getElementById('modified-result');

function isPalindrome(str) {
  str = str.toLocaleLowerCase();

  const arrayValues = Array.from(str.replace(/\ /g, ''));
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');

  return str === reverseString;
}

btn.addEventListener('click', () => {

  let input = prompt('Por favor ingrese una cadena de texto.');

  if(input === null){
    return;
  } 
  
  if(!input){
    alert('Por favor ingrese una cadena de texto.');
  } else {
    if (!isPalindrome(input)) {
      console.log(`"${input}" no es un palindromo.`)
    } else {
      console.log(`"${input}" es un palindromo.`)
    }  
  }

}); 


