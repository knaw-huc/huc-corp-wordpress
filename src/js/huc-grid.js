var divName = 'huc-grid';

var genSvgStart = '<svg width="100%" height="100%">';
var genSvgEnd = '</svg>';
var genSvgbody = '';

var figure01 = '..................................**.......****.....**##**...***##***.....**........**........**........**............................................';

var figure02 = '..*...*.....*....*....*.....*...*......***#*#*****....*.........*.........*.....****#**#**...*...*......*..*.......*.*........**.........*.........*..';

var figure03 = '#.....#....#...#......#.#........#.....#..#.#...#..#...#.#..#.....#........#.#......#...#....#.....#..#........#........#.............................';

// Grid variables
// create array with items positions
// ROW  X
var amountXitems = 10;
var xPosItemArray = [];
var divWidth = document.getElementById(divName).clientWidth;
var divWidthMid = divWidth/2;
var xItemSpace = divWidth/(amountXitems+1);


// COLS Y
var amountYitems = 15;
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
function putAllItemsOnGridPosition(idName, scale) {

  gridItemAmount = 0;
  for (var k = 0; k < amountYitems; k++) {
    for (var l = 0; l < amountXitems; l++) {
      gridItemAmount++;
      gridItemPos(idName, gridItemAmount, xPosItemArray[l], yPosItemArray[k],scale);
    }
  }
}
putAllItemsOnGridPosition('gridDot', 'rand');






//function to change item position
function gridItemPos(idName, itemId, x, y, scale) {


  var scaleVal =1;
  if (scale =='rand'){
    scaleVal = randomInt(1,30)/10;
  }

  if (scale =='f1'){
    var figVal = figure01.slice((itemId-1),itemId);
  }
  if (scale =='f2'){
    var figVal = figure02.slice((itemId-1),itemId);
  }
  if (scale =='f3'){
    var figVal = figure03.slice((itemId-1),itemId);
  }


  if(figVal == '#') {
    scaleVal = 5;
  }
  if(figVal == '*') {
    scaleVal = 3;
  }


  document.getElementById(idName+itemId).style.transform = 'translate('+x+'px,'+y+'px) scale('+scaleVal+', '+scaleVal+')';

  if ((/MSIE 10/i.test(navigator.userAgent)) || (/MSIE 9/i.test(navigator.userAgent)) || (/rv:11.0/i.test(navigator.userAgent)) || (/Edge\/\d./i.test(navigator.userAgent))) {
     document.getElementById(idName+itemId).setAttribute("transform", 'translate('+x+' '+y+') scale('+scaleVal+', '+scaleVal+')');
  }



}



// randon number
function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


// // timer
// var tid = setTimeout(changeTrigger, 2000);
// function changeTrigger() {
// 	 // putAllItemsOnGridPosition('gridDot', 'f1');
// 	 // tid = setTimeout(changeTrigger, 4000); // repeat itself
// }

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if ((scroll > divWidth) && (scroll < (2*divWidth))) {
      putAllItemsOnGridPosition('gridDot', 'f1');
    } else if ((scroll > (2*divWidth)) && (scroll < (3.5*divWidth))) {
      putAllItemsOnGridPosition('gridDot', 'f2');
    } else if ((scroll > (3.5*divWidth)) && (scroll < (5.5*divWidth))) {
      putAllItemsOnGridPosition('gridDot', 'f3');
    }
    else {
        putAllItemsOnGridPosition('gridDot', 'rand');
    }

});
