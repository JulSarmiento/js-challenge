const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  let string = prompt('Por favor ingrese una cadena de texto');
  let letters;

  if(!string){
    alert('Por favor ingrese una cadena de texto.');
  } else {
    function reducer (count, letter) {
      //Sumar un valor mas un booleando true (1) suma, si es falso , es como sumar 0
      return count + 'aeiou'.includes(letter)
    }
    letters = Array.from(string.toLowerCase()).reduce(reducer, 0);
    result.innerHTML = `La cadena "${string}", contiene: "${letters}" vocales.`;
  };


});