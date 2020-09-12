import Header from './Header';

export default class Scroll extends Header {
  constructor() {
    super();
  }

  scrollHandler() {
    const scrollContainer = document.querySelector('.scroll-container');

    if (scrollContainer.scrollTop > 10) {
      Header.addScroll();
    } else {
      Header.removeScroll();
    }
  }

}