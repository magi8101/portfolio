// GSAP Animations
gsap.from(".profile-img", { duration: 1.5, opacity: 0, y: -20 });
gsap.from("h1.name", { duration: 1.5, opacity: 0, delay: 0.5, y: 20 });
gsap.from("p.bio", { duration: 1.5, opacity: 0, delay: 1, y: 20 });
gsap.from(".options", { duration: 1.5, opacity: 0, delay: 1.5, y: 20 });

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
