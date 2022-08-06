const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  let names = [];
  let ages = [];
  let max = -1;
  let maxIndex = -1;

  for(let i = 0; i < 3;){

    const name = prompt('Por favor ingrese su nombre:');

    if(!name || !isNaN(name)){
      alert('Por favor ingrese su nombre');
      
    }else{
      let age = prompt('Por favor ingrese su edad:');

      if(isNaN(age) || !age || age<= 0){
        alert('Por favor ingrese su edad o una edad valida.')
        
      }else{
        age = parseInt(age);
        names.push(name);
        ages.push(age);

        if(age > max){
          maxIndex = i;
          max = age;
        }

        i++
      };

    }  

  };
  console.log(names[maxIndex], max);
  console.log(names, ages)
});