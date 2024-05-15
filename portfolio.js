// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listener to hamburger menu icon
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    document.querySelector('.navbar').classList.toggle('active');
    // Toggle the 'closed' class on the menu toggle icon
    document.querySelector('.hamburger-menu').classList.toggle('closed');
  });
});


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