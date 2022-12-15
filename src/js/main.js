'use strict'

const menuOpen = document.querySelector('.menu-open');
const aboutBtn = document.querySelector('.about_btn');
const aboutArticle = document.querySelector('.about_article');
const factory = document.querySelector('.factory');
const factoryDiscr = document.querySelectorAll('.factory-discr');
const btnDisFac = document.querySelectorAll('.btn-dis-fac');
const factoryDiscrDoor = document.querySelectorAll('.factory-discr-door');
const discOpen = document.querySelectorAll('.disc-open');
const header = document.querySelector('header');
const mainContact = document.querySelector('.main-contact');
const factoryDiscrDoorsContainer = document.querySelectorAll('.factory-discr-doors-container');
let factoryDiscrOpen;
let discOpenContainer;
let prevState;

const spec = document.querySelector('.spec');

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
    console.log(true);
  }
  if (target.closest('.modal-img span')) {
    document.querySelector('.modal-img').hidden = true;
    document.querySelector('.modal-img-scale').src = '';
    document.querySelector('.caption-img').textContent = '';
  }
  /* if (target.closest('.fact-open-desc')) {
    factoryDiscrOpen.hidden = true;
    for (let index = 0; index < factoryDiscrDoorsContainer.length; index++) {
      const element = factoryDiscrDoorsContainer[index];
      if (element.dataset.model === target.dataset.model) {
        element.hidden = false;
        discOpenContainer = element;
        break;
      };
    };
  } */
  if (target.closest('.disc-open_btn-close')) {
    discOpenContainer.hidden = true;
    discOpenContainer = null;
    factoryDiscrOpen.hidden = false;
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

// test
