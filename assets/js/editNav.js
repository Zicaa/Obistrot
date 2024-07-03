// Nabar qui se déploie/replie en cliquant sur l'icône menu burger
function editNav() {
    let navbar = document.getElementById("myTopnav");
  
    if (navbar.className === "flexbar") {
      navbar.className += " responsive";
  
    } else {
      navbar.className = "flexbar";
    }
  }