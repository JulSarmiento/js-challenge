const btn = document.getElementById('start');

function start(){
    const grade = prompt('Por favor ingrese la calificacion:');

    if(isNaN(grade) || grade === '' || grade >= 11){
        alert(`Lo sentimos pero, '${grade}' no es valido.`)
    } else if( grade <= 3){
        alert('Su calificacion es "Muy deficiente".')
    } else if( grade <= 5){
        alert('Su calificacion es "Insuficiente".')
    } else if( grade <= 6){
        alert('Su calificacion es "Suficiente. ')
    } else if( grade <= 7){
        alert('Su calificacion es "Bien". ')
    } else if( grade <= 9){
        alert('Su calificacion es "Notable" ')
    } else {
        alert('Su calificacion es "Sobresaliente". ')
    }
};

btn.addEventListener('click', start);