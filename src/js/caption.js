
function generateCaption() {

  var y = document.getElementById("content").getElementsByTagName("IMG");
  var i;
  var outer = '';
  var align = '';

  //
  for (i = 0; i < y.length; i++) {
    align = '';
    var xSrc = y[i].getAttribute("src");
    var sub = "#wide";
    console.log(xSrc);

    // position left right
    if (xSrc.indexOf(sub) == -1) {
      align = 'illu-left';
      if (isEven(i)) {
        align = 'illu-right';
      }

    }

    var outer = y[i].outerHTML;
    y[i].outerHTML = '<div class="illustration '+align+'">'+outer+'<div class="illustration-caption">'+y[i].getAttribute("alt")+'</div></div>';
  }
}

function isEven(n) {
   return n % 2 == 0;
}

generateCaption();
