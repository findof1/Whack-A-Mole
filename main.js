document.addEventListener('DOMContentLoaded', function() {

  const hole1 = document.getElementById('1');
  const hole2 = document.getElementById('2');
  const hole3 = document.getElementById('3');
  const hole4 = document.getElementById('4');
  const hole5 = document.getElementById('5');
  const hole1Inside = document.getElementById('1in');
  const hole2Inside = document.getElementById('2in');
  const hole3Inside = document.getElementById('3in');
  const hole4Inside = document.getElementById('4in');
  const hole5Inside = document.getElementById('5in');
  const hole1Mole = document.getElementById('1ml');
  const hole2Mole = document.getElementById('2ml');
  const hole3Mole = document.getElementById('3ml');
  const hole4Mole = document.getElementById('4ml');
  const hole5Mole = document.getElementById('5ml');
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
    hole1Inside.style = 'background-color: rgb(80, 35, 0);'
    hole1Mole.style = "visibility: visible;"
  }else{
    hole1Inside.style = ' background-color: rgb(160, 72, 0);'
    hole1Mole.style = "visibility: hidden;"
  }
  if(moleLocation == 2){
    hole2Inside.style = 'background-color: rgb(80, 35, 0);'
    hole2Mole.style = "visibility: visible;"
  }else{
    hole2Inside.style = ' background-color: rgb(160, 72, 0);'
    hole2Mole.style = "visibility: hidden;"
  }
  if(moleLocation == 3){
    hole3Inside.style = 'background-color: rgb(80, 35, 0);'
    hole3Mole.style = "visibility: visible;"
  }else{
    hole3Inside.style = ' background-color: rgb(160, 72, 0);'
    hole3Mole.style = "visibility: hidden;"
  }
  if(moleLocation == 4){
    hole4Inside.style = 'background-color: rgb(80, 35, 0);'
    hole4Mole.style = "visibility: visible;"
  }else{
    hole4Inside.style = ' background-color: rgb(160, 72, 0);'
    hole4Mole.style = "visibility: hidden;"
  }
  if(moleLocation == 5){
    hole5Inside.style = 'background-color: rgb(80, 35, 0);'
    hole5Mole.style = "visibility: visible;"
  }else{
    hole5Inside.style = ' background-color: rgb(160, 72, 0);'
    hole5Mole.style = "visibility: hidden;"
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