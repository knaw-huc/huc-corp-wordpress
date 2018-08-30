var clClose = document.querySelectorAll(".js-close-menu");
for (i = 0; i < clClose.length; i++) {
  //alert('close');
  clClose[i].addEventListener('click', function() {
    document.querySelector('.pop-navigation').style.display = "none";

  });
}

var clOpen = document.querySelectorAll(".js-open-menu");
for (i = 0; i < clOpen.length; i++) {
  //alert('open');
  clOpen[i].addEventListener('click', function() {
    document.querySelector('.pop-navigation').style.display = "block";
  });
}
