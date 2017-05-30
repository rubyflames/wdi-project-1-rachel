var Jewel = function(settings, pos) {

    // Settings
    var jewelElement = null;
    // var bullets = [];
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
  //-------------------------------------------------------------------------------------------------
  function connect(pos){
    var corner = [0, 4, 20, 24]; //3 possible connections
    var inner = [6, 7, 8, 11, 12, 13, 16, 17, 18]; //8 possible connections
    var side = [1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23]; //5 possible connections
    //element.target --> start chain reaction from $(jewelElement).on('click',<function(){}>)
  };
  //when jewel chain is valid: to clear grid where chain is at
  function empty(pos){
    if(div === null){
      jewelElement.querySelector('data-num')= pos+5;
    }
  };
  /*
  adapted from a Checkers game:
    //moves the piece
    this.move = function (tile) {
      this.element.removeClass('selected');
      if(!Board.isValidPlacetoMove(tile.position[0], tile.position[1])) return false;
      //make sure piece doesn't go backwards if it's not a king
      if(this.player == 1 && this.king == false) {
        if(tile.position[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if(tile.position[0] > this.position[0]) return false;
      }
      //remove the mark from Board.board and put it in the new spot
      Board.board[this.position[0]][this.position[1]] = 0;
      Board.board[tile.position[0]][tile.position[1]] = this.player;
      this.position = [tile.position[0], tile.position[1]];
      //change the css using board's dictionary
      this.element.css('top', Board.dictionary[this.position[0]]);
      this.element.css('left', Board.dictionary[this.position[1]]);
      //if piece reaches the end of the row on opposite side crown it a king (can move all directions)
      if(!this.king && (this.position[0] == 0 || this.position[0] == 7 ))
        this.makeKing();
      Board.changePlayerTurn();
      return true;
    };
  */

}
