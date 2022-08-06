const btn = document.getElementById('start');
const results = document.getElementById('result');

btn. addEventListener('click', () => {
    for(let i = 1; i <= 500; i++){
        let li = document.createElement('li');

        if( i%5 == 0){
            li.innerHTML = (`${i} ----------`);
        } else if(i%4 == 0){
            li.innerHTML = (`${i} (Multiplo de 4)`);
        } else if(i%9 == 0){
            li.innerHTML = (`${i} (Multiplo de 9)`)
        }else{
            li.innerHTML = i
        }
        results.setAttribute('style', 'list-style-type: none;');
        results.appendChild(li);
    };
});