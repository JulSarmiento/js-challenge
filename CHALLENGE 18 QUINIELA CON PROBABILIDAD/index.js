const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  result.innerHTML = '';

  for (let i = 1; i < 15; i++) {
    let li = document.createElement('li');

    let num = Math.round(Math.random()* 100 + 1);

    if(num <= 60){
      num = 1;
    } else if(num <= 90){
      num = 'x';
    } else {
      num = 2
    };

    const text = document.createTextNode(`Resultado ${i} : ${num}`);

    li.appendChild(text);
    result.appendChild(li);
  
  }
});