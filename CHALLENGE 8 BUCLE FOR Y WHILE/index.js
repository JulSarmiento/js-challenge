const btnFor = document.getElementById('for');
const btnWhile = document.getElementById('while');

ddEventListener('click', () => {
    let numbers = [];
    for(let i = 1; i <= 10; i++){
        console.log(`Vuelta numero: ${i}`);
        numbers.push(i);
    }
    document.getElementById('result-for').innerHTML = numbers.join(' - ');
});

btnWhile.addEventListener('click', () => {
    let numbers = [];
    let number = 0;
    while(number < 10){
        number++;
        numbers.push(number);
        console.log(`Vuelta numero: ${number}`);
    }

    document.getElementById('result-while').innerHTML = numbers.join(' - ');
});