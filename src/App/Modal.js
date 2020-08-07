export default class Modal {
  constructor() {
      const contactBtn = document.querySelector('.js-contact-btn');
      const messageLink = document.querySelector('.js-contact-link');
      const backdrop = document.querySelector('.contact__modal-bg');
      const x = document.querySelector('.form__close');

      contactBtn.addEventListener('click', this.toggleModal.bind(this));
      messageLink.addEventListener('click', this.toggleModal.bind(this));
      backdrop.addEventListener('click', this.toggleModal.bind(this));
      x.addEventListener('click', this.toggleModal.bind(this));
  }

  emptyFields() {
    const formFields = document.querySelectorAll('.js-form-field');

    formFields.forEach(field => {
      field.value = '';
    });
  }

  toggleModal(e) {
    e.preventDefault();
    const modal = document.querySelector('.contact__modal');

    if (modal.classList.contains('hide')) {
      this.emptyFields();
    }
    modal.classList.toggle('hide');
    document.body.classList.toggle('no-scroll');
  }
  
}