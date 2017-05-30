var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 8;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.automatic = false;            // The ball will move by itself
    settings.godmode = false;              // Debug mode
    settings.timePerRound = 60;            // Time per round

    // World settings
    var assets = [];                      // All game objects\
    var tableSize = 5;
    var frame = 0;
    var countdown = settings.timePerRound

    /*
     *  Create the game table
     */
    function createTable(){
      var table =[];

      // init rows
      for(var i = tableSize; i<tableSize;i++){
        // init cols
        for(var j = tableSize; j<tableSize;j++){
            table[i][j] = new jewel(settings)
        }
      }
    }

    /*
     *  Initialize game
     */
    function init(){
      createTable();
    }

    /*
     *  The render function. It will be called 60/sec i.e. 60 frames per sec
     */
    this.render = function(){ // fix scope

      if(frame%60==0 && stopwatch > 0){
        console.log(stopwatch);
        stopwatch--;
        document.getElementById("time").innerHTML= "Time left: " + stopwatch + " secs";
        //try to change the last display for the timer from -1 to 0
      }

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
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
