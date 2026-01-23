const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.contains('active') ? navMenu.classList.remove('active') : navMenu.classList.add('active');
  const spans = menuBtn.querySelectorAll('span');
  const isActive = navMenu.classList.contains('active');
  spans[0].style.transform = isActive 
    ? 'translateY(7px) rotate(45deg)' 
    : 'none';
  spans[1].style.opacity = isActive ? '0' : '1';
  spans[2].style.transform = isActive 
    ? 'translateY(-7px) rotate(-45deg)' 
    : 'none';
});
