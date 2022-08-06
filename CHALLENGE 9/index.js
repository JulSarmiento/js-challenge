const btn = document.getElementById('start');
const results = document.getElementById('results');

btn.addEventListener('click', () => {
    for(let i = 1; i < 31; i++){
        let sum = '';
        for( let j = 0; j < i; j++){
            sum += `${i} `;
        }

        let li = document.createElement('li');
        let text = document.createTextNode(sum)
        li.appendChild(text)
        li.setAttribute('style', 'list-style-type: none;')
        results.append(li);
        
        console.log(sum);
    }
})