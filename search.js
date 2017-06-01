var Search = function(jewelPosition, jewels, settings){

      var jewel = jewels[jewelPosition.row][jewelPosition.col]; // Clicked Jewel
      var connectedJewels = [];

      /*
       *  Check Jewel
       */
       function checkJewel(currentPosition, currentJewel){

         if(jewels[currentPosition.row][currentPosition.col].type == currentJewel.type){
           if( !connectedJewels.includes(jewels[currentPosition.row][currentPosition.col]) ){
              return true;
           }
         }

         return false;
       }


      /*
       *  Find Connected Jewels
       */
      function findConnectedJewels(row, col, activeJewel){

        console.log('new center', row, col);

        var foundJewels = [];
        var currentPosition = {}

        // base case
        if(col < 0 || row < 0 || col >= jewels[0].length || row >= jewels.length){
          return;
        }

        currentPosition = {row: row, col: col-1}; // east
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row, col: col+1}; // west
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row+1, col: col}; // south
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row-1, col: col}; // north
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row-1, col: col+1}; // north east
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row-1, col: col-1}; // north vest
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row+1, col: col+1}; // south east
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        currentPosition = {row: row+1, col: col-1}; // south vest
        if( currentPosition.row >= 0
            && currentPosition.col >= 0
            && currentPosition.row < settings.tableSize
            && currentPosition.col < settings.tableSize
            && checkJewel(currentPosition, activeJewel) ){
          jewels[currentPosition.row][currentPosition.col].highlight();
          jewels[currentPosition.row][currentPosition.col].position = currentPosition;
          foundJewels.push(jewels[currentPosition.row][currentPosition.col]);
        }

        connectedJewels = connectedJewels.concat(foundJewels);
        settings.connectedJewels = settings.connectedJewels.concat(foundJewels);
        for(var i=0; i<foundJewels.length;i++){
          findConnectedJewels(foundJewels[i].position.row, foundJewels[i].position.col, foundJewels[i])
        }

        return;
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

      this.start = function(){
        reset();
        // settings.connectedJewels = [];
        connectedJewels = [];
        jewel.position = {row: jewelPosition.row, col: jewelPosition.col};
        jewel.highlight();
        connectedJewels.push(jewel);
        // settings.connectedJewels.push(jewel);
        findConnectedJewels(jewelPosition.row, jewelPosition.col, jewel);

        return connectedJewels;
        // return settings.connectedJewels;
      }
}
