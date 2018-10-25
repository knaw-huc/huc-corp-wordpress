var genSvgStart = '<svg width="100%" height="90%">';
var genSvgEnd = '</svg>';
var genSvgbody = '';

var useGroups = false;
if (perRingAmountArray.length != 0) {
  var useGroups = true;
}



// build the grid

if (useGroups) { // if uses groups (rings)
  genSvgbody = '<g class="group" id="group0">';
  var j=0;
}

for (var c = 0; c < coors.length; c++) {


    if (useGroups && (perRingAmountArray[j] == c)) {// if uses groups (rings)
      j++;
      genSvgbody = genSvgbody+'</g><g class="group" id="group'+j+'">';
    }
    genSvgbody = genSvgbody+'<circle cx="50%" cy="50%" r="'+radius+'" class="gridDot" id="gridDot'+c+'" />';
}

if (useGroups) {// if uses groups (rings)
  genSvgbody = genSvgbody+'</g>';
}



// injest grid svg in to html
var genSvg =genSvgStart+genSvgbody+genSvgEnd;
document.getElementById(divName).innerHTML = genSvg;
