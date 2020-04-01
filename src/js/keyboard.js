import keyCodes from './keyData';

class Keyboard {
  constructor(id = 'keyboard', lang = 'en', caps = false, shift = false) {
    this.button = null;
    this.main = null;
    this.id = id;
    this.lang = lang;
    this.caps = caps;
    this.shift = shift;
  }

  createButton() {
    this.button = (code) => {
      let buttonName = code.value;

      if (!code.value) {
        buttonName = code[this.lang].value;
      }

      if (!code.spec) {
        if (this.caps) {
          buttonName = buttonName.toUpperCase();
        }

        if (this.shift) {
          buttonName = code[this.lang]
            ? (code[this.lang].shift || buttonName.toUpperCase())
            : (code.en.shift || buttonName.toUpperCase());
        }
      }

      return (`
        <div class="${code.id} button">
          <span>${buttonName}</span>
        </div>
      `);
    };
  }

  changeLanguage() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
  }

  pressShift() {
    this.shift = !this.shift;
  }

  pressCapsLock() {
    this.caps = !this.caps;
  }

  init() {
    const html = keyCodes.map(this.button).join('');

    this.main = document.createElement('div');
    this.main.id = this.id;
    this.main.innerHTML = html;

    return this.main;
  }
}

export { Keyboard as default };
