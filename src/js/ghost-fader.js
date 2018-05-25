function ghostFader() {
  var dv = document.querySelector('.js-ghost-fader');

  setTimeout(function(){ dv.style.opacity = "0.3" }, 3000);
  setTimeout(function(){ dv.style.opacity = "0" }, 5000);
  setTimeout(ghostFader, 6000);

}
ghostFader();
