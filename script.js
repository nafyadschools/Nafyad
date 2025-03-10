document.addEventListener('DOMContentLoaded', () => {
    console.log('Futuristic school website ready!');

    // Create dark mode toggle button
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle Dark Mode';
    toggle.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 15px;
      background: #0ff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    `;
    document.body.appendChild(toggle);

    // Apply saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Add dark mode styling
    const style = document.createElement('style');
    style.textContent = `
      .dark-mode {
        background: #000;
        color: #0ff;
      }
      .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Ensure Contact links to Footer
    document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
    });

    // Ensure Admissions links to Latest News
    document.querySelector('a[href="#admissions"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#news').scrollIntoView({ behavior: 'smooth' });
    });

    // Highlight active section in navigation
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main > div');
    
    function highlightNav() {
        let fromTop = window.scrollY;
        
        sections.forEach(section => {
            const link = document.querySelector(`nav a[href="#${section.id}"]`);
            if (
                section.offsetTop - 100 <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    // Scroll Reveal Effect
    const revealElements = document.querySelectorAll('.glass-effect');
    revealElements.forEach(el => el.classList.add('hidden'));

    function revealOnScroll() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Interactive hover effect for sections (reduced glow)
    document.querySelectorAll('.glass-effect').forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.boxShadow = '0 0 8px #0ff'; // Reduced glow intensity
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)'; // Softer shadow
        });
    });
});
