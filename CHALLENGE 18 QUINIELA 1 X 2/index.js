const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    result.innerHTML = '';

    for (let i = 1; i < 15; i++) {
        num = Math.round(Math.random() * 3);
        if (num == 3) {
	    num = 'x';
        }
        let li = document.createElement('li');
        let text = document.createTextNode(`Resultado ${i} : ${num}`);
        li.appendChild(text);
        result.appendChild(li);
        
    }
});