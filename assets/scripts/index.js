class HeaderScroll {
  constructor() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    const header = document.querySelector('header');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
    const menuList = document.querySelector('.nav__list');
    const header = document.querySelector('header');

    menuList.classList.toggle('nav__list--mobile');
    header.classList.add('header--scroll');
  }

  closeMenuHandler() {
    const menuList = document.querySelector('.nav__list');

    menuList.classList.remove('nav__list--mobile');
  }
}

class Modal {
  constructor() {
      const contactBtn = document.querySelector('.js-contact-btn');
      const backdrop = document.querySelector('.contact__modal-bg');
      const x = document.querySelector('.form__close');

      contactBtn.addEventListener('click', this.toggleModal);
      backdrop.addEventListener('click', this.toggleModal);
      x.addEventListener('click', this.toggleModal);
  }

  toggleModal(e) {
    e.preventDefault();
    const modal = document.querySelector('.contact__modal');
    modal.classList.toggle('hide');
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