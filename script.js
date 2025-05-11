// DOM Elements
const header = document.querySelector('.header');
const branding = document.querySelector('.branding');

// Scroll Variables
let lastScroll = 0;
const scrollThreshold = 100;

// Scroll to top when branding is clicked
branding.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header scroll behavior
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Reset header when at top
    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }
    
    // Hide header when scrolling down past threshold
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        header.classList.add('hidden');
    } 
    // Show header when scrolling up
    else if (currentScroll < lastScroll) {
        header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});
// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.dataset.filter;
      
      // Filter items
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
// Add this at the end of your existing script.js

// Google Translate Implementation
function loadGoogleTranslate() {
  // Create script element
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

// Initialize Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,am,om', // English, Amharic, Oromo
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
  
  // Style the dropdown after it loads
  setTimeout(styleGoogleTranslate, 500);
}

// Style the Google Translate dropdown
function styleGoogleTranslate() {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.style.backgroundColor = 'transparent';
    select.style.color = 'white';
    select.style.border = '1px solid rgba(255,255,255,0.3)';
    select.style.borderRadius = '4px';
    select.style.padding = '5px 10px';
    select.style.cursor = 'pointer';
  }
}

// Load Google Translate when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadGoogleTranslate();
});
