const btn = document.getElementById('start');

/**
 * This function ask for strings and print them whit a ' - ' for separete the strings. For stop the loop, the user must press cancel buttom.
 */
function start() {
    let strings = [];
    let string = '';

    do {
        string = prompt('Ingrese su texto aqui:');
        strings.push(string)

    } while(string !== null);

    alert(strings.join(' - '));
}

btn.addEventListener('click', start);