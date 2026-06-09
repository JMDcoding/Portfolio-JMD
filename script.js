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
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px',
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

// Project filtering system for secondary projects
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

// Case studies interactive tab switcher
const caseStudies = document.querySelectorAll('.case-study-card');
caseStudies.forEach((card) => {
  const tabButtons = card.querySelectorAll('.tab-btn');
  const tabPanes = card.querySelectorAll('.tab-pane');

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Deactivate all tab buttons in this card
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      
      // Deactivate all tab panes in this card
      tabPanes.forEach((pane) => {
        pane.classList.remove('active');
      });

      // Activate the clicked button
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Activate corresponding tab pane in this card
      if (tabPanes[index]) {
        tabPanes[index].classList.add('active');
      }
    });
  });
});
