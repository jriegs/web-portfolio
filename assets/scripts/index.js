class Modal {
  constructor() {
      const contactBtn = document.querySelector('.contact__btn');
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
      new Modal();
  }
}

App.init();