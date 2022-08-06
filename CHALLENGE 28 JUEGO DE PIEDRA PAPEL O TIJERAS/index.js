const btn = document.getElementById('start');
const userSelect = document.getElementById('users-selection');
const pcSelection = document.getElementById('pc-selection');
const result = document.getElementById('result');

function startGame() {
  userSelect.innerHTML = '';
  const userChoice = prompt('Por favor escriba su jugada (Piedra - Papel - Tijera).');
  const gameOptions = ['piedra', 'tijera', 'papel'];

  if(userChoice === null) {
    return;
  }

  if(!gameOptions.includes(userChoice.toLocaleLowerCase()) || !userChoice){
    alert('Por favor ingrese una opcion valida (piedra, papel o tijera)');
    return;
  } 

  userSelect.innerHTML = `El usuario selecciono: "${userChoice}".`;
  return userChoice.toLocaleLowerCase();
}

function continueGame() {
  let randomNumber = Math.round(Math.random()* 3)
    
  if(randomNumber === 1){
    randomNumber = 'papel';
  } else if(randomNumber === 2){
    randomNumber = 'tijera'
  } else{
    randomNumber = 'piedra'
  }

  pcSelection.innerHTML = `La maquina selecciono: "${randomNumber}".`;
  return randomNumber;
}

function game(user, pc){
  result.innerHTML = '';
  if(user === pc){
    result.innerHTML = 'Juego empatado.';
    setTimeout(initGame, 2000);
  } else if(user === 'tijera' && pc === 'papel'){
    result.innerHTML = 'Ganaste!';
  } else if(user === ' papel' && pc === 'piedra'){
    result.innerHTML = 'Ganaste!';
  } else if(user === 'piedra' && pc === 'tijera'){
    result.innerHTML = 'Ganaste!'
  } else {
    result.innerHTML = 'Perdiste :c';
  }
  
}

function initGame(){
  let usersOption = startGame();
  let pcOption = continueGame();
  game(usersOption, pcOption);
}

btn.addEventListener('click', initGame);