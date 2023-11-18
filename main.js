document.addEventListener('DOMContentLoaded', function() {

  const hole1 = document.getElementById('1');
  const hole2 = document.getElementById('2');
  const hole3 = document.getElementById('3');
  const hole4 = document.getElementById('4');
  const hole5 = document.getElementById('5');
  const display = document.querySelector('.display');

let moleLocation = undefined;
let molesHit = 0;



hole1.addEventListener('click', function() {

  if (moleLocation === 1) {
    molesHit++;
    moleLocation = undefined;
    setHoleColor();
    display.innerHTML = `Moles Hit: ${molesHit}`;
  }

});
  
hole2.addEventListener('click', function() {

  if (moleLocation === 2) {
    molesHit++;
    moleLocation = undefined;
    setHoleColor();
    display.innerHTML = `Moles Hit: ${molesHit}`;
  }

});

hole3.addEventListener('click', function() {

  if (moleLocation === 3) {
    molesHit++;
    moleLocation = undefined;
    setHoleColor();
    display.innerHTML = `Moles Hit: ${molesHit}`;
  }

});

hole4.addEventListener('click', function() {

  if (moleLocation === 4) {
    molesHit++;
    moleLocation = undefined;
    setHoleColor();
    display.innerHTML = `Moles Hit: ${molesHit}`;
  }

});

hole5.addEventListener('click', function() {

  if (moleLocation === 5) {
    molesHit++;
    moleLocation = undefined;
    setHoleColor();
    display.innerHTML = `Moles Hit: ${molesHit}`;
  }

});



function setMoleLocation(){
  const rand = Math.random();
  if(rand < 0.2){
    moleLocation = 1;
  }else if(rand < 0.4){
    moleLocation = 2;
  }else if(rand < 0.7){
    moleLocation = 3;
  }else if(rand < 0.8){
    moleLocation = 4;
  }else if(rand < 1.01){
    moleLocation = 5;
  }
  setHoleColor();
}

function setHoleColor(){
  if(moleLocation == 1){
    hole1.style = 'background-color: black;'
  }else{
    hole1.style = 'background-color: green;'
  }
  if(moleLocation == 2){
    hole2.style = 'background-color: black;'
  }else{
    hole2.style = 'background-color: green;'
  }
  if(moleLocation == 3){
    hole3.style = 'background-color: black;'
  }else{
    hole3.style = 'background-color: green;'
  }
  if(moleLocation == 4){
    hole4.style = 'background-color: black;'
  }else{
    hole4.style = 'background-color: green;'
  }
  if(moleLocation == 5){
    hole5.style = 'background-color: black;'
  }else{
    hole5.style = 'background-color: green;'
  }
}

function gameLoop() {
  const randTime = (Math.random() * Math.random()) * 10000;
  console.log(randTime);

  setTimeout(function () {
    setMoleLocation();
    console.log(moleLocation);
    gameLoop();
  }, randTime);
}


gameLoop();


});