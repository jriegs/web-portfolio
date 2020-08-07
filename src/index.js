import MobileMenu from './App/MobileMenu';
import Modal from './App/Modal';
import Scroll from './App/Scroll';

class App {
  constructor() {}

  static init() {
    new Scroll();
    new MobileMenu();
    new Modal();
  }
}

App.init();