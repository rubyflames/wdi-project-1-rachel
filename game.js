var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 8;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.automatic = false;            // The ball will move by itself
    settings.godmode = false;              // Debug mode

    // World settings
    var assets = [];                      // All game objects
    // var player = new grid(settings);      // The player
    // assets[0] = player;
    var jewels =[];
    for (var i=0; i<25; i++){
      jewels.push(new Jewel(settings,i));
    }
    var frame = 0;                        // Frames since the start of the game
    var table=[
      [{0},{1},{2},{3},{4}],
      [{0},{1},{2},{3},{4}],
      [{0},{1},{2},{3},{4}],
      [{0},{1},{2},{3},{4}],
      [{0},{1},{2},{3},{4}]
    ]

    // Interactions
    var interactions = {};
    // interactions.up = false;              // Up arrow key pressed
    // interactions.down = false;            // Down arrow key pressed
    // interactions.left = false;            // Left arrow key pressed
    // interactions.right = false;           // Right arrow ket pressed
    // interactions.space = false;           // Speace key pressed
    interactions.click = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {

      // document.addEventListener('click', function(event){
      //   var keyName = event.key;

        // switch(keyName) {
        //   case "ArrowRight":
        //       interactions.right = false;
        //       break;
        //   case "ArrowLeft":
        //       interactions.left = false;
        //       break;
        //   case "ArrowUp":
        //       interactions.up = false;
        //       break;
        //   case "ArrowDown":
        //       interactions.down = false;
        //       break;
      //     case "Click":
      //         interactions.click = false;
      //         break;
      //     default:
      //         break;
      //   }
      // });

      // document.addEventListener('keydown', function(event){
      //   var keyName = event.key;
      //
      //   switch(keyName) {
      //     case "ArrowRight":
      //         interactions.right = true;
      //         break;
      //     case "ArrowLeft":
      //         interactions.left = true;
      //         break;
      //     case "ArrowUp":
      //         interactions.up = true;
      //         break;
      //     case "ArrowDown":
      //         interactions.down = true;
      //         break;
      //     default:
      //         break;
      //   }
      // });





    }



    // Startup the game
    function init(){
      setupEvents();
    }

    //document.getElementById("reset").on('click', init());

    var frame=0;
    var stopwatch=60;


    // The render function. It will be called 60/sec i.e. 60 frames per sec
    function render(){

      if(frame%60==0 && stopwatch > 0){
        console.log(stopwatch);
        stopwatch--;
        document.getElementById("time").innerHTML= "Time left: " + stopwatch + " secs";
        //try to change the last display for the timer from -1 to 0
      }

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }
      frame++;
      //frame needs to be included to count up, otherwise it would not wait for the full sec
    }

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
              render();
            })();

            init();
}

var g = new Game();


/*
this.render = function(){ // Change to this.render
      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }

      frame++;
    }

    var self = this; // Add this line
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
              self.render(); // add self before render
            })();

            init();
}
*/
