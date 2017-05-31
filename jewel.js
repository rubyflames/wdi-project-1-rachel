var Jewel = function(settings, pos) {

    var self = this;

    // Settings
    var jewelElement = null;
    this.type = null;
    this.position = null;

    // Highlight
    this.highlight = function(){
        jewelElement.parentElement.classList.add('highlight');
    }


    function create() {
        // Create the object asset
        jewelElement = document.createElement('div');
        var tableCell = document.querySelectorAll('td[data-col="' + pos.col +'"][data-row="'+ pos.row +'"]');
        tableCell[0].append(jewelElement);
    }

    function init(pos){
      create(); // create cell

      var random = Math.floor((Math.random() * 100) + 1);

      if (random < 26) {
        console.log(random);
        jewelElement.classList.add('red');
        self.type = 'red';
      } else if (random< 51) {
        console.log(random);
        jewelElement.classList.add('blue');
        self.type = 'blue';
      } else if (random < 76) {
        console.log(random);
        jewelElement.classList.add('green');
        self.type = 'green';
      } else {
        console.log(random);
        jewelElement.classList.add('hourglassplay');
        self.type = 'hourglassplay';
      };
  };

  this.render = function(interactions){
    move(interactions);
  }

  init(pos);

}
