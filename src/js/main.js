'use strict'

const menuOpen = document.querySelector('.menu-open');
const aboutBtn = document.querySelector('.about_btn');
const aboutArticle = document.querySelector('.about_article');
const factory = document.querySelector('.factory');
const btnDisFac = document.querySelectorAll('.btn-dis-fac');
const factoryDiscrDoor = document.querySelectorAll('.factory-discr-door');
const discOpen = document.querySelectorAll('.disc-open');
const header = document.querySelector('header');
const mainContact = document.querySelector('.main-contact');
const factoryDiscrDoorsContainer = document.querySelectorAll('.factory-discr-doors-container');
let scrollState;
let prevState;

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.btn_detail-info')) {
    spec.classList.add('spec-open');
  }
  if (target.closest('.spec-btn') || target.closest('.scrollBottom') ){
    spec.classList.remove('spec-open');
  }
  if (target.closest('.menu_btn')) {
    menuOpen.classList.remove('closed');
    menuOpen.classList.add('opened-flex');
  }
  if (target.closest('.close-btn')) {
    menuOpen.classList.remove('opened-flex');
    menuOpen.classList.add('closed');
  }
  if (target.closest('.about_btn')) {
    aboutArticle.classList.add('max');
    aboutBtn.classList.add('hide-btn-about');
  }
  if (target.closest('.click-discr') || target.closest('.factory-btn')) {
    factory.hidden = true;
    for (let index = 0; index < factoryDiscr.length; index++) {
      const element = factoryDiscr[index];
      if (element.dataset.factory === target.dataset.factory) {
        element.hidden = false;
        factoryDiscrOpen = element;
      }
    };
  }
  /* if (target.closest('.btn-dis-fac') || target.closest('.header-link')) {
    factoryDiscrOpen.hidden = true;
    factoryDiscrOpen = null;
    factory.hidden = false;
  } */
  if (target.closest('.modal-zoom')) {
    document.querySelector('.modal-img-scale').src = target.attributes.src.value;
    document.querySelector('.caption-img').textContent = target.alt;
    document.querySelector('.modal-img').hidden = false;
  }
  if (target.closest('.modal-img span')) {
    document.querySelector('.modal-img').hidden = true;
    document.querySelector('.modal-img-scale').src = '';
    document.querySelector('.caption-img').textContent = '';
  }
  if (target.closest('.fact-open-desc')) {
    scrollState = scrollY;
    const btnOpen = target.closest('.fact-open-desc');
    // data selection
    const newPrice = btnOpen.previousElementSibling;
    const textPrice = newPrice.textContent;
    const newName = newPrice.previousElementSibling.textContent;
    const firstSrc = btnOpen.parentElement.previousElementSibling.firstElementChild.attributes.src.value;
    const secondSrc = btnOpen.parentElement.previousElementSibling.lastElementChild.attributes.src.value;
    const mountingInfo = document.querySelector(".mounting-info").cloneNode(true);
    const doorSpec = document.querySelector('.door-spec').cloneNode(true);
    // create card
    const card = document.createElement("div");
    card.classList.add("factory-discr-last");
    card.insertAdjacentHTML('afterbegin', '<button class="disc-open_btn-close" type="button" aria-label="close"></button>')

    const cardFirstDiv = document.createElement("div");
    cardFirstDiv.classList.add("factory-discr-main-door");
    const cardH = document.createElement("h2");
    cardH.classList.add("factory-strong");
    cardH.textContent = newName;
    cardFirstDiv.appendChild(cardH);

    const images = document.createElement("div");
    images.classList.add("factory-discr-main-door_block");
    images.classList.add("main-door_block");

    const firstImage = document.createElement("img");
    firstImage.classList.add("main-door_block-img");
    firstImage.classList.add("modal-zoom");
    firstImage.setAttribute('src', firstSrc);

    const secondImage = document.createElement("img");
    secondImage.classList.add("main-door_block-img");
    secondImage.classList.add("modal-zoom");
    secondImage.setAttribute('src', secondSrc);

    images.append(firstImage, secondImage);
    cardFirstDiv.appendChild(images);

    const priceInfo = document.createElement("div");
    priceInfo.classList.add("factory-discr-main-door_info");
    const priceInfoLast = document.createElement("div");
    priceInfoLast.classList.add("main-door_price");
    priceInfoLast.classList.add("main-door_price-last");
    priceInfoLast.insertAdjacentHTML("afterbegin", `<p>Цена: <span>${textPrice}</span></p>`)
    priceInfo.appendChild(priceInfoLast);
    cardFirstDiv.appendChild(priceInfo);
    cardFirstDiv.append(mountingInfo);
    card.append(cardFirstDiv, doorSpec);

    prevState = document.querySelector('.factory-discr');
    document.querySelector('.factory-discr').replaceWith(card);
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  }
  if (target.closest('.disc-open_btn-close')) {
    document.querySelector('.factory-discr-last').replaceWith(prevState);
    
    window.scrollTo(0, scrollState);
  }  
});

const logo = document.querySelector('.logo_link-img');
const headerInner = document.querySelector('.header_inner');
const contactTelsA = document.querySelector('.contact_tels-active');
const first = document.querySelector('.first');
/* 
function isVisible(elem) {
  if (elem.getBoundingClientRect().top < window.innerHeight*2) return true;
  return false;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;
    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
} */

// showVisible();

const factoryHover = document.querySelectorAll('[data-hover="hover"]');
for (let index = 0; index < factoryHover.length; index++) {
  const element = factoryHover[index];
  element.addEventListener('mouseenter', (e) => {
    element.classList.add('factory-hover');
  });
  element.addEventListener('mouseleave', (e) => {
    element.classList.remove('factory-hover');
  })
}

const deskMenu = document.querySelector('.desk-menu');

/* window.addEventListener('load', () => {
  if (document.URL.includes('door.html')) {
    deskMenu.classList.add('linked-door');
  };
}) */

// test
window.addEventListener('resize', () => {
  
})
// {<button class="disc-open_btn-close" type="button" aria-label="close"></button>}
// test
document.addEventListener('click', (event) => {
})