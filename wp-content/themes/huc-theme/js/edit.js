function setSave(eId) {

var x1 = '';
var cboxes = document.getElementsByName(eId+'keyword');
var len = cboxes.length;
for (var i=0; i<len; i++) {
    //alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
    if(cboxes[i].checked){
      x1 = x1+cboxes[i].value+',';
    }
}

var x2 = '';
var cboxes2 = document.getElementsByName(eId+'doc-type');
var len2 = cboxes2.length;
for (var i=0; i<len2; i++) {
    //alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
    if(cboxes2[i].checked){
      x2 = x2+cboxes2[i].value+',';
    }
}

var x3 = '';
var cboxes3 = document.getElementsByName(eId+'location');
var len3 = cboxes3.length;
for (var i=0; i<len3; i++) {
    //alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
    if(cboxes3[i].checked){
      x3 = x3+cboxes3[i].value+',';
    }
}

var x4 = '';
var cboxes4 = document.getElementsByName(eId+'edit-item');
var len4 = cboxes4.length;
for (var i=0; i<len4; i++) {
    //alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
    if(cboxes4[i].checked){
      x4 = x4+cboxes4[i].value+',';
    }
}


    //x1 = document.getElementById("58930keyword").value;

  //x2 = document.forms["58930"]["doc-type"].value;
  //x3 = document.forms["58930"]["location"].value;
  //x4 = document.forms["58930"]["edit-item"].value;

  alert('id:: '+eId+' - '+x2+' - '+x3+' - '+x4+' - '+x1);
  var ppath = '/234234-2/';
  var qstring = ppath+'?id='+eId+'&doc-type='+x2+'&location='+x3+'&edit-item='+x4+'&keyword='+x1;
  window.open(ppath+qstring,'ifr');
}
