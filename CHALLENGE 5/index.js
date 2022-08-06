const btn = document.getElementById('start');

/**
 * This function ask for numbers, validate if they're numbers o nulls, push them in an array for the sum in the result.
 */
function start(){
    let datas = [];
    let data = '';

    do {
        data = prompt('Por favor ingresa los numeros deseados:');
        
        if(isNaN(data) || data == ''){
            alert('Por favor, solo ingresar numeros.');
        } else if(data !== null) {
            datas.push(parseInt(data));
        }

    } while(data !== null);
    
    alert(`La suma de sus numeros fue ${datas.reduce((a , b) => a + b)}.`);
}

btn.addEventListener('click', start);





