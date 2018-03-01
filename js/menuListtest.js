var open = 0;
function toggleMenu() {
  if (open == 0) {
  	document.getElementById("mainNav").style.width = "250px";
    document.getElementById("mainNav").className = "open";//class Name property returns/sets the class name of element or set the value of nav element to open
    document.getElementById("mainNav").style.zIndex = "10";//z-index property returns/sets the stack order of positioned element

    open = 1;
  }
  else if (open == 1) {
    document.getElementById("mainNav").className = "closed";
    open = 0;
  }
}