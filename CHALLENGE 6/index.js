const btn = document.getElementById('start');

function start() {
    let number = '';
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    do {
        number = prompt('Por favor ingrese su numero de DNI (8 numeros), para salir, pulsa "cancelar":');

        if(isNaN(number)) {
            alert('Por favor solo ingresar numeros');
        } else if( number == '') {
            alert('Por favor ingresa los numeros');
        } else if(!!number && number >= 0 && number <= 99999999) {
           const module = number % 23;
           alert(letters[module]);
        }

    } while(number !== null);
}

btn.addEventListener('click', start);

