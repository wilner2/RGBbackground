window.addEventListener('load', start);

var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var divBackgroud = document.querySelector('#particles-js');
var inputRed = document.querySelector('#valuered');
var inputGreen = document.querySelector('#valuegreen');
var inputBlue = document.querySelector('#valueblue');

function start() {
  //setando valores
  divBackgroud.style.backgroundColor =
    'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
  inputRed.value = red.value;
  inputGreen.value = green.value;
  inputBlue.value = blue.value;
  //fim setando valores

  //chamando evento
  red.addEventListener('input', change);
  green.addEventListener('input', change);
  blue.addEventListener('input', change);
  // fim chamando evento

  function change() {
    divBackgroud.style.backgroundColor =
      'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
    inputRed.value = red.value;
    inputGreen.value = green.value;
    inputBlue.value = blue.value;
  }
}
