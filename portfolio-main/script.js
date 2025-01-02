// GSAP Animations for smooth transitions
gsap.from("h1.section-title", { duration: 1.5, opacity: 0, y: -20 });
gsap.from(".section-text", { duration: 1.5, opacity: 0, delay: 0.5, y: 20 });

// Particles.js Background Setup
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
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
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const bentoItems = document.querySelectorAll('.bento-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bentoItems.forEach(item => {
    observer.observe(item);
  });
});
