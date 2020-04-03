import Keyboard from './js/Keyboard';
import Layout from './js/Layout';
import './styles/base.scss';

const layout = new Layout();
const keyboard = new Keyboard();
const textarea = document.createElement('textarea');

textarea.classList.add('textarea');

function pressSpecialButton(button, option) {
  const { isCapsLock } = option;
  switch (button) {
    case 'caps lock':
      keyboard.buttons = { caps: isCapsLock };
      break;

    default:
      break;
  }
}

function pressButton(button) {
  switch (button) {
    case 'ctrl':
    case 'alt':
    case 'backspace':
    case 'del':
    case 'tab':
    case 'shift':
    case 'caps lock':
      textarea.value += '';
      break;

    case 'enter':
      textarea.value += '\n';
      break;

    default:
      textarea.value += button;
      break;
  }
}

function changeActiveState(event) {
  event.preventDefault();

  const { code } = event;
  const eventType = event.type;
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((btn) => {
    const content = btn.querySelector('span').textContent;

    if (btn.classList.contains(code)) {
      switch (eventType) {
        case 'keydown':
          pressButton(content);

          if (!btn.classList.contains('active')) {
            btn.classList.add('active');
            pressSpecialButton(content, { isCapsLock: !keyboard.isCapsLock });
          }
          break;

        case 'keyup':
          if (!(keyboard.isCapsLock && btn.classList.contains('CapsLock'))) {
            btn.classList.remove('active');
          }

          keyboard.isCapsLock = !keyboard.isCapsLock;
          break;

        default:
          break;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(layout.render());
  layout.addSection(textarea);
  layout.addSection(keyboard.render());
});
document.addEventListener('keydown', (event) => {
  changeActiveState(event);
});
document.addEventListener('keyup', (event) => {
  changeActiveState(event);
});
