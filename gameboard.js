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
        /*
        * Utilise the game loop, not timeout!
        */
        setTimeout(newJewels, 1000);
        setTimeout(shift, 2000);
        // setTimeout(remove, 2500);
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

   function shift() {
     var jewels = document.querySelectorAll('grid')
     if (jewels.childNodes == null) {
       console.log('empty grids exist')
       var toRemove = document.getElementsByClassName('grid highlight');
       console.log(toRemove)
       for (var i =0; i < toRemove.length; i ++) {
         var div = document.createElement('div')
         console.log(toRemove[i])
         toRemove[i].append(div)
          console.log(toRemove[i].childNodes[0])
         toRemove[i].childNodes[0].setAttribute("class","blue")
       }
      // var toRemove = document.getElementsByClassName('grid highlight');
      // for (var i in toRemove) {
      //   toRemove[i].classList.remove('highlight')
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

// function remove() {
//   var highlighted = document.getElementsByClassName('highlight');
//   if (highlighted.length > 0) {
//   for(var i =0; i < highlighted.length; i ++){
//      //console.log(highlighted[i].classList)
//     //highlighted[i].classList.remove('highlight')
//     highlighted.pop();
//        //console.log(highlighted[i].classList)
//   }
// }
// }
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
