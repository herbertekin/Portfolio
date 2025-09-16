// ======================
// Mobile Menu Toggle
// ======================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ======================
// Animate Skills Progress Bars
// ======================
const progressBars = document.querySelectorAll('.progress-bar');

const animateBars = () => {
  const triggerBottom = window.innerHeight * 0.9;
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const skillLevel = bar.getAttribute('data-skill');
    if (barTop < triggerBottom) {
      bar.style.width = skillLevel + '%';
    }
  });
};

window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);
