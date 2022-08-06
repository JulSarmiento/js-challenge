const btn = document.getElementById('start');
const originalString = document.getElementById('original-string');
const modifiedString = document.getElementById('modified-string');

btn.addEventListener('click', () => {
  originalString.innerHTML = '';
  modifiedString.innerHTML = '';
  let string = prompt('Por favor ingrese una cadena de texto.');

  if(!string){
    alert('Por favor escribir una cadena de texto.');
  } else {
    originalString.innerHTML = `"${string}"`;
    modifiedString.innerHTML = `"${string.toUpperCase()}"`
    ;
    
  }
})