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

//ListenerPoll Functionality

document.addEventListener('DOMContentLoaded', function() {
    const pollForm = document.getElementById('listenerPoll');
    const options = document.querySelectorAll('.listener-poll-option');
    const successMsg = document.getElementById('pollSuccess');

    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('listener-selected'));
            this.classList.add('listener-selected');
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });
    pollForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        successMsg.style.display = 'block';
        const btn = pollForm.querySelector('.listener-submit-btn');
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";

        setTimeout(() => {
            successMsg.style.display = 'none';
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        }, 3000);
    });
});
