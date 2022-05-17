const hamburger = document.querySelector('#nav-button');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');
const menuItem = document.querySelector('.mb-item');
hamburger.addEventListener('click', () => {mobileNav.classList.add('active'); });
closeBtn.addEventListener('click', () => {mobileNav.classList.remove('active'); });
menuItem.addEventListener('click', () => {mobileNav.classList.remove('active');});
