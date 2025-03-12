// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile nav if open
    if (document.querySelector('.nav-links').classList.contains('active')) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Mobile Navigation Toggle
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});
