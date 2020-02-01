/* app.js */

// table container
var animatedTable = document.querySelector("table.board");

/*************************************************************
 *  ON LOAD ANIMATION
 *  When the page is first loaded, show three random points  
 *  on the animated to demonstrate the pulse effect. 
 * ***********************************************************/
function onLoad(){
  pulseSpanColor(5,8,32);
  pulseSpanColor(5,16,32);
  pulseSpanColor(5,24,32);
}

/*************************************************************
 *  ANIMATED TABLE EVENT LISTENER
 *  If the element pressed is a table cell then call the 
 *  pulsePress function. The pulseDepth is randomly set to an 
 *  integer between 1 and 4.
 * ***********************************************************/
animatedTable.addEventListener("click", function(){
    
    if (event.target.tagName == "TD" ){
        
        /*
        // Pulse Press Sample
        pulsePressColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 5);
        
        */
        
        /*
        // Pulse Press 2 Sample
        pulsePress2Color(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 5);
        
        */

        /*
        // Pulse Span Sample
        pulseSpanColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 32);

        */
        
        /*
        // Pulse Small Arrow Sample
        pulseSmallArrowColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 32);
        
        */

        /*
        // Pulse Medium Arrow Sample
        pulseLargeArrowColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 32, 2);
        
        */

        //Pulse Large Arrow Sample
        pulseLargeArrowColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 32, 5);
        



    }

});

/*************************************************************
 *  PULSE PRESS FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth. The nested function
 *  targets the table cells that are adjacent and adds the css
 *  animation to those cells.
 * ***********************************************************/
function pulsePressColor(rowNum, colNum, pulseDepth){
    
    if(pulseDepth > -1 && verifyCoordinates(rowNum, colNum) && (!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell")))){
          
      document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");
  
      window.setTimeout(function() {
          document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');
  
      },500);
  
      window.setTimeout(function() {
          pulsePressColor(parseInt(rowNum,10)+1,parseInt(colNum,10),pulseDepth-1);
          pulsePressColor(parseInt(rowNum,10),parseInt(colNum,10)+1,pulseDepth-1);
          pulsePressColor(parseInt(rowNum,10)-1,parseInt(colNum,10),pulseDepth-1);
          pulsePressColor(parseInt(rowNum,10),parseInt(colNum,10)-1,pulseDepth-1); 
      },200); 
    
    }
  
}

/*************************************************************
 *  PULSE PRESS 2 FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth. The nested function
 *  targets the table cells that are adjacent by two spaces and 
 *  adds the css animation to those cells.
 * ***********************************************************/
function pulsePress2Color(rowNum, colNum, pulseDepth){
    
    if(pulseDepth > -1 && verifyCoordinates(rowNum, colNum) && (!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell")))){
          
      document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");
  
      window.setTimeout(function() {
          document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');
  
      },500);
  
      window.setTimeout(function() {
          pulsePress2Color(parseInt(rowNum,10)+2,parseInt(colNum,10),pulseDepth-1);
          pulsePress2Color(parseInt(rowNum,10),parseInt(colNum,10)+2,pulseDepth-1);
          pulsePress2Color(parseInt(rowNum,10)-2,parseInt(colNum,10),pulseDepth-1);
          pulsePress2Color(parseInt(rowNum,10),parseInt(colNum,10)-2,pulseDepth-1); 
      },200); 
    
    }
  
}

/*************************************************************
 *  PULSE PEACH FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
 * ***********************************************************/
function pulseSpanColor(rowNum, colNum, pulseDepth){
    
    if(pulseDepth > -1 && verifyCoordinates(rowNum, colNum) && (!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell")))){
          
      document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");
  
      window.setTimeout(function() {
          document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');
  
      },500);
  
      window.setTimeout(function() {
          pulseSpanColor(parseInt(rowNum,10)+1,parseInt(colNum,10), pulseDepth-1);
          pulseSpanColor(parseInt(rowNum,10),parseInt(colNum,10)+1, pulseDepth-1);
          pulseSpanColor(parseInt(rowNum,10)-1,parseInt(colNum,10), pulseDepth-1);
          pulseSpanColor(parseInt(rowNum,10),parseInt(colNum,10)-1, pulseDepth-1); 
      },200); 
    
    }
  
}

/*************************************************************
 *  PULSE PEACH FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
 * ***********************************************************/
function pulseSmallArrowColor(rowNum, colNum, pulseDepth){
    
    if(pulseDepth > -1 && verifyCoordinates(rowNum, colNum) && (!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell")))){
          
      document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");
  
      window.setTimeout(function() {
          document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');
  
      },500);
  
      window.setTimeout(function() {
          pulseSmallArrowColor(parseInt(rowNum,10),parseInt(colNum,10)+1, pulseDepth-1);
      },200); 
    
    }
  
}

/*************************************************************
 *  PULSE PEACH FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
 * ***********************************************************/
function pulseLargeArrowColor(rowNum, colNum, horizPulseDepth, vertPulseDepth){
    
    if(horizPulseDepth > -1 && vertPulseDepth > -1 && verifyCoordinates(rowNum, colNum) && (!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell")))){
          
      document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");
  
      window.setTimeout(function() {
          document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');
  
      },500);
  
      window.setTimeout(function() {
          pulseLargeArrowColor(parseInt(rowNum,10)+1,parseInt(colNum,10), horizPulseDepth, vertPulseDepth-1);
          pulseLargeArrowColor(parseInt(rowNum,10),parseInt(colNum,10)+1, horizPulseDepth-1, vertPulseDepth);
          pulseLargeArrowColor(parseInt(rowNum,10)-1,parseInt(colNum,10), horizPulseDepth, vertPulseDepth-1); 
      },200); 
    
    }
  
}

/*************************************************************
 *  VERIFY COORDINATES FUNCTION
 *  Check to see if the given coordinates correspond to an 
 *  existing element that has an id attribute with these
 *  coordinates.
 * ***********************************************************/
function verifyCoordinates(rowNum, colNum){
    if (document.getElementById(rowNum+"-"+colNum) != null && rowNum >= 0 && rowNum <= 24 && colNum >= 0 && colNum <= 31){
        return true;
    }
    else{
        return false;
    }
}