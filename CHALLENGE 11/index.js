const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    const number = prompt('Por favor ingrese un numero entre 1 y 50:');
    result.innerHTML = '';
    
    if(isNaN(number) || !number){
        alert('Por favor ingrese unicamente numeros.');
    } else if(number <= 0  || number > 50){
        alert('El numero debe ser mayor que 0 y menor que 50. Por favor, vuelva a intentarlo.');
    } else{
        //el primer ciclo inicia en 0, hasta el numero que especifico el usuario.
        for(let i = 0; i <= number; i++){
            let sum = '';
            // el segundo ciclo demarca con que numero va a iniciar cada cadena de numeros. en este caso seria 1, pero si lo cambiaramos por 0 o 2, iniciaria a contar, a partir de ahi. 
            // Conatara hasta que llegue a la vuelta que llego el primer ciclo e ira en cada vuelta, contando uno y otra vez, de acuerdo al numero de la vuelta.
            for(j = 1; j <= i; j++){
                sum += `${j} `;
            }

            let li = document.createElement('li');
            let text = document.createTextNode(sum);
            li.setAttribute('style', 'list-style-type: none;'); 
            li.appendChild(text);
            result.appendChild(li);
    
        }
    }
});