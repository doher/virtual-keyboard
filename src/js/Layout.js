class Layout {
  constructor() {
    this.wrapper = null;
  }

  addSection(section) {
    this.wrapper.append(section);
  }

  render() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    return this.wrapper;
  }
}

export { Layout as default };
