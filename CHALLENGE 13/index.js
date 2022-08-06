const btn = document.getElementById('start');
const result = document.getElementById('results');

btn.addEventListener('click', () => {
  const row = prompt('Por favor ingrese el numero de filas:');
  const columms = prompt('Por favor ingrese el numero de columnas:');
  result.innerHTML = '';
  let total = row * columms;
  
  if(isNaN(row) || !row && isNaN(columms) || !columms){
    alert('Por favor ingrese unicamente numeros.');
  } else if(row <= 0 && columms <= 0){
    alert('Por favor ingrese numeros validos.')
  }else{
    for(let i = columms; i > 0 ; i--){
      const tr = document.createElement('tr');
      
      for(let j = row; j > 0; j--){
        const td = document.createElement('td');
        let textColum = document.createTextNode(total--);
        td.appendChild(textColum);
        tr.appendChild(td);
        result.appendChild(tr);
      }
    }
  }
})

