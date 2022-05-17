const hamburger = document.querySelector('#nav-button');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');
const menuItems = document.querySelectorAll('.mb-item');
hamburger.addEventListener('click', () => {mobileNav.classList.add('active'); });
closeBtn.addEventListener('click', () => {mobileNav.classList.remove('active'); });
menuItems.forEach(el => el.addEventListener('click',() => {mobileNav.classList.remove('active'); }));