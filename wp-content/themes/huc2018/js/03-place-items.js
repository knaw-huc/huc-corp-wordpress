
//function to change item position
function gridItemPos(idName, itemId, x, y, scale) {

  document.getElementById(idName+itemId).style.transform = 'translate('+x+'px,'+y+'px) scale('+scale+','+scale+')';
}


// get coords and get position
function coordinateItems(idName) {
  for(var i = 0; i < coors.length; i++){
    var x= (coors[i][0] / 3);
    var y= (coors[i][1] / 3);

    if(itemsPosition == 'absolute') {
      //asuming the image is 100x100

      var width1prc = divWidth / 135;
      var height1prc = divHeight /135;

      x = (x-(100/2))*width1prc;
      y = (y-(100/2))*height1prc;
    }

    gridItemPos(idName, i, x, y, 1);
  }
}

coordinateItems('gridDot');

function shapeTween(number) {
  coors = shuffleArray(coorsArr[number]);
  //coors = coorsArr[number];
  randomCoors('near', 0);
  coordinateItems('gridDot');
}


function animation() {
  setTimeout(shapeTween, 8000, 0);
  setTimeout(shapeTween, 16000, 3);
  setTimeout(shapeTween, 24000, 1);
  setTimeout(shapeTween, 32000, 3);
  setTimeout(shapeTween, 40000, 2);

  //setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We build infra'; },8000);
  //setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We combine the data'; },16000);
  //setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We collect data'; },24000);
}




function loopAnimation() {
  setInterval(animation, 48000);
}

animation();
loopAnimation();





function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
