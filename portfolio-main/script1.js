// Smooth Scroll to About Section when "Explore More" is clicked
document.querySelector('.overlay .btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Hover effect on About section buttons
  const aboutBtn = document.querySelector('.about-section .btn');
  aboutBtn.addEventListener('mouseover', function() {
    aboutBtn.style.backgroundColor = '#006f87';
  });
  aboutBtn.addEventListener('mouseout', function() {
    aboutBtn.style.backgroundColor = '#008cba';
  });
  
  // Parallax Effect for Image
  document.addEventListener('mousemove', function(event) {
    const image = document.querySelector('.interactive-img');
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;
  
    image.style.transform = `scale(1.05) translate(${mouseX * 30}px, ${mouseY * 30}px)`;
  });
  
  // Reveal effect for paragraphs in About section
  const aboutParagraphs = document.querySelectorAll('#about-paragraph, #about-paragraph2');
  aboutParagraphs.forEach((para, index) => {
    para.style.opacity = 0;
    setTimeout(() => {
      para.style.transition = 'opacity 1s ease-in-out';
      para.style.opacity = 1;
    }, 1000 * (index + 1));
  });
  
  // Lazy Loading of Images
  const img = document.querySelector('.interactive-img');
  const options = {
    root: null,
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.disconnect();
      }
    });
  }, options);
  
  observer.observe(img);
  
  // Intersection Observer to trigger animations when About Me section enters the viewport
  const aboutSection = document.querySelector('.about-section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.about-section h3').style.animation = 'fadeIn 1s forwards';
        document.querySelector('.about-section p').style.animation = 'fadeIn 1s forwards';
      }
    });
  }, { threshold: 0.2 });
  
  sectionObserver.observe(aboutSection);
  