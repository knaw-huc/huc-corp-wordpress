// responsive navigation
var navIsVis = false;
var openClass = '.js-open';
var closeClass = '.js-close';
var siteClass = '.site-body';
var navClass = '.site-nav';
var contentClass = '.site-content';

var asideSize = '300px';
var bodyWidth = '100vw';
var bodyMarginL = '0px';
var asideMarginL = '-'+asideSize+')';
var aSideWidth = asideSize;
var aSideZ = 500;


function responsiveHandler() {
  if (screenIsSmall.matches) {
    navIsVis = false;
    document.querySelector(openClass).style.display='block';
    document.querySelector(closeClass).style.display='block';
  }
  if (screenIsMedium.matches) {
    navIsVis = false;
    document.querySelector(openClass).style.display='block';
    document.querySelector(closeClass).style.display='block';
  }
  if (screenIsBig.matches) {
    if (!home){
      navIsVis = true;
    }

    document.querySelector(openClass).style.display='none';
    document.querySelector(closeClass).style.display='none';
  }
  handleAside();
}
responsiveHandler();
screenIsSmall.addListener(responsiveHandler);
screenIsMedium.addListener(responsiveHandler);
screenIsBig.addListener(responsiveHandler);



//handle the aside ON and OFF in 3 sizes
function handleAside() {

  bodyMarginL = '0px';

  if (navIsVis == true) {
    bodyWidth = '100vw';
    asideMarginL = '0px';
    aSideWidth = asideSize;
    if (screenIsSmall.matches) {
      bodyWidth = '100vw';
      asideMarginL = '0px';
      aSideWidth = '100vw';
    }
  }else if (navIsVis == false) {
    bodyWidth = '100vw'; //'calc(100vw - '+asideSize+')';
    asideMarginL = '-'+asideSize+'';
    if (screenIsSmall.matches) {
      bodyWidth = '100vw';
      asideMarginL = '-100vw';

    }
  }
  if (screenIsBig.matches) {
    bodyWidth = '100vw';
    asideMarginL = '0px';
    aSideWidth = asideSize;
  }

  if (navIsVis) {
    aSideZ = 1500;
  } else {
    aSideZ = 500;
  }

  document.querySelector(siteClass).style.width = bodyWidth;
  document.querySelector(contentClass).style.marginLeft = bodyMarginL;
  document.querySelector(navClass).style.marginLeft = asideMarginL;
  document.querySelector(navClass).style.width = aSideWidth;
  document.querySelector(navClass).style.zIndex = aSideZ;
}


//handle the onClicks
document.querySelector(openClass).onclick = function() {
  navIsVis = true;
  handleAside();
   };
document.querySelector(closeClass).onclick = function() {
  navIsVis = false;
  handleAside();
  };
