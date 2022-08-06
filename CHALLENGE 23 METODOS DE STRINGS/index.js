const btn = document.getElementById('start');
const result = document.getElementById('result');
const modifiedResult = document.getElementById('modified-result');

btn.addEventListener('click', () => {
  const string = prompt('Por favor ingrese una cadena de texto.');

  if(string === null) {
    return
  } else if(!string){
    alert('Por favor ingrese una cadena de texto.');
  } else {
    const reversed = Array.from(string).reverse().join('');
    modifiedResult.innerHTML = `La cadena de texto modificada es: "${reversed}".`;
  }

  result.innerHTML = `La cadena original es: "${string}".`;
});