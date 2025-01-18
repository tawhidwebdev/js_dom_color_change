const body = document.getElementById('body');
const button = document.querySelectorAll('li');

const redColor = document.querySelector('.red');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
const purpleColor = document.querySelector('.purple');
const pinkColor = document.querySelector('.pink');
const blackColor = document.querySelector('.black');

redColor.addEventListener('click', function () {
  body.style.backgroundColor = '#d63031'
  body.style.color = 'black'
})
blueColor.addEventListener('click', function(){
  body.style.backgroundColor = '#00cec9'
})
greenColor.addEventListener('click', function() {
  body.style.backgroundColor = '#55efc4'
})
purpleColor.addEventListener('click', function(){
  body.style.backgroundColor = '#a29bfe'
})
pinkColor.addEventListener('click', function() {
  body.style.backgroundColor = '#ff7675'
})
blackColor.addEventListener('click', function (){
  body.style.backgroundColor = '#2d3436'
  body.style.color = 'white'
})
