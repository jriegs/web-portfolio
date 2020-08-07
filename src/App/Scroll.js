import Header from './Header';

export default class Scroll extends Header {
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