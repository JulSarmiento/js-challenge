const btn = document.getElementById('start');
const result = document.getElementById('result');
const modifiedResult = document.getElementById('modifed-result');

function askString() {
  const text = prompt('Por favor ingrese un texto.')
  result.innerHTML = `"${text}"`;
  return text;

};

function modfiedText(string){
  modifiedResult.innerHTML = `"${Array.from(string).reverse().join('')}"`;
}

btn.addEventListener('click', () => {
  result.innerHTML = '';
  modifiedResult.innerHTML = '';

  let string = askString();
  
  if(!string){
    return
  }

  modfiedText(string);
});