var Game = function() {

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

    // Setup event listeners

    function setupEvents() {
      //document.getElementById('pause').addEventListener('click', init())
      //var reset = document.getElementsByClassName('reset').addEventListener('click', init());
      var buttons = new Button(settings);
      }


    var frame = 0;
    var countdown = settings.timePerRound;

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
      }

      for(var i=0; i < assets.length; i++){
        assets[i].render();
      }

      frame++; //frame needs to be included to count up, otherwise it would not wait for the full sec
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
