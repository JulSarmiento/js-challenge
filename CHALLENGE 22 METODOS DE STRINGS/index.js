const btn = document.getElementById('start');
const result = document.getElementById('result');
const resultModified = document.getElementById('modified-result');

btn.addEventListener('click', () => {
  const string = prompt('Por favor ingrese una cadena texto que contenta parentesis');

  if(string === null){
    return;
  };

  if(!string){
    alert('Por favor ingrese una cadena texto.');
  } else{
    const lastParentesis = string.indexOf(")") ;
    const firsParentesis = string.indexOf("(")+1 ;
    if(string.includes('(') && string.includes(')')){
      resultModified.innerHTML = `El mensaje entre parentesis es: ${string.slice(firsParentesis, lastParentesis)}.`
    } else if(string.includes('(')){
      resultModified.innerHTML = `El mensaje entre parentesis es: "${string.slice(firsParentesis)}."`
    }
  }
  result.innerHTML = `${string}.`;


});