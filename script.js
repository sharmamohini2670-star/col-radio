const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  const spans = menuBtn.querySelectorAll('span');
  spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(50deg) translate(6px, 6px)' : 'none';
  spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-50deg) translate(6px, -6px)' : 'none';
});
