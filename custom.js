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
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/Img-Placeholder.png',
    technologies: ['HTML', 'CSS'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },

  {
    name: 'Second Article Title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/ImgPlaceholder.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Third Article Title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Fourth Article title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/ImgPlaceholder2.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Fifth Article Title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/ImgPlaceholder.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Sixth Article Title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/img_placeholder.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
  {
    name: 'Seventh Article title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem  ',
    image: './images/ImgPlaceholder2.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveversion: 'https://desorgui.github.io',
    source: 'https://github.com/desorgui',
  },
];

const workssection = document.querySelector('#cards-container');

for (let i = 0; i < WorkData.length; i += 1) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card format';
  if (i === 0) {
    cardDiv.classList.add('card-featured');
    cardDiv.classList.remove('card');
  }
  cardDiv.innerHTML = `
        <div class="featured-image">
          <img
            class="image"
            src="${WorkData[i].image}"
            alt="snapshot_img${i + 1}"
          />
        </div>`;
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
    listItem.className = 'itemCat';
    listItem.textContent = element;
    listContainer.appendChild(listItem);
  });

  workssection.appendChild(cardDiv);
  cardContent.innerHTML += `
    <button class="see-project-btn seeMore font-inter">See Project</button>`;
}

const button = document.querySelectorAll('.seeMore');
let popup = null;
button.forEach((element, index) => {
  element.addEventListener('click', () => {
    popup = document.createElement('div');
    popup.className = 'popup';
    popup.classList.add('popup-active');
    document.body.appendChild(popup);
    popup.innerHTML = `
    <nav class="close-popup" id="close-popup">
            <i class="fa-solid fa-xmark"></i>
          </nav>
          <h3 class="popup-title font-crete">
            ${WorkData[index].name}
          </h3>
    `;
    const listContainer = document.createElement('ul');
    listContainer.className = 'categories';
    popup.appendChild(listContainer);

    WorkData[index].technologies.forEach((element) => {
      const listItem = document.createElement('li');
      listItem.className = 'itemCat';
      listItem.textContent = element;
      listContainer.appendChild(listItem);
    });

    popup.innerHTML += `
    <div class="d-flex">
            <div class="popup-image">
              <img
              class="image"
                src="${WorkData[index].image}"
                alt="My popup image"
              />
            </div>
            <div class="right-side">
              <p class="popup-text font-inter">
                ${WorkData[index].description}
              </p>
              <div class="btngroup">
                <button class="popup-btn font-inter"><a href="${WorkData[index].liveversion}" class="anker">See Live </a><span></span
                  ><i class="fa-solid fa-satellite-dish"></i>
                </button>
                <button class="popup-btn font-inter"><a href="${WorkData[index].source}" class="anker">See Source </a><span><i class="fa-brands fa-github"></i></span>
                </button>
              </div>
            </div>
          </div>
    `;
    const close = document.querySelector('#close-popup');
    close.addEventListener('click', () => {
      popup.classList.remove('popup-active');
      popup.remove();
    });
  });
});
