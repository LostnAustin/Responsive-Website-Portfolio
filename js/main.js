// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

//select dom
const navItem = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  //if not showing menu, then clicking will show menu
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //loop through items and add show class
    navItem.forEach(item => item.classList.add("show"));

    //set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //loop through items and remove show class
    navItem.forEach(item => item.classList.remove("show"));

    //set menu state back
    showMenu = false;
  }
}
