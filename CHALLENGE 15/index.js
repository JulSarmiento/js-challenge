const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () =>{
    const number = Math.round((Math.random()*99)+1);
    result.innerHTML = `Su numero aleatorio es ' ${number} '.`;
})