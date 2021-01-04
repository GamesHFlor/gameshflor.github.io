var activenav;

function OpenNav(){
	if(document.getElementById("navigation").className == ""){
		document.getElementById("navigation").className = "activenav";
		activenav = true;
		curScroll = document.documentElement.scrollTop;
		checkScrolling();
	}else{
		document.getElementById("navigation").className = "";
		activenav = false;
		curScroll = document.documentElement.scrollTop;
		checkScrolling();
	}
}

function checkScrolling(){
	if(activenav){
		window.addEventListener('scroll', noScroll);
	}else{
		window.removeEventListener('scroll', noScroll);
	}
}

function noScroll(){
	window.scrollTo(0, curScroll);
}

(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 100 && !activenav) { 
      
      //replace 52 with the height of your header in px

	  document.getElementById("header").className = "hide";
      prevDirection = direction;
    }
    else if (direction === 1 && !activenav) {
	  document.getElementById("header").className = "";
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();