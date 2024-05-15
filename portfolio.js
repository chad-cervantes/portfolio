// Hamburger Menu Toggle
hamburgerMenu = document.querySelector(".hamburger-menu")
hamburgerMenu.onclick = function() {
  navBar = document.querySelector(".navbar")
  navBar.classList.toggle("active")
}