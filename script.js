const revealElements = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-navigation');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

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
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.site-nav a, .header-cta, .button');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    // Close mobile nav when a link is clicked
    if (siteNav && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
