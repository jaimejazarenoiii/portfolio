document.getElementById("navToggle").addEventListener ("click", toggleNav);
function toggleNav() {
  var nav = document.getElementById("navMenu");
  var className = nav.getAttribute("class");
  if(className == "navbar-menu -has-background-secondary") {
    nav.className = "navbar-menu -has-background-secondary is-active";
  } else {
    nav.className = "navbar-menu -has-background-secondary";
  }
}
