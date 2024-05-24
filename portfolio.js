// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listener to hamburger menu icon
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    document.querySelector('.navbar').classList.toggle('active');
    // Toggle the 'closed' class on the menu toggle icon
    document.querySelector('.hamburger-menu').classList.toggle('closed');
  });

  // Add click event listeners to each menu item
  document.querySelectorAll('.navbar .tab').forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
      // Remove the 'active' class from the navbar
      document.querySelector('.navbar').classList.remove('active');
      // Remove the 'closed' class from the menu toggle icon
      document.querySelector('.hamburger-menu').classList.remove('closed');
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
  }, 2000);  // 2000 milliseconds = 3 seconds
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

/* ---- particles.js config ---- */

particlesJS("particle-bg", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


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