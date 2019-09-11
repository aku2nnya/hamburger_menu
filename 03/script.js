// Elements
const navmenu = document.querySelector('.navmenu');
const hambergerIcon = document.querySelector('.hamburger-icon');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
let navmenuDisplay = false;

// Functions
function toggleNav() {
  navmenuDisplay = !navmenuDisplay;
  if (navmenuDisplay) {
    home.classList.add('active');
    about.classList.add('active');
    contact.classList.add('active');
    navmenu.classList.add('active');
  } else {
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    navmenu.classList.remove('active');
  }
}

// Listeners
hambergerIcon.addEventListener('click', toggleNav);