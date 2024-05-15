// Hamburger Menu Toggle
hamburgerMenu = document.querySelector(".hamburger-menu")
hamburgerMenu.onclick = function() {
  navBar = document.querySelector(".navbar")
  navBar.classList.toggle("active")
}

// Highlight that you're on the current page
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add 'active' class to the clicked tab
    tab.classList.add('active');
  });
});