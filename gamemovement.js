var grid = document.getElementByClassName('grid');

$('.grid').on('click', function(e){
  console.log("clickable");
})



function init(){
      // create();
      playableElement = document.getBoundingClientRec('playable');
      playableElement.style.top = '500px';
      playableElement.style.left = '500px';
      // playableElement.style.height = '100px';
      // playableElement.style.width = '100px';

//alt: ballElement = document.getBoundingClientRect()
//this determines the dimensions of the rectangle of the element in question
//e.g. this refers to the box element of the ball
  var random = Math.floor((Math.random() * 100) + 1);

  var jewel = document.getElementByClassName("jewel");

      if (random < 26) {
        console.log(random);
        jewel.classList.add('red');
      } else if (Math.floor < 51) {
        console.log(random);
        jewel.classList.add('blue');
      } else if (Math.floor < 76) {
          console.log(random);
          jewel.classList.add('green');
      } else {
          console.log(random);
          jewel.classList.add('hourglass');
      };
    }

/*
var timeLeft = 60;

    function display(timeLeft=60; timeLeft > -1; timeLeft--) {
        // timeLeft = timeLeft -1;
        // timeLeft--;
        var sec = parseInt(timeLeft);
        document.getElementById("time").innerHTML = "You have " + sec + " secs left.";
    }

    */


  //  var timeLeft = 60;

    // The render function. It will be called 60/sec - renders everything in the game that you pass through it
      /*  function render(){

          for(var i=0; i < assets.length; i++){
            assets[i].render(interactions);
            frame++;
            time=frame/60;
            timeLeft = timeLeft - time;
            console.log(timeLeft);
            document.getElementById("time").innerHTML = "You have " + timeLeft + " secs left.";
          }
        }
        */

// var timeLeft = 60;
// $('#time').on('click', function(e){
//     setTimeout(myFunction, 60000);
//       console.log("timer starts");
//       function start() {
//         setInterval(function(){
//           timeLeft = timeLeft -1;
//           document.getElementById("demo").innerHTML = "Time: " + timeLeft + " secs left.";
//           console.log(timeLeft);
//         }, 1000);}
//       })

//var gridpos = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];



array listed in clock-wise direction
corners: 3 possible gridpos to connect
sides: 5 possible gridpos to connect
inner: 8 possible gridpos to connect

for data-num = 0, connectable gridpos = [1,6,5];
for data-num = 1, connectable gridpos = [2,7,6,5,0];
for data-num = 2, connectable gridpos = [3,8,7,6,1];
for data-num = 3, connectable gridpos = [4,9,8,7,2];
for data-num = 4, connectable gridpos = [9,8,3];
for data-num = 20, connectable gridpos = [15,16,21];
for data-num = 24, connectable gridpos = [23,18,19];



/*
Timer:
// your code here:
function timer () {
// Create Javascript selectors that target each of the timer buttons.
  var resetButton, startButton, pauseButton, timerH1, timerId, seconds
  function init () {
    resetButton = document.getElementById('reset')
    startButton = document.getElementById('start')
    pauseButton = document.getElementById('pause')
    timer = document.getElementById('time')
    timerId = 60
    seconds = 60
    // Create click handlers (empty, for now) for each of the timer buttons.
    resetButton.addEventListener('click', resetTimer)
    startButton.addEventListener('click', startTimer)
    pauseButton.addEventListener('click', pauseTimer)
  }
// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
  function updateTime () {
    seconds -= 1
    timer.innerHTML = 'Time Elapsed: ' + seconds + "secs";
  }
// Inside your click handler for the start button...
// Replace "Stop Watch" in the HTML with the content of the seconds variable.
// Use setInterval() to increment the timer by 1 every second.
  function startTimer () {
    timer.innerHTML = 'Time Left: ' + seconds + "secs";
    timerId = setInterval(updateTime, 1000)
  }
// Inside your click handler for the pause button...
// Stop -- but do not reset! -- the timer using clearInterval().
// Once again, inside your click handler for the start button...
// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
  function pauseTimer () {
    clearInterval(timerId)
  }
// Inside your click handler for the reset button...
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.
  function resetTimer () {
    clearInterval(timerId)
    seconds = 0
    timerH1.innerHTML = 'Stop Watch'
  }
// Bonus
//
// Reformat your timer so that everything in your timers.js file -- variables and functions -- are part of a global object. It would look something like...
  return {
    init: init
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var testTimer = timer();
  testTimer.init()
})
*/

