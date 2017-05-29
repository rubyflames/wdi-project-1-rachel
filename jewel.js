var Jewel = function(settings, pos) {

    // Settings
    var jewelElement = null;
    var bullets = [];
    console.log(pos);


    /*
    bottom:265
    height:100
    left:400
    right:500
    top:165
    width:100
*/

    // function wall() {
    //
    //   // var ballRect = ballElement.getBoundingClientRect();
    //   // var w = parseInt(window.innerWidth);
    //   // var h = parseInt(window.innerHeight);
    //   //
    //   // if(ballRect.bottom > h){
    //   //   ballElement.style.top = (h-ballRect.height) + 'px';
    //   // }
    //   //
    //   // if(ballRect.top < 0){
    //   //   ballElement.style.top = '0px';
    //   // }
    //   //
    //   // if(ballRect.left < 0){
    //   //     ballElement.style.left = '0px';
    //   // }
    //   //
    //   // if(ballRect.right > w){
    //   //     ballElement.style.left = ( w - ballRect.width) + 'px' ;
    //   // }
    //
    //
    //
    //
    //
    // }

    // // Move the ball around manually
    // function move(interactions){
    //
      // if(interactions.up){
      //   ballElement.style.top = parseInt(ballElement.style.top)-8+"px";
      // }
      //
      // if(interactions.down){
      //   ballElement.style.top = parseInt(ballElement.style.top)+8+"px";
      // }
      //
      // if(interactions.left){
      //   ballElement.style.left = parseInt(ballElement.style.left)-8+"px";
      // }
      //
      // if(interactions.right){
      //   ballElement.style.left = parseInt(ballElement.style.left)+8+"px";
      // }
      //
      // if(settings.walls){
      //   wall();
    //   }
    // }


    function create() {
        // Create the object asset
    }

    function init(pos){
      // create();
      var random = Math.floor((Math.random() * 100) + 1);

      var jewelElement = document.getElementsByClassName("jewel")[pos]; //want to get the first one

          if (random < 26) {
            console.log(random);
            jewelElement.classList.add('red');
          } else if (random< 51) {
            console.log(random);
            jewelElement.classList.add('blue');
          } else if (random < 76) {
            console.log(random);
            jewelElement.classList.add('green');
          } else {
            console.log(random);
            jewelElement.classList.add('hourglassplay');
          };


    this.render = function(interactions){
      move(interactions);
    }
  };  init(pos);
}
