class Layout {
  constructor() {
    this.wrapper = null;
  }

  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    return this.wrapper;
  }

  addSection(section) {
    this.wrapper.append(section);
  }

  refresh(selector, section) {
    const element = this.wrapper.querySelector(selector);

    element.remove();
    this.addSection(section);
  }
}

export { Layout as default };
