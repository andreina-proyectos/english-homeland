'use strict';
const burguerMenu = document.querySelector('.burguer-menu');
const headerNav = document.querySelector('.header__nav');



function handlerBurguerMenuClick() {
  headerNav.classList.toggle('header__nav-fade-in');
}

burguerMenu.addEventListener('click', handlerBurguerMenuClick);


