document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Change header style on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      scrollToTopBtn.style.display = 'block';
    } else {
      header.classList.remove('scrolled');
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to top button functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Change header style on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      scrollToTopBtn.style.display = 'block';
    } else {
      header.classList.remove('scrolled');
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to top button functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
