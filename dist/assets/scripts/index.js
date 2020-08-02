class Header {
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

class Scroll extends Header {
  constructor() {
    super();
  }

  scrollHandler() {
    if (document.documentElement.scrollTop > 10) {
      Header.addScroll();
    } else {
      Header.removeScroll();
    }
  }

}

class mobileMenu extends Header {
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

class Modal {
  constructor() {
      const contactBtn = document.querySelector('.js-contact-btn');
      const messageLink = document.querySelector('.js-contact-link');
      const backdrop = document.querySelector('.contact__modal-bg');
      const x = document.querySelector('.form__close');

      contactBtn.addEventListener('click', this.toggleModal);
      messageLink.addEventListener('click', this.toggleModal);
      backdrop.addEventListener('click', this.toggleModal);
      x.addEventListener('click', this.toggleModal);
  }

  toggleModal(e) {
    e.preventDefault();
    const modal = document.querySelector('.contact__modal');
    modal.classList.toggle('hide');
    document.body.classList.toggle('no-scroll');
  }
  
}

class App {
  constructor() {}

  static init() {
    new Scroll();
    new mobileMenu();
    new Modal();
  }
}

App.init();