function OnMouseOverGamepadButton(num){
  document.getElementById("gamepad-button-" + num).className = "gamepad-text hover";
}

function OnMouseOutGamepadButton(num){
  document.getElementById("gamepad-button-" + num).className = "gamepad-text";
}

function OnMouseOverAppButton(){
  document.getElementById("getiton").className = "app-button-inner-text hover";
  document.getElementById("googleplay").className = "app-button-inner-text hover";
}

function OnMouseOutAppButton(){
  document.getElementById("getiton").className = "app-button-inner-text";
  document.getElementById("googleplay").className = "app-button-inner-text";
}

function OnMouseOverGamesAppButton(){
  document.getElementById("getiton-games").className = "app-button-inner-text-games hover";
  document.getElementById("googleplay-games").className = "app-button-inner-text-games hover";
}

function OnMouseOutGamesAppButton(){
  document.getElementById("getiton-games").className = "app-button-inner-text-games";
  document.getElementById("googleplay-games").className = "app-button-inner-text-games";
}

function OnMouseOverPPButton(){
  document.getElementById("privacypolicy").className = "pp-button-inner-text hover";
}

function OnMouseOutPPButton(){
  document.getElementById("privacypolicy").className = "pp-button-inner-text";
}

var activenav;

function OpenNav(){
  document.getElementById("navigation").className = "activenav";
  activenav = true;
  curScroll = document.documentElement.scrollTop;
  checkScrolling();
}

function CloseNav(){
  document.getElementById("navigation").className = "";
  activenav = false;
  curScroll = document.documentElement.scrollTop;
  checkScrolling();
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

function SplitText(node) {
  var text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

  for (var i = 0; i < text.length; i++) {
    var letter = document.createElement("span");
    letter.style.display = "inline-block";
    letter.style.position = "absolute";
    letter.appendChild(document.createTextNode(text.charAt(i)));
    node.parentNode.insertBefore(letter, node);

    var positionRatio = i / (text.length - 1);
    var textWidth = letter.clientWidth;

    var indent = 100 * positionRatio;
    var offset = -textWidth * positionRatio;
    letter.style.left = indent + "%";
    letter.style.marginLeft = offset + "px";

    //console.log("Letter ", text[i], ", Index ", i, ", Width ", textWidth, ", Indent ", indent, ", Offset ", offset);
  }

  node.parentNode.removeChild(node);
}

function Justify() {
  var TEXT_NODE = 3;
  var elem = document.getElementById("character_justify");
  elem = elem.firstChild;

  while (elem) {
    var nextElem = elem.nextSibling;

    if (elem.nodeType == TEXT_NODE)
      SplitText(elem);

    elem = nextElem;
  }
}