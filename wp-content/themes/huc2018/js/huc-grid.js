var divName = 'huc-grid';

var genSvgStart = '<svg width="100%" height="100%">';
var genSvgEnd = '</svg>';
var genSvgbody = '';


// Grid variables
// create array with items positions
// ROW  X
var amountXitems = 9;
var xPosItemArray = [];
var divWidth = document.getElementById(divName).clientWidth;
var divWidthMid = divWidth/2;
var xItemSpace = divWidth/(amountXitems+1);


// COLS Y
var amountYitems = 9;
var yPosItemArray = [];
var divHeight = document.getElementById(divName).clientHeight;
var divHeightMid = divHeight/2;
var yItemSpace = divHeight/(amountYitems+1);

var totalItems =amountXitems*amountYitems;

// fill the items Array
for (var i = 0; i < amountXitems; i++) {
  xPosItemArray.push((i*xItemSpace)-divWidthMid+xItemSpace);
}
for (var i = 0; i < amountYitems; i++) {
  yPosItemArray.push((i*yItemSpace)-divHeightMid+yItemSpace);
}


// build the grid
var gridItemAmount = 0
for (var i = 0; i < amountYitems; i++) {
  for (var j = 0; j < amountXitems; j++) {
    gridItemAmount++;
    genSvgbody = genSvgbody+'<circle cx="50%" cy="50%" r="1.5" class="gridDot" id="gridDot'+gridItemAmount+'" />';
  }
}

// injest grid svg in to html
var genSvg =genSvgStart+genSvgbody+genSvgEnd;
document.getElementById(divName).innerHTML = genSvg;


// put items on grid position
function putAllItemsOnGridPosition() {
  gridItemAmount = 0;
  for (var k = 0; k < amountYitems; k++) {
    for (var l = 0; l < amountXitems; l++) {
      gridItemAmount++;
      gridItemPos('gridDot'+gridItemAmount, xPosItemArray[l], yPosItemArray[k]);
    }
  }
}
putAllItemsOnGridPosition();









//function to change the grid item size
function gridItemSize(itemId) {
  var scaleVal = 1;//randomInt(1,20)/10;
  document.getElementById(itemId).style.transform = 'scale('+scaleVal+', '+scaleVal+')';
}


//function to change item position
function gridItemPos(itemId, x, y) {
  var scaleVal = randomInt(1,30)/10;
  document.getElementById(itemId).style.transform = 'translate('+x+'px,'+y+'px) scale('+scaleVal+', '+scaleVal+')';
}



// randon number
function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


// timer
var tid = setTimeout(changeTrigger, 2000);
function changeTrigger() {
	putAllItemsOnGridPosition();
	tid = setTimeout(changeTrigger, 4000); // repeat itself
}
