function GameBoard(settings) {

  var gameBoardElement = null;
  var table = [];

  /*
   *  Render
   */
  this.render = function(){

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

      // init cols
      for(var j = 0; j<settings.tableSize;j++){
          var col = document.createElement('td');
          col.classList.add('grid');
          col.id = 'col_' + j;
          row.append(col);
        
        //  table[i][j] = new jewel(settings);
      }
    }
  }

  /*
   *  Init the game board
   */
  function init(){
    gameBoardElement = document.getElementById('gameboard');
    create();

  }

  init();
}
