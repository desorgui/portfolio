const hamburger = document.querySelector('#nav-button');
const closebtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', () => {mobileNav.classList.add('active'); });
closebtn.addEventListener('click', () => {mobileNav.classList.remove('active'); });