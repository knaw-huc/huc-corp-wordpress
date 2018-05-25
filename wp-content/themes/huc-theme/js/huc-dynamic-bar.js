var hucHucDynBar = false;
var hucGridContentWidth = '100vw';
var hucDynamicBarWidth = '100vw';
var hucDynamicBarMargin = '-100vw';

// is sidebar off or on
function hucBarStatus(status) {
	'use strict';
	
	// set the status
	switch (status) {
    case 'on':
        hucHucDynBar = true;
        break;
    case 'off':
        hucHucDynBar = false;
        break;
	default:
        if (hucHucDynBar) {
			hucHucDynBar = false;
		} else {
			hucHucDynBar = true;
		}
        break;
	}
    sidebarHandler();
    
	 // take action depending on the status
	 if (hucHucDynBar) {
			sidebarHandler('show');
		} else {
			sidebarHandler('hide');
		}

}


//resize and show sidebar
function sidebarHandler() {
	'use strict';


	setVars();
	document.querySelector(".huc-grid-content").style.width = hucGridContentWidth; 
	document.querySelector(".huc-dynamic-bar").style.width = hucDynamicBarWidth;
	document.querySelector(".huc-dynamic-bar").style.marginRight = hucDynamicBarMargin; 



}


// OnClick huc-handleHucDynBar handler
var classname = document.getElementsByClassName("huc-handleHucDynBar");
var clickHucDynBar = function() {
	'use strict';
	hucBarStatus('on');
	
};
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', clickHucDynBar, false);
}

// close the bar
document.querySelector('.huc-handleHucDynBar-close').onclick = function() {
   'use strict';
	hucBarStatus('off');
   };


// set varibles for bar in several states
function setVars() {
	'use strict';
		//small 
	if (breakSideSmall.matches) { 
		if (hucHucDynBar) {
			hucGridContentWidth = '100vw';
			hucDynamicBarWidth = '100vw';
			hucDynamicBarMargin = '0px';
		} else {
			hucGridContentWidth = '100vw';
			hucDynamicBarWidth = '100vw';
			hucDynamicBarMargin = '-100vw';
		}
		

    }
	
	
	//medium
	if (breakSideMedium.matches){  
		if (hucHucDynBar) {
			hucGridContentWidth = 'calc(100vw - 350px';
			hucDynamicBarWidth = '350px';
			hucDynamicBarMargin = '0px';
		} else {
			hucGridContentWidth = '100vw';
			hucDynamicBarWidth = '350px';
			hucDynamicBarMargin = '-350px';
		}
    }
	
	
	
	//large
	if (breakSideBig.matches){   

		if (hucHucDynBar) {
			hucGridContentWidth = 'calc(100vw - 400px';
			hucDynamicBarWidth = '400px';
			hucDynamicBarMargin = '0px';
		}else {
			hucGridContentWidth = '100vw';
			hucDynamicBarWidth = '400px';
			hucDynamicBarMargin = '-400px';
		}

    }
}




function responsiveSideVals(){
	'use strict';
	//small 
	if (breakSideSmall.matches) {
		hucBarStatus('off');
    }
	
	//medium
	if (breakSideMedium.matches){
		hucBarStatus('off');
    }
	
	//large
	if (breakSideBig.matches){   
		hucBarStatus('on');
    }
	setVars();
}



// Set breakpoints for auto on screen

var breakSideSmall = window.matchMedia("only screen and (min-width: 0px) and (max-width: 770px)");
var breakSideMedium = window.matchMedia("only screen and (min-width: 770px) and (max-width: 1200px)");
var breakSideBig = window.matchMedia("only screen and (min-width: 1200px)");
//var breakSide = window.matchMedia("(max-width: 1200px)");
responsiveSideVals(); // Call listener function at run time
breakSideSmall.addListener(responsiveSideVals);
breakSideMedium.addListener(responsiveSideVals);
breakSideBig.addListener(responsiveSideVals);// Attach listener function on state changes




function tabHandler(getId) {
	'use strict';
	var myClasses = document.querySelectorAll('.huc-dynamic-bar-tab'),
    i = 0,
    l = myClasses.length;

	for (i; i < l; i++) {
		myClasses[i].style.display = 'none';
	}
	
	document.getElementById('huc-tab-'+getId).style.display = 'block';
}
