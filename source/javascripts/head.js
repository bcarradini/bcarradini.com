
//
// Mobile Safari in standalone mode (from https://gist.github.com/kylebarrow/1042026)
//
// TODO: Decide if you really want this. Goes with meta "apple-mobile-web-app-capable" in layout.erb
//
if(("standalone" in window.navigator) && window.navigator.standalone){

  // If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
  var noddy, remotes = false;
  
  document.addEventListener('click', function(event) {
    
    noddy = event.target;
    
    // Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
    while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
      noddy = noddy.parentNode;
    }
    
    if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
    {
      event.preventDefault();
      document.location.href = noddy.href;
    }
  
  },false);
}

// ======================================================================
// Expanding and Collapsing Mobile Menu
// ======================================================================
function expandMobileMenu() {
 document.getElementById("main_menu").classList.toggle("expand_mobile_menu");
}
// Collapse menu if user clicks anywhere else but the mobile menu button
window.onclick = function(event) {
  if (!event.target.matches('.mobile_menu_button')) {
    document.getElementById("main_menu").classList.remove("expand_mobile_menu");
  }
}

