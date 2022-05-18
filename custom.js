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


const workssection = document.querySelector('#cards-container');

for (let i = 0; i <= 5; i += 1) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card format';
  if (i == 0){
    cardDiv.classList.add("card-featured");
    cardDiv.classList.remove("card");
  }
  cardDiv.innerHTML = `
        <div class="featured-image">
          <img
            class="image"
            src="${WorkData[i].image}"
            alt="snapshot_img${i + 1}"
          />
        </div>`
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardDiv.appendChild(cardContent);
        cardContent.innerHTML = `
              <h3 class="work-title">${WorkData[i].name}</h3>
              <p class="work-description font-inter">
                  ${WorkData[i].description}
              </p>
          `;
        const listContainer = document.createElement('ul');
        listContainer.className = 'categories';
        cardContent.appendChild(listContainer);
        WorkData[i].technologies.forEach((element) => {
          const listItem = document.createElement('li');
          listItem.textContent = element;
          listContainer.appendChild(listItem);
        });
  
  workssection.appendChild(cardDiv);
  cardContent.innerHTML += `
    <button class="see-project-btn seeMore font-inter">See Project</button>`;
}


