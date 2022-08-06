const btn = document.getElementById('start');

/**
 * This function start the cicle for validate if the person can drive or not depending of they're age.
 */
function start() {
    const number = prompt('Por favor ingrese su edad:');

    if(isNaN(number) ||  number <= 0){
        alert(`Lo sentimos pero, '${number}' no es valido.`);
    } else if(number <= 17){
        alert('Aun no puedes conducir.')
    } else if(number > 99) {
        alert('Puedes conducir, pero... Sigues vivo?');
    } else {
        alert('Felicidades, eres una persona en condiciones de conducir');
    };
}

btn.addEventListener('click', start);