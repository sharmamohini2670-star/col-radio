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



//Audio functionality
document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const icon = playPauseBtn.querySelector('i');
    
    let clickTimer = null;

    function updateIcon(state) {
        if (state === 'play') {
            icon.className = 'fas fa-play';
        } else {
            icon.className = 'fas fa-pause';
        }
    }

    playPauseBtn.addEventListener('click', (e) => {
        if (clickTimer !== null) {
            clearTimeout(clickTimer);
            clickTimer = null;
           
            console.log("Double Click Detected: Resetting to Play");
            updateIcon('play');
        } else {
            clickTimer = setTimeout(() => {
                
                console.log("Single Click Detected: Toggling");
                if (icon.classList.contains('fa-play')) {
                    updateIcon('pause');
                } else {
                    updateIcon('play');
                }
                
                clickTimer = null;
            }, 250); 
        }
    });

    playPauseBtn.addEventListener('dblclick', (e) => {
        e.preventDefault();
    });
});