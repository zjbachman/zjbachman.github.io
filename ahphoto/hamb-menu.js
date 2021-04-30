
/* Hamburger Menu */

let hamb = document.getElementById("hamb-menu");
let mainNav = document.getElementById("main-nav");

hamb.addEventListener("click",  () => {
    if(mainNav.className === "nav") {
        mainNav.className = "resp-nav"
    } else {
        mainNav.className = "nav";
    }
});