// Menu side
var sideMenu = document.getElementById("nav-links")

// open menu
function openMenu() {
    sideMenu.style.right = "0" ;
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Typing Animation

var text = document.querySelector(".sec-text");

var textLoad = () => {
    setTimeout(() => {
        text.textContent = "Segar";
    }, 0);
    setTimeout(() => {
        text.textContent = "Nikmat";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Murah :)";
    }, 8000);
}
 textLoad();
 setInterval(textLoad, 12000);

   