const btn = document.getElementById('start');
const btnTow = document.getElementById('start-two');
const forResult = document.getElementById('for-result');
const whileResult = document.getElementById('while-result');

const fruits = ['Uva Verde Importada', 'Rambutan', 'Mandarina', 'Pomelo', 'Granadilla', 'Uchuva', 'Cereza', 'Sandia', 'Banana', 'Fresa'];
btn.addEventListener('click', () => {
    forResult.innerHTML = '';

    for(let i = 0; i < fruits.length; i++){
        const li = document.createElement('li');
        const content = `Las fruta numero ${i} es: ${fruits[i]}`;
        const text = document.createTextNode(content);
        li.appendChild(text);
        forResult.appendChild(li);
    }

});

btnTow.addEventListener('click', () => {
    whileResult.innerHTML= '';
    let j = 0;
    while(j < fruits.length){
        const li = document.createElement('li');
        const content = `Las fruta numero ${j} es: ${fruits[j]}`;
        const text = document.createTextNode(content);
        li.appendChild(text);
        whileResult.appendChild(li);
        j++
    }

})