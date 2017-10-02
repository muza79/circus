document.addEventListener("DOMContentLoaded", function() {

var mainSprite = document.querySelector('.main-sprite');
var female = document.getElementById('female');
var male = document.getElementById('male');
var zero = document.getElementById('zero');
var weatherObject = document.querySelector('.weather-object');
var spriteContainer = document.querySelector('.sprite-container');
var raindrop = document.querySelectorAll('.raindrop');
var weather = document.querySelector('.weather');
var stop = document.getElementById('stop');
var go = document.getElementById('go');
var stop = document.getElementById('stop');
var sprite = document.querySelector('.capguy');
var nameForm = document.querySelector('#give-name');
var nameButton = document.querySelector('#show-name');
var speechBubble = document.querySelector('.speech-bubble');
var ageForm = document.querySelector('#give-age');
var ageButton = document.querySelector('#show-age');
var title = document.querySelector('title');





// ---------------------------- title ---------------------------


var titleList = ["Muzaga's Circus", "Fill the form to join", "Get a discount!!!"];

var i = 0;
setInterval(function () {

    title.innerText = titleList[i];
    i++;
    if(i === titleList.length) {
      i=0;
    }

}, 3000);
i=0;

// var i = 0;
// function timedLoop() {
// setTimeout(function () {
//
//     title.innerText = titleList[i];
//     console.log(titleList[i]);
//     i++;
//     if(i < titleList.length) {
//         timedLoop();
//     }
// }, 2000);
// }
//
// setInterval(function () {
//   timedLoop();
//   i=0;
//
// },6000);


// ---------------------------- gender ---------------------------

female.addEventListener('change', function changeHeadColor() {
  mainSprite.style.color = 'red';
});

male.addEventListener('change', function changeHeadColor() {
  mainSprite.style.color = 'black';
});

zero.addEventListener('change', function changeHeadColor() {
  mainSprite.style.color = 'yellow';
});

// ---------------------------- weather -------------------------

weather.addEventListener('change', function changeWeather() {

  if (this.value=='sunny') {
    weatherObject.style.backgroundImage = 'url(images/sunny2.png)';
    weatherObject.style.animation = 'spin 4s linear infinite';
    spriteContainer.style.background = '';
    for (var i = 0; i < raindrop.length; i++) {
      raindrop[i].style.backgroundImage = '';
    }
  } else if (this.value==='cloudy') {
    weatherObject.style.backgroundImage = 'url(images/sunny2.png)';
    weatherObject.style.animation = 'spin 8s linear infinite';
    spriteContainer.style.background = 'url("images/cloud.png") repeat-x 100%';
    for (var i = 0; i < raindrop.length; i++) {
      raindrop[i].style.backgroundImage = '';
    }

  } else if (this.value==='rainy') {
    weatherObject.style.backgroundImage = 'url(images/rainy.png)';
    weatherObject.style.animation = '';
    spriteContainer.style.background = '';
    for (var i = 0; i < raindrop.length; i++) {
      raindrop[i].style.backgroundImage = 'url(images/raindrop.png)';
    }


  } else if (this.value==='snowy') {
    weatherObject.style.backgroundImage = 'url(images/snowy.png)';
    weatherObject.style.animation = '';
    spriteContainer.style.background = '';
    for (var i = 0; i < raindrop.length; i++) {
      raindrop[i].style.backgroundImage = 'url(images/snowflake.png)';
    }

  } else {
    weatherObject.style.backgroundImage = 'url()';
    weatherObject.style.animation = '';
    spriteContainer.style.background = '';
    for (var i = 0; i < raindrop.length; i++) {
      raindrop[i].style.backgroundImage = '';
    }

  }
});

//------------------- nameForm --------------------


nameButton.addEventListener('click', function showName() {
  var valSplit = nameForm.value.split('');
  var valReversed = valSplit.reverse();
  var valOut = valReversed.join('');
  speechBubble.style.visibility = 'visible';
  speechBubble.innerText = 'Hello ' + valOut + '!';
  nameForm.value = '';

  console.log(valOut);
})

//-------------------------------------

//------------------- ageForm --------------------


ageButton.addEventListener('click', function showAge() {
  var val = ageForm.value;
  speechBubble.style.visibility = 'visible';
  if (val < 18) {
    speechBubble.innerText = " You're not allowed in a circus!";
  } else if (val < 45) {
    speechBubble.innerText = "OK. You're good";
    go.style.visibility = 'visible';
    stop.style.visibility = 'visible';


  } else {
    speechBubble.innerText = "Aren't you too old for that?";

  }
  ageForm.value = '';
console.log(val);
})

//-------------------------------------

go.addEventListener('click', function spriteGo() {
  sprite.style.animation = 'walk 1s steps(8)infinite';

  var toBeContinued = document.querySelector('.to-be-continued');

  setTimeout(function () {
    toBeContinued.style.visibility = 'visible';
  }, 3000);

});

stop.addEventListener('click', function spriteGo() {
  sprite.style.animation = ''
});



});//DOMContentLoaded
