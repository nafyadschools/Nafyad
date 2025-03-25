document.addEventListener('DOMContentLoaded', () => {
    console.log('Futuristic school website ready!');
    // Example: Add a dark mode toggle
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
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
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
  });
  