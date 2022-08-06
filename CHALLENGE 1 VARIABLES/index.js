const btn = document.getElementById('start');

/**
 * This function initiate the process for asking the user's name and lastname, return an alert whit the information. 
 */
function start(){
   let name = prompt('Por favor escribe tu nombre');
   let lastname = prompt('Por favor escribe tu apellido');

   alert(`hello, ${name} ${lastname}`);
   
};


btn.addEventListener('click', start);






