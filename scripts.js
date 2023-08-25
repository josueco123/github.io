const mobileMenuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});