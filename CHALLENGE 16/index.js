const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let i = 0;
    const numbers = [];

    for(; i < 3; i++){
        const number = Math.round(((Math.random()*99)));

        if(!numbers.includes(number)){
            numbers.push(number);
        }
        
    }
    console.log(numbers);
})