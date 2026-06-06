// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-navigation');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Intersection Observer for fade-in animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// Mobile navigation toggle
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Smooth scrolling and closing mobile nav on click
const navLinks = document.querySelectorAll('.site-nav a, .header-cta, .button');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Project filtering system
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and add to clicked
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'flex';
        // Re-trigger animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        // Smooth transition out, then hide
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Interactive terminal simulator
const terminal = document.getElementById('interactive-terminal');

if (terminal) {
  const terminalLines = [
    { text: "jmd@infra:~$ systemctl status security-core", type: "input" },
    { text: "● security-core.service - Core Security Infrastructure", type: "output" },
    { text: "   Active: active (running) since Sat 2026-06-06", type: "output" },
    { text: "   CGroup: /system.slice/security-core.service", type: "output" },
    { text: "           ├─cowrie-honeypot --port 2222", type: "output" },
    { text: "           └─pfsense-monitor --vlan 10,20", type: "output" },
    { text: "jmd@infra:~$ check-certs --status", type: "input" },
    { text: "[+] Cisco CCNA: VALIDATED", type: "output", color: "var(--accent-green)" },
    { text: "[+] Fortinet NSE 4: VALIDATED", type: "output", color: "var(--accent-green)" },
    { text: "jmd@infra:~$ cat candidate.json", type: "input" },
    { text: '{\n  "name": "Jean-Marc Dussaud",\n  "role": "Systems & Networks",\n  "seeking": "Alternance Sept 2026",\n  "location": "Rennes (France)"\n}', type: "output", color: "var(--accent-cyan)" },
    { text: "jmd@infra:~$ ", type: "input", last: true }
  ];

  let lineIndex = 0;

  function typeTerminalLine() {
    if (lineIndex >= terminalLines.length) return;

    const lineData = terminalLines[lineIndex];
    const lineElement = document.createElement('p');
    
    if (lineData.color) {
      lineElement.style.color = lineData.color;
    }

    if (lineData.type === 'input') {
      lineElement.className = 'cmd-prompt';
      terminal.appendChild(lineElement);
      
      let charIndex = 0;
      const textToType = lineData.text;
      
      function typeChar() {
        if (charIndex < textToType.length) {
          lineElement.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, 40 + Math.random() * 30);
        } else {
          // If it's the last line, append cursor
          if (lineData.last) {
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            lineElement.appendChild(cursor);
          } else {
            lineIndex++;
            setTimeout(typeTerminalLine, 400);
          }
        }
      }
      typeChar();
    } else {
      lineElement.className = 'cmd-output';
      // Outputting block blocks immediately or pre-formatted
      lineElement.style.whiteSpace = 'pre-wrap';
      lineElement.textContent = lineData.text;
      terminal.appendChild(lineElement);
      
      lineIndex++;
      setTimeout(typeTerminalLine, 500);
    }

    // Scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
  }

  // Start terminal typing
  setTimeout(typeTerminalLine, 1000);
}
