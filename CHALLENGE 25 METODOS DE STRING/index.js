const btn = document.getElementById('start');
const result = document.getElementById('result');
const modifiedResult = document.getElementById('modified-result');

function validateVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return Array.from(str).find((value) => vowels.includes(value.toLowerCase()))
}

btn.addEventListener('click', () =>{
  const text = prompt('Por favor ingrese una cadena de texto.');

  if(text === null){
    return
  };

  if(!text){
    alert('Por favor ingrese una cadena de texto.');
  } else{
    const vowel = validateVowel(text);
    console.log(`La primera voca es: ${vowel}`);

  };

});