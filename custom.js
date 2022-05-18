const hamburger = document.querySelector('#nav-button');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');
const menuItems = document.querySelectorAll('.mb-item');
hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});
menuItems.forEach((el) => el.addEventListener('click', () => {
  mobileNav.classList.remove('active');
}));

const WorkData = [
  {
    name: 'First Article Title',
    description: 'Projet Description',
    image: './images/Img-Placeholder.png',
    technologies: ['HTML', 'CSS'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },

  {
    name: 'Second Article Title',
    description: 'Projet Description',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Third Article Title',
    description: 'Projet Description',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Fourth Article title',
    description: 'Projet Description',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Fifth Article Title',
    description: 'Projet Description',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Sixth Article Title',
    description: 'Projet Description',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
];

