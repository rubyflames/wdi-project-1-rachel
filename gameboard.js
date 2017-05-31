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
            console.log(toRemove[i].childNodes)
              toRemove[i].removeChild(toRemove[i].childNodes[0]);
          }
        }
        setTimeout(newJewels, 1000)


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
