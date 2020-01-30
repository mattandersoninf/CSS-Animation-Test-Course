/* app.js */

// table container
var animatedTable = document.querySelector("table.board");

/*************************************************************
 *  ON LOAD ANIMATION
 *  When the page is first loaded, show three random points  
 *  on the animated to demonstrate the pulse effect. 
 * ***********************************************************/
function onLoad(){
  pulseSpanColor(5,8);
  pulseSpanColor(5,16);
  pulseSpanColor(5,24);
}

/*************************************************************
 *  ANIMATED TABLE EVENT LISTENER
 *  If the element pressed is a table cell then call the 
 *  pulsePress function. The pulseDepth is randomly set to an 
 *  integer between 1 and 4.
 * ***********************************************************/
animatedTable.addEventListener("click", function(){
    
    if (event.target.tagName == "TD" ){
        
        pulseSpanColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 32);

        /*
        pulsePressColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 5);
        */
    }

});

/*************************************************************
 *  PULSE PRESS FUNCTION
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
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