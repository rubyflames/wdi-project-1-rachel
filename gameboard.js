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
   function setupEvents(){

      gameBoardElement.addEventListener("click", function(e){

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
        function newJewels() {
          var toRemove = document.getElementsByClassName('grid highlight');
          for (var i in toClear) {
            console.log("To remove:"+toRemove[i])
            // .getAttribute('class')
            //toRemove[i].removeChild(toRemove[i].childNodes[0]);
            //toRemove[i].classList.remove('');
          }
        }
        /*
        * Utilise the game loop, not timeout!
        */
        //windows.requestAnimFrame(newJewels, 1);
        setTimeout(newJewels, 1000);
        setTimeout(shift, 2000);
        setTimeout(reset, 2500);
        // Clear chain of jewels
        //var clear = new Clear(connectedJewel,jewels,settings);
        // var Clear = function (connectedJewel,jewels,settings){
        //   connectedJewel.parentNode.removeChild(div);
        // }

//         var div = document.getElementById('cart_item');
// while(div.firstChild){
//     div.removeChild(div.firstChild);
      // }
      });
   }

   //Replace conected chain with random jewels
   function shift() {
      var toRemove = document.getElementsByClassName('grid highlight');
     if (toRemove.length == 0) {
       console.log('empty grids exist')
     }else{
       for (var i =0; i < toRemove.length; i ++) {
        console.log(toRemove[i].childNodes);
        function init(){
          var random = Math.floor((Math.random() * 100) + 1);

          var row = parseInt( toRemove[i].getAttribute('data-row') );
          var col = parseInt( toRemove[i].getAttribute('data-col') );

          //change type in table object itself + table in html
          if (random < 26) {
            console.log(random);
            toRemove[i].childNodes[0].className='red';
            jewels[row][col].type = 'red';
          } else if (random< 51) {
            console.log(random);
            toRemove[i].childNodes[0].className='blue';
            jewels[row][col].type = 'blue';
          } else if (random < 76) {
            console.log(random);
            toRemove[i].childNodes[0].className='green';
            jewels[row][col].type = 'green';
          } else {
            console.log(random);
            toRemove[i].childNodes[0].className='hourglassplay';
            jewels[row][col].type = 'hourglassplay';
          };
      };
        init();
        console.log(toRemove[i].childNodes[0].className)
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