// ---------------------------------------------------------------------------------------------------------------------

//     var timeLeft = 60
// $('#time').on('click', function(e){
// function start() {
//    setInterval(function(){
//        timeLeft = timeLeft -1;
//        display();
//    }, 1000);
// }


// function display() {
//     var sec = timeLeft >= 0;
//     document.getElementById("time").innerHTML = "You have " + sec + "secs left.";
// }
// function myFunction() {
//   timeLeft = 0;
//   alert("Time's up!");
//   console.log("time's up");}


// var turn = 'X';
// var score = {
//     'X': 0,
//     'O': 0
// };
// var gridValue = 0;
//
// function fnLoad() {
//     var select = document.getElementById("grid");
//     for (i = 3; i <= 100; i += 1) {
//         var option = document.createElement('option');
//         select.options[select.options.length] = new Option(i + ' X ' + i, i);
//     }
//
//     addEvent(document.getElementById("game"), "click", fnChoose);
//
//     fnNewGame();
// }
//
// function addEvent(element, eventName, callback) {
//
//     if (element.addEventListener) {
//         element.addEventListener(eventName, callback, false);
//     } else if (element.attachEvent) {
//         element.attachEvent("on" + eventName, callback);
//     }
// }
//
// function fnChoose(e) {
//     if (e.target && e.target.nodeName == "TD") {
//         var targetElement = document.getElementById(e.target.id);
//         var prevTurn;
//         if ((targetElement.className).indexOf("disabled") == -1) {
//             targetElement.innerHTML = turn;
//             targetElement.classList.add('disabled');
//             targetElement.classList.add(turn);
//             score[turn] += 1;
//             prevTurn = turn;
//             turn = turn === "X" ? "O" : "X";
//             if (fndecide(targetElement, prevTurn)) {
//                 alert(prevTurn + ' has won the game');
//                 fnNewGame();
//             } else if ((score['X'] + score['O']) == (gridValue * gridValue)) {
//                 alert('Draw!');
//                 fnNewGame();
//             }
//         }
//     }
// }
//
// function fndecide(targetElement, prevTurn) {
//     var UL = document.getElementById('game');
//     var elements, i, j, cnt;
//     if (score[prevTurn] >= gridValue) {
//         var classes = targetElement.className.split(/\s+/);
//         for (i = 0; i < classes.length; i += 1) {
//             cnt = 0;
//             if (classes[i].indexOf('row') !== -1 || classes[i].indexOf('col') !== -1 || classes[i].indexOf('dia') !== -1) {
//                 elements = UL.getElementsByClassName(classes[i]);
//                 for (j = 0; j < elements.length; j += 1) {
//                     if (elements[j].innerHTML == prevTurn) {
//                         cnt += 1;
//                     }
//                 }
//                 if (cnt == gridValue) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }
//
// function fnNewGame() {
//     var gameUL = document.getElementById("game");
//     if (gameUL.innerHTML !== '') {
//         gameUL.innerHTML = null;
//         score = {
//             'X': 0,
//             'O': 0
//         };
//         turn = 'X';
//         gridValue = 0;
//     }
//     var select = document.getElementById("grid");
//     gridValue = select.options[select.selectedIndex].value;
//     var i, j, li, k = 0,
//         classLists;
//     var gridAdd = +gridValue + 1;
//
//     for (i = 1; i <= gridValue; i += 1) {
//         tr = document.createElement('tr');
//         for (j = 1; j <= gridValue; j += 1) {
//             k += 1;
//             li = document.createElement('td');
//             li.setAttribute("id", 'li' + k);
//
//             classLists = 'td row' + i + ' col' + j;
//
//             if (i === j) {
//                 classLists = 'td row' + i + ' col' + j + ' dia0';
//             }
//
//             if ((i + j) === gridAdd) {
//                 classLists = 'td row' + i + ' col' + j + ' dia1';
//             }
//
//             if (!isEven(gridValue) && (Math.round(gridValue / 2) === i && Math.round(gridValue / 2) === j))
//                 classLists = 'td row' + i + ' col' + j + ' dia0 dia1';
//
//             li.className = classLists;
//             tr.appendChild(li);
//
//         }
//         gameUL.appendChild(tr);
//     }
// }
//
//
// function isEven(value) {
//     if (value % 2 == 0)
//         return true;
//     else
//         return false;
// }
