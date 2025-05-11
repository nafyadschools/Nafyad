// DOM Elements
const branding = document.querySelector('.branding');

// 1. Scroll to top when branding is clicked (with smooth behavior)
branding.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
        item.style.display = (filterValue === 'all' || item.dataset.category === filterValue) 
          ? 'block' 
          : 'none';
      });
    });
  });

  // Initialize Google Translate
  loadGoogleTranslate();
});

// Google Translate Implementation
function loadGoogleTranslate() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,am,om',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
  
  // This removes the top bar
  if (window.google && google.translate) {
    google.translate.TranslateService.prototype.showBanner = function() {
      return false;
    };
  }
  
  setTimeout(styleGoogleTranslate, 500);
}

function styleGoogleTranslate() {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    Object.assign(select.style, {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer'
    });
  }
}