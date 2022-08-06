const btn = document.getElementById('start');
const result = document.getElementById('results');

btn.addEventListener('click', () => {

  const userNumber = parseInt(prompt('Por favor ingrese un numero igual o mayor a 1:'));
  result.innerHTML = '';

  if(isNaN(userNumber) || !userNumber){
    alert('Por favor ingrse un numero.');
  }else if(userNumber <= 0){
    alert('Por favor ingrese un numero igual o mayor a 1.');
  } else{
    for(let i = userNumber; i > 0; i--){
      let rest = '';
      for(let j = 0; j < i; j++){
        rest += `${i} `;
      }

      let li = document.createElement('li');
      let text = document.createTextNode(rest);
      result.appendChild(text),
      li.setAttribute('style', 'list-style-type: none;');
      result.appendChild(li);

      console.log(rest);
      
    };
  }

})