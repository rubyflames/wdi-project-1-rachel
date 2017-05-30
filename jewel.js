var Jewel = function(settings, pos) {

    // Settings
    var jewelElement = null;

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
