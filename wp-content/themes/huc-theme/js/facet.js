var dArr = [];
var kArr = [];
var lArr = [];


// create selected items bar from array
function handleFacetBar() {
  var d = getUrlParameter('d');
  var k = getUrlParameter('k');
  var l = getUrlParameter('l');

  if (d != ''){
    dArr = d.split(',');
  }
  if (k != ''){
    kArr = k.split(',');
  }
  if (l != ''){
    lArr = l.split(',');
  }

  var barStr ='';
  var index;
  for (index = 0; index < dArr.length; ++index) {
      barStr = barStr+'<a href="#" onclick="handleFacetDel(\''+dArr[index]+'\');return false;"><span class="facetSelected">'+dArr[index]+' x </span></a>';
    }
  for (index = 0; index < kArr.length; ++index) {
        barStr = barStr+'<a href="#" onclick="handleFacetDel(\''+kArr[index]+'\');return false;"><span class="facetSelected">'+kArr[index]+' x </span></a>';
      }
  for (index = 0; index < lArr.length; ++index) {
        barStr = barStr+'<a href="#" onclick="handleFacetDel(\''+lArr[index]+'\');return false;"><span class="facetSelected">'+lArr[index]+' x </span></a>';
      }
  document.getElementById("facetSelection").innerHTML = barStr;
}
handleFacetBar();


//sidebar onclick add facet item
function handleFacetSearch(q) {
  var newType = q.charAt(0);
  if (newType =='d') {
    dArr.push(q.slice(1));
  }
  if (newType =='k') {
    kArr.push(q.slice(1));
  }
  if (newType =='l') {
    lArr.push(q.slice(1));
  }

  console.log(dArr);
  console.log(kArr);
  console.log(lArr);
  newLink();
}

// delete facet item
function handleFacetDel(del) {
  var index = dArr.indexOf(del);
   if (index > -1) {
      dArr.splice(index, 1);
   }
   newLink();
}

// go the the new page
function newLink(){
  var subPath = '/the-archive/';
  var dStr = dArr.toString();
  var kStr = kArr.toString();
  var lStr = lArr.toString();
  window.location.href = subPath+'?d='+dStr+'&k='+kStr+'&l='+lStr;
}

// get querystring
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
