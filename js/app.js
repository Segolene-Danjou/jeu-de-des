function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var nbDice = 1;

function createDieInDOM(targetId) {
    var die = document.createElement("div");
    var board = document.querySelector('#' + targetId);

    die.classList.add('dice');
    board.appendChild(die);

    var roll = generateRandomInt(1, 6);
    var angle = generateRandomInt(0, 90);

    var dieBackgroundHorizontalPosition = (roll - 1) * -100;
    die.style.backgroundPositionX = dieBackgroundHorizontalPosition + 'px';

    die.style.transform = 'rotate(' + angle + 'deg)';
}


function play(nbDice) {
    cleanBoard();
   
    for (var dieCounter = 0; dieCounter < nbDice; dieCounter++) {
        createDieInDOM('player');
        createDieInDOM('dealer');
    }
}

function cleanBoard() {
   document.querySelector('#player').textContent = '';
    document.querySelector('#dealer').innerHTML = '';
}

var playButton = document.querySelector('#play');


function launchPlay(evt) {
    console.log(evt)
  setTimeout(play, 100, nbDice);
}


playButton.addEventListener('click', launchPlay);
playButton.addEventListener('mouseover', function(){
});

var slider = document.querySelector('#nbdice');
var inputValueHandler = function(evt){
    console.log('le slider a changé de valeur');
  nbDice = evt.target.value
   document.querySelector('#show-nbdice').textContent = nbDice;
}
slider.addEventListener('change', inputValueHandler);


document.addEventListener('click', function(evt){
 var elementClicked = evt.target;
});

