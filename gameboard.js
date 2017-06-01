function GameBoard(settings) {

  var gameBoardElement = null;
  var jewels = [];

  /*
   *  Render
   */
  this.render = function(){

  }

  /*
   *  Setup events
   */

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

   function setupEvents(){
     function gameBoard(e){

      var target = e.target;
      // Normalize if div is clicked
      if(e.target.nodeName === "DIV"){
        target = e.target.parentElement
      }

      var clickedJewel = {
        row : parseInt( target.getAttribute('data-row')),
        col: parseInt( target.getAttribute('data-col'))
      }

      // Link similar surrounding jewels
      var search = new Search(clickedJewel, jewels, settings);
        var toClear = search.start();
      var hp = document.getElementById('hp');
      var connect = new Audio('./audio/spear_throw.mp3')
      var chain = new Audio('./audio/Glass_Break.mp3')
      connect.play();
      console.log(parseInt(hp.innerHTML));
      // for (var i = 0; i < 2; i++){
      //   console.log('invalid chain');
      //   // }
      // }
      for (var i = 2; i < toClear.length; i++){
        // if (toClear[i].type = 'hourglassplay'){
        //   var addtime=2;
        //   // countdown = countdown + addtime;
        //   document.getElementById("time").innerHTML= "Time left: " + (countdown+addtime) + " secs";
        // } else {
          var hpleft=10; //for every i, i = 10
        console.log('minus hp', parseInt(hp.innerHTML))
        hp.innerHTML= (parseInt(hp.innerHTML) -hpleft) + " / 2000 HP"
        // }
      }


      /*
      * Utilise the game loop, not timeout!
      */

      setTimeout(shift, 400);
      chain.play();
      setTimeout(reset, 600);
      // Clear chain of jewels
      //var clear = new Clear(connectedJewel,jewels,settings);
      // var Clear = function (connectedJewel,jewels,settings){
      //   connectedJewel.parentNode.removeChild(div);
      // }

//         var div = document.getElementById('cart_item');
// while(div.firstChild){
//     div.removeChild(div.firstChild);
    // }
    }
      gameBoardElement.addEventListener("click",gameBoard, true);
   }

   //Replace conected chain with random jewels

   function shift() {
      var toRemove = document.getElementsByClassName('grid highlight');
     if (toRemove.length == 0) {
       //console.log('empty grids exist')
     }else{
       for (var i =0; i < toRemove.length; i ++) {
      //  console.log(toRemove[i].childNodes);
        function init(){
          var random = Math.floor((Math.random() * 100) + 1);

          var row = parseInt( toRemove[i].getAttribute('data-row') );
          var col = parseInt( toRemove[i].getAttribute('data-col') );

          //change type in table object itself + table in html
          if (random < 26) {
          //  console.log(random);
            toRemove[i].childNodes[0].className='red';
            jewels[row][col].type = 'red';
          } else if (random< 51) {
            //console.log(random);
            toRemove[i].childNodes[0].className='blue';
            jewels[row][col].type = 'blue';
          } else if (random < 76) {
          //  console.log(random);
            toRemove[i].childNodes[0].className='green';
            jewels[row][col].type = 'green';
          } else {
            //console.log(random);
            toRemove[i].childNodes[0].className='hourglassplay';
            jewels[row][col].type = 'hourglassplay';
          };
      };
        init();
      //  console.log(toRemove[i].childNodes[0].className)
       }

    }
}
/*
 *  Reset highlighted jewels
 */
 function reset(){
  // rows
  for(var i = 0; i<settings.tableSize;i++){
    // cols
    for(var j = 0; j<settings.tableSize;j++){
      var cell = document.querySelectorAll('td[data-col="' + j +'"][data-row="'+ i +'"]');
      cell[0].classList.remove('highlight');
    }
  }
}


  /*
   *  Create jewels
   */
  function create(){

    var table =[];

    // init rows
    for(var i = 0; i<settings.tableSize;i++){

      // Create row
      var row = document.createElement('tr');
      row.id = 'row_' + i;
      gameBoardElement.append(row);
      jewels.push([])

      // init cols
      for(var j = 0; j<settings.tableSize;j++){
          var col = document.createElement('td');
          col.classList.add('grid');
        //  col.id = 'row_' + i +'_col_' + j;
          col.setAttribute("data-row", i);
          col.setAttribute("data-col", j);
          row.append(col);
          jewels[i][j] = new Jewel(settings, {row: i, col: j} );
      }
    }
  }

  /*
   *  Init the game board
   */
  function init(){
    gameBoardElement = document.getElementById('gameboard');
    create();
    setupEvents();
  }

  init();
}
