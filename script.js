const dropdownButtons = document.querySelectorAll('.dropdown');
let timeout;

dropdownButtons.forEach((dropdownButton) => {
    const dropdownContent = dropdownButton.querySelector('.dropdown-content');

    dropdownButton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownContent.style.display = 'block';
    });
    dropdownButton.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 100);
    });
});

// navbar mobile
const menuBar = document.querySelector('.menu-bar');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu')

function navCollapse() {
    menuBar.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');

    menuBar.style.transition = '.3s'

    nav.classList.toggle('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menubar.classList.remove('active');
        nav.classList.remove('active');

        body.classList.remove('nav-menu-active');
    });
});