const hamburger = document.querySelector('#nav-button');
let mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', () => {mobileNav.classList.add('active'); });
