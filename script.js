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
  `;
  document.head.appendChild(style);

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Dynamic greeting based on time of day
  const greeting = document.createElement('div');
  greeting.style.cssText = `
      position: absolute;
      top: 50px; /* Moved lower */
      right: 50px; /* Moved slightly to the left */
      font-size: 1.2rem;
      color: #0ff;
  `;
  
  const hour = new Date().getHours();
  if (hour < 12) {
      greeting.textContent = 'Good Morning, Welcome to Nafyad School!';
  } else if (hour < 18) {
      greeting.textContent = 'Good Afternoon, Welcome to Nafyad School!';
  } else {
      greeting.textContent = 'Good Evening, Welcome to Nafyad School!';
  }
  document.body.appendChild(greeting);

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
