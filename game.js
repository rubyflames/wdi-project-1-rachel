var Game = function() {
   var endgame = false;
    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 8;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.automatic = false;            // The ball will move by itself
    settings.godmode = false;              // Debug mode
    settings.timePerRound = 60;            // Time per round
    settings.tableSize = 6;                // set table size
    settings.connectedJewels = [];


    // World settings
    var assets = [];                      // All game objects\

    var interactions = {};
    interactions.click = false;           // Speace key pressed


    // function removeEventListener(gameBoard)
    // Setup event listeners

    function setupEvents() {
      //document.getElementById('pause').addEventListener('click', init())
      //var reset = document.getElementsByClassName('reset').addEventListener('click', init());

      var buttons = document.getElementsByClassName('button');

      console.log(buttons);
      for(var i = 0; i < buttons.length;i++){
        buttons[i].addEventListener('click', function(event){
          var targetName = event.target;
          console.log(targetName.id);
          switch(targetName.id) {
          	case "reset": location.reload();
          		//reset the game
          		break;
          	case 'pause': window.cancelAnimationFrame(this.render);
                 requestId = undefined;
          		//pause the game
          		break;
          	case 'start': window.requestAnimationFrame(countdown);
           //window.requestAnimationFrame(loop);
          		//continue the game
          		break;
          	default:
          		break;
            }
          });
      }
    }


    var frame = 0;
    var countdown = settings.timePerRound;
    function checkEndGame (){
      if (countdown == 0){
        endgame = true;
      }
    }
    // Init gameboard
    var gameBoard = new GameBoard(settings);
    assets[0] = gameBoard;

    /*
     *  Initialize game
     */
    function init(){
     setupEvents();
    }

    /*
     *  The render function. It will be called 60/sec i.e. 60 frames per sec
     */
    this.render = function(){ // fix scope

      if(frame%60==0 && countdown > 0){
        countdown--;
        document.getElementById("time").innerHTML= "Time left: " + countdown + " secs";
        //try to change the last display for the timer from -1 to 0
        checkEndGame();
      }
      if (endgame ==false) {
      for(var i=0; i < assets.length; i++){
        assets[i].render();
      }
    } else {document.getElementsByTagName("table")[0].removeEventListener('click', gameBoard, true)}

      frame++; //frame needs to be included to count up, otherwise it would not wait for the full sec

    gameOver();
    function gameOver(){
      var hp = document.getElementById('hp')
      console.log(parseInt(hp.innerHTML))
      if (parseInt(hp.innerHTML) < 1 && countdown>0){
        alert('You defeated the monster! Refresh the page twice to challenge the dungeon again!')
      } else if (countdown===0){
        alert('GAME OVER! Fret not, young adventurer. Refresh the page twice to challenge the dungeon again!')
      }

    }
    }

    /*
     *  Game loop. Don't touch ;-)
     */
    var self = this; // fix scope
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();

            (function animloop(){
              requestAnimFrame(animloop);
              self.render();            // fix scope
            })();

            init();
}


var g = new Game();
