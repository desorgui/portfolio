const hamburger = document.querySelector('#nav-button');
const closebtn = document.querySelector('.btn-close');
const seeproject = document.querySelector('.see-project-btn');
const mobileNav = document.querySelector('.mobile-nav');
const popup = document.querySelector('#popup');
hamburger.addEventListener('click', () => {mobileNav.classList.add('active'); });
closebtn.addEventListener('click', () => {mobileNav.classList.remove('active'); });
seeproject.addEventListener('click', () => {popup.classList.add('active'); });