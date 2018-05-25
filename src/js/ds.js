function codeDisplay(file, id) {
  var head = '<a name="'+id+'"></a><h2>'+capitalizeFirstLetter(id)+'</h2>';
  //html
  var xhttpH = new XMLHttpRequest();
  xhttpH.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var importcode = this.responseText;
      var theCode = importcode
      importcode = importcode.replace(/</g, "&lt;");
      importcode = importcode.replace(/>/g, "&gt;");
      output = '<pre><code>'+importcode+'</code></pre>';

      var el = document.querySelector('#'+id);
      el.innerHTML += head+theCode+'<h3>HTML</h3>'+output;
    }
  };
  xhttpH.open("GET", file+'.html', true);
  xhttpH.send();




  //jsx
  var xhttpJ = new XMLHttpRequest();
  xhttpJ.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var importcode = this.responseText;
      importcode = importcode.replace(/</g, "&lt;");
      importcode = importcode.replace(/>/g, "&gt;");
      output = '<pre><code>'+importcode+'</code></pre>';

      var el = document.querySelector('#'+id);
      el.innerHTML += '<h3>JSX</h3>'+output;
    }
  };
  xhttpJ.open("GET", 'prebuild/'+file+'.jsx', true);
  xhttpJ.send();



}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
