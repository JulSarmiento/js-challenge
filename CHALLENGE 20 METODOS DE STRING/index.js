const btn = document.getElementById('start');
const originalString = document.getElementById('original-string');
const modifiedString = document.getElementById('modified-string');

btn.addEventListener('click', () => {
  const string = prompt('Por favor ingrese una cadena de texto.');
  let result = '';
 
  for(let i = 0; i < string.length; i++){
    result += `${string[i]}-`; //Puedes tratar las strings como arrays. Tienen posicion. 
  };

  originalString.innerHTML = `${string}`;
  modifiedString.innerHTML = `${result.slice(0, -1)}`;

});