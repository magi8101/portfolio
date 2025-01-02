document.addEventListener("DOMContentLoaded", function () {
    // Image Hover Zoom Effect
    const image = document.querySelector('.interactive-img');
    const overlay = document.querySelector('.overlay');
    
    image.addEventListener('mouseenter', function () {
      image.style.transform = "scale(1.1)";
      overlay.style.visibility = "visible";
      overlay.style.opacity = "1";
    });
    
    image.addEventListener('mouseleave', function () {
      image.style.transform = "scale(1)";
      overlay.style.visibility = "hidden";
      overlay.style.opacity = "0";
    });
  
    // Smooth Scroll for "Learn More" button
    const learnMoreBtn = document.querySelector('.overlay .btn');
    learnMoreBtn.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  
    // Modal Pop-Up Functionality
    const imageWrapper = document.querySelector('.image-wrapper');
  
    imageWrapper.addEventListener('click', function () {
      showModal();
    });
  
    function showModal() {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>My Web Development Journey</h2>
          <p>I have a passion for building dynamic, responsive, and intuitive websites. Currently studying at SRM University, I am developing my skills in front-end development and UI/UX design.</p>
          <p>Click below to discover my skills and experience.</p>
          <a href="skills.html" class="btn">Explore My Skills</a>
        </div>
      `;
      document.body.appendChild(modal);
      
      // Close Modal Event
      const closeBtn = modal.querySelector('.close-btn');
      closeBtn.addEventListener('click', function () {
        modal.remove();
      });
      
      // Close Modal when clicking outside
      window.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.remove();
        }
      });
  
      // Show Modal with animation
      modal.classList.add('show');
    }
  
    // Scroll-triggered Animations
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        document.querySelector('.info-box').classList.add('fade-in');
      }
    });
  
    // Intersection Observer for Fade-in Effect on Scroll
    const infoBox = document.querySelector('.info-box');
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.5 });
  
    fadeInObserver.observe(infoBox);
  });
  