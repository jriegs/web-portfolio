import Header from './Header';

export default class MobileMenu extends Header {
  constructor() {
    super();
  }

  menuHandler() {
    const header = document.querySelector('header');
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');

    menuBtn.classList.toggle('nav__menu-icon--active');
    menuList.classList.toggle('nav__list--mobile');
    document.body.classList.toggle('no-scroll');

    if (!header.classList.contains('header--scroll')) {
      Header.addScroll();
    } else if (!menuBtn.classList.contains('nav__menu-icon--active') && document.documentElement.scrollTop < 10) {
      Header.removeScroll();
    }
    
  }

  closeMenu() {
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');

    menuBtn.classList.remove('nav__menu-icon--active');
    menuList.classList.remove('nav__list--mobile');
    document.body.classList.remove('no-scroll');
    if (document.documentElement.scrollTop < 10)
    Header.removeScroll();
  }

}