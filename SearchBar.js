export default class SearchBar {
  constructor() {
    this.isOpen = false;
    this.close = this.close.bind(this);
    this.searchBar = document.querySelector('.search-bar');
    this.searchWrapper = document.querySelector('.search-wrapper');
    this.boxWrapper = document.querySelector('.box-wrapper');
  }

  toggle() {
    this.searchWrapper.classList.toggle('search-visiable');
    this.boxWrapper.classList.toggle('blur');

  }

  open() {
    if (!this.isOpen) {
      this.toggle();
      this.searchBar.addEventListener('blur', this.close);
      this.searchBar.focus();
      this.isOpen = true;
    }
  }

  reset() {
    this.searchBar.removeEventListener('blur', this.close);
    this.searchBar.value = '';
  }

  search() {
    if (this.searchBar.value !== '') {
      window.location = `https://duckduckgo.com/?q=${this.searchBar.value}`;
    }
  }

  close() {
    this.toggle()
    this.reset();
    this.isOpen = false;
  }
}
