export default class Header {
  constructor() {
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');
    
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('load', this.scrollHandler);
    menuBtn.addEventListener('click', this.menuHandler);
    menuList.addEventListener('click', this.closeMenu);
  }

  static addScroll() {
    const header = document.querySelector('header');

    header.classList.add('header--scroll');
  }

  static removeScroll() {
    const header = document.querySelector('header');

    header.classList.remove('header--scroll');
  }

}