// VW
const vw = window.innerWidth;
//VH
const vh = window.innerHeight;
console.log("Viewport Width: " + vw + "px" );
console.log("Viewport Height: " + vh + "px");

// OPENS AND CLOSES HAMBURGER MENU TOGGLE & CLICK ON ANY TAB
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menu_toggle = document.querySelector('.hamburger-menu')
  // Add click event listener to hamburger menu icon
 menu_toggle.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    const active_nav = document.querySelector('.navbar')
    active_nav.classList.toggle('active');
    // Toggle the 'closed' class on the menu toggle icon
    const closed_nav = document.querySelector('.hamburger-menu')
    closed_nav.classList.toggle('closed');
  });

  // Add click event listeners to each menu item
  const tabs = document.querySelectorAll('.navbar .tab')
  tabs.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
      // Remove the 'active' class from the navbar
      const active_tab = document.querySelector('.navbar');
      active_tab.classList.remove('active');
      // Remove the 'closed' class from the menu toggle icon
      const closed_menu_toggle = document.querySelector('.hamburger-menu')
      closed_menu_toggle.classList.remove('closed');
    });
  });
});

// Load Spinner
window.addEventListener("load", () => {
  const loader = document.querySelector(".load-spinner");

  setTimeout(() => {
    loader.classList.add("load-spinner-hidden");

    loader.addEventListener("transitionend", () => {
      if (loader.parentNode) {  // Check if the loader is still in the DOM
        loader.parentNode.removeChild(loader);
      }
    });
  }, 500);  // 500 milliseconds = 0.5 second
});

// Highlight that you're on the current section; used IntersectionObserver to be on the current when scrolling up or down

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  const options = {
      root: null,
      threshold: 0.3,
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href').substring(1) === entry.target.id) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});

// Up Icon (back to home section)
document.addEventListener("DOMContentLoaded", function() {
  const upIcon = document.querySelector('.up-icon');

  function toggleUpIcon() {
    if (window.scrollY === 0) {
      upIcon.classList.add('hidden');
    } else {
      upIcon.classList.remove('hidden');
    }
  }

  // Initial check
  toggleUpIcon();

  // Add event listener for scroll events
  window.addEventListener('scroll', toggleUpIcon);
});

// TARGETS ALL MODALS
// Step 1: Make variables
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Step 2: Make eventListeners
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // dataset can access all of the data attributes as if they're javascript objects
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

// Step 3: Make functions
function openModal(modal) {
  if (modal == null) return 
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// CONTACT ME FORM 
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch('http://localhost/portfolio/send_message.php', {
    method: form.method,
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';

    if (data.includes('Message sent successfully!')) {
      messageBox.className = 'message-box success';
      messageBox.textContent = 'Message sent successfully!';
      form.reset();
    } else {
      messageBox.className = 'message-box error';
      messageBox.textContent = data;
    }
  })
  .catch(error => {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
    messageBox.className = 'message-box error';
    messageBox.textContent = 'An error occurred. Please try again later.';
 });
});


/* ---- particles.js config ---- */

// particlesJS("particle-bg", {
//   "particles": {
//     "number": {
//       "value": 380,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#ff4500"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#f7db4b",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);