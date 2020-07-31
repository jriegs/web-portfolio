class HeaderScroll {
  constructor() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    const header = document.querySelector('header');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  }
}

class mobileMenu {
  constructor() {
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');

    menuBtn.addEventListener('click', this.menuHandler);
    menuList.addEventListener('click', this.closeMenuHandler);
  }

  menuHandler() {
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');
    const header = document.querySelector('header');

    menuBtn.classList.toggle('nav__menu-icon--active');
    menuList.classList.toggle('nav__list--mobile');
    header.classList.add('header--scroll');
    document.body.classList.toggle('no-scroll');
  }

  closeMenuHandler() {
    const menuBtn = document.querySelector('.js-menu');
    const menuList = document.querySelector('.nav__list');

    menuBtn.classList.remove('nav__menu-icon--active');
    menuList.classList.remove('nav__list--mobile');
    document.body.classList.remove('no-scroll');
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
    new HeaderScroll();
    new mobileMenu();
    new Modal();
  }
}

App.init();