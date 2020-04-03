import keyCodes from './keyData';

class Keyboard {
  constructor(id = 'keyboard', lang = 'en', caps = false, shift = false) {
    this.main = null;
    this.id = id;
    this.lang = lang;
    this.caps = caps;
    this.shift = shift;
  }

  changeLanguage() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
  }

  get isCapsLock() {
    return this.caps;
  }

  set isCapsLock(caps) {
    this.caps = caps;

    return this.caps;
  }

  get buttons() {
    const button = (code) => {
      const buttonName = code.value || code[this.lang].value;

      return (`
        <div class="${code.id} button">
          <span>${buttonName}</span>
        </div>
      `);
    };
    const buttons = keyCodes.map(button).join('');

    return buttons;
  }

  set buttons(option) {
    const { caps } = option;
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((btn, index) => {
      const button = btn.querySelector('span');

      if (!keyCodes[index].spec) {
        let buttonName = keyCodes[index].value || keyCodes[index][this.lang].value;

        if (caps) {
          buttonName = buttonName.toUpperCase();
        }

        button.textContent = buttonName;
      }
    });
  }

  render() {
    this.main = document.createElement('div');
    this.main.id = this.id;
    this.main.innerHTML = this.buttons;

    return this.main;
  }
}

export { Keyboard as default };
